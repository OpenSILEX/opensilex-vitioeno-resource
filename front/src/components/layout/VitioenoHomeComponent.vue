<template>
  <div class="container-fluid">
    <b-row class="justify-content-md-center">
      <b-col></b-col>
      <b-col cols="11">
        <b-img left v-bind:src="$opensilex.getResourceURI('images/centre-de-ressource1.png')"
          class="vitioeno-image-logo" alt="logo-sixtine" width="100"></b-img>
        <h3>
          {{ $t("vitioeno.welcome-message") }}, {{ $t("vitioeno.title") }}
        </h3>
      </b-col>
      <b-col></b-col>
    </b-row>
    <br />
    <b-row>
      <b-col sm="1"></b-col>
      <b-col sm="11">
        <b-card-group deck>
          <a href="dataAnalysis/apps">
            <b-card :title="$t('component.home.applicationsText')"
              v-bind:img-src="$opensilex.getResourceURI('images/apps.png')" img-alt="Image" img-top tag="article"
              style="max-width: 20rem;" class="mb-2">
              <b-card-text>
                {{ $t('component.home.applications') }}
              </b-card-text>
            </b-card> </a>
         
          <a href="germplasm">
            <b-card :title="$t('component.home.germplasmText')"
              v-bind:img-src="$opensilex.getResourceURI('images/genetic2.jpg')" img-alt="Image" img-top tag="article"
              style="max-width: 20rem;" class="mb-2">
              <b-card-text>
                {{ $t('component.home.germplasm') }}
              </b-card-text>
            </b-card> </a>
          <a href="documents">
            <b-card :title="$t('component.home.documentText')"
              v-bind:img-src="$opensilex.getResourceURI('images/books.jpg')" img-alt="Image" img-top tag="article"
              style="max-width: 20rem;" class="mb-2">
              <b-card-text>
                {{ $t('component.home.document') }}
              </b-card-text>
            </b-card> </a>
            <a href="ontologies">
            <b-card :title="$t('component.home.ontologiesText')"
              v-bind:img-src="$opensilex.getResourceURI('images/ontologies.webp')" img-alt="Image" img-top tag="article"
              style="max-width: 20rem;max-height: 20rem;" class="mb-2">
              <b-card-text>
                {{ $t('component.home.ontologies') }}
              </b-card-text>
            </b-card> </a>
            <a href="links/data">
            <b-card :title="$t('component.home.communityText')"
              v-bind:img-src="$opensilex.getResourceURI('images/centre-de-ressource1.png')" img-alt="Image" img-top tag="article"
              style="max-width: 20rem;" class="mb-2">
              <b-card-text>
                {{ $t('component.home.community') }}
              </b-card-text>
            </b-card> </a>
        </b-card-group>
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
  $i18n: any;

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
