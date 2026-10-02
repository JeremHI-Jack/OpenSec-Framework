const categoryEmojis = {
  "External exposure": "🌐",
  "Physical Security": "🏢",
  "Sensibilization/Training": "🧠",
  "Supervise, Audit, React": "📊",
  "Know the SI": "🧭",
  "Nomadism": "🧳",
  "Servers": "🖥️",
  "Patch Management": "🩹",
  "Workstations": "💻",
  "Network": "🛜",
  "Disaster": "🚨",
  "Authenticate and control access": "🔐",
  "Administration": "⚙️"
};
const categoryRecommendations = {
  "External exposure": "To strengthen your organization's external exposure posture, enforce HTTPS on all public-facing services, regardless of the nature of the data handled, to ensure encrypted communications (R001). SSL/TLS certificates should be regularly reviewed across all domains and subdomains to avoid expirations and ensure consistent validity periods (R002). Eliminate all default configuration files, index pages, or installation artifacts that may reveal implementation details (R003), and ensure that no version information is disclosed by services or technologies in use (R004), as these could facilitate targeted attacks. Any publicly accessible interface with login functionality must implement automatic banning mechanisms to deter brute-force attempts (R005). Cookie management must strictly comply with local regulations (e.g., GDPR) and avoid storing any sensitive or identifying information (R006). Regular vulnerability scans must be conducted across all exposed services, websites, and APIs to proactively identify and remediate flaws before exploitation (R007). Maintain a comprehensive inventory of all domain names, subdomains, and public cloud resources. These should be continuously monitored for DNS misconfigurations or unauthorized exposure (R008, R012). All external traffic should pass through a Web Application Firewall (WAF) or equivalent solution, enabling filtering and traffic logging for forensic and prevention purposes (R009). Public IP addresses must be documented and periodically reviewed to ensure that only authorized services remain accessible (R010). Authentication should be enforced on every external service where applicable, and anonymous access must be explicitly justified and limited (R011). Directory listings on web servers must be disabled by default unless their use is clearly documented and necessary (R013). Rate-limiting mechanisms or CAPTCHAs should be present on all login forms to prevent credential stuffing and brute-force attacks (R014). Apply appropriate HTTP security headers such as Content-Security-Policy, HSTS, and X-Frame-Options to enhance browser-side protection of public-facing web applications (R015). Disable or block all unnecessary services and ports on systems exposed to the internet to reduce the attack surface (R016). Lastly, implement an external attack surface monitoring tool to continuously detect newly exposed services, shadow IT, and misconfigurations in real time (R017).", 
  "Physical Security": "To enhance the physical security of your organization's facilities, start by systematically verifying the identity of all visitors before granting access to any premises (R018). Maintain a detailed and regularly updated access log for technical areas to support traceability and investigations if needed (R019). Ensure that staff are trained to check the access rights of third parties and challenge unknown individuals when necessary (R020). All sites must be protected by robust physical access controls such as keys, badges, or equivalent systems (R021), with site entrances monitored via video surveillance (R022). Technical premises should be strategically located—away from high-crime zones, flood-prone areas, and must be fire-protected—to reduce environmental and criminal risks (R023). The physical design must guarantee complete separation of secure zones, with walls extending from subfloor to above the false ceiling (R024). Emergency power solutions like UPS or generators must be available (R025) and tested at least annually to ensure operational resilience during power outages (R026). Environmental conditions within these areas must be tightly controlled: maintain relative humidity between 40–55% (R027) and temperature between 20–25°C (R028). All technical rooms must be equipped with smoke or heat detection systems (R029). Employees should be regularly reminded not to leave paper documents freely accessible in work areas, and any sensitive information must be securely locked away (R030). Review physical access logs regularly to detect suspicious or unauthorized entries (R031). Where feasible, protect sensitive areas with dual-factor physical access (e.g., badge + PIN) (R032). Visitor badges must be clearly distinct from staff badges and revoked immediately after use (R033), and any obsolete keys or access credentials must be promptly deactivated when staff roles change or upon departure (R034). The integrity of physical security barriers—doors, locks, windows—should be inspected routinely, either through security patrols or automated systems (R035). Restricted zones must be clearly marked with appropriate signage indicating access level and protection standards (R036). Emergency exits must strike a balance between enabling rapid evacuation and preventing unauthorized entry from outside (R037). Video surveillance data must be retained for a legally compliant duration and protected against tampering or unauthorized access (R038). Critical equipment such as servers and switches must be physically enclosed or locked to deter theft and sabotage (R039). Finally, conduct and update a comprehensive physical security risk assessment at least annually or after any significant changes to infrastructure (R040).", 
  "Sensibilization/Training": "To strengthen your organization's security posture, it is essential to embed a continuous culture of awareness among all stakeholders. Begin by ensuring that all operational teams receive onboarding training on cybersecurity best practices when they join the organization (R041), and that this training continues regularly through various formats—emails, posters, meetings, or intranet platforms. Don’t overlook external personnel (e.g., contractors, IT service providers); they must also be made aware of your organization's IT security requirements (R042). All employees must receive structured annual training (R043), covering essential topics such as password hygiene, phishing recognition, data protection, and regulatory compliance. Make sure users understand how to assess the legitimacy of emails, especially regarding sender identity, link consistency, and unexpected attachments. Promote verification of suspicious messages via secondary channels like phone or SMS (R044). Establish and enforce a clear IT Usage Charter that defines user responsibilities and acceptable behaviors; this must be signed by every collaborator (R045). Ensure IT management providers are held to strong contractual obligations including data recoverability, auditability, and long-term adherence to security standards (R046). At a broader level, formalize and publish an Information Security Policy (ISP) that is endorsed by senior management to drive internal engagement (R047). Conduct simulated phishing campaigns at least annually to assess and enhance user vigilance (R048). Customize awareness content based on user roles—developers, system administrators, managers—so each group receives relevant and actionable training (R049). Establish a clear channel where users can report suspicious activities or emails quickly (R050). Innovate by exploring modern training formats like gamified quizzes, short videos, or microlearning modules to improve engagement and retention (R051). Track participation in awareness sessions (R052) and evaluate their effectiveness using tests, surveys, or feedback mechanisms (R053). Don’t forget to address physical social engineering threats, such as tailgating or badge sharing, during your sessions (R054). Remind employees regularly of secure practices regarding USB drives and removable media, including scanning protocols and encryption (R055). Appoint security champions within operational teams to act as local relays and role models for good security practices (R056). Finally, integrate awareness training into formal HR processes—onboarding, offboarding, and audits—to ensure complete and consistent coverage (R057).",
  "Supervise, Audit, React": "To ensure continuous visibility and effective response to security threats, your organization must establish a robust supervision, audit, and incident response framework. Start by identifying critical components of your information system—such as security appliances, servers, and sensitive workstations—and review their logging configurations (R058). All critical events must be logged and retained for at least one year, or longer if required by regulatory or legal constraints (R059). Logging must be preceded by a contextual analysis to determine what events are relevant and to ensure consistency and usefulness of the data (R060, R061). Ensure that all systems use a synchronized time source (e.g., via NTP) to allow accurate event correlation across devices (R062), and that all logs are centralized in a secure and dedicated platform for correlation and analysis (R063). Establish and regularly update a formal backup policy that specifies the backup scope and frequency (R064), and verify its effectiveness through recurring restoration tests that include different types of scenarios (R065). Conduct regular audits (R066) to evaluate the relevance and efficacy of security controls. Ensure that audit results lead to clear corrective actions (R067), which are tracked via progress indicators and reported to management through dashboards (R068). Appoint a clearly identified security point of contact (R069), properly trained in cybersecurity and crisis management (R070). The responsibilities of key security figures—such as the CISO—must be clearly communicated to all staff (R071), and in larger organizations, delegated local referents should serve as relays for user feedback and awareness needs (R072). Develop and maintain a formalized incident response procedure (R073), and centralize all security incidents in a registry for traceability and analysis (R074). Configure alerts for abnormal or critical behaviors—such as repeated authentication failures or anomalous access patterns (R075)—and consider deploying a SIEM solution to automate correlation and detection of threats (R076). Backups must be stored in isolated environments—ideally with immutable protection—to withstand data destruction attempts (R077). Your incident response plan must also include detailed communication strategies and clearly defined escalation paths (R078). Incorporate lessons learned from past incidents into your controls and procedures (R079), and test your responsiveness through crisis simulation exercises at least every two years (R080). Ensure the integrity and confidentiality of logs with access controls and cryptographic protections (R081). A formal change control process must monitor any security-impacting configuration change (R082), and all security alerts—even false positives—must be investigated and documented (R083). Finally, a real-time dashboard showing incident metrics, alerts, and remediation progress must be available to decision-makers (R084).",
  "Know the SI": "To effectively secure your information system, it is essential to build a comprehensive and continuously updated knowledge base of its components, data, and access paths. Begin by identifying all sensitive data across the system (R085) and documenting which systems—such as databases, shared folders, or endpoints—host them (R086). These systems must be protected through layered controls, including access restrictions, logging, and regular backups (R087). Maintain an up-to-date and simplified network diagram reflecting IP zones, routing elements, and external interconnections to visualize and assess potential exposure points (R088). An inventory of privileged and service accounts must be established and kept current (R089), with periodic reviews to remove outdated privileges and ensure accounts are linked to actual needs and roles (R090, R091). Access rights must be updated in line with role changes (R092), and immediately revoked upon departures or internal transfers (R093). Employee onboarding and offboarding processes must be formalized and regularly revised with HR to ensure timely and secure access provisioning (R094). Ensure only authorized and managed equipment can connect to your infrastructure (R095), and enforce strong device authentication (R096). Maintain a full inventory of all hardware and software assets, recording ownership, location, and criticality (R097), and assign a business or technical owner to each system component (R098). Dependencies between systems, applications, and third parties must be clearly mapped to support continuity and incident response (R099). Similarly, all externally exposed services must be tracked and regularly assessed for legitimacy and security (R100). Adopt a classification policy to prioritize protections based on asset criticality (R101), and identify and securely remove obsolete systems to reduce exposure (R102). Regularly audit access control lists and group memberships to ensure they reflect current operational needs (R103), and maintain an inventory of all remote access channels, linking them to authorized users (R104). Open-source and third-party software must also be inventoried and monitored for vulnerabilities (R105). Documentation covering infrastructure, procedures, and operations must be versioned, accessible, and kept up to date (R106). Physical access to critical spaces—such as server rooms—must be strictly controlled via badge systems or locks (R107), with formalized access issuance procedures aligned to HR processes (R108). Unauthorized or unsupervised access, especially by external providers, must be prevented (R109), and access rights must be reviewed regularly (R110) and revoked without delay after an employee's departure (R111).", 
  "Nomadism": "To enhance the security of mobile and remote work environments, organizations must implement strict controls and raise user awareness. Begin by training users on the risks associated with travel and shared environments, and instruct them to keep their devices within reach at all times (R112, R133). Remove any visible reference to the organization from mobile devices to reduce the risk of targeting (R113), and install privacy filters to prevent visual hacking (R114). All nomadic devices must enforce startup authentication through a PIN or equivalent mechanism (R115), with strong preference for two-factor authentication using external devices like smart cards or tokens (R116, R121). Full disk encryption is mandatory on all portable devices, along with encrypted storage for individual files or archives (R117, R118). Additionally, ensure mobile devices auto-lock after a short period of inactivity (R127) and support remote wipe capabilities in case of theft or loss (R126). All connections from mobile workstations to internal systems must go through an encrypted VPN or IPsec tunnel (R119), which users must not be able to disable manually (R120). Avoid using public or untrusted Wi-Fi networks, especially without secured tunnels (R128), and disable Bluetooth/NFC unless explicitly required for professional purposes (R129). Mobile phones and tablets must be strictly separated between personal and business use (R122), with uniform enforcement of security policies, such as locking methods and application restrictions (R123). Only approved applications may be installed (R130), and devices must be kept up to date with security patches through a centralized mobile device management (MDM) system (R124, R131). The MDM solution should also allow remote administration, including secure configuration, updates, and restrictions (R124). Integrated voice assistants, which may introduce confidentiality risks, must be disabled (R125). USB port usage should be tightly controlled via endpoint protection tools (R135), and a secure wipe must be performed before devices are reassigned or decommissioned (R134). Lastly, international travel procedures should include deploying devices configured with only essential data and access rights to minimize exposure (R132).",
  "Servers": "To improve the security posture of your organization's server infrastructure, begin by conducting regular vulnerability assessments on all servers and hosted services (R136). Only applications strictly necessary for operational needs should be installed (R137), and servers that do not require Internet connectivity must be explicitly restricted from accessing it (R138). Enforce strict privilege separation: users should never be part of the domain administrator group unless absolutely justified and tightly controlled (R139). All servers must be protected by active firewall solutions—either native or specialized—and their configurations must be reviewed regularly to avoid misconfigurations (R140, R141). Antivirus solutions must be deployed, updated, and monitored consistently, including both their signatures and configuration integrity (R142–R144). Servers that receive exceptions from standard security rules must be logically and physically isolated to prevent systemic exposure (R145). Critical data must be backed up to disconnected media (R146), and restoration procedures must be tested at least biannually to ensure recovery effectiveness (R147). Centralized tools like Active Directory should be used to manage infrastructure, following prior standardization of hardware and OS where needed (R148). Security policies must be standardized and consistently enforced across all environments (R149). For resilience, recovery mode should be enabled in directory services (R150). Analyze and whitelist only essential inbound connections, blocking all others by default (R151), and configure firewalls to log denied traffic for visibility into misconfigurations or potential attacks (R152). System and security updates must be applied promptly to all OS components and applications (R153). Administrative access must be limited to dedicated, internal workstations or administration zones (R154), and access by IT staff or third-party providers must be supervised or controlled through secure channels (R155). All administrative actions must be traceable to a named individual for auditability (R156), and privilege elevation must be done using distinct named accounts rather than shared or root credentials (R157). Apply a rigorous hardening baseline (e.g., CIS, ANSSI) to every server (R158). Remote access protocols like RDP or SSH must be secured with strong authentication and restricted to approved IPs or networks (R159). Implement configuration drift detection mechanisms to alert in case of unauthorized changes (R160). Separate production from development and testing environments, and avoid using real production data in non-production systems unless explicitly required and controlled (R161). To further reduce risk, secure the server boot process against unauthorized tampering (R162), and disable unused services and ports (R163). Replace default credentials, keys, and certificates before deployment (R164), and maintain an accurate and regularly reviewed inventory of all services and open ports to detect unauthorized or obsolete components (R165).",
  "Patch Management": "To enhance your organization's resilience against known vulnerabilities, start by establishing and maintaining a comprehensive patch management policy applicable to all components of the information system (R166). This must be supported by a continuous vulnerability watch, relying on trusted sources such as CERTs or vendors' advisories (R167). All security patches must be deployed within one month of vendor release to minimize the window of exposure (R168). Obsolete components no longer supported by vendors must be identified and isolated to prevent systemic risk (R169). A complete and regularly updated inventory of all systems and applications is essential to guide the patching strategy (R170). When selecting solutions, favor those with support lifecycles aligned with your intended usage period (R171), and monitor software update schedules and end-of-life dates to enable proactive transitions (R172). Maintaining a homogeneous software stack helps reduce attack surface and simplifies patching and monitoring (R173). Limit complex software dependencies early in the development lifecycle to minimize long-term risk (R174). Ensure contracts with suppliers and IT providers include obligations around patch management and obsolescence handling (R175), and plan migration paths and resources for unsupported components ahead of time (R176). Before rolling out patches to production systems, implement pre-deployment testing procedures to verify stability and compatibility (R177). Automate patch deployment using centralized tools to ensure consistent and timely rollouts across your infrastructure (R178), and define a rollback mechanism in case of disruption (R179). For systems with high availability requirements, apply a dedicated validation process that includes risk and impact assessments (R180). Track patch deployment coverage through dashboards or reporting tools to identify gaps or failures in real time (R181). Integrate patching into a formal change management workflow, including documentation, validation, and approval steps (R182). Avoid manual patching when possible; when needed, it must be documented and approved (R183). If certain systems are temporarily exempt from patching, they must be tracked, clearly documented, and protected through isolation or other compensatory measures (R184). Lastly, monitor the outcome of patch deployments by logging successes and failures, and analyzing results after each campaign (R185). Don’t forget to include third-party and open-source components in your patch policy, ensuring they’re subject to the same level of scrutiny as proprietary systems (R186).",
  "Workstations": "To significantly improve the security posture of your organization's endpoints, it is crucial to harden workstation configurations and enforce strong operational controls. Begin by limiting the installation of applications strictly to those required for business operations (R187), and restrict browser extensions to those explicitly approved by IT (R188). Users must not have administrative rights on their machines unless it is strictly required and documented (R189), which helps prevent malware propagation and misconfiguration. Enable local firewall protection using either built-in solutions or specialized software (R190), and regularly review its configuration to detect and correct any misconfigurations (R191). An active antivirus solution must be deployed across all workstations (R192), kept up to date in terms of both engine and signature databases (R193), and regularly audited for proper configuration and alerts (R194). Workstations must be automatically updated with the latest operating system security patches to reduce the exploitation window of known vulnerabilities (R195). If exceptions are necessary (e.g., for legacy applications), these devices must be logically isolated from the rest of the network (R196). Data stored locally on workstations that is critical to business operations must be backed up regularly and restoration procedures tested periodically (R197–R198). To reduce exposure to removable media threats, the use of unknown USB drives must be prohibited (R199), and execution from such media must be restricted using endpoint protection tools (R200). A formal and secure disposal procedure must be followed to prevent data leaks from decommissioned equipment (R201). Network traffic must be tightly controlled: only whitelisted traffic should be allowed, based on a prior analysis of legitimate flows (R202), and firewalls should log blocked attempts to identify misconfigurations or attacks (R203). Physical security of the workstation must also be reinforced: BIOS/UEFI access must be password-protected (R204), and users must lock their sessions when leaving their desks (R205). Authentication hygiene is also critical. Conduct regular checks to ensure credentials are not stored insecurely (R206), prevent storage of passwords in browsers (R207), and disable scripts/macros by default—only enabling them through a formal validation process for trusted sources (R208). Workstation screens must lock after a short period of inactivity (e.g., 5 minutes) to mitigate opportunistic access (R209), and local data storage must be encrypted (R210). Boot security must be reinforced with startup passwords or secure boot mechanisms (R211), and all machines must conform to a hardened baseline configuration that is regularly verified (R212). Administrative tools like PowerShell or command prompt must be restricted and monitored (R213), and logs from workstations must be centralized for analysis (R214). Finally, regularly audit and remove unused user accounts and unnecessary services (R215), route all internet traffic through secure proxy systems (R216), and verify system integrity during startup using trusted boot mechanisms (R217).",
  "Network": "To strengthen the security of your organization’s network infrastructure, begin by ensuring that the coverage of Wi-Fi networks is physically contained within company premises (R218), and that all publicly accessible network sockets are disabled to prevent unauthorized physical connections (R219). Network segmentation is essential—implement VLANs in sensitive areas (R220) and enforce strict traffic filtering, especially for Wi-Fi-connected devices (R226), to limit lateral movement. Guest and home Wi-Fi networks used for business must be protected with complex passwords, updated regularly (R221–R225), and SSIDs should not reveal the organization’s identity (R224). Wireless access points (APs) must support automated firmware updates (R227), be securely administered through dedicated management interfaces (R228), and default credentials must be changed. Intrusion attempts such as failed logins on network equipment must be actively monitored and blocked (R229), while access logs must be retained centrally for at least a year (R230). Proxy servers should include layered protections such as antivirus scanning and URL filtering, and DNS queries must be delegated through these proxies to ensure visibility and control (R231–R232). All services exposed to the Internet must be hardened (R233), hosted on a segmented infrastructure (R234), and filtered through reverse proxies with security functions (R236). Email infrastructure must be protected with antivirus, anti-spam, and TLS encryption (R239–R240), while relay servers (R241) and DNS authentication records (SPF, DKIM, DMARC – R243) must be correctly configured. Email redirection to personal accounts must be strictly prohibited (R237), and secure remote access methods provided (R238). Connectivity with partners must be secured through private links (R244), filtered via dedicated firewalls (R245–R247), and managed via up-to-date contact lists for rapid incident response (R248). Firewall administration interfaces must be protected by strong passwords (R249), support automatic OS updates (R251), and enforce logging of blocked traffic for anomaly detection (R252–R254). Intrusion detection/prevention (IDS/IPS), risk detection, and geolocation-based filtering should be activated across all filtering equipment (R255–R256). Management interfaces must not be accessible using default credentials (R257), must be reachable only from segmented admin networks (R260), and be protected by centralized logging and access control (R259). Network device configurations must be backed up (R261), monitored for integrity (R262), and managed securely—disable SNMP or use SNMPv3 with strong credentials (R263), disable IPv6 if unused (R264), and lock down unused switch ports (R265). Rogue DHCP servers must be blocked (R266), and NAC systems should enforce compliance before allowing access (R267). Finally, network documentation—including diagrams, IP plans, and VLAN mappings—must be reviewed and updated at least annually (R269), while anomaly detection rules must be applied to identify abnormal traffic behavior (R268).",
  "Disaster": "To enhance your organization's resilience in the face of disruptions, it is imperative to maintain a robust disaster recovery and business continuity framework. A formal recovery and continuity plan must be established (R270), clearly identifying critical business processes and their acceptable downtime (RTO) and data loss tolerance (RPO) to guide prioritization during recovery efforts (R273). This plan must be tested regularly (R271–R272) through simulated failover or recovery scenarios to validate operational readiness. All stakeholders involved in disaster response must have defined roles and responsibilities (R275), and the recovery plan must be accessible offline in secure formats (R276) to support continuity even in the event of network or infrastructure failure. A crisis communication plan must also be developed (R274) to ensure coherent coordination internally and externally during a major incident. Dependencies on third parties—including cloud providers and IT service vendors—must be reviewed and contractually secured to guarantee service availability and recovery options in the event of a disaster (R277). The organization must also maintain alternate workspaces or enable secure telework capabilities for essential staff, especially during site unavailability (R281). Recovery-related data must be backed up to a physically and logically isolated environment (R280) to reduce the risk of simultaneous compromise. Post-incident reviews and recovery drills must be thoroughly documented, with lessons learned used to continuously improve recovery processes (R278). Drills must reflect real-world cyberattack scenarios, such as ransomware or data breaches, to assess organizational reflexes under pressure (R282). Finally, the entire business continuity plan must be reviewed at least annually, or after any significant organizational or infrastructure change, to ensure continued relevance and effectiveness (R279).",
  "Authenticate and control access": "To ensure robust access control across your organization, start by strictly prohibiting non-nominative and generic accounts (R283, R285), and ensuring that every administrator uses a named, dedicated administration account separate from their user account (R286). Local administrator privileges should only be granted on a justified and controlled basis (R284). Account-related events—such as logins and failures—must be logged and monitored (R287) to enable traceability and detect suspicious activity. A precise and regularly updated inventory of resources containing sensitive data (e.g., file shares, mailboxes, databases) must be maintained (R288), with clearly defined authorized users (R289). Access rights must be reviewed frequently (R290), and onboarding/offboarding processes (R302) must be in place to avoid lingering or overprivileged accounts. Inactive accounts should be automatically disabled after a set period (R303). A strong password policy must be formalized (R291), enforced (R292), and communicated to users (R293). Passwords must be stored securely using encrypted vaults or equivalent mechanisms (R294–R295), and always transmitted via encrypted channels (R296). Default passwords must be changed upon deployment (R297), and any inability to do so must be escalated (R298). Passwords must be renewed in line with policy (R299). Where appropriate, enforce multi-factor authentication (MFA) (R300), ideally using smart cards or physical OTP tokens (R301). Administrative access should only be granted from secured workstations or zones (R304), and unusual authentication attempts must trigger alerts (R305). Implement identity federation or Single Sign-On (SSO) solutions to centralize control (R306), and manage emergency access accounts with strict post-use review (R307). Access to pre-production or test environments must be controlled and never use shared credentials (R308). Service accounts must follow strict lifecycle and permission rules (R309), and all authentication systems must include redundancy to prevent disruption during incidents (R310). Finally, regular audits must ensure all accounts are nominative and linked to individual users (R311).",
  "Administration": "To protect administrative functions from misuse or compromise, organizations must enforce strict segmentation and control over all administrative activities. Start by requiring that all administrative tasks be performed from dedicated workstations—either physical or virtual—that are completely isolated from the Internet (R312). Remote administration ports must be disabled unless explicitly required (R315), and any software updates must be sourced from trusted repositories and securely transferred to isolated systems (R316). When necessary, use a dedicated and controlled removable media device. All file transfers related to administration should be conducted via a secure, automated exchange zone (R317). To limit attack surfaces and lateral movement risks, administrative interfaces, workstations, and servers must be logically (R318–R319), cryptographically (R320), and sometimes physically partitioned from the rest of the network (R321). Administrative privileges must be strictly governed. Delegations must be traceable, time-bound, and automatically revoked when expired (R314). The list of authorized administrators should be reviewed regularly (R325), and access to interfaces must be limited in time and purpose using just-in-time access principles (R326). Administrative accounts must only be activated/deactivated through a formal approval process (R331). All administrative actions must be logged in tamper-proof formats (R322) and periodically reviewed. Sessions must be encrypted from end to end (R330), and administrative credentials must be unique to each environment and rotated regularly (R329). Reuse across systems is strictly prohibited. Access to all administration interfaces—local or remote—must require multi-factor authentication (R323). Connections must be funneled through a bastion host or jump server (R327) to centralize control and reduce exposure. Tools used for administrative tasks, such as orchestration platforms and consoles, must be hardened (R324), while scripts and automation mechanisms must be documented, version-controlled, and securely stored (R328). Finally, third-party providers must never be granted autonomous access via external tools (R313), and any administrative activity must respect the organization’s network segregation and policy constraints to minimize risk."
};

// External exposure
const questions = [
	{
	text: "R001. All assets published by or for the organization must be accessible exclusively via HTTPS, even if they do not contain sensitive information.",
	category: "External exposure",
	},
	{
	text: "R002. The alignment of SSL/TLS certificate validity periods across all subdomains and publicly exposed assets must be ensured on a regular basis.",
	category: "External exposure",
	},
	{
	text: "R003. The absence of default configuration artifacts (e.g., index pages) or default configurations (e.g., configuration files) must be ensured on all publicly exposed assets.",
	category: "External exposure",
	},
	{
	text: "R004. The absence of assets disclosing version information about services, systems, or underlying technologies must be ensured on all publicly exposed assets.",
	category: "External exposure",
	},
	{
	text: "R005. An automatic ban mechanism must be implemented on all interfaces that allow user identification.",
	category: "External exposure",
	},
	{
	text: "R006. Cookie usage must comply with applicable local regulations, and no sensitive information must be stored in cookies.",
	category: "External exposure",
	},
	{
	text: "R007. Vulnerability analyses must be conducted on a regular basis for all publicly exposed assets, including services and websites.",
	category: "External exposure",
	},
	{
	text: "R008. All domain names and subdomains must be regularly inventoried and monitored for unauthorized exposure or DNS misconfigurations.",
	category: "External exposure",
	},
	{
	text: "R009. A Web Application Firewall (WAF) or equivalent solution must be deployed to filter and log external traffic to exposed web services.",
	category: "External exposure",
	},
	{
	text: "R010. Public IP addresses must be documented and regularly reviewed to ensure no unauthorized services are exposed.",
	category: "External exposure",
	},
	{
	text: "R011. All externally exposed services must require authentication where applicable, and anonymous access must be disabled unless explicitly justified.",
	category: "External exposure",
	},
	{
	text: "R012. Public cloud assets (e.g., S3 buckets, containers, databases) must be configured to deny public access by default.",
	category: "External exposure",
	},
	{
	text: "R013. Directory listing must be disabled on all web servers unless strictly required and documented.",
	category: "External exposure",
	},
	{
	text: "R014. Exposed login portals must implement rate-limiting or CAPTCHA mechanisms to mitigate brute-force attacks.",
	category: "External exposure",
	},
	{
	text: "R015. Security headers (e.g., Content-Security-Policy, X-Frame-Options, HSTS) must be configured on all public-facing web applications.",
	category: "External exposure",
	},
	{
	text: "R016. Unused services and ports on publicly accessible systems must be disabled or blocked at the firewall level.",
	category: "External exposure",
	},
	{
	text: "R017. An external attack surface monitoring tool must be in place to continuously detect new exposed services or misconfigurations.",
	category: "External exposure",
	},

// Physical Security
	{
	text: "R018. Physical security of premises must be reinforced by verifying the identity of all visitors.",
	category: "Physical Security",
	},
	{
	text: "R019. Access to technical premises must be documented in an access log, in accordance with physical security requirements.",
	category: "Physical Security",
	},
	{
	text: "R020. Collaborators must be made aware of the need to verify the access rights of third parties present on-site.",
	category: "Physical Security",
	},
	{
	text: "R021. Access to sites must be secured by doors equipped with access control mechanisms such as keys, badges, or equivalent systems.",
	category: "Physical Security",
	},
	{
	text: "R022. Site entrances must be monitored by a video surveillance system.",
	category: "Physical Security",
	},
	{
	text: "R023. Technical premises must be located away from areas of criminal activity, outside of flood zones, and protected against fire risks.",
	category: "Physical Security",
	},
	{
	text: "R024. The walls of technical rooms must extend from the subfloor to above the false ceiling to ensure full physical separation.",
	category: "Physical Security",
	},
	{
	text: "R025. Emergency electrical power supplies, such as uninterruptible power supplies (UPS) and/or generators, must be in place to ensure power continuity.",
	category: "Physical Security",
	},
	{
	text: "R026. Emergency electrical power supplies must be tested at least annually to ensure they can sustain a power outage for a duration aligned with the organization’s operational requirements.",
	category: "Physical Security",
	},
	{
	text: "R027. Relative humidity in technical environments must be measured and maintained between 40% and 55%.",
	category: "Physical Security",
	},
	{
	text: "R028. Temperature in technical environments must be measured and maintained between 20°C and 25°C (68°F to 77°F).",
	category: "Physical Security",
	},
	{
	text: "R029. Smoke and/or heat detectors must be installed in all technical rooms.",
	category: "Physical Security",
	},
	{
	text: "R030. Collaborators must be made aware that freely accessible paper documents in working areas should be minimized, and that any document containing sensitive or confidential information must be stored under lock and key.",
	category: "Physical Security",
	},
	{
	text: "R031. Physical access logs must be reviewed regularly to detect unauthorized or abnormal access attempts.",
	category: "Physical Security",
	},
	{
	text: "R032. All technical and sensitive areas must be secured using two-factor physical access control where feasible (e.g., badge + PIN).",
	category: "Physical Security",
	},
	{
	text: "R033. Visitor badges must be clearly differentiated from staff badges and must be deactivated immediately after use.",
	category: "Physical Security",
	},
	{
	text: "R034. All obsolete keys, access badges, or access authorizations must be revoked without delay upon employee departure or role change.",
	category: "Physical Security",
	},
	{
	text: "R035. Security patrols or automated surveillance systems must regularly verify the integrity of physical barriers (doors, locks, windows).",
	category: "Physical Security",
	},
	{
	text: "R036. Secure areas must be clearly identified with visible signage indicating restricted access and security level.",
	category: "Physical Security",
	},
	{
	text: "R037. Emergency exits must be secured to prevent unauthorized access from the outside while allowing safe evacuation.",
	category: "Physical Security",
	},
	{
	text: "R038. Video surveillance recordings must be retained for a legally compliant period and protected against unauthorized access.",
	category: "Physical Security",
	},
	{
	text: "R039. Sensitive equipment (e.g., servers, networking devices) must be physically locked or enclosed to prevent tampering or theft.",
	category: "Physical Security",
	},
	{
	text: "R040. An up-to-date physical security risk assessment must be conducted at least annually or after any major infrastructure change.",
	category: "Physical Security",
	},

// Sensibilization/Training

	{
	text: "R041. Operational teams must be kept up to date with information system security best practices through onboarding sessions at the start of their role, followed by regular awareness and training programs. These activities may include various formats such as emails, posters, meetings, or dedicated intranet spaces.",
	category: "Sensibilization/Training",
	},
	{
	text: "R042. External personnel involved in the organization’s information systems, such as information management staff, must be made aware of IT security requirements.",
	category: "Sensibilization/Training",
	},
	{
	text: "R043. All collaborators must receive regular information security awareness training, at least annually. This training must cover security best practices, the organization’s objectives and challenges in information security, personal data handling, and compliance with applicable regulations and legal obligations.",
	category: "Sensibilization/Training",
	},
	{
	text: "R044. Users must be periodically made aware of email safety practices. They must verify whether the sender is known, if a response is expected, and whether any links are consistent with the email’s context. In case of doubt, the authenticity of the message must be confirmed through an alternative communication channel (e.g., phone call or SMS).",
	category: "Sensibilization/Training",
	},
	{
	text: "R045. An IT Usage Charter must be established, clearly specifying the rules and guidelines users are expected to follow. This charter must be acknowledged and signed by all collaborators.",
	category: "Sensibilization/Training",
	},
	{
	text: "R046. IT management providers must be contractually required to meet a defined set of requirements, including at minimum: contract reversibility, audit capabilities, safeguarding and restoring data in open standard formats, and maintaining security standards over time.",
	category: "Sensibilization/Training",
	},
	{
	text: "R047. An Information Security Policy (ISP) must be formalized, signed by senior management, and published internally.",
	category: "Sensibilization/Training",
	},
	{
	text: "R048. Simulated phishing campaigns must be conducted at least once a year to evaluate users’ awareness and improve their reflexes in handling suspicious emails.",
	category: "Sensibilization/Training",
	},
	{
	text: "R049. Awareness programs must be tailored to the role and responsibilities of the users, with specific modules for developers, system administrators, and management staff.",
	category: "Sensibilization/Training",
	},
	{
	text: "R050. A dedicated channel or contact point must be made available for users to report suspicious emails, incidents, or behaviors easily and quickly.",
	category: "Sensibilization/Training",
	},
	{
	text: "R051. New awareness formats (e.g., gamified quizzes, microlearning, short videos) must be explored to increase user engagement and retention.",
	category: "Sensibilization/Training",
	},
	{
	text: "R052. Participation in security awareness sessions must be tracked, and completion statistics must be reviewed periodically to ensure full organizational coverage.",
	category: "Sensibilization/Training",
	},
	{
	text: "R053. The effectiveness of awareness actions must be evaluated regularly, through tests, feedback forms, or post-training assessments.",
	category: "Sensibilization/Training",
	},
	{
	text: "R054. Physical social engineering risks (e.g., tailgating, badge lending) must be included in awareness sessions.",
	category: "Sensibilization/Training",
	},
	{
	text: "R055. Employees must be reminded regularly of the secure handling of removable media (e.g., USB drives), including scanning and encryption requirements.",
	category: "Sensibilization/Training",
	},
	{
	text: "R056. Security champions or referents must be appointed within operational teams to relay security messages and encourage best practices locally.",
	category: "Sensibilization/Training",
	},
	{
	text: "R057. Security awareness must be included as a criterion in onboarding/offboarding checklists and internal audits.",
	category: "Sensibilization/Training",
	},

// Supervise, Audit, React

	{
	text: "R058. Critical components of the information system—such as network and security devices, critical servers, and sensitive user workstations—must be identified. For each component, logging configurations must be reviewed, including log format, rotation frequency, maximum file size, and event categories captured.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R059. Critical security events must be logged and retained for a minimum of one year, or longer if required by applicable legal or regulatory obligations specific to the organization’s industry or sector.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R060. A contextual study of the information system must be conducted prior to implementing application event logging, to ensure relevance and completeness of the logged data.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R061. A contextual study of the information system must be conducted prior to the collection and logging of security events, to ensure the relevance, consistency, and usefulness of the data collected.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R062. All components must use the same time synchronization source via the NTP protocol to enable accurate correlation of events across systems.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R063. Logs from all equipment must be centralized on a dedicated system to ensure secure storage, efficient analysis, and correlation.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R064. A backup policy must be formalized and regularly updated. This policy must define the requirements for backing up information, software, and systems.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R065. Restoration tests must be conducted to verify the effectiveness of backup procedures. These tests may include systematic tests for critical applications (e.g., via scheduled tasks), punctual tests following backup errors, and comprehensive tests involving full system backup and restoration as part of regular validation routines.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R066. Regular audits of the information system must be conducted to assess the effectiveness of implemented security measures and ensure their continued relevance over time.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R067. Following audits, corrective actions must be identified, their implementation planned, and follow-up reviews organized at regular intervals to ensure proper resolution.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R068. Progress indicators related to the security action plan must be integrated into a dashboard and communicated to management.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R069. A designated security point of contact for information systems must be appointed and supported by management or by a specialized governance body, depending on the organization’s maturity level.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R070. The designated security referent must be trained in information system security and crisis management.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R071. The roles and responsibilities of the Chief Information Security Officer (CISO) must be clearly communicated to all employees.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R072. In major entities, the designated security referent may act as a local relay for the CISO. In such cases, the referent must report user concerns and issues, and identify topics to be addressed in awareness campaigns, to support the continuous improvement of information system security.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R073. A formal procedure for managing security incidents must be defined, documented, and maintained.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R074. All security incidents must be documented in a centralized incident registry.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R075. Alerts must be configured on the logging platform to detect abnormal or critical events in real time, such as multiple failed authentication attempts or unusual access patterns.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R076. A Security Information and Event Management (SIEM) solution must be deployed or considered to automate correlation and analysis of security events.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R077. Backup data must be stored in a physically or logically segregated environment from the primary information system, ideally in an immutable format.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R078. The incident response plan must include communication procedures, designation of internal/external contacts, and predefined escalation paths.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R079. Lessons learned from past incidents must be formally documented and integrated into the improvement of technical and organizational controls.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R080. A drill or tabletop exercise simulating a cybersecurity incident must be conducted at least once every two years to test the responsiveness of the organization.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R081. Sensitive log files must be protected against unauthorized access and integrity violations through access controls and hashing or digital signatures.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R082. A change control process must be implemented to monitor and approve security-relevant changes in configurations and components.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R083. All alerts or anomalies flagged by security tools must be analyzed and documented, even if later qualified as false positives.",
	category: "Supervise, Audit, React",
	},
	{
	text: "R084. A dashboard presenting real-time metrics on security posture, incidents, alerts, and remediation progress must be accessible to relevant stakeholders.",
	category: "Supervise, Audit, React",
	},

// Know the SI

	{
	text: "R085. Sensitive data must be identified and protected throughout the information system.",
	category: "Know the SI",
	},
	{
	text: "R086. The components of the information system that host sensitive data—such as databases, file shares, or workstations—must be clearly identified.",
	category: "Know the SI",
	},
	{
	text: "R087. Equipment hosting sensitive data must be protected by specific security measures, which may include backups, logging, access controls, and other safeguards.",
	category: "Know the SI",
	},
	{
	text: "R088. A simplified and up-to-date network diagram must be created and maintained. It must represent the different IP zones, addressing plans, routing and security equipment (e.g., firewalls, application proxies), as well as external interconnections (e.g., Internet, private networks, and partners).",
	category: "Know the SI",
	},
	{
	text: "R089. An inventory of privileged accounts must be conducted, regularly updated, and include all relevant information.",
	category: "Know the SI",
	},
	{
	text: "R090. Periodic reviews of privileged accounts must be performed to ensure effective management of access to sensitive elements—such as work directories and email accounts of responsible individuals—and to revoke obsolete access, particularly following staff departures.",
	category: "Know the SI",
	},
	{
	text: "R091. A simple and clear naming convention must be defined and applied to identify service accounts and administrative accounts.",
	category: "Know the SI",
	},
	{
	text: "R092. System privileges and access rights must be updated in accordance with changes in employee roles and responsibilities.",
	category: "Know the SI",
	},
	{
	text: "R093. All access rights assigned to an individual must be revoked immediately upon departure or change of function.",
	category: "Know the SI",
	},
	{
	text: "R094. Onboarding and offboarding procedures for employees must be created, followed, and regularly updated in coordination with the Human Resources department.",
	category: "Know the SI",
	},
	{
	text: "R095. Connections must be authorized only to equipment that is controlled and managed by the organization.",
	category: "Know the SI",
	},
	{
	text: "R096. Authentication of managed devices must be reinforced with an additional technical control measure.",
	category: "Know the SI",
	},
	{
	text: "R097. An up-to-date inventory of all hardware and software assets within the information system must be maintained, including asset type, location, owner, and criticality.",
	category: "Know the SI",
	},
	{
	text: "R098. Each information system component must have a designated business or technical owner responsible for its maintenance, security, and documentation.",
	category: "Know the SI",
	},
	{
	text: "R099. Dependencies between applications, systems, and external providers must be documented to support impact analysis and incident response.",
	category: "Know the SI",
	},
	{
	text: "R100. All services exposed externally (e.g., websites, APIs, VPNs) must be listed and regularly reviewed to ensure they are legitimate and properly maintained.",
	category: "Know the SI",
	},
	{
	text: "R101. A formal asset classification policy must be established to categorize data, systems, and applications by sensitivity and criticality.",
	category: "Know the SI",
	},
	{
	text: "R102. Unused or obsolete information system components must be identified, reviewed, and decommissioned securely to reduce the attack surface.",
	category: "Know the SI",
	},
	{
	text: "R103. Access control lists (ACLs) and user group memberships must be reviewed periodically to ensure they reflect actual organizational needs.",
	category: "Know the SI",
	},
	{
	text: "R104. Remote access methods (e.g., VPN, remote desktop) must be inventoried and associated with authorized user profiles.",
	category: "Know the SI",
	},
	{
	text: "R105. All third-party software and open-source components used within the information system must be identified and monitored for vulnerabilities.",
	category: "Know the SI",
	},
	{
	text: "R106. Information system documentation, including technical and operational procedures, must be versioned, accessible, and regularly updated.",
	category: "Know the SI",
	},
	{
	text: "R107. Access to server rooms and technical premises must be controlled using locks or badge-based access control systems.",
		category: "Know the SI",
	},
	{
	text: "R108. A formal process must be followed for issuing physical access rights, including identity verification and alignment with onboarding/offboarding procedures. Personnel not explicitly authorized—such as maintenance workers, non-IT staff, cleaners, or visitors—must only access sensitive areas under constant supervision.",
		category: "Know the SI",
	},
	{
	text: "R109. Unaccompanied access by external service providers to server rooms and technical premises must be strictly prohibited.",
		category: "Know the SI",
	},
	{
	text: "R110. Physical access rights must be reviewed regularly to identify and revoke unauthorized access.",
		category: "Know the SI",
	},
	{
	text: "R111. Access rights must be withdrawn or access codes changed immediately upon an employee's departure.",
		category: "Know the SI",
	},
	
// Nomadism

	{
	text: "R112. Users must be made aware of the need to increase their level of vigilance while traveling and to keep their devices within reach at all times.",
	category: "Nomadism",
	},
	{
	text: "R113. Any explicit reference to the organization must be removed from mobile terminals used by nomadic users.",
	category: "Nomadism",
	},
	{
	text: "R114. A privacy filter must be installed on the screens of mobile users’ devices.",
	category: "Nomadism",
	},
	{
	text: "R115. A PIN or equivalent authentication mechanism must be configured to activate at the startup of portable devices.",
	category: "Nomadism",
	},
	{
	text: "R116. Mobile workers must use an additional external device to unlock their workstation (e.g., smart card, security token).",
	category: "Nomadism",
	},
	{
	text: "R117. Full disk encryption must be implemented on the hard drives of all mobile devices.",
	category: "Nomadism",
	},
	{
	text: "R118. Archives or files stored on device hard drives must be encrypted to ensure data confidentiality.",
	category: "Nomadism",
	},
	{
	text: "R119. A VPN or IPsec tunnel must be established between mobile workstations and the organization's VPN/IPsec gateway, without exception.",
	category: "Nomadism",
	},
	{
	text: "R120. Users must not be allowed to disconnect the encrypted communication tunnel manually.",
	category: "Nomadism",
	},
	{
	text: "R121. A two-factor authentication mechanism must be provided to all members of the mobile workforce.",
	category: "Nomadism",
	},
	{
	text: "R122. A clear distinction must be enforced between personal and professional use on mobile phones.",
	category: "Nomadism",
	},
	{
	text: "R123. Security policies must be applied uniformly on mobile devices, including unlocking methods, restriction of app store usage to approved secure applications, and other relevant controls.",
	category: "Nomadism",
	},
	{
	text: "R124. A centralized management solution must be used to administer all mobile and remote devices.",
	category: "Nomadism",
	},
	{
	text: "R125. The use of integrated voice assistants must be prohibited on organizational mobile devices.",
	category: "Nomadism",
	},
	{
	text: "R126. Mobile devices must support remote wiping or locking capabilities in case of loss or theft.",
	category: "Nomadism",
	},
	{
	text: "R127. Mobile devices must be configured to auto-lock after a short period of inactivity (e.g., 5 minutes or less).",
	category: "Nomadism",
	},
	{
	text: "R128. Users must be reminded to avoid connecting to public or untrusted Wi-Fi networks, especially without using a secure communication tunnel.",
	category: "Nomadism",
	},
	{
	text: "R129. Bluetooth and near-field communication (NFC) must be deactivated by default on mobile devices unless explicitly required for business use.",
	category: "Nomadism",
	},
	{
	text: "R130. All mobile applications must be approved by the IT department before installation on organization-owned devices.",
	category: "Nomadism",
	},
	{
	text: "R131. Mobile devices must be regularly updated with the latest security patches and OS versions, enforced via the centralized management system.",
	category: "Nomadism",
	},
	{
	text: "R132. When travelling internationally, mobile devices must be configured with minimal data and access to reduce exposure risk.",
	category: "Nomadism",
	},
	{
	text: "R133. Users must be trained on how to securely use devices in shared spaces (e.g., coworking areas, hotels, airports).",
	category: "Nomadism",
	},
	{
	text: "R134. When nomadic devices are no longer in use or reassigned, a secure wipe process must be performed to remove all data and configurations.",
	category: "Nomadism",
	},
	{
	text: "R135. The use of USB ports on nomadic workstations must be restricted or controlled through endpoint protection software.",
	category: "Nomadism",
	},
	
// Servers

	{
	text: "R136. Vulnerabilities of servers and services must be analyzed on a recurring basis.",
	category: "Servers",
	},
	{
	text: "R137. Installed applications must be limited strictly to those necessary for operational needs.",
	category: "Servers",
	},
	{
	text: "R138. Servers that do not require Internet access must be explicitly restricted from accessing it.",
	category: "Servers",
	},
	{
	text: "R139. Users within the domain must not be members of the administrators group unless strictly justified and controlled.",
	category: "Servers",
	},
	{
	text: "R140. Server firewall solutions must be activated using either integrated or specialized software.",
	category: "Servers",
	},
	{
	text: "R141. Local firewall configurations must be regularly reviewed to ensure the absence of misconfigurations or errors.",
	category: "Servers",
	},
	{
	text: "R142. Antivirus security solutions must be activated on all servers.",
	category: "Servers",
	},
	{
	text: "R143. Antivirus solutions must be kept up to date, including both the software and signature databases.",
	category: "Servers",
	},
	{
	text: "R144. Antivirus configurations must be reviewed at regular intervals to ensure there are no misconfigurations or errors.",
	category: "Servers",
	},
	{
	text: "R145. Servers granted exemptions from standard security rules must be isolated from the rest of the system.",
	category: "Servers",
	},
	{
	text: "R146. Critical data necessary for the proper functioning of the organization must be backed up on disconnected storage devices.",
	category: "Servers",
	},
	{
	text: "R147. Data restoration procedures must be tested periodically, at least every six months.",
	category: "Servers",
	},
	{
	text: "R148. A centralized management tool—such as Active Directory in a Microsoft environment—must be deployed to manage as many IT assets as possible, including workstations and servers. This may require prior standardization of hardware and operating systems.",
	category: "Servers",
	},
	{
	text: "R149. The management of security policies must be standardized across the entire IT infrastructure of the organization.",
	category: "Servers",
	},
	{
	text: "R150. Recovery mode must be enabled on the Active Directory service to ensure resilience and restore capabilities.",
	category: "Servers",
	},
	{
	text: "R151. An analysis of legitimate incoming traffic (e.g., administration, infrastructure software, specific applications) must be conducted to define the list of authorized connections. By default, all traffic must be blocked, and only necessary services from approved sources must be explicitly authorized (whitelisting).",
	category: "Servers",
	},
	{
    text: "R152. Firewalls must be configured to log blocked traffic in order to detect application misconfigurations and potential intrusion attempts.",
    category: "Servers",
	},
	{
	text: "R153. All operating system components, software, and security patches must be kept up to date.",
	category: "Servers",
	},
	{
	text: "R154. Administrative access must be restricted to specific internal workstations or dedicated administration zones.",
	category: "Servers",
	},
	{
	text: "R155. Access by IT management personnel or third-party companies must not be possible without proper supervision or control mechanisms.",
	category: "Servers",
	},
	{
	text: "R156. All administrative actions on servers must be logged and traceable to a named individual to ensure accountability and support audits.",
	category: "Servers",
	},
	{
	text: "R157. Root or administrator accounts must not be used for routine operations; named accounts with privilege elevation must be used instead.",
	category: "Servers",
	},
	{
	text: "R158. A strict configuration hardening baseline must be applied to all servers, following recognized standards such as CIS Benchmarks or CERT guides.",
	category: "Servers",
	},
	{
	text: "R159. Remote administration access (e.g., RDP, SSH) must be protected with strong authentication and restricted to authorized IP addresses or networks.",
	category: "Servers",
	},
	{
	text: "R160. An alerting system must be in place to detect configuration drift or unauthorized changes on production servers.",
	category: "Servers",
	},
	{
	text: "R161. Test and development servers must be logically separated from production servers and must not contain real production data unless explicitly justified.",
	category: "Servers",
	},
	{
	text: "R162. Server boot sequences must be configured to prevent unauthorized changes to boot loaders, BIOS/UEFI, or boot media.",
	category: "Servers",
	},
	{
	text: "R163. Unused services and network ports must be disabled or removed to minimize the server attack surface.",
	category: "Servers",
	},
	{
	text: "R164. Default passwords, keys, and certificates on servers must be changed or replaced before going into production.",
	category: "Servers",
	},
	{
	text: "R165. An inventory of installed services and listening ports must be maintained and reviewed periodically for unauthorized or obsolete components.",
	category: "Servers",
	},

// Patch Management

	{
	text: "R166. A patch management policy must be created and kept up to date for deployment across the information system.",
	category: "Patch Management",
	},
	{
	text: "R167. A continuous vulnerability watch must be conducted, for example via CERTs (Computer Emergency Response Teams) or equivalent sources.",
	category: "Patch Management",
	},
	{
	text: "R168. Security patches must be applied to all system components within one month of their release by the vendor.",
	category: "Patch Management",
	},
	{
	text: "R169. Obsolete components no longer supported by their manufacturers must be isolated from the rest of the system.",
	category: "Patch Management",
	},
	{
	text: "R170. An inventory of all systems and applications within the information system must be established and regularly maintained.",
	category: "Patch Management",
	},
	{
	text: "R171. Solutions must be selected based on support durations aligned with their intended period of use.",
	category: "Patch Management",
	},
	{
	text: "R172. Software updates and end-of-support dates must be tracked to ensure proactive management.",
	category: "Patch Management",
	},
	{
	text: "R173. A homogeneous software portfolio must be maintained to reduce risk and simplify maintenance and monitoring.",
	category: "Patch Management",
	},
	{
	text: "R174. Software dependencies must be limited as early as possible in the system lifecycle to minimize complexity and risk.",
	category: "Patch Management",
	},
	{
	text: "R175. Contracts with service providers and suppliers must include clauses guaranteeing the monitoring of security patches and the management of obsolescence.",
	category: "Patch Management",
	},
	{
	text: "R176. Timeframes and required resources for migrating each end-of-life software component must be clearly identified and planned.",
	category: "Patch Management",
	},
	{
	text: "R177. A pre-deployment testing procedure must be implemented to verify the stability and compatibility of security patches before production rollout.",
	category: "Patch Management",
	},
	{
	text: "R178. Patch deployment processes must be automated as much as possible through centralized management tools to ensure consistency and speed.",
	category: "Patch Management",
	},
	{
	text: "R179. A rollback mechanism must be defined and documented in case a patch causes service disruption or regression.",
	category: "Patch Management",
	},
	{
	text: "R180. Systems with critical availability requirements must follow a separate validation process for patch acceptance, including impact analysis.",
	category: "Patch Management",
	},
	{
	text: "R181. Deployment status and coverage of critical patches must be tracked through a dashboard or central reporting system.",
	category: "Patch Management",
	},
	{
	text: "R182. A formal change management workflow must be integrated into the patch management process to ensure proper traceability and approvals.",
	category: "Patch Management",
	},
	{
	text: "R183. Manual patching operations must be avoided where possible; when used, they must be documented and validated.",
	category: "Patch Management",
	},
	{
	text: "R184. Devices or systems temporarily exempted from patching must be tracked, documented, and isolated or protected with compensatory measures.",
	category: "Patch Management",
	},
	{
	text: "R185. The success or failure of patch deployment jobs must be logged and reviewed after each patching campaign.",
	category: "Patch Management",
	},
	{
	text: "R186. Third-party software used in business applications must be included in the patch management policy and monitored for security updates.",
	category: "Patch Management",
	},

// Workstations

	{
	text: "R187. Installed applications on workstations must be limited strictly to those necessary for business operations.",
	category: "Workstations",
	},
	{
	text: "R188. Browser extensions and add-ons must be restricted to those required and approved by the organization.",
	category: "Workstations",
	},
	{
	text: "R189. Users must not have administrative rights on their workstations, unless explicitly authorized and controlled.",
	category: "Workstations",
	},
	{
	text: "R190. Local firewall protection on workstations must be enabled using either built-in or specialized security software.",
	category: "Workstations",
	},
	{
	text: "R191. Local firewall configurations on workstations must be regularly reviewed to ensure the absence of misconfigurations or errors.",
	category: "Workstations",
	},
	{
	text: "R192. An antivirus security solution must be active on all client workstations.",
	category: "Workstations",
	},
	{
	text: "R193. The antivirus solution must be kept up to date, including both the software and the signature database.",
	category: "Workstations",
	},
	{
	text: "R194. Antivirus configurations on workstations must be regularly checked to ensure the absence of errors or alerts.",
	category: "Workstations",
	},
	{
	text: "R195. Workstations must be automatically updated with the latest operating system security patches.",
	category: "Workstations",
	},
	{
	text: "R196. Any workstation requiring an exemption from global security rules must be isolated from the information system, particularly in cases where certain applications cannot be updated for compatibility reasons.",
	category: "Workstations",
	},
	{
	text: "R197. Data essential to the organization’s operations and held on user workstations must be backed up and periodically restored for verification.",
	category: "Workstations",
	},
	{
	text: "R198. The ability to restore data from workstations must be regularly tested to ensure data availability and integrity.",
	category: "Workstations",
	},
	{
	text: "R199. The connection of unknown USB drives must be prohibited, and the use of uncontrolled external media must be limited as much as possible within the information system.",
	category: "Workstations",
	},
	{
	text: "R200. Solutions must be implemented to prevent the execution of programs from removable devices on user workstations.",
	category: "Workstations",
	},
	{
	text: "R201. A strict disposal procedure must be established and followed, including secure destruction methods, to prevent leakage of sensitive information.",
	category: "Workstations",
	},
	{
	text: "R202. An analysis of authorized incoming traffic (e.g., for administration, infrastructure software, specific applications) must be conducted. All other traffic must be blocked by default, with only necessary services from identified sources explicitly allowed (whitelisting).",
	category: "Workstations",
	},
	{
	text: "R203. Firewalls must be configured to log blocked flows to help identify configuration errors and potential intrusion attempts.",
	category: "Workstations",
	},
	{
	text: "R204. Access to the BIOS/UEFI of workstations must be restricted using a password.",
	category: "Workstations",
	},
	{
	text: "R205. Users must systematically lock their sessions when leaving their workstations.",
	category: "Workstations",
	},
	{
	text: "R206. Regular checks must be conducted to ensure that authentication elements are not written on paper or visible supports.",
	category: "Workstations",
	},
	{
	text: "R207. Authentication elements must not be stored in web browsers, and compliance with this rule must be regularly verified.",
	category: "Workstations",
	},
	{
	text: "R208. The execution of scripts and macros (e.g., in Office documents) must be disabled by default and only enabled for trusted sources through a validation process.",
	category: "Workstations",
	},
	{
	text: "R209. Workstation screens must be configured to automatically lock after a defined period of inactivity (e.g., 5 minutes).",
	category: "Workstations",
	},
	{
	text: "R210. Local data storage on workstations must be encrypted to protect sensitive information in case of loss or theft.",
	category: "Workstations",
	},
	{
	text: "R211. A startup password or equivalent secure boot mechanism must be activated on all workstations.",
	category: "Workstations",
	},
	{
	text: "R212. Security baselines must be applied and regularly verified on all workstations to ensure compliance with organizational standards.",
	category: "Workstations",
	},
	{
	text: "R213. Usage of administrative tools (e.g., PowerShell, cmd) must be monitored and restricted to authorized users and actions.",
	category: "Workstations",
	},
	{
	text: "R214. Workstations must be integrated into a centralized logging system to monitor relevant events (e.g., failed logins, security alerts).",
	category: "Workstations",
	},
	{
	text: "R215. Unused user accounts and services must be regularly reviewed and removed from workstations.",
	category: "Workstations",
	},
	{
	text: "R216. Internet access from workstations must be filtered through a secure proxy to block malicious or unauthorized domains.",
	category: "Workstations",
	},
	{
	text: "R217. At startup, workstations must verify the integrity of key system components using trusted boot or equivalent mechanisms.",
	category: "Workstations",
	},
	
// Network

	{
	text: "R218. The coverage range of the Wi-Fi network must be physically contained within the premises of the organization.",
	category: "Network",
	},
	{
	text: "R219. Network sockets located in publicly accessible areas (e.g., meeting rooms, reception areas, corridors, storage rooms) must be systematically disabled.",
	category: "Network",
	},
	{
	text: "R220. The information system must be partitioned using VLANs in sensitive areas to limit the lateral movement of potential attacks.",
	category: "Network",
	},
	{
	text: "R221. The guest Wi-Fi network must be protected by a complex password and must not be shared with unauthorized third parties under any circumstances.",
	category: "Network",
	},
	{
	text: "R222. The password for the guest Wi-Fi network must be changed regularly.",
	category: "Network",
	},
	{
	text: "R223. The home Wi-Fi network used for professional purposes must be protected with a strong password, which must be updated frequently and not shared with unauthorized individuals.",
	category: "Network",
	},
	{
	text: "R224. Wireless network SSIDs must be generic and must not reveal the identity of the organization.",
	category: "Network",
	},
	{
	text: "R225. The password of the home Wi-Fi network must be complex to ensure adequate protection.",
	category: "Network",
	},
	{
	text: "R226. The network architecture must be segmented to limit the impact of a wireless intrusion to a specific perimeter. Traffic from workstations connected via Wi-Fi must be filtered and restricted to only the necessary flows.",
	category: "Network",
	},
	{
	text: "R227. An automatic firmware update mechanism must be configured for wireless access points (APs).",
	category: "Network",
	},
	{
	text: "R228. Access points must be securely administered, including the use of a dedicated management interface and modification of default administrator credentials.",
	category: "Network",
	},
	{
	text: "R229. Unsuccessful login attempts on network equipment must be detected and actively blocked.",
	category: "Network",
	},
	{
	text: "R230. Accesses must be logged in a centralized information collection system, with a retention period of at least one year.",
	category: "Network",
	},
	{
	text: "R231. Additional security mechanisms must be enabled on the proxy server according to organizational needs, such as antivirus content scanning or URL category filtering. Procedures must be in place to ensure the security and maintenance of the gateway equipment.",
	category: "Network",
	},
	{
	text: "R232. Direct DNS resolution on assets must be prohibited; all DNS queries must be delegated to the proxy server.",
	category: "Network",
	},
	{
	text: "R233. A high level of protection must be implemented for all services exposed to the Internet (e.g., websites, email servers). These services must be managed by competent administrators who are continuously trained and available. In the absence of such internal resources, secure outsourcing to qualified professionals is required.", 
	category: "Network",
	},
	{
	text: "R234. The infrastructure hosting Internet-exposed services must be segmented from the rest of the internal information system.",
	category: "Network",
	},
	{
	text: "R235. A dedicated infrastructure must be deployed to interconnect Internet-exposed services, allowing traffic to and from these services to be filtered separately from other organizational flows.",
	category: "Network",
	},
	{
	text: "R236. All incoming flows must pass through a reverse proxy component equipped with multiple security mechanisms.",
	category: "Network",
	},
	{
	text: "R237. The redirection of professional emails to personal email accounts must be prohibited.",
	category: "Network",
	},
	{
	text: "R238. Controlled and secure methods must be provided for remote access to professional email.",
	category: "Network",
	},
	{
	text: "R239. An antivirus system must be deployed upstream of mailboxes—regardless of whether the email system is hosted internally or externally—to prevent the delivery of infected files.",
	category: "Network",
	},
	{
	text: "R240. TLS encryption must be enabled to secure communications between email servers as well as between user workstations and mailbox servers.",
	category: "Network",
	},
	{
	text: "R241. A relay server must be used to prevent direct exposure of mailbox servers to the Internet. This relay server must be dedicated to email transmission and reception, and must not be directly accessible from the Internet.",
	category: "Network",
	},
	{
	text: "R242. An anti-spam service must be deployed and properly configured upstream of the email flow.",
	category: "Network",
	},
	{
	text: "R243. Email authenticity verification mechanisms must be implemented, and public DNS records related to the messaging infrastructure must be correctly configured (e.g., SPF, DKIM, DMARC).",
	category: "Network",
	},
	{
	text: "R244. Any dedicated interconnection with a supplier or customer must be established through a link on the organization's private network.",
	category: "Network",
	},
	{
	text: "R245. Partner connections must be filtered, as external partners are considered untrusted by default. IP filtering must be performed using a firewall placed as close as possible to the point of entry into the organization’s network.",
	category: "Network",
	},
	{
	text: "R246. The flow matrix (incoming and outgoing) must be reduced to strictly necessary operational flows, maintained over time, and enforced through compliant configuration of network equipment.",
	category: "Network",
	},
	{
	text: "R247. IP filtering equipment for partner connections must be dedicated to this purpose only, and intrusion detection and prevention systems (IDS/IPS) must be enabled.",
	category: "Network",
	},
	{
	text: "R248. The organization's point of contact for each partner must be clearly identified, and a contact list must be maintained to ensure rapid response in the event of a security incident.",
	category: "Network",
	},
	{
	text: "R249. Access to the firewall administration interface must be protected by a password that meets defined complexity requirements.",
	category: "Network",
	},
	{
	text: "R250. The use of NAT must be restricted to services partitioned within the demilitarized zone (DMZ).",
	category: "Network",
	},
	{
	text: "R251. The firewall’s operating system must be configured for automatic updates.",
	category: "Network",
	},
	{
	text: "R252. The system must include mechanisms for detecting risky or anomalous environments.",
	category: "Network",
	},
	{
	text: "R253. Internet access logs must be retained for a minimum period of one year.",
	category: "Network",
	},
	{
	text: "R254. A security event detection IDS system must be deployed and operational on all filtering equipment.",
	category: "Network",
	},
	{
	text: "R255. A security event protection IPS system must be deployed and operational on all filtering equipment.",
	category: "Network",
	},
	{
	text: "R256. A geolocation detection system must be deployed on filtering equipment and must be capable of blocking connections from anonymous or unauthorized sources.",
	category: "Network",
	},
	{
	text: "R257. Access to the administration console of any equipment must not be possible using default credentials.",
	category: "Network",
	},
	{
	text: "R258. The operating systems of interconnection equipment, such as switches, must be configured to update automatically.",
	category: "Network",
	},
	{
	text: "R259. Access logs to administration interfaces must be retained for at least one year.",
	category: "Network",
	},
	{
	text: "R260. Management interfaces of network equipment must only be accessible from a dedicated, segmented administration network.",
	category: "Network",
	},
	{
	text: "R261. Configuration backups of network devices must be performed regularly and stored securely with restricted access.",
	category: "Network",
	},
	{
	text: "R262. The integrity of configuration files of network devices must be monitored to detect unauthorized changes.",
	category: "Network",
	},
	{
	text: "R263. SNMP must be disabled or configured with strong community strings and version 3 if used. Default values must be changed.",
	category: "Network",
	},
	{
	text: "R264. IPv6 must be disabled if not used, to limit unnecessary exposure and complexity in traffic filtering.",
	category: "Network",
	},
	{
	text: "R265. Unused switch ports must be administratively disabled or configured with port security measures (e.g., MAC address binding).",
	category: "Network",
	},
	{
	text: "R266. DHCP servers must be centralized and unauthorized rogue DHCP servers must be actively detected and blocked.",
	category: "Network",
	},
	{
	text: "R267. Network access control (NAC) mechanisms must be deployed to enforce authentication and compliance before granting access to internal networks.",
	category: "Network",
	},
	{
	text: "R268. Anomaly detection rules (e.g., based on traffic volume or unusual behavior) must be implemented in the IDS/IPS or SIEM.",
	category: "Network",
	},
	{
	text: "R269. Network diagrams, IP plans, and VLAN mappings must be kept up to date and reviewed at least annually.",
	category: "Network",
	},
	
// Disaster
	
	{
	text: "R270. A recovery or business continuity plan must be established and maintained to ensure operational resilience.",
	category: "Disaster",
	},
	{
	text: "R271. Operational teams must undergo at least one recovery exercise per year to validate preparedness and execution capabilities.",
	category: "Disaster",
	},
	{
	text: "R272. The recovery or switchover of activities must be tested regularly to ensure effectiveness and reliability.",
	category: "Disaster",
	},
	{
	text: "R273. Critical business processes must be identified and prioritized to guide recovery planning according to their acceptable downtime (RTO) and data loss tolerance (RPO).",
	category: "Disaster",
	},
	{
	text: "R274. A crisis communication plan must be formalized to coordinate internal and external communication in case of major disruption.",
	category: "Disaster",
	},
	{
	text: "R275. The roles and responsibilities of each stakeholder involved in disaster response must be clearly defined and documented.",
	category: "Disaster",
	},
	{
	text: "R276. The disaster recovery plan must be accessible offline and available in secure printed or digital copies.",
	category: "Disaster",
	},
	{
	text: "R277. Dependencies on external providers, including cloud and IT service partners, must be reviewed to ensure continuity and recovery obligations are contractually defined.",
	category: "Disaster",
	},
	{
	text: "R278. Lessons learned from recovery tests or actual incidents must be formally documented and integrated into plan updates.",
	category: "Disaster",
	},
	{
	text: "R279. The business continuity plan must be reviewed at least annually or upon major changes in the organization or infrastructure.",
	category: "Disaster",
	},
	{
	text: "R280. Data necessary for recovery must be backed up and stored in a physically and logically separate location from the production environment.",
	category: "Disaster",
	},
	{
	text: "R281. Alternate workspaces or teleworking capabilities must be planned and tested for critical staff in case of site unavailability.",
	category: "Disaster",
	},
	{
	text: "R282. Crisis drills must include realistic cyberattack scenarios (e.g., ransomware, data breach) to evaluate response under pressure.",
	category: "Disaster",
	},
	
// Authenticate and control access
  
	{
	text: "R283. The use of non-nominative accounts must be strictly prohibited.",
	category: "Authenticate and control access",
	},
	{
	text: "R284. Users must not have administrative privileges on their local environment unless explicitly authorized and justified.",
	category: "Authenticate and control access",
	},
	{
	text: "R285. The use of generic accounts (e.g., admin, user) must be minimized and limited to a restricted number of authorized individuals.",
	category: "Authenticate and control access",
	},
	{
	text: "R286. Each administrator must be assigned a named administration account, distinct from their user account. Credentials and authentication secrets must differ between these accounts.",
	category: "Authenticate and control access",
	},
	{
	text: "R287. Logging of account-related events—including successful and failed login attempts—must be enabled and monitored.",
	category: "Authenticate and control access",
	},
	{
	text: "R288. A precise and up-to-date inventory of resources containing sensitive data (e.g., directories, databases, mailboxes) must be maintained.",
	category: "Authenticate and control access",
	},
	{
	text: "R289. For each set of sensitive data, the authorized population must be clearly defined. Access must be strictly controlled through authentication and membership validation, and mechanisms must be in place to prevent unauthorized dispersion or duplication to uncontrolled or less secure locations.", 
	category: "Authenticate and control access",
	},
	{
	text: "R290. Access rights to sensitive data must be reviewed regularly to detect and revoke unauthorized access.",
	category: "Authenticate and control access",
	},
	{
	text: "R291. A password policy must be established, including best practices for password composition, complexity, and sizing.",
	category: "Authenticate and control access",
	},
	{
	text: "R292. The application of the password policy must be actively supervised and verified.",
	category: "Authenticate and control access",
	},
	{
	text: "R293. Users and stakeholders must be consulted and informed prior to the technical implementation of password policy measures, to ensure understanding and acceptance.",
	category: "Authenticate and control access",
	},
	{
	text: "R294. Passwords must be stored using secure solutions, including digital safes and encryption mechanisms.",
	category: "Authenticate and control access",
	},
	{
	text: "R295. Access to the digital safe must be protected with a strong password that meets current security standards.",
	category: "Authenticate and control access",
	},
	{
	text: "R296. Processes for storing and transmitting credentials must systematically include encryption.",
	category: "Authenticate and control access",
	},
	{
	text: "R297. Default credentials for all system components must be changed immediately upon deployment.",
	category: "Authenticate and control access",
	},
	{
	text: "R298. In the event that a password cannot be changed, the issue must be escalated and reported to the product vendor or distributor.",
	category: "Authenticate and control access",
	},
	{
	text: "R299. Passwords must be renewed regularly in accordance with the organization's password policy.",
	category: "Authenticate and control access",
	},
	{
	text: "R300. Strong authentication mechanisms, requiring two distinct authentication factors, must be implemented where applicable.",
	category: "Authenticate and control access",
	},
	{
	text: "R301. Smart cards must be preferred for authentication; alternatively, one-time password (OTP) mechanisms with physical tokens may be used.",
	category: "Authenticate and control access",
	},
	{
	text: "R302. A formal onboarding and offboarding process must be implemented to ensure timely creation, modification, and revocation of user accounts and access rights.",
	category: "Authenticate and control access",
	},
	{
	text: "R303. Dormant or unused accounts must be automatically disabled after a predefined period of inactivity (e.g., 60 or 90 days).",
	category: "Authenticate and control access",
	},
	{
	text: "R304. Administrative access must only be possible from identified and secured workstations or administration zones.",
	category: "Authenticate and control access",
	},
	{
	text: "R305. Authentication attempts from unusual locations, timeframes, or IP addresses must trigger alerts or require additional verification.",
	category: "Authenticate and control access",
	},
	{
	text: "R306. Identity federation or Single Sign-On (SSO) solutions must be evaluated and implemented where appropriate to centralize access control and monitoring.",
	category: "Authenticate and control access",
	},
	{
	text: "R307. Emergency or break-glass accounts must be managed with strict procedures, limited access, and mandatory post-use review.",
	category: "Authenticate and control access",
	},
	{
	text: "R308. Access to test or pre-production environments must be restricted and must not use shared credentials or open access.",
	category: "Authenticate and control access",
	},
	{
	text: "R309. All service accounts must follow specific creation, naming, and lifecycle rules, and must have the minimum necessary permissions.",
	category: "Authenticate and control access",
	},
	{
	text: "R310. All authentication systems must be resilient and redundant to prevent loss of access during incidents.",
	category: "Authenticate and control access",
	},
	{
	text: "R311. Regular audits must verify that all user and administrator accounts are uniquely tied to an identified individual and not shared.",
	category: "Authenticate and control access",
	},

// Administration

	{
	text: "R312. A dedicated physical or virtual workstation must be provided for administrative tasks, and it must never have access to the Internet.",
	category: "Administration",
	},
	{
	text: "R313. The autonomous connection of service providers through third-party administration tools must be prohibited.",
	category: "Administration",
	},
	{
	text: "R314. When a delegation of privileges is necessary to meet a specific user need, it must be tracked, time-limited, and revoked at the end of the designated period.",
	category: "Administration",
	},
	{
	text: "R315. Remote administration ports must be closed or disabled when not explicitly required.",
	category: "Administration",
	},
	{
	text: "R316. Software updates for managed equipment must be obtained from a secure source, and their transfer to the administration workstation or server (which must not be connected to the Internet) must be controlled. If necessary, a dedicated removable media device may be used.",
	category: "Administration",
	},
	{
	text: "R317. An exchange zone must be used to automate and secure specific file transfer tasks.",
	category: "Administration",
	},
	{
	text: "R318. Workstations, servers, and administration interfaces must be logically separated from the users’ office network.",
	category: "Administration",
	},
	{
	text: "R319. Logical partitioning must be implemented using VLANs.",
	category: "Administration",
	},
	{
	text: "R320. Cryptographic logical partitioning must be enforced through the use of IPSec tunnels.",
	category: "Administration",
	},
	{
	text: "R321. Physical network partitioning must be implemented where required to reinforce security boundaries.",
	category: "Administration",
	},
	{
	text: "R322. All administrative actions must be logged in a tamper-proof manner and regularly reviewed to detect unauthorized or abnormal activity.",
	category: "Administration",
	},
	{
	text: "R323. Multi-factor authentication (MFA) must be enforced for access to all administration interfaces, including remote access portals and jump servers.",
	category: "Administration",
	},
	{
	text: "R324. Administration tools (e.g., remote consoles, orchestration platforms) must be hardened and configured to minimize attack surface.",
	category: "Administration",
	},
	{
	text: "R325. The list of authorized administrators must be reviewed periodically to revoke obsolete or unnecessary privileges.",
	category: "Administration",
	},
	{
	text: "R326. Access to administration interfaces must be time-restricted and enabled only when necessary for specific tasks (just-in-time access).",
	category: "Administration",
	},
	{
	text: "R327. A bastion host or jump server must be used to centralize and control access to internal administration interfaces.",
	category: "Administration",
	},
	{
	text: "R328. Scripts and automation tools used for administration must be versioned, documented, and stored in a secure repository.",
	category: "Administration",
	},
	{
	text: "R329. Administrative credentials must not be reused across environments or systems and must be rotated regularly.",
	category: "Administration",
	},
	{
	text: "R330. Administrative sessions must be encrypted end-to-end and must not transit over unsecured or public networks.",
	category: "Administration",
	},
	{
	text: "R331. The activation and deactivation of administration accounts must follow a formal workflow with validation steps.",
	category: "Administration",
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
      <label><input type="radio" name="${q.text}" value="Yes"> 🟢 Yes</label>
      <label><input type="radio" name="${q.text}" value="No"> 🔴 No</label>
      <label><input type="radio" name="${q.text}" value="Partially"> 🟠 Partially</label>
      <label><input type="radio" name="${q.text}" value="Not applicable"> ⚪ Not applicable</label>
      <br>
      <textarea name="note_${q.text}" placeholder="Add a comment or justification..." rows="2" style="width:100%; margin-top:6px;"></textarea>
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
