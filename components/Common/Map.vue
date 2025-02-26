<template>
  <div class="relative">
    <yandex-map
        v-model="map"
        :settings="{
        location: {
          center: center,
          zoom: 17,
        },
        behaviors: BEHAVIOR,
      }"
        cursor-grab
        :width="width"
        :height="height"
    >
      <yandex-map-default-scheme-layer />
      <yandex-map-default-features-layer />
      <div v-if="!noZoom">
        <yandex-map-controls :settings="{ position: 'right' }">
          <yandex-map-zoom-control />
        </yandex-map-controls>
      </div>
      <div v-if="!noGeoLocation">
        <yandex-map-controls :settings="{ position: 'right bottom' }">
          <yandex-map-geolocation-control />
        </yandex-map-controls>
      </div>
      <yandex-map-clusterer
          v-if="withCluster"
          v-model="cluster"
          :grid-size="2 ** gridSize"
          zoom-on-cluster-click
      >
        <yandex-map-marker
            v-for="(marker, index) in markers"
            :key="index"
            :settings="marker"
            @click="setLocation(marker)"
        >
          <slot name="marker" :marker="marker" />
        </yandex-map-marker>

        <template #cluster="{ length }">
          <div class="cluster">
            {{ length }}
          </div>
        </template>
      </yandex-map-clusterer>
      <yandex-map-marker
          v-else
          :settings="{
          coordinates: selectedCords?.length ? selectedCords : center,
        }"
      >
        <div
            class="relative w-14 h-14 flex-y-center flex-x-center cursor-pointer -translate-x-1/2 -translate-y-1/2"
            @click="setLocation({ coordinates: center }, true)"
        >
          <img
              src="/public/images/ellipse-contact.svg"
              alt="pin"
              class="absolute w-14 z-0 bottom-1/2"
          />
          <div
              class="absolute z-10 -top-1/2 bg-white rounded-full border border-white w-5 h-5 p-1 mt-2"
          ></div>
        </div>
      </yandex-map-marker>
      <yandex-map-listener
          :settings="{
          onClick: createEvent('dom', 'click'),
        }"
      />
    </yandex-map>
    <div class="container absolute bottom-8 z-10 w-full px-3">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, defineProps, defineEmits, shallowRef } from 'vue';
import type { BehaviorType, YMap, YMapMarkerProps } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapClusterer,
  YandexMapControls,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  YandexMapDefaultSchemeLayer,
  YandexMapGeolocationControl,
  YandexMapListener,
  YandexMapMarker,
  YandexMapZoomControl,
} from 'vue-yandex-maps'

interface Props {
  markers: YMapMarkerProps[]
  width: string
  height: string
  center: number[]
  noZoom?: boolean
  noGeoLocation?: boolean
  staticMarker?: boolean
  withCluster?: boolean
}

const props = defineProps<Props>()

const map = shallowRef<YMap | null>(null)
const BEHAVIOR: BehaviorType[] = [
  'drag',
  'scrollZoom',
  'dblClick',
  'mouseRotate',
  'mouseTilt',
  'pinchZoom',
]

const emit = defineEmits(['centerClick', 'selectedCords'])

const selectedCords = ref<number[]>([])


function setLocation(marker: YMapMarkerProps, isCenter?: boolean) {
  if (isCenter) {
    emit('centerClick')
  }
  map.value?.setLocation({
    center: marker?.coordinates,
    zoom: 17,
    duration: 400,
  })
}
const events = reactive({
  map: {
    update: false,
    resize: false,
  },
  dom: {
    click: false,
    fastClick: false,
    dblClick: false,
    contextMenu: false,
    rightDblClick: false,
    mouseMove: false,
    mouseEnter: false,
    mouseLeave: false,
    mouseUp: false,
    mouseDown: false,
  },
  behavior: {
    scrollZoom: false,
    drag: true,
    mouseRotate: false,
    mouseTilt: false,
  },
})

function debounce<T extends Function>(
    func: T,
    delay: number
): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  return function _(this: any, ...args: any[]): void {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

const createEvent = <
    T extends keyof typeof events,
    E = keyof (typeof events)[T]
>(
    category: T,
    type: E | boolean
): any => {
  const eventState = events[category] as any

  if (typeof type !== 'boolean') {
    const endEvent = debounce(() => {
      eventState[type] = false
    }, 250)

    return (object: Record<string, any>, event?: any) => {
      if (props.staticMarker) return

      selectedCords.value = event?.coordinates

      emit('selectedCords', event?.coordinates)

      eventState[type] = true
      endEvent()
    }
  }
  return (object: Parameters<never>[0]) => {
    if (!(object?.type in events.behavior)) return

    eventState[object?.type] = type
  }
}
// MAP
const cluster = shallowRef(null)
const count = ref(500)
const savedCount = ref(500)
const gridSize = ref(6)

watch(count, (val) => {
  const oldVal = val
  setTimeout(() => {
    if (oldVal !== count.value) return
    savedCount.value = val
  }, 300)
})

onMounted(() => {
  if (map.value) {
    map.value.setCenter(props.center);
  }
})

watch(() => props.center, (newCenter) => {
  if (map.value) {
    map.value.setCenter(newCenter);
  }
}, { deep: true });

</script>

<style scoped>
.cluster {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background: green;
  color: #fff;
  border-radius: 100%;
  cursor: pointer;
  border: 2px solid limegreen;
  outline: 2px solid green;
}
</style>