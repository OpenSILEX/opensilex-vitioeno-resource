/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
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
        "inrae-bigdatagrapes-BigdatagrapesLoginComponent": BigdatagrapesLoginComponent,
        "inrae-bigdatagrapes-BigdatagrapesFooterComponent": BigdatagrapesFooterComponent,
        "inrae-bigdatagrapes-BigdatagrapesMenuComponent": BigdatagrapesMenuComponent,
        "inrae-bigdatagrapes-BigdatagrapesHeaderComponent": BigdatagrapesHeaderComponent
    },
    lang: {
        "fr": require("./lang/bigdatagrapes-fr.json"),
        "en": require("./lang/bigdatagrapes-en.json"),
    }
};