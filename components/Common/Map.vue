<template>
  <LMap style="height: 350px" :zoom="6" :center="[41.311151, 69.279737]">
    <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&amp;copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
        layer-type="base"
        name="OpenStreetMap"
    />

    <LMarker :lat-lng="[41.260491, 69.358610]">
      <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
    </LMarker>
    <LMarker :lat-lng="[40.154665, 65.144495]">
      <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
    </LMarker>
    <LMarker :lat-lng="[39.139957, 66.886249]">
      <LIcon :icon-url="iconUrl" :icon-size="iconSize" />
    </LMarker>
    <LControlZoom position="topright" />
  </LMap>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

onMounted(() => {
  import('leaflet')
})

const iconWidth = ref(21);
const iconHeight = ref(42);



const iconUrl = computed(() => `/logo1.svg`);
const iconSize = computed(() => [iconWidth.value, iconHeight.value]);

const changeIcon = () => {
  iconWidth.value += 1;
  if (iconWidth.value > iconHeight.value) {
    iconWidth.value = Math.floor(iconHeight.value / 2);
  }
};


const factoryImage = '/images/factory.svg';
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
.leaflet-marker-icon {
  width: 40px !important;
}
</style>