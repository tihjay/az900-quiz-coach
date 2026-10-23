const questions = [
  // --- Cloud Concepts (5) ---
  {
    topic: 'Cloud Concepts',
    question: 'Which of the following best describes the public cloud deployment model?',
    options: [
      'Resources are owned and operated by a single organization in its own datacenter.',
      'Resources are owned and operated by a third-party provider and shared across multiple tenants over the internet.',
      'Resources are dedicated to one organization in a provider datacenter with no shared hardware.',
      'Resources combine on-premises infrastructure with public cloud resources managed as one environment.',
    ],
    answer: 1,
    explanation:
      'In the public cloud model, a third-party cloud provider owns and operates the hardware, and resources are delivered over the internet to multiple customers (multi-tenant) on a shared infrastructure.',
  },
  {
    topic: 'Cloud Concepts',
    question: 'What is the primary advantage of the consumption-based pricing model in cloud computing?',
    options: [
      'It guarantees a fixed monthly cost regardless of how much you use.',
      'It requires a large upfront investment in hardware.',
      'You pay only for the resources you use, when you use them, with no upfront cost.',
      'It provides unlimited free resources for all users.',
    ],
    answer: 2,
    explanation:
      'The consumption-based model means you pay only for what you use, when you use it. There is no upfront capital expenditure, and charges stop when resources are deprovisioned.',
  },
  {
    topic: 'Cloud Concepts',
    question: 'Under the shared responsibility model, which task is always the responsibility of the cloud provider in a public cloud?',
    options: [
      'Configuring firewall rules on a virtual machine',
      'Installing and patching applications inside a VM',
      'Physical security of the datacenter and underlying hardware',
      'Managing user identities and access credentials',
    ],
    answer: 2,
    explanation:
      'The provider is always responsible for the physical security of the datacenter, the underlying hardware, and the host operating system. The customer remains responsible for data, access, and configuration within their own cloud resources.',
  },
  {
    topic: 'Cloud Concepts',
    question: 'Which cloud characteristic describes the ability to dynamically add or remove resources based on current demand?',
    options: ['Reliability', 'Elasticity', 'Predictability', 'Agility'],
    answer: 1,
    explanation:
      'Elasticity is the ability to automatically or dynamically add or remove resources to match current demand. Scalability is related but refers to the capacity to handle growth, while elasticity focuses on the dynamic up-and-down nature.',
  },
  {
    topic: 'Cloud Concepts',
    question: 'A company purchases new physical servers for its on-premises datacenter. Which type of expenditure does this represent?',
    options: [
      'Operational expenditure (OpEx)',
      'Capital expenditure (CapEx)',
      'Consumption-based expenditure',
      'Pay-as-you-go expenditure',
    ],
    answer: 1,
    explanation:
      'Paying for physical hardware upfront is a capital expenditure (CapEx). Cloud services that charge based on usage are operational expenditures (OpEx), which avoid the need for large upfront investments.',
  },

  // --- Azure Architecture (5) ---
  {
    topic: 'Azure Architecture',
    question: 'What is an Azure region?',
    options: [
      'A single datacenter building within a city.',
      'A set of datacenters deployed within a latency-defined perimeter, connected through a dedicated regional low-latency network.',
      'A geographical boundary that defines billing rates.',
      'A global network of fiber-optic cables connecting all Azure datacenters.',
    ],
    answer: 1,
    explanation:
      'An Azure region is a set of one or more datacenters deployed within a specific latency-defined perimeter and connected through a dedicated regional low-latency network. Most regions are paired with another region in the same geography for disaster recovery.',
  },
  {
    topic: 'Azure Architecture',
    question: 'What is the purpose of an availability zone in Azure?',
    options: [
      'To reduce the cost of running virtual machines.',
      'To provide a single datacenter for all resources in a region.',
      'To protect applications and data from datacenter-level failures by using physically separate datacenters within a region.',
      'To connect on-premises networks to Azure.',
    ],
    answer: 2,
    explanation:
      'Availability zones are physically separate locations within a single Azure region, each with independent power, cooling, and networking. They protect workloads from datacenter-level failures by providing redundancy.',
  },
  {
    topic: 'Azure Architecture',
    question: 'Which statement correctly describes a resource group in Azure?',
    options: [
      'A billing boundary that groups resources by cost center.',
      'A logical container that holds related resources, providing unified lifecycle management and access control.',
      'A network security boundary that isolates resources from the internet.',
      'A geographical boundary that defines where resources can be deployed.',
    ],
    answer: 1,
    explanation:
      'A resource group is a logical container that holds related Azure resources for a solution. It provides a unified lifecycle (deploy, update, delete together) and applies role-based access control (RBAC) to all resources within it.',
  },
  {
    topic: 'Azure Architecture',
    question: 'How many resource groups can a single Azure resource belong to at the same time?',
    options: ['Zero', 'Exactly one', 'Up to five', 'Unlimited'],
    answer: 1,
    explanation:
      'Each Azure resource can exist in exactly one resource group at a time. You can move a resource from one resource group to another, but it cannot reside in multiple resource groups simultaneously.',
  },
  {
    topic: 'Azure Architecture',
    question: 'What is Azure Resource Manager (ARM)?',
    options: [
      'A monitoring tool that tracks resource utilization.',
      'A deployment and management service that provides a consistent management layer for creating and managing Azure resources.',
      'A billing tool that calculates monthly charges.',
      'A security service that scans resources for vulnerabilities.',
    ],
    answer: 1,
    explanation:
      'Azure Resource Manager (ARM) is the deployment and management service for Azure. It provides a consistent management layer through which all resources are created, configured, and managed, including support for declarative ARM templates.',
  },

  // --- Azure Services (5) ---
  {
    topic: 'Azure Services',
    question: 'Which Azure service should you use to host web applications without managing the underlying server infrastructure?',
    options: [
      'Azure Virtual Machines',
      'Azure App Service',
      'Azure Blob Storage',
      'Azure VPN Gateway',
    ],
    answer: 1,
    explanation:
      'Azure App Service is a platform-as-a-service (PaaS) offering that lets you host web applications and APIs without managing servers. It handles scaling, patching, and OS maintenance automatically.',
  },
  {
    topic: 'Azure Services',
    question: 'Which Azure service provides object storage for large amounts of unstructured data such as images, videos, and documents?',
    options: [
      'Azure SQL Database',
      'Azure Blob Storage',
      'Azure Queue Storage',
      'Azure File Storage',
    ],
    answer: 1,
    explanation:
      'Azure Blob Storage is optimized for storing massive amounts of unstructured data (binary large objects) such as images, videos, documents, and backups. It offers tiered storage (hot, cool, archive) to optimize cost.',
  },
  {
    topic: 'Azure Services',
    question: 'Which Azure service is a fully managed relational database service that supports SQL Server, PostgreSQL, and MySQL?',
    options: [
      'Azure Cosmos DB',
      'Azure Database for PostgreSQL (via Azure SQL)',
      'Azure Virtual Machines with database software',
      'Azure Table Storage',
    ],
    answer: 1,
    explanation:
      'Azure offers fully managed relational database services for SQL Server (Azure SQL Database), PostgreSQL (Azure Database for PostgreSQL), and MySQL (Azure Database for MySQL). These handle patching, backups, and high availability automatically.',
  },
  {
    topic: 'Azure Services',
    question: 'What is Azure Cosmos DB?',
    options: [
      'A managed service for running Windows Virtual Desktops.',
      'A globally distributed, multi-model database service that supports multiple APIs and offers single-digit-millisecond latency at any scale.',
      'A content delivery network for caching static files.',
      'A service for managing API gateways.',
    ],
    answer: 1,
    explanation:
      'Azure Cosmos DB is Microsoft\'s globally distributed, multi-model database service. It offers turnkey global distribution, multi-API support (SQL, MongoDB, Cassandra, Gremlin, Table), and guarantees low single-digit-millisecond latency at the 99th percentile worldwide.',
  },
  {
    topic: 'Azure Services',
    question: 'Which Azure service lets you run event-driven, serverless code without provisioning or managing infrastructure?',
    options: [
      'Azure App Service',
      'Azure Functions',
      'Azure Logic Apps',
      'Azure Container Instances',
    ],
    answer: 1,
    explanation:
      'Azure Functions is a serverless compute service that lets you run event-driven code without managing infrastructure. You pay only for the execution time, and it automatically scales based on demand.',
  },

  // --- Security and Governance (5) ---
  {
    topic: 'Security and Governance',
    question: 'Which Azure service provides cloud-based identity and access management?',
    options: [
      'Azure Key Vault',
      'Microsoft Entra ID (formerly Azure Active Directory)',
      'Azure Information Protection',
      'Azure Firewall',
    ],
    answer: 1,
    explanation:
      'Microsoft Entra ID (formerly Azure Active Directory) is Microsoft\'s cloud-based identity and access management service. It provides authentication, single sign-on, multi-factor authentication, and conditional access for cloud and hybrid environments.',
  },
  {
    topic: 'Security and Governance',
    question: 'What is the primary purpose of Azure Key Vault?',
    options: [
      'To monitor network traffic for suspicious activity.',
      'To securely store and manage cryptographic keys, secrets, and certificates.',
      'To provide a firewall for virtual networks.',
      'To manage user passwords and identities.',
    ],
    answer: 1,
    explanation:
      'Azure Key Vault securely stores and manages cryptographic keys, secrets (such as connection strings and passwords), and certificates. It centralizes secret management, controls access through policies, and supports automatic rotation and HSM-backed keys.',
  },
  {
    topic: 'Security and Governance',
    question: 'Which Azure service evaluates resources for compliance with organizational standards and can enforce rules on new and existing resources?',
    options: [
      'Azure Monitor',
      'Azure Policy',
      'Azure Advisor',
      'Azure Service Health',
    ],
    answer: 1,
    explanation:
      'Azure Policy is a governance service that evaluates resources for compliance with defined policies (e.g., allowed regions, required tags, restricted SKUs). It can deny non-compliant deployments and auto-remediate existing resources.',
  },
  {
    topic: 'Security and Governance',
    question: 'What does role-based access control (RBAC) in Azure do?',
    options: [
      'It charges users based on their assigned roles.',
      'It grants permissions to users, groups, and applications at specific scopes through role assignments.',
      'It filters network traffic based on user roles.',
      'It tracks user login activity for auditing purposes.',
    ],
    answer: 1,
    explanation:
      'Azure RBAC is an authorization system that manages access to Azure resources. It uses role assignments (security principal + role definition + scope) to grant permissions at the management group, subscription, resource group, or individual resource level.',
  },
  {
    topic: 'Security and Governance',
    question: 'Which of the following describes multi-factor authentication (MFA)?',
    options: [
      'Using a single strong password for authentication.',
      'Requiring two or more independent forms of verification (e.g., a password plus a phone approval) to sign in.',
      'Authenticating through a biometric scan only.',
      'Replacing passwords with a hardware token permanently.',
    ],
    answer: 1,
    explanation:
      'Multi-factor authentication (MFA) requires two or more independent verification factors: something you know (password), something you have (phone, token), or something you are (biometric). This layered approach dramatically reduces the risk of compromised credentials.',
  },
];

export default questions;
