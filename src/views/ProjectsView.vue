<template>
  <div class="home">
    <Projects msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Projects from '@/components/Projects.vue'

export default {
  name: 'ProjectsView',
  components: {
    Projects,
  },
}
</script>
