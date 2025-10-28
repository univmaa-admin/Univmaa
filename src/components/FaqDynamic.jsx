import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

/**
 * 1️⃣ All Cloud FAQ Data
 */
const faqData = {
  // ---------------- SALES CLOUD ----------------
  salescloud: {
    sales: [
      {
        q: "What is Sales Cloud?",
        a: "Sales Cloud is Salesforce’s CRM platform that helps businesses manage leads, opportunities, and customer relationships. It empowers sales teams to sell smarter, close deals faster, and drive predictable revenue growth.",
      },
      {
        q: "What are the benefits of Sales Cloud?",
        a: "Sales Cloud boosts productivity, automates sales processes, and provides real-time insights. It helps teams close deals faster, improve forecasting accuracy, and deliver better customer experiences.",
      },
      {
        q: "How do I get started implementing Sales Cloud?",
        a: "Sales Cloud automates manual tasks, streamlines workflows, and provides real-time visibility into performance — allowing sales teams to focus more on selling and less on administration.",
      },
      {
        q: "What is lead management?",
        a: "Lead management tracks and nurtures potential customers from first contact to conversion. Sales Cloud automates lead capture, scoring, and follow-ups to improve response time and conversion rates.",
      },
      {
        q: "How does Sales Cloud improve team productivity?",
        a: "Sales Cloud automates manual tasks, streamlines workflows, and provides real-time visibility into performance — allowing sales teams to focus more on selling and less on administration.",
      },
      {
        q: "Can Sales Cloud integrate with other tools?",
        a: "Yes, Sales Cloud integrates seamlessly with popular business tools like email, calendars, marketing automation, and ERP systems to create a connected sales ecosystem.",
      },
    ],
    automation: [
      {
        q: "What is sales automation?",
        a: "Sales automation uses technology to streamline repetitive sales tasks like data entry, lead tracking, and follow-ups—saving time, improving accuracy, and allowing teams to focus on building customer relationships.",
      },
      {
        q: "What are the benefits of salesforce automation in Sales Cloud?",
        a: "Sales Cloud automation boosts productivity, reduces manual workload, and ensures consistent sales processes. It helps teams respond faster, close deals quicker, and maintain data accuracy across the pipeline.",
      },
      {
        q: "How does Salesforce use AI in sales?",
        a: "Salesforce integrates AI through Einstein, its built-in intelligence layer, to deliver predictive insights, automate actions, and help sales reps prioritize the right leads and opportunities.",
      },
      {
        q: "How can automation improve lead management?",
        a: "Automation simplifies lead assignment, routing, and nurturing, ensuring every lead is followed up on promptly and efficiently—boosting conversion rates and customer engagement.",
      },
      {
        q: "What is predictive sales analytics?",
        a: "Predictive analytics uses AI to forecast future sales trends, identify growth opportunities, and optimize resource allocation, helping businesses make smarter, data-driven decisions.",
      },
      {
        q: "How does AI help in sales forecasting?",
        a: "AI enhances forecasting accuracy by analyzing past performance, market trends, and customer behaviors to deliver more reliable sales predictions.",
      },
      {
        q: "Can automation personalize the customer experience?",
        a: "Yes, automation can tailor communication, recommendations, and follow-ups based on customer behavior—creating personalized, timely, and relevant interactions at scale.",
      },
      {
        q: "How can sales analytics improve team performance?",
        a: "Sales analytics highlights performance gaps, tracks KPIs, and identifies top-performing strategies—empowering teams to focus on what drives results.",
      },
    ],

    planning: [
      {
        q: "Why is a sales plan important?",
        a: "A sales plan defines clear objectives, strategies, and performance metrics. It ensures alignment across teams and provides a roadmap to consistently achieve revenue goals.",
      },
      {
        q: "What is a sales pipeline?",
        a: "A sales pipeline represents each stage of the sales process, from prospecting to closing. It helps teams visualize opportunities, track progress, and forecast results more accurately.",
      },
      {
        q: "Why do you need a sales strategy?",
        a: "A well-defined sales strategy aligns business goals with market opportunities. It helps teams prioritize resources, identify target customers, and drive predictable growth.",
      },
      {
        q: "What is sales management?",
        a: "Sales management oversees team performance, sets targets, and optimizes sales processes. It focuses on improving efficiency, accountability, and overall revenue performance.",
      },
      {
        q: "What is sales mapping software?",
        a: "Sales mapping software visualizes customer and territory data on interactive maps, helping teams plan routes, identify new opportunities, and optimize regional coverage.",
      },
      {
        q: "How does sales forecasting help decision-making?",
        a: "Accurate forecasting enables leaders to predict revenue, manage resources effectively, and make informed strategic decisions based on real-time sales data.",
      },
      {
        q: "How can planning tools improve sales performance?",
        a: "Planning tools centralize data, track goals, and measure results. They help teams stay organized, proactive, and aligned toward achieving sales targets.",
      },
      {
        q: "What role does data play in sales planning?",
        a: "Data-driven planning allows businesses to identify trends, refine strategies, and make smarter decisions that improve conversion rates and profitability.",
      },
    ],
  },

  // ---------------- SERVICE CLOUD ----------------
  servicecloud: {
    service: [
      {
        q: "What is Service Cloud?",
        a: "Service Cloud is Salesforce’s customer service and support platform designed to help businesses deliver fast, personalized, and efficient service across every channel.",
      },
      {
        q: "What are the benefits of Service Cloud?",
        a: "Service Cloud boosts agent productivity, improves case resolution times, and enhances customer satisfaction with automation, AI, and omnichannel capabilities.",
      },
      {
        q: "How does Service Cloud support omnichannel service?",
        a: "It unifies customer interactions across email, chat, phone, social media, and more—so agents can provide consistent support from a single console.",
      },
      {
        q: "How can Service Cloud improve case management?",
        a: "Service Cloud automates case routing, tracking, and resolution. Agents get real-time access to customer data and tools to resolve issues faster.",
      },
      {
        q: "Is Service Cloud suitable for small and medium businesses?",
        a: "Yes. Service Cloud offers flexible plans and scalable tools that fit businesses of any size, helping them deliver exceptional customer service with minimal setup.",
      },
    ],
    automation: [
      {
        q: "How does automation improve customer service?",
        a: "Automation streamlines routine tasks like case assignment, escalation, and follow-ups, allowing service teams to focus on solving complex issues.",
      },
      {
        q: "What role does AI play in Service Cloud?",
        a: "AI, powered by Einstein, delivers predictive insights, automates responses, and recommends next-best actions to improve service speed and accuracy.",
      },
      {
        q: "Can Service Cloud automate customer interactions?",
        a: "Yes. Chatbots and automated workflows handle common queries instantly, reducing agent workload and improving response times.",
      },
      {
        q: "How does automation improve first-contact resolution?",
        a: "Automated knowledge suggestions and AI-driven case routing ensure that customers are connected to the right resources or agents immediately.",
      },
      {
        q: "What is the benefit of AI-powered knowledge management?",
        a: "AI helps surface relevant articles and solutions automatically, empowering both agents and customers to find accurate answers quickly.",
      },
    ],
    experience: [
      {
        q: "How does Service Cloud improve customer experience?",
        a: "Service Cloud provides personalized, connected support experiences across all channels—ensuring customers feel valued and heard at every interaction.",
      },
      {
        q: "Can customers access self-service options?",
        a: "Yes. Service Cloud includes self-service portals and knowledge bases that let customers resolve issues independently, anytime.",
      },
      {
        q: "How does Service Cloud help managers track performance?",
        a: "Real-time dashboards and analytics give leaders insight into key metrics like case volume, response time, and customer satisfaction scores.",
      },
      {
        q: "What is the Service Cloud console?",
        a: "The Service Cloud console is a unified workspace that lets agents manage multiple customer interactions efficiently within a single, intuitive interface.",
      },
      {
        q: "Can Service Cloud integrate with other business systems?",
        a: "Yes. Service Cloud integrates with CRM, ERP, and collaboration tools—creating a seamless data flow across departments to enhance customer experience.",
      },
    ],
  },

  // ---------------- MARKETING CLOUD ----------------
  marketingcloud: {
    marketing: [
      {
        q: "What is Marketing Cloud?",
        a: "Marketing Cloud is Salesforce’s digital marketing platform that helps businesses manage customer journeys, automate campaigns, and deliver personalized experiences across every channel.",
      },
      {
        q: "What are the key features of Marketing Cloud?",
        a: "Key features include email and SMS marketing, customer journey automation, audience segmentation, analytics, and AI-powered personalization through Salesforce Einstein.",
      },
      {
        q: "How does Marketing Cloud help with customer engagement?",
        a: "It enables brands to connect with customers through tailored messages and campaigns, driving stronger engagement and long-term loyalty.",
      },
      {
        q: "Can Marketing Cloud integrate with Sales Cloud and Service Cloud?",
        a: "Yes. Marketing Cloud integrates seamlessly with other Salesforce Clouds, ensuring consistent data flow and a unified customer experience across marketing, sales, and service.",
      },
      {
        q: "Is Marketing Cloud suitable for small and mid-sized businesses?",
        a: "Absolutely. Marketing Cloud offers scalable tools and flexible pricing options designed to meet the needs of both growing startups and large enterprises.",
      },
    ],
    automation: [
      {
        q: "What is marketing automation?",
        a: "Marketing automation allows businesses to streamline campaign creation, lead nurturing, and follow-ups using automated workflows and data-driven triggers.",
      },
      {
        q: "How does AI enhance Marketing Cloud automation?",
        a: "AI, powered by Salesforce Einstein, helps personalize content, predict customer behavior, and optimize campaign performance automatically.",
      },
      {
        q: "Can Marketing Cloud automate email and social campaigns?",
        a: "Yes. It automates email, social, and mobile messaging—ensuring that customers receive the right message at the right time on their preferred channel.",
      },
      {
        q: "How does automation improve ROI in marketing?",
        a: "Automation eliminates manual work, improves campaign timing, and enhances targeting accuracy—helping businesses achieve higher ROI from their marketing efforts.",
      },
      {
        q: "What are journey-based automations?",
        a: "Journey-based automations let marketers design and execute customer journeys that respond dynamically to real-time actions, preferences, and engagement patterns.",
      },
    ],
    analytics: [
      {
        q: "How does Marketing Cloud measure campaign performance?",
        a: "It provides detailed analytics on open rates, click-throughs, conversions, and ROI—helping marketers understand what’s working and where to improve.",
      },
      {
        q: "What is customer segmentation in Marketing Cloud?",
        a: "Customer segmentation divides audiences into groups based on behavior, demographics, or engagement—enabling more targeted and effective campaigns.",
      },
      {
        q: "How can AI improve marketing insights?",
        a: "AI analyzes customer data to uncover trends, predict campaign outcomes, and recommend the best actions for future marketing strategies.",
      },
      {
        q: "Does Marketing Cloud support real-time reporting?",
        a: "Yes. Marketers can track performance in real time with customizable dashboards and data visualizations, enabling faster decision-making.",
      },
      {
        q: "How can analytics improve customer retention?",
        a: "By tracking engagement and satisfaction metrics, businesses can identify churn risks early and deliver personalized retention campaigns to keep customers engaged.",
      },
    ],
  },

  // ---------------- EXPERIENCE CLOUD ----------------
  experiencecloud: {
    community: [
      {
        q: "What is Experience Cloud?",
        a: "Experience Cloud is Salesforce’s digital engagement platform that allows organizations to build branded portals, customer communities, and partner sites to enhance collaboration and engagement.",
      },
      {
        q: "Who uses Experience Cloud?",
        a: "Businesses across industries use Experience Cloud to connect with customers, partners, and employees, improving service, collaboration, and digital experiences.",
      },
      {
        q: "Does Experience Cloud integrate with Salesforce CRM?",
        a: "Yes. Experience Cloud integrates natively with Salesforce CRM, ensuring real-time data synchronization and consistent customer insights across platforms.",
      },
      {
        q: "How can Experience Cloud support partner collaboration?",
        a: "It provides secure partner portals for sharing leads, managing performance, and aligning business strategies, strengthening partner relationships and productivity.",
      },
      {
        q: "What customization options are available?",
        a: "Experience Cloud offers flexible customization using Experience Builder and Lightning components, allowing you to design fully branded and interactive digital experiences.",
      },
    ],
    engagement: [
      {
        q: "What are the benefits of Experience Cloud?",
        a: "Experience Cloud helps businesses deliver personalized, data-driven experiences that boost engagement, satisfaction, and brand loyalty across all digital touchpoints.",
      },
      {
        q: "How does Experience Cloud improve customer engagement?",
        a: "By enabling self-service portals, community forums, and AI-powered recommendations, Experience Cloud enhances customer interactions and builds long-term trust.",
      },
      {
        q: "Can Experience Cloud integrate with third-party apps?",
        a: "Yes. It supports API integrations, MuleSoft, and AppExchange apps to extend functionality and connect seamlessly with other business systems.",
      },
      {
        q: "Is Experience Cloud secure?",
        a: "Absolutely. It uses Salesforce’s enterprise-grade security with role-based access, authentication, and encrypted data protection.",
      },
      {
        q: "Can I measure engagement performance?",
        a: "Yes. Experience Cloud includes analytics dashboards that track engagement metrics, helping teams measure impact and optimize community performance.",
      },
    ],
  },
  // ---------------- Health CLOUD ----------------
  healthcloud: {
    overview: [
      {
        q: "What is Health Cloud?",
        a: "Health Cloud is Salesforce’s healthcare CRM platform that centralizes patient data, streamlines communication, and enhances care coordination across providers, payers, and partners.",
      },
      {
        q: "Who can use Health Cloud?",
        a: "Health Cloud is designed for healthcare providers, payers, pharmaceutical companies, and medical device organizations to improve engagement and care outcomes.",
      },
      {
        q: "How does Health Cloud improve patient management?",
        a: "It unifies clinical and non-clinical data into a single view, helping care teams deliver personalized, connected experiences throughout the patient journey.",
      },
      {
        q: "Is Health Cloud HIPAA compliant?",
        a: "Yes. Health Cloud adheres to HIPAA, GDPR, and other healthcare regulations, ensuring patient data is protected with enterprise-grade security.",
      },
    ],

    automation: [
      {
        q: "What automation features does Health Cloud offer?",
        a: "Health Cloud automates workflows such as appointment scheduling, care plan updates, patient outreach, and follow-ups, reducing manual effort for staff.",
      },
      {
        q: "How does AI enhance Health Cloud’s capabilities?",
        a: "AI-powered insights identify care gaps, predict readmissions, and recommend next best actions—helping providers make faster, more informed decisions.",
      },
      {
        q: "Can Health Cloud integrate with EHR systems?",
        a: "Yes. Health Cloud connects with major EHR systems through APIs and integration tools like MuleSoft to provide a comprehensive view of patient information.",
      },
      {
        q: "How does automation improve patient engagement?",
        a: "Automated reminders, surveys, and personalized communication help patients stay informed and engaged in their care plans.",
      },
    ],

    analytics: [
      {
        q: "What analytics tools are available in Health Cloud?",
        a: "Health Cloud offers analytics dashboards to track patient outcomes, care team performance, and operational efficiency in real time.",
      },
      {
        q: "How can predictive analytics improve healthcare delivery?",
        a: "Predictive analytics identifies high-risk patients and enables early intervention, leading to better outcomes and reduced readmission rates.",
      },
      {
        q: "Can I customize Health Cloud dashboards?",
        a: "Yes. You can build custom dashboards using Salesforce’s analytics tools to monitor KPIs and visualize data tailored to your organization’s goals.",
      },
      {
        q: "How does Health Cloud support data-driven decisions?",
        a: "By combining AI insights and real-time data, Health Cloud empowers care teams and administrators to make informed, evidence-based decisions.",
      },
    ],
  },
  // ---------------- Revenue CLOUD ----------------

  revenuecloud: {
    overview: [
      {
        q: "What is Revenue Cloud?",
        a: "Revenue Cloud is Salesforce’s unified platform that connects sales, partner management, and billing systems to streamline the entire quote-to-cash process.",
      },
      {
        q: "Who benefits from using Revenue Cloud?",
        a: "Revenue Cloud is ideal for B2B, SaaS, and subscription-based businesses that need to simplify pricing, accelerate deal cycles, and ensure revenue accuracy.",
      },
      {
        q: "How does Revenue Cloud support quote-to-cash automation?",
        a: "It automates pricing, quoting, order management, and billing, creating a seamless flow from opportunity to revenue recognition.",
      },
      {
        q: "Can Revenue Cloud integrate with existing ERP or CRM systems?",
        a: "Yes. Revenue Cloud integrates with Salesforce CRM and ERP systems through APIs and MuleSoft, ensuring smooth data synchronization across platforms.",
      },
    ],

    cpq_billing: [
      {
        q: "What is Salesforce CPQ and how does it work?",
        a: "Salesforce CPQ (Configure, Price, Quote) helps sales teams quickly create accurate quotes, manage complex pricing, and automate approval workflows.",
      },
      {
        q: "How does Revenue Cloud handle subscription billing?",
        a: "Revenue Cloud supports flexible billing models — including subscriptions, usage-based, and milestone billing — all managed from a unified dashboard.",
      },
      {
        q: "What role does Revenue Recognition play in Revenue Cloud?",
        a: "Revenue Recognition automates compliance with ASC 606 and IFRS 15, ensuring accurate financial reporting and reducing manual effort.",
      },
      {
        q: "Can I manage renewals and amendments in Revenue Cloud?",
        a: "Yes. Revenue Cloud streamlines contract renewals, upsells, and amendments, maintaining a single source of truth for customer lifecycle data.",
      },
    ],

    analytics: [
      {
        q: "What analytics tools are available in Revenue Cloud?",
        a: "Revenue Cloud provides real-time dashboards to monitor revenue performance, deal velocity, and customer billing trends.",
      },
      {
        q: "How does AI help improve sales forecasting in Revenue Cloud?",
        a: "AI analyzes past deals, pricing behavior, and customer data to deliver predictive insights that improve forecasting accuracy and pricing optimization.",
      },
      {
        q: "Can I customize reports and dashboards?",
        a: "Yes. You can create tailored dashboards to track KPIs such as deal volume, churn rate, and revenue growth for better decision-making.",
      },
      {
        q: "How does Revenue Cloud enhance financial visibility?",
        a: "It provides a unified view of sales, finance, and customer data, enabling transparent revenue tracking across all channels and business models.",
      },
    ],
  },
  // --------------------------CPQ Cloud-----------------------
  cpq: {
    overview: [
      {
        q: "What is Salesforce CPQ?",
        a: "Salesforce CPQ (Configure, Price, Quote) is a powerful tool that helps sales teams quickly generate accurate quotes, manage complex pricing models, and automate approvals—directly within Salesforce.",
      },
      {
        q: "Who benefits from using Salesforce CPQ?",
        a: "Salesforce CPQ is ideal for organizations with complex products, variable pricing structures, or approval workflows, helping sales teams work faster and smarter.",
      },
      {
        q: "How does Salesforce CPQ integrate with CRM?",
        a: "CPQ is built natively on the Salesforce platform, enabling seamless integration with Sales Cloud, Service Cloud, and Revenue Cloud for a unified quote-to-cash experience.",
      },
      {
        q: "Is Salesforce CPQ suitable for subscription-based businesses?",
        a: "Yes. CPQ supports subscription and usage-based pricing models, making it ideal for SaaS, telecom, and manufacturing industries.",
      },
    ],

    pricing: [
      {
        q: "What are the key features of Salesforce CPQ pricing automation?",
        a: "CPQ automates pricing rules, discount approvals, and bundling, ensuring consistent and accurate quotes across sales channels.",
      },
      {
        q: "How does Salesforce CPQ handle product configurations?",
        a: "It enables guided selling, product rules, and dynamic configurations to ensure that only valid product combinations are quoted.",
      },
      {
        q: "Can CPQ manage discounts and approvals automatically?",
        a: "Yes. CPQ applies discount rules automatically and triggers approval workflows when specific thresholds or conditions are met.",
      },
      {
        q: "Does Salesforce CPQ support multi-currency or region-based pricing?",
        a: "Absolutely. CPQ supports global operations with multi-currency, localization, and tax management features for international sales teams.",
      },
    ],

    integration: [
      {
        q: "How does Salesforce CPQ connect with billing and revenue systems?",
        a: "Salesforce CPQ integrates with Revenue Cloud to manage billing, renewals, and revenue recognition in one connected process.",
      },
      {
        q: "Can CPQ integrate with ERP systems?",
        a: "Yes. CPQ connects with ERP systems using MuleSoft or APIs to sync inventory, pricing, and fulfillment data seamlessly.",
      },
      {
        q: "How does CPQ support contract renewals and amendments?",
        a: "CPQ automates renewals, upsells, and amendments, maintaining visibility into the entire customer lifecycle without manual tracking.",
      },
      {
        q: "What kind of analytics are available in Salesforce CPQ?",
        a: "CPQ provides dashboards for quote performance, discount trends, and revenue forecasting—helping sales and finance teams make informed decisions.",
      },
    ],
  },
  // ---------------------Data Cloud -------------------------------------
  datacloud: {
    overview: [
      {
        q: "What is Salesforce Data Cloud?",
        a: "Salesforce Data Cloud is a real-time data platform that unifies all your customer data from any source, enabling personalized experiences and actionable insights across every Salesforce application.",
      },
      {
        q: "How does Data Cloud differ from a traditional data warehouse?",
        a: "Unlike static data warehouses, Data Cloud ingests, harmonizes, and activates data in real time—allowing marketers, sales, and service teams to act instantly on customer behavior.",
      },
      {
        q: "What types of data can be integrated into Data Cloud?",
        a: "Data Cloud supports structured and unstructured data from CRMs, web analytics, marketing platforms, ERP systems, and external APIs—providing a single source of truth for customer data.",
      },
      {
        q: "Is Data Cloud part of the Salesforce Customer 360 platform?",
        a: "Yes. Data Cloud is the foundation of Customer 360, connecting customer data across all Salesforce Clouds to deliver a unified, intelligent, and secure data ecosystem.",
      },
    ],

    governance: [
      {
        q: "How does Data Cloud ensure data quality and accuracy?",
        a: "Data Cloud uses automated data harmonization, identity resolution, and deduplication to maintain clean, consistent, and trustworthy data across all connected systems.",
      },
      {
        q: "What security and compliance features are available in Data Cloud?",
        a: "Salesforce Data Cloud is built on the trusted Salesforce platform with compliance for GDPR, CCPA, HIPAA, and ISO standards. It includes robust role-based access control and encryption.",
      },
      {
        q: "How does identity resolution work in Data Cloud?",
        a: "Identity resolution automatically links customer records across different systems by matching identifiers, creating a unified, real-time customer profile that powers personalized engagement.",
      },
      {
        q: "Can Data Cloud handle consent and privacy management?",
        a: "Yes. Data Cloud provides consent tracking, data lineage, and privacy management capabilities—ensuring compliance and transparency in customer data handling.",
      },
    ],

    activation: [
      {
        q: "How can teams activate insights from Data Cloud?",
        a: "Teams can activate Data Cloud insights across Salesforce applications like Marketing Cloud, Sales Cloud, and Service Cloud to deliver personalized and context-aware experiences in real time.",
      },
      {
        q: "How does Data Cloud leverage AI and Einstein?",
        a: "Data Cloud powers Einstein AI with unified, high-quality data, enabling predictive analytics, segmentation, and personalized recommendations at scale.",
      },
      {
        q: "Can Data Cloud integrate with external analytics tools?",
        a: "Yes. Data Cloud can connect with analytics platforms such as Tableau, Snowflake, and external data lakes through native connectors and APIs for advanced reporting and visualization.",
      },
      {
        q: "What are the benefits of real-time data activation?",
        a: "Real-time activation enables instant personalization, dynamic campaign optimization, and improved decision-making—ensuring every customer interaction is timely and relevant.",
      },
    ],
  },
  // -----------------------Agentforce ---------------------------------
  agentforce: {
    overview: [
      {
        q: "What is Salesforce Agentforce?",
        a: "Agentforce is Salesforce’s AI-powered platform designed to enhance customer service productivity. It unifies data, automates workflows, and delivers intelligent, real-time insights to empower agents and improve customer satisfaction.",
      },
      {
        q: "How does Agentforce help service teams?",
        a: "Agentforce assists service teams by automating routine tasks, providing AI-driven recommendations, and centralizing customer data — helping agents resolve cases faster and deliver more personalized support.",
      },
      {
        q: "Is Agentforce part of Service Cloud?",
        a: "Yes, Agentforce is built into Salesforce Service Cloud. It extends the platform’s capabilities with AI, automation, and predictive analytics to make every service interaction smarter and more efficient.",
      },
      {
        q: "What industries can benefit from Agentforce?",
        a: "Agentforce supports industries like financial services, healthcare, retail, manufacturing, and telecommunications — anywhere customer service efficiency and personalization are essential.",
      },
      {
        q: "How does Univmaa ensure data security and compliance during deployment?",
        a: " At Univmaa, we prioritize data governance and compliance. Agentforce implementations are aligned with GDPR, FEDRAMP, and the India Privacy Act, ensuring that your operations remain secure and compliant with global standards.",
      },
    ],

    productivity: [
      {
        q: "How does Agentforce improve agent productivity?",
        a: "Agentforce uses AI to automatically summarize interactions, suggest next best actions, and auto-generate responses — reducing manual effort and helping agents focus on complex issues.",
      },
      {
        q: "Can Agentforce automate repetitive tasks?",
        a: "Yes. Agentforce automates common workflows like case classification, ticket routing, and knowledge base lookups, ensuring faster resolution times and reduced operational costs.",
      },
      {
        q: "What are AI Workflows in Agentforce?",
        a: "AI Workflows enable dynamic automation triggered by customer data and interactions. They allow teams to build intelligent service processes without extensive coding.",
      },
      {
        q: "Can Agentforce integrate with third-party systems?",
        a: "Yes. Agentforce integrates seamlessly with external platforms such as Slack, Microsoft Teams, and CRM or ERP systems to streamline collaboration and data sharing.",
      },
    ],

    intelligence: [
      {
        q: "How does AI assist agents in real time?",
        a: "Agentforce AI provides contextual insights and recommendations directly within the agent workspace, helping them respond faster and more effectively to customer needs.",
      },
      {
        q: "What is the role of Einstein in Agentforce?",
        a: "Einstein powers Agentforce with natural language processing, predictive intelligence, and automation capabilities, enabling smarter customer interactions at scale.",
      },
      {
        q: "Can Agentforce improve customer satisfaction metrics?",
        a: "Yes. By enabling faster resolutions, accurate responses, and proactive engagement, Agentforce significantly improves CSAT, NPS, and first-contact resolution rates.",
      },
      {
        q: "Is Agentforce secure and compliant?",
        a: "Absolutely. Agentforce runs on the Salesforce Trust platform, adhering to global compliance standards like GDPR, HIPAA, and ISO 27001 to protect customer and organizational data.",
      },
    ],
  },
  // -----------------------Tableau----------------------------------------
  tableau: {
    overview: [
      {
        q: "What is Salesforce Tableau?",
        a: "Salesforce Tableau is a powerful analytics and visualization platform that helps organizations understand data, uncover insights, and make data-driven decisions with ease.",
      },
      {
        q: "How does Tableau differ from other BI tools?",
        a: "Tableau stands out for its intuitive interface, interactive dashboards, and real-time visual analytics — allowing users to explore and interpret data without requiring advanced technical expertise.",
      },
      {
        q: "What are the main capabilities of Tableau?",
        a: "Tableau offers data visualization, advanced analytics, AI-powered insights, embedded dashboards, and seamless integration with Salesforce and external data sources.",
      },
      {
        q: "Is Tableau part of the Salesforce ecosystem?",
        a: "Yes. Tableau is a core part of Salesforce’s analytics suite, connecting directly with Data Cloud, Sales Cloud, and Service Cloud to unify insights across the entire customer journey.",
      },
    ],

    integration: [
      {
        q: "Can Tableau integrate with Salesforce data?",
        a: "Yes. Tableau natively connects with Salesforce data, allowing users to visualize CRM metrics, track performance KPIs, and combine data from multiple Salesforce Clouds.",
      },
      {
        q: "What external data sources does Tableau support?",
        a: "Tableau connects to a wide range of sources — including SQL databases, spreadsheets, cloud data warehouses, and APIs — enabling a 360° view of business data.",
      },
      {
        q: "How does Tableau handle real-time analytics?",
        a: "Tableau supports live data connections, enabling real-time dashboards that automatically update as data changes — keeping decision-makers informed at every moment.",
      },
      {
        q: "Can Tableau dashboards be embedded in Salesforce?",
        a: "Yes. Tableau dashboards can be embedded directly into Salesforce pages, allowing teams to view analytics and insights without switching between platforms.",
      },
    ],

    insights: [
      {
        q: "How does Tableau use AI for analytics?",
        a: "Tableau leverages Einstein Discovery and AI models to provide automated insights, trend detection, and predictive analytics — helping users uncover patterns they might miss manually.",
      },
      {
        q: "What are the benefits of predictive analytics in Tableau?",
        a: "Predictive analytics allows users to forecast outcomes, identify risks, and optimize decisions — driving more proactive and strategic business actions.",
      },
      {
        q: "How does Tableau ensure data security and governance?",
        a: "Tableau follows enterprise-grade security protocols, including role-based access control, encryption, and integration with Salesforce Shield for compliance and governance.",
      },
      {
        q: "Can Tableau be used for self-service analytics?",
        a: "Yes. Tableau empowers business users with drag-and-drop tools and guided AI insights, reducing dependency on IT and enabling faster, data-driven decision-making.",
      },
    ],
  },
  // -------------------------Mulesoft-------------------------------------
  mulesoft: {
    overview: [
      {
        q: "What is MuleSoft?",
        a: "MuleSoft is Salesforce’s integration and automation platform that connects applications, data, and systems across the enterprise — enabling seamless digital experiences and unified data flow.",
      },
      {
        q: "What is the MuleSoft Anypoint Platform?",
        a: "The MuleSoft Anypoint Platform is a unified integration platform for APIs, data, and automation. It allows organizations to design, build, and manage APIs and integrations securely at scale.",
      },
      {
        q: "How does MuleSoft enhance Salesforce integration?",
        a: "MuleSoft connects Salesforce with on-premise and cloud systems, creating a unified data ecosystem that powers personalized experiences, automation, and AI-driven insights.",
      },
      {
        q: "Who can benefit from MuleSoft integration?",
        a: "MuleSoft benefits IT, operations, sales, service, and marketing teams by connecting data silos and streamlining business processes across multiple systems and applications.",
      },
    ],

    apiManagement: [
      {
        q: "What is API-led connectivity?",
        a: "API-led connectivity is MuleSoft’s structured approach to integration — creating reusable, modular APIs for systems, processes, and experiences to enable agility and scalability.",
      },
      {
        q: "How does MuleSoft manage APIs securely?",
        a: "MuleSoft provides full lifecycle API management, including design, deployment, monitoring, and access control with OAuth, JWT, and policy enforcement to ensure security and compliance.",
      },
      {
        q: "Can MuleSoft integrate with legacy systems?",
        a: "Yes. MuleSoft can connect modern cloud applications with older, on-premise legacy systems through connectors, APIs, and data transformation layers — ensuring backward compatibility.",
      },
      {
        q: "How does MuleSoft support automation?",
        a: "MuleSoft supports automation by triggering workflows across systems using APIs, event-driven architecture, and integration flows built through Anypoint Studio.",
      },
    ],

    security: [
      {
        q: "How does MuleSoft ensure data security and compliance?",
        a: "MuleSoft provides enterprise-grade security with encryption, access control, and compliance with regulations like GDPR, HIPAA, and ISO 27001. It also supports secure data transmission using TLS.",
      },
      {
        q: "What is Anypoint Security?",
        a: "Anypoint Security offers advanced features like data loss prevention, tokenization, and perimeter security to protect APIs and sensitive business data across all integrations.",
      },
      {
        q: "Can MuleSoft scale for large enterprise workloads?",
        a: "Yes. MuleSoft’s cloud-native architecture and horizontal scalability make it ideal for enterprise environments requiring high performance, availability, and reliability.",
      },
      {
        q: "How does MuleSoft support real-time data integration?",
        a: "MuleSoft enables real-time data synchronization across systems using event-driven APIs, webhooks, and streaming integrations, ensuring instant access to up-to-date information.",
      },
    ],
  },
  // -------------------------Salesforce Advisory--------------------------------
  salesforceadvisory: {
    overview: [
      {
        q: "What are Salesforce Advisory Services?",
        a: "Salesforce Advisory Services provide expert consulting to help organizations plan, implement, and optimize Salesforce solutions. They ensure technology aligns with business goals, enabling transformation and measurable ROI.",
      },
      {
        q: "Why are advisory services important for Salesforce success?",
        a: "Advisory services bridge the gap between business strategy and technology. They help companies maximize the value of Salesforce through tailored roadmaps, best practices, and data-driven insights.",
      },
      {
        q: "Who benefits from Salesforce Advisory Services?",
        a: "Businesses of all sizes benefit — from startups implementing Salesforce for the first time to enterprises modernizing their digital strategy and improving CRM performance.",
      },
      {
        q: "What makes Salesforce Advisory different from standard implementation?",
        a: "Advisory services focus on strategy, governance, and optimization — not just deployment. Consultants help define KPIs, streamline processes, and guide long-term digital growth.",
      },
    ],

    strategy: [
      {
        q: "How does a Salesforce Advisory engagement start?",
        a: "It begins with an assessment of your current business processes and Salesforce setup. Consultants then design a strategy aligned with your goals, timelines, and scalability requirements.",
      },
      {
        q: "Can advisory consultants help with digital transformation?",
        a: "Yes. Salesforce advisors help organizations adopt a data-first approach, automate workflows, and build a connected ecosystem across sales, marketing, and service operations.",
      },
      {
        q: "What industries can benefit from Salesforce Advisory Services?",
        a: "Advisory services are industry-agnostic, supporting sectors like finance, healthcare, retail, education, and manufacturing with tailored Salesforce strategies.",
      },
      {
        q: "How do advisory experts measure success?",
        a: "Consultants define measurable success metrics — such as adoption rates, process efficiency, customer satisfaction, and ROI — and track them throughout implementation.",
      },
    ],

    innovation: [
      {
        q: "How do advisory services use AI and analytics?",
        a: "Salesforce advisors leverage tools like Einstein Analytics and Tableau to uncover insights, automate predictions, and guide smarter decision-making across the organization.",
      },
      {
        q: "Can advisory consultants support multi-cloud strategies?",
        a: "Yes. Advisory experts help integrate and align multiple Salesforce Clouds — such as Sales, Service, and Marketing — to deliver a unified customer experience.",
      },
      {
        q: "Do Salesforce Advisory Services include change management?",
        a: "Absolutely. Consultants provide change enablement, training, and adoption programs to ensure teams embrace new Salesforce processes successfully.",
      },
      {
        q: "How can advisory services drive continuous improvement?",
        a: "Advisory partners conduct ongoing performance reviews, recommend enhancements, and ensure Salesforce evolves with your business and market demands.",
      },
    ],
  },
  // ------------------------salesforceimplementation-----------------------------
  salesforceimplementation: {
    overview: [
      {
        q: "What are Salesforce Implementation Services?",
        a: "Salesforce Implementation Services help organizations design, configure, and deploy Salesforce solutions that align with their business goals. They ensure a seamless transition from planning to execution.",
      },
      {
        q: "Why is professional Salesforce implementation important?",
        a: "Expert implementation ensures your Salesforce system is set up correctly, optimized for your workflows, and scalable for future growth — reducing risk and improving ROI.",
      },
      {
        q: "Who provides Salesforce implementation support?",
        a: "Certified Salesforce consultants and partners guide the entire process — from business analysis and customization to data migration, integration, and user training.",
      },
      {
        q: "How long does Salesforce implementation take?",
        a: "The timeline depends on the project's scope and complexity. Smaller projects may take a few weeks, while enterprise-wide deployments can span several months.",
      },
    ],

    process: [
      {
        q: "What are the key stages of Salesforce implementation?",
        a: "A typical implementation includes discovery, system design, configuration, data migration, integration, testing, training, and post-launch support.",
      },
      {
        q: "How do consultants ensure a successful Salesforce rollout?",
        a: "Consultants follow best practices, agile methodologies, and Salesforce’s implementation framework to deliver predictable, measurable outcomes.",
      },
      {
        q: "How is data migration handled during implementation?",
        a: "Data is carefully analyzed, cleaned, and mapped to ensure accuracy and integrity before being migrated to Salesforce using secure tools and processes.",
      },
      {
        q: "Can implementation be customized for unique business needs?",
        a: "Yes. Every implementation is tailored to match your business processes, regulatory requirements, and customer engagement strategies.",
      },
    ],

    optimization: [
      {
        q: "What happens after Salesforce implementation is complete?",
        a: "Post-implementation, consultants monitor performance, fine-tune configurations, and provide ongoing support to ensure continued success.",
      },
      {
        q: "Can implementation services include integration with third-party tools?",
        a: "Yes. Salesforce can be integrated with ERP, marketing, analytics, and communication tools to create a connected digital ecosystem.",
      },
      {
        q: "How do implementation experts ensure user adoption?",
        a: "Through change management, training, and continuous user support, consultants ensure teams confidently adopt the Salesforce platform.",
      },
      {
        q: "What role does testing play in the implementation process?",
        a: "Testing validates that configurations, workflows, and integrations function correctly — reducing risks and ensuring a smooth go-live experience.",
      },
    ],
  },
};

/**
 * 2️⃣ Tabs per Cloud
 */
const faqTabs = {
  salescloud: [
    { key: "sales", label: "Sales FAQs" },
    { key: "automation", label: "Automation & AI FAQs" },
    { key: "planning", label: "Planning & Forecasting" },
  ],
  servicecloud: [
    { key: "service", label: "Service Cloud FAQs" },
    { key: "automation", label: "Automation & AI" },
    { key: "experience", label: "Customer Experience" },
  ],
  marketingcloud: [
    { key: "marketing", label: "Marketing Overview" },
    { key: "automation", label: "Automation & AI" },
    { key: "analytics", label: "Analytics & Performance" },
  ],
  experiencecloud: [
    { key: "community", label: "Community & Collaboration" },
    { key: "engagement", label: "Engagement & Empowerment" },
  ],
  healthcloud: [
    { key: "overview", label: "Overview & Care Management" },
    { key: "automation", label: "Automation & Integration" },
    { key: "analytics", label: "Analytics & Intelligence" },
  ],
  revenuecloud: [
    { key: "overview", label: "Overview & Integration" },
    { key: "cpq_billing", label: "CPQ & Billing" },
    { key: "analytics", label: "Analytics & Forecasting" },
  ],
  cpq: [
    { key: "overview", label: "Overview & Benefits" },
    { key: "pricing", label: "Pricing & Configuration" },
    { key: "integration", label: "Integration & Analytics" },
  ],
  datacloud: [
    { key: "overview", label: "Overview & Architecture" },
    { key: "governance", label: "Data Governance & Security" },
    { key: "activation", label: "Activation & Intelligence" },
  ],
  agentforce: [
    { key: "overview", label: "Overview & Features" },
    { key: "productivity", label: "Agent Productivity & Automation" },
    { key: "intelligence", label: "AI & Intelligence" },
  ],
  tableau: [
    { key: "overview", label: "Overview & Capabilities" },
    { key: "integration", label: "Integration & Analytics" },
    { key: "insights", label: "AI & Insights" },
  ],
  mulesoft: [
    { key: "overview", label: "Overview & Capabilities" },
    { key: "apiManagement", label: "API Management & Integration" },
    { key: "security", label: "Security & Compliance" },
  ],
  salesforceadvisory: [
    { key: "overview", label: "Overview & Purpose" },
    { key: "strategy", label: "Strategy & Execution" },
    { key: "innovation", label: "Innovation & Optimization" },
  ],
  salesforceimplementation: [
    { key: "overview", label: "Overview & Importance" },
    { key: "process", label: "Process & Methodology" },
    { key: "optimization", label: "Optimization & Support" },
  ],
};

/**
 * 3️⃣ Cloud Page Headings
 */
const cloudHeadings = {
  salescloud: "Sales Cloud FAQs",
  servicecloud: "Service Cloud FAQs",
  marketingcloud: "Marketing Cloud FAQs",
  experiencecloud: "Experience Cloud FAQs",
  healthcloud: "Health Cloud FAQs",
  revenuecloud: "Revenue Cloud FAQs",
  cpq: "Salesforce CPQ FAQs",
  datacloud: "Salesforce Data Cloud FAQs",
  agentforce: "Salesforce AgentForce FAQs",
  tableau: "Salesforce Tableau FAQs",
  mulesoft: "Salesforce Mulesoft FAQs",
  salesforceadvisory: "Salesforce Advisory FAQs",
  salesforceimplementation: "Salesforce Implementation  FAQs",
};

/**
 * 4️⃣ Component
 */
export default function FaqDynamic() {
  const location = useLocation();
  const path = location.pathname.replace("/", "").toLowerCase() || "salescloud";
  const currentCloud = faqData[path] ? path : "salescloud";

  const [activeTab, setActiveTab] = useState(faqTabs[currentCloud][0].key);
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (i) => setOpenIndex(openIndex === i ? null : i);

  const tabs = faqTabs[currentCloud];
  const data = faqData[currentCloud][activeTab] || [];
  const heading = cloudHeadings[currentCloud] || "Salesforce FAQs";

  return (
    <section className="bg-white text-gray-900 lg:mt-[-60px] py-16 px-6 md:px-20">
      {/* 🔹 Static Page Heading (does not change when switching tabs) */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 text-[#032D60]">
        {heading}
      </h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-10 border-b border-gray-300 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key);
              setOpenIndex(null);
            }}
            className={`pb-3 text-lg font-semibold transition-colors ${
              activeTab === tab.key
                ? "text-[#0176D3] border-b-4 border-[#0176D3]"
                : "text-black hover:text-[#0176D3]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center text-left font-semibold text-lg hover:text-blue-500 text-[#032D60] focus:outline-none px-5 py-4 hover:bg-gray-50 transition-colors"
            >
              {item.q}
              <motion.span
                animate={{ rotate: openIndex === index ? 45 : 0 }}
                transition={{ duration: 0.25 }}
                className="text-[#0176D3] text-2xl"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 text-black font-medium leading-relaxed bg-white">
                    {item.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
