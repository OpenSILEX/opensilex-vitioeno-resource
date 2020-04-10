/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
import BigdatagrapesLoginComponent from "./components/layout/BigdatagrapesLoginComponent.vue";
import BigdatagrapesFooterComponent from "./components/layout/BigdatagrapesFooterComponent.vue";
import BigdatagrapesMenuComponent from "./components/layout/BigdatagrapesMenuComponent.vue";
import BigdatagrapesHeaderComponent from "./components/layout/BigdatagrapesHeaderComponent.vue";
import BigdatagrapesHomeComponent from "./components/layout/BigdatagrapesHomeComponent.vue";

export default {
    install(Vue, options) {
    },
    components: {
        "inrae-bigdatagrapes-BigdatagrapesHomeComponent": BigdatagrapesHomeComponent,
        "inrae-bigdatagrapesgrapes-BigdatagrapesLoginComponent": BigdatagrapesLoginComponent,
        "inrae-bigdatagrapesgrapes-BigdatagrapesFooterComponent": BigdatagrapesFooterComponent,
        "inrae-bigdatagrapesgrapes-BigdatagrapesMenuComponent": BigdatagrapesMenuComponent,
        "inrae-bigdatagrapesgrapes-BigdatagrapesHeaderComponent": BigdatagrapesHeaderComponent
    },
    lang: {
        "fr": require("./lang/bigdatagrapes-fr.json"),
        "en": require("./lang/bigdatagrapes-en.json"),
    }
};