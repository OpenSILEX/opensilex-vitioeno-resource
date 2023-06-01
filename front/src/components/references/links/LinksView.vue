<template>
  <div class="container-fluid">
    <b-card title="Lien d'intérêt pour trouver des ressources partagées" tag="article">
      <b-card-text> Cette partie propose une description de ressources numérique interopérables.</b-card-text>
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
  </div>
</template>

<script lang="ts">
import { Component, Ref } from "vue-property-decorator";
import Vue from "vue"; 
 
@Component
export default class LinksView extends Vue {
  $opensilex: any;
  $store: any;
  $route: any;
  $router: any;
  $papa: any;
 
  linksItems = [];
  linksFields = [];

  


  get linkUrl(){
    console.log(this.lang)
    if(this.lang === 'fr'){
      return "https://docs.google.com/spreadsheets/d/1CDzKSRbMFwv04oSoH4WdezD07oDTxTQUTiOKtMDoNi8";
    }else{
      return "https://docs.google.com/spreadsheets/d/113kAU9fbuqEW1mMz1NLq2b0v1uvQTExDDJCxRNkeslY";
    }
  }
  get lang() {
    console.debug("Active language : " + this.$store.getters.language);
    return this.$store.getters.language;
  }  
 
  private langUnwatcher;
 

  beforeDestroy() {
      this.langUnwatcher();
  }

  mounted() { 
    this.fetchLinks();
    this.langUnwatcher = this.$store.watch(
          () => this.$store.getters.language,
          lang => {
            this.fetchLinks();
          }
      );
  }

  fetchLinks() {
    fetch(this.linkUrl + "/gviz/tq?tqx=out:csv&gid=0")
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
}
</script>

<style scoped lang="scss">
</style>
 
