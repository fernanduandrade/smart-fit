<template>
  <section class="container">
    <div class="info__services">
      <div class="info__service">
        <span class="service__type">Máscara</span>
        <div class="service__options">
          <div class="service__option">
            <img width="60" height="60" src="../../assets/required-mask.png" alt="Mask">
            <span>Obrigatório</span>
          </div>
          <div class="service__option">
            <img width="60" height="60" src="../../assets/recommended-mask.png" alt="Mask">
            <span>Recomendado</span>
          </div>
        </div>
      </div>
      <div class="info__service">
        <span class="service__type">Toalha</span>
        <div class="service__options">
          <div class="service__option"> 
            <img width="60" height="60" src="../../assets/required-towel.png" alt="Towel">
            <span>Obrigatório</span>
          </div>
          <div class="service__option">
            <img width="60" height="60" src="../../assets/recommended-towel.png" alt="Towel">
            <span>Recomendado</span>
          </div>
        </div>
      </div>
      <div class="info__service">
        <span class="service__type">Bebedouro</span>
        <div class="service__options">
          <div class="service__option">
            <img width="60" height="60" src="../../assets/partial-fountain.png" alt="Fountain">
            <span>Parcial</span>
          </div>
          <div class="service__option">
            <img width="60" height="60" src="../../assets/forbidden-fountain.png" alt="Fountain">
            <span>Proibido</span>
          </div>
        </div>
      </div>
      <div class="info__service">
        <span class="service__type">Vestiários</span>
        <div class="service__options">
          <div class="service__option">
            <img width="60" height="60" src="../../assets/required-lockerroom.png" alt="Locker Room">
            <span>Liberado</span>
          </div>
          <div class="service__option">
            <img width="60" height="60" src="../../assets/partial-lockerroom.png" alt="Locker Room">
            <span>Parcial</span>
          </div>
          <div class="service__option">
            <img width="60" height="60" src="../../assets/forbidden-lockerroom.png" alt="Locker Room">
            <span>Fechado</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>

.container {
  border-radius: 4px;
  padding: 58px 60px 48px 58px;
}

.info__services {
  padding: 10px;
  background-color: #F5F5F5;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
}

@media (max-width: 600px) {
  .info__services {
    flex-direction: column;
  }
}

.info__service {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.service__type {
  font-size: 18px;
  font-weight: 700;
}

.service__options {
  display: flex;
  gap: 10px;
}

.service__option {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>