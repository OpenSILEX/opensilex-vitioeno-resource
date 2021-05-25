/// <reference path="../../../opensilex-security/front/types/opensilex-security.d.ts" />
/// <reference path="../../../opensilex-core/front/types/opensilex-core.d.ts" />
import VitioenoLoginComponent from "./components/layout/VitioenoLoginComponent.vue";
import VitioenoFooterComponent from "./components/layout/VitioenoFooterComponent.vue";
import VitioenoMenuComponent from "./components/layout/VitioenoMenuComponent.vue";
import VitioenoHeaderComponent from "./components/layout/VitioenoHeaderComponent.vue";
import VitioenoHomeComponent from "./components/layout/VitioenoHomeComponent.vue";

// import GermplasmDetails from './components/germplasm/GermplasmDetails.vue';
import GermplasmView from './components/germplasm/GermplasmView.vue';
import GermplasmList from './components/germplasm/GermplasmList.vue';

import LinksView from './components/references/links/LinksView.vue';
import OntologiesView from './components/references/ontologies/OntologiesView.vue';

export default {
    install(Vue, options) {
    },
    components: {
        "inrae-vitioeno-VitioenoHomeComponent": VitioenoHomeComponent,
        "inrae-vitioeno-VitioenoLoginComponent": VitioenoLoginComponent,
        "inrae-vitioeno-VitioenoFooterComponent": VitioenoFooterComponent,
        "inrae-vitioeno-VitioenoMenuComponent": VitioenoMenuComponent,
        "inrae-vitioeno-VitioenoHeaderComponent": VitioenoHeaderComponent,
        "inrae-vitioeno-GermplasmView": GermplasmView,
        "inrae-vitioeno-GermplasmList": GermplasmList,
        // "inrae-vitioeno-GermplasmDetails": GermplasmDetails,
        "inrae-vitioeno-LinksView": LinksView,
        "inrae-vitioeno-OntologiesView": OntologiesView
    },
    lang: {
        "fr": require("./lang/vitioeno-fr.json"),
        "en": require("./lang/vitioeno-en.json"),
    }
};