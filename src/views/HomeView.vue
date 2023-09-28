<template>
  <div class="home">
    <div class="section main">
      <h1>Kenneth Baker</h1>
      <p>SIT120 Portfolio Website for Task 3.1P.</p>
    </div>
    <div class="section intro">
      <div class="text">
        <h2>About Me</h2>
        <p>
          Experienced manager, web developer and business analyst adept in all stages of the
          software development life-cycle from collaborating with stakeholders to build
          exciting concepts through to documenting business requirements, converting
          requirements into high quality code, testing and deployment.
        </p>
      </div>
      <img src="../assets/main.jpg" alt="main image" />
    </div>
  </div>
</template>

<style scoped>
.home {
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  background: #000031;
  min-height: 90vh;
}
.section {
  display: grid;
  grid-template-columns: 1fr;
}
.section .text {
  background: #eeeee7;
  color: #000031;
  padding: 30px 60px;
}

/* main section */
.section.main {
  padding: 0px 60px;
  grid-auto-rows: 1fr;
}
.section.main nav a {
  color: #a8a8a8;
  text-decoration: none;
  margin-right: 20px;
}
.section.main p {
  color: #a8a8a8;
  max-width: 520px;
  line-height: 2em;
}
.section.main h1 {
  color: #eeeee2;
  font-size: 3em;
}
.section.main footer {
  align-self: end;
}

h1 {
  margin: 0;
}

/* intro section */
.section.intro {
  grid-template-rows: 0.5fr;
  overflow: hidden;
}
.section.intro img {
  max-height: 100%;
  min-width: 100%;
}
@media screen and (max-width: 960px) {
  .home {
    grid-template-columns: 1fr;
  }
  .section.intro {
    grid-column: span 2;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-self: end;
  }
  .section img {
    width: 100%;
  }
}
@media screen and (max-width: 680px) {
  .home {
    grid-template-rows: 2fr 4fr;
  }
  .section.intro {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }

  .section img {
    width: 100%;
  }
}
</style>
