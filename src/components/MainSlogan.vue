<template>
  <div class="hello">
    <section class="intro">
      <div class="intro-body">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="brand-heading">test</h1>
              <p class="gm-err-message">autor</p>
              <a
                href="<?=$urlpath?>"
                class="btn btn-circle page-scroll"
                data-toggle="tooltip"
                data-placement="top"
                title="Chcem ďaľšiu bombu!"
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
export default {
  name: "MainSlogan",
  props: {
    msg: String
  },
  data: function() {
    return {
      title: ""
    };
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
</style>
