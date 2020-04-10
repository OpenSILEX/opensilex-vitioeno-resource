<template>
  <div id="footer">
      <span class="text-center">© OpenSILEX - Bigdatagrapes v.1.0.0</span>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from 'vue';
import DefaultFooterComponent from '../../../../../opensilex-front/front/src/components/layout/DefaultFooterComponent.vue';

@Component
export default class BigdatagrapesFooterComponent extends DefaultFooterComponent {
}
</script>

<style scoped lang="scss">
@import "../../../theme/bigdatagrapes/variables.scss";

#footer {
    background-color: var(--highlightBackgroundColorLight);
    color: var(--defaultColorDark);
}

#footer {
    padding: 15px;
    text-align: center;
}
</style>
