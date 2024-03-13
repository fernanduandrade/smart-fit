<template>
  <header>
    <div class="header__logo">
      <img src="../../assets/logo.svg" alt="Logo">
    </div>
    <div class="header__container">
      <h1 class="header__heading">Reabertura smart fit</h1>
      <div class="rect"></div>
      <p class="header__description">O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>
    </div>
    
  </header>
</template>

<style scoped>
header {
  width: 100vw;
  
}

.header__logo {
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 24px;
}

.header__logo img {
  height: 100%;
}

.header__heading {
  text-transform: uppercase;
  color: var(--dark-grey);
  font-weight: bold;
  width: 10%;
}

.header__description {
  width: 80%;
  color: var(--dark-grey);
  font-weight: 400;
}

.header__container {
  padding: 48px 60px 48px 60px;
}
.rect {
  height: 11px;
  background-color: #333;
  width: 70px;
}

@media (max-width: 600px) {
  .header__heading {
    width: 100%;
  }
  
}
</style>