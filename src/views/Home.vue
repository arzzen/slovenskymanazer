<template>
  <div class="home">
    <MainSlogan msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainSlogan from "@/components/MainSlogan.vue";

export default {
  name: "Home",
  components: {
    MainSlogan
  },
  head: {
    title: {
      inner: "Najlepšie výroky a citáty slovenských manažérov"
    }
  }
};
</script>
