// VAPT Mastery Roadmap - Application Database and Controller

// 1. Core Course Data
const roadmapData = [
    {
        id: "phase-0",
        num: 0,
        badge: "PHASE 0",
        title: "Foundations",
        subtitle: "You cannot pentest what you don't understand. Skipping this phase is the #1 reason people plateau at 'script kiddie' level.",
        timeline: "Weeks 1–8",
        resources: {
            tools: ["Wireshark", "Bash", "PowerShell", "Command Line Utilities"],
            concepts: ["OSI & TCP/IP", "Subnetting & NAT", "Symmetric/Asymmetric Cryptography", "STRIDE Threat Modeling", "CVSS scoring"],
            labs: ["Install VirtualBox/VMware", "Setup Kali Linux VM", "Setup Windows 10/11 Target VM"]
        },
        parts: [
            {
                id: "part-0-1",
                title: "0.1 Computer & OS Fundamentals",
                items: [
                    { id: "item-0-1-1", text: "How computers boot, processes, memory, file systems (NTFS, ext4)", type: "standard" },
                    { id: "item-0-1-2", text: "Windows internals: registry, services, Active Directory basics, PowerShell", type: "standard" },
                    { id: "item-0-1-3", text: "Linux fundamentals: filesystem hierarchy, permissions (chmod/chown), systemd, package managers", type: "standard" },
                    { id: "item-0-1-4", text: "Command line fluency: Bash + PowerShell — navigate blind", type: "standard" },
                    { id: "item-0-1-5", text: "Practice: Install Kali Linux (attacker box) + Windows 10/11 VM (target) on VirtualBox/VMware. Live in the terminal for 2 weeks minimum.", type: "practice" }
                ]
            },
            {
                id: "part-0-2",
                title: "0.2 Networking (Non-Negotiable)",
                items: [
                    { id: "item-0-2-1", text: "OSI & TCP/IP models — every layer, cold", type: "standard" },
                    { id: "item-0-2-2", text: "IP addressing, subnetting, CIDR, NAT, DHCP, DNS (recursive resolution, record types)", type: "standard" },
                    { id: "item-0-2-3", text: "TCP 3-way handshake, UDP, ICMP", type: "standard" },
                    { id: "item-0-2-4", text: "Ports & common services (21, 22, 23, 25, 53, 80, 110, 143, 443, 445, 3389, etc.)", type: "standard" },
                    { id: "item-0-2-5", text: "Routing basics, VLANs, firewalls, proxies, VPNs", type: "standard" },
                    { id: "item-0-2-6", text: "Packet analysis with Wireshark — capture and read raw traffic", type: "standard" },
                    { id: "item-0-2-7", text: "Practice: Subnet a /24 into 8 networks by hand. Capture and analyze HTTP, DNS, and ARP traffic in Wireshark.", type: "practice" }
                ]
            },
            {
                id: "part-0-3",
                title: "0.3 Programming & Scripting",
                items: [
                    { id: "item-0-3-1", text: "Python (primary) — scripting exploits, automation, socket programming", type: "standard" },
                    { id: "item-0-3-2", text: "Bash — one-liners, automation, chaining tools", type: "standard" },
                    { id: "item-0-3-3", text: "PowerShell — essential for Windows/AD attacks", type: "standard" },
                    { id: "item-0-3-4", text: "Basic C — understanding memory, pointers (needed later for binary exploitation)", type: "standard" },
                    { id: "item-0-3-5", text: "Basic SQL — needed for SQLi and DB enumeration", type: "standard" },
                    { id: "item-0-3-6", text: "JavaScript/HTML/PHP basics — needed for web app testing (XSS, request forgery, source review)", type: "standard" },
                    { id: "item-0-3-7", text: "Practice: Write a Python port scanner from scratch (no libraries first, then with sockets). Write a Bash script to automate recon on a target.", type: "practice" }
                ]
            },
            {
                id: "part-0-4",
                title: "0.4 Security Fundamentals",
                items: [
                    { id: "item-0-4-1", text: "CIA Triad, AAA (Authentication, Authorization, Accounting)", type: "standard" },
                    { id: "item-0-4-2", text: "Cryptography basics: symmetric vs asymmetric, hashing, SSL/TLS handshake, PKI, certificates", type: "standard" },
                    { id: "item-0-4-3", text: "Common vulnerability classes (overview before deep dive): injection, broken auth, misconfig, etc.", type: "standard" },
                    { id: "item-0-4-4", text: "CVSS scoring, CVE/CWE/NVD databases", type: "standard" },
                    { id: "item-0-4-5", text: "Legal & ethical framework: what makes testing authorized vs illegal (Rules of Engagement, scope, consent)", type: "standard" }
                ]
            },
            {
                id: "part-0-5",
                title: "0.5 Threat Modeling Basics",
                items: [
                    { id: "item-0-5-1", text: "Why threat modeling comes before testing: understanding what you're protecting and from whom shapes scope and priority", type: "standard" },
                    { id: "item-0-5-2", text: "Frameworks: STRIDE (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege), DREAD, PASTA, Attack Trees", type: "standard" },
                    { id: "item-0-5-3", text: "Data flow diagrams (DFDs) — mapping trust boundaries", type: "standard" },
                    { id: "item-0-5-4", text: "How threat modeling output feeds into test scoping and reporting priority", type: "standard" },
                    { id: "item-0-5-5", text: "Practice: Take a simple 3-tier web app (frontend, API, DB) and produce a STRIDE-based threat model before ever touching a scanner.", type: "practice" }
                ]
            },
            {
                id: "part-0-c",
                title: "Phase 0 Verification Checkpoint",
                items: [
                    { id: "item-0-c-1", text: "Checkpoint: You can explain TCP handshake, subnet a network, write a basic Python script, and explain the CIA triad — without notes.", type: "checkpoint" }
                ]
            }
        ]
    },
    {
        id: "phase-1",
        num: 1,
        badge: "PHASE 1",
        title: "Beginner — Core Pentesting",
        subtitle: "Learn the foundational active testing methodologies, scanning tools, basic exploitation, and local host privilege escalation.",
        timeline: "Months 2–4",
        resources: {
            tools: ["Nmap", "Nessus / OpenVAS", "Metasploit (msfvenom/meterpreter)", "Hydra", "John the Ripper", "Hashcat", "Burp Suite (Community)"],
            concepts: ["Active/Passive Recon", "Vulnerability Assessment vs Pentesting", "False Positives Verification", "Local Privilege Escalation (Linux/Windows)"],
            labs: ["TryHackMe (Complete Beginner & Offensive paths)", "HackTheBox Starting Point", "OverTheWire (Bandit & Natas)"]
        },
        parts: [
            {
                id: "part-1-1",
                title: "1.1 Reconnaissance & OSINT",
                items: [
                    { id: "item-1-1-1", text: "Passive recon: WHOIS, DNS enumeration, Google dorking, Shodan, Censys", type: "standard" },
                    { id: "item-1-1-2", text: "Active recon: Nmap (all scan types — SYN, connect, UDP, version, OS detection, NSE scripts)", type: "standard" },
                    { id: "item-1-1-3", text: "Subdomain enumeration: Sublist3r, Amass, crt.sh", type: "standard" },
                    { id: "item-1-1-4", text: "Tools: theHarvester, Maltego, Recon-ng, Nmap, Shodan, SpiderFoot", type: "standard" }
                ]
            },
            {
                id: "part-1-2",
                title: "1.2 Vulnerability Assessment",
                items: [
                    { id: "item-1-2-1", text: "Difference between VA (broad, automated) and PT (deep, manual, exploitative)", type: "standard" },
                    { id: "item-1-2-2", text: "Vulnerability scanners: Nessus, OpenVAS/Greenbone, Qualys, Nexpose", type: "standard" },
                    { id: "item-1-2-3", text: "Manual verification of scanner output (scanners give false positives — confirm manually)", type: "standard" },
                    { id: "item-1-2-4", text: "Report writing basics: severity, CVSS, remediation, evidence", type: "standard" }
                ]
            },
            {
                id: "part-1-3",
                title: "1.3 System/Network Exploitation Basics",
                items: [
                    { id: "item-1-3-1", text: "Metasploit Framework: modules, payloads, meterpreter, msfvenom", type: "standard" },
                    { id: "item-1-3-2", text: "Manual exploitation of known CVEs (without Metasploit) — builds real skill", type: "standard" },
                    { id: "item-1-3-3", text: "Password attacks: Hydra, Medusa, John the Ripper, Hashcat", type: "standard" },
                    { id: "item-1-3-4", text: "SMB enumeration & exploitation (EternalBlue-class vulnerabilities), enum4linux, smbclient", type: "standard" },
                    { id: "item-1-3-5", text: "Privilege escalation — Linux (LinPEAS, GTFOBins, SUID/SGID, cron jobs, kernel exploits)", type: "standard" },
                    { id: "item-1-3-6", text: "Privilege escalation — Windows (WinPEAS, service misconfig, unquoted paths, token impersonation, kernel exploits)", type: "standard" }
                ]
            },
            {
                id: "part-1-4",
                title: "1.4 Web Application Basics (Intro)",
                items: [
                    { id: "item-1-4-1", text: "HTTP/HTTPS deep dive: methods, headers, cookies, sessions", type: "standard" },
                    { id: "item-1-4-2", text: "Burp Suite fundamentals: proxy, repeater, intruder", type: "standard" },
                    { id: "item-1-4-3", text: "OWASP Top 10 (2021/2025) — memorize and understand each category", type: "standard" }
                ]
            },
            {
                id: "part-1-l",
                title: "Phase 1 Recommended Labs",
                items: [
                    { id: "item-1-l-1", text: "Lab: TryHackMe (Complete Beginner + Offensive Pentesting paths)", type: "lab" },
                    { id: "item-1-l-2", text: "Lab: HackTheBox 'Starting Point' + Easy machines", type: "lab" },
                    { id: "item-1-l-3", text: "Lab: OverTheWire Bandit and Natas wargames", type: "lab" }
                ]
            },
            {
                id: "part-1-c",
                title: "Phase 1 Verification Checkpoint",
                items: [
                    { id: "item-1-c-1", text: "Checkpoint: You can nmap-scan a box, identify a service vulnerability, exploit it manually or via Metasploit, escalate privileges, and write a basic report — end to end, on an HTB Easy box.", type: "checkpoint" }
                ]
            }
        ]
    },
    {
        id: "phase-2",
        num: 2,
        badge: "PHASE 2",
        title: "Intermediate — Specialization",
        subtitle: "Deep-dive into Web Applications, APIs, complex Active Directory network structures, pivoting, and wireless security.",
        timeline: "Months 4–8",
        resources: {
            tools: ["Burp Suite Pro (Turbo Intruder, Autorize)", "sqlmap", "ffuf / gobuster", "Postman / Kiterunner / Arjun", "BloodHound / PowerView", "Mimikatz / Rubeus / Impacket", "CrackMapExec / NetExec", "Aircrack-ng / Wifite"],
            concepts: ["OWASP Top 10 Manual Exploitation", "API Security vulnerabilities (BOLA/IDOR)", "AD Attack Paths (Kerberoasting, DCSync, Delegation)", "Pivoting & Tunneling (Chisel, Ligolo-ng)", "WPA2/3 Handshake cracking"],
            labs: ["PortSwigger Web Security Academy (All Labs)", "Juice Shop / DVWA", "HTB Pro Labs (Dante, Offshore)", "GOAD (Game of Active Directory)"]
        },
        parts: [
            {
                id: "part-2-1",
                title: "2.1 Web Application Penetration Testing (Deep Dive)",
                items: [
                    { id: "item-2-1-1", text: "Injection: SQLi (manual + sqlmap — union, boolean-blind, time-blind, out-of-band), NoSQLi, Command Injection, LDAP Injection", type: "standard" },
                    { id: "item-2-1-2", text: "Broken Authentication: session fixation, JWT attacks (alg confusion, weak secrets), OAuth flaws", type: "standard" },
                    { id: "item-2-1-3", text: "XSS: reflected, stored, DOM-based; filter/WAF bypass techniques", type: "standard" },
                    { id: "item-2-1-4", text: "XXE (XML External Entity) attacks", type: "standard" },
                    { id: "item-2-1-5", text: "SSRF (Server-Side Request Forgery) — including cloud metadata exploitation", type: "standard" },
                    { id: "item-2-1-6", text: "IDOR (Insecure Direct Object Reference) & broken access control", type: "standard" },
                    { id: "item-2-1-7", text: "CSRF and same-origin policy bypasses", type: "standard" },
                    { id: "item-2-1-8", text: "File Upload vulnerabilities — extension bypass, content-type spoofing, polyglot files", type: "standard" },
                    { id: "item-2-1-9", text: "Deserialization attacks (Java, PHP, Python pickle)", type: "standard" },
                    { id: "item-2-1-10", text: "Business logic flaws — the hardest to automate, most valued in real assessments", type: "standard" }
                ]
            },
            {
                id: "part-2-1a",
                title: "2.1.1 API Security (Dedicated Focus)",
                items: [
                    { id: "item-2-1a-1", text: "OWASP API Security Top 10: BOLA/IDOR, broken authorization, resource consumption, SSRF, misconfig, versioning", type: "standard" },
                    { id: "item-2-1a-2", text: "REST vs GraphQL vs gRPC/SOAP testing differences", type: "standard" },
                    { id: "item-2-1a-3", text: "GraphQL-specific: introspection abuse, batching/alias rate-limit bypass, nested query DoS", type: "standard" },
                    { id: "item-2-1a-4", text: "Mass assignment, excessive data exposure, rate limiting & throttling bypass", type: "standard" },
                    { id: "item-2-1a-5", text: "API gateway misconfiguration, versioning issues (old unpatched API versions still live)", type: "standard" },
                    { id: "item-2-1a-6", text: "Tools: Postman, Insomnia, GraphQL Voyager, Kiterunner, EAPI/Arjun (parameter discovery)", type: "standard" }
                ]
            },
            {
                id: "part-2-2",
                title: "2.2 Network Penetration Testing (Deep Dive)",
                items: [
                    { id: "item-2-2-1", text: "Advanced Nmap scripting (NSE custom scripts)", type: "standard" },
                    { id: "item-2-2-2", text: "Man-in-the-middle attacks: ARP spoofing, DNS spoofing (Ettercap, Bettercap)", type: "standard" },
                    { id: "item-2-2-3", text: "VLAN hopping, 802.1X bypass", type: "standard" },
                    { id: "item-2-2-4", text: "Firewall/IDS/IPS evasion techniques", type: "standard" },
                    { id: "item-2-2-5", text: "Pivoting & tunneling: SSH tunneling, Chisel, Ligolo-ng, proxychains — attacking networks behind the initial foothold", type: "standard" },
                    { id: "item-2-2-6", text: "Internal network exploitation from a compromised host", type: "standard" }
                ]
            },
            {
                id: "part-2-3",
                title: "2.3 Active Directory Attacks (Critical)",
                items: [
                    { id: "item-2-3-1", text: "AD enumeration: BloodHound, PowerView, ldapsearch", type: "standard" },
                    { id: "item-2-3-2", text: "Kerberoasting, AS-REP Roasting", type: "standard" },
                    { id: "item-2-3-3", text: "Pass-the-Hash, Pass-the-Ticket, Overpass-the-Hash", type: "standard" },
                    { id: "item-2-3-4", text: "Golden Ticket / Silver Ticket attacks", type: "standard" },
                    { id: "item-2-3-5", text: "DCSync, NTDS.dit extraction", type: "standard" },
                    { id: "item-2-3-6", text: "ACL abuse, GPO abuse, delegation attacks (unconstrained/constrained/RBCD)", type: "standard" },
                    { id: "item-2-3-7", text: "Tools: BloodHound, Mimikatz, Rubeus, Impacket suite, CrackMapExec/NetExec, PowerSploit", type: "standard" }
                ]
            },
            {
                id: "part-2-4",
                title: "2.4 Wireless Penetration Testing",
                items: [
                    { id: "item-2-4-1", text: "WEP/WPA/WPA2/WPA3 attacks, handshake capture & cracking", type: "standard" },
                    { id: "item-2-4-2", text: "Evil Twin attacks, rogue AP", type: "standard" },
                    { id: "item-2-4-3", text: "Tools: Aircrack-ng suite, Wifite, Kismet, hashcat for handshake cracking", type: "standard" }
                ]
            },
            {
                id: "part-2-l",
                title: "Phase 2 Recommended Labs",
                items: [
                    { id: "item-2-l-1", text: "Lab: PortSwigger Web Security Academy (do EVERY lab — this is the gold standard, free)", type: "lab" },
                    { id: "item-2-l-2", text: "Lab: Deploy & exploit DVWA, bWAPP, Juice Shop, HackTheBox web-focused machines", type: "lab" },
                    { id: "item-2-l-3", text: "Lab: HackTheBox Pro Labs (Offshore, Dante), TryHackMe AD modules, dedicated AD labs (GOAD - Game of Active Directory)", type: "lab" }
                ]
            },
            {
                id: "part-2-c",
                title: "Phase 2 Verification Checkpoint",
                items: [
                    { id: "item-2-c-1", text: "Checkpoint: You can compromise a full AD lab environment (initial foothold → domain admin), exploit a custom web app manually without a scanner doing the work, and pivot through a network.", type: "checkpoint" }
                ]
            }
        ]
    },
    {
        id: "phase-3",
        num: 3,
        badge: "PHASE 3",
        title: "Advanced Specializations",
        subtitle: "Push into binary exploitation, cloud security (AWS/Azure), mobile app audits, red team operations, OT/SCADA, and emerging AI security.",
        timeline: "Months 8–12",
        resources: {
            tools: ["Ghidra / IDA Free / x64dbg / GDB", "Pacu / ScoutSuite / Prowler / Kube-hunter", "MobSF / Frida / jadx / apktool / Objection", "Sliver / Havoc / Cobalt Strike", "binwalk / Firmware Analysis Toolkit", "PyRIT / garak / promptfoo"],
            concepts: ["Buffer Overflows & ROP chains", "Cloud IAM Misconfigs", "Android SSL Pinning Bypass", "AV/EDR evasion & LOLBins", "Purdue Model & Modbus/DNP3 protocols", "LLM Prompt Injection & RAG attacks"],
            labs: ["pwnable.kr / ROP Emporium", "MobSF setup & DIVA Android", "ICS ranges (GRFICS / Conpot)"]
        },
        parts: [
            {
                id: "part-3-1",
                title: "3.1 Binary Exploitation & Reverse Engineering",
                items: [
                    { id: "item-3-1-1", text: "x86/x64 assembly fundamentals", type: "standard" },
                    { id: "item-3-1-2", text: "Buffer overflows: stack-based (classic), understanding ASLR, DEP/NX, stack canaries", type: "standard" },
                    { id: "item-3-1-3", text: "Return-Oriented Programming (ROP)", type: "standard" },
                    { id: "item-3-1-4", text: "Format string vulnerabilities", type: "standard" },
                    { id: "item-3-1-5", text: "Reverse engineering with Ghidra, IDA Free, radare2", type: "standard" },
                    { id: "item-3-1-6", text: "Debugging with GDB + pwndbg/GEF, x64dbg (Windows)", type: "standard" },
                    { id: "item-3-1-7", text: "Fuzzing: AFL++, boofuzz", type: "standard" }
                ]
            },
            {
                id: "part-3-2",
                title: "3.2 Cloud Penetration Testing",
                items: [
                    { id: "item-3-2-1", text: "AWS: IAM misconfig, S3 bucket exploitation, metadata service abuse (SSRF → credential theft), Lambda/EC2 attacks", type: "standard" },
                    { id: "item-3-2-2", text: "Azure: AD attacks, misconfigured storage, service principal abuse", type: "standard" },
                    { id: "item-3-2-3", text: "GCP basics", type: "standard" },
                    { id: "item-3-2-4", text: "Tools: Pacu (AWS exploitation framework), ScoutSuite, Prowler, CloudSploit", type: "standard" },
                    { id: "item-3-2-5", text: "Container security: Docker escapes, Kubernetes attacks (kube-hunter, kube-bench)", type: "standard" }
                ]
            },
            {
                id: "part-3-3",
                title: "3.3 Mobile Application Penetration Testing",
                items: [
                    { id: "item-3-3-1", text: "Android: APK reverse engineering (jadx, apktool), static + dynamic analysis, Frida for runtime instrumentation, insecure storage, SSL pinning bypass", type: "standard" },
                    { id: "item-3-3-2", text: "iOS: IPA analysis, jailbreak-based testing, Frida/Objection", type: "standard" },
                    { id: "item-3-3-3", text: "OWASP Mobile Top 10", type: "standard" }
                ]
            },
            {
                id: "part-3-4",
                title: "3.4 Advanced Evasion & Red Teaming",
                items: [
                    { id: "item-3-4-1", text: "AV/EDR evasion: payload obfuscation, process injection, living-off-the-land binaries (LOLBins)", type: "standard" },
                    { id: "item-3-4-2", text: "C2 frameworks: Cobalt Strike (commercial standard), Sliver, Havoc (open-source alternatives)", type: "standard" },
                    { id: "item-3-4-3", text: "Custom malware/implant development basics (for authorized red team work only)", type: "standard" },
                    { id: "item-3-4-4", text: "Social engineering: phishing campaign design (GoPhish), pretexting fundamentals", type: "standard" },
                    { id: "item-3-4-5", text: "Physical security testing basics (badge cloning, lock picking — awareness level)", type: "standard" }
                ]
            },
            {
                id: "part-3-5",
                title: "3.5 IoT & Hardware (Optional Specialization)",
                items: [
                    { id: "item-3-5-1", text: "Firmware extraction & analysis (binwalk)", type: "standard" },
                    { id: "item-3-5-2", text: "UART/JTAG interfacing", type: "standard" },
                    { id: "item-3-5-3", text: "Tools: Firmware Analysis Toolkit", type: "standard" }
                ]
            },
            {
                id: "part-3-6",
                title: "3.6 OT / ICS / SCADA Security (Optional Specialization)",
                items: [
                    { id: "item-3-6-1", text: "Purdue Model — understanding the IT/OT network segmentation levels", type: "standard" },
                    { id: "item-3-6-2", text: "Protocols: Modbus, DNP3, PROFINET, OPC-UA, BACnet", type: "standard" },
                    { id: "item-3-6-3", text: "PLC/RTU/HMI attack surface, engineering workstation compromise", type: "standard" },
                    { id: "item-3-6-4", text: "Why active scanning is often prohibited in OT environments — passive assessment techniques", type: "standard" },
                    { id: "item-3-6-5", text: "Tools: GRASSMARLIN, Wireshark with ICS dissectors, Shodan (ICS-specific searches), Nessus with OT plugins", type: "standard" },
                    { id: "item-3-6-6", text: "Standards: IEC 62443, NERC CIP (for critical infrastructure)", type: "standard" }
                ]
            },
            {
                id: "part-3-7",
                title: "3.7 Purple Teaming & Detection Awareness",
                items: [
                    { id: "item-3-7-1", text: "Reading SIEM alerts and understanding common detection logic (Sigma rules)", type: "standard" },
                    { id: "item-3-7-2", text: "EDR/AV internals at a conceptual level: hooking, ETW, AMSI — understand why an evasion technique works", type: "standard" },
                    { id: "item-3-7-3", text: "MITRE ATT&CK Navigator — mapping offensive actions to detections, collaborating with blue team on gaps", type: "standard" },
                    { id: "item-3-7-4", text: "Adversary emulation vs traditional pentesting — the difference in objective (test detection/response, not just find vulns)", type: "standard" }
                ]
            },
            {
                id: "part-3-8",
                title: "3.8 AI / LLM Application Security (Emerging Specialization)",
                items: [
                    { id: "item-3-8-1", text: "OWASP Top 10 for LLM Applications: prompt injection (direct & indirect), insecure output handling, training data poisoning, model denial of service, sensitive information disclosure, insecure plugin/tool design, excessive agency", type: "standard" },
                    { id: "item-3-8-2", text: "Jailbreak techniques and system prompt extraction (for authorized testing of your own org's AI products)", type: "standard" },
                    { id: "item-3-8-3", text: "RAG pipeline attack surface: document injection, retrieval poisoning", type: "standard" },
                    { id: "item-3-8-4", text: "Tools/resources: PyRIT (Microsoft), garak (LLM vulnerability scanner), promptfoo", type: "standard" }
                ]
            },
            {
                id: "part-3-l",
                title: "Phase 3 Recommended Labs",
                items: [
                    { id: "item-3-l-1", text: "Lab: Practice binary bugs on pwnable.kr, pwnable.tw, ROP Emporium, Exploit Exercises (Nebula, Protostar)", type: "lab" },
                    { id: "item-3-l-2", text: "Lab: MobSF (Mobile Security Framework), DIVA Android, InsecureShop, HTB mobile challenges", type: "lab" },
                    { id: "item-3-l-3", text: "Lab: ICS range simulators (e.g., a self-hosted GRFICS or Conpot honeypot for safe practice)", type: "lab" }
                ]
            },
            {
                id: "part-3-c",
                title: "Phase 3 Verification Checkpoint",
                items: [
                    { id: "item-3-c-1", text: "Checkpoint: You can find and exploit a memory corruption vulnerability in a controlled binary, compromise a misconfigured cloud environment, reverse an Android app to bypass SSL pinning, set up a basic C2 operation, and explain how your findings would trigger a detection in a typical SOC.", type: "checkpoint" }
                ]
            }
        ]
    },
    {
        id: "phase-4",
        num: 4,
        badge: "PHASE 4",
        title: "Professional Practice",
        subtitle: "Refine soft skills, scoping workflows, compliance standards (PCI, SOC 2, DPDP, CERT-In), and learn how to draft premium-grade reports.",
        timeline: "Ongoing Professionalism",
        resources: {
            tools: ["Dradis", "PlexTrac", "Custom Markdown templates", "MITRE ATT&CK Mapping tool"],
            concepts: ["PTES, OSSTMM, NIST SP 800-115 Methodologies", "Executive vs Technical reporting", "Rules of Engagement & scoping", "PCI-DSS, HIPAA, SOC 2, ISO 27001, RBI/SEBI, DPDP (India) Compliance context", "Handling Developer pushback"],
            labs: ["Build your custom professional markdown report template", "Draft complete walkthroughs for 5 compromise labs"]
        },
        parts: [
            {
                id: "part-4-1",
                title: "4.1 Industry Methodologies (Know These Cold)",
                items: [
                    { id: "item-4-1-1", text: "PTES (Penetration Testing Execution Standard)", type: "standard" },
                    { id: "item-4-1-2", text: "OWASP Testing Guide (web) & OWASP MASTG (mobile)", type: "standard" },
                    { id: "item-4-1-3", text: "NIST SP 800-115 and OSSTMM", type: "standard" },
                    { id: "item-4-1-4", text: "MITRE ATT&CK Framework — map your findings to tactics/techniques", type: "standard" }
                ]
            },
            {
                id: "part-4-2",
                title: "4.2 Report Writing (This Is What Clients Actually Pay For)",
                items: [
                    { id: "item-4-2-1", text: "Executive summary (for non-technical stakeholders) vs technical findings (for engineers)", type: "standard" },
                    { id: "item-4-2-2", text: "Proper CVSS v3.1/v4.0 scoring with justification", type: "standard" },
                    { id: "item-4-2-3", text: "Clear reproduction steps, evidence (screenshots, raw requests/responses), and business impact", type: "standard" },
                    { id: "item-4-2-4", text: "Actionable remediation guidance, not just 'patch it'", type: "standard" },
                    { id: "item-4-2-5", text: "Practice: Build a personal report template — practice writing report entries on every lab machine you complete.", type: "practice" }
                ]
            },
            {
                id: "part-4-3",
                title: "4.3 Engagement Process",
                items: [
                    { id: "item-4-3-1", text: "Scoping, Rules of Engagement (RoE), pre-engagement legal paperwork", type: "standard" },
                    { id: "item-4-3-2", text: "Difference between black-box, grey-box, white-box testing", type: "standard" },
                    { id: "item-4-3-3", text: "Deconfliction and client communication during testing", type: "standard" },
                    { id: "item-4-3-4", text: "Retesting/verification process", type: "standard" }
                ]
            },
            {
                id: "part-4-4",
                title: "4.4 Compliance-Driven Testing Context",
                items: [
                    { id: "item-4-4-1", text: "PCI-DSS — requirement 11.3 (segmentation testing, annual pentest for cardholder data environments)", type: "standard" },
                    { id: "item-4-4-2", text: "HIPAA — risk analysis requirements for healthcare data handlers", type: "standard" },
                    { id: "item-4-4-3", text: "SOC 2 — pentest as part of Type II audit evidence", type: "standard" },
                    { id: "item-4-4-4", text: "ISO 27001 — Annex A controls referencing technical vulnerability testing", type: "standard" },
                    { id: "item-4-4-5", text: "India-specific: RBI cybersecurity framework for banks/NBFCs, SEBI CSCRF for market infrastructure, CERT-In empanelment (many Indian clients require CERT-In empanelled firms/testers for compliance tests)", type: "standard" }
                ]
            },
            {
                id: "part-4-5",
                title: "4.5 Legal Landscape & Jurisdiction Notes",
                items: [
                    { id: "item-4-5-1", text: "General principle: written, signed authorization (RoE) before any testing — no exceptions, regardless of how 'obviously vulnerable' a target is", type: "standard" },
                    { id: "item-4-5-2", text: "India: relevant provisions under the Information Technology Act, 2000 (Sections 43 and 66 cover unauthorized access; testing without consent is criminal) and the DPDP Act, 2023 where personal data is handled during tests", type: "standard" },
                    { id: "item-4-5-3", text: "US: Computer Fraud and Abuse Act (CFAA) — authorization scope matters more than intent", type: "standard" },
                    { id: "item-4-5-4", text: "EU/UK: Computer Misuse Act (UK), GDPR implications when test data includes personal data", type: "standard" },
                    { id: "item-4-5-5", text: "Cross-border engagements: data residency and export restrictions can affect where findings/evidence are stored and transmitted", type: "standard" }
                ]
            },
            {
                id: "part-4-6",
                title: "4.6 Client-Facing & Soft Skills",
                items: [
                    { id: "item-4-6-1", text: "Translating technical risk into business risk language for executives (an out-brief is not a repeat of the technical report)", type: "standard" },
                    { id: "item-4-6-2", text: "Handling pushback: a developer or admin disputing a finding, explaining severity without being condescending", type: "standard" },
                    { id: "item-4-6-3", text: "Managing scope creep and 'just quickly check this too' requests during an engagement", type: "standard" },
                    { id: "item-4-6-4", text: "Presenting findings live (out-brief/debrief) — structure: impact first, technical detail second", type: "standard" },
                    { id: "item-4-6-5", text: "Written communication discipline — status updates during multi-week engagements, flagging critical findings immediately rather than waiting for the final report", type: "standard" }
                ]
            },
            {
                id: "part-4-c",
                title: "Phase 4 Verification Checkpoint",
                items: [
                    { id: "item-4-c-1", text: "Checkpoint: You have a polished, portfolio-ready sample report (redacted, from a lab environment) that you could show an employer, and you can explain — in plain business language, without jargon — why a finding matters to someone non-technical.", type: "checkpoint" }
                ]
            }
        ]
    },
    {
        id: "phase-5",
        num: 5,
        badge: "PHASE 5",
        title: "Certification Goals",
        subtitle: "Choose your path from fundamentals to specialized credentials (e.g. OSCP for network, CRTP for Active Directory, BSCP for web).",
        timeline: "Certification Milestones",
        resources: {
            tools: ["Official Course Portals", "Exam Prep Labs", "Practice Exam Simulators"],
            concepts: ["Exam Strategy", "Hands-on Practical Exam Time Management", "Writing Certified Exam Reports"],
            labs: ["eJPT Exam Labs", "OSCP PWK Labs / PG Practice", "Altered Security AD Ranges", "PortSwigger Practitioner practice exams"]
        },
        parts: [
            {
                id: "part-5-1",
                title: "5.1 Entry & Entry/Mid Level Certifications",
                items: [
                    { id: "item-5-1-1", text: "eJPT (INE) — Practical fundamentals, highly budget-friendly", type: "standard" },
                    { id: "item-5-1-2", text: "CompTIA PenTest+ — Broad theoretical knowledge and methodologies", type: "standard" }
                ]
            },
            {
                id: "part-5-2",
                title: "5.2 Mid & Mid-Advanced Level Certifications",
                items: [
                    { id: "item-5-2-1", text: "CEH (EC-Council) — Widely recognized, mostly theory. Useful for HR resume filters, not skill proof.", type: "standard" },
                    { id: "item-5-2-2", text: "OSCP (Offensive Security) — The industry gold standard. 100% hands-on, practical 24h exam. 'Try Harder'.", type: "standard" }
                ]
            },
            {
                id: "part-5-3",
                title: "5.3 Advanced Specialization Certifications",
                items: [
                    { id: "item-5-3-1", text: "eWPTX / Burp Suite Certified Practitioner — Deep web application security specialization", type: "standard" },
                    { id: "item-5-3-2", text: "CRTP / CRTE (Altered Security) — Best-in-class Active Directory attack and defense credentials", type: "standard" },
                    { id: "item-5-3-3", text: "GICSP (GIAC) — Global Industrial Cyber Security Professional (for OT/ICS pathways)", type: "standard" },
                    { id: "item-5-3-4", text: "CERT-In empanelment (for India-based operations) or ISO 27001 Lead Auditor for GRC-oriented paths", type: "standard" }
                ]
            },
            {
                id: "part-5-4",
                title: "5.4 Advanced & Expert Level Certifications",
                items: [
                    { id: "item-5-4-1", text: "OSEP (Offensive Security) — AV/EDR evasion, advanced Active Directory, red teaming operations", type: "standard" },
                    { id: "item-5-4-2", text: "OSED / OSCE3 — Advanced software exploit development and reverse engineering", type: "standard" },
                    { id: "item-5-4-3", text: "Cloud certs: CCSP (theoretical), AWS/Azure Security Specialties, or hands-on Cloud security paths", type: "standard" },
                    { id: "item-5-4-4", text: "Recommended Progression Path: eJPT → OSCP → CRTP → Specialize (OSWE for Web / OSEP for Red Team)", type: "practice" }
                ]
            }
        ]
    },
    {
        id: "phase-6",
        num: 6,
        badge: "PHASE 6",
        title: "Continuous Growth",
        subtitle: "The security field evolves weekly. Keep your skills sharp with active CTF participation, research, bug hunting, and community networking.",
        timeline: "Indefinite & Self-Paced",
        resources: {
            tools: ["X (Twitter)", "Exploit-DB", "GitHub Security Advisories", "Sigma Rules repository", "Driscoll's CTF tools list"],
            concepts: ["Zero-Day Analysis", "CTF Speedrunning", "Responsible Vulnerability Disclosure", "Open Source Tooling Contribution"],
            labs: ["HackTheBox Active Machines", "TryHackMe New rooms", "Bugcrowd / HackerOne / Synack programs"]
        },
        parts: [
            {
                id: "part-6-1",
                title: "6.1 Interactive Practice & CTFs",
                items: [
                    { id: "item-6-1-1", text: "Play regularly on HackTheBox, TryHackMe, and CTFtime-listed competitions — keeps skills sharp.", type: "standard" },
                    { id: "item-6-1-2", text: "Bug Bounty: HackerOne, Bugcrowd, Synack — real-world validation and bounty income while learning.", type: "standard" }
                ]
            },
            {
                id: "part-6-2",
                title: "6.2 Research & Reading",
                items: [
                    { id: "item-6-2-1", text: "Read: CVE disclosures, exploit-db, security blogs (PortSwigger Research, Project Zero, Krebs on Security)", type: "standard" },
                    { id: "item-6-2-2", text: "Follow: key security researchers on X/Twitter and review talks from DEF CON, Black Hat, BSides (free on YouTube)", type: "standard" }
                ]
            },
            {
                id: "part-6-3",
                title: "6.3 Building & Contributing",
                items: [
                    { id: "item-6-3-1", text: "Build: your own vulnerable labs to deeply understand a CVE by recreating it.", type: "practice" },
                    { id: "item-6-3-2", text: "Contribute: write-ups of your CTF/lab solves — builds your portfolio, writing clarity, and community reputation.", type: "practice" }
                ]
            },
            {
                id: "part-6-4",
                title: "6.4 Networking & Community",
                items: [
                    { id: "item-6-4-1", text: "Network: join local security meetups (e.g. null India, BSides local chapters) and online Discord communities (TCM Security, HTB community).", type: "standard" }
                ]
            }
        ]
    }
];

// 2. State Controller
class StateManager {
    constructor() {
        this.progress = this.loadProgress();
        this.notes = this.loadNotes();
        this.activePhaseId = localStorage.getItem("vapt_active_phase") || "phase-0";
        this.theme = localStorage.getItem("vapt_theme") || "light";
    }

    loadProgress() {
        const saved = localStorage.getItem("vapt_roadmap_progress");
        return saved ? JSON.parse(saved) : {};
    }

    saveProgress() {
        localStorage.setItem("vapt_roadmap_progress", JSON.stringify(this.progress));
    }

    loadNotes() {
        const saved = localStorage.getItem("vapt_roadmap_notes");
        return saved ? JSON.parse(saved) : {};
    }

    saveNotes() {
        localStorage.setItem("vapt_roadmap_notes", JSON.stringify(this.notes));
    }

    setItemState(itemId, checked) {
        this.progress[itemId] = checked;
        this.saveProgress();
    }

    getItemState(itemId) {
        return !!this.progress[itemId];
    }

    setPhaseNote(phaseId, content) {
        this.notes[phaseId] = content;
        this.saveNotes();
    }

    getPhaseNote(phaseId) {
        return this.notes[phaseId] || "";
    }

    setActivePhase(phaseId) {
        this.activePhaseId = phaseId;
        localStorage.setItem("vapt_active_phase", phaseId);
    }

    getActivePhase() {
        // Fallback safety
        if (!roadmapData.some(p => p.id === this.activePhaseId)) {
            this.activePhaseId = "phase-0";
        }
        return this.activePhaseId;
    }

    setTheme(theme) {
        this.theme = theme;
        localStorage.setItem("vapt_theme", theme);
    }

    getTheme() {
        return this.theme;
    }

    resetAll() {
        this.progress = {};
        this.notes = {};
        this.activePhaseId = "phase-0";
        this.theme = "light";
        localStorage.removeItem("vapt_roadmap_progress");
        localStorage.removeItem("vapt_roadmap_notes");
        localStorage.removeItem("vapt_active_phase");
        localStorage.removeItem("vapt_theme");
    }

    importState(stateJson) {
        try {
            const data = JSON.parse(stateJson);
            if (data.progress && typeof data.progress === 'object') {
                this.progress = data.progress;
                this.saveProgress();
            }
            if (data.notes && typeof data.notes === 'object') {
                this.notes = data.notes;
                this.saveNotes();
            }
            if (data.activePhaseId) {
                this.setActivePhase(data.activePhaseId);
            }
            if (data.theme) {
                this.setTheme(data.theme);
            }
            return true;
        } catch (e) {
            console.error("Failed to import state", e);
            return false;
        }
    }

    exportState() {
        return JSON.stringify({
            progress: this.progress,
            notes: this.notes,
            activePhaseId: this.activePhaseId,
            theme: this.theme
        }, null, 2);
    }
}

// 3. UI Controller
class App {
    constructor() {
        this.state = new StateManager();
        
        // Cache DOM Elements
        this.sidebar = document.getElementById("sidebar");
        this.phaseNavList = document.getElementById("phaseNavList");
        this.partsList = document.getElementById("partsList");
        this.phaseNotesTextarea = document.getElementById("phaseNotesTextarea");
        this.notesSaveIndicator = document.getElementById("notesSaveIndicator");
        this.phaseResourcesContent = document.getElementById("phaseResourcesContent");
        
        this.globalProgressPercent = document.getElementById("globalProgressPercent");
        this.globalProgressBar = document.getElementById("globalProgressBar");
        this.globalCompletedCount = document.getElementById("globalCompletedCount");
        this.globalTotalCount = document.getElementById("globalTotalCount");
        
        this.phaseBadge = document.getElementById("phaseBadge");
        this.phaseTitle = document.getElementById("phaseTitle");
        this.phaseSubtitle = document.getElementById("phaseSubtitle");
        this.phaseProgressPercent = document.getElementById("phaseProgressPercent");
        this.phaseProgressBar = document.getElementById("phaseProgressBar");
        
        this.searchInput = document.getElementById("searchInput");
        this.clearSearchBtn = document.getElementById("clearSearchBtn");
        this.searchResultsPanel = document.getElementById("searchResultsPanel");
        this.searchResultsList = document.getElementById("searchResultsList");
        this.searchQuerySpan = document.getElementById("searchQuerySpan");
        this.closeSearchResults = document.getElementById("closeSearchResults");
        this.phaseDetailView = document.getElementById("phaseDetailView");
        
        this.toggleSidebarBtn = document.getElementById("toggleSidebar");
        this.closeSidebarBtn = document.getElementById("closeSidebar");
        this.resetProgressBtn = document.getElementById("resetProgressBtn");
        this.exportProgressBtn = document.getElementById("exportProgressBtn");
        this.importProgressBtn = document.getElementById("importProgressBtn");
        this.importFileInput = document.getElementById("importFileInput");
        this.themeToggleBtn = document.getElementById("themeToggleBtn");
        
        // Pomodoro Timer state
        this.timerInterval = null;
        this.timerMinutes = 25;
        this.timerSeconds = 0;
        this.timerIsRunning = false;
        this.timerDisplay = document.getElementById("timerDisplay");
        this.timerPlayPauseBtn = document.getElementById("timerPlayPauseBtn");
        this.timerResetBtn = document.getElementById("timerResetBtn");
        
        // Debounce timer for saving notes
        this.saveNotesTimeout = null;

        // Initialize App
        this.init();
    }

    init() {
        this.applyTheme(this.state.getTheme());
        this.renderSidebarNav();
        this.renderActivePhase();
        this.updateGlobalProgress();
        this.setupEventListeners();
        this.setupTimer();
    }

    // Render left-side navigation list of Phases
    renderSidebarNav() {
        this.phaseNavList.innerHTML = "";
        roadmapData.forEach(phase => {
            const li = document.createElement("li");
            li.className = `nav-item ${phase.id === this.state.getActivePhase() ? 'active' : ''}`;
            li.dataset.phaseId = phase.id;
            
            // Calculate phase completed count vs total count
            let total = 0;
            let completed = 0;
            phase.parts.forEach(part => {
                part.items.forEach(item => {
                    total++;
                    if (this.state.getItemState(item.id)) completed++;
                });
            });
            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
            const badgeClass = percent === 100 ? "nav-link-badge completed" : "nav-link-badge";
            const badgeText = percent === 100 ? `<i class="fa-solid fa-check"></i>` : `${percent}%`;

            li.innerHTML = `
                <a href="#" class="nav-link">
                    <span class="nav-link-icon"><i class="fa-solid fa-folder-open"></i></span>
                    <span class="nav-link-text">${phase.title}</span>
                    <span class="${badgeClass}">${badgeText}</span>
                </a>
            `;

            li.addEventListener("click", (e) => {
                e.preventDefault();
                this.switchPhase(phase.id);
                
                // Hide sidebar on mobile after clicking
                if (window.innerWidth <= 768) {
                    this.sidebar.classList.remove("open");
                }
            });

            this.phaseNavList.appendChild(li);
        });
    }

    // Switch between course phases
    switchPhase(phaseId) {
        this.state.setActivePhase(phaseId);
        
        // Clear search if switching phases
        this.searchInput.value = "";
        this.clearSearchBtn.style.display = "none";
        this.searchResultsPanel.style.display = "none";
        this.phaseDetailView.style.display = "block";
        
        // Update nav active classes
        document.querySelectorAll("#phaseNavList .nav-item").forEach(item => {
            if (item.dataset.phaseId === phaseId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });

        this.renderActivePhase();
    }

    // Render the currently selected Phase details
    renderActivePhase() {
        const activeId = this.state.getActivePhase();
        const phase = roadmapData.find(p => p.id === activeId);
        if (!phase) return;

        // Render header details
        this.phaseBadge.textContent = phase.badge;
        this.phaseTitle.textContent = `${phase.title} (${phase.timeline})`;
        this.phaseSubtitle.textContent = phase.subtitle;

        // Render notes
        this.phaseNotesTextarea.value = this.state.getPhaseNote(activeId);
        this.notesSaveIndicator.classList.remove("visible");

        // Render Checklist Parts
        this.partsList.innerHTML = "";
        phase.parts.forEach(part => {
            const card = document.createElement("div");
            card.className = "part-card";
            card.id = part.id;
            
            // Calculate part progress
            let total = 0;
            let completed = 0;
            part.items.forEach(item => {
                total++;
                if (this.state.getItemState(item.id)) completed++;
            });
            const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
            const badgeClass = percent === 100 ? "part-progress-badge completed" : "part-progress-badge";

            let listHtml = "";
            part.items.forEach(item => {
                const isChecked = this.state.getItemState(item.id);
                let itemClass = "subpart-item";
                let badgeMarkup = "";

                if (item.type === "practice") {
                    itemClass += " practice-item";
                    badgeMarkup = `<span class="badge-practice">PRACTICE</span>`;
                } else if (item.type === "checkpoint") {
                    badgeMarkup = `<span class="badge-checkpoint">CHECKPOINT</span>`;
                } else if (item.type === "lab") {
                    badgeMarkup = `<span class="badge-checkpoint">LAB</span>`;
                }

                listHtml += `
                    <li class="${itemClass}" data-item-id="${item.id}">
                        <div class="custom-checkbox-wrapper">
                            <input type="checkbox" class="custom-checkbox" id="chk-${item.id}" ${isChecked ? 'checked' : ''}>
                            <span class="checkbox-display"></span>
                        </div>
                        <div class="subpart-text-wrapper">
                            <label class="subpart-label" for="chk-${item.id}">
                                ${badgeMarkup}${item.text}
                            </label>
                        </div>
                    </li>
                `;
            });

            card.innerHTML = `
                <div class="part-card-header">
                    <h3 class="part-card-title">${part.title}</h3>
                    <span class="${badgeClass}" id="badge-${part.id}">${completed}/${total} Done</span>
                </div>
                <ul class="subpart-list">
                    ${listHtml}
                </ul>
            `;

            // Add Event Listeners for Checkboxes
            card.querySelectorAll(".custom-checkbox").forEach(checkbox => {
                checkbox.addEventListener("change", (e) => {
                    const itemId = e.target.id.replace("chk-", "");
                    this.state.setItemState(itemId, e.target.checked);
                    
                    // Trigger UI Updates
                    this.updatePartProgress(part);
                    this.updatePhaseProgress(phase);
                    this.updateGlobalProgress();
                    this.renderSidebarNav(); // Refresh sidebar percentages
                });
            });

            this.partsList.appendChild(card);
        });

        // Render Sidebar Resources Info for the current Phase
        this.renderPhaseResources(phase.resources);
        
        // Update phase progress bar
        this.updatePhaseProgress(phase);
    }

    renderPhaseResources(resources) {
        this.phaseResourcesContent.innerHTML = "";
        
        if (!resources) {
            this.phaseResourcesContent.innerHTML = "<p>No custom resources defined for this phase.</p>";
            return;
        }

        const sections = [
            { key: "tools", title: "Tools to Master", icon: "fa-screwdriver-wrench" },
            { key: "concepts", title: "Key Concepts", icon: "fa-brain" },
            { key: "labs", title: "Labs & Platforms", icon: "fa-terminal" }
        ];

        sections.forEach(sec => {
            if (resources[sec.key] && resources[sec.key].length > 0) {
                const group = document.createElement("div");
                group.className = "resource-group";
                
                let listItems = "";
                resources[sec.key].forEach(item => {
                    listItems += `
                        <div class="resource-item">
                            <i class="fa-solid fa-circle-dot"></i>
                            <span>${item}</span>
                        </div>
                    `;
                });

                group.innerHTML = `
                    <div class="resource-group-title"><i class="fa-solid ${sec.icon}"></i> ${sec.title}</div>
                    ${listItems}
                `;
                this.phaseResourcesContent.appendChild(group);
            }
        });
    }

    // Update specific part badge counter
    updatePartProgress(part) {
        let total = 0;
        let completed = 0;
        part.items.forEach(item => {
            total++;
            if (this.state.getItemState(item.id)) completed++;
        });

        const badge = document.getElementById(`badge-${part.id}`);
        if (badge) {
            badge.textContent = `${completed}/${total} Done`;
            if (completed === total) {
                badge.className = "part-progress-badge completed";
            } else {
                badge.className = "part-progress-badge";
            }
        }
    }

    // Update current active phase progress bar
    updatePhaseProgress(phase) {
        let total = 0;
        let completed = 0;
        phase.parts.forEach(part => {
            part.items.forEach(item => {
                total++;
                if (this.state.getItemState(item.id)) completed++;
            });
        });

        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        this.phaseProgressPercent.textContent = `${percent}%`;
        this.phaseProgressBar.style.width = `${percent}%`;
    }

    // Update global progress dashboard in Sidebar
    updateGlobalProgress() {
        let total = 0;
        let completed = 0;

        roadmapData.forEach(phase => {
            phase.parts.forEach(part => {
                part.items.forEach(item => {
                    total++;
                    if (this.state.getItemState(item.id)) completed++;
                });
            });
        });

        const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
        this.globalProgressPercent.textContent = `${percent}%`;
        this.globalProgressBar.style.width = `${percent}%`;
        this.globalCompletedCount.textContent = completed;
        this.globalTotalCount.textContent = total;
    }

    // Bind event handlers
    setupEventListeners() {
        // Theme Toggle
        this.themeToggleBtn.addEventListener("click", () => {
            this.toggleTheme();
        });

        // Toggle/close sidebar drawer on small devices
        this.toggleSidebarBtn.addEventListener("click", () => {
            this.sidebar.classList.add("open");
        });
        
        this.closeSidebarBtn.addEventListener("click", () => {
            this.sidebar.classList.remove("open");
        });

        // Click outside side navigation on mobile to close it
        document.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                if (!this.sidebar.contains(e.target) && !this.toggleSidebarBtn.contains(e.target) && this.sidebar.classList.contains("open")) {
                    this.sidebar.classList.remove("open");
                }
            }
        });

        // Save notes locally on user input (debounced to avoid heavy disk operations)
        this.phaseNotesTextarea.addEventListener("input", () => {
            this.notesSaveIndicator.textContent = "Typing...";
            this.notesSaveIndicator.className = "save-indicator visible";

            clearTimeout(this.saveNotesTimeout);
            this.saveNotesTimeout = setTimeout(() => {
                const activeId = this.state.getActivePhase();
                this.state.setPhaseNote(activeId, this.phaseNotesTextarea.value);
                this.notesSaveIndicator.textContent = "Saved";
                
                // Keep showing the "Saved" tag for 2 seconds
                setTimeout(() => {
                    if (this.notesSaveIndicator.textContent === "Saved") {
                        this.notesSaveIndicator.classList.remove("visible");
                    }
                }, 2000);
            }, 600);
        });

        // Search Input handler
        this.searchInput.addEventListener("input", (e) => {
            const query = e.target.value.trim();
            if (query.length > 0) {
                this.clearSearchBtn.style.display = "block";
                this.performSearch(query);
            } else {
                this.clearSearchBtn.style.display = "none";
                this.searchResultsPanel.style.display = "none";
                this.phaseDetailView.style.display = "block";
            }
        });

        this.clearSearchBtn.addEventListener("click", () => {
            this.searchInput.value = "";
            this.clearSearchBtn.style.display = "none";
            this.searchResultsPanel.style.display = "none";
            this.phaseDetailView.style.display = "block";
        });

        this.closeSearchResults.addEventListener("click", () => {
            this.searchInput.value = "";
            this.clearSearchBtn.style.display = "none";
            this.searchResultsPanel.style.display = "none";
            this.phaseDetailView.style.display = "block";
        });

        // Reset progress
        this.resetProgressBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all progress and study notes? This cannot be undone.")) {
                this.state.resetAll();
                this.init();
                this.showToast("All progress has been reset.");
            }
        });

        // Export State to JSON
        this.exportProgressBtn.addEventListener("click", () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(this.state.exportState());
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "vapt_mastery_progress.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            this.showToast("Progress file downloaded successfully.");
        });

        // Import State from JSON
        this.importProgressBtn.addEventListener("click", () => {
            this.importFileInput.click();
        });

        this.importFileInput.addEventListener("change", (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (evt) => {
                const success = this.state.importState(evt.target.result);
                if (success) {
                    this.init();
                    this.showToast("Progress successfully imported.");
                } else {
                    alert("Invalid backup file. Import failed.");
                }
            };
            reader.readAsText(file);
        });
    }

    // Search function across all data structures
    performSearch(query) {
        this.phaseDetailView.style.display = "none";
        this.searchResultsPanel.style.display = "block";
        this.searchQuerySpan.textContent = query;
        this.searchResultsList.innerHTML = "";

        const lowercaseQuery = query.toLowerCase();
        let matches = [];

        roadmapData.forEach(phase => {
            phase.parts.forEach(part => {
                part.items.forEach(item => {
                    const matchText = item.text.toLowerCase();
                    const matchPart = part.title.toLowerCase();
                    const matchPhase = phase.title.toLowerCase();
                    
                    if (matchText.includes(lowercaseQuery) || matchPart.includes(lowercaseQuery) || matchPhase.includes(lowercaseQuery)) {
                        matches.push({
                            phaseId: phase.id,
                            phaseTitle: phase.title,
                            partId: part.id,
                            partTitle: part.title,
                            itemId: item.id,
                            itemText: item.text,
                            type: item.type
                        });
                    }
                });
            });
        });

        if (matches.length === 0) {
            this.searchResultsList.innerHTML = `
                <div class="search-no-results">
                    <i class="fa-solid fa-magnifying-glass-minus"></i>
                    <p>No results found for "${query}". Try searching for specific tools (e.g. nmap, burp), CVEs, vulnerabilities, or labs.</p>
                </div>
            `;
            return;
        }

        matches.forEach(match => {
            const card = document.createElement("div");
            card.className = "search-result-item-card";
            
            let badge = "";
            if (match.type === "practice") badge = `<span class="badge-practice">PRACTICE</span>`;
            if (match.type === "checkpoint") badge = `<span class="badge-checkpoint">CHECKPOINT</span>`;
            if (match.type === "lab") badge = `<span class="badge-checkpoint">LAB</span>`;

            card.innerHTML = `
                <div>
                    <div class="search-result-phase-info">${match.phaseTitle}</div>
                    <div class="search-result-part-info">${match.partTitle}</div>
                    <div class="search-result-text">${badge}${match.itemText}</div>
                </div>
            `;

            // When user clicks a search result card, redirect them to that specific phase and scroll to the item
            card.addEventListener("click", () => {
                this.switchPhase(match.phaseId);
                
                // Scroll to the card containing the item
                setTimeout(() => {
                    const targetEl = document.getElementById(match.partId);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        
                        // Briefly flash the row to show the user where it is
                        const itemEl = document.querySelector(`li[data-item-id="${match.itemId}"]`);
                        if (itemEl) {
                            itemEl.style.backgroundColor = "var(--petal-yellow-light)";
                            setTimeout(() => {
                                itemEl.style.backgroundColor = "";
                            }, 2000);
                        }
                    }
                }, 200);
            });

            this.searchResultsList.appendChild(card);
        });
    }

    // Pomodoro/Study Timer Logic
    setupTimer() {
        this.timerPlayPauseBtn.addEventListener("click", () => {
            if (this.timerIsRunning) {
                this.pauseTimer();
            } else {
                this.startTimer();
            }
        });

        this.timerResetBtn.addEventListener("click", () => {
            this.resetTimer();
        });
    }

    startTimer() {
        this.timerIsRunning = true;
        this.timerPlayPauseBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        
        this.timerInterval = setInterval(() => {
            if (this.timerSeconds === 0) {
                if (this.timerMinutes === 0) {
                    this.timerComplete();
                    return;
                }
                this.timerMinutes--;
                this.timerSeconds = 59;
            } else {
                this.timerSeconds--;
            }
            this.updateTimerDisplay();
        }, 1000);
    }

    pauseTimer() {
        this.timerIsRunning = false;
        this.timerPlayPauseBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;
        clearInterval(this.timerInterval);
    }

    resetTimer() {
        this.pauseTimer();
        this.timerMinutes = 25;
        this.timerSeconds = 0;
        this.updateTimerDisplay();
    }

    updateTimerDisplay() {
        const minStr = String(this.timerMinutes).padStart(2, '0');
        const secStr = String(this.timerSeconds).padStart(2, '0');
        this.timerDisplay.textContent = `${minStr}:${secStr}`;
    }

    timerComplete() {
        this.pauseTimer();
        this.resetTimer();
        this.showToast("Timer completed! Time for a short break.");
        
        // Browser notification sound check (gentle beep)
        try {
            const context = new (window.AudioContext || window.webkitAudioContext)();
            const osc = context.createOscillator();
            const gain = context.createGain();
            osc.connect(gain);
            gain.connect(context.destination);
            osc.frequency.setValueAtTime(440, context.currentTime); // A4 note
            gain.gain.setValueAtTime(0.1, context.currentTime);
            osc.start();
            setTimeout(() => osc.stop(), 500);
        } catch (e) {
            console.log("Audio notification block, standard toast displayed.");
        }
    }

    // Helper: Toast Notifications
    showToast(message) {
        const toast = document.getElementById("notificationToast");
        const text = document.getElementById("notificationText");
        text.textContent = message;
        
        toast.classList.add("show");
        
        setTimeout(() => {
            toast.classList.remove("show");
        }, 4000);
    }

    // Theme Management helpers
    applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
            this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;
            this.themeToggleBtn.setAttribute("title", "Switch to Light Mode");
        } else {
            document.body.classList.remove("dark-theme");
            this.themeToggleBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;
            this.themeToggleBtn.setAttribute("title", "Switch to Dark Mode");
        }
    }

    toggleTheme() {
        const currentTheme = this.state.getTheme();
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        this.state.setTheme(newTheme);
        this.applyTheme(newTheme);
        this.showToast(`Switched to ${newTheme} mode.`);
    }
}

// 4. Instantiate Application on Load
document.addEventListener("DOMContentLoaded", () => {
    window.vaptApp = new App();
});
