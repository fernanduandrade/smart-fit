<script lang="ts" setup>
import VButton from '../../common/components/VButton.vue'
import { onMounted, ref } from 'vue'
import { useAppointments } from '../../composables/useAppointments';
import { Location } from '../types/index'

const emit = defineEmits(['updateUnits'])

const closedFilter = ref(true)
const pickedFilter = ref('')
const units = ref<Location[]>([])

async function filterUnits() {
  const { value } = await useAppointments(pickedFilter.value,  closedFilter.value)
  units.value = value
  emit('updateUnits', units.value)
}

onMounted(async () => {
  const { value } = await useAppointments('', true)
  units.value = value
  emit('updateUnits', units.value)
})

function clearFilter() {
  pickedFilter.value = ''
  closedFilter.value = false
}
</script>
<template>
  <form class="wrapper" @submit.prevent="filterUnits">
    <div class="form">
      <div class="form__heading">
        <img class="form__icon" src="../../assets/icon-hour.png" alt="Icon">
        <span class="form__heading--text">Horário</span>
      </div>
      <p class="form__text">Qual período quer treinar?</p>
      <div class="divider"></div>
      <div class="form__group">
        <div class="form__group--input">
          <input type="radio" name="manhã" v-model="pickedFilter" value="morning">
          <label for="manhã">Manhã</label>
        </div>
        <span class="form__group--legend">06:00 às 12:00</span>
      </div>

      <div class="divider"></div>

      <div class="form__group">
        <div class="form__group--input">
          <input type="radio" name="manhã" v-model="pickedFilter" value="afternoon">
          <label for="manhã">Tarde</label>
        </div>
        <span class="form__group--legend">12:01 às 18:00</span>
      </div>

      <div class="divider"></div>

      <div class="form__group">
        <div class="form__group--input">
          <input type="radio" name="manhã" v-model="pickedFilter" value="night">
          <label for="manhã">Noite</label>
        </div>
        <span class="form__group--legend">18:01 às 23:00</span>
      </div>

      <div class="divider"></div>

      <div class="form__option">
        <div class="form__option__group">
          <input type="checkbox" v-model="closedFilter">
          <span> Exibir unidades fechadas</span>
        </div>

        <div class="form__option__group">
          Resultados encontrados: <strong>{{ units.length }}</strong>
        </div>
      </div>

      <div class="form__buttons">
        <VButton>encontrar unidades</VButton>
        <VButton :primary="false" @click="clearFilter">limpar</VButton>
      </div>
    </div>
  </form>
</template>

<style scoped>
.wrapper {
  padding: 48px 60px 48px 60px;
  border-radius: 6px;
}

.form {
  padding: 20px;
  border-radius: 4px;
  border: 0.2px solid #EDEDED;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}

.form__option {
  margin: 20px;
  display: flex;
  justify-content: space-between;
}

@media (max-width: 600px) {
  .form__option {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  .form__buttons {
    flex-direction: column;
    gap: 5px
  }

  .form__option__group {
    justify-content: flex-start;
    align-items: center;
  }
}

.form__buttons {
  margin-top: 10px;
  display: flex;
  gap: 20px;
  justify-content: center;
}

.form__option__group {
  display: flex;
  gap: 8px;
}

.form__icon {
  height: 35px;
  width: 35px
}

.form__text {
  color: var(--light-grey);
  font-size: 24px;
}

.form__heading--text {
  color: var(--light-grey);
  font-size: 14px;
}

.form__heading {
  display: flex;
  gap: 10px;
  align-items: center;
}
.divider {
  border: 0.1px solid #C2C2C2;
}

.form__group {
  padding: 8px;
  display: flex;
  justify-content: space-between;
}

.form__group--input {
  color: var(--light-grey);
}

.form__group--legend {
  color: var(--light-grey);
}
</style>