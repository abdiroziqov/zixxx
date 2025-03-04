<template>
  <div>

      <client-only>
        <yandex-map
            v-model="activeCoord"
            :coords="coords"
            :settings="settings"
            :zoom="16"
            :controls="[]"
            class="w-full h-full absolute inset-0"
        >
          <ymap-marker
              v-for="(card, i) in markers"
              :key="i"
              :coords="card"
              marker-id="123"
              :hint-content="card?.name"
              :icon="markerIcon"
              cluster-name="1"
          />
        </yandex-map>
      </client-only>
  </div>
</template>

<script setup lang="ts">

import { yandexMap, ymapMarker } from "vue-yandex-maps";
import type { ICommonDataResponse } from "~/types/common";

const { t } = useI18n();
const isBlock = ref(true);


const settings = {
  apiKey: "",
  lang: "ru_RU",
  coordorder: "latlong",
  version: "2.1",
};
const markerIcon = {
  layout: "default#imageWithContent",
  imageHref: "/images/blue-map-marker.svg",
  imageSize: [75, 75],
  imageOffset: [0, 0],
  content: "",
  contentOffset: [0, 15],
  contentLayout: "",
};
const loading = ref(false);
const limit = ref(10);
const offset = ref(0);
const people = ref([]);
const markers = ref([]);
const total = ref(0);
const totalData = ref(0);
const searchPeople = ref("");
const map = ref();
const target = ref(null);
const targetIsVisible = ref(false);
const markerOptions = computed(() => {
  let lat = Number(people.value?.at(0)?.location?.split(";")[0]);
  let lng = Number(people.value?.at(0)?.location?.split(";")[1]);

  return { position: { lat, lng }, icon: "/images/home-map-marker.svg" };
});
const coords = ref([12.3456, 15.6544]);
// const coords = ref<{ lat?: number; lng?: number; location?: number }>({});
const activeCoord = ref<{ lat?: number; lng?: number; location?: number }>({});
const activeTab = ref("map");
const tabs = reactive([
  {
    value: "map",
    label: t("map"),
  },
  {
    value: "list",
    label: t("list"),
  },
]);

interface Props {
  contact?: {
    id: number;
    title: string;
    address: string;
    emails: [string];
    phones: [string];
    latitude: string;
    longitude: string;
    youtube: string;
    instagram: string;
    telegram: any;
    twitter: string;
  };
  title?: string;
}

withDefaults(defineProps<Props>(), {});
function handleCtrl(event){
  console.log(event)

}

// FETCH

onMounted(async () => {
  document.addEventListener('keydown',toogleBlock)
  document.addEventListener('keyup',toggleHidden)
  await useApi()
      .$get<ICommonDataResponse<any>>(`v1/catalog/OrganizationCenters/`, {
        params: {
          limit: limit.value,
          offset: offset.value,
        },
      })
      .then((res) => {
        totalData.value = res?.count;
        total.value = res?.count;
        people.value = res?.results;
        res?.results?.forEach((el: any) => {
          markers.value.push(el?.location.split(";"));
          coords.value = el?.location.split(";");
        });
        activeCoord.value.location = people.value?.at(0)?.location;
      })
      .finally(() => {
        setTimeout(() => {
          isLoading.value = false;
        }, 400);
      });
});

// FETCH MORE

const { stop } = useIntersectionObserver(target, ([{ isIntersecting }]) => {
  targetIsVisible.value = isIntersecting;
});

watch(
    () => targetIsVisible.value,
    () => {
      if (targetIsVisible.value) {
        getMorePeople();
      }
    }
);

function getMorePeople() {
  offset.value += limit.value;
  useApi()
      .$get(`v1/catalog/OrganizationCenters/?search=${searchPeople.value}`, {
        params: {
          limit: limit.value,
          offset: offset.value,
        },
      })
      .then((res) => {
        setTimeout(() => {
          res?.results?.forEach((el: any) => {
            people.value.push(el);
          });
        }, 400);
      });
}

// SEARCH

useDebounce(searchPeople, 10);

watch(searchPeople, (newQuery) => {
  debounce("search", () => {
    isLoading.value = true;
    offset.value = 0;
    useApi()
        .$get(`v1/catalog/OrganizationCenters/`, {
          params: {
            limit: limit.value,
            offset: offset.value,
            search: newQuery,
          },
        })
        .then((res) => {
          total.value = res?.count;
          people.value = res?.results;
        })
        .finally(() => {
          setTimeout(() => {
            isLoading.value = false;
          }, 300);
        });
  });
});

// GET COORDS
function zoomMap(item: any, mobile?: boolean) {
  coords.value = item?.location?.split(";");
  // coords.value.lat = Number(item?.location?.split(";")[0]);
  // coords.value.lng = Number(item?.location?.split(";")[1]);
  activeCoord.value = coords.value;
  if (mobile) {
    activeTab.value = "map";
  }
}

const clearSearch = () => {
  searchPeople.value = "";
};
</script>

<style>
.list-active-enter-active,
.list-active-leave-active,
.map-active-enter-active,
.map-active-leave-active {
  transition: all 0.3s ease-out;
}

.list-active-enter-from {
  transform: translateX(50%);
  opacity: 0;
}

.list-active-leave-to {
  transform: translateX(-50%);
  opacity: 0;
}

.map-active-enter-from {
  transform: translateX(-50%);
  opacity: 0;
}

.map-active-leave-to {
  transform: translateX(50%);
  opacity: 0;
}
</style>
