<template>
  <footer>
    <div class="container">
      <img src="../../assets/logo.svg" alt="Logo">
      <span>Todos os direitos reservados - {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100vw; 
  background-color: #333;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  justify-content: center;
  align-items: center;
}

@media (max-width: 600px) {
  footer {
    width: 100%;
  }
  .container {
    padding: 10px;
  }
}

.container img {
  width: 100px;
  height: 100%;
}

.container span {
  color: #fff;
  font-size: 18px;
}
</style>