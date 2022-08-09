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
import org.opensilex.security.user.dal.UserDAO;
import org.opensilex.security.user.dal.UserModel;
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

    @Override
    public void install(boolean reset) throws Exception {
        insertDefaultGuestUser();
    }

    private void insertDefaultGuestUser() throws Exception {
        AuthenticationService authentication = getOpenSilex().getServiceInstance(AuthenticationService.DEFAULT_AUTHENTICATION_SERVICE, AuthenticationService.class);

        SPARQLServiceFactory factory = getOpenSilex().getServiceInstance(SPARQLService.DEFAULT_SPARQL_SERVICE, SPARQLServiceFactory.class);
        SPARQLService sparql = factory.provide();

        UserModel user = new UserModel();
        user.setUri(new URI("vitioeno-ressource:guest-user"));
        user.setFirstName("guest");
        user.setLastName("guest");
        user.setEmail(new InternetAddress("guest@opensilex.org"));
        user.setPasswordHash( authentication.getPasswordHash("guest"));
        UserDAO userDAO = new UserDAO(sparql);
       
        try {
            userDAO.create(new URI("vitioeno-ressource:guest-user"),new InternetAddress("guest@opensilex.org"),"guest","guest",false,authentication.getPasswordHash("guest"),"fr");
            LOGGER.info("Insert guest user {}", user.getUri());
        } catch (Exception e) {
            throw new SPARQLException("Couldn't create guest user : " + e.getMessage(), e);
        }
    }
    
}
