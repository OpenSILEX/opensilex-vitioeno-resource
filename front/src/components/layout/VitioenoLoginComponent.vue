 
<template>
  <opensilex-DefaultLoginComponent>
    <template v-slot:loginMedia>
      <b-img center class="w-100" :src="$opensilex.getResourceURI('images/background-vitioeno.jpg')
        "></b-img>
    </template>
    <template v-slot:loginLogo>
      <b-img :src="$opensilex.getResourceURI('images/centre-de-ressource1.png')" fluid alt="Responsive image"></b-img>
    </template>
    <template v-slot:loginFooter>
      <b-row><b-col cols="6">
          <b-img center class="w-100" :src="$opensilex.getResourceURI('images/inrae-vector-logo.png')"
            alt="Responsive image"></b-img>

          <b-img class="w-100" center :src="$opensilex.getResourceURI('images/logo-ifv-2022.png')"
            alt="Responsive image"></b-img>
        </b-col>
        <b-col cols="6">
          <b-img class="w-100 pt-1" center :src="$opensilex.getResourceURI('images/logo_maa_casdar.png')"
            alt="Responsive image"></b-img>
        </b-col>
      </b-row>

      <div class="trademark">
        <p>
          {{ $t("vitioeno.component.login.copyright.1") }}
          <br />
          {{ $t("vitioeno.component.login.copyright.2") }}
          <br />
          <br />
          {{ $t("vitioeno.component.login.copyright.3") }}
          <br />
        </p>
      </div>
    </template>
  </opensilex-DefaultLoginComponent>
</template>

<script lang="ts">
import { Component, Prop } from "vue-property-decorator";
import Vue from "vue";
import { VersionInfoDTO } from "opensilex-core/index";
import OpenSilexVuePlugin from "../../../../../opensilex-front/front/src/models/OpenSilexVuePlugin";

@Component
export default class VitioenoLoginComponent extends Vue {
  versionInfo: VersionInfoDTO = {};
  $opensilex: OpenSilexVuePlugin;
  $t: any;

  created() {
    this.versionInfo = this.$opensilex.versionInfo;
  }

  getVitioenoModuleVersion() {
    for (let module_version_index in this.versionInfo.modules_version) {
      let module = this.versionInfo.modules_version[module_version_index];

      if (module.name.includes("VitioenoModule")) {
        return module.version;
      }
    }
    return "Version undefined";
  }
}
</script>

<style scoped lang="scss"></style>
 
<i18n>
en:
  LoginComponent:
    selectLoginMethod: Select login method
    passwordConnectionTitle: Connect with password
    forgotPassword: Forgot password ?
fr:
  LoginComponent:
    selectLoginMethod: Choisir la méthode de connexion
    passwordConnectionTitle: Connexion par mot de passe
    forgotPassword: Mot de passe oublié ?
</i18n>
