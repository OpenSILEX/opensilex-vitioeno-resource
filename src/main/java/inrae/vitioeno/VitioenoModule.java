//******************************************************************************
// OpenSILEX - Licence AGPL V3.0 - https://www.gnu.org/licenses/agpl-3.0.en.html
// Copyright © INRA 2019
// Contact: vincent.migot@inra.fr, anne.tireau@inra.fr, pascal.neveu@inra.fr
//******************************************************************************
package inrae.vitioeno;

import java.net.URI;
import java.util.List;
import javax.mail.internet.InternetAddress;
import org.apache.jena.riot.Lang;
import org.opensilex.OpenSilexModule;
import org.opensilex.core.variable.dal.MethodModel;
import org.opensilex.security.authentication.AuthenticationService;
import org.opensilex.security.account.dal.AccountDAO;
import org.opensilex.security.account.dal.AccountModel;
import org.opensilex.sparql.exceptions.SPARQLException;
import org.opensilex.sparql.extensions.OntologyFileDefinition;
import org.opensilex.sparql.extensions.SPARQLExtension;
import org.opensilex.sparql.service.SPARQLService;
import org.opensilex.sparql.service.SPARQLServiceFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * BigDataGrapes module implementation
 */
public class VitioenoModule extends OpenSilexModule implements SPARQLExtension{
    private static final Logger LOGGER = LoggerFactory.getLogger(VitioenoModule.class);

    @Override
    public List<OntologyFileDefinition> getOntologiesFiles() throws Exception {
        List<OntologyFileDefinition> list = SPARQLExtension.super.getOntologiesFiles();
        list.add(new OntologyFileDefinition(
        "http://vitioeno.inrae.fr/vocabulary#",
        "ontologies/inrae-vitioeno.owl",
        Lang.RDFXML,
        "vitioeno-vocabulary"
        ));
        return list;
    } 
}
