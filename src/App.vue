<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-custom navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-main-collapse"
          >
            <i class="fa fa-bars"></i>
          </button>
          <router-link to="/" class="navbar-brand page-scroll">
            <i class="fa fa-black-tie"></i>
            <span class="light">Slovenský</span>Manažér
          </router-link>
        </div>

        <div class="collapse navbar-collapse navbar-right navbar-main-collapse">
          <ul class="nav navbar-nav">
            <li class="hidden">
              <router-link to="/"></router-link>
            </li>
            <li>
              <router-link to="/about">Čo to je?</router-link>
            </li>
            <li>
              <router-link to="/add">Prispieť</router-link>
            </li>
            <li>
              <a
                style="float:left"
                class="page-scroll"
                href="https://www.facebook.com/slovenskymanazer/?fref=ts"
                target="_blank"
              >Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="clear">
      <router-view />
    </div>
  </div>
</template>

<style>
@import "./assets/vendor/bootstrap/css/bootstrap.min.css";
@import "./assets/vendor/font-awesome/css/font-awesome.min.css";
@import "https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic";
@import "https://fonts.googleapis.com/css?family=Montserrat:400,700";
@import "./assets/css/grayscale.css";
</style>
