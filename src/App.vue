<template>
  <header class="grid">
    <h2>Kenneth Baker Portfolio</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/projects">Projects</router-link>
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1kCKZIHg1rymQRycu4_eCBTugrN5_vZGE/view?usp=sharing"
        >CV</a
      >
      <router-link to="/demo">Vue Demo</router-link>
    </nav>
  </header>
  <router-view />
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  background: #eeeee7;
}
header {
  padding: 5px 30px;
  background: white;
  align-items: center;
  gap: 30px;
  height: 10vh;
}

main {
  min-height: 90vh;
}

header h2 {
  grid-column: span 6;
  margin: 0;
}

header nav {
  grid-column: 7 / span 6;
  list-style-type: none;
  justify-self: end;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-left: 15px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}

@media screen and (max-width: 680px) {
  h2 {
    display: none;
  }

  header nav {
    grid-column: 1 / span 12;
    list-style-type: none;
    justify-self: start;
  }
}
</style>
