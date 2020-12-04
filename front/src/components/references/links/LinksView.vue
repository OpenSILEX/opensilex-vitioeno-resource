<template>
  <div class="container-fluid">
    <b-card title="Important Links" tag="article">
      <b-card-text> Some description </b-card-text>
      <opensilex-TableView :fields="fields" :items="data">
        <template v-slot:cell(name)="{ data }">
          <opensilex-UriLink
            :uri="data.item.link"
            :value="data.item.name"
            :to="data.item.link"
          ></opensilex-UriLink>
        </template>
      </opensilex-TableView>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import Vue from "vue";
import VueRouter from "vue-router";
// var widget_tree = document.getElementById("widget_tree").NCBOTree({
//   apikey: "YOUR_API_KEY",
//   ontology: "AFEO",
// });
@Component
export default class LinksView extends Vue {
  $opensilex: any;
  $store: any;
  $route: any;
  $router: any;

  fields: any[] = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
  ];

  gaoItems = [];
  gaoFields = [];

  data: any[] = [
    {
      name: "Base de données des collections RFCV",
      description:
        "Le Réseau Français des Conservatoires de Vigne (RFCV) regroupe 36 partenaires régionaux impliqués dans la sauvegarde des ressources génétiques et la sélection. Plus de 180 conservatoires sont actuellement implantés dans toutes les régions viticoles du pays.",
      link: "https://bioweb.supagro.inra.fr/collections_vigne/Home.php",
    },
    {
      name: "Vitis International Variety Catalogue VIVC",
      description:
        "In 1984 the establishment of the Vitis International Variety Catalogue (VIVC) took place at the Institute for Grapevine Breeding Geilweilerhof. The concept of a database on grapevine genetic resources was supported by IBPGR (today called Bioversity) and the International Organisation of Vine and Wine (OIV). Today VIVC is an encyclopedic database with around 23000 cultivars, breeding lines and Vitis species, existing in grapevine repositories and/or described in bibliography. It is an information source for breeders, researchers, curators of germplasm repositories and interested wine enthusiasts. Besides cultivar specific passport data, SSR-marker data, comprehensive bibliography and photos are to be found.",
      link: "https://www.vivc.de/index.php?r=site%2Findex",
    },
    {
      name: "Catalogue des vignes cultivées en France",
      description:
        "L’objectif de Pl@ntGrape est de rendre accessible une information synthétique, validée et actualisée sur les variétés, les porte-greffes et les clones de vignes utilisés en France et plus largement en Europe et dans le monde. Il s’adresse à toute personne souhaitant disposer de renseignements sur le matériel végétal vigne : viticulteurs, pépiniéristes, techniciens, chercheurs, étudiants, amateurs, etc.",
      link: "https://plantgrape.plantnet-project.org",
    },
  ];
}
</script>

<style scoped lang="scss">
</style>
 
