<template> 
    <div class="container-fluid">
      <b-row class="justify-content-md-center">
        <b-col></b-col>
        <b-col cols="11">
          <b-img
            left
            v-bind:src="$opensilex.getResourceURI('images/centre-de-ressource1.png')"
            class="vitioeno-image-logo"
            alt="logo-sixtine"
            width="100"
          ></b-img>
          <h3>
            {{ $t("vitioeno.welcome-message") }}
            <br />
            {{ $t("vitioeno.title") }}
          </h3>
        </b-col>
        <b-col></b-col>
      </b-row>
      <br />
      <b-row>
        <b-col></b-col>
        <b-col sm="12">
          <b-card no-body>
            <b-tabs content-class="mt-3" active>
              <b-tab :title="$t('component.twitter.international')"
                ><b-tabs pills card vertical>
                  <span style="font-style:italic">{{$t('component.twitter.show')}}</span>
                  <!-- Render Tabs, supply a unique `key` to each tab -->
                  <b-tab
                    v-for="twitterLink in internationalTwitterLinksIdLabel"
                    :key="'dyn-tab-' + twitterLink.id"
                  >
                    <template v-slot:title>
                      <span
                        v-b-tooltip.hover.left.v-info
                        :title="twitterLink.description"
                        >{{ twitterLink.label }}</span
                      >
                    </template>

                    <b-card-text>
                      <b-col cols="10">
                        <TwitterFeed
                          :src="
                            'https://twitter.com/' +
                            twitterLink.id +
                            '?ref_src=twsrc%5Etfw'
                          "
                        ></TwitterFeed>
                      </b-col>
                    </b-card-text>
                  </b-tab> </b-tabs
              ></b-tab>
              <b-tab :title="$t('component.twitter.national')">
                
                <b-tabs pills card vertical>
                  <span style="font-style:italic">{{$t('component.twitter.show')}}</span>
                  <!-- Render Tabs, supply a unique `key` to each tab -->
                  <b-tab
                    v-for="twitterLink in nationalTwitterLinksIdLabel"
                    :key="'dyn-tab-' + twitterLink.id"
                  >
                    <template v-slot:title>
                      <span
                        v-b-tooltip.hover.left.v-info
                        :title="twitterLink.description"
                        >{{ twitterLink.label }}</span
                      >
                    </template>
                    <b-card-text>
                      <b-col cols="10">
                        <TwitterFeed
                          :src="
                            'https://twitter.com/' +
                            twitterLink.id +
                            '?ref_src=twsrc%5Etfw'
                          "
                        ></TwitterFeed>
                      </b-col>
                    </b-card-text>
                  </b-tab> </b-tabs
              ></b-tab>
            </b-tabs>
          </b-card>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div> 
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";
import TwitterFeed from "vuejs-twitter-feed";
Vue.use(TwitterFeed);

@Component
export default class DefaultHomeComponent extends Vue {
  $t: any;
  $opensilex: any;

  nationalTwitterLinksIdLabel: any[] = [
    {
      id: "INRAE_NA_BDX",
      label: "INRAE Bordeaux",
      description:
        "Centre Nouvelle-Aquitaine Bordeaux, Institut National de Recherche pour l’Agriculture, l’Alimentation & l’Environnement",
    },

    {
      id: "INRAE_Colmar",
      label: "INRAE Grand Est - Colmar",
      description:
        "Centre GrandEst Colmar d'INRAE , Institut national de recherche pour l’Agriculture, l’Alimentation et l’Environnement - Vigne Vin Phenotypage!",
    },
    {
      id: "inrae_save",
      label: "INRAE SAVE",
      description:
        "Unité mixte de recherche en santé et agroécologie du vignoble, INRAe - BSA, ISVV ",
    },
    {
      id: "opensilex",
      label: "OpenSILEX",
      description:
        "OpenSILEX is a free software (scientific data management using #semantics), INRAe - MISTEA ",
    },
    {
      id: "vignevinfrance",
      label: "IFV",
      description:
        "Institut de recherche appliquée en viticulture et en oenologie, l'IFV apporte son expertise technique dans tous les domaines de la vigne et du vin!",
    },
    {
      id: "KIMVineWine",
      label: "KIM Vine & Wine",
      description:
        "Initiative Clé Vigne-Vin de Montpellier Université d’Excellence : fédérer partenaires de la recherche et formation pour mieux répondre aux enjeux de la filière",
    },
    {
      id: "isvv_bordeaux",
      label: "ISVV",
      description: "Institut des Sciences de la Vigne et du Vin",
    },
    {
      id: "vinetsociete",
      label: "Vin & Société",
      description:
        "Vin & Société représente les 500 000 acteurs de la vigne et du vin. Ici, on parle de la place du vin dans la société : culture, éducation, santé, économie…",
    },
    {
      id: "lv_vitisphere",
      label: "Vitisphere - La Vigne",
      description: "Vitisphere et magazine de la Vigne",
    },
    {
      id: "mon_viti",
      label: "Mon-viti",
      description: "Actu techniques de la vigne au vin!",
    },
  ];

  internationalTwitterLinksIdLabel: any[] = [
    {
      id: "OIV_int",
      label: "OIV",
      description:
        "International Organisation of Vine and Wine - OIV -   World scientific and technical reference organisation on vine and wine. Made up of 47 Member States.",
    },
    {
      id: "bigdatagrapes",
      label: "Big Data Grapes",
      description:
        "Big Data to Enable Global Disruption of the Grapevine-powered industries 🍇",
    },
  ];
}
</script>

<style scoped lang="scss">

vitioeno-image-logo {
  max-width: 50%;
}
</style>
