<template>
  <div class="hello">
    <section class="intro">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="brand-heading">{{ message }}</h1>
              <p class="gm-err-message">{{ author }}</p>
              <a
                class="btn btn-circle page-scroll"
                data-toggle="tooltip"
                data-placement="top"
                title="Chcem ďaľšiu bombu!"
                v-on:click="clickHandler"
              >
                <i class="fa fa-refresh"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import EventBus from "@/services/EventBus";

export default {
  name: "MainSlogan",
  props: {
    author: String,
    message: String
  },
  methods: {
    clickHandler (event) {
      event.preventDefault();
      this.$route.params.hash = undefined;
      EventBus.$emit("slogan-event");
    }
  },
  head: {
    title: function() {
      return {
        inner: this.title
      };
    },
    meta: [
      {
        name: "description",
        content: "My description",
        id: "desc"
      }
    ]
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
