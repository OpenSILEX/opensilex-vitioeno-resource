/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
import VitioenoLoginComponent from "./components/layout/VitioenoLoginComponent.vue";
import VitioenoFooterComponent from "./components/layout/VitioenoFooterComponent.vue";
import VitioenoMenuComponent from "./components/layout/VitioenoMenuComponent.vue";
import VitioenoHeaderComponent from "./components/layout/VitioenoHeaderComponent.vue";
import VitioenoHomeComponent from "./components/layout/VitioenoHomeComponent.vue";
import GermplasmView from './components/germplasm/GermplasmView.vue';
import GermplasmList from './components/germplasm/GermplasmList.vue';

export default {
    install(Vue, options) {
    },
    components: {
        "inrae-vitioeno-VitioenoHomeComponent": VitioenoHomeComponent,
        "inrae-vitioeno-VitioenoLoginComponent": VitioenoLoginComponent,
        "inrae-vitioeno-VitioenoFooterComponent": VitioenoFooterComponent,
        "inrae-vitioeno-VitioenoMenuComponent": VitioenoMenuComponent,
        "inrae-vitioeno-VitioenoHeaderComponent": VitioenoHeaderComponent,
        "opensilex-GermplasmView": GermplasmView,
        "opensilex-GermplasmList": GermplasmList

    },
    lang: {
        "fr": require("./lang/vitioeno-fr.json"),
        "en": require("./lang/vitioeno-en.json"),
    }
};