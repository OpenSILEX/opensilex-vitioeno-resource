<template>
  <div class="main-content">
    <div class="container-fluid">
      <b-row class="justify-content-md-center">
        <b-col></b-col>
        <b-col cols="10">
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
      <br />
      <b-row>
        <b-col></b-col>
        <b-col sm="9">
          <b-card no-body>
            <b-tabs pills card vertical>
              <!-- Render Tabs, supply a unique `key` to each tab -->
              <b-tab
                v-for="twitterLink in this.twitterLinksIdLabel"
                :key="'dyn-tab-' + twitterLink"
              >
                <template v-slot:title>
                  <span
                    v-b-tooltip.hover.left.v-info
                    :title="twitterLink.description"
                  >{{twitterLink.label}}</span>
                </template>
                <b-card-text>
                  <TwitterFeed :src="'https://twitter.com/' +twitterLink.id+'?ref_src=twsrc%5Etfw'"></TwitterFeed>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col></b-col>
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
export default class DefaultHomeComponent extends Vue {
  twitterLinksIdLabel: any[] = [
    {
      id: "KIMVineWine",
      label: "KIM Vine & Wine",
      description:
        "Initiative Clé Vigne-Vin de Montpellier Université d’Excellence : fédérer partenaires de la recherche et formation pour mieux répondre aux enjeux de la filière",
    },
    {
      id: "bigdatagrapes",
      label: "Big Data Grapes",
      description:
        "Big Data to Enable Global Disruption of the Grapevine-powered industries 🍇",
    },
    {
      id: "lv_vitisphere",
      label: "Vitisphere - La Vigne",
      description: "Vitisphere et magazine de la Vigne",
    },
    {
      id: "OIV_int",
      label: "OIV",
      description:
        "International Organisation of Vine and Wine - OIV -   World scientific and technical reference organisation on vine and wine. Made up of 47 Member States.",
    },
    {
      id: "isvv_bordeaux",
      label: "ISVV",
      description: "Institut des Sciences de la Vigne et du Vin",
    },
    {
      id: "INRAE_NA_BDX",
      label: "INRAE Bordeaux",
      description:
        "Centre Nouvelle-Aquitaine Bordeaux, Institut National de Recherche pour l’Agriculture, l’Alimentation & l’Environnement",
    },
  ];
}
</script>

<style scoped lang="scss">
vitioeno-image-logo {
  max-width: 50%;
}
</style>
