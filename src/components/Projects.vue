<template>
  <header>
    <h1>Project Highlights</h1>
  </header>
  <main class="grid-container">
    <article class="highlights">
      <img
        src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940"
        alt="Netflix Logo"
      />
      <div>
        <h2>Netflix</h2>
        <p>
          At Netflix, we want to entertain the world. Whatever your taste, and no matter where
          you live, we give you access to best-in-class TV series, documentaries, feature films
          and mobile games. Our members control what they want to watch, when they want it, in
          one simple subscription. We’re streaming in more than 30 languages and 190 countries,
          because great stories can come from anywhere and be loved everywhere. We are the
          world’s biggest fans of entertainment, and we’re always looking to help you find your
          next favorite story.
        </p>
      </div>
    </article>
    <article>
      <img
        src="https://www.nasa.gov/sites/default/files/styles/side_image/public/thumbnails/image/nasa-logo-web-rgb.png?itok=uDhKST"
        alt="Nasa Logo"
      />
      <div>
        <h3>Nasa</h3>
        <p>
          The National Aeronautics and Space Administration is America’s civil space program
          and the global leader in space exploration.
        </p>
      </div>
    </article>
    <article>
      <img
        src="https://images.ctfassets.net/8j5aqoy0ts8s/4jySPaEh2mr01RvfkuQoKf/4fe9e1602b683afb023d7a475f19bda1/logo-guideline-2_2x_170912_043411.png"
        alt="Atlassian Logo"
      />
      <div>
        <h3>Atlassian</h3>
        <p>
          Atlassian is an Australian software company that develops products for software
          developers, project managers and other software development teams.
        </p>
      </div>
    </article>
    <article>
      <img
        src="https://www.travelweekly.com.au/wp-content/uploads/2020/08/Aeronology.png"
        alt="article img"
      />
      <div>
        <h3>Aeronology</h3>
        <p>
          Aeronology has created the world’s best full service ‘Point of Sale’ travel booking
          platform. Our booking model is created for Travel Advisors, Universities, Government
          and Corporate Organisations.
        </p>
      </div>
    </article>
  </main>
</template>

<script>
export default {
  name: 'Projects',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul,
li {
  padding: 0;
  list-style-type: none;
}
h1,
h2,
h3 {
  color: #000031;
}
p {
  color: #000031;
}

header {
  max-width: 1200px;
  margin: 40px auto;
  border-bottom: 1px solid #101616;
}
.grid-container {
  display: grid;
  gap: 50px;
  margin: 20px auto;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
}
article.highlights {
  grid-column: span 3;
  align-items: center;
  border-bottom: 1px solid #bbc7c7;
  padding-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
}
article img,
article.highlights img {
  width: 100%;
  border: 4px solid #fff;
  border-radius: 8px;
}
article p,
.article h3 {
  margin: 20px 10px;
}

/* responsive */
@media screen and (max-width: 980px) {
  article {
    grid-column: span 3;
    gap: 60px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
}

@media screen and (max-width: 760px) {
  article,
  article.highlights {
    display: block;
    margin: 0 20px;
  }
}
</style>
