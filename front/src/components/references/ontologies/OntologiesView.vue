<template>
  <div class="container-fluid">
    <b-tabs content-class="mt-3">
      <b-tab title="Liste">
        <b-card title="Ontologies">
          <opensilex-UriLink
            v-if="user.isAdmin()"
            value="Lien fichier ontologie"
            target="_blank"
            :uri="linksUrl"
            :url="linksUrl"
            >{{ "Lien fichier ontologie" }}</opensilex-UriLink
          >
          <opensilex-TableView
            :fields="linksFields"
            :items="linksItems"
            :globalFilterField="true"
          >
            <template v-slot:cell(nom)="{ data }">
              <opensilex-UriLink
                :value="data.item.nom"
                target="_blank"
                :uri="data.item.lien"
                :url="data.item.lien"
                >{{ data.item.nom }}</opensilex-UriLink
              >
            </template>
          </opensilex-TableView>
        </b-card>
      </b-tab>
      <b-tab title="Par catégorie">
        <b-tabs content-class="mt-3">
          <b-tab title="Procédés de vinification" active>
            <b-card>
              <b-row>
                <h5>
                  Voir dans Agroportal :
                  <b-link
                    href="http://agroportal.lirmm.fr/ontologies/AFEO?p=summary"
                    target="_blank"
                    >AFEO</b-link
                  >
                </h5>
              </b-row>
              <b-row>
                <p>
                  AFEO a été utilisé pour guider l'intégration de données de
                  deux sources de données différentes, à savoir des données
                  expérimentales de viticulture stockées dans une base de
                  données relationnelle et des données expérimentales de
                  vinification stockées dans des fichiers Microsoft Excel. Deux
                  utilisations potentielles par les chercheurs de données
                  intégrées viticulture-vinification utilisant AFEO ont été
                  montrées. Le premier concerne la traçabilité du vin et le
                  second est lié à l'inﬂuence des cépages, des pratiques
                  d'irrigation et des différentes méthodes de vinification sur
                  la concentration de GSH dans le vin. Ces exemples montrent que
                  l'intégration des données guidée par un réseau ontologique
                  peut fournir aux chercheurs les informations nécessaires pour
                  répondre à des questions de recherche étendues par les
                  processus de viticulture et de vinification.
                </p>
              </b-row>
            </b-card>
            <b-row>
              <b-col cols="12">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="https://service.tib.eu/webvowl/#iri=http://data.agroportal.lirmm.fr/ontologies/AFEO/submissions/11/download?apikey=1de0a270-29c5-4dda-b043-7c3580628cd5"
                  allowfullscreen
                ></b-embed>
              </b-col>
            </b-row>
          </b-tab>

          <b-tab title="Anatomie de la vigne">
            <h5>
              Voir dans Agroportal :
              <b-link
                href="http://agroportal.lirmm.fr/ontologies/GAO?p=summary"
                target="_blank"
                >AFEO</b-link
              >
            </h5>
            <opensilex-UriLink
              v-if="user.isAdmin()"
              value="Lien fichier GAO googlesheet"
              target="_blank"
              :uri="gaoUrl"
              :url="gaoUrl"
              >{{ "Lien fichier ontologie" }}</opensilex-UriLink
            >
            <opensilex-TableView
              :globalFilterField="true"
              :fields="gaoFields"
              :items="gaoItems"
            ></opensilex-TableView>
          </b-tab>
          <!-- <b-tab title="Other"><p>I'm the Other ontology</p></b-tab> -->
        </b-tabs>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import Vue from "vue";
import VueRouter from "vue-router";

@Component
export default class OntologiesView extends Vue {
  $opensilex: any;
  $store: any;
  $route: any;
  $router: any;
  $papa: any;

  get user() {
    return this.$store.state.user;
  }

  gaoItems = [];
  gaoFields = [];

  linksItems = [];
  linksFields = [];

  data: any[] = [
    {
      name: "AFEO",
      description:
        "AFEO was used to guide the data integration of two diﬀerent data" +
        "sources, i.e., viticulture experimental data stored in a relational" +
        "database and winemaking experimental data stored in Microsoft Excel" +
        "ﬁles. Two potential uses by researchers of viticulture-winemaking" +
        "integrated data using AFEO have been shown. The ﬁrst one is about" +
        "wine traceability and the second one is related to the inﬂuence of" +
        "grape varieties, irrigation practices, and diﬀerent winemaking" +
        "methods on GSH concentration in wine. Those examples show that data" +
        "integration guided by an ontology network can provide researchers" +
        "with the information necessary to address extended research" +
        "questions by viticulture and winemaking processes.",
      link: "http://agroportal.lirmm.fr/ontologies/AFEO?p=summary",
    },
    {
      name: "GAO",
      description: "GAO was used to guide grape vine anatomy description",
      link: "https://docs.google.com/spreadsheets/d/1uK77WFwUZCoGP0zrGVZ9RgTZvJQ2motGrbI6E6cxXts/edit#gid=1724640354",
    },
  ];

  linksUrl: string =
    "https://docs.google.com/spreadsheets/d/113kAU9fbuqEW1mMz1NLq2b0v1uvQTExDDJCxRNkeslY";
  gaoUrl: string =
    "https://docs.google.com/spreadsheets/d/1uK77WFwUZCoGP0zrGVZ9RgTZvJQ2motGrbI6E6cxXts";

  mounted() {
    this.fetchGAO();
    this.fetchLinks();
  }

  fetchLinks() {
    fetch(this.linksUrl + "/gviz/tq?tqx=out:csv&gid=0")
      .then((response) => {
        console.debug(response);
        if (response.status !== 200) {
          console.debug(
            "Looks like there was a problem. Status Code: " + response.status
          );
          this.linksItems = [];
        }

        // Examine the text in the response
        response.text().then((data) => {
          let csv = this.$papa.parse(data);
          let csvData = csv.data;
          let headers = csvData.shift();
          console.debug("fetchLinks csvData", csvData);
          console.debug("fetchLinks headers", headers);

          this.linksFields = this.csvJSONHeaders(headers);
          this.linksItems = this.csvJSONCells(headers, csvData);
        });
      })
      .catch(function (err) {
        console.debug("Fetch Error :-S", err);
      });
  }

  csvJSONHeaders(headers) {
    var result = [];
    console.log("headers,headers.length", headers, headers.length);
    for (var i = 0; i < headers.length; i++) {
      var obj = {};
      console.debug("headers", headers[i]);
      var currentHeader = headers[i];
      obj = {
        key: currentHeader.toLowerCase(),
        label: currentHeader,
      };

      result.push(obj);
    }
    console.debug("json headers", result);

    return result; //JSON
  }

  csvJSONCells(headers, csvData) {
    var result = [];

    for (var i = 0; i < csvData.length; i++) {
      var obj = {};
      var currentline = csvData[i];
      console.debug("currentline", currentline);
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j].toLowerCase()] = String(currentline[j]).replace('"', "");
      }

      result.push(obj);
    }
    console.debug("json cells", result);

    return result; //JSON
  }

  fetchGAO() {
    fetch(this.gaoUrl + "/gviz/tq?tqx=out:csv&gid=1724640354")
      .then((response) => {
        console.debug(response);
        if (response.status !== 200) {
          console.error(
            "Looks like there was a problem. Status Code: " + response.status
          );
          this.gaoItems = [];
        }

        // Examine the text in the response
        response.text().then((data) => {
          let csv = this.$papa.parse(data);
          let csvData = csv.data;
          csvData.shift();
          csvData.shift();
          let headers = csvData.shift();
          headers = headers.filter((item) => item);

          for (var i = 0; i < headers.length; i++) {
            headers[i] = headers[i].replace("\n", "");
          }

          for (var j = 0; j < csvData.length; j++) {
            csvData[j] = csvData[j].slice(0, headers.length);
          }
          let json = this.csvJSONCells(headers, csvData);

          this.gaoFields = this.csvJSONHeaders(headers);
          this.gaoItems = json;
        });
      })
      .catch(function (err) {
        console.debug("Fetch Error :-S", err);
      });
  }
}
</script>

<style scoped lang="scss">
</style>
 
