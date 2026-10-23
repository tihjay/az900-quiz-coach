import type { Topic } from './types';

export const topics: Topic[] = [
  {
    id: 'cloud-concepts',
    title: 'Cloud Concepts',
    description:
      'Understand cloud concepts, shared responsibility, consumption-based models, and the benefits of cloud computing.',
    icon: 'Cloud',
    accent: 'sky',
    questions: [
      {
        id: 'cc-1',
        question:
          'Which of the following describes the public cloud deployment model?',
        options: [
          'Resources are hosted on-premises and exclusively used by one organization.',
          'Resources are owned and operated by a third-party provider and shared across multiple tenants.',
          'Resources are dedicated to a single organization in a provider datacenter but with no shared hardware.',
          'Resources combine on-premises infrastructure with public cloud resources, managed as a single environment.',
        ],
        correctIndex: 1,
        explanation:
          'In the public cloud model, a third-party provider owns and operates the hardware, and resources are provisioned over the internet and shared (multi-tenant) across many customers.',
      },
      {
        id: 'cc-2',
        question: 'What is the primary benefit of the consumption-based model in cloud computing?',
        options: [
          'It guarantees fixed monthly pricing regardless of usage.',
          'It allows you to pay only for the resources you use, when you use them.',
          'It requires upfront capital expenditure for hardware.',
          'It provides unlimited free resources for all users.',
        ],
        correctIndex: 1,
        explanation:
          'The consumption-based model means you pay only for what you use, when you use it — no upfront costs, and you stop paying when resources are deprovisioned.',
      },
      {
        id: 'cc-3',
        question: 'Under the shared responsibility model, which of the following is always the responsibility of the cloud provider in the public cloud?',
        options: [
          'Configuring firewall rules on a virtual machine',
          'Installing applications inside a virtual machine',
          'Physical security of the datacenter',
          'Managing user access credentials',
        ],
        correctIndex: 2,
        explanation:
          'Physical security of the datacenter, along with the underlying hardware, is always the provider\'s responsibility. The customer is responsible for data, accounts, and configuration within their cloud resources.',
      },
      {
        id: 'cc-4',
        question: 'Which term best describes the ability to scale resources quickly — often automatically — based on current demand?',
        options: ['Reliability', 'Elasticity', 'Predictability', 'Durability'],
        correctIndex: 1,
        explanation:
          'Elasticity is the ability to add or remove resources dynamically (often automatically) to match demand. Scalability is related but refers to adding resources to handle growth; elasticity focuses on the dynamic nature.',
      },
      {
        id: 'cc-5',
        question: 'Which of the following is considered a CapEx (capital expenditure)?',
        options: [
          'Paying a monthly fee for virtual machines used in production.',
          'Purchasing new physical servers for an on-premises datacenter.',
          'Paying for storage based on the number of gigabytes consumed per month.',
          'Paying per execution for a serverless function.',
        ],
        correctIndex: 1,
        explanation:
          'CapEx involves upfront spending on physical infrastructure (buying servers, networking equipment, buildings). The other options are OpEx — pay-as-you-go operational expenses.',
      },
      {
        id: 'cc-6',
        question: 'Which cloud benefit refers to the ability of a system to recover from failures and continue functioning?',
        options: ['High availability', 'Elasticity', 'Scalability', 'Agility'],
        correctIndex: 0,
        explanation:
          'Reliability and high availability describe the ability to recover from failures and keep functioning. Cloud providers achieve this through redundancy, replication, and geographically distributed datacenters.',
      },
      {
        id: 'cc-7',
        question: 'A company wants to deploy a new application but wants complete control over the hardware and physical security. Which deployment model should they choose?',
        options: ['Public cloud', 'Private cloud', 'Hybrid cloud', 'Multi-cloud'],
        correctIndex: 1,
        explanation:
          'A private cloud gives a single organization exclusive use of the infrastructure, providing the most control over hardware, physical security, and customization.',
      },
      {
        id: 'cc-8',
        question: 'Which of the following is a characteristic of a hybrid cloud?',
        options: [
          'All resources are owned and managed by a single third-party provider.',
          'Resources are exclusively used by one organization in their own datacenter.',
          'It combines public cloud and private cloud resources that work together.',
          'It only uses resources from multiple public cloud providers simultaneously.',
        ],
        correctIndex: 2,
        explanation:
          'A hybrid cloud combines public and private cloud resources, allowing data and applications to be shared between them while they remain distinct environments.',
      },
      {
        id: 'cc-9',
        question: 'Which of the following best describes "agility" as a cloud benefit?',
        options: [
          'The ability to automatically scale resources up and down based on demand.',
          'The ability to deploy and configure resources quickly, enabling faster development and iteration.',
          'The ability to keep data safe from unauthorized access.',
          'The ability to guarantee a fixed monthly cost for cloud resources.',
        ],
        correctIndex: 1,
        explanation:
          'Agility in the cloud refers to the speed at which you can provision, configure, and deploy resources — enabling faster development, testing, and iteration cycles.',
      },
      {
        id: 'cc-10',
        question: 'In the shared responsibility model, which of the following is always the responsibility of the customer in a public cloud IaaS scenario?',
        options: [
          'Physical security of the datacenter',
          'Maintenance of the physical network infrastructure',
          'Information and data stored in the cloud',
          'Hardware maintenance and replacement',
        ],
        correctIndex: 2,
        explanation:
          'The customer is always responsible for the information and data they store in the cloud, regardless of the service model. Physical security, hardware, and network infrastructure remain the provider\'s responsibility.',
      },
    ],
  },
  {
    id: 'core-services',
    title: 'Azure Core Services',
    description:
      'Explore core Azure architectural components including regions, availability zones, resource groups, and the Azure Resource Manager.',
    icon: 'Server',
    accent: 'blue',
    questions: [
      {
        id: 'cs-1',
        question: 'What is an Azure region?',
        options: [
          'A single datacenter building within a city.',
          'A set of datacenters deployed within a latency-defined perimeter and connected through a dedicated regional low-latency network.',
          'A geographical area containing exactly one availability zone.',
          'A global network of fiber-optic cables connecting all Azure datacenters.',
        ],
        correctIndex: 1,
        explanation:
          'An Azure region is a set of one or more datacenters deployed within a specific latency-defined perimeter, connected via a dedicated regional low-latency network.',
      },
      {
        id: 'cs-2',
        question: 'What is the primary purpose of an availability zone?',
        options: [
          'To reduce the cost of running virtual machines.',
          'To provide a single datacenter location for all resources.',
          'To protect applications and data from datacenter failures by providing physically separate locations within a region.',
          'To provide network connectivity between different Azure regions.',
        ],
        correctIndex: 2,
        explanation:
          'Availability zones are physically separate datacenters within an Azure region, each with independent power, cooling, and networking. They protect against datacenter-level failures.',
      },
      {
        id: 'cs-3',
        question: 'Which of the following best describes a resource group in Azure?',
        options: [
          'A billing boundary that groups resources by cost center.',
          'A container that holds related resources for an Azure solution, providing lifecycle management and access control.',
          'A network security boundary that isolates resources from the internet.',
          'A geographical boundary that defines where resources can be deployed.',
        ],
        correctIndex: 1,
        explanation:
          'A resource group is a logical container that holds related Azure resources. It provides a unified lifecycle (deploy, update, delete together) and applies access control (RBAC) to all resources within it.',
      },
      {
        id: 'cs-4',
        question: 'What is the Azure Resource Manager (ARM)?',
        options: [
          'A monitoring tool for tracking resource utilization.',
          'A deployment and management service that provides a consistent management layer for Azure resources.',
          'A billing tool that calculates monthly charges for Azure usage.',
          'A security service that scans resources for vulnerabilities.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Resource Manager (ARM) is the deployment and management service for Azure. It provides a consistent management layer through which all Azure resources are created, configured, and managed, including ARM templates for declarative deployment.',
      },
      {
        id: 'cs-5',
        question: 'How many resource groups can a single Azure resource belong to?',
        options: ['Zero', 'Exactly one', 'Up to five', 'Unlimited'],
        correctIndex: 1,
        explanation:
          'Each Azure resource can exist in exactly one resource group. You can move resources between resource groups, but a resource cannot be in multiple resource groups simultaneously.',
      },
      {
        id: 'cs-6',
        question: 'Which of the following is true about Azure region pairs?',
        options: [
          'Each region is paired with exactly two other regions for redundancy.',
          'Region pairs are always located in the same city for minimal latency.',
          'Azure replicates data across region pairs automatically for certain services, and updates are rolled out sequentially to minimize downtime.',
          'Region pairs cannot be used for disaster recovery purposes.',
        ],
        correctIndex: 2,
        explanation:
          'Azure pairs each region with another within the same geography (at least 300 miles apart). Certain services replicate automatically across pairs, and platform updates are rolled out one region at a time to reduce risk.',
      },
      {
        id: 'cs-7',
        question: 'Which of the following Azure subscriptions provides access for development and testing at reduced rates, with specific usage terms?',
        options: [
          'Free Trial',
          'Pay-As-You-Go',
          'Enterprise Agreement',
          'Dev/Test subscription',
        ],
        correctIndex: 3,
        explanation:
          'Dev/Test subscriptions offer discounted rates for development and testing workloads, but come with terms that prohibit using them for production.',
      },
      {
        id: 'cs-8',
        question: 'What is the relationship between subscriptions and resource groups in Azure?',
        options: [
          'Resource groups are created inside subscriptions, and a subscription can contain multiple resource groups.',
          'Subscriptions are created inside resource groups, and a resource group can contain multiple subscriptions.',
          'Subscriptions and resource groups are independent and have no relationship.',
          'A resource group can span multiple subscriptions.',
        ],
        correctIndex: 0,
        explanation:
          'Subscriptions are the billing and access boundary. Resource groups are created within a subscription, and a subscription can contain many resource groups. Resource groups cannot span subscriptions.',
      },
      {
        id: 'cs-9',
        question: 'Which Azure resource is used to host web applications without managing the underlying server infrastructure?',
        options: [
          'Azure Virtual Machines',
          'Azure App Service',
          'Azure Blob Storage',
          'Azure VPN Gateway',
        ],
        correctIndex: 1,
        explanation:
          'Azure App Service is a PaaS offering that lets you host web applications and APIs without managing the underlying server infrastructure. It handles scaling, patching, and OS maintenance automatically.',
      },
      {
        id: 'cs-10',
        question: 'Which of the following is true about Azure availability zones?',
        options: [
          'They are available in all Azure regions.',
          'Each availability zone is a logical partition within a single datacenter.',
          'They consist of one or more independent datacenters with their own power, cooling, and networking.',
          'They can only be used with virtual machines and no other Azure services.',
        ],
        correctIndex: 2,
        explanation:
          'Each availability zone is one or more physically independent datacenters with independent power, cooling, and networking. Not all regions support availability zones.',
      },
    ],
  },
  {
    id: 'security-privacy',
    title: 'Security, Privacy & Compliance',
    description:
      'Learn about network security, identity, governance, privacy, and compliance features that protect your Azure resources.',
    icon: 'ShieldCheck',
    accent: 'emerald',
    questions: [
      {
        id: 'sp-1',
        question: 'Which Azure service provides cloud-based identity and access management?',
        options: [
          'Azure Key Vault',
          'Microsoft Entra ID (formerly Azure Active Directory)',
          'Azure Information Protection',
          'Azure Security Center',
        ],
        correctIndex: 1,
        explanation:
          'Microsoft Entra ID (formerly Azure AD) is Microsoft\'s cloud-based identity and access management service. It provides authentication, single sign-on, multi-factor authentication, and conditional access.',
      },
      {
        id: 'sp-2',
        question: 'What is the primary purpose of Azure Key Vault?',
        options: [
          'To monitor network traffic for suspicious activity.',
          'To store and manage cryptographic keys, secrets, and certificates securely.',
          'To provide a firewall for virtual networks.',
          'To manage user identities and passwords.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Key Vault securely stores and manages cryptographic keys, secrets (like connection strings and passwords), and certificates. It centralizes secret management and controls access through policies.',
      },
      {
        id: 'sp-3',
        question: 'Which of the following best describes role-based access control (RBAC) in Azure?',
        options: [
          'A billing model that charges based on user roles.',
          'A system that grants permissions to users, groups, and applications at specific scopes through role assignments.',
          'A network security feature that filters traffic based on user roles.',
          'A monitoring tool that tracks user activity within a subscription.',
        ],
        correctIndex: 1,
        explanation:
          'Azure RBAC is an authorization system that manages access to Azure resources. It uses role assignments (security principal + role definition + scope) to grant permissions at the management group, subscription, resource group, or resource level.',
      },
      {
        id: 'sp-4',
        question: 'What is Azure Policy?',
        options: [
          'A service that evaluates resources for compliance with defined rules and enforces those rules on new and existing resources.',
          'A legal document that defines the terms of service for Azure.',
          'A billing tool that applies discounts based on organizational policies.',
          'A firewall policy that controls network traffic rules.',
        ],
        correctIndex: 0,
        explanation:
          'Azure Policy is a governance service that evaluates resources for compliance with defined policies. It can enforce rules (e.g., allowed regions, required tags) on both new and existing resources, and can auto-remediate non-compliant resources.',
      },
      {
        id: 'sp-5',
        question: 'Which of the following describes multi-factor authentication (MFA)?',
        options: [
          'Using a single strong password for authentication.',
          'Requiring two or more forms of verification (e.g., password + phone notification) to sign in.',
          'Authenticating through a single biometric scan only.',
          'Using a hardware token instead of a password.',
        ],
        correctIndex: 1,
        explanation:
          'MFA requires two or more independent verification factors: something you know (password), something you have (phone, token), or something you are (biometric). This significantly increases security compared to password-only authentication.',
      },
      {
        id: 'sp-6',
        question: 'Which Microsoft service provides a trust center where customers can find compliance documentation and privacy statements?',
        options: [
          'Azure DevOps',
          'Microsoft Service Trust Portal',
          'Azure Marketplace',
          'Microsoft 365 Admin Center',
        ],
        correctIndex: 1,
        explanation:
          'The Microsoft Service Trust Portal provides access to compliance reports, privacy statements, and other documentation about Microsoft\'s cloud services. The Azure compliance documentation is also accessible through Microsoft Learn.',
      },
      {
        id: 'sp-7',
        question: 'What is a network security group (NSG) in Azure?',
        options: [
          'A group of users who manage network security policies.',
          'A set of firewall rules that allow or deny inbound and outbound traffic to Azure resources, applied to subnets or network interfaces.',
          'A monitoring service that detects network intrusions.',
          'A VPN gateway that encrypts traffic between on-premises and Azure.',
        ],
        correctIndex: 1,
        explanation:
          'A network security group (NSG) contains a list of security rules that allow or deny inbound and outbound network traffic. NSGs can be associated with subnets or individual network interfaces (NICs).',
      },
      {
        id: 'sp-8',
        question: 'Which of the following is a customer responsibility under the shared responsibility model for security?',
        options: [
          'Securing the physical datacenter',
          'Patching the hypervisor',
          'Managing access permissions and securing data stored in the cloud',
          'Maintaining the physical network hardware',
        ],
        correctIndex: 2,
        explanation:
          'The customer is always responsible for managing access to their data (identity, RBAC), securing the data itself (encryption, classification), and securing the resources they deploy. Physical security, hypervisor patching, and network hardware are the provider\'s responsibility.',
      },
      {
        id: 'sp-9',
        question: 'Which Azure service provides a unified security management system that strengthens security posture and enables threat protection across hybrid cloud workloads?',
        options: [
          'Azure Sentinel (Microsoft Sentinel)',
          'Microsoft Defender for Cloud',
          'Azure Monitor',
          'Azure Firewall',
        ],
        correctIndex: 1,
        explanation:
          'Microsoft Defender for Cloud (formerly Azure Security Center) provides unified security management, posture management, and threat protection across hybrid cloud workloads. Microsoft Sentinel is a SIEM/SOAR solution for security analytics.',
      },
      {
        id: 'sp-10',
        question: 'Which of the following is true about data residency in Azure?',
        options: [
          'Data is always replicated globally across all Azure regions.',
          'Customers can choose the specific Azure regions where their data is stored to meet data residency and compliance requirements.',
          'Azure does not provide any guarantees about where customer data is stored.',
          'All customer data is stored in the United States by default.',
        ],
        correctIndex: 1,
        explanation:
          'Azure allows customers to choose the regions where their data is stored and processed, helping meet data residency, sovereignty, and compliance requirements. Microsoft also publishes the Microsoft Privacy Statement and offers regional data residency commitments for certain services.',
      },
    ],
  },
  {
    id: 'pricing-support',
    title: 'Azure Pricing & Support',
    description:
      'Understand Azure pricing, service level agreements, and the lifecycle of Azure services including previews and general availability.',
    icon: 'Receipt',
    accent: 'amber',
    questions: [
      {
        id: 'ps-1',
        question: 'Which Azure pricing calculator tool helps you estimate the monthly cost of Azure services before deployment?',
        options: [
          'Azure Cost Management',
          'Azure Pricing Calculator',
          'Azure Advisor',
          'Azure Reservations',
        ],
        correctIndex: 1,
        explanation:
          'The Azure Pricing Calculator lets you estimate the monthly cost of Azure services by configuring resources (VM sizes, storage types, bandwidth, etc.) and seeing the estimated pricing before deploying.',
      },
      {
        id: 'ps-2',
        question: 'What is a Service Level Agreement (SLA) in the context of Azure?',
        options: [
          'A legal agreement that defines the terms of service for using Azure.',
          'A formal agreement that defines the performance and availability guarantees for Azure services, including credits if those guarantees are not met.',
          'A pricing model that guarantees a fixed cost for services.',
          'A support plan that provides technical assistance for Azure issues.',
        ],
        correctIndex: 1,
        explanation:
          'An SLA is a formal agreement between Microsoft and the customer that defines performance and availability targets (e.g., 99.9% uptime). If Microsoft fails to meet the SLA, the customer may receive service credits.',
      },
      {
        id: 'ps-3',
        question: 'Which Azure support plan is available to all Azure customers at no additional cost and covers billing and subscription issues?',
        options: ['Developer', 'Standard', 'Professional Direct', 'Basic'],
        correctIndex: 3,
        explanation:
          'The Basic support plan is included at no cost for all Azure customers. It covers billing and subscription-level issues, provides access to online documentation, community forums, and the Azure Status dashboard, but does not include technical support.',
      },
      {
        id: 'ps-4',
        question: 'Which of the following factors can affect the price of an Azure virtual machine?',
        options: [
          'The color theme of the Azure portal.',
          'The region where the VM is deployed, the VM size, and the operating system license type.',
          'The name of the resource group containing the VM.',
          'The time of day the VM was originally created.',
        ],
        correctIndex: 1,
        explanation:
          'VM pricing is influenced by the region (prices vary by location), VM size (CPU, RAM, storage), OS type (Windows includes a license cost), and pricing model (Pay-As-You-Go, Reserved, Spot). The resource group name and creation time have no effect.',
      },
      {
        id: 'ps-5',
        question: 'What is the difference between a general availability (GA) service and a preview service in Azure?',
        options: [
          'Preview services are free, while GA services always cost money.',
          ' GA services are fully supported with SLAs, while preview services may have limited functionality, no SLA, and should not be used in production.',
          'Preview services are only available to Microsoft employees.',
          'GA services are being deprecated, while preview services are new.',
        ],
        correctIndex: 1,
        explanation:
          'GA (general availability) services are production-ready, fully supported, and backed by SLAs. Preview services are in development, may have limited features, lack SLAs, and Microsoft recommends not using them for production workloads.',
      },
      {
        id: 'ps-6',
        question: 'Which Azure tool provides personalized recommendations to optimize your Azure deployments for cost, security, reliability, and operational excellence?',
        options: [
          'Azure Advisor',
          'Azure Monitor',
          'Azure Service Health',
          'Azure Blueprints',
        ],
        correctIndex: 0,
        explanation:
          'Azure Advisor analyzes your deployed resources and provides personalized recommendations across five categories: Cost, Security, Reliability, Operational Excellence, and Performance. It helps you follow best practices.',
      },
      {
        id: 'ps-7',
        question: 'What are Azure Reservations (reserved instances)?',
        options: [
          'A way to reserve a specific datacenter for exclusive use.',
          'A pricing model that offers significant discounts (up to 72%) by committing to use a specific resource for a 1- or 3-year term.',
          'A method to reserve IP addresses for future use.',
          'A way to hold resources temporarily before deleting them.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Reservations let you commit to using a resource (like a VM or SQL database) for a 1- or 3-year term in exchange for significant discounts — up to 72% compared to Pay-As-You-Go pricing. You are billed regardless of whether you use the resource.',
      },
      {
        id: 'ps-8',
        question: 'Which of the following is the best way to track and manage ongoing Azure spending across your organization?',
        options: [
          'Azure Pricing Calculator',
          'Azure Cost Management + Billing',
          'Azure Advisor',
          'Azure Service Health',
        ],
        correctIndex: 1,
        explanation:
          'Azure Cost Management + Billing provides tools to monitor, allocate, and optimize your cloud spend. It includes cost analysis, budgets, alerts, and cost forecasts, and supports multi-cloud cost tracking.',
      },
      {
        id: 'ps-9',
        question: 'If an Azure service has an SLA of 99.99% uptime, what is the maximum allowed monthly downtime?',
        options: [
          'Approximately 43 minutes per month',
          'Approximately 4 hours per month',
          'Approximately 43 hours per month',
          'Zero downtime is allowed',
        ],
        correctIndex: 0,
        explanation:
          '99.99% uptime means the service can be unavailable for at most 0.01% of the time. Over a 30-day month (43,200 minutes), that is approximately 4.32 minutes — roughly 43 minutes is for 99.9%. A 99.99% SLA allows about 4.3 minutes of downtime per month.',
      },
      {
        id: 'ps-10',
        question: 'Which Azure support plan offers the fastest response time for critical issues and is designed for enterprise workloads with business-critical dependencies?',
        options: ['Basic', 'Developer', 'Standard', 'Enterprise'],
        correctIndex: 3,
        explanation:
          'The Enterprise support plan provides the fastest response times (under 15 minutes for critical-severity cases), a dedicated Technical Account Manager, architectural guidance, and proactive services. It is designed for organizations with business-critical workloads.',
      },
    ],
  },
  {
    id: 'management-governance',
    title: 'Management & Governance',
    description:
      'Master monitoring, governance, compliance, and resource management tools that keep your Azure environment under control.',
    icon: 'Gauge',
    accent: 'violet',
    questions: [
      {
        id: 'mg-1',
        question: 'Which Azure service provides a unified monitoring solution that collects and analyzes telemetry from cloud and on-premises resources?',
        options: [
          'Azure Advisor',
          'Azure Monitor',
          'Azure Service Health',
          'Azure Log Analytics',
        ],
        correctIndex: 1,
        explanation:
          'Azure Monitor is a comprehensive monitoring solution that collects, analyzes, and acts on telemetry from both cloud and on-premises environments. It includes metrics, logs, alerts, and dashboards. Log Analytics is a feature within Azure Monitor.',
      },
      {
        id: 'mg-2',
        question: 'What is the purpose of Azure Service Health?',
        options: [
          'To monitor the health of individual virtual machines.',
          'To provide a personalized view of the health of Azure services, planned maintenance, and issues that may affect your resources.',
          'To calculate the cost of running Azure services.',
          'To manage user access and permissions across subscriptions.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Service Health provides a personalized dashboard showing the status of Azure services in the regions you use. It covers service issues, planned maintenance, and health advisories that may affect your resources.',
      },
      {
        id: 'mg-3',
        question: 'Which Azure service helps you define and enforce organizational standards and compliance requirements across your Azure resources?',
        options: ['Azure Monitor', 'Azure Policy', 'Azure Advisor', 'Azure Blueprints'],
        correctIndex: 1,
        explanation:
          'Azure Policy evaluates resources for compliance with defined policies and can enforce standards (e.g., required tags, allowed regions, SKU restrictions) on new and existing resources, with automatic remediation capabilities.',
      },
      {
        id: 'mg-4',
        question: 'What is Azure Blueprints?',
        options: [
          'A visual design tool for creating Azure architecture diagrams.',
          'A service that orchestrates the deployment of resources, policies, role assignments, and templates as a repeatable package for governed environments.',
          'A blueprint tool for designing physical datacenter layouts.',
          'A pricing tool that estimates the cost of Azure migrations.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Blueprints packages resource templates (ARM/Bicep), policies, role assignments, and artifacts into a single, versioned definition. This enables repeatable, compliant deployments — useful for environments with strict governance requirements.',
      },
      {
        id: 'mg-5',
        question: 'Which of the following best describes Azure Cloud Shell?',
        options: [
          'A desktop application for managing Azure resources locally.',
          'An interactive, browser-accessible shell for managing Azure resources via CLI or PowerShell, with persistent file storage.',
          'A web-based IDE for developing Azure applications.',
          'A terminal emulator for connecting to on-premises servers.',
        ],
        correctIndex: 1,
        explanation:
          'Azure Cloud Shell is an interactive, browser-accessible shell for managing Azure resources. It supports Bash and PowerShell, comes with pre-installed Azure tools, and provides persistent file storage via an Azure file share.',
      },
      {
        id: 'mg-6',
        question: 'What is the Azure Resource Manager (ARM) template?',
        options: [
          'A monitoring template that defines alert rules for resources.',
          'A JSON file that declaratively defines the infrastructure and configuration for a deployment, enabling repeatable and consistent provisioning.',
          'A billing template that defines cost allocation rules.',
          'A security template that defines firewall rules for virtual networks.',
        ],
        correctIndex: 1,
        explanation:
          'ARM templates are JSON files (or Bicep files, which compile to ARM JSON) that declaratively define the resources, properties, and dependencies for a deployment. They enable infrastructure-as-code, providing repeatable, consistent, and version-controlled provisioning.',
      },
      {
        id: 'mg-7',
        question: 'Which Azure service provides a centralized view of security recommendations and security alerts across your Azure, on-premises, and multi-cloud environments?',
        options: [
          'Azure Monitor',
          'Microsoft Defender for Cloud',
          'Azure Service Health',
          'Azure Advisor',
        ],
        correctIndex: 1,
        explanation:
          'Microsoft Defender for Cloud (formerly Azure Security Center) provides a centralized dashboard showing security recommendations, alerts, and your security posture across Azure, on-premises, and multi-cloud (AWS/GCP) environments.',
      },
      {
        id: 'mg-8',
        question: 'What is the purpose of tagging Azure resources?',
        options: [
          'To encrypt data stored in the resource.',
          'To apply metadata (key-value pairs) that helps organize, manage, and filter resources for billing, operations, and governance purposes.',
          'To assign permissions to resources based on user roles.',
          'To automatically scale resources based on demand.',
        ],
        correctIndex: 1,
        explanation:
          'Tags are key-value pairs applied to Azure resources that provide metadata for organization, cost allocation, environment tracking, and operational management. Tags can be used in queries, cost reports, and Azure Policy enforcement.',
      },
      {
        id: 'mg-9',
        question: 'Which of the following is true about Azure management groups?',
        options: [
          'They can only contain a single subscription.',
          'They provide a level of scope above subscriptions for managing access, policies, and compliance across multiple subscriptions.',
          'They are the same as resource groups but at a higher level.',
          'They can only be used by Enterprise Agreement customers.',
        ],
        correctIndex: 1,
        explanation:
          'Management groups are a container above subscriptions that let you manage access, policy, and compliance across multiple subscriptions. They support up to 10,000 management groups and up to 6 levels of hierarchy, enabling enterprise-scale governance.',
      },
      {
        id: 'mg-10',
        question: 'Which Azure tool enables you to execute one-time or recurring management tasks across your Azure resources at scale, using PowerShell or Python runbooks?',
        options: [
          'Azure Cloud Shell',
          'Azure Automation',
          'Azure Functions',
          'Azure Logic Apps',
        ],
        correctIndex: 1,
        explanation:
          'Azure Automation delivers cloud-based automation and configuration management. It uses runbooks (PowerShell or Python) to automate repetitive tasks like patching, deployment, and configuration across Azure and on-premises environments at scale.',
      },
    ],
  },
];
