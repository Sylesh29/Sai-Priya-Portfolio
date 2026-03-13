export const portfolioData = {
  personal: {
    name: "Shanmukhi Sai Priya Sandaka",
    title: "Technical Consultant | Microsoft Security, Azure Sentinel",
    location: "Boca Raton, Florida, United States",
    email: "saipriyasandaka@gmail.com",
    linkedin: "https://www.linkedin.com/in/shanmukhi-sai-priya-sandaka-b66391186",
    credly: "https://www.credly.com/users/shanmukhi-saipriya-sandaka.cabf3a3c",
    bio: "Cybersecurity Consultant with hands-on experience in cloud security, SIEM solutions, and threat detection. Proficient in managing enterprise security tools, analyzing security events, and ensuring compliance in cloud environments.",
    tagline: "Securing Digital Assets Through Advanced Threat Intelligence"
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Certifications", value: "5+" },
    { label: "Security Tools", value: "10+" },
    { label: "Client Projects", value: "20+" }
  ],
  skills: {
    cloud: ["Microsoft Azure", "Azure Sentinel", "Azure Security Center", "AWS"],
    siem: ["IBM QRadar", "Azure Sentinel", "Splunk", "ArcSight"],
    security: ["CrowdStrike", "Endpoint Security", "Threat Intelligence", "Incident Response"],
    compliance: ["SIEM Management", "Security Monitoring", "Vulnerability Assessment", "Risk Management"],
    programming: ["Python", "PowerShell", "KQL", "SQL"]
  },
  experience: [
    {
      id: 1,
      company: "Cyber Salus",
      role: "Cybersecurity Intern",
      period: "January 2026 - Present",
      location: "United States",
      description: "Contributing to advanced cybersecurity initiatives and threat analysis projects.",
      responsibilities: [
        "Assisting in security assessments and vulnerability analysis",
        "Supporting incident response operations",
        "Researching emerging cyber threats and mitigation strategies"
      ]
    },
    {
      id: 2,
      company: "IBM",
      role: "Technical Consultant",
      period: "December 2021 - December 2023",
      location: "Bangalore, Karnataka, India",
      description: "Led enterprise security implementations and managed SIEM solutions for global clients.",
      responsibilities: [
        "Implemented and managed IBM QRadar SIEM for enterprise clients",
        "Conducted advanced threat analysis and incident response",
        "Developed custom security rules and correlation logic",
        "Provided technical consultation on cloud security architecture"
      ]
    },
    {
      id: 3,
      company: "Infosys",
      role: "Senior System Engineer",
      period: "December 2018 - December 2021",
      location: "Mysore, India",
      description: "Managed security operations and implemented threat detection solutions.",
      responsibilities: [
        "Monitored and analyzed security events using SIEM platforms",
        "Performed vulnerability assessments and penetration testing",
        "Automated security workflows and incident response procedures",
        "Collaborated with cross-functional teams on security initiatives"
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Azure Sentinel Implementation",
      subtitle: "Cloud-Native SIEM Solution",
      description: "Deployed and configured Azure Sentinel for enterprise cloud security monitoring and threat detection across multi-cloud environments.",
      image: "https://images.unsplash.com/photo-1714846201700-356b34475448?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHw0fHxzZWN1cml0eSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM0MTA5Mzd8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["Azure Sentinel", "KQL", "Azure Logic Apps", "Microsoft Defender", "SOAR"],
      challenges: "Integrating multiple data sources and creating custom detection rules for sophisticated threats.",
      solution: "Designed and implemented 50+ custom analytics rules, automated incident response workflows, and integrated threat intelligence feeds.",
      impact: "Reduced incident detection time by 60% and improved security posture through automated threat hunting."
    },
    {
      id: 2,
      title: "IBM QRadar SIEM Optimization",
      subtitle: "Enterprise Security Operations",
      description: "Architected and optimized IBM QRadar deployment for large-scale enterprise security monitoring and compliance reporting.",
      image: "https://images.unsplash.com/photo-1675627453084-505806a00406?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzh8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwwfHx8fDE3NzM0MTA5Mzd8MA&ixlib=rb-4.1.0&q=85",
      technologies: ["IBM QRadar", "Python", "Custom Rules", "Threat Intelligence", "API Integration"],
      challenges: "High volume of security events causing alert fatigue and delayed response times.",
      solution: "Implemented advanced correlation rules, tuned false positives, and created automated response playbooks using Python scripts.",
      impact: "Decreased false positives by 75% and enhanced threat detection accuracy with custom use cases."
    },
    {
      id: 3,
      title: "CrowdStrike Endpoint Protection",
      subtitle: "Advanced Threat Detection & Response",
      description: "Deployed CrowdStrike Falcon platform for endpoint detection and response across 5,000+ endpoints in enterprise environment.",
      image: "https://images.unsplash.com/photo-1762340915700-356b34475448?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHx0aHJlYXQlMjBkZXRlY3Rpb258ZW58MHx8fHwxNzczNDEwOTQxfDA&ixlib=rb-4.1.0&q=85",
      technologies: ["CrowdStrike Falcon", "EDR", "Threat Hunting", "PowerShell", "IOC Analysis"],
      challenges: "Detecting and responding to advanced persistent threats (APTs) in real-time.",
      solution: "Configured behavioral analytics, implemented proactive threat hunting procedures, and integrated with SIEM for centralized visibility.",
      impact: "Identified and mitigated 15+ advanced threats before they could cause damage, achieving 99.9% endpoint protection rate."
    }
  ],
  certifications: [
    { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
    { name: "Certified in Cybersecurity (CC)", issuer: "ISC2", year: "2023" },
    { name: "Microsoft Security, Compliance, and Identity Fundamentals", issuer: "Microsoft", year: "2023" },
    { name: "Ethical Hacking", issuer: "Infosys", year: "2022" },
    { name: "Energy, Environment and Utilities Industry Jumpstart", issuer: "IBM", year: "2022" }
  ],
  education: [
    {
      institution: "Florida Atlantic University",
      degree: "Master of Science",
      field: "Information Technology",
      period: "2024 - 2025",
      status: "In Progress"
    },
    {
      institution: "Jawaharlal Nehru Technological University",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      period: "2014 - 2018",
      status: "Completed"
    }
  ]
};
