//******************************************************************************
// OpenSILEX - Licence AGPL V3.0 - https://www.gnu.org/licenses/agpl-3.0.en.html
// Copyright © INRA 2019
// Contact: vincent.migot@inra.fr, anne.tireau@inra.fr, pascal.neveu@inra.fr
//******************************************************************************
package inrae.vitioeno;

import org.opensilex.OpenSilexModule;

/**
 * BigDataGrapes module implementation
 */
public class VitioenoModule extends OpenSilexModule {

    @Override
    public List<OntologyFileDefinition> getOntologiesFiles() throws Exception {
    List<OntologyFileDefinition> list =
    SPARQLExtension.super.getOntologiesFiles();
    list.add(new OntologyFileDefinition(
    "http://vitioeno.inrae.fr/vocabulary#",
    "ontologies/inrae-vitioeno.owl",
    Lang.RDFXML,
    "vitioeno-vocabulary"
    ));
    return list;
    }

}
