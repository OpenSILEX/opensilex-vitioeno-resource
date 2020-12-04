<template>
  <div class="container-fluid">
    <b-tabs content-class="mt-3">
      <b-tab title="List">
        <b-card title="Ontologies">
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
      </b-tab>
      <b-tab title="By category">
        <b-tabs content-class="mt-3">
          <b-tab title="Winemaking processs" active>
            <b-card title="AFEO">
              <b-row>
                <h3>
                  Link in Agroportal :
                  <b-link
                    href="http://agroportal.lirmm.fr/ontologies/AFEO?p=summary"
                    target="_blank"
                    >AFEO</b-link
                  >
                </h3>
              </b-row>
              <b-row>
                <p>
                  AFEO was used to guide the data integration of two diﬀerent
                  data sources, i.e., viticulture experimental data stored in a
                  relational database and winemaking experimental data stored in
                  Microsoft Excel ﬁles. Two potential uses by researchers of
                  viticulture-winemaking integrated data using AFEO have been
                  shown. The ﬁrst one is about wine traceability and the second
                  one is related to the inﬂuence of grape varieties, irrigation
                  practices, and diﬀerent winemaking methods on GSH
                  concentration in wine. Those examples show that data
                  integration guided by an ontology network can provide
                  researchers with the information necessary to address extended
                  research questions by viticulture and winemaking processes.
                </p>
              </b-row>
            </b-card>
            <b-row>
              <b-col cols="7">
                <b-embed
                  type="iframe"
                  aspect="16by9"
                  src="http://www.visualdataweb.de/webvowl/#iri=http://data.agroportal.lirmm.fr/ontologies/AFEO/submissions/11/download?apikey=1de0a270-29c5-4dda-b043-7c3580628cd5"
                  allowfullscreen
                ></b-embed>
              </b-col>
            </b-row>
          </b-tab>

          <b-tab title="Anatomy"
            ><opensilex-TableView
              :globalFilterField="true"
              :fields="gaoFields"
              :items="gaoItems"
            ></opensilex-TableView>
          </b-tab>
          <b-tab title="Other"><p>I'm the Other ontology</p></b-tab>
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

  fields: any[] = [
    { key: "name", label: "Name" },
    { key: "description", label: "Description" },
  ];

  gaoItems = [];
  gaoFields = [];

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
      link:
        "https://docs.google.com/spreadsheets/d/1uK77WFwUZCoGP0zrGVZ9RgTZvJQ2motGrbI6E6cxXts/edit#gid=1724640354",
    },
  ];

  mounted() {
    this.fetchGAO();
  }

  fetchGAO() {
    fetch(
      "https://docs.google.com/spreadsheets/d/1uK77WFwUZCoGP0zrGVZ9RgTZvJQ2motGrbI6E6cxXts/gviz/tq?tqx=out:csv&gid=1724640354"
    )
      .then((response) => {
        console.log(response);
        if (response.status !== 200) {
          console.log(
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
          let json = this.csvJSON(headers, csvData);
          console.log(json);

          this.gaoFields = headers;
          this.gaoItems = json;
        });
      })
      .catch(function (err) {
        console.log("Fetch Error :-S", err);
      });
  }

  csvJSON(headers, csvData) {
    var result = [];

    for (var i = 1; i < csvData.length; i++) {
      var obj = {};
      var currentline = csvData[i];
      console.log(currentline);
      for (var j = 0; j < headers.length; j++) {
        obj[headers[j]] = String(currentline[j]).replace('"', "");
      }

      result.push(obj);
    }

    //return result; //JavaScript object

    return result; //JSON
  }
}
</script>

<style scoped lang="scss">
</style>
 
