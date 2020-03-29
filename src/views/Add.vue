<template>
  <div class="add">
    <section class="intro">
      <div class="intro-body">
        <div class="container">
          <h1>Prispej aj ty!</h1>
          <form id="Add" @submit="onSubmit" method="post">

            <div class="form-group" v-if="show.success">
              <h4 class="text-success">Paráda, zaznamenané!</h4>
            </div>

            <div class="form-group" v-if="show.errors">
              <b class="text-danger">Ups, zdá sa, že si niečo nesprávne vyplnil:</b>
              <ul>
                <li class="text-warning" v-for="(error, index) in errors" v-bind:key="index">{{ error.title }}</li>
              </ul>
            </div>

            <div class="form-group">
              <label for="message-text" class="control-label">* Toto posolstvo:</label>
              <textarea
                v-model="author"
                name="author"
                class="form-control"
                placeholder="Sem napíš unikátne posolstvo, ktoré sa musí zapísať do historických análov..."
              ></textarea>
            </div>

            <div class="form-group">
              <label for="message-text" class="control-label">* Vyriekol:</label>
              <input
                v-model.trim="message"
                name="message"
                class="form-control"
                placeholder="Sem napíš anonymne verejnú osobu, ktoré tento skvost vyriekla..."
              />
            </div>

            <div>
              <button
                type="submit"
                value="Submit"
                class="btn btn-primary"
                id="submit"
              ><b>Zväčniť posolstvo!</b></button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SloganApi from "@/services/api/Slogan";

export default {
  name: "Add",
  data() {
    return {
      errors: [],
      show: {
        errors: false,
        success: false
      },
      author: null,
      message: null
    };
  },
  methods: {
    onSubmit(e) {
      if (this.author && this.message) {
        SloganApi.postSlogan({
          author: this.author,
          message: this.message
        })
        .catch(error => console.log(error))
        .finally(() => {
          this.show.success = true;
          this.author = this.message = '';
        });
        e.preventDefault();
      }

      this.errors = [];
      if (!this.author) {
        this.errors.push({title: "Posolstvo je povinný údaj!"});
      }

      if (!this.message) {
        this.errors.push({title: "Kto to vyriekol je povinný údaj!"});
      }

      if(this.errors.length > 0) {
        this.show.success = false;
        this.show.errors = true;
      }

      e.preventDefault();
    }
  },
  head: {
    title: {
      inner: "O tvoje posolstvo sa musíš podeliť!"
    }
  }
};
</script>