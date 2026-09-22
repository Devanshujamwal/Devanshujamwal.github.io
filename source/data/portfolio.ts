export const portfolio = {
  name: "Devanshu Jamwal",
  location: "Calgary, Alberta, Canada",
  headline: "IT Support • Systems • Networking • Cloud",
  intro: "Information Technology Services graduate from SAIT, focused on troubleshooting, infrastructure, and reliable end-user support.",
  about: "My work brings together user support, networking, systems administration, cloud, and cybersecurity fundamentals. I enjoy understanding how systems fit together and explaining technical problems clearly.",
  availability: "Open to entry-level IT opportunities",
  email: "jamwaldevanshu@gmail.com",
  github: "https://github.com/Devanshujamwal",
  linkedin: "https://www.linkedin.com/in/devanshujamwal/",
};

export const navigation = ["Home", "Projects", "About", "Skills", "Experience", "Education", "Contact"];
export const skillGroups = [
  { name: "Systems", skills: ["Windows", "Linux", "macOS", "Microsoft 365"] },
  { name: "Networking", skills: ["TCP/IP", "DNS", "DHCP", "VLANs", "OSPF", "NAT", "Cisco Networking", "Wireshark"] },
  { name: "Cloud", skills: ["Microsoft Azure", "Virtual Machines", "Virtual Networks", "Azure Storage", "RBAC", "Azure Monitor", "Log Analytics", "Entra ID concepts"] },
  { name: "Security", skills: ["Palo Alto Networks", "Wazuh", "SIEM fundamentals", "Endpoint Monitoring", "Firewall Policies", "Network Security"] },
  { name: "Virtualization", skills: ["VMware"] },
  { name: "Support & tools", skills: ["ServiceNow", "Jira", "Git", "GitHub", "VS Code"] },
  { name: "Programming", skills: ["Python", "C/C++", "HTML/CSS", "Next.js"] },
];
export const experiences = [
  { role: "IT Technician", company: "Excitel", date: "Jan 2023 – Nov 2023", location: "New Delhi, India", points: ["Diagnosed and resolved hardware, software, and internet-connectivity issues for residential and business customers while collaborating with ISPs and technical teams to restore network connectivity.", "Migrated endpoint-security software from desktop-based solutions to cloud-based platforms and assisted with hardware and software asset management."] },
  { role: "IT Support Intern", company: "Hathway", date: "Jul 2022 – Dec 2022", location: "New Delhi, India", points: ["Resolved 20+ help-desk tickets daily involving Windows devices, hardware, software, and connectivity issues.", "Installed and configured Windows 8/10/11, macOS, and Linux devices while supporting employee onboarding and end-user troubleshooting."] },
];
export type CaseNote = { title: string; text: string };
export type Project = {
  slug: string; number: string; title: string; category: string; type: string;
  summary: string; overview: string; objective: string; environment: string; role: string;
  diagram: "network" | "azure" | "security" | "python"; diagramCaption: string;
  technologies: string[]; featuredTechnologies: string[]; github?: string;
  implementation: CaseNote[]; troubleshooting: CaseNote[]; validation: CaseNote[];
  learned: CaseNote[];
};
const networkRepo = "https://github.com/Devanshujamwal/Network-Design-Company-Infrastructure-Implementation";
const pythonRepo = "https://github.com/Devanshujamwal/Library-management-system";
export const projects: Project[] = [
  {
    slug: "enterprise-network", number: "01", title: "Enterprise Multi-Site Network Infrastructure", category: "Networking", type: "Academic project / hands-on lab",
    summary: "A team-built Packet Tracer project covering multi-site addressing, network design, and connectivity.",
    overview: "An academic network infrastructure project for CPNT-219. The team report assigns Devanshu to Site 3 and includes his IPv4 VLSM and IPv6 addressing tables. The repository includes the original Packet Tracer file.",
    objective: "Connect the lab sites and document how addressing, routing, and local services support end-to-end connectivity.",
    environment: "Cisco Packet Tracer · academic lab", role: "Site 3 · IPv4/IPv6 addressing and network documentation", diagram: "network",
    diagramCaption: "Conceptual multi-site topology illustrating routed connectivity, local switching, addressing, and network services used in the academic design.",
    technologies: ["Cisco", "Packet Tracer", "TCP/IP", "IPv4", "Subnetting", "VLANs", "Routing", "OSPF", "DHCP", "NAT", "DNS"], featuredTechnologies: ["Cisco", "Packet Tracer", "OSPF", "VLANs"], github: networkRepo,
    implementation: [
      { title: "IPv4 subnet design", text: "Designed and documented Site 3 addressing from the assigned 10.9.0.0/18 space, using VLSM to support LANs of different sizes. The report includes /21, /24, /24, and /25 subnet entries plus router, switch-management, endpoint, and gateway addressing." },
      { title: "IPv6 addressing", text: "Documented IPv6 global-unicast, link-local, and default-gateway assignments for Site 3 as part of the dual-stack network design." },
      { title: "Routing and services", text: "The broader lab combines routed multi-site connectivity with switching and common infrastructure concepts including VLANs, OSPF, DHCP, NAT, and DNS." },
    ],
    troubleshooting: [
      { title: "Addressing consistency review", text: "Reviewed the addressing tables for subnet, interface, and gateway consistency. One report entry lists Router0 Eth1/0 as 10.9.0.110 while related endpoints use 10.9.0.1 as their gateway; the portfolio presents this as a documentation discrepancy rather than claiming an unverified live fault." },
      { title: "Structured network diagnosis", text: "The project reinforced a layer-by-layer troubleshooting approach: confirm host addressing and gateway values first, then verify VLAN/interface state, routing information, and finally application services." },
    ],
    validation: [
      { title: "Design verification", text: "Validated the documented subnet boundaries, host ranges, and gateway assignments against the addressing plan and reviewed the topology for end-to-end routing dependencies." },
      { title: "Evidence boundary", text: "The repository contains the original Packet Tracer project and team documentation. The portfolio does not invent ping, traceroute, or routing-table output that is not preserved in the source material." },
    ],
    learned: [
      { title: "Network design at scale", text: "The project strengthened my understanding of how subnet planning, consistent addressing, routing, switching, and shared services depend on one another in a multi-site environment." },
      { title: "Documentation matters", text: "It also showed why accurate interface and gateway documentation is essential: a small inconsistency can complicate troubleshooting even when the overall design is sound." },
    ],
  },
  {
    slug: "azure-infrastructure", number: "02", title: "Microsoft Azure Cloud Infrastructure Lab", category: "Cloud infrastructure", type: "Hands-on lab",
    summary: "Compute, network access, and monitoring in a non-production Azure learning environment.",
    overview: "A hands-on Azure learning environment covering compute, virtual networking, access control, storage, security controls, monitoring, and Windows/Linux administration.",
    objective: "Build practical familiarity with how Azure compute, networking, permissions, storage, and monitoring work together to support a manageable cloud environment.", environment: "Microsoft Azure · non-production academic lab", role: "Hands-on cloud infrastructure coursework", diagram: "azure",
    diagramCaption: "Conceptual Azure architecture showing the relationship between virtual machines, virtual networking, security controls, identity/access, storage, and monitoring.",
    technologies: ["Microsoft Azure", "Virtual Machines", "Virtual Networks", "NSGs", "RBAC", "Azure Storage", "Azure Monitor", "Log Analytics", "Windows", "Linux"], featuredTechnologies: ["Azure", "Virtual Networks", "RBAC", "Monitoring"], github: "https://github.com/Devanshujamwal/Azure-Cloud-Infrastructure-Lab",
    implementation: [
      { title: "Compute and operating systems", text: "Worked with Azure virtual machines in Windows and Linux learning scenarios, connecting operating-system administration with cloud resource management." },
      { title: "Virtual networking and security", text: "Practised Azure Virtual Network concepts and Network Security Groups to understand how subnets, traffic rules, and access paths shape connectivity." },
      { title: "Identity, storage, and governance", text: "Applied RBAC and Azure governance concepts alongside Azure Storage to understand least-privilege access and resource organization." },
      { title: "Monitoring", text: "Used Azure Monitor and Log Analytics concepts to connect infrastructure operation with metrics, logs, and troubleshooting visibility." },
    ],
    troubleshooting: [
      { title: "Connectivity-first approach", text: "Cloud troubleshooting was approached by separating network reachability from operating-system and permission issues, then reviewing VNet/NSG configuration, VM state, and access controls." },
      { title: "Permissions and visibility", text: "The lab reinforced checking RBAC scope and monitoring data when a resource is reachable but an action or expected observation is unavailable." },
    ],
    validation: [
      { title: "Configuration review", text: "Validated lab work by reviewing resource state, network/security settings, role assignments, and monitoring configuration within the Azure learning environment." },
      { title: "Scope", text: "This case study describes academic hands-on work and the technologies practised; it does not claim production ownership, customer workloads, or undocumented deployment results." },
    ],
    learned: [
      { title: "Cloud systems are connected systems", text: "The strongest takeaway was that a VM is only one part of the service: networking, identity, permissions, storage, and monitoring all affect whether the environment is secure and supportable." },
      { title: "Operational visibility", text: "Monitoring and logs are most useful when they are designed into the environment rather than treated as an afterthought during troubleshooting." },
    ],
  },
  {
    slug: "security-monitoring", number: "03", title: "Security Monitoring & Threat Detection Lab", category: "Security monitoring", type: "Hands-on cybersecurity lab",
    summary: "Endpoint visibility and basic security-event investigation with Wazuh and network telemetry.",
    overview: "A cybersecurity learning lab focused on Windows and Linux events, SIEM fundamentals, and investigation context. It is presented as lab work; no professional SOC experience or detection results are claimed.",
    objective: "Understand how endpoint and network telemetry becomes useful investigation context and how analysts distinguish an alert from a verified security incident.", environment: "Windows / Linux · cybersecurity lab", role: "Hands-on security monitoring coursework", diagram: "security",
    diagramCaption: "Conceptual monitoring flow from Windows/Linux endpoints and network telemetry into centralized SIEM review and investigation.",
    technologies: ["Wazuh", "SIEM", "Windows", "Linux", "Wireshark", "Palo Alto", "MITRE ATT&CK concepts"], featuredTechnologies: ["Wazuh", "Windows / Linux", "Wireshark", "SIEM"], github: "https://github.com/Devanshujamwal/Security-Monitoring-Threat-Detection-Lab",
    implementation: [
      { title: "Endpoint visibility", text: "Worked with Windows and Linux security-event concepts and Wazuh/SIEM fundamentals to understand how endpoint activity can be collected and reviewed centrally." },
      { title: "Network context", text: "Used Wireshark and firewall/security coursework concepts to relate endpoint events to network behaviour, traffic inspection, and policy enforcement." },
      { title: "Investigation mindset", text: "Focused on reviewing event context, timestamps, source systems, and related activity before drawing conclusions from an alert." },
    ],
    troubleshooting: [
      { title: "Telemetry before conclusions", text: "The lab reinforced checking whether agents, event sources, timestamps, and collection paths are healthy before treating missing or unexpected SIEM data as a security finding." },
      { title: "Correlating context", text: "Investigation reasoning combines endpoint details with network evidence and security-policy context, reducing the risk of interpreting a single alert in isolation." },
    ],
    validation: [
      { title: "Event-path validation", text: "Validation in the learning workflow focuses on confirming that the source event, collection path, and SIEM record correspond before interpreting the security significance." },
      { title: "Evidence boundary", text: "This portfolio describes cybersecurity lab learning and investigation methodology; it does not claim professional SOC experience or fabricated detection outcomes." },
    ],
    learned: [
      { title: "Alerts need context", text: "A detection is a starting point, not a conclusion. Reliable investigation depends on log quality, endpoint context, network evidence, and an understanding of normal behaviour." },
      { title: "Security and operations overlap", text: "The lab connected security monitoring with core IT skills such as Windows/Linux administration, networking, troubleshooting, and clear documentation." },
    ],
  },
  {
    slug: "python-library-system", number: "04", title: "Python Library Management System", category: "Scripting & software", type: "Academic software project · three-person team",
    summary: "A Python team project with a Book class, command-line catalogue functions, and a supplied test script.",
    overview: "Developed as part of a three-person academic team. The repository contains book.py, library_app.py, test_book.py, and the project brief. Implementation details below are drawn from those files; individual ownership is not recorded.",
    objective: "Apply object-oriented programming to library records and develop a command-line application collaboratively.", environment: "Python · academic project", role: "Three-person academic team", diagram: "python",
    diagramCaption: "Module relationships from the repository. File handling is represented as implemented; the diagram does not imply that all application paths have passed testing.",
    technologies: ["Python", "Object-Oriented Programming", "Debugging", "Testing", "Team Collaboration", "Git/GitHub"], featuredTechnologies: ["Python", "OOP", "Testing", "Team project"], github: pythonRepo,
    implementation: [
      { title: "Book model", text: "book.py defines a Book class with ISBN, title, author, genre, and availability. Getters, setters, borrow_it(), and return_it() manage those values." },
      { title: "Catalogue operations", text: "library_app.py contains loading, ISBN lookup, add/remove, menu, and save functions. The loader reads comma-separated records into Book objects." },
      { title: "Collaborative development", text: "The repository represents a three-person academic team project. Because the source does not attribute individual functions, this portfolio does not claim sole ownership of specific modules." },
    ],
    troubleshooting: [
      { title: "Code-review finding", text: "The original application stored the selected catalogue filename in local scope while the save path referenced it elsewhere. During the portfolio refresh, I traced the data flow and corrected the design by passing the filename explicitly to the save function." },
      { title: "Retest approach", text: "After the change, the repository was refreshed with a working menu flow, a sample catalogue, and repeatable assertions for the Book model so the core behaviours can be checked consistently." },
    ],
    validation: [
      { title: "Book model checks", text: "The refreshed test_book.py uses assertions to verify construction, borrowing, title matching, returning, setters, and genre handling." },
      { title: "Application validation", text: "The refreshed repository also includes a small sample catalogue and an explicit load/save path so the command-line workflow can be exercised locally without relying on hidden files." },
    ],
    learned: [{ title: "OOP and maintainability", text: "The project reinforced separating data and behaviour into a reusable class, keeping catalogue operations in application functions, and using repeatable tests when changing program behaviour." }, { title: "Team-code review", text: "Working from a shared codebase also highlights the value of clear ownership, consistent naming, scoped variables, and tests that make integration problems easier to diagnose." }],
  },
];

export const labItems = [
  { name: "Router", short: "RTR", description: "Cisco routing concepts: IPv4 addressing, OSPF, NAT, and route verification.", concepts: ["IPv4", "OSPF", "NAT"] },
  { name: "Switch", short: "SW", description: "Local network segmentation using VLANs, access ports, and trunk links.", concepts: ["VLANs", "Switching", "Trunking"] },
  { name: "Firewall", short: "FW", description: "Palo Alto coursework covering zones, security policies, NAT, and traffic inspection.", concepts: ["Zones", "Policies", "Traffic logs"] },
  { name: "Windows Server", short: "WIN", description: "Windows administration concepts, services, permissions, and user support.", concepts: ["Windows", "Services", "Permissions"] },
  { name: "Linux Server", short: "LNX", description: "Linux administration, command-line troubleshooting, logs, and service management.", concepts: ["Linux", "Logs", "Services"] },
  { name: "Azure", short: "AZR", description: "Azure compute, networking, access control, storage, and monitoring concepts.", concepts: ["VMs", "VNets", "RBAC"] },
  { name: "Endpoint", short: "END", description: "End-user troubleshooting across hardware, software, and network connectivity.", concepts: ["Diagnostics", "Configuration", "User support"] },
];
export const education = {
  school: "Southern Alberta Institute of Technology (SAIT)", program: "Information Technology Services Diploma", location: "Calgary, Alberta, Canada", date: "Jan 2024 – Apr 2026",
  coursework: ["Networking", "Cloud Computing", "Cybersecurity", "Virtualization", "Systems Administration", "Linux", "Scripting", "Programming"],
  training: ["Microsoft Azure", "Cisco Networking", "Palo Alto Networks", "Red Hat Linux"],
};
