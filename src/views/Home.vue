<template>
  <div class="home">
    <keep-alive>
    <p class="loading" v-if="loading">loading..</p>
    <MainSlogan v-bind:author="author" v-bind:message="message" />
    </keep-alive>
  </div>
</template>

<script>
import MainSlogan from "@/components/MainSlogan.vue";
import SloganApi from "@/services/api/Slogan";
import EventBus from "@/services/EventBus";

export default {
  name: "Home",
  components: {
    MainSlogan
  },
  data: function() {
    return {
      loading: true,
      author: "",
      message: "",
      title: "Najlepšie výroky a citáty slovenských manažérov",
      description: "Citáty a výroky osôb s názvom manažér. Vo väčšine prípadov ide o spoločenský druh ľudského organizmu mužského pohlavia, s ojedinelým, ale významným zastúpením aj v ženskej podobe."
    };
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    },
  },
  created() {
    EventBus.$on("slogan-event", () => {
      var route = this.$route;
      var api = null;
      if(route.params.hash === undefined) {
        api = SloganApi.getRandSlogan();
      } else {
        api = SloganApi.getSlogan(route)
      }
      
      api.then(slogan => {
        this.author = slogan.data.author;
        this.message = slogan.data.message
        this.title = this.message;
        this.$emit('updateHead');
        this.$router.push('/' + slogan.data.id);
      })
      .catch(error => console.log(error))
      .finally(() => {
        this.loading = false;
      });
    });

    EventBus.$emit("slogan-event");
  }
};
</script>
