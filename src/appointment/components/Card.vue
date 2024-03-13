<script lang="ts" setup>
import type { Location } from '../types/index'
import { PropType } from 'vue'

defineProps({
  location: {
    type: Object as PropType<Location>,
    required: true
  }
})


function getServicePermission(serviceType: string, status: string) {
  const services: { [key: string]: { [key: string]: string }; } = {
    'mask': {
      'recommended': './src/assets/recommended-mask.png',
      'required': './src/assets/required-mask.png'
    },
    'towel': {
      'recommended': './src/assets/recommended-mask.png',
      'required': './src/assets/required-mask.png'
    },
    'fountain': {
      'not_allowed': './src/assets/forbidden-fountain.png',
      'partial': './src/assets/partial-fountain.png'
    },
    'locker_room': {
      'allowed': './src/assets/required-lockerroom.png',
      'closed': './src/assets/forbidden-lockerroom.png',
      'partial': './src/assets/partial-lockerroom.png'
    }
  }
  
  return services[serviceType][status]
}

</script>

<template>
  <main class="container">
    <p :class="`appointment__status${location.opened ? '--opened' : '--closed'}`">{{ location.opened ? 'Aberto' : 'Fechado' }}</p>
    <span class="appointment__local">{{ location.title }}</span>
    <p class="appointment__address" v-html="location.content"></p>
    <div class="appointments" v-if="location.opened">
      <div class="divider"></div>
      <section class="appointment__services">
        <img class="appointment__services--image" :src="getServicePermission('mask', location.mask)" alt="Mask img">
        <img class="appointment__services--image" :src="getServicePermission('towel', location.towel)" alt="Towel img">
        <img class="appointment__services--image" :src="getServicePermission('fountain', location.fountain)" alt="Fountain img">
        <img class="appointment__services--image" :src="getServicePermission('locker_room', location.locker_room)" alt="Locker Room img">
      </section>
      <section class="appointment__avaliable_time">
        <div class="appointment__time" v-for="(info, index) in location.schedules" :key="index">
          <span class="appointment__time--week">{{ info.weekdays }}</span>
          <span class="appointment__time--hour">{{ info.hour }}</span>
        </div>
      </section>
    </div>
  </main>
</template>


<style scoped>
.container {
  background-color: #F5F5F5;
  border-radius: 9px;
  padding: 10px 20px 10px 20px;
  width: 280px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  min-height: 550px;
  margin-bottom: 20px;
}

.appointments {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.appointment__local {
  font-size: 30px;
  font-weight: bold;
  color: #333;
}

.appointment__address {
  color: #C2C2C2;
  font-weight: 400;
}

.appointment__status--opened {
  color: var(--green);
  font-size: 18px;
  font-weight: bold;
}

.appointment__status--closed {
  color: var(--red);
  font-size: 18px;
  font-weight: bold;
}

.appointment__services {
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  gap: 2px;
}

.appointment__services--image {
  width: 50px;
  height: 50px;
}

.appointment__avaliable_time {
  display: flex;
  flex-wrap: wrap;
}

.appointment__time {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 130px;
  gap: 13px;
}

.appointment__time--week {
  color: #333;
  font-size: 26px;
  font-weight: bold;
}

.appointment__time--hour {
  color: black;
}

.divider {
  border: 0.1px solid #C2C2C2;
}
</style>