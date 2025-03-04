<template>
  <LMap style="height: 350px" :zoom="6" :center="[41.311151, 69.279737]">
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
    />

    <LMarker :lat-lng="[40.103107, 65.373996]">
      <LIcon :icon-url="`https://zixx.uz/images/yootheme/logo_blue.png`" :icon-size="iconSize" />
    </LMarker>
    <LMarker :lat-lng="[41.319542, 69.261995]">
      <LIcon :icon-url="`https://zixx.uz/images/yootheme/logo_blue.png`" :icon-size="iconSize" />
    </LMarker>
    <LMarker :lat-lng="[41.311550, 69.223170]">
      <LIcon :icon-url="`https://zixx.uz/images/yootheme/logo_blue.png`" :icon-size="iconSize" />
    </LMarker>
  </LMap>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  import('leaflet')
})

const iconWidth = ref(21);
const iconHeight = ref(42);

const iconUrl = computed(() => `https://zixx.uz/images/yootheme/logo_blue.png`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const changeIcon = () => {
  iconWidth.value += 1;
  if (iconWidth.value > iconHeight.value) {
    iconWidth.value = Math.floor(iconHeight.value / 2);
  }
};
</script>

<style>
.leaflet-div-icon {
  background: steelblue;
  color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  font-weight: bold;
  font-size: large;
  text-align: center;
  line-height: 21px;
}
</style>