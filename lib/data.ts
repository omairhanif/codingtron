export interface ServiceItem {
  id: string;
  slug: string;
  aliases?: string[];
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  badge: string;
  image?: string;
  technologies: string[];
  deliverables: string[];
  benefits: { title: string; desc: string }[];
  architectureOverview: string;
  faqs: { question: string; answer: string }[];
}

export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  clientIndustry: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  duration: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface BlogPostItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatar?: string;
  projectType: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'cloud-migration-multi-cloud-strategy',
    slug: 'cloud-migration-multi-cloud-strategy',
    aliases: ['cloud-migration'],
    title: 'Cloud Migration & Multi-Cloud Strategy',
    shortDescription:
      'We specialize in guiding businesses through seamless cloud migration journeys and crafting multi-cloud strategies. Moving to the cloud is more than a technical shift — it’s a transformation.',
    fullDescription:
      'Codingtron guides businesses through seamless transitions to modern cloud environments and designs resilient multi-cloud strategies. Utilizing industry-standard tools including Azure Migration Tools, AWS Migration Hub, GCP Migrate, and VMware vSphere, we handle re-hosting (lift-and-shift), re-platforming, and refactoring to meet your strict business agility and cost objectives.',
    iconName: 'Cloud',
    badge: 'Core Competency',
    image: 'https://codingtron.com/media/cloud-migration.jpg',
    technologies: ['AWS Migration Hub', 'Azure Migrate', 'Google Cloud Migrate', 'VMware vSphere', 'Terraform', 'Packer'],
    deliverables: [
      'Comprehensive Cloud Readiness Assessment & TCO Analysis',
      'Target Architecture Design with High-Availability & Disaster Recovery',
      'Data & Workload Migration with Zero or Minimal Downtime',
      'Multi-Cloud Governance, Policy & Cost Optimization Setup',
      'Post-Migration Performance Tuning & Handover Documentation',
    ],
    benefits: [
      {
        title: '30-50% Cost Savings',
        desc: 'Right-size computing resources and take advantage of reserved instances and serverless paradigms.',
      },
      {
        title: 'Zero Business Disruption',
        desc: 'Staged migrations with live cutover testing guarantee continuous end-user availability.',
      },
      {
        title: 'Vendor Freedom',
        desc: 'Multi-cloud architectures prevent single-vendor lock-in and optimize regional latency.',
      },
    ],
    architectureOverview:
      'Our migration methodology follows the AWS CAF & Azure Cloud Adoption Framework: Assess -> Plan -> Migrate -> Validate -> Optimize. Workloads are encapsulated in automated pipelines to ensure repeatable, deterministic execution.',
    faqs: [
      {
        question: 'How do you ensure zero downtime during cloud migration?',
        answer:
          'We use real-time asynchronous data replication, canary routing, and blue-green deployments to sync data in the background before performing an instant DNS or load balancer cutover.',
      },
      {
        question: 'Which cloud provider is best for our workloads?',
        answer:
          'We perform an objective workload audit comparing AWS, Azure, GCP, and DigitalOcean based on compliance, licensing (e.g. Windows/SQL Server on Azure), AI/ML strengths (GCP), and cost models.',
      },
    ],
  },
  {
    id: 'infrastructure-deployment-management',
    slug: 'infrastructure-deployment-management',
    aliases: ['infrastructure-deployment'],
    title: 'Infrastructure Deployment & Management',
    shortDescription:
      'Codingtron specializes in designing, deploying, and managing robust cloud infrastructures that align with your business needs. Whether virtual machines or complex topologies, we deliver scalable solutions.',
    fullDescription:
      'We architect, provision, and maintain secure, self-healing cloud infrastructure. From multi-cluster Kubernetes deployments (EKS, AKS, GKE) to automated Terraform configurations and configuration management with Ansible, our certified engineers ensure your environments are reproducible, observable, and hardened against threats.',
    iconName: 'Server',
    badge: 'Enterprise Architecture',
    image: 'https://codingtron.com/media/infrastructure-deployment.webp',
    technologies: ['Kubernetes (EKS/AKS/GKE)', 'Terraform', 'Ansible', 'Docker', 'Helm', 'Prometheus & Grafana'],
    deliverables: [
      'Declarative Infrastructure as Code (IaC) repositories with versioning',
      'Production-grade Kubernetes clusters with auto-scaling and ingress controllers',
      'Centralized logging, APM monitoring, and automated alerting thresholds',
      'Network security groups, VPC peering, and VPN/DirectConnect configurations',
      'Automated OS patch management and vulnerability remediation',
    ],
    benefits: [
      {
        title: 'Instant Reproducibility',
        desc: 'Spin up identical staging, QA, and production environments in minutes with clean Terraform scripts.',
      },
      {
        title: 'Self-Healing Resilience',
        desc: 'Automated pod health checks and node auto-repair ensure high operational reliability.',
      },
      {
        title: 'Strict Security Compliance',
        desc: 'Enforce SOC2, ISO27001, and CIS benchmarks across all cloud resource configurations.',
      },
    ],
    architectureOverview:
      'Everything is managed via GitOps. Infrastructure changes undergo code reviews, automated linting, security scanning, and drift detection before applying to production environments.',
    faqs: [
      {
        question: 'Can you manage our existing complex cloud setups?',
        answer:
          'Yes. We perform brownfield discovery, import existing assets into Terraform state files, and refactor them into modular, clean configurations.',
      },
      {
        question: 'Do you provide 24/7 infrastructure management?',
        answer:
          'Yes. We offer 24/7 managed infrastructure support with defined SLAs for response and resolution times.',
      },
    ],
  },
  {
    id: 'devops-ci-cd-pipeline-solutions',
    slug: 'devops-ci-cd-pipeline-solutions',
    aliases: ['devops-ci-cd'],
    title: 'DevOps & CI/CD Pipeline Solutions',
    shortDescription:
      'We empower businesses to accelerate their software development lifecycle through comprehensive DevOps practices and CI/CD pipeline implementations.',
    fullDescription:
      'Codingtron empowers engineering teams to ship features faster and with greater confidence. We design and implement robust CI/CD pipelines using GitHub Actions, GitLab CI, Jenkins, and ArgoCD, embedding automated linting, testing, security vulnerability scanning, and automated rollbacks into every git commit.',
    iconName: 'Workflow',
    badge: 'High Impact',
    image: 'https://codingtron.com/media/DevOps-CI-CD.jpg',
    technologies: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD', 'SonarQube', 'Trivy', 'Docker'],
    deliverables: [
      'Automated build, test, and release pipelines triggered on pull requests and merges',
      'Container image vulnerability scanning and software bill of materials (SBOM)',
      'GitOps-driven continuous deployment with ArgoCD or FluxCD',
      'Automated canary releases and zero-downtime blue/green deployments',
      'DevOps culture enablement workshops and engineer training',
    ],
    benefits: [
      {
        title: '5x Deployment Frequency',
        desc: 'Transition from monthly manual releases to multiple automated, safe deployments per day.',
      },
      {
        title: '90% Fewer Production Bugs',
        desc: 'Automated unit, integration, and security checks catch issues before code reaches production.',
      },
      {
        title: 'Sub-Minute Rollbacks',
        desc: 'Automated health monitoring triggers instant rollback if error rates or latencies spike.',
      },
    ],
    architectureOverview:
      'Standardized Git branch workflows integrated with automated linting, unit tests, integration tests, container builds, image signing, and GitOps synchronization to Kubernetes.',
    faqs: [
      {
        question: 'How do you handle secrets in CI/CD pipelines?',
        answer:
          'We integrate with HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault, utilizing short-lived OIDC tokens rather than long-lived API keys.',
      },
      {
        question: 'Can you migrate our legacy Jenkins pipelines to GitHub Actions?',
        answer:
          'Absolutely. We modernize complex Jenkinsfiles into modular, reusable GitHub Actions workflows with caching and parallel execution.',
      },
    ],
  },
  {
    id: 'data-migration-management',
    slug: 'data-migration-management',
    aliases: ['data-migration'],
    title: 'Data Migration & Management',
    shortDescription:
      'Seamless data migration across cloud platforms, ensuring minimal downtime and data integrity. From on-premises systems to cloud or cross-cloud transitions.',
    fullDescription:
      'We manage complex database and data lake migrations across on-premises servers and cloud environments. Utilizing tools such as AWS DMS, AWS S3 Transfer Acceleration, Azure Storage Migration Service, and GCP Data Transfer, we ensure enterprise data is transferred securely, transformed accurately, and optimized for analytical querying.',
    iconName: 'Database',
    badge: 'Mission Critical',
    image: 'https://codingtron.com/media/data-migration.webp',
    technologies: ['AWS DMS', 'Azure Database Migration', 'PostgreSQL', 'MySQL', 'MongoDB', 'Snowflake', 'BigQuery'],
    deliverables: [
      'Data mapping, schema conversion, and data cleansing assessment',
      'Continuous Change Data Capture (CDC) replication for real-time synchronization',
      'End-to-end data encryption in transit (TLS 1.3) and at rest (KMS / AES-256)',
      'Data validation and checksum parity verification before cutover',
      'Data lifecycle management, automated tiered archiving, and retention policies',
    ],
    benefits: [
      {
        title: 'Zero Data Loss Guarantee',
        desc: 'Dual-write and CDC mechanisms ensure 100% record integrity during the migration window.',
      },
      {
        title: 'Optimized Query Latencies',
        desc: 'Schema refactoring and cloud indexing boost analytical and transactional performance.',
      },
      {
        title: 'Storage Cost Reduction',
        desc: 'Tiered storage policies automatically move cold data to Glacier or Archive tiers.',
      },
    ],
    architectureOverview:
      'Source databases are linked via encrypted VPN or DirectConnect. A CDC replication pipeline keeps target databases updated in real-time, allowing transactional verification prior to cutover.',
    faqs: [
      {
        question: 'What types of databases can you migrate?',
        answer:
          'We handle relational databases (PostgreSQL, MySQL, Oracle, MS SQL Server) as well as NoSQL systems (MongoDB, Cassandra, Redis) and analytical warehouses (Redshift, BigQuery, Snowflake).',
      },
      {
        question: 'How do you prevent data corruption during transit?',
        answer:
          'We compute cryptographic hashes (SHA-256) on datasets before and after transfer, and run automated row count and foreign-key constraint parity scripts.',
      },
    ],
  },
  {
    id: 'disaster-recovery-planning-execution',
    slug: 'disaster-recovery-planning-execution',
    aliases: ['disaster-recovery'],
    title: 'Disaster Recovery Planning & Execution',
    shortDescription:
      'Ensure uninterrupted operations with comprehensive DR and HA solutions. Robust multi-region and active-active setups to minimize downtime and data loss.',
    fullDescription:
      'Codingtron engineers fail-safe disaster recovery solutions tailored to your compliance and business objectives. We implement automated multi-region backup strategies, cross-region replication, continuous snapshotting, and scripted failover procedures to guarantee uninterrupted operational continuity during catastrophic cloud or data center outages.',
    iconName: 'ShieldAlert',
    badge: 'Resilience Guaranteed',
    image: 'https://codingtron.com/media/Disaster-Recovery.jpg',
    technologies: ['AWS Route 53', 'Azure Traffic Manager', 'Cloudflare DNS Failover', 'Veeam', 'Terraform', 'Velero'],
    deliverables: [
      'Formal Disaster Recovery Plan (DRP) and Business Impact Analysis (BIA)',
      'Multi-region automated data replication and continuous snapshot pipelines',
      'One-click automated disaster failover runbooks powered by Terraform',
      'Regular chaos engineering and disaster simulation drill exercises',
      'Compliance-ready audit logs and SLA compliance reports',
    ],
    benefits: [
      {
        title: 'Near-Zero RPO / RTO',
        desc: 'Recover critical systems in minutes instead of days, preventing downtime losses.',
      },
      {
        title: 'Automated Failover Drills',
        desc: 'Simulate region-wide failures periodically to ensure runbooks are always up to date.',
      },
      {
        title: 'Regulatory Peace of Mind',
        desc: 'Satisfy strict insurance, SOC2, HIPAA, and ISO27001 disaster recovery standards.',
      },
    ],
    architectureOverview:
      'Pilot Light or Warm Standby architecture configured across two geographically distinct cloud regions with automated DNS health-check switching and continuous asynchronous database replication.',
    faqs: [
      {
        question: 'What is the difference between RPO and RTO?',
        answer:
          'RPO (Recovery Point Objective) is the maximum age of files that must be recovered from backup storage for normal operations to resume. RTO (Recovery Time Objective) is the maximum acceptable amount of time that your application can be offline.',
      },
      {
        question: 'How often should DR drills be conducted?',
        answer:
          'We recommend automated quarterly failover drills to validate backups, verify network routing, and test team response workflows.',
      },
    ],
  },
  {
    id: 'high-availability-fault-tolerant-architecture',
    slug: 'high-availability',
    aliases: ['high-availability-fault-tolerant-architecture'],
    title: 'High Availability & Fault-Tolerant Architecture',
    shortDescription:
      'Build fault-tolerant systems with high availability to ensure uninterrupted services. Redundant, self-healing topologies with dynamic auto-scaling.',
    fullDescription:
      'We build fault-tolerant systems with high availability to ensure uninterrupted services. Codingtron designs and implements robust HA solutions, optimizing for redundancy and resilience across cloud and hybrid environments. We eliminate single points of failure through multi-zone clustering, intelligent load balancing, and distributed caching.',
    iconName: 'Cpu',
    badge: '99.99% SLA',
    image: 'https://codingtron.com/media/high-availibility.jpg',
    technologies: ['Global Load Balancers', 'Auto-scaling Groups', 'Redis Cluster', 'NGINX', 'Cloudflare Enterprise', 'Envoy'],
    deliverables: [
      'Multi-Availability-Zone and multi-region compute topologies',
      'Global Server Load Balancing (GSLB) with geo-proximity routing',
      'Distributed Redis/Memcached caching layers with cluster failover',
      'Dynamic auto-scaling policies based on CPU, memory, and custom metrics',
      'Continuous chaos testing and automated circuit-breaker implementations',
    ],
    benefits: [
      {
        title: '99.99% Uptime Guarantee',
        desc: 'Systems designed to withstand node crashes, rack outages, and zone failures without blips.',
      },
      {
        title: 'Graceful Degradation',
        desc: 'Circuit breakers prevent cascading outages during external upstream API failures.',
      },
      {
        title: 'Elastic Traffic Handling',
        desc: 'Effortlessly scale from hundreds to millions of concurrent requests during peak marketing surges.',
      },
    ],
    architectureOverview:
      'Incoming requests enter Anycast edge networks, traverse global application load balancers, and hit distributed Kubernetes worker nodes spanning three distinct availability zones with multi-master database clusters.',
    faqs: [
      {
        question: 'How do you prevent single points of failure (SPOFs)?',
        answer:
          'We audit every component—DNS, reverse proxies, ingress, app tiers, message queues, caches, and storage—and deploy redundant pairs with automated heartbeat failovers.',
      },
      {
        question: 'Does high availability drastically increase cloud costs?',
        answer:
          'Not necessarily. By utilizing modern container auto-scaling and spot/preemptible instances for elastic worker tiers, HA architectures often run more cost-effectively than bloated over-provisioned VMs.',
      },
    ],
  },
  {
    id: 'monitoring-reporting-solutions',
    slug: 'monitoring-reporting-solutions',
    title: 'Monitoring & Reporting Solutions',
    shortDescription:
      'Comprehensive monitoring and reporting solutions to ensure your systems run efficiently and remain available to your users with automated alerts.',
    fullDescription:
      'At Codingtron, we provide comprehensive monitoring and reporting solutions to ensure your systems run efficiently and remain available to your users. By implementing cutting-edge tools and automated alerts, we help you proactively address performance issues and maintain seamless operations.',
    iconName: 'TrendingUp',
    badge: 'Full Observability',
    image: 'https://codingtron.com/media/high-availibility.jpg',
    technologies: ['Prometheus', 'Grafana', 'Datadog', 'AWS CloudWatch', 'Azure Monitor', 'ELK Stack', 'PagerDuty'],
    deliverables: [
      'Custom Grafana dashboards tailored for executive and engineering KPIs',
      'Distributed tracing and OpenTelemetry instrumentation',
      'Automated proactive alerting via PagerDuty, Slack, and Microsoft Teams',
      'Log aggregation and synthetic transaction monitoring',
      'Monthly infrastructure health and resource utilization reports',
    ],
    benefits: [
      {
        title: '85% Faster Detection',
        desc: 'Identify bottlenecks and anomalies before they impact end customers.',
      },
      {
        title: 'Unified Single Pane of Glass',
        desc: 'Monitor multi-cloud, microservices, and databases in one centralized platform.',
      },
      {
        title: 'Cost Leakage Alerts',
        desc: 'Receive alerts when cloud spending deviates from normal baseline patterns.',
      },
    ],
    architectureOverview:
      'Telemetry agents push metrics, traces, and logs to a distributed time-series store. Alerts evaluate every 30 seconds against dynamic thresholds, notifying on-call engineers instantly.',
    faqs: [
      {
        question: 'Which monitoring tools do you implement?',
        answer:
          'We implement Prometheus & Grafana, Datadog, AWS CloudWatch, Azure Monitor, New Relic, and ELK/OpenSearch according to your existing stack.',
      },
      {
        question: 'Can you set up alerts directly to our Slack or Teams channels?',
        answer:
          'Yes, we configure tiered alert routing with automated severity classification and runbook links.',
      },
    ],
  },
  {
    id: 'chatbots-ai-and-machine-learning',
    slug: 'chatbots-ai-and-machine-learning',
    title: 'Chatbots, AI, and Machine Learning Solutions',
    shortDescription:
      'Deliver AI-powered solutions that enhance business efficiency and customer experiences. From intelligent chatbots to advanced ML systems.',
    fullDescription:
      'Codingtron specializes in delivering AI-powered solutions that enhance business efficiency and customer experiences. From intelligent conversational chatbots to advanced machine learning (ML) systems, we provide innovative solutions tailored to your specific needs, enabling you to stay ahead in the competitive digital landscape.',
    iconName: 'Cpu',
    badge: 'Next-Gen Tech',
    image: 'https://codingtron.com/media/cloud-migration.jpg',
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI APIs', 'AWS SageMaker', 'Azure OpenAI'],
    deliverables: [
      'Custom customer support and internal knowledge retrieval chatbots',
      'Predictive analytics and customer churn prediction models',
      'MLOps pipelines for automated model retraining, validation, and deployment',
      'Secure private LLM hosting with enterprise data guardrails',
      'Natural Language Processing (NLP) document extraction pipelines',
    ],
    benefits: [
      {
        title: '24/7 Automated Engagement',
        desc: 'Handle customer inquiries instantly across web and mobile platforms.',
      },
      {
        title: 'Operational Productivity',
        desc: 'Automate manual data extraction and classification with high precision.',
      },
      {
        title: 'Enterprise Data Privacy',
        desc: 'Models deployed in isolated private cloud VPCs without leaking sensitive data.',
      },
    ],
    architectureOverview:
      'Modular containerized services integrating with enterprise vector databases (Pinecone, pgvector) and private API gateways with rate limiting and audit logging.',
    faqs: [
      {
        question: 'Can the chatbot integrate with our existing CRM and ticketing software?',
        answer:
          'Yes, we integrate chatbots with HubSpot, Zendesk, Salesforce, Jira, and custom REST APIs.',
      },
      {
        question: 'How do you ensure our corporate data remains private?',
        answer:
          'We deploy zero-data-retention enterprise models inside your own dedicated cloud VPC with end-to-end encryption.',
      },
    ],
  },
  {
    id: 'scripting-automation-functions',
    slug: 'scripting-automation-functions',
    title: 'Scripting & Automation Functions',
    shortDescription:
      'Eliminate repetitive manual tasks, streamline processes, and reduce operational errors with custom scripts and automation solutions.',
    fullDescription:
      'Automation is key to efficiency, and our scripting and automation services help your business eliminate repetitive manual tasks, streamline processes, and reduce operational errors. We craft custom scripts and automation solutions tailored to your specific requirements, enhancing productivity and ensuring consistency across workflows.',
    iconName: 'Workflow',
    badge: 'Productivity Booster',
    image: 'https://codingtron.com/media/DevOps-CI-CD.jpg',
    technologies: ['Python', 'Bash / Shell', 'PowerShell', 'Go', 'AWS Lambda', 'Azure Functions', 'GitHub Actions'],
    deliverables: [
      'Event-driven serverless automation workflows (AWS Lambda / Azure Functions)',
      'Automated nightly database backup, compaction, and replication scripts',
      'Automated cloud resource provisioning and termination routines',
      'Data format conversion, ETL scripting, and API synchronization bots',
      'Comprehensive script documentation and maintenance runbooks',
    ],
    benefits: [
      {
        title: '100% Elimination of Human Error',
        desc: 'Automate delicate multi-step procedures with deterministic scripted logic.',
      },
      {
        title: 'Hundreds of Hours Saved',
        desc: 'Free up senior engineering talent from mundane operational toil.',
      },
      {
        title: 'Instant Execution',
        desc: 'Triggers fire instantaneously based on cloud events, webhooks, or schedules.',
      },
    ],
    architectureOverview:
      'Serverless micro-functions triggered by CloudWatch/EventBridge schedules or webhook events, with centralized log capture and error notification hooks.',
    faqs: [
      {
        question: 'What languages do you write automation scripts in?',
        answer:
          'We predominantly write in Python, Bash, Go, and PowerShell, packaging them as container images or serverless functions.',
      },
      {
        question: 'Are the automation scripts maintained in source control?',
        answer:
          'Yes, all automation scripts are stored in Git repositories with CI testing and linting.',
      },
    ],
  },
  {
    id: 'custom-software-development',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    shortDescription:
      'Our development team excels in crafting custom software solutions tailored to meet your unique business needs — web, mobile, and enterprise apps.',
    fullDescription:
      'At Codingtron, our development team excels in crafting custom software solutions tailored to meet your unique business needs. Whether you are looking to build dynamic websites, robust enterprise applications, or innovative mobile solutions, we ensure seamless functionality and an exceptional user experience every step of the way.',
    iconName: 'Server',
    badge: 'Full-Stack Delivery',
    image: 'https://codingtron.com/media/infrastructure-deployment.webp',
    technologies: ['Node.js', 'React', 'Next.js', 'TypeScript', 'Python', 'Go', 'PostgreSQL', 'Docker'],
    deliverables: [
      'Full-stack web and cloud-native application development',
      'Microservices architecture design and secure RESTful/GraphQL APIs',
      'Modern responsive frontend user interfaces with optimal performance',
      'Comprehensive test suites (unit, integration, end-to-end)',
      'Production deployment and CI/CD automation',
    ],
    benefits: [
      {
        title: 'Tailored to Your Exact Needs',
        desc: 'Custom software built to match your unique business logic rather than forcing rigid SaaS workarounds.',
      },
      {
        title: 'Cloud-Native Scalability',
        desc: 'Architected from day one to scale horizontally on modern cloud infrastructure.',
      },
      {
        title: 'Full Intellectual Property',
        desc: 'You own 100% of the source code, repositories, and documentation.',
      },
    ],
    architectureOverview:
      'Layered clean architecture separating business domain logic, API gateways, database persistence, and external service adapters for long-term maintainability.',
    faqs: [
      {
        question: 'Do you build both frontend and backend systems?',
        answer:
          'Yes, our team handles full-stack delivery from responsive modern frontends to high-throughput backend APIs and database schemas.',
      },
      {
        question: 'How do you handle project management and communication?',
        answer:
          'We work in transparent Agile sprints with weekly demos, shared Slack/Teams channels, and real-time Jira/Trello boards.',
      },
    ],
  },
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'scalable-ecommerce-platform',
    slug: 'scalable-ecommerce-platform',
    title: 'Scalable Infrastructure Deployment for a Global E-commerce Platform',
    clientIndustry: 'Retail & E-commerce',
    tagline: 'Handling 15x Black Friday traffic spikes with 100% uptime and 45% lower cloud costs.',
    summary:
      'A fast-growing global online retail platform suffered frequent checkout timeouts and severe performance degradation during promotional sales. Codingtron redesigned their entire cloud topology on AWS with automated Kubernetes autoscaling and multi-region caching.',
    challenge:
      'The legacy monolithic infrastructure ran on statically provisioned virtual machines. During flash sales, traffic surged 1500%, causing database locks, 504 gateway timeouts, and lost revenue exceeding $350k per incident.',
    solution:
      'Codingtron migrated the workload to a modular microservices architecture orchestrated via Amazon EKS. We implemented Infrastructure as Code with Terraform, deployed Redis clusters for session caching, and configured Route 53 latency-based routing with CloudFront CDN caching.',
    results: [
      { metric: '100%', label: 'Uptime during Black Friday / Cyber Week' },
      { metric: '45%', label: 'Cloud Infrastructure Cost Reduction' },
      { metric: '<180ms', label: 'Global Average Page Load Time' },
      { metric: '15x', label: 'Traffic Surge Handled Seamlessly' },
    ],
    technologies: ['AWS EKS', 'Terraform', 'Amazon Aurora', 'Redis Cluster', 'AWS CloudFront', 'Prometheus'],
    duration: '3 Months Implementation',
    testimonial: {
      quote:
        'Codingtron transformed our infrastructure from our biggest business liability into our greatest competitive advantage. Our Black Friday was completely flawless.',
      author: 'Marcus Vance',
      role: 'Chief Technology Officer',
      company: 'GlobalCart Retail',
    },
  },
  {
    id: 'devops-delivery-transformation',
    slug: 'devops-delivery-transformation',
    title: 'Transforming Software Delivery with DevOps Services',
    clientIndustry: 'FinTech & Banking',
    tagline: 'Reducing deployment cycle times from 2 weeks to 8 minutes with compliant GitOps pipelines.',
    summary:
      'A regulated fintech company required faster deployment cycles while satisfying stringent banking regulatory audits. Codingtron introduced an automated, compliant CI/CD pipeline and GitOps workflow.',
    challenge:
      'Developers experienced slow manual testing cycles, code merges took days, and production releases required weekend maintenance windows with 4-hour downtime allowances.',
    solution:
      'We designed an automated CI/CD pipeline using GitHub Actions and ArgoCD, incorporating automated SonarQube static code analysis, Trivy container security scans, and automated blue-green deployments into Azure Kubernetes Service (AKS).',
    results: [
      { metric: '8 Mins', label: 'Average Commit-to-Production Time' },
      { metric: '0 Min', label: 'Release Downtime (Blue-Green)' },
      { metric: '98%', label: 'Automated Test & Security Coverage' },
      { metric: '100%', label: 'Audit Trail Compliance Pass Rate' },
    ],
    technologies: ['GitHub Actions', 'ArgoCD', 'Azure AKS', 'SonarQube', 'HashiCorp Vault', 'Helm'],
    duration: '2.5 Months Implementation',
    testimonial: {
      quote:
        'The engineering velocity we gained with Codingtron was astronomical. Our developers deploy daily without fear, and our compliance auditors couldn’t be happier.',
      author: 'Sophia Chen',
      role: 'VP of Engineering',
      company: 'PayStream Global',
    },
  },
  {
    id: 'ecommerce-monitoring-reporting',
    slug: 'ecommerce-monitoring-reporting',
    title: 'Monitoring and Reporting Solutions for an E-commerce Platform',
    clientIndustry: 'Digital Marketplace',
    tagline: 'End-to-end full-stack observability with automated alerting and anomaly detection.',
    summary:
      'An omnichannel marketplace required real-time visibility into thousands of microservices, API dependencies, and transaction success rates across multi-cloud regions.',
    challenge:
      'The company lacked centralized logging. Diagnosing API latency spikes took hours of cross-team log digging, causing degraded customer experiences and delayed bug fixes.',
    solution:
      'Codingtron deployed a centralized observability platform using Prometheus, Grafana, OpenTelemetry, and Elasticsearch. We configured predictive anomaly alerts and business-level dashboards showing revenue-at-risk metrics.',
    results: [
      { metric: '85%', label: 'Reduction in Mean Time to Detect (MTTD)' },
      { metric: '70%', label: 'Reduction in Mean Time to Resolve (MTTR)' },
      { metric: '1.2B', label: 'Events Ingested & Analyzed Daily' },
      { metric: '100%', label: 'Real-time Transaction Observability' },
    ],
    technologies: ['Prometheus', 'Grafana', 'OpenTelemetry', 'Elasticsearch', 'PagerDuty', 'Logstash'],
    duration: '6 Weeks Implementation',
    testimonial: {
      quote:
        'Codingtron’s monitoring setup gives us supreme visibility. We identify and remediate latency spikes before a single customer even notices.',
      author: 'David Kowalski',
      role: 'Director of DevOps',
      company: 'MarketPulse Tech',
    },
  },
];

export const BLOG_POSTS: BlogPostItem[] = [
  {
    id: 'best-practices-cloud-migration-2025',
    slug: 'best-practices-cloud-migration-2025',
    title: 'Best Practices for Cloud Migration: A Comprehensive Architectural Guide',
    excerpt:
      'Discover the proven methodologies, workload refactoring strategies, and migration frameworks to transition enterprise applications to the cloud seamlessly.',
    category: 'Cloud Migration',
    date: 'February 18, 2025',
    readTime: '6 min read',
    author: {
      name: 'Muhammad Hanif',
      role: 'Principal Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    tags: ['Cloud Migration', 'AWS', 'Azure', 'Cost Optimization'],
    content: `
### Executive Summary

Moving enterprise infrastructure to the cloud is no longer just about cost-cutting—it is about agility, speed to market, and technological resilience. However, an unplanned lift-and-shift often leads to unexpected cloud bills and operational headaches.

### 1. The 6 R's of Migration Strategy
Every enterprise workload must be evaluated against the standard migration pathways:
- **Rehost (Lift-and-Shift):** Fast, straightforward, ideal for immediate datacenter evacuation.
- **Replatform (Lift, Tinker, and Shift):** Migrate with minor optimizations like moving self-hosted databases to managed services (e.g. AWS RDS or Cloud SQL).
- **Refactor / Re-architect:** Re-writing code for serverless, event-driven architectures and container orchestration.
- **Repurchase:** Transitioning to SaaS alternatives.
- **Retire:** Decommissioning redundant applications.
- **Retain:** Keeping critical legacy systems on-premise until ready.

### 2. Ensuring Zero Data Loss During Transit
Use continuous asynchronous replication and Change Data Capture (CDC). Tools such as AWS DMS and Azure Migrate replicate database transactions in real-time, allowing you to validate datasets before triggering a DNS cutover.

### 3. Setting Up Multi-Account Governance
Before moving a single workload, establish an enterprise landing zone with automated guardrails, centralized identity management (IAM / SSO), and billing cost allocation tags.

### Conclusion
A successful migration is 80% preparation and 20% execution. By adopting automated IaC pipelines and phased cutovers, organizations achieve seamless cloud transformations.
    `,
  },
  {
    id: 'accelerating-delivery-gitops-kubernetes',
    slug: 'accelerating-delivery-gitops-kubernetes',
    title: 'Accelerating Software Delivery with GitOps and Kubernetes',
    excerpt:
      'Learn how declarative GitOps workflows with ArgoCD and Kubernetes eliminate configuration drift and allow developers to deploy with confidence.',
    category: 'DevOps & GitOps',
    date: 'January 29, 2025',
    readTime: '5 min read',
    author: {
      name: 'Tariq Mehmood',
      role: 'Lead DevOps Engineer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    tags: ['DevOps', 'Kubernetes', 'GitOps', 'ArgoCD', 'CI/CD'],
    content: `
### Why Traditional CI/CD Falls Short in Cloud-Native Environments

Traditional push-based CI/CD pipelines require CI runners to have elevated administrative credentials to your production Kubernetes clusters. This introduces security vulnerabilities and makes tracking cluster state changes challenging.

### Enter GitOps: Single Source of Truth
In a GitOps model:
1. **Declarative Desired State:** All Kubernetes manifests, Helm charts, and Kustomize overlays are version-controlled in Git.
2. **Pull-Based Reconciliation:** An in-cluster operator (like ArgoCD) continuously monitors Git and reconciles differences.
3. **Automated Drift Detection:** If a developer or attacker manually modifies a live pod or service, ArgoCD detects the discrepancy and automatically resets it to the Git-defined truth.

### Key Benefits Observed
- **Auditability:** Every single change in production has a git commit hash, author, and pull request discussion.
- **Instant Disaster Recovery:** If a cluster is destroyed, point ArgoCD at the Git repo to re-create the entire ecosystem in minutes.
- **Zero-Downtime Rollbacks:** Reverting a broken release is as simple as running \`git revert\`.
    `,
  },
  {
    id: 'resilient-multi-cloud-architecture',
    slug: 'resilient-multi-cloud-architecture',
    title: 'Building Resilient Multi-Cloud High Availability Architecture',
    excerpt:
      'Strategies for architecting cloud-agnostic, fault-tolerant platforms across AWS, Azure, and Google Cloud without escalating operational overhead.',
    category: 'Architecture',
    date: 'January 12, 2025',
    readTime: '7 min read',
    author: {
      name: 'Muhammad Hanif',
      role: 'Principal Cloud Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    tags: ['Multi-Cloud', 'High Availability', 'Architecture', 'Kubernetes'],
    content: `
### The Case for Multi-Cloud
Enterprises embrace multi-cloud to prevent vendor lock-in, satisfy regional compliance mandates, and maintain uninterrupted uptime even during catastrophic hyperscaler outages.

### Core Architectural Pillars
1. **Container Abstraction Layer:** By packaging workloads into OCI-compliant containers running on managed Kubernetes (EKS, AKS, GKE), applications remain portable across clouds.
2. **Global Anycast DNS & Edge Routing:** Using Cloudflare or Route 53 with health checks to steer traffic away from degraded cloud regions automatically.
3. **Distributed Data Persistence:** Utilize multi-region database replication or distributed databases like CockroachDB and Google Cloud Spanner to ensure transactional consistency across cloud boundaries.

### Avoiding Common Multi-Cloud Pitfalls
- **Egress Cost Traps:** Cross-cloud data transfer fees can escalate quickly. Keep synchronous high-bandwidth communications within a single cloud, using cross-cloud links only for asynchronous replication.
- **Tooling Proliferation:** Use cross-cloud declarative tools like Terraform and unified monitoring with Prometheus and Grafana.
    `,
  },
  {
    id: 'automating-iac-terraform-ansible',
    slug: 'automating-iac-terraform-ansible',
    title: 'Automating Infrastructure as Code with Terraform and Ansible',
    excerpt:
      'How combining Terraform for cloud provisioning and Ansible for configuration management creates an unbeatable infrastructure automation engine.',
    category: 'Automation',
    date: 'December 20, 2024',
    readTime: '6 min read',
    author: {
      name: 'Zainab Qureshi',
      role: 'Senior Cloud Automation Engineer',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    tags: ['Terraform', 'Ansible', 'Automation', 'IaC'],
    content: `
### The Power of Separation of Concerns
In modern infrastructure engineering, pairing Terraform with Ansible represents the gold standard:
- **Terraform:** Best at stateful provisioning of cloud resources (VPCs, subnets, EC2 instances, managed Kubernetes, IAM policies).
- **Ansible:** Best at procedural configuration management, software installation, and OS security hardening on running instances.

### Automated CI/CD for Infrastructure
Never apply Terraform from a local laptop! Embed your IaC into automated pull-request workflows:
1. \`terraform fmt\` and \`tflint\` ensure clean syntax.
2. \`checkov\` or \`tfsec\` enforce security compliance.
3. Automated \`terraform plan\` output posted as a PR comment for team review.
4. Auto-apply executed in a secure runner upon PR merge.
    `,
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'zac-caro',
    name: 'Zac Caro',
    role: 'Sales Manager',
    company: 'Helio GreenTech',
    rating: 5,
    content:
      'Ghulam is nice and professional, He helped with Azure set up, Will work with Ghulam again.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    projectType: 'Azure Cloud Architecture & Setup',
  },
  {
    id: 'upwork-client-1',
    name: "Upwork's Client",
    role: 'Enterprise Client',
    company: 'Cloud Modernization Project',
    rating: 5,
    content:
      'Ghulam is excellent, he is extremely helpful and professional, fast responder and helps get the job done fast with high quality. Highly recommend and I would work with him again in the future!',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    projectType: 'DevOps & Multi-Cloud Implementation',
  },
  {
    id: 'upwork-client-2',
    name: "Upwork's Client",
    role: 'Product Lead',
    company: 'Fast-Growing Tech Startup',
    rating: 5,
    content:
      'Ghulam was amazing, he helped get the project finished and worked within difficult limitations set by the client\'s security department. He was great at communications and was fast and accurate. He is very skilled and any tasks the client requested he completed promptly and if we came across any problems he resolved them quickly. I would definitely work with Ghulam again and will for a new project starting soon.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    projectType: 'Security Hardening & Deployment',
  },
  {
    id: 'upwork-client-3',
    name: "Upwork's Client",
    role: 'Lead Architect',
    company: 'Software Consultancy',
    rating: 5,
    content:
      'Just had a small task where we needed some expert guidance on a problem, we were stuck on.....Ghulam jumped in that same day and was able to help our developer get sorted out. Fantastic service!',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80',
    projectType: 'Expert Architectural Troubleshooting',
  },
  {
    id: 'upwork-client-4',
    name: "Upwork's Client",
    role: 'Business Owner',
    company: 'E-commerce Platform',
    rating: 5,
    content:
      'Great Developer, done the things as requested, happy to work with him.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80',
    projectType: 'Cloud Infrastructure & Automation',
  },
  {
    id: 'mischelle',
    name: 'Mischelle',
    role: 'Senior Project Manager',
    company: 'Digital Solutions Co',
    rating: 5,
    content:
      'Mujtaba is a good Azure Cloud engineer with good skills on dockers, CI/CD pipeline and Azure webapps.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80',
    projectType: 'Azure WebApps, Docker & CI/CD',
  },
  {
    id: 'tarig-hamdi',
    name: 'Tarig Hamdi',
    role: 'Chief Solutions Architect',
    company: 'STC',
    rating: 5,
    content:
      'I have worked with Mujtaba on several projects, and I loved his dedication to the work. He is easily adjustable to a given situation and is the most lively person I have met. Mujtaba would become an appreciated member of any team.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80',
    projectType: 'Enterprise Cloud Architecture',
  },
  {
    id: 'humail-zahid',
    name: 'Humail Zahid',
    role: 'Team Lead',
    company: 'PufferSoft',
    rating: 5,
    content:
      'Mujtaba is a talented professional with high skills on DevOps and Cloud. He was our go-to guy for CI/CD, Azure infrastructure, and containerization.',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&q=80',
    projectType: 'DevOps & Containerization',
  },
  {
    id: 'noman-khan',
    name: 'Noman Khan',
    role: 'Social Media Manager',
    company: 'Tech Brand Agency',
    rating: 5,
    content:
      'Mujtaba is an experienced cloud engineer, certified in Azure and AWS. I had a chance to work with him on a on-prem cloud migration project for one of my clients, and he proved to be a great resource. Recommended!',
    avatar: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&q=80',
    projectType: 'On-Prem to Cloud Migration',
  },
];

export const COMPANY_STATS = [
  { value: '5+', label: 'Years Experience', subtext: 'In Cloud, DevOps & Automation' },
  { value: '99.99%', label: 'Uptime SLA', subtext: 'Enterprise-grade reliability' },
  { value: '150+', label: 'Projects Completed', subtext: 'Across global startups & enterprises' },
  { value: '100%', label: 'Client Satisfaction', subtext: 'Long-term trusted partnerships' },
];

export const FOUR_HIGHLIGHTS = [
  {
    title: 'Impactful Solutions',
    description:
      'Tailored cloud and automation strategies engineered to optimize system performance, accelerate product releases, and achieve measurable business goals.',
    icon: 'Zap',
  },
  {
    title: 'Service Quality',
    description:
      'Zero-compromise engineering with 99.99% uptime guarantees, strict security compliance (CIS, SOC2), and 24/7 proactive monitoring.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Company Experience',
    description:
      'Over 5+ years of production experience delivering mission-critical cloud migrations, Kubernetes clusters, and automated DevOps workflows.',
    icon: 'Award',
  },
  {
    title: 'Reliable Partnerships',
    description:
      'Long-term collaborative partnerships with dedicated certified architects, transparent reporting, and ongoing technical guidance for sustainable growth.',
    icon: 'Users',
  },
];

export const CLOUD_PROVIDERS = [
  { name: 'Amazon Web Services', tag: 'AWS', iconType: 'aws', imageUrl: 'https://codingtron.com/media/aws.jpg' },
  { name: 'Microsoft Azure', tag: 'Azure', iconType: 'azure', imageUrl: 'https://codingtron.com/media/azure.jpg' },
  { name: 'VMware Cloud', tag: 'VMware', iconType: 'vmware', imageUrl: 'https://codingtron.com/media/vmware.jpg' },
  { name: 'Google Cloud Platform', tag: 'GCP', iconType: 'gcp', imageUrl: 'https://codingtron.com/media/gcp.jpg' },
  { name: 'DigitalOcean', tag: 'DO', iconType: 'digitalocean', imageUrl: 'https://codingtron.com/media/digital-ocean.jpg' },
  { name: 'Oracle Cloud', tag: 'OCI', iconType: 'oracle', imageUrl: 'https://codingtron.com/media/oracle.jpg' },
];

export const FAQS = [
  {
    question: 'What services does Codingtron specialize in?',
    answer:
      'Codingtron specializes in Cloud Migration & Multi-Cloud Strategy, Infrastructure Deployment & Management, DevOps & CI/CD Pipeline Solutions, Data Migration & Management, Disaster Recovery Planning & Execution, High Availability Architecture, Monitoring & Reporting, and Chatbots & Automation.',
  },
  {
    question: 'How do you guarantee zero downtime during migrations?',
    answer:
      'We use phased migration methodologies including real-time Change Data Capture (CDC), asynchronous data mirroring, continuous background replication, and blue-green or canary routing. Production traffic is only switched once the new environment is fully validated.',
  },
  {
    question: 'Which cloud platforms do your certified engineers support?',
    answer:
      'Our team holds certifications in Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), Kubernetes (CKA/CKAD), and VMware, alongside Linux and HashiCorp tools.',
  },
  {
    question: 'How does Codingtron help reduce monthly cloud expenses?',
    answer:
      'We perform FinOps audits, eliminate zombie resources, configure compute auto-scaling, implement reserved instance and savings plan strategies, and adopt serverless or containerized architectures—typically reducing cloud bills by 30% to 50%.',
  },
  {
    question: 'Do you offer ongoing 24/7 support and managed services?',
    answer:
      'Yes. We offer continuous 24/7 managed infrastructure support, proactive alerting, automated patch management, and rapid incident response backed by strict SLAs.',
  },
  {
    question: 'How do we begin a project with Codingtron?',
    answer:
      'You can reach out via our contact form or by emailing info@codingtron.com. We schedule an initial technical discovery call, evaluate your current architecture, and deliver an actionable migration roadmap with fixed timelines and transparent pricing.',
  },
];

export const CONTACT_INFO = {
  phone: '+92 320 782 2110',
  email: 'info@codingtron.com',
  supportHours: 'Monday – Friday, 9:00 AM – 5:00 PM (GMT -5)',
  address: 'Lahore, Pakistan / Global Remote Delivery',
};
