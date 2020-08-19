<template>
  <div class="main-content">
    <div class="container-fluid">
      <div class="center">
        <img v-bind:src="$opensilex.getResourceURI('images/logo-vitioeno.png')" alt="logo-sixtine" />
        <h2>
          {{$t('vitioeno.welcome-message')}}
          <br />
          <br />
          {{$t('vitioeno.title')}}
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class DefaultHomeComponent extends Vue {}
</script>

<style scoped lang="scss">
.center {
  text-align: center;
}
</style>
