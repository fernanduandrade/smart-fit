<script lang="ts" setup>
import Header from '../../common/components/Header.vue';
import Form from '../components/Form.vue'
import Info from '../components/Info.vue';
import Card from '../components/Card.vue'
import Footer from '../../common/components/Footer.vue'
import { ref } from 'vue';
import { Location } from '../types';
const units = ref<Location[]>([])


function updateUnit(evt: Location[]) {
  units.value = evt
}
</script>

<template>
  <Header />
  <Form @update-units="updateUnit" />
  <Info />
  <section class="units">
    <div class="units__result" v-for="(unit, index) in units" :key="index">
      <Card :location="unit" />
    </div>
  </section>
  <Footer />
</template>

<style scoped>
.units {
  padding: 48px 60px 48px 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
}
</style>