const categoryEmojis = {
  "Exposition externe": "🌐",
  "Sécurité physique": "🏢",
  "Sensibilisation / Formation": "🧠",
  "Superviser, Auditer, Réagir": "📊",
  "Connaître le SI": "🧭",
  "Nomadisme": "🧳",
  "Serveurs": "🖥️",
  "Gestion des correctifs": "🩹",
  "Postes de travail": "💻",
  "Réseau": "🛜",
  "Continuité d'activité / Sinistre": "🚨",
  "Authentifier et contrôler les accès": "🔐",
  "Administration": "⚙️"
};
const categoryRecommendations = {
  "Exposition externe": "Pour renforcer la posture d’exposition externe de votre organisation, appliquez le protocole HTTPS sur tous les services accessibles publiquement, quel que soit le type de données traitées, afin de garantir des communications chiffrées (R001). Les certificats SSL/TLS doivent être vérifiés régulièrement sur tous les domaines et sous-domaines afin d’éviter les expirations et de garantir une validité cohérente dans le temps (R002). Supprimez tous les fichiers de configuration par défaut, pages d’index ou artefacts d’installation susceptibles de révéler des détails sur l’implémentation (R003), et assurez-vous qu’aucune information de version n’est exposée par les services ou technologies utilisés (R004), car cela pourrait faciliter des attaques ciblées. Toute interface publique disposant d’un formulaire de connexion doit intégrer un mécanisme de bannissement automatique afin de décourager les tentatives de force brute (R005). La gestion des cookies doit être strictement conforme aux réglementations locales (ex. RGPD) et ne pas stocker d’information sensible ou identifiable (R006). Des analyses de vulnérabilités doivent être réalisées régulièrement sur tous les services exposés, sites web et API, afin d’identifier et corriger les failles avant qu’elles ne soient exploitées (R007). Maintenez un inventaire complet de tous les noms de domaine, sous-domaines et ressources cloud publiques. Ces éléments doivent être surveillés en continu afin de détecter toute mauvaise configuration DNS ou exposition non autorisée (R008, R012). Tout le trafic externe doit transiter par un pare-feu applicatif web (WAF) ou une solution équivalente, permettant le filtrage et la journalisation des échanges à des fins de détection et de prévention (R009). Les adresses IP publiques doivent être documentées et révisées périodiquement afin de garantir que seuls les services autorisés sont exposés (R010). Une authentification doit être exigée sur chaque service externe lorsque c’est possible, et l’accès anonyme doit être explicitement justifié et strictement limité (R011). Les listings de répertoires sur les serveurs web doivent être désactivés par défaut, sauf usage justifié et documenté (R013). Tous les formulaires de connexion doivent intégrer des mécanismes de limitation de fréquence ou des CAPTCHAs pour contrer les attaques par bourrage d’identifiants ou force brute (R014). Appliquez les en-têtes HTTP de sécurité adaptés, comme Content-Security-Policy, HSTS ou X-Frame-Options, pour renforcer la protection côté navigateur des applications web publiques (R015). Désactivez ou bloquez tous les services et ports inutiles sur les systèmes exposés à Internet, afin de réduire la surface d’attaque (R016). Enfin, déployez une solution de surveillance de la surface d’attaque externe afin de détecter en continu les nouveaux services exposés, le shadow IT et les mauvaises configurations en temps réel (R017).", 
  "Sécurité physique": "Pour renforcer la sécurité physique des installations de votre organisation, commencez par vérifier systématiquement l'identité de tous les visiteurs avant de leur accorder l'accès aux locaux (R018). Tenez un registre d'accès détaillé et régulièrement mis à jour pour les zones techniques, afin d'assurer la traçabilité et de faciliter les enquêtes si nécessaire (R019). Veillez à ce que le personnel soit formé à vérifier les droits d'accès des tiers et à interpeller toute personne inconnue lorsque la situation l'exige (R020). Tous les sites doivent être protégés par des dispositifs de contrôle d'accès robustes tels que des clés, badges ou systèmes équivalents (R021), et les entrées doivent être surveillées par vidéosurveillance (R022). Les locaux techniques doivent être implantés stratégiquement — à distance des zones à forte criminalité, des zones inondables, et être protégés contre les incendies — afin de réduire les risques environnementaux et criminels (R023). La conception physique doit assurer une séparation complète des zones sécurisées, avec des cloisons allant du sous-plancher jusqu'au-dessus du faux plafond (R024). Des solutions d’alimentation de secours comme des onduleurs (UPS) ou des groupes électrogènes doivent être disponibles (R025) et testées au moins une fois par an pour garantir la continuité de service en cas de coupure (R026). Les conditions environnementales dans ces zones doivent être rigoureusement contrôlées : maintenir une humidité relative entre 40–55 % (R027) et une température entre 20–25 °C (R028). Toutes les salles techniques doivent être équipées de détecteurs de fumée ou de chaleur (R029). Il convient de rappeler régulièrement aux employés de ne pas laisser de documents papier accessibles librement dans les espaces de travail, et toute information sensible doit être rangée dans un endroit sécurisé (R030). Les journaux d’accès physique doivent être consultés régulièrement pour détecter toute entrée suspecte ou non autorisée (R031). Lorsque cela est possible, protégez les zones sensibles par un contrôle d'accès à double facteur (par exemple, badge + code PIN) (R032). Les badges visiteurs doivent être visuellement distincts de ceux du personnel et désactivés immédiatement après utilisation (R033), et toute clé ou droit d’accès obsolète doit être désactivé rapidement lors d’un changement de poste ou d’un départ (R034). L'intégrité des barrières de sécurité physique — portes, serrures, fenêtres — doit être inspectée régulièrement, soit par des rondes de sécurité, soit via des systèmes automatisés (R035). Les zones restreintes doivent être clairement identifiées par une signalisation appropriée indiquant le niveau d'accès requis et les normes de protection en vigueur (R036). Les sorties de secours doivent permettre une évacuation rapide tout en empêchant les intrusions extérieures (R037). Les données de vidéosurveillance doivent être conservées pendant une durée conforme aux exigences légales, et protégées contre toute altération ou accès non autorisé (R038). Les équipements critiques comme les serveurs et les commutateurs doivent être enfermés physiquement ou verrouillés pour prévenir tout vol ou sabotage (R039). Enfin, un audit complet des risques liés à la sécurité physique doit être mené et mis à jour au moins une fois par an, ou à la suite de tout changement significatif d'infrastructure (R040).", 
  "Sensibilisation / Formation": "Pour renforcer la posture de sécurité de votre organisation, il est essentiel d’ancrer une culture continue de sensibilisation auprès de toutes les parties prenantes. Commencez par vous assurer que toutes les équipes opérationnelles reçoivent une formation d’intégration sur les bonnes pratiques de cybersécurité dès leur arrivée (R041), et que cette formation se poursuive régulièrement à travers différents formats — emails, affiches, réunions, ou plateformes intranet. N’oubliez pas les intervenants externes (par exemple les prestataires ou fournisseurs IT) : ils doivent eux aussi être sensibilisés aux exigences de sécurité de votre organisation (R042). Tous les collaborateurs doivent suivre une formation annuelle structurée (R043), couvrant les thématiques essentielles telles que l’hygiène des mots de passe, la détection de phishing, la protection des données, et le respect des réglementations en vigueur. Assurez-vous que les utilisateurs sachent évaluer la légitimité d’un email, en vérifiant l’identité de l’expéditeur, la cohérence des liens, et la pertinence de la pièce jointe. Encouragez la vérification des messages suspects via un canal secondaire comme un appel téléphonique ou un SMS (R044). Établissez une charte informatique claire définissant les responsabilités et comportements attendus des utilisateurs ; elle doit être lue et signée par chaque collaborateur (R045). Vérifiez également que vos prestataires informatiques respectent des engagements contractuels solides, incluant la réversibilité, l’auditabilité, la conservation des données dans des formats standards et la conformité durable aux exigences de sécurité (R046). À un niveau stratégique, formalisez une Politique de Sécurité des Systèmes d’Information (PSSI) validée par la direction générale et diffusée en interne (R047). Organisez des campagnes de phishing simulées au moins une fois par an pour mesurer et améliorer la vigilance des utilisateurs (R048). Adaptez les contenus de sensibilisation selon les rôles — développeurs, administrateurs système, encadrement — afin que chacun reçoive une formation pertinente et actionnable (R049). Mettez en place un canal clair permettant aux utilisateurs de signaler facilement des comportements ou emails suspects (R050). Innovez dans les formats de formation : quiz ludiques, vidéos courtes, microlearning, pour maximiser l'engagement et la mémorisation (R051). Suivez la participation aux sessions de sensibilisation (R052) et évaluez leur efficacité via des tests, questionnaires ou retours utilisateurs (R053). N’oubliez pas d’aborder les menaces d’ingénierie sociale physique comme le “tailgating” (infiltration physique derrière un badge valide) ou le prêt de badge lors des formations (R054). Rappelez régulièrement aux employés les bonnes pratiques concernant l’usage des supports amovibles (clés USB, disques externes), notamment le chiffrement et l’analyse antivirus (R055). Désignez des référents sécurité ou “security champions” dans les équipes opérationnelles pour relayer les messages de sécurité et promouvoir les bonnes pratiques au quotidien (R056). Enfin, intégrez la sensibilisation à la sécurité dans les processus RH formels (intégration, départ, audits) afin de garantir une couverture complète et homogène dans le temps (R057).",
  "Superviser, Auditer, Réagir": "Pour garantir une visibilité continue et une réponse efficace face aux menaces de sécurité, votre organisation doit mettre en place un cadre robuste de supervision, d’audit et de gestion des incidents. Commencez par identifier les composants critiques du système d’information — tels que les équipements de sécurité, les serveurs et les postes de travail sensibles — et examinez leurs paramètres de journalisation (R058). Tous les événements critiques doivent être journalisés et conservés pendant au moins un an, ou plus si des exigences légales ou réglementaires le prévoient (R059). La collecte des logs doit être précédée d’une étude contextuelle pour déterminer les événements pertinents et assurer la cohérence et la qualité des données collectées (R060, R061). Assurez-vous que tous les systèmes utilisent une source de synchronisation horaire commune (par exemple via NTP) afin de permettre la corrélation précise des événements entre les dispositifs (R062), et que tous les journaux soient centralisés sur une plateforme dédiée et sécurisée pour leur analyse et leur corrélation (R063). Une politique de sauvegarde formelle doit être établie, régulièrement mise à jour, et préciser les périmètres et fréquences de sauvegarde (R064). Vérifiez son efficacité via des tests de restauration périodiques couvrant différents scénarios (R065). Des audits de sécurité doivent être réalisés régulièrement (R066) pour évaluer la pertinence et l'efficacité des mesures mises en œuvre. Les résultats des audits doivent conduire à des actions correctives claires (R067), suivies par des indicateurs de progrès visibles dans des tableaux de bord à destination de la direction (R068). Un point de contact sécurité clairement identifié doit être désigné (R069) et bénéficier d’une formation adaptée en cybersécurité et en gestion de crise (R070). Les responsabilités des acteurs clés de la sécurité — comme le RSSI — doivent être connues de l’ensemble des collaborateurs (R071). Dans les grandes structures, des référents locaux peuvent agir comme relais pour faire remonter les besoins de sensibilisation et les préoccupations terrain (R072). Un processus formel de gestion des incidents de sécurité doit être documenté, maintenu et appliqué (R073). Tous les incidents doivent être centralisés dans un registre dédié pour assurer leur traçabilité (R074). Configurez des alertes permettant de détecter les comportements anormaux ou critiques — comme les échecs répétés d’authentification ou les accès inhabituels (R075) — et envisagez de déployer une solution SIEM pour automatiser la corrélation et la détection des menaces (R076). Les sauvegardes doivent être conservées dans un environnement physiquement ou logiquement isolé, avec une protection immuable si possible (R077). Votre plan de réponse aux incidents doit inclure des procédures de communication claires et des chemins d’escalade bien définis (R078). Intégrez les retours d’expérience issus d’incidents passés à vos contrôles et procédures (R079), et organisez des exercices de simulation de crise au minimum tous les deux ans pour tester la réactivité de l’organisation (R080). Protégez l'intégrité et la confidentialité des journaux grâce à des contrôles d'accès et des mécanismes cryptographiques (R081). Un processus formel de gestion des changements doit superviser toute modification affectant la sécurité des systèmes (R082), et tous les signaux d’alerte — même les faux positifs — doivent faire l’objet d’une analyse et d’une documentation (R083). Enfin, un tableau de bord en temps réel affichant les incidents, alertes et l’avancement des remédiations doit être mis à disposition des décideurs (R084).",
  "Connaître le SI": "Pour sécuriser efficacement votre système d’information, il est essentiel de construire une base de connaissance complète et continuellement mise à jour sur ses composants, ses données et ses chemins d’accès. Commencez par identifier toutes les données sensibles présentes dans le système (R085) et documentez les systèmes qui les hébergent — bases de données, partages de fichiers, postes de travail, etc. (R086). Ces composants doivent être protégés par des contrôles en profondeur, incluant des restrictions d’accès, de la journalisation, et des sauvegardes régulières (R087). Maintenez un schéma réseau clair et à jour, illustrant les zones IP, les équipements de routage et les interconnexions externes afin de visualiser et analyser les points d’exposition potentiels (R088). Un inventaire des comptes privilégiés et de service doit être établi et maintenu à jour (R089), avec des revues régulières pour supprimer les privilèges obsolètes et s’assurer que chaque compte correspond à un besoin et à une fonction réelle (R090, R091). Les droits d’accès doivent être ajustés en fonction des changements de rôle (R092), et immédiatement révoqués en cas de départ ou de mobilité interne (R093). Les processus d’arrivée et de départ des employés doivent être formalisés, suivis, et mis à jour régulièrement en coordination avec les ressources humaines pour garantir une gestion rigoureuse des accès (R094). Seuls les équipements autorisés et administrés doivent pouvoir se connecter à votre infrastructure (R095), et une authentification forte doit être appliquée pour les postes de travail (R096). Tenez un inventaire exhaustif des équipements matériels et logiciels, en renseignant leur type, leur propriétaire, leur localisation et leur criticité (R097), et attribuez un responsable métier ou technique à chaque composant du système (R098). Les dépendances entre systèmes, applications et prestataires externes doivent être clairement cartographiées pour faciliter la continuité d’activité et la réponse aux incidents (R099). De même, tous les services exposés sur Internet doivent être recensés et régulièrement vérifiés pour s’assurer de leur légitimité et de leur sécurité (R100). Une politique de classification des actifs doit être formalisée afin d’adapter les niveaux de protection à leur criticité (R101). Les composants obsolètes doivent être identifiés et supprimés de manière sécurisée pour limiter la surface d’attaque (R102). Les listes de contrôle d’accès (ACL) et les appartenances aux groupes utilisateurs doivent être auditées régulièrement pour s’assurer qu’elles correspondent aux besoins réels (R103), et un inventaire des accès distants (VPN, RDP, etc.) doit être maintenu en lien avec les utilisateurs autorisés (R104). Tous les logiciels tiers et open source utilisés doivent être inventoriés et surveillés pour les vulnérabilités connues (R105). La documentation relative au système d’information — procédures techniques et opérationnelles — doit être versionnée, accessible et mise à jour régulièrement (R106). L’accès physique aux zones sensibles (salles serveurs, locaux techniques) doit être strictement contrôlé par des systèmes de badges ou de verrouillage (R107), avec des procédures d’attribution formalisées en lien avec les processus RH (R108). L’accès non supervisé par des prestataires externes doit être proscrit (R109), et les droits d’accès physiques doivent être régulièrement revus (R110), puis révoqués sans délai après le départ d’un collaborateur (R111).", 
  "Nomadisme": "Pour renforcer la sécurité des environnements de travail mobiles et à distance, les organisations doivent mettre en œuvre des contrôles stricts et sensibiliser les utilisateurs. Commencez par former les utilisateurs aux risques liés aux déplacements et aux environnements partagés, et insistez sur l’importance de garder leurs appareils à portée de main en permanence (R112, R133). Supprimez toute référence visible à l’organisation sur les terminaux mobiles afin de réduire les risques de ciblage (R113), et installez des filtres de confidentialité sur les écrans pour prévenir l'espionnage visuel (R114). Tous les appareils nomades doivent exiger une authentification au démarrage à l’aide d’un code PIN ou d’un mécanisme équivalent (R115), avec une préférence marquée pour l’authentification à deux facteurs via des dispositifs externes comme des cartes à puce ou des tokens (R116, R121). Le chiffrement complet du disque est obligatoire sur tous les appareils portables, en complément du chiffrement individuel des fichiers ou archives sensibles (R117, R118). De plus, les terminaux doivent se verrouiller automatiquement après une courte période d’inactivité (R127) et permettre l’effacement à distance en cas de vol ou de perte (R126). Toutes les connexions entre les postes nomades et les systèmes internes doivent obligatoirement passer par un tunnel VPN ou IPsec chiffré (R119), que l’utilisateur ne doit pas pouvoir désactiver manuellement (R120). Il faut éviter l’utilisation de réseaux Wi-Fi publics ou non fiables, surtout sans tunnel sécurisé (R128), et désactiver le Bluetooth et la NFC par défaut, sauf besoin professionnel justifié (R129). Les smartphones et tablettes doivent clairement séparer les usages professionnels et personnels (R122), avec une application homogène des politiques de sécurité : méthodes de verrouillage, restrictions sur les boutiques d’applications, etc. (R123). Seules les applications approuvées par l’IT peuvent être installées (R130), et tous les appareils doivent être tenus à jour avec les correctifs de sécurité via une solution de gestion centralisée (MDM) (R124, R131). Cette solution doit aussi permettre l’administration à distance, la configuration sécurisée, les mises à jour, et l’application de restrictions (R124). Les assistants vocaux intégrés, qui présentent un risque de confidentialité, doivent être désactivés (R125). L’utilisation des ports USB doit être strictement encadrée grâce à des outils de protection des terminaux (R135), et un effacement sécurisé doit être effectué avant toute réaffectation ou mise au rebut d’un appareil (R134). Enfin, pour les déplacements internationaux, les appareils doivent être configurés avec un accès et des données réduits au strict nécessaire afin de limiter les risques d’exposition (R132).",
  "Serveurs": "Pour améliorer la posture de sécurité de l'infrastructure serveur de votre organisation, commencez par réaliser des analyses de vulnérabilités régulières sur tous les serveurs et services hébergés (R136). Seules les applications strictement nécessaires au fonctionnement opérationnel doivent être installées (R137), et les serveurs qui n'ont pas besoin d'un accès Internet doivent en être explicitement privés (R138). Appliquez une stricte séparation des privilèges : les utilisateurs ne doivent jamais faire partie du groupe des administrateurs de domaine sauf justification exceptionnelle et encadrement rigoureux (R139). Tous les serveurs doivent être protégés par une solution de pare-feu active – intégrée ou spécialisée – et leur configuration doit être revue régulièrement pour éviter toute erreur ou faille (R140, R141). Des solutions antivirus doivent être déployées, maintenues à jour et surveillées en continu, y compris les signatures et la configuration (R142 à R144). Les serveurs bénéficiant d’exemptions aux règles de sécurité standard doivent être isolés logiquement et physiquement pour éviter tout risque de propagation (R145). Les données critiques doivent être sauvegardées sur des supports déconnectés (R146), et les procédures de restauration testées au moins deux fois par an pour garantir leur efficacité (R147). Des outils de gestion centralisée, comme Active Directory, doivent être utilisés pour gérer l’infrastructure, après standardisation préalable du matériel et des systèmes d’exploitation si nécessaire (R148). Les politiques de sécurité doivent être normalisées et appliquées uniformément à tous les environnements (R149). Pour assurer la résilience, le mode de récupération (recovery mode) doit être activé dans les services d’annuaire (R150). Les connexions entrantes doivent être strictement limitées aux flux essentiels préalablement analysés et approuvés, le reste devant être bloqué par défaut (R151). Les pare-feux doivent être configurés pour journaliser les flux bloqués, afin de détecter les erreurs de configuration ou des tentatives d’intrusion (R152). Les composants systèmes et les applications doivent être régulièrement mis à jour avec les derniers correctifs de sécurité (R153). L’accès administratif doit être restreint à des postes internes dédiés ou à des zones d’administration sécurisées (R154), et tout accès par des équipes IT ou prestataires externes doit être supervisé ou encadré via des canaux sécurisés (R155). Toutes les actions administratives doivent être traçables à une personne identifiée (R156), et les élévations de privilèges doivent se faire via des comptes nominatifs distincts plutôt que par des comptes partagés ou root (R157). Appliquez un référentiel de durcissement rigoureux (ex. CIS Benchmarks ou guides de l’ANSSI) à tous les serveurs (R158). L’accès distant (RDP, SSH…) doit être protégé par une authentification forte et limité à des IP ou réseaux approuvés (R159). Mettez en place des mécanismes d’alerte en cas de dérive de configuration ou de modification non autorisée (R160). Séparez clairement les environnements de production, de test et de développement, et évitez d’y utiliser des données de production sauf besoin justifié et encadré (R161). Sécurisez le processus de démarrage des serveurs pour prévenir toute manipulation non autorisée (R162), et désactivez tous les ports et services inutilisés (R163). Remplacez les identifiants, clés et certificats par défaut avant toute mise en production (R164), et tenez à jour un inventaire précis et régulièrement audité de tous les services et ports ouverts afin de détecter tout composant non autorisé ou obsolète (R165).",
  "Gestion des correctifs": "Pour renforcer la résilience de votre organisation face aux vulnérabilités connues, commencez par établir et maintenir une politique complète de gestion des correctifs applicable à tous les composants du système d'information (R166). Celle-ci doit être appuyée par une veille continue des vulnérabilités, s'appuyant sur des sources fiables telles que les CERTs ou les bulletins des éditeurs (R167). Tous les correctifs de sécurité doivent être déployés dans un délai maximum d’un mois suivant leur publication par l’éditeur, afin de minimiser la fenêtre d’exposition (R168). Les composants obsolètes, non pris en charge par leurs éditeurs, doivent être identifiés et isolés afin d’éviter tout risque systémique (R169). Un inventaire complet et régulièrement mis à jour de l’ensemble des systèmes et applications est indispensable pour piloter efficacement la stratégie de mise à jour (R170). Lors de la sélection des solutions, privilégiez celles dont la durée de support est alignée avec votre période d’utilisation prévue (R171), et surveillez les calendriers de mise à jour ainsi que les dates de fin de vie pour planifier des transitions proactives (R172). Maintenir un portefeuille logiciel homogène permet de réduire la surface d’attaque et de simplifier la maintenance et la supervision (R173). Réduisez les dépendances logicielles complexes dès les premières phases de conception pour limiter les risques à long terme (R174). Assurez-vous que les contrats avec les fournisseurs et prestataires informatiques incluent des clauses relatives au suivi des correctifs et à la gestion de l’obsolescence (R175), et planifiez les migrations et les ressources nécessaires à l’avance pour les composants en fin de vie (R176). Avant de déployer des correctifs sur les systèmes de production, mettez en œuvre une procédure de tests en préproduction afin de vérifier la stabilité et la compatibilité (R177). Automatisez autant que possible les déploiements via des outils centralisés pour garantir des mises à jour cohérentes et rapides sur l’ensemble du parc (R178), et définissez un mécanisme de retour arrière (rollback) en cas de dysfonctionnement (R179). Pour les systèmes à forte exigence de disponibilité, appliquez un processus de validation spécifique intégrant des analyses d’impact et de risque (R180). Suivez la couverture des déploiements via des tableaux de bord ou des rapports pour détecter les lacunes ou échecs en temps réel (R181). Intégrez la gestion des correctifs à un processus de gestion des changements formel, comprenant la documentation, les validations et les approbations nécessaires (R182). Évitez les opérations de mise à jour manuelle autant que possible ; lorsqu’elles sont nécessaires, elles doivent être documentées et validées (R183). Les systèmes temporairement exemptés de mises à jour doivent être suivis, documentés, et sécurisés par isolement ou via des mesures compensatoires (R184). Enfin, surveillez les résultats de chaque campagne de patch en journalisant les succès et échecs, et analysez les résultats pour améliorer le processus (R185). N'oubliez pas d’inclure les composants tiers et open source dans votre politique de correctifs, en leur appliquant le même niveau d’exigence que pour les systèmes propriétaires (R186).",
  "Postes de travail": "Pour améliorer significativement la posture de sécurité des postes de travail de votre organisation, il est crucial de durcir leur configuration et de mettre en œuvre des contrôles opérationnels stricts. Commencez par limiter l'installation des applications à celles strictement nécessaires aux activités professionnelles (R187), et restreignez les extensions de navigateur à celles explicitement approuvées par la DSI (R188). Les utilisateurs ne doivent pas disposer de droits administrateurs sur leur poste, sauf si cela est strictement nécessaire et dûment justifié (R189), afin de limiter la propagation de logiciels malveillants et les erreurs de configuration. Activez la protection par pare-feu local à l’aide des solutions intégrées ou de logiciels spécialisés (R190), et révisez régulièrement leur configuration pour corriger toute erreur (R191). Une solution antivirus active doit être déployée sur l’ensemble des postes (R192), maintenue à jour tant au niveau du moteur que de la base de signatures (R193), et régulièrement auditée pour détecter d’éventuels défauts de configuration ou alertes critiques (R194). Les postes doivent être mis à jour automatiquement avec les derniers correctifs de sécurité du système d’exploitation afin de réduire la fenêtre d’exposition aux vulnérabilités connues (R195). En cas d’exemption nécessaire (par exemple, pour des applications obsolètes), les postes concernés doivent être isolés logiquement du reste du réseau (R196). Toute donnée critique stockée localement sur un poste de travail doit faire l’objet de sauvegardes régulières, et les procédures de restauration doivent être testées périodiquement (R197–R198). Pour limiter les risques liés aux supports amovibles, l’utilisation de clés USB non reconnues doit être interdite (R199), et l’exécution de programmes depuis ces supports doit être bloquée via des outils de protection des terminaux (R200). Une procédure stricte de traitement et de destruction des équipements en fin de vie doit être mise en œuvre pour éviter les fuites de données (R201). Le trafic réseau doit être finement contrôlé : seuls les flux autorisés (whitelistés) doivent être permis, après une analyse préalable des besoins légitimes (R202), et les pare-feux doivent consigner les tentatives bloquées pour détecter les erreurs de configuration ou les attaques (R203). La sécurité physique des postes doit également être renforcée : l’accès au BIOS/UEFI doit être protégé par mot de passe (R204), et les utilisateurs doivent systématiquement verrouiller leur session en quittant leur poste (R205). L’hygiène des authentifiants est aussi essentielle : des vérifications régulières doivent s’assurer que les mots de passe ne sont pas écrits ou stockés de manière non sécurisée (R206), leur enregistrement dans les navigateurs doit être interdit (R207), et l’exécution de scripts ou macros (par exemple dans les documents Office) doit être désactivée par défaut, sauf approbation formelle pour des sources de confiance (R208). Les écrans des postes doivent se verrouiller automatiquement après une période d’inactivité courte (par exemple 5 minutes) pour limiter les accès opportunistes (R209), et les données stockées localement doivent être chiffrées (R210). Le processus de démarrage doit être sécurisé via un mot de passe ou un mécanisme de démarrage sécurisé (R211), et tous les équipements doivent respecter un socle de configuration durcie qui est régulièrement vérifié (R212). Les outils administratifs comme PowerShell ou l’invite de commande doivent être restreints et surveillés (R213), et les journaux des postes de travail doivent être centralisés pour analyse (R214). Enfin, les comptes inutilisés et les services non essentiels doivent être régulièrement supprimés (R215), le trafic Internet doit transiter par un proxy sécurisé (R216), et l’intégrité des composants critiques doit être contrôlée au démarrage via des mécanismes de trusted boot (R217).",
  "Réseau": "Pour renforcer la sécurité de l’infrastructure réseau de votre organisation, commencez par vous assurer que la couverture des réseaux Wi-Fi reste physiquement contenue dans les locaux de l’entreprise (R218), et que toutes les prises réseau accessibles au public soient désactivées afin d’éviter les connexions physiques non autorisées (R219). La segmentation du réseau est essentielle : implémentez des VLAN dans les zones sensibles (R220) et appliquez des règles de filtrage strictes, notamment pour les équipements connectés en Wi-Fi (R226), afin de limiter les mouvements latéraux. Les réseaux Wi-Fi invités ou les connexions à distance depuis des domiciles doivent être protégés par des mots de passe complexes et régulièrement mis à jour (R221–R225), et les SSID ne doivent pas révéler l’identité de l’organisation (R224). Les points d’accès sans fil (AP) doivent permettre les mises à jour de firmware automatiques (R227), être administrés via des interfaces de gestion dédiées et sécurisées (R228), et les identifiants par défaut doivent être systématiquement modifiés. Les tentatives d’intrusion, telles que les échecs de connexion sur les équipements réseau, doivent être surveillées en temps réel et bloquées (R229), tandis que les journaux d’accès doivent être centralisés et conservés pendant au moins un an (R230). Les serveurs proxy doivent intégrer des couches de protection comme l’analyse antivirus et le filtrage des URL. Les requêtes DNS doivent également passer par ces proxies afin d’assurer visibilité et contrôle (R231–R232). Tous les services exposés sur Internet doivent être durcis (R233), hébergés sur une infrastructure segmentée (R234), et filtrés via des reverse proxy dotés de fonctions de sécurité (R236). L’infrastructure de messagerie doit être protégée par des systèmes antivirus, antispam, et par le chiffrement TLS (R239–R240). Les relais de messagerie (R241) et les enregistrements DNS d’authentification (SPF, DKIM, DMARC – R243) doivent être correctement configurés. La redirection de mails professionnels vers des comptes personnels est strictement interdite (R237), et des méthodes d’accès sécurisé à distance doivent être mises à disposition (R238). La connectivité avec les partenaires doit être sécurisée via des liens privés (R244), filtrée par des firewalls dédiés (R245–R247), et pilotée à l’aide de listes de contacts à jour pour permettre une réponse rapide aux incidents (R248). Les interfaces d’administration des firewalls doivent être protégées par des mots de passe forts (R249), permettre les mises à jour automatiques du système (R251), et consigner les flux bloqués afin de détecter les comportements anormaux (R252–R254). Les systèmes de détection/prévention d’intrusion (IDS/IPS), la détection des risques, ainsi que le filtrage basé sur la géolocalisation doivent être activés sur tous les équipements de filtrage (R255–R256). Les interfaces d’administration ne doivent jamais être accessibles avec les identifiants par défaut (R257), doivent être accessibles uniquement depuis des réseaux d’administration segmentés (R260), et être protégées par des systèmes de journalisation centralisée et de contrôle d’accès (R259). Les configurations des équipements réseau doivent être sauvegardées (R261), surveillées pour toute modification non autorisée (R262), et gérées de manière sécurisée — en désactivant SNMP ou en utilisant SNMPv3 avec des identifiants robustes (R263), en désactivant IPv6 s’il n’est pas utilisé (R264), et en désactivant les ports inutilisés des switches (R265). Les serveurs DHCP non autorisés doivent être bloqués (R266), et des systèmes NAC (Network Access Control) doivent vérifier la conformité des équipements avant leur connexion au réseau (R267). Enfin, la documentation réseau — incluant les schémas, plans d’adressage IP et cartographies VLAN — doit être revue et mise à jour au moins une fois par an (R269), et des règles de détection doivent permettre d’identifier les comportements de trafic anormaux (R268).", 
  "Continuité d'activité / Sinistre": "Pour renforcer la résilience de votre organisation face aux interruptions d’activité, il est impératif de maintenir un cadre robuste de continuité d’activité et de reprise après sinistre. Un plan formel de reprise et de continuité doit être établi (R270), identifiant clairement les processus métiers critiques ainsi que leur durée maximale d’interruption acceptable (RTO) et leur tolérance à la perte de données (RPO), afin de prioriser les efforts de reprise (R273). Ce plan doit être testé régulièrement (R271–R272) via des exercices de bascule ou de reprise simulés, afin de valider la capacité opérationnelle réelle en cas d’incident. L’ensemble des acteurs impliqués dans la réponse à un sinistre doit disposer de rôles et responsabilités clairement définis (R275), et le plan de reprise doit être accessible hors ligne, dans des formats sécurisés (papier ou numérique) (R276), pour rester exploitable même en cas de panne réseau ou matérielle. Un plan de communication de crise doit également être formalisé (R274), pour garantir une coordination cohérente en interne et en externe lors d’un incident majeur. Les dépendances aux prestataires tiers — y compris les fournisseurs cloud et les partenaires IT — doivent être revues et encadrées contractuellement afin de garantir la disponibilité des services et les modalités de reprise en cas de catastrophe (R277). L’organisation doit maintenir des postes de travail de secours ou des moyens de télétravail sécurisé pour les personnels critiques, notamment en cas d’indisponibilité physique des sites (R281). Les données nécessaires à la reprise doivent être sauvegardées dans un environnement physiquement et logiquement isolé (R280), afin de réduire le risque de compromission simultanée. Les retours d’expérience issus des exercices ou d’incidents réels doivent être documentés rigoureusement et utilisés pour améliorer les processus de reprise (R278). Ces tests doivent intégrer des scénarios réalistes de cyberattaques (ex. ransomware, fuite de données) afin d’évaluer les réflexes organisationnels sous pression (R282). Enfin, l’ensemble du plan de continuité doit être réexaminé au moins une fois par an, ou dès qu’un changement majeur affecte l’organisation ou son infrastructure, afin de garantir sa pertinence et son efficacité continue (R279).",
  "Authentifier et contrôler les accès": "Pour garantir un contrôle d’accès robuste au sein de votre organisation, commencez par interdire strictement l’usage de comptes non nominatifs ou génériques (R283, R285). Chaque administrateur doit disposer d’un compte nominatif dédié à l’administration, distinct de son compte utilisateur classique (R286). Les droits d’administration locaux ne doivent être accordés qu’à titre exceptionnel, sous justification et supervision (R284). Tous les événements liés aux comptes — connexions réussies ou échouées — doivent être journalisés et surveillés (R287) afin d'assurer la traçabilité et de détecter toute activité suspecte. Un inventaire précis et régulièrement mis à jour des ressources contenant des données sensibles (partages de fichiers, bases de données, boîtes mail) doit être maintenu (R288), avec une liste claire des utilisateurs autorisés (R289). Les droits d’accès doivent être revus fréquemment (R290), et des processus formels d’arrivée et de départ doivent être en place pour créer, modifier ou supprimer les accès au bon moment (R302). Les comptes inactifs doivent être désactivés automatiquement après une période définie (par exemple, 60 ou 90 jours) (R303). Une politique de mot de passe forte doit être formalisée (R291), mise en œuvre techniquement (R292), et communiquée de manière claire aux utilisateurs (R293). Les mots de passe doivent être stockés de manière sécurisée, via des coffres-forts chiffrés ou mécanismes équivalents (R294–R295), et toujours transmis via des canaux chiffrés (R296). Les mots de passe par défaut doivent être changés immédiatement lors du déploiement (R297), et toute impossibilité de modification doit être remontée et escaladée (R298). Le renouvellement des mots de passe doit être réalisé conformément à la politique interne (R299). Si applicable, la double authentification (MFA) doit être imposée (R300), de préférence via cartes à puce ou tokens OTP physiques (R301). L’accès aux interfaces administratives doit être restreint à des postes de travail sécurisés ou à des zones d’administration dédiées (R304), et les tentatives d’authentification inhabituelles (horaires, IP, localisation) doivent déclencher des alertes ou nécessiter une vérification supplémentaire (R305). La mise en œuvre de solutions de fédération d’identité ou de SSO (Single Sign-On) permet de centraliser les contrôles d’accès et les journaux (R306). Les comptes d’urgence ou comptes « break-glass » doivent être encadrés par des procédures strictes avec revue obligatoire après usage (R307). Les environnements de préproduction ou de test doivent être restreints, jamais accessibles avec des identifiants partagés (R308). Les comptes de service doivent suivre des règles strictes de création, de nommage, et de gestion du cycle de vie, avec droits minimaux (R309). Tous les systèmes d’authentification doivent intégrer des mécanismes de redondance pour éviter les coupures d’accès en cas d’incident (R310). Enfin, des audits réguliers doivent confirmer que chaque compte utilisateur ou administrateur est nominatif et rattaché à un individu identifié (R311).",
  "Administration": "Pour protéger les fonctions administratives contre tout usage abusif ou compromission, les organisations doivent imposer une segmentation stricte et un contrôle rigoureux de toutes les activités d’administration. Commencez par exiger que toutes les tâches administratives soient réalisées depuis des postes dédiés, physiques ou virtuels, complètement isolés d’Internet (R312). Les ports d’administration à distance doivent être désactivés par défaut, sauf si leur usage est explicitement requis (R315). Les mises à jour logicielles doivent être obtenues depuis des dépôts de confiance et transférées de manière sécurisée vers les systèmes isolés (R316). Lorsque nécessaire, un support amovible dédié et contrôlé peut être utilisé. Tous les transferts de fichiers liés à l’administration doivent passer par une zone d’échange sécurisée et automatisée (R317). Afin de réduire les surfaces d’attaque et de limiter les mouvements latéraux, les interfaces, postes et serveurs administratifs doivent être logiquement (R318–R319), cryptographiquement (R320), voire physiquement (R321) séparés du réseau bureautique. Les privilèges administratifs doivent être encadrés strictement. Toute délégation de privilège doit être tracée, limitée dans le temps, et révoquée automatiquement à expiration (R314). La liste des administrateurs autorisés doit être revue régulièrement (R325), et l’accès aux interfaces doit être limité dans le temps et au strict nécessaire, selon le principe du « just-in-time access » (R326). Les comptes d’administration doivent être activés et désactivés uniquement via un processus de validation formel (R331). Toutes les actions d’administration doivent être journalisées dans des formats inaltérables (R322) et revues périodiquement. Les sessions doivent être chiffrées de bout en bout (R330), et les identifiants administratifs doivent être uniques à chaque environnement, renouvelés régulièrement (R329), sans jamais être réutilisés entre systèmes. L’authentification multi-facteurs (MFA) doit être obligatoire sur toutes les interfaces d’administration, locales ou distantes (R323). Les connexions doivent obligatoirement passer par un bastion/jump server (R327) afin de centraliser les accès et d’en limiter l’exposition. Les outils d’administration (consoles, plateformes d’orchestration) doivent être durcis (R324), et tous les scripts d’automatisation doivent être documentés, versionnés, et stockés dans un référentiel sécurisé (R328). Enfin, les prestataires externes ne doivent jamais disposer d’un accès autonome via leurs propres outils (R313), et toute activité administrative doit respecter la segmentation réseau et les règles de sécurité internes pour minimiser les risques."
};

// Exposition externe
const questions = [
	{
    text: "R001. Tous les actifs publiés par ou pour l'organisation doivent être accessibles exclusivement via HTTPS, même s'ils ne contiennent pas d'informations sensibles.",
    category: "Exposition externe",
  },
  {
    text: "R002. L'alignement des périodes de validité des certificats SSL/TLS sur l'ensemble des sous-domaines et des actifs exposés doit être vérifié régulièrement.",
    category: "Exposition externe",
  },
  {
    text: "R003. L'absence d'artéfacts de configuration par défaut (ex. : pages d’index) ou de configurations par défaut (ex. : fichiers de configuration) doit être garantie sur tous les actifs exposés.",
    category: "Exposition externe",
  },
  {
    text: "R004. Aucun actif exposé ne doit divulguer d'informations sur les versions des services, systèmes ou technologies sous-jacentes.",
    category: "Exposition externe",
  },
  {
    text: "R005. Un mécanisme de bannissement automatique doit être mis en place sur toutes les interfaces permettant l’identification des utilisateurs.",
    category: "Exposition externe",
  },
  {
    text: "R006. L’utilisation des cookies doit respecter les réglementations locales applicables, et aucune information sensible ne doit y être stockée.",
    category: "Exposition externe",
  },
  {
    text: "R007. Des analyses de vulnérabilités doivent être réalisées régulièrement sur tous les actifs exposés, y compris les services et sites web.",
    category: "Exposition externe",
  },
  {
    text: "R008. Tous les noms de domaine et sous-domaines doivent être inventoriés et surveillés régulièrement afin de détecter toute exposition non autorisée ou erreur de configuration DNS.",
    category: "Exposition externe",
  },
  {
    text: "R009. Un pare-feu applicatif web (WAF) ou une solution équivalente doit être déployé pour filtrer et journaliser le trafic externe vers les services web exposés.",
    category: "Exposition externe",
  },
  {
    text: "R010. Les adresses IP publiques doivent être documentées et revues régulièrement pour garantir qu’aucun service non autorisé n’est exposé.",
    category: "Exposition externe",
  },
  {
    text: "R011. Tous les services exposés vers l’extérieur doivent requérir une authentification lorsque c’est applicable, et l’accès anonyme doit être désactivé sauf justification explicite.",
    category: "Exposition externe",
  },
  {
    text: "R012. Les actifs hébergés sur des clouds publics (ex. : buckets S3, conteneurs, bases de données) doivent refuser l’accès public par défaut.",
    category: "Exposition externe",
  },
  {
    text: "R013. Le listing des répertoires doit être désactivé par défaut sur tous les serveurs web, sauf nécessité clairement documentée.",
    category: "Exposition externe",
  },
  {
    text: "R014. Les portails de connexion exposés doivent implémenter un mécanisme de limitation de tentative ou un CAPTCHA pour contrer les attaques par force brute.",
    category: "Exposition externe",
  },
  {
    text: "R015. Des en-têtes de sécurité HTTP (ex. : Content-Security-Policy, X-Frame-Options, HSTS) doivent être configurés sur toutes les applications web accessibles publiquement.",
    category: "Exposition externe",
  },
  {
    text: "R016. Tous les services et ports non utilisés sur les systèmes accessibles publiquement doivent être désactivés ou bloqués au niveau du pare-feu.",
    category: "Exposition externe",
  },
  {
    text: "R017. Un outil de surveillance de la surface d’attaque externe doit être en place pour détecter en continu les nouveaux services exposés ou les erreurs de configuration.",
    category: "Exposition externe",
  },

// Sécurité physique
{
  text: "R018. La sécurité physique des locaux doit être renforcée par la vérification de l'identité de tous les visiteurs.",
  category: "Sécurité physique",
},
{
  text: "R019. L'accès aux locaux techniques doit être consigné dans un registre d'accès, conformément aux exigences de sécurité physique.",
  category: "Sécurité physique",
},
{
  text: "R020. Les collaborateurs doivent être sensibilisés à la nécessité de vérifier les droits d'accès des tiers présents sur site.",
  category: "Sécurité physique",
},
{
  text: "R021. L'accès aux sites doit être sécurisé par des portes équipées de mécanismes de contrôle d'accès tels que des clés, badges ou systèmes équivalents.",
  category: "Sécurité physique",
},
{
  text: "R022. Les entrées des sites doivent être surveillées par un système de vidéosurveillance.",
  category: "Sécurité physique",
},
{
  text: "R023. Les locaux techniques doivent être situés à l'écart des zones à risque (criminalité, inondation) et protégés contre les incendies.",
  category: "Sécurité physique",
},
{
  text: "R024. Les murs des salles techniques doivent s'étendre du plancher technique jusqu'au-dessus du faux plafond pour assurer une séparation physique complète.",
  category: "Sécurité physique",
},
{
  text: "R025. Des alimentations électriques de secours (onduleurs et/ou groupes électrogènes) doivent être en place pour assurer la continuité de l’alimentation.",
  category: "Sécurité physique",
},
{
  text: "R026. Les alimentations électriques de secours doivent être testées au moins une fois par an pour vérifier leur capacité à soutenir une coupure d’électricité en cohérence avec les besoins opérationnels de l’organisation.",
  category: "Sécurité physique",
},
{
  text: "R027. L’humidité relative dans les environnements techniques doit être mesurée et maintenue entre 40 % et 55 %.",
  category: "Sécurité physique",
},
{
  text: "R028. La température dans les environnements techniques doit être mesurée et maintenue entre 20°C et 25°C.",
  category: "Sécurité physique",
},
{
  text: "R029. Des détecteurs de fumée et/ou de chaleur doivent être installés dans toutes les salles techniques.",
  category: "Sécurité physique",
},
{
  text: "R030. Les collaborateurs doivent être sensibilisés à la nécessité de limiter la présence de documents papier en libre accès, et de ranger sous clé tout document contenant des informations sensibles ou confidentielles.",
  category: "Sécurité physique",
},
{
  text: "R031. Les journaux d’accès physiques doivent être consultés régulièrement pour détecter des tentatives d’accès non autorisées ou anormales.",
  category: "Sécurité physique",
},
{
  text: "R032. Tous les locaux techniques ou sensibles doivent être sécurisés par un contrôle d’accès physique à deux facteurs lorsque cela est possible (par exemple : badge + code PIN).",
  category: "Sécurité physique",
},
{
  text: "R033. Les badges visiteurs doivent être clairement distincts des badges employés et désactivés immédiatement après usage.",
  category: "Sécurité physique",
},
{
  text: "R034. Tous les badges, clés ou autorisations d’accès obsolètes doivent être révoqués sans délai après un départ ou changement de poste.",
  category: "Sécurité physique",
},
{
  text: "R035. Des rondes de sécurité ou des systèmes de surveillance automatisés doivent vérifier régulièrement l’intégrité des dispositifs de protection physique (portes, serrures, fenêtres).",
  category: "Sécurité physique",
},
{
  text: "R036. Les zones sécurisées doivent être clairement identifiées par une signalétique visible indiquant leur niveau de restriction et de protection.",
  category: "Sécurité physique",
},
{
  text: "R037. Les issues de secours doivent permettre une évacuation rapide tout en empêchant les accès non autorisés depuis l’extérieur.",
  category: "Sécurité physique",
},
{
  text: "R038. Les enregistrements de vidéosurveillance doivent être conservés pendant une durée conforme à la réglementation et protégés contre tout accès non autorisé.",
  category: "Sécurité physique",
},
{
  text: "R039. Les équipements sensibles (par exemple : serveurs, équipements réseau) doivent être physiquement enfermés ou verrouillés pour éviter les sabotages ou vols.",
  category: "Sécurité physique",
},
{
  text: "R040. Une analyse de risque sur la sécurité physique doit être conduite au moins une fois par an ou après tout changement majeur d’infrastructure.",
  category: "Sécurité physique",
},

// Sensibilisation / Formation
{
  text: "R041. Les équipes opérationnelles doivent être formées aux bonnes pratiques de sécurité des systèmes d'information lors de leur arrivée, puis régulièrement sensibilisées par des campagnes d'information. Ces actions peuvent prendre différentes formes : emails, affiches, réunions, espaces intranet dédiés.",
  category: "Sensibilisation / Formation",
},
{
  text: "R042. Le personnel externe impliqué dans les systèmes d'information de l'organisation, tel que les prestataires ou intervenants en gestion IT, doit être sensibilisé aux exigences de sécurité informatique.",
  category: "Sensibilisation / Formation",
},
{
  text: "R043. Tous les collaborateurs doivent recevoir une formation à la sécurité de l'information au moins une fois par an. Celle-ci doit inclure les bonnes pratiques, les enjeux spécifiques à l’organisation, la protection des données personnelles, et les obligations réglementaires ou légales.",
  category: "Sensibilisation / Formation",
},
{
  text: "R044. Les utilisateurs doivent être régulièrement sensibilisés aux bonnes pratiques de sécurité liées aux emails. Ils doivent vérifier si l’expéditeur est connu, si un message est attendu, et si les liens ou pièces jointes sont cohérents. En cas de doute, la vérification doit se faire par un canal secondaire (ex. appel ou SMS).",
  category: "Sensibilisation / Formation",
},
{
  text: "R045. Une charte informatique doit être rédigée, précisant clairement les règles d’usage à respecter. Elle doit être signée et acceptée par l’ensemble des collaborateurs.",
  category: "Sensibilisation / Formation",
},
{
  text: "R046. Les prestataires de gestion IT doivent être contractuellement tenus de respecter un ensemble d'exigences, incluant a minima : la réversibilité contractuelle, la capacité d’audit, la sauvegarde et la restauration des données dans des formats ouverts, et le maintien d’un niveau de sécurité dans la durée.",
  category: "Sensibilisation / Formation",
},
{
  text: "R047. Une Politique de Sécurité des Systèmes d’Information (PSSI) doit être formalisée, validée par la direction, et diffusée en interne.",
  category: "Sensibilisation / Formation",
},
{
  text: "R048. Des campagnes de phishing simulé doivent être réalisées au moins une fois par an pour évaluer la vigilance des utilisateurs et renforcer leurs réflexes face à des messages suspects.",
  category: "Sensibilisation / Formation",
},
{
  text: "R049. Les actions de sensibilisation doivent être adaptées aux rôles des utilisateurs, avec des modules spécifiques pour les développeurs, les administrateurs systèmes, ou les responsables métiers.",
  category: "Sensibilisation / Formation",
},
{
  text: "R050. Un canal de communication dédié doit être mis à disposition pour permettre aux utilisateurs de signaler rapidement tout email suspect, incident ou comportement anormal.",
  category: "Sensibilisation / Formation",
},
{
  text: "R051. De nouveaux formats de sensibilisation (ex. quiz ludiques, microlearning, vidéos courtes) doivent être explorés pour améliorer l’engagement et la rétention des messages.",
  category: "Sensibilisation / Formation",
},
{
  text: "R052. La participation aux sessions de sensibilisation à la sécurité doit être tracée, et les statistiques de complétion analysées régulièrement pour garantir une couverture complète de l’organisation.",
  category: "Sensibilisation / Formation",
},
{
  text: "R053. L'efficacité des actions de sensibilisation doit être évaluée périodiquement à travers des tests, des formulaires de retour ou des bilans post-formation.",
  category: "Sensibilisation / Formation",
},
{
  text: "R054. Les risques d’ingénierie sociale physique (ex. intrusion par suiveur, prêt de badge) doivent être abordés dans les sessions de sensibilisation.",
  category: "Sensibilisation / Formation",
},
{
  text: "R055. Les employés doivent être régulièrement rappelés à l’ordre concernant les bonnes pratiques liées aux supports amovibles (ex. clés USB), incluant l’analyse antivirus et le chiffrement.",
  category: "Sensibilisation / Formation",
},
{
  text: "R056. Des référents ou ambassadeurs sécurité doivent être désignés au sein des équipes opérationnelles pour relayer les messages et encourager les bonnes pratiques localement.",
  category: "Sensibilisation / Formation",
},
{
  text: "R057. La sensibilisation à la sécurité doit faire partie intégrante des processus RH (arrivée, départ, audits internes).",
  category: "Sensibilisation / Formation",
},

// Superviser, Auditer, Réagir
{
  text: "R058. Les composants critiques du système d'information — tels que les équipements réseau et de sécurité, les serveurs critiques, et les postes utilisateurs sensibles — doivent être identifiés. Pour chacun, la configuration des journaux (logs) doit être revue : format, rotation, taille maximale, et catégories d’événements collectés.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R059. Les événements de sécurité critiques doivent être enregistrés et conservés pendant au moins un an, ou plus selon les obligations légales ou réglementaires applicables au secteur d’activité.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R060. Une étude contextuelle du système d'information doit être menée avant la mise en place des journaux d’événements applicatifs, afin d’assurer la pertinence et l’exhaustivité des données collectées.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R061. Une étude contextuelle du système d'information doit être réalisée avant la collecte des événements de sécurité, pour garantir la pertinence, la cohérence et l’utilité des données collectées.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R062. Tous les composants doivent utiliser la même source de synchronisation temporelle via le protocole NTP afin de permettre une corrélation précise des événements.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R063. Les journaux de tous les équipements doivent être centralisés sur une plateforme dédiée, afin d’assurer leur stockage sécurisé, leur analyse et leur corrélation.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R064. Une politique de sauvegarde doit être formalisée et mise à jour régulièrement. Elle doit définir les exigences concernant les informations, logiciels et systèmes à sauvegarder.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R065. Des tests de restauration doivent être réalisés pour vérifier l’efficacité des procédures de sauvegarde. Ces tests peuvent inclure des tests systématiques pour les applications critiques (via tâches planifiées), ponctuels en cas d’erreur de sauvegarde, ou complets dans le cadre des validations régulières.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R066. Des audits réguliers du système d'information doivent être réalisés afin d’évaluer l’efficacité des mesures de sécurité en place et leur pertinence dans le temps.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R067. À la suite des audits, des actions correctives doivent être identifiées, planifiées et suivies dans le temps pour en garantir la mise en œuvre.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R068. Des indicateurs de suivi du plan d’action sécurité doivent être intégrés dans un tableau de bord et partagés avec la direction.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R069. Un référent sécurité des systèmes d'information doit être désigné et soutenu par la direction ou par une instance de gouvernance spécialisée, selon la maturité de l’organisation.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R070. Le référent sécurité désigné doit être formé à la sécurité des systèmes d'information et à la gestion de crise.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R071. Les rôles et responsabilités du Responsable de la Sécurité des Systèmes d’Information (RSSI) doivent être clairement communiqués à tous les collaborateurs.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R072. Dans les grandes structures, le référent sécurité peut servir de relais local au RSSI. Il doit alors faire remonter les besoins des utilisateurs et proposer des sujets pour les campagnes de sensibilisation.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R073. Une procédure formelle de gestion des incidents de sécurité doit être définie, documentée et maintenue à jour.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R074. Tous les incidents de sécurité doivent être documentés dans un registre centralisé des incidents.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R075. Des alertes doivent être configurées sur la plateforme de journalisation afin de détecter en temps réel les événements critiques ou anormaux (ex. échecs répétés d’authentification, comportements anormaux).",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R076. Une solution de type SIEM (Security Information and Event Management) doit être mise en œuvre ou envisagée pour automatiser la corrélation et l’analyse des événements de sécurité.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R077. Les données de sauvegarde doivent être stockées dans un environnement physiquement ou logiquement isolé du système d'information principal, idéalement sous un format immuable.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R078. Le plan de réponse aux incidents doit inclure des procédures de communication, des contacts désignés (internes et externes) et des parcours d’escalade prédéfinis.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R079. Les leçons tirées des incidents passés doivent être formellement documentées et intégrées dans l’amélioration continue des mesures techniques et organisationnelles.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R080. Un exercice ou test de gestion de crise simulant un incident de cybersécurité doit être organisé au moins tous les deux ans afin d’évaluer la réactivité de l’organisation.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R081. Les fichiers de journaux sensibles doivent être protégés contre tout accès non autorisé ou altération via des mécanismes de contrôle d’accès et des moyens d’intégrité (hash ou signature).",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R082. Un processus de gestion des changements doit être mis en place pour encadrer les modifications ayant un impact sur la sécurité des configurations ou composants.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R083. Toutes les alertes ou anomalies remontées par les outils de sécurité doivent être analysées et documentées, même si elles sont ultérieurement qualifiées de faux positifs.",
  category: "Superviser, Auditer, Réagir",
},
{
  text: "R084. Un tableau de bord en temps réel présentant les indicateurs de sécurité, les incidents, les alertes et l’avancement des remédiations doit être mis à disposition des parties prenantes concernées.",
  category: "Superviser, Auditer, Réagir",
},

// Connaître le SI
{
  text: "R085. Les données sensibles doivent être identifiées et protégées dans l’ensemble du système d’information.",
  category: "Connaître le SI",
},
{
  text: "R086. Les composants du système d’information hébergeant des données sensibles — comme les bases de données, dossiers partagés ou postes de travail — doivent être clairement identifiés.",
  category: "Connaître le SI",
},
{
  text: "R087. Les équipements hébergeant des données sensibles doivent être protégés par des mesures de sécurité spécifiques, incluant notamment des sauvegardes, une journalisation, des contrôles d’accès et d'autres protections.",
  category: "Connaître le SI",
},
{
  text: "R088. Un schéma réseau simplifié et à jour doit être élaboré et maintenu. Il doit représenter les différentes zones IP, les plans d’adressage, les équipements de routage et de sécurité (pare-feux, proxies applicatifs), ainsi que les interconnexions externes (Internet, réseaux privés, partenaires).",
  category: "Connaître le SI",
},
{
  text: "R089. Un inventaire des comptes à privilèges doit être réalisé, mis à jour régulièrement, et inclure toutes les informations pertinentes.",
  category: "Connaître le SI",
},
{
  text: "R090. Des revues périodiques des comptes à privilèges doivent être effectuées afin de gérer efficacement les accès aux éléments sensibles — comme les répertoires de travail et les boîtes mail des personnes responsables — et de révoquer les droits obsolètes, notamment après des départs.",
  category: "Connaître le SI",
},
{
  text: "R091. Une convention de nommage simple et claire doit être définie et appliquée pour identifier les comptes de service et les comptes administratifs.",
  category: "Connaître le SI",
},
{
  text: "R092. Les privilèges systèmes et droits d’accès doivent être mis à jour en fonction des évolutions des rôles et responsabilités des employés.",
  category: "Connaître le SI",
},
{
  text: "R093. Tous les droits d’accès attribués à une personne doivent être révoqués immédiatement en cas de départ ou de changement de fonction.",
  category: "Connaître le SI",
},
{
  text: "R094. Des procédures d’arrivée et de départ des collaborateurs doivent être définies, suivies, et mises à jour régulièrement en coordination avec les ressources humaines.",
  category: "Connaître le SI",
},
{
  text: "R095. Les connexions ne doivent être autorisées qu’avec des équipements maîtrisés et gérés par l’organisation.",
  category: "Connaître le SI",
},
{
  text: "R096. L’authentification des équipements gérés doit être renforcée par une mesure de contrôle technique supplémentaire.",
  category: "Connaître le SI",
},
{
  text: "R097. Un inventaire à jour de tous les équipements matériels et logiciels du système d’information doit être maintenu, incluant le type, l’emplacement, le responsable et le niveau de criticité.",
  category: "Connaître le SI",
},
{
  text: "R098. Chaque composant du système d’information doit avoir un propriétaire fonctionnel ou technique identifié, responsable de sa maintenance, sécurité et documentation.",
  category: "Connaître le SI",
},
{
  text: "R099. Les dépendances entre les applications, systèmes et prestataires externes doivent être documentées afin de faciliter l’analyse d’impact et la gestion des incidents.",
  category: "Connaître le SI",
},
{
  text: "R100. Tous les services exposés à l’extérieur (ex. sites web, API, VPN) doivent être recensés et régulièrement revus pour garantir leur légitimité et leur bon maintien.",
  category: "Connaître le SI",
},
{
  text: "R101. Une politique formelle de classification des actifs doit être définie pour catégoriser les données, systèmes et applications selon leur sensibilité et criticité.",
  category: "Connaître le SI",
},
{
  text: "R102. Les composants du système d’information non utilisés ou obsolètes doivent être identifiés, évalués, et supprimés de manière sécurisée pour réduire la surface d’attaque.",
  category: "Connaître le SI",
},
{
  text: "R103. Les listes de contrôle d’accès (ACL) et les appartenances aux groupes utilisateurs doivent être revues périodiquement pour s’assurer qu’elles correspondent aux besoins réels.",
  category: "Connaître le SI",
},
{
  text: "R104. Les méthodes d’accès à distance (VPN, bureau distant, etc.) doivent être inventoriées et rattachées aux profils d’utilisateurs autorisés.",
  category: "Connaître le SI",
},
{
  text: "R105. Tous les logiciels tiers et composants open source utilisés dans le système d’information doivent être identifiés et surveillés pour les vulnérabilités.",
  category: "Connaître le SI",
},
{
  text: "R106. La documentation du système d’information — y compris les procédures techniques et opérationnelles — doit être versionnée, accessible, et mise à jour régulièrement.",
  category: "Connaître le SI",
},
{
  text: "R107. L’accès aux salles serveurs et aux locaux techniques doit être contrôlé à l’aide de systèmes de verrouillage ou de contrôle d’accès par badge.",
  category: "Connaître le SI",
},
{
  text: "R108. Un processus formel de délivrance des accès physiques doit être appliqué, incluant une vérification d’identité et une cohérence avec les procédures d’arrivée/départ. Le personnel non explicitement autorisé — comme les agents de maintenance, personnel non-IT, personnel de nettoyage ou visiteurs — ne peut accéder aux zones sensibles qu’en étant accompagné.",
  category: "Connaître le SI",
},
{
  text: "R109. L’accès non accompagné des prestataires externes aux salles serveurs et locaux techniques doit être strictement interdit.",
  category: "Connaître le SI",
},
{
  text: "R110. Les droits d’accès physiques doivent être revus régulièrement afin d’identifier et révoquer tout accès injustifié.",
  category: "Connaître le SI",
},
{
  text: "R111. Les droits d’accès doivent être supprimés ou les codes d’accès changés immédiatement après le départ d’un employé.",
  category: "Connaître le SI",
},
	
// Nomadisme
{
  text: "R112. Les utilisateurs doivent être sensibilisés à la nécessité d’élever leur niveau de vigilance lors de leurs déplacements et de garder leurs appareils à portée de main en permanence.",
  category: "Nomadisme",
},
{
  text: "R113. Toute référence explicite à l’organisation doit être supprimée des terminaux mobiles utilisés par les utilisateurs nomades.",
  category: "Nomadisme",
},
{
  text: "R114. Un filtre de confidentialité doit être installé sur les écrans des appareils des utilisateurs nomades.",
  category: "Nomadisme",
},
{
  text: "R115. Un code PIN ou un mécanisme d’authentification équivalent doit être configuré pour s’activer au démarrage des appareils portables.",
  category: "Nomadisme",
},
{
  text: "R116. Les collaborateurs nomades doivent utiliser un dispositif externe supplémentaire pour déverrouiller leur poste de travail (ex. carte à puce, jeton de sécurité).",
  category: "Nomadisme",
},
{
  text: "R117. Le chiffrement complet du disque doit être mis en œuvre sur les disques durs de tous les appareils mobiles.",
  category: "Nomadisme",
},
{
  text: "R118. Les fichiers ou archives stockés sur les disques des appareils doivent être chiffrés afin de garantir la confidentialité des données.",
  category: "Nomadisme",
},
{
  text: "R119. Un tunnel VPN ou IPsec doit être établi entre les postes mobiles et la passerelle VPN/IPsec de l’organisation, sans exception.",
  category: "Nomadisme",
},
{
  text: "R120. Les utilisateurs ne doivent pas être autorisés à désactiver manuellement le tunnel de communication chiffré.",
  category: "Nomadisme",
},
{
  text: "R121. Un mécanisme d’authentification à deux facteurs doit être fourni à tous les membres du personnel mobile.",
  category: "Nomadisme",
},
{
  text: "R122. Une séparation claire doit être appliquée entre les usages personnels et professionnels sur les téléphones mobiles.",
  category: "Nomadisme",
},
{
  text: "R123. Les politiques de sécurité doivent être appliquées de manière uniforme sur les appareils mobiles, incluant les méthodes de verrouillage, les restrictions d’accès aux magasins d’applications et autres contrôles pertinents.",
  category: "Nomadisme",
},
{
  text: "R124. Une solution de gestion centralisée doit être utilisée pour administrer tous les appareils mobiles et à distance.",
  category: "Nomadisme",
},
{
  text: "R125. L’utilisation des assistants vocaux intégrés doit être interdite sur les appareils mobiles de l’organisation.",
  category: "Nomadisme",
},
{
  text: "R126. Les appareils mobiles doivent permettre l’effacement ou le verrouillage à distance en cas de perte ou de vol.",
  category: "Nomadisme",
},
{
  text: "R127. Les appareils mobiles doivent être configurés pour se verrouiller automatiquement après une courte période d’inactivité (ex. 5 minutes ou moins).",
  category: "Nomadisme",
},
{
  text: "R128. Les utilisateurs doivent être rappelés de ne pas se connecter à des réseaux Wi-Fi publics ou non fiables, en particulier sans utiliser de tunnel de communication sécurisé.",
  category: "Nomadisme",
},
{
  text: "R129. Le Bluetooth et la communication en champ proche (NFC) doivent être désactivés par défaut sur les appareils mobiles sauf nécessité professionnelle explicite.",
  category: "Nomadisme",
},
{
  text: "R130. Toutes les applications mobiles doivent être approuvées par le service informatique avant d’être installées sur les appareils appartenant à l’organisation.",
  category: "Nomadisme",
},
{
  text: "R131. Les appareils mobiles doivent être régulièrement mis à jour avec les derniers correctifs de sécurité et versions du système d’exploitation, via la solution de gestion centralisée.",
  category: "Nomadisme",
},
{
  text: "R132. Lors de déplacements à l’international, les appareils mobiles doivent être configurés avec un minimum de données et d’accès pour réduire le risque d’exposition.",
  category: "Nomadisme",
},
{
  text: "R133. Les utilisateurs doivent être formés à l’utilisation sécurisée de leurs appareils dans les espaces partagés (ex. espaces de coworking, hôtels, aéroports).",
  category: "Nomadisme",
},
{
  text: "R134. Lorsqu’un appareil nomade n’est plus utilisé ou est réaffecté, un effacement sécurisé des données et configurations doit être effectué.",
  category: "Nomadisme",
},
{
  text: "R135. L’utilisation des ports USB sur les postes nomades doit être restreinte ou contrôlée via un outil de protection des postes.",
  category: "Nomadisme",
},
	
// Serveurs
{
  text: "R136. Les vulnérabilités des serveurs et des services doivent être analysées de manière récurrente.",
  category: "Serveurs",
},
{
  text: "R137. Les applications installées doivent être strictement limitées à celles nécessaires au fonctionnement opérationnel.",
  category: "Serveurs",
},
{
  text: "R138. Les serveurs ne nécessitant pas d’accès à Internet doivent être explicitement restreints pour en empêcher l’accès.",
  category: "Serveurs",
},
{
  text: "R139. Les utilisateurs du domaine ne doivent pas faire partie du groupe des administrateurs, sauf justification et contrôle stricts.",
  category: "Serveurs",
},
{
  text: "R140. Des solutions de pare-feu doivent être activées sur les serveurs, qu’elles soient intégrées ou spécialisées.",
  category: "Serveurs",
},
{
  text: "R141. Les configurations locales des pare-feux doivent être examinées régulièrement pour garantir l’absence de mauvaises configurations ou d’erreurs.",
  category: "Serveurs",
},
{
  text: "R142. Des solutions antivirus doivent être activées sur tous les serveurs.",
  category: "Serveurs",
},
{
  text: "R143. Les solutions antivirus doivent être tenues à jour, tant au niveau du logiciel que des bases de signatures.",
  category: "Serveurs",
},
{
  text: "R144. Les configurations des antivirus doivent être révisées à intervalles réguliers pour détecter d’éventuelles erreurs ou mauvaises configurations.",
  category: "Serveurs",
},
{
  text: "R145. Les serveurs bénéficiant d’exceptions aux règles de sécurité standard doivent être isolés du reste du système.",
  category: "Serveurs",
},
{
  text: "R146. Les données critiques nécessaires au bon fonctionnement de l’organisation doivent être sauvegardées sur des supports déconnectés.",
  category: "Serveurs",
},
{
  text: "R147. Les procédures de restauration des données doivent être testées périodiquement, au moins tous les six mois.",
  category: "Serveurs",
},
{
  text: "R148. Un outil de gestion centralisée – tel qu’Active Directory dans un environnement Microsoft – doit être déployé pour gérer autant d’actifs informatiques que possible, y compris les postes et les serveurs. Cela peut nécessiter une standardisation préalable du matériel et des systèmes d’exploitation.",
  category: "Serveurs",
},
{
  text: "R149. La gestion des politiques de sécurité doit être standardisée sur l’ensemble de l’infrastructure informatique de l’organisation.",
  category: "Serveurs",
},
{
  text: "R150. Le mode de récupération doit être activé sur le service Active Directory pour assurer la résilience et la capacité de restauration.",
  category: "Serveurs",
},
{
  text: "R151. Une analyse des flux entrants légitimes (ex. : administration, logiciels d’infrastructure, applications spécifiques) doit être menée pour définir la liste des connexions autorisées. Par défaut, tout le trafic doit être bloqué et seuls les services nécessaires, provenant de sources approuvées, doivent être explicitement autorisés (approche par liste blanche).",
  category: "Serveurs",
},
{
  text: "R152. Les pare-feux doivent être configurés pour journaliser le trafic bloqué, afin de détecter les mauvaises configurations applicatives ou des tentatives d’intrusion.",
  category: "Serveurs",
},
{
  text: "R153. Tous les composants du système d’exploitation, les logiciels et les correctifs de sécurité doivent être maintenus à jour.",
  category: "Serveurs",
},
{
  text: "R154. L’accès administratif doit être restreint à des postes internes spécifiques ou à des zones d’administration dédiées.",
  category: "Serveurs",
},
{
  text: "R155. L’accès du personnel informatique ou de prestataires tiers ne doit pas être possible sans supervision ou contrôle approprié.",
  category: "Serveurs",
},
{
  text: "R156. Toutes les actions d’administration sur les serveurs doivent être journalisées et traçables à une personne nommément identifiée, afin d’assurer l’auditabilité et la responsabilisation.",
  category: "Serveurs",
},
{
  text: "R157. Les comptes root ou administrateur ne doivent pas être utilisés pour les opérations courantes ; des comptes nominatifs avec élévation de privilèges doivent être utilisés à la place.",
  category: "Serveurs",
},
{
  text: "R158. Un référentiel de configuration sécurisée (hardening) strict doit être appliqué à tous les serveurs, selon des standards reconnus comme les CIS Benchmarks ou les guides CERT.",
  category: "Serveurs",
},
{
  text: "R159. L’accès à distance pour l’administration (ex. : RDP, SSH) doit être protégé par une authentification forte et restreint à des adresses IP ou réseaux autorisés.",
  category: "Serveurs",
},
{
  text: "R160. Un système d’alerte doit être en place pour détecter toute dérive de configuration ou tout changement non autorisé sur les serveurs de production.",
  category: "Serveurs",
},
{
  text: "R161. Les serveurs de test et de développement doivent être séparés logiquement des serveurs de production, et ne doivent pas contenir de données réelles de production sauf justification explicite.",
  category: "Serveurs",
},
{
  text: "R162. Les séquences de démarrage des serveurs doivent être configurées pour empêcher toute modification non autorisée du chargeur de démarrage, du BIOS/UEFI ou des supports de démarrage.",
  category: "Serveurs",
},
{
  text: "R163. Les services inutilisés et les ports réseau non utilisés doivent être désactivés ou supprimés afin de réduire la surface d’attaque du serveur.",
  category: "Serveurs",
},
{
  text: "R164. Les mots de passe, clés et certificats par défaut présents sur les serveurs doivent être changés ou remplacés avant leur mise en production.",
  category: "Serveurs",
},
{
  text: "R165. Un inventaire des services installés et des ports à l’écoute doit être tenu à jour et révisé périodiquement pour détecter les composants non autorisés ou obsolètes.",
  category: "Serveurs",
},

// Gestion des correctifs
{
  text: "R166. Une politique de gestion des correctifs doit être définie et tenue à jour pour un déploiement à l’échelle du système d’information.",
  category: "Gestion des correctifs",
},
{
  text: "R167. Une veille continue des vulnérabilités doit être assurée, par exemple via les CERT (Computer Emergency Response Teams) ou des sources équivalentes.",
  category: "Gestion des correctifs",
},
{
  text: "R168. Les correctifs de sécurité doivent être appliqués à tous les composants du système dans un délai d’un mois après leur publication par l’éditeur.",
  category: "Gestion des correctifs",
},
{
  text: "R169. Les composants obsolètes, non maintenus par leur fabricant, doivent être isolés du reste du système.",
  category: "Gestion des correctifs",
},
{
  text: "R170. Un inventaire de tous les systèmes et applications du système d’information doit être établi et maintenu régulièrement à jour.",
  category: "Gestion des correctifs",
},
{
  text: "R171. Les solutions doivent être sélectionnées en fonction de durées de support cohérentes avec leur période d’utilisation prévue.",
  category: "Gestion des correctifs",
},
{
  text: "R172. Les dates de mise à jour logicielles et de fin de support doivent être suivies pour permettre une gestion proactive.",
  category: "Gestion des correctifs",
},
{
  text: "R173. Un portefeuille logiciel homogène doit être maintenu pour réduire les risques et simplifier la maintenance et le suivi.",
  category: "Gestion des correctifs",
},
{
  text: "R174. Les dépendances logicielles doivent être limitées dès les premières phases du cycle de vie pour réduire la complexité et les risques.",
  category: "Gestion des correctifs",
},
{
  text: "R175. Les contrats avec les prestataires de services et les fournisseurs doivent inclure des clauses garantissant le suivi des correctifs de sécurité et la gestion de l’obsolescence.",
  category: "Gestion des correctifs",
},
{
  text: "R176. Les délais et ressources nécessaires à la migration de chaque composant logiciel en fin de vie doivent être identifiés et planifiés.",
  category: "Gestion des correctifs",
},
{
  text: "R177. Une procédure de test préalable au déploiement doit être mise en œuvre pour vérifier la stabilité et la compatibilité des correctifs avant leur mise en production.",
  category: "Gestion des correctifs",
},
{
  text: "R178. Les processus de déploiement des correctifs doivent être automatisés autant que possible à l’aide d’outils de gestion centralisée afin d’assurer cohérence et rapidité.",
  category: "Gestion des correctifs",
},
{
  text: "R179. Un mécanisme de retour arrière (rollback) doit être défini et documenté en cas de perturbation ou de régression causée par un correctif.",
  category: "Gestion des correctifs",
},
{
  text: "R180. Les systèmes ayant des exigences critiques de disponibilité doivent suivre un processus de validation distinct avant l’acceptation des correctifs, incluant une analyse d’impact.",
  category: "Gestion des correctifs",
},
{
  text: "R181. Le statut de déploiement et la couverture des correctifs critiques doivent être suivis à l’aide d’un tableau de bord ou d’un système centralisé de reporting.",
  category: "Gestion des correctifs",
},
{
  text: "R182. Un processus formel de gestion du changement doit être intégré à la gestion des correctifs afin de garantir traçabilité et validation.",
  category: "Gestion des correctifs",
},
{
  text: "R183. Les opérations de correctifs manuelles doivent être évitées autant que possible ; lorsqu’elles sont nécessaires, elles doivent être documentées et validées.",
  category: "Gestion des correctifs",
},
{
  text: "R184. Les équipements ou systèmes temporairement exemptés de correctifs doivent être suivis, documentés, et isolés ou protégés par des mesures compensatoires.",
  category: "Gestion des correctifs",
},
{
  text: "R185. Le succès ou l’échec des campagnes de déploiement de correctifs doit être consigné et revu après chaque opération.",
  category: "Gestion des correctifs",
},
{
  text: "R186. Les logiciels tiers utilisés dans les applications métier doivent être intégrés à la politique de gestion des correctifs et faire l’objet d’un suivi des mises à jour de sécurité.",
  category: "Gestion des correctifs",
},

// Postes de travail
{
  text: "R187. Les applications installées sur les postes de travail doivent être strictement limitées à celles nécessaires aux opérations métier.",
  category: "Postes de travail",
},
{
  text: "R188. Les extensions et modules complémentaires des navigateurs doivent être restreints à ceux requis et approuvés par l’organisation.",
  category: "Postes de travail",
},
{
  text: "R189. Les utilisateurs ne doivent pas disposer de droits administrateur sur leurs postes de travail, sauf autorisation explicite et contrôlée.",
  category: "Postes de travail",
},
{
  text: "R190. La protection par pare-feu local sur les postes de travail doit être activée via un logiciel intégré ou spécialisé.",
  category: "Postes de travail",
},
{
  text: "R191. Les configurations des pare-feux locaux sur les postes de travail doivent être régulièrement revues pour s’assurer de l’absence d’erreurs ou de mauvaises configurations.",
  category: "Postes de travail",
},
{
  text: "R192. Une solution antivirus de sécurité doit être active sur tous les postes clients.",
  category: "Postes de travail",
},
{
  text: "R193. La solution antivirus doit être maintenue à jour, tant le logiciel que la base de signatures.",
  category: "Postes de travail",
},
{
  text: "R194. Les configurations de l’antivirus sur les postes de travail doivent être vérifiées régulièrement pour détecter toute erreur ou alerte.",
  category: "Postes de travail",
},
{
  text: "R195. Les postes de travail doivent être mis à jour automatiquement avec les derniers correctifs de sécurité du système d’exploitation.",
  category: "Postes de travail",
},
{
  text: "R196. Tout poste nécessitant une exemption aux règles de sécurité globales doit être isolé du système d’information, notamment en cas d’incompatibilité de certaines applications avec les mises à jour.",
  category: "Postes de travail",
},
{
  text: "R197. Les données essentielles au fonctionnement de l’organisation présentes sur les postes utilisateurs doivent être sauvegardées et restaurées périodiquement pour vérification.",
  category: "Postes de travail",
},
{
  text: "R198. La capacité à restaurer les données depuis les postes de travail doit être régulièrement testée pour assurer leur disponibilité et leur intégrité.",
  category: "Postes de travail",
},
{
  text: "R199. La connexion de périphériques USB inconnus doit être interdite, et l’usage de supports externes non contrôlés limité autant que possible dans le système d’information.",
  category: "Postes de travail",
},
{
  text: "R200. Des solutions doivent être mises en œuvre pour empêcher l’exécution de programmes depuis les supports amovibles sur les postes utilisateurs.",
  category: "Postes de travail",
},
{
  text: "R201. Une procédure stricte d’élimination doit être définie et appliquée, incluant des méthodes de destruction sécurisée pour prévenir toute fuite d’information sensible.",
  category: "Postes de travail",
},
{
  text: "R202. Une analyse du trafic entrant autorisé (ex. : administration, logiciels d’infrastructure, applications spécifiques) doit être réalisée. Tout autre trafic doit être bloqué par défaut, seuls les services nécessaires provenant de sources identifiées devant être explicitement autorisés (liste blanche).",
  category: "Postes de travail",
},
{
  text: "R203. Les pare-feux doivent être configurés pour journaliser les flux bloqués afin d’identifier les erreurs de configuration ou les tentatives d’intrusion.",
  category: "Postes de travail",
},
{
  text: "R204. L’accès au BIOS/UEFI des postes de travail doit être restreint par un mot de passe.",
  category: "Postes de travail",
},
{
  text: "R205. Les utilisateurs doivent systématiquement verrouiller leur session lorsqu’ils quittent leur poste.",
  category: "Postes de travail",
},
{
  text: "R206. Des vérifications régulières doivent être effectuées pour s’assurer que les éléments d’authentification ne sont pas inscrits sur des supports visibles ou papier.",
  category: "Postes de travail",
},
{
  text: "R207. Les éléments d’authentification ne doivent pas être enregistrés dans les navigateurs, et le respect de cette règle doit être vérifié régulièrement.",
  category: "Postes de travail",
},
{
  text: "R208. L’exécution des scripts et macros (ex. : dans les documents Office) doit être désactivée par défaut et uniquement activée pour des sources de confiance via un processus de validation.",
  category: "Postes de travail",
},
{
  text: "R209. Les écrans des postes de travail doivent se verrouiller automatiquement après une période d’inactivité définie (ex. : 5 minutes).",
  category: "Postes de travail",
},
{
  text: "R210. Le stockage local de données sur les postes de travail doit être chiffré pour protéger les informations sensibles en cas de perte ou de vol.",
  category: "Postes de travail",
},
{
  text: "R211. Un mot de passe au démarrage ou un mécanisme de démarrage sécurisé équivalent doit être activé sur tous les postes de travail.",
  category: "Postes de travail",
},
{
  text: "R212. Des configurations de sécurité de référence doivent être appliquées et vérifiées régulièrement sur tous les postes de travail pour garantir leur conformité aux standards de l’organisation.",
  category: "Postes de travail",
},
{
  text: "R213. L’utilisation d’outils d’administration (ex. : PowerShell, cmd) doit être surveillée et restreinte aux utilisateurs et actions autorisés.",
  category: "Postes de travail",
},
{
  text: "R214. Les postes de travail doivent être intégrés à un système de journalisation centralisé pour surveiller les événements pertinents (ex. : échecs de connexion, alertes de sécurité).",
  category: "Postes de travail",
},
{
  text: "R215. Les comptes et services inutilisés doivent être régulièrement revus et supprimés des postes de travail.",
  category: "Postes de travail",
},
{
  text: "R216. L’accès à Internet depuis les postes de travail doit être filtré par un proxy sécurisé bloquant les domaines malveillants ou non autorisés.",
  category: "Postes de travail",
},
{
  text: "R217. Au démarrage, les postes de travail doivent vérifier l’intégrité des composants système critiques à l’aide d’un démarrage de confiance ou d’un mécanisme équivalent.",
  category: "Postes de travail",
},
// Réseau
	{
	"text": "R218. La portée de couverture du réseau Wi-Fi doit être physiquement contenue à l’intérieur des locaux de l’organisation.",
	"category": "Réseau"
	},
	{
	"text": "R219. Les prises réseau situées dans des zones accessibles au public (ex. : salles de réunion, halls d’accueil, couloirs, réserves) doivent être systématiquement désactivées.",
	"category": "Réseau"
	},
	{
	"text": "R220. Le système d’information doit être cloisonné à l’aide de VLAN dans les zones sensibles afin de limiter les mouvements latéraux d’éventuelles attaques.",
	"category": "Réseau"
	},
	{
	"text": "R221. Le réseau Wi-Fi invité doit être protégé par un mot de passe complexe et ne jamais être partagé avec des tiers non autorisés.",
	"category": "Réseau"
	},
	{
	"text": "R222. Le mot de passe du réseau Wi-Fi invité doit être changé régulièrement.",
	"category": "Réseau"
	},
	{
	"text": "R223. Le réseau Wi-Fi domestique utilisé à des fins professionnelles doit être protégé par un mot de passe robuste, mis à jour régulièrement, et non communiqué à des personnes non autorisées.",
	"category": "Réseau"
	},
	{
	"text": "R224. Les SSID des réseaux sans fil doivent être génériques et ne pas révéler l’identité de l’organisation.",
	"category": "Réseau"
	},
	{
	"text": "R225. Le mot de passe du réseau Wi-Fi domestique doit être complexe pour garantir une protection adéquate.",
	"category": "Réseau"
	},
	{
	"text": "R226. L’architecture réseau doit être segmentée pour limiter l’impact d’une intrusion sans fil à un périmètre spécifique. Le trafic des postes connectés en Wi-Fi doit être filtré et restreint aux flux strictement nécessaires.",
	"category": "Réseau"
	},
	{
	"text": "R227. Un mécanisme de mise à jour automatique du firmware doit être configuré pour les points d’accès sans fil (AP).",
	"category": "Réseau"
	},
	{
	"text": "R228. Les points d’accès doivent être administrés de manière sécurisée, via une interface dédiée, avec modification des identifiants administrateur par défaut.",
	"category": "Réseau"
	},
	{
	"text": "R229. Les tentatives de connexion infructueuses sur les équipements réseau doivent être détectées et activement bloquées.",
	"category": "Réseau"
	},
	{
	"text": "R230. Les accès doivent être journalisés dans un système de collecte centralisé, avec une durée de conservation minimale d’un an.",
	"category": "Réseau"
	},
	{
	"text": "R231. Des mécanismes de sécurité supplémentaires doivent être activés sur le serveur proxy en fonction des besoins (ex. : antivirus, filtrage d’URL). Des procédures doivent garantir la sécurité et la maintenance de ces équipements.",
	"category": "Réseau"
	},
	{
	"text": "R232. La résolution DNS directe sur les actifs doit être interdite ; toutes les requêtes DNS doivent transiter par le proxy.",
	"category": "Réseau"
	},
	{
	"text": "R233. Un niveau élevé de protection doit être mis en œuvre pour tous les services exposés à Internet (ex. : sites web, serveurs de messagerie), gérés par du personnel compétent, formé et disponible. En l’absence de ressources internes, un prestataire qualifié doit être mandaté.",
	"category": "Réseau"
	},
	{
	"text": "R234. L’infrastructure hébergeant des services exposés à Internet doit être segmentée du reste du SI interne.",
	"category": "Réseau"
	},
	{
	"text": "R235. Une infrastructure dédiée doit être déployée pour les services exposés à Internet, permettant de filtrer séparément les flux entrants et sortants.",
	"category": "Réseau"
	},
	{
	"text": "R236. Tous les flux entrants doivent transiter par un reverse proxy intégrant plusieurs mécanismes de sécurité.",
	"category": "Réseau"
	},
	{
	"text": "R237. Le transfert des courriels professionnels vers des comptes personnels doit être interdit.",
	"category": "Réseau"
	},
	{
	"text": "R238. Des méthodes sécurisées et contrôlées doivent permettre l’accès distant aux courriels professionnels.",
	"category": "Réseau"
	},
	{
	"text": "R239. Un système antivirus doit être déployé en amont des boîtes mail, qu’elles soient hébergées en interne ou en externe.",
	"category": "Réseau"
	},
	{
	"text": "R240. Le chiffrement TLS doit être activé pour sécuriser les communications entre serveurs de messagerie, ainsi qu’entre les postes et les serveurs.",
	"category": "Réseau"
	},
	{
	"text": "R241. Un serveur relais doit empêcher l’exposition directe des serveurs de messagerie à Internet. Ce relais doit être dédié à l’envoi/réception d’e-mails et non accessible depuis l’extérieur.",
	"category": "Réseau"
	},
	{
	"text": "R242. Un service antispam doit être déployé et configuré correctement en amont du flux de messagerie.",
	"category": "Réseau"
	},
	{
	"text": "R243. Des mécanismes de vérification d’authenticité des e-mails doivent être mis en œuvre (SPF, DKIM, DMARC) et les enregistrements DNS correctement configurés.",
	"category": "Réseau"
	},
	{
	"text": "R244. Toute interconnexion dédiée avec un fournisseur ou client doit se faire via un lien privé de l’organisation.",
	"category": "Réseau"
	},
	{
	"text": "R245. Les connexions partenaires doivent être filtrées, les partenaires externes étant considérés comme non fiables par défaut. Le filtrage IP doit être assuré par un pare-feu au plus proche du point d’entrée.",
	"category": "Réseau"
	},
	{
	"text": "R246. La matrice des flux (entrant/sortant) doit être limitée aux flux opérationnels strictement nécessaires, maintenue à jour et appliquée dans la configuration réseau.",
	"category": "Réseau"
	},
	{
	"text": "R247. Les équipements de filtrage des connexions partenaires doivent leur être dédiés, avec des IDS/IPS activés.",
	"category": "Réseau"
	},
	{
	"text": "R248. Un point de contact doit être identifié pour chaque partenaire, avec une liste à jour pour une réaction rapide en cas d’incident.",
	"category": "Réseau"
	},
	{
	"text": "R249. L’accès à l’interface d’administration du pare-feu doit être protégé par un mot de passe conforme à des exigences de complexité.",
	"category": "Réseau"
	},
	{
	"text": "R250. L’usage du NAT doit être limité aux services isolés dans la DMZ.",
	"category": "Réseau"
	},
	{
	"text": "R251. Le système d’exploitation du pare-feu doit être configuré pour se mettre à jour automatiquement.",
	"category": "Réseau"
	},
	{
	"text": "R252. Le système doit comporter des mécanismes de détection des environnements à risque ou anormaux.",
	"category": "Réseau"
	},
	{
	"text": "R253. Les journaux d’accès à Internet doivent être conservés pendant au moins un an.",
	"category": "Réseau"
	},
	{
	"text": "R254. Un IDS (détection) doit être déployé et opérationnel sur tous les équipements de filtrage.",
	"category": "Réseau"
	},
	{
	"text": "R255. Un IPS (prévention) doit être déployé et opérationnel sur tous les équipements de filtrage.",
	"category": "Réseau"
	},
	{
	"text": "R256. Un système de géolocalisation doit être déployé sur les équipements de filtrage, capable de bloquer les connexions anonymes ou non autorisées.",
	"category": "Réseau"
	},
	{
	"text": "R257. L’accès à la console d’administration ne doit jamais être possible avec des identifiants par défaut.",
	"category": "Réseau"
	},
	{
	"text": "R258. Les OS des équipements d’interconnexion (ex. : switchs) doivent être configurés pour des mises à jour automatiques.",
	"category": "Réseau"
	},
	{
	"text": "R259. Les journaux d’accès aux interfaces d’administration doivent être conservés pendant au moins un an.",
	"category": "Réseau"
	},
	{
	"text": "R260. Les interfaces d’administration réseau doivent être accessibles uniquement depuis un réseau d’administration dédié et segmenté.",
	"category": "Réseau"
	},
	{
	"text": "R261. Les sauvegardes de configuration des équipements réseau doivent être régulières et stockées en toute sécurité avec un accès restreint.",
	"category": "Réseau"
	},
	{
	"text": "R262. L’intégrité des fichiers de configuration réseau doit être surveillée pour détecter tout changement non autorisé.",
	"category": "Réseau"
	},
	{
	"text": "R263. SNMP doit être désactivé ou configuré avec des chaînes communautaires fortes et en version 3. Les valeurs par défaut doivent être changées.",
	"category": "Réseau"
	},
	{
	"text": "R264. IPv6 doit être désactivé s’il n’est pas utilisé, afin de limiter l’exposition inutile et la complexité du filtrage.",
	"category": "Réseau"
	},
	{
	"text": "R265. Les ports inutilisés des commutateurs doivent être désactivés ou sécurisés (ex. : liaison à une adresse MAC).",
	"category": "Réseau"
	},
	{
	"text": "R266. Les serveurs DHCP doivent être centralisés et les serveurs DHCP pirates détectés et bloqués.",
	"category": "Réseau"
	},
	{
	"text": "R267. Des mécanismes de contrôle d’accès réseau (NAC) doivent être déployés pour authentifier et vérifier les postes avant accès au SI.",
	"category": "Réseau"
	},
	{
	"text": "R268. Des règles de détection d’anomalies (ex. : volumes inhabituels) doivent être mises en place dans l’IDS/IPS ou le SIEM.",
	"category": "Réseau"
	},
	{
	"text": "R269. Les schémas réseau, plans IP et cartographies VLAN doivent être à jour et révisés au moins une fois par an.",
	"category": "Réseau"
	},
	
// Continuité d'activité / Sinistre
	
	{
	"text": "R270. Un plan de reprise ou de continuité d’activité doit être établi et maintenu afin d’assurer la résilience opérationnelle.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R271. Les équipes opérationnelles doivent effectuer au moins un exercice de reprise par an afin de valider leur niveau de préparation et leur capacité d’exécution.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R272. La reprise ou le basculement des activités doit être testé régulièrement afin d’en garantir l’efficacité et la fiabilité.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R273. Les processus métier critiques doivent être identifiés et priorisés afin de guider la planification de la reprise en fonction de leur temps d’arrêt acceptable (RTO) et de leur tolérance à la perte de données (RPO).",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R274. Un plan de communication de crise doit être formalisé afin de coordonner les communications internes et externes en cas de perturbation majeure.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R275. Les rôles et responsabilités de chaque acteur impliqué dans la réponse à un sinistre doivent être clairement définis et documentés.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R276. Le plan de reprise d’activité doit être accessible hors ligne et disponible sous forme imprimée ou numérique sécurisée.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R277. Les dépendances vis-à-vis de prestataires externes, y compris les fournisseurs cloud et infogérants, doivent être analysées afin que les obligations de continuité et de reprise soient définies contractuellement.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R278. Les retours d’expérience issus des tests de reprise ou d’incidents réels doivent être formellement documentés et intégrés aux mises à jour des plans.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R279. Le plan de continuité d’activité doit être revu au moins une fois par an, ou à l’occasion de tout changement majeur de l’organisation ou de l’infrastructure.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R280. Les données nécessaires à la reprise doivent être sauvegardées et stockées dans un emplacement physiquement et logiquement distinct de l’environnement de production.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R281. Des espaces de repli ou des capacités de télétravail doivent être prévus et testés pour les personnels critiques en cas d’indisponibilité du site principal.",
	"category": "Continuité d'activité / Sinistre"
	},
	{
	"text": "R282. Les exercices de crise doivent intégrer des scénarios réalistes de cyberattaque (ex. : ransomware, fuite de données) afin d’évaluer la réponse sous pression.",
	"category": "Continuité d'activité / Sinistre"
	},
	
// Authentifier et contrôler les accès
  
	{
	"text": "R283. L'utilisation de comptes non nominatifs doit être strictement interdite.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R284. Les utilisateurs ne doivent pas disposer de privilèges administratifs sur leur environnement local, sauf autorisation explicite et justification.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R285. L’utilisation de comptes génériques (ex. : admin, user) doit être réduite au minimum et limitée à un nombre restreint de personnes autorisées.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R286. Chaque administrateur doit disposer d’un compte d’administration nominatif, distinct de son compte utilisateur. Les identifiants et secrets d’authentification doivent différer entre ces deux comptes.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R287. La journalisation des événements liés aux comptes — y compris les tentatives de connexion réussies et échouées — doit être activée et surveillée.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R288. Un inventaire précis et à jour des ressources contenant des données sensibles (ex. : répertoires, bases de données, boîtes mail) doit être maintenu.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R289. Pour chaque ensemble de données sensibles, la population autorisée doit être clairement définie. L’accès doit être strictement contrôlé par authentification et validation de l’appartenance, avec des mécanismes empêchant la dispersion ou la duplication non autorisée vers des emplacements non maîtrisés ou moins sécurisés.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R290. Les droits d’accès aux données sensibles doivent être régulièrement revus afin de détecter et révoquer tout accès non autorisé.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R291. Une politique de mot de passe doit être définie, incluant les bonnes pratiques en matière de composition, de complexité et de longueur.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R292. L’application de la politique de mot de passe doit être activement surveillée et vérifiée.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R293. Les utilisateurs et parties prenantes doivent être consultés et informés avant toute mise en œuvre technique de la politique de mot de passe, afin d’en assurer la compréhension et l’adhésion.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R294. Les mots de passe doivent être stockés à l’aide de solutions sécurisées, incluant des coffres-forts numériques et des mécanismes de chiffrement.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R295. L’accès au coffre-fort numérique doit être protégé par un mot de passe fort conforme aux standards de sécurité actuels.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R296. Les processus de stockage et de transmission des identifiants doivent systématiquement inclure un chiffrement.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R297. Les identifiants par défaut de tous les composants du système doivent être modifiés immédiatement après leur déploiement.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R298. En cas d’impossibilité de changer un mot de passe, le problème doit être remonté et signalé à l’éditeur ou au distributeur du produit.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R299. Les mots de passe doivent être renouvelés régulièrement, conformément à la politique de l’organisation.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R300. Des mécanismes d’authentification forte, reposant sur deux facteurs distincts, doivent être mis en œuvre lorsque cela est applicable.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R301. L’utilisation de cartes à puce doit être privilégiée pour l’authentification ; à défaut, des mécanismes OTP avec jetons physiques peuvent être utilisés.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R302. Un processus formel d’intégration et de sortie des collaborateurs doit être mis en œuvre afin d’assurer la création, la modification et la révocation des comptes et des droits d’accès en temps utile.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R303. Les comptes dormants ou inactifs doivent être automatiquement désactivés après une période prédéfinie d’inactivité (ex. : 60 ou 90 jours).",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R304. L’accès administratif ne doit être possible que depuis des postes identifiés et sécurisés, ou depuis des zones d’administration dédiées.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R305. Les tentatives d’authentification depuis des lieux, des horaires ou des adresses IP inhabituels doivent déclencher une alerte ou nécessiter une vérification supplémentaire.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R306. Les solutions de fédération d’identité ou d’authentification unique (SSO) doivent être évaluées et mises en œuvre lorsque cela est pertinent pour centraliser le contrôle et la supervision des accès.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R307. Les comptes d’urgence ou break-glass doivent être encadrés par des procédures strictes, un accès limité et une revue obligatoire après utilisation.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R308. L’accès aux environnements de test ou de préproduction doit être restreint et ne doit pas reposer sur des identifiants partagés ou un accès ouvert.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R309. Tous les comptes de service doivent suivre des règles spécifiques de création, de nommage et de cycle de vie, avec des permissions limitées au strict nécessaire.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R310. Tous les systèmes d’authentification doivent être résilients et redondants afin d’éviter toute perte d’accès en cas d’incident.",
	"category": "Authentifier et contrôler les accès"
	},
	{
	"text": "R311. Des audits réguliers doivent vérifier que tous les comptes utilisateurs et administrateurs sont liés de manière unique à une personne identifiée et ne sont pas partagés.",
	"category": "Authentifier et contrôler les accès"
	},

// Administration

	{
	"text": "R312. Un poste de travail dédié, physique ou virtuel, doit être prévu pour les tâches d’administration et ne doit jamais avoir accès à Internet.",
	"category": "Administration"
	},
	{
	"text": "R313. La connexion autonome de prestataires via des outils d’administration tiers doit être interdite.",
	"category": "Administration"
	},
	{
	"text": "R314. Lorsqu’une délégation de privilèges est nécessaire pour répondre à un besoin utilisateur spécifique, celle-ci doit être tracée, limitée dans le temps et révoquée à l’issue de la période définie.",
	"category": "Administration"
	},
	{
	"text": "R315. Les ports d’administration à distance doivent être fermés ou désactivés lorsqu’ils ne sont pas explicitement requis.",
	"category": "Administration"
	},
	{
	"text": "R316. Les mises à jour logicielles des équipements gérés doivent provenir d’une source sécurisée, et leur transfert vers le poste ou serveur d’administration (qui ne doit pas être connecté à Internet) doit être maîtrisé. Le cas échéant, un support amovible dédié peut être utilisé.",
	"category": "Administration"
	},
	{
	"text": "R317. Une zone d’échange doit être utilisée pour automatiser et sécuriser les tâches spécifiques de transfert de fichiers.",
	"category": "Administration"
	},
	{
	"text": "R318. Les postes de travail, serveurs et interfaces d’administration doivent être logiquement séparés du réseau bureautique des utilisateurs.",
	"category": "Administration"
	},
	{
	"text": "R319. Une segmentation logique doit être mise en œuvre à l’aide de VLANs.",
	"category": "Administration"
	},
	{
	"text": "R320. Une segmentation logique cryptographique doit être appliquée au moyen de tunnels IPSec.",
	"category": "Administration"
	},
	{
	"text": "R321. Une segmentation physique du réseau doit être mise en place lorsque cela est nécessaire pour renforcer les barrières de sécurité.",
	"category": "Administration"
	},
	{
	"text": "R322. Toutes les actions d’administration doivent être journalisées de manière infalsifiable et revues régulièrement pour détecter toute activité non autorisée ou anormale.",
	"category": "Administration"
	},
	{
	"text": "R323. Une authentification multifactorielle (MFA) doit être imposée pour l’accès à toutes les interfaces d’administration, y compris les portails d’accès à distance et les jump servers.",
	"category": "Administration"
	},
	{
	"text": "R324. Les outils d’administration (ex. : consoles distantes, plateformes d’orchestration) doivent être durcis et configurés pour minimiser la surface d’attaque.",
	"category": "Administration"
	},
	{
	"text": "R325. La liste des administrateurs autorisés doit être revue périodiquement pour révoquer les privilèges obsolètes ou non nécessaires.",
	"category": "Administration"
	},
	{
	"text": "R326. L’accès aux interfaces d’administration doit être limité dans le temps et activé uniquement lorsque cela est nécessaire pour des tâches spécifiques (accès juste-à-temps).",
	"category": "Administration"
	},
	{
	"text": "R327. Un bastion ou jump server doit être utilisé pour centraliser et contrôler l’accès aux interfaces d’administration internes.",
	"category": "Administration"
	},
	{
	"text": "R328. Les scripts et outils d’automatisation utilisés pour l’administration doivent être versionnés, documentés et stockés dans un dépôt sécurisé.",
	"category": "Administration"
	},
	{
	"text": "R329. Les identifiants administrateurs ne doivent pas être réutilisés entre environnements ou systèmes, et doivent être régulièrement renouvelés.",
	"category": "Administration"
	},
	{
	"text": "R330. Les sessions d’administration doivent être chiffrées de bout en bout et ne doivent pas transiter par des réseaux non sécurisés ou publics.",
	"category": "Administration"
	},
	{
	"text": "R331. L’activation et la désactivation des comptes d’administration doivent suivre un processus formel avec des étapes de validation.",
	"category": "Administration"
	},
	
];

const container = document.getElementById('questionsContainer');
const categories = [...new Set(questions.map(q => q.category))];

categories.forEach(category => {
const details = document.createElement('details');
const summary = document.createElement('summary');
summary.innerHTML = `${categoryEmojis[category] || ''} ${category}`;
summary.classList.add('category-summary'); // ajout de classe pour le style
details.appendChild(summary);

  questions.filter(q => q.category === category).forEach(q => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `
      <p>${q.text}</p>
      <label><input type="radio" name="${q.text}" value="Yes"> 🟢 Oui</label>
      <label><input type="radio" name="${q.text}" value="No"> 🔴 Non</label>
      <label><input type="radio" name="${q.text}" value="Partially"> 🟠 Partiellement</label>
      <label><input type="radio" name="${q.text}" value="Not applicable"> ⚪ Non concerné</label>
      <br>
      <textarea name="note_${q.text}" placeholder="Ajouter un commentaire ou une justification..." rows="2" style="width:100%; margin-top:6px;"></textarea>
    `;
    details.appendChild(div);
  });

  container.appendChild(details);
});

let complianceChartInstance = null;
let categoryChartInstance = null;
let radarChartInstance = null;

function saveAnswers() {
  const form = document.getElementById('auditForm');
  const formData = new FormData(form);
  const answers = {};
  let yes = 0, no = 0, partial = 0, totalPoints = 0;
  const categoryScores = {};
  const categoryCounts = {};

questions.forEach(q => {
  const val = formData.get(q.text);
  answers[q.text] = val || "No answer";
  const note = formData.get(`note_${q.text}`);
  answers[`note_${q.text}`] = note || "";

  if (val === "Not applicable" || !val) return; // ⛔ Ne pas compter

  categoryScores[q.category] = categoryScores[q.category] || 0;
  categoryCounts[q.category] = categoryCounts[q.category] || 0;

  if (val === "Yes") { yes++; totalPoints += 1; categoryScores[q.category] += 1; }
  else if (val === "Partially") { partial++; totalPoints += 0.5; categoryScores[q.category] += 0.5; }
  else if (val === "No") { no++; }

  categoryCounts[q.category]++;
});

  const json = JSON.stringify(answers, null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const today = new Date();
  const formattedDate = today.toISOString().split('T')[0]; // format YYYY-MM-DD
  a.download = `Your_R.331-Audit-Results_${formattedDate}.json`;

  a.click();
  URL.revokeObjectURL(url);

  const applicableCount = yes + partial + no;
  const compliancePercent = applicableCount > 0 ? Math.round((totalPoints / applicableCount) * 100) : 0;

  drawCharts(yes, partial, no, compliancePercent, categoryScores, categoryCounts);
}

function loadAnswers(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    const answers = JSON.parse(e.target.result);
    let yes = 0, no = 0, partial = 0, totalPoints = 0;
    const categoryScores = {};
    const categoryCounts = {};

questions.forEach(q => {
  const val = answers[q.text];
  if (val) {
    const radios = document.getElementsByName(q.text);
    radios.forEach(r => r.checked = r.value === val);
    const noteField = document.querySelector(`textarea[name="note_${q.text}"]`);
    if (noteField && answers[`note_${q.text}`]) {
      noteField.value = answers[`note_${q.text}`];
    }

    if (val === "Not applicable") return; // ⛔ Ne pas compter

    categoryScores[q.category] = categoryScores[q.category] || 0;
    categoryCounts[q.category] = categoryCounts[q.category] || 0;

    if (val === "Yes") { yes++; totalPoints += 1; categoryScores[q.category] += 1; }
    else if (val === "Partially") { partial++; totalPoints += 0.5; categoryScores[q.category] += 0.5; }
    else if (val === "No") { no++; }

    categoryCounts[q.category]++;
  }
});


    const applicableCount = yes + partial + no;
	const compliancePercent = applicableCount > 0 ? Math.round((totalPoints / applicableCount) * 100) : 0;
    drawCharts(yes, partial, no, compliancePercent, categoryScores, categoryCounts);
    alert('Answers loaded!');
  };
  reader.readAsText(file);
}

function drawCharts(yes, partial, no, compliancePercent, categoryScores, categoryCounts) {
  const ctx = document.getElementById('complianceChart').getContext('2d');
  if (complianceChartInstance) complianceChartInstance.destroy();
  complianceChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Yes', 'Partially', 'No'],
      datasets: [{
        data: [yes, partial, no],
        backgroundColor: ['#4caf50', '#ff9800', '#f44336']
      }]
    },
    options: {
      plugins: { legend: { position: 'bottom' }, tooltip: { enabled: true } },
      cutout: '70%',
      responsive: true
    },
    plugins: [{
      id: 'centerText',
      afterDraw(chart) {
        const { ctx, chartArea: { width, height } } = chart;
        ctx.save();
        ctx.font = 'bold 24px Arial';
        ctx.fillStyle = '#333';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${compliancePercent}%`, width / 2, height / 2);
      }
    }]
  });

  const barCtx = document.getElementById('categoryChart').getContext('2d');
  if (categoryChartInstance) categoryChartInstance.destroy();

  const uniqueCategories = [...new Set(questions.map(q => q.category))];

  const barScores = uniqueCategories.map(cat => {
    const total = questions.filter(q => q.category === cat).length;
    const score = categoryScores[cat] || 0;
    return total > 0 ? score / total : 0;
  });

  const maxBarScore = Math.max(...barScores);

  categoryChartInstance = new Chart(barCtx, {
    type: 'bar',
    data: {
      labels: uniqueCategories,
      datasets: [{
        label: 'Average score',
        data: barScores,
        backgroundColor: barScores.map(score => {
          if (score < 0.2) return '#f44336';       // 🔴 rouge
          if (score < 0.6) return '#ff9800';       // 🟠 orange
          return '#4caf50';                        // 🟢 vert
        })
      }]
    },
    options: {
      plugins: {
        legend: { display: false },
        title: { display: true, text: 'Average scores per category' }
      },
      scales: {
        y: { beginAtZero: true, max: Math.ceil(maxBarScore) }
      }
    }
  });

// 🕸️ Radar chart
const radarCtx = document.getElementById('radarChart').getContext('2d');

const radarData = uniqueCategories.map(cat => {
  const total = questions.filter(q => q.category === cat).length;
  const score = categoryScores[cat] || 0;
  return total > 0 ? Math.round((score / total) * 100) : 0;
});

if (radarChartInstance) radarChartInstance.destroy();

radarChartInstance = new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: uniqueCategories,
    datasets: [{
      label: 'Score moyen par catégorie',
      data: radarData,
      backgroundColor: 'rgba(52, 152, 219, 0.4)',
      borderColor: '#3498db',
      pointBackgroundColor: '#3498db'
    }]
  },
  options: {
    responsive: true,
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          callback: value => `${value}%`
        },
        pointLabels: {
          font: { size: 12 }
        }
      }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: context => `${context.raw}%`
        }
      }
    }
  }
});

  
  
  // 💡 Recommendations section
  const recommendationsContainer = document.getElementById('recommendationsContainer');
  recommendationsContainer.innerHTML = '<h3>Recommendations for Improvement</h3>';
  let hasRecs = false;

  uniqueCategories.forEach((cat, idx) => {
    const score = barScores[idx];
    if (score < 0.6) {
      hasRecs = true;
      const p = document.createElement('p');
      p.innerHTML = `<strong>${categoryEmojis[cat] || ''} ${cat}:</strong> ${categoryRecommendations[cat] || 'No suggestion available.'}`;
      recommendationsContainer.appendChild(p);
    }
  });

  if (!hasRecs) {
    recommendationsContainer.innerHTML += "<p>✅ Great job! All categories are well covered.</p>";
  }

}
