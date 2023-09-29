<template>
  <div class="container-fluid">
    <b-card title="A propos de" tag="article">
      <h2>Vitoeno ressources est une plateforme dédiée à la découverte, au partage et à l'exploration de ressources numériques de bonnes qualité. Notre objectif est de fournir à nos utilisateurs (humains et machines) un accès facile aux outils, aux informations et aux contenus numériques qui enrichiront la gestion de leur données.</h2>
 
    <section>
        <h3>Notre Mission</h3>
        <p>Notre mission est de mettre en lumière les ressources numériques les plus utiles pour la communauté d'utilisateurs vigne et vin. Que vous soyez un étudiant ou chercheur à la recherche de ressources pédagogiques ou un professionnel en quête d'outils de productivité, vous trouverez quelque chose qui vous inspire ici.</p>
    </section>

    <section>
        <h3>Ce Que Nous Offrons</h3>
        <ul>
            <li>Une Sélection Rigoureuse : Notre équipe d'experts passe en revue des dizaines de ressources numériques pour ne vous présenter que les meilleures.</li>
            <li>Diversité de Contenus : De l'utilisation de vocabulaire contrôlées, en passant par des articles informatifs et des critiques de produits, nous couvrons un large éventail de sujets.</li>
            <li>Communauté Active : Rejoignez notre communauté pour partager vos découvertes, poser des questions et interagir avec d'autres passionnés de numérique.</li>
        </ul>
    </section>
 
    </b-card>
  </div>
</template>

<script lang="ts"> 
import { Component } from "vue-property-decorator";
import Vue from "vue"; 
 
@Component
export default class AboutView extends Vue { 
   
}
</script>

<style scoped lang="scss">
</style>

<i18n>

  en:
    AboutView:
      title: About 
      description: Informations about this digital ressources center
  fr:
    AboutView:
      title: A propos
      description: Informations à propose du centre de ressources numériques 
  </i18n>
 
