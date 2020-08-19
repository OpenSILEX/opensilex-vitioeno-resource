<template>
  <div class="main-content">
    <div class="container-fluid">
      <b-row class="justify-content-md-center">
        <b-col></b-col>
        <b-col cols="5">
          <b-img
            left
            v-bind:src="$opensilex.getResourceURI('images/logo-vitioeno.png')"
            class="vitioeno-image-logo"
            alt="logo-sixtine"
            width="100"
          ></b-img>
          <h3>
            {{$t('vitioeno.welcome-message')}}
            <br />
            {{$t('vitioeno.title')}}
          </h3>
        </b-col>
        <b-col></b-col>
      </b-row>

      <b-row>
        <opensilex-Card label="component.home.wineNews" icon="ik#ik-clipboard">
          <template v-slot:body>
            <b-row>
              <b-col cols="3">
                <TwitterFeed src="https://twitter.com/KIMVineWine?ref_src=twsrc%5Etfw"></TwitterFeed>
              </b-col>
              <b-col cols="3">
                <TwitterFeed src="https://twitter.com/OIV_int?ref_src=twsrc%5Etfw"></TwitterFeed>
              </b-col>
              <b-col cols="3">
                <TwitterFeed src="https://twitter.com/isvv_bordeaux?ref_src=twsrc%5Etfw"></TwitterFeed>
              </b-col>
              <b-col cols="3">
                <TwitterFeed src="https://twitter.com/INRAE_NA_BDX?ref_src=twsrc%5Etfw"></TwitterFeed>
              </b-col>
            </b-row>
          </template>
        </opensilex-Card>
      </b-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

@Component
export default class DefaultHomeComponent extends Vue {}
</script>

<style scoped lang="scss">
vitioeno-image-logo {
  max-width: 50%;
}
</style>
