'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">gestionmed documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-eb47e0c3f2b23779b6cb5c80c6ef59dc"' : 'data-target="#xs-components-links-module-AppModule-eb47e0c3f2b23779b6cb5c80c6ef59dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-eb47e0c3f2b23779b6cb5c80c6ef59dc"' :
                                            'id="xs-components-links-module-AppModule-eb47e0c3f2b23779b6cb5c80c6ef59dc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-037fb8b26986aa901e4e0d502b905ff9"' : 'data-target="#xs-components-links-module-CoreModule-037fb8b26986aa901e4e0d502b905ff9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-037fb8b26986aa901e4e0d502b905ff9"' :
                                            'id="xs-components-links-module-CoreModule-037fb8b26986aa901e4e0d502b905ff9"' }>
                                            <li class="link">
                                                <a href="components/Error403Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Error403Component</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotauthorizedComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotauthorizedComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SnackBarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SnackBarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocteursModule.html" data-type="entity-link">DocteursModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DocteursModule-4498384a94f3694a2a22732edeef32dc"' : 'data-target="#xs-components-links-module-DocteursModule-4498384a94f3694a2a22732edeef32dc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DocteursModule-4498384a94f3694a2a22732edeef32dc"' :
                                            'id="xs-components-links-module-DocteursModule-4498384a94f3694a2a22732edeef32dc"' }>
                                            <li class="link">
                                                <a href="components/DocteursComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DocteursComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DocteursRoutingModule.html" data-type="entity-link">DocteursRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EndpointModule.html" data-type="entity-link">EndpointModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EndpointModule-86c54561bf0bf9be82da388c272b6f49"' : 'data-target="#xs-components-links-module-EndpointModule-86c54561bf0bf9be82da388c272b6f49"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EndpointModule-86c54561bf0bf9be82da388c272b6f49"' :
                                            'id="xs-components-links-module-EndpointModule-86c54561bf0bf9be82da388c272b6f49"' }>
                                            <li class="link">
                                                <a href="components/EndpointComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EndpointComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EndpointRoutingModule.html" data-type="entity-link">EndpointRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Error404Module.html" data-type="entity-link">Error404Module</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-Error404Module-5b19eede65bdfb1bd82678d632af7b44"' : 'data-target="#xs-components-links-module-Error404Module-5b19eede65bdfb1bd82678d632af7b44"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Error404Module-5b19eede65bdfb1bd82678d632af7b44"' :
                                            'id="xs-components-links-module-Error404Module-5b19eede65bdfb1bd82678d632af7b44"' }>
                                            <li class="link">
                                                <a href="components/Error404Component.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">Error404Component</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Error404RoutingModule.html" data-type="entity-link">Error404RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-506b67232307e493841c944145a56278"' : 'data-target="#xs-components-links-module-LoginModule-506b67232307e493841c944145a56278"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-506b67232307e493841c944145a56278"' :
                                            'id="xs-components-links-module-LoginModule-506b67232307e493841c944145a56278"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PatientsModule.html" data-type="entity-link">PatientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PatientsModule-943b947d8e19c934ba08c676f739606c"' : 'data-target="#xs-components-links-module-PatientsModule-943b947d8e19c934ba08c676f739606c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PatientsModule-943b947d8e19c934ba08c676f739606c"' :
                                            'id="xs-components-links-module-PatientsModule-943b947d8e19c934ba08c676f739606c"' }>
                                            <li class="link">
                                                <a href="components/PatientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PatientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PatientsRoutingModule.html" data-type="entity-link">PatientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ProfileuserModule.html" data-type="entity-link">ProfileuserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ProfileuserModule-360fc436537a11f01c4c33b48ff1720b"' : 'data-target="#xs-components-links-module-ProfileuserModule-360fc436537a11f01c4c33b48ff1720b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ProfileuserModule-360fc436537a11f01c4c33b48ff1720b"' :
                                            'id="xs-components-links-module-ProfileuserModule-360fc436537a11f01c4c33b48ff1720b"' }>
                                            <li class="link">
                                                <a href="components/CardCreateDocteurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardCreateDocteurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardCreatePatientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardCreatePatientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardDocteurComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardDocteurComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardPatientComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardPatientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CardprofilComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CardprofilComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailOtherProfilsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailOtherProfilsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailProfilDocteursComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailProfilDocteursComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DetailProfilPatientsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DetailProfilPatientsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileuserComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ProfileuserComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterModule.html" data-type="entity-link">RegisterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RegisterModule-74298e9512367e0d7ff033aeb4398732"' : 'data-target="#xs-components-links-module-RegisterModule-74298e9512367e0d7ff033aeb4398732"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RegisterModule-74298e9512367e0d7ff033aeb4398732"' :
                                            'id="xs-components-links-module-RegisterModule-74298e9512367e0d7ff033aeb4398732"' }>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RegisterRoutingModule.html" data-type="entity-link">RegisterRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RendezvousModule.html" data-type="entity-link">RendezvousModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RendezvousModule-0145c394f63dfd6399e47830775b8105"' : 'data-target="#xs-components-links-module-RendezvousModule-0145c394f63dfd6399e47830775b8105"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RendezvousModule-0145c394f63dfd6399e47830775b8105"' :
                                            'id="xs-components-links-module-RendezvousModule-0145c394f63dfd6399e47830775b8105"' }>
                                            <li class="link">
                                                <a href="components/RendezvousComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RendezvousComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RendezvousRoutingModule.html" data-type="entity-link">RendezvousRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' : 'data-target="#xs-components-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' :
                                            'id="xs-components-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' }>
                                            <li class="link">
                                                <a href="components/FieldErrorDisplayComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FieldErrorDisplayComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MyErrorFormulaireComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MyErrorFormulaireComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' : 'data-target="#xs-pipes-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' :
                                            'id="xs-pipes-links-module-SharedModule-c770e7c35de6dcc17635430156879eb3"' }>
                                            <li class="link">
                                                <a href="pipes/AndSoOnPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AndSoOnPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/Error404Component-1.html" data-type="entity-link">Error404Component</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Action.html" data-type="entity-link">Action</a>
                            </li>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/DocteurData.html" data-type="entity-link">DocteurData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Medecins.html" data-type="entity-link">Medecins</a>
                            </li>
                            <li class="link">
                                <a href="classes/MyErrorStateMatcher.html" data-type="entity-link">MyErrorStateMatcher</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatientData.html" data-type="entity-link">PatientData</a>
                            </li>
                            <li class="link">
                                <a href="classes/Patients.html" data-type="entity-link">Patients</a>
                            </li>
                            <li class="link">
                                <a href="classes/Postes.html" data-type="entity-link">Postes</a>
                            </li>
                            <li class="link">
                                <a href="classes/Privilege.html" data-type="entity-link">Privilege</a>
                            </li>
                            <li class="link">
                                <a href="classes/Rendezvous.html" data-type="entity-link">Rendezvous</a>
                            </li>
                            <li class="link">
                                <a href="classes/Roles.html" data-type="entity-link">Roles</a>
                            </li>
                            <li class="link">
                                <a href="classes/TokenCurrentUser.html" data-type="entity-link">TokenCurrentUser</a>
                            </li>
                            <li class="link">
                                <a href="classes/Utilisateurs.html" data-type="entity-link">Utilisateurs</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AlertService.html" data-type="entity-link">AlertService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AnimationsService.html" data-type="entity-link">AnimationsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link">AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthorizationService.html" data-type="entity-link">AuthorizationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FeatureAuthenticationService.html" data-type="entity-link">FeatureAuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HeaderInterceptorService.html" data-type="entity-link">HeaderInterceptorService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MedecinsService.html" data-type="entity-link">MedecinsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PatientsService.html" data-type="entity-link">PatientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RendezvousService.html" data-type="entity-link">RendezvousService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorInterceptors.html" data-type="entity-link">ErrorInterceptors</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/JwtInterceptors.html" data-type="entity-link">JwtInterceptors</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link">AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link">Item</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});