// Global Translation Logic
const translations = {
    en: {
        // Navigation
        "nav_home": "Home",
        "nav_portfolio": "Portfolio",
        "nav_services": "Services",
        "nav_pricing": "Pricing",
        "nav_about": "About",
        "nav_product": "Product",
        "nav_contact": "Contact",
        "nav_tutorials": "Tutorials",
        "nav_web_app": "Web & App",
        "btn_ask_ai": "Ask AI",
        "tut_eyebrow": "Free Knowledge",
        "tut_hero_title": "Tutorials & Templates",
        "tut_hero_subtitle": "Real setups. Honest breakdowns. Follow along on Instagram and YouTube.",
        "tut_stat_1": "Episodes",
        "tut_stat_2": "Free Templates",
        "tut_stat_3": "Platforms",
        "tut_tab_episodes": "Episodes",
        "tut_tab_templates": "Free Templates",
        "tut_follow_eyebrow": "Follow Along",
        "tut_follow_title": "The Channel — @lunexolabs",
        "tut_follow_desc": "AI moves fast. Blink once and you've already missed something useful. Follow to stay ahead.",
        "tut_ig_platform": "Instagram",
        "tut_ig_desc": "Short Reels — AI tools, setup tips, organization systems. 30–60 seconds. Fast and useful.",
        "tut_yt_platform": "YouTube",
        "tut_yt_desc": "Full setup guides, walkthroughs, and deep dives. No fluff. No sponsors. Just real builds.",
        "tut_follow_btn": "Follow",
        "tut_subscribe_btn": "Subscribe",
        "tut_ep_eyebrow": "All Episodes",
        "tut_ep_title": "Watch & Learn",
        "tut_ep_subtitle": "From channel intro to full AI system setups — every episode is a real build, not a demo.",
        "tut_watch_ig": "Watch on Instagram",
        "tut_watch_yt": "Watch on YouTube",
        "tut_coming_soon": "Coming Soon",
        "ep000_title": "Blink Once. You Missed It.",
        "ep000_desc": "Channel intro. AI moves so fast — blink once and you've already missed something useful. This is my personal journey through the tools I actually use.",
        "ep001_title": "Obsidian + OpenClaw Setup",
        "ep001_desc": "Build a second brain that your AI can actually read. Obsidian vault structure + OpenClaw integration from scratch.",
        "ep002_title": "Telegram Lead Notifier",
        "ep002_desc": "Stop losing leads while you sleep. n8n workflow that pings your Telegram the moment a new lead arrives — with all the details formatted.",
        "ep003_title": "Email Auto-Reply in 3 Seconds",
        "ep003_desc": "Reply to every inquiry in under 3 seconds — automatically. n8n email auto-reply flow with AI personalization.",
        "ep004_title": "Stop the Email Tennis",
        "ep004_desc": "Appointment booking bot that handles scheduling automatically. No more back-and-forth — just a confirmed time in your calendar.",
        "ep005_title": "Website Down? You'll Know First",
        "ep005_desc": "Automated website monitor that checks your pages every 15 minutes and alerts you the moment anything goes down.",
        "ep006_title": "AI Lead Qualifier",
        "ep006_desc": "OpenClaw + n8n: AI scores every lead before you even open your inbox. Detects urgency, budget signals, and drafts a personalized reply.",
        "ep007_title": "Your Own AI in 15 Minutes",
        "ep007_desc": "One curl command. 15 minutes. Personal AI assistant running in your Telegram — on your own machine, no subscriptions, no cloud.",
        "ep008_title": "The Organization Revolution",
        "ep008_desc": "Normal work is over. Everyone has the same tools. The differentiator now is HOW you organize around them — Skills files, Obsidian, second brain.",
        "tut_tpl_title": "Free Automation Templates",
        "tut_tpl_subtitle": "Download, import into n8n, and run. All templates are free — no email required.",
        "tut_cta_title": "Need a Custom Workflow?",
        "tut_cta_desc": "Templates are a starting point. If you need something tailored to your business — a custom n8n pipeline, OpenClaw deployment, or full automation strategy — let's build it together.",
        "tut_cta_btn": "Get in Touch",
        "btn_free_guide": "Free Install Guide",
        
        // Hero
        "hero_title_1": "Dynamic Action",
        "hero_title_2": "Brand Stories",
        "hero_title_3": "Cinematic Shots",
        "hero_title_4": "Stunning Vistas",
        "hero_btn_portfolio": "Portfolio",
        "hero_btn_more": "See more",

        // Services
        // Services
        "services_title": "We deliver you the view you deserve.",
        "services_desc": "Cinematic shots from ground to sky – with FPV drones and classic cameras. Filmed, edited, and optimized in one seamless flow.",
        
        // Video Services (Restored + New)
        "service_1_title": "FPV flight",
        "service_1_desc": "Capturing the moment up in a free flight",
        "service_2_title": "Digital Marketing", 
        "service_2_desc": "Capturing Products",
        "service_3_title": "Survey flights",
        "service_3_desc": "Capturing the moment from above",
        
        "service_ai_title": "AI Video",
        "service_ai_desc": "Enhanced with Artificial Intelligence",
        "service_clip_title": "Clipping",
        "service_clip_desc": "Short form content for social media",

        // Digital Services (New Section)
        "section_digital_title": "Web/App & Automation",
        "section_digital_desc": "Digital solutions for the modern age.",
        "service_web_title": "Web Design",
        "service_web_desc": "Custom, responsive websites.",
        "service_app_title": "App Design",
        "service_app_desc": "User-centric mobile applications.",
        "service_auto_title": "Automation",
        "service_auto_desc": "Streamline workflows and save time.",

        "service_time_approx": "Approx.",

        // Pricing
        "pricing_title": "Flexible Pricing for Every Vision",
        "pricing_1_title": "FPV Drone",
        "pricing_1_desc_1": "Dynamic, high-speed footage",
        "pricing_1_desc_2": "Indoor and outdoor flights",
        "pricing_1_desc_3": "4K cinematic quality",
        "pricing_1_desc_4": "Professional pilot",
        "pricing_2_title": "Standard Drone",
        "pricing_2_desc_1": "Smooth, stabilized shots",
        "pricing_2_desc_2": "Aerial photography",
        "pricing_2_desc_3": "Real estate and events",
        "pricing_2_desc_4": "4K cinematic quality",
        "pricing_3_title": "Video Design / Marketing",
        "pricing_3_desc_1": "Social media campaigns",
        "pricing_3_desc_2": "Content creation",
        "pricing_3_desc_3": "Video editing",
        "pricing_3_desc_4": "Brand strategy",

        "pricing_clip_title": "Clipping",
        "pricing_clip_price": "from 150€",
        "pricing_clip_desc_1": "TikToks / Reels",
        "pricing_clip_desc_2": "Viral Trimming",
        "pricing_clip_desc_3": "Subtitles & Hooks",
        "pricing_clip_desc_4": "Fast Turnaround",

        "pricing_ai_title": "AI Video",
        "pricing_ai_price": "from 350€",
        "pricing_ai_desc_1": "Style Transfer & GenAI",
        "pricing_ai_desc_2": "Custom Voiceovers",
        "pricing_ai_desc_3": "AI Scene Generation",
        "pricing_ai_desc_4": "Model Training",

        "pricing_web_title": "Web Design",
        "pricing_web_price": "from 1200€",
        "pricing_web_desc_1": "Responsive Design",
        "pricing_web_desc_2": "SEO Optimization",
        "pricing_web_desc_3": "CMS Integration",
        "pricing_web_desc_4": "Custom Graphics",

        "pricing_app_title": "App Design",
        "pricing_app_price": "Request Quote",
        "pricing_app_sub": "Est. 2k€ - 10k€",
        "pricing_app_desc_1": "UX/UI Prototyping",
        "pricing_app_desc_2": "Interactive Mockups",
        "pricing_app_desc_3": "User Flow Design",
        "pricing_app_desc_4": "Design System",

        "pricing_auto_title": "Automation",
        "pricing_auto_price": "from 500€",
        "pricing_auto_desc_1": "Workflow Analysis",
        "pricing_auto_desc_2": "Zapier/Make Integra.",
        "pricing_auto_desc_3": "Chatbot Setup",
        "pricing_auto_desc_4": "CRM Connections",

        // Location
        "location_title": "Located in",
        "location_city": "Tübingen",

        // About
        "about_welcome": "Welcome to Lunexo",
        "about_main_title": "DISCOVER YOUR MOMENT IN A NEW PERSPECTIVE",
        "about_sub_1": "Capture your moments",
        "about_sub_2": "We show you a new perspective",
        "about_me_title": "About me",
        "about_me_text": "My name is Sergej Maltsev, a physicist and the founder of Lunexo. My journey began with a love for visual storytelling and a passion for understanding how the world works. I started honing my skills in videography to cover my living and rent costs, a foundation that I later refined through my studies at the Max Planck Institute, where I trained in analytical rigor and precise problem-solving. This blend of scientific discipline and creative vision is at the core of Lunexo. Every project is an opportunity to tell a unique story, and I'm dedicated to capturing the world from breathtaking new angles, bringing your vision to life with stunning visuals and a commitment to quality.",

        // Contact
        "contact_vision": "Got a vision? Just drop us a message.",
        "contact_title": "LET'S CAPTURE YOUR MOMENT",
        "contact_btn": "CONTACT US",

        // Footer
        "footer_rights": "© LUNEXO 2025. All rights reserved",

        // Portfolio Page
        "portfolio_title": "Our Work",
        "web_portfolio_title": "Web & App Design",
        "web_section_title": "Websites",
        "app_section_title": "Apps",
        "references_title": "References",

        // Automation Page
        "nav_automation": "Automation",
        "auto_hero_title": "AI Automation & Workflows",
        "auto_hero_subtitle": "Streamline your business with intelligent solutions.",
        "auto_prod_1_title": "Automated AI Phone Agent",
        "auto_prod_1_desc": "Never miss a call again. Our AI agent takes appointments, answers queries, and integrates seamlessly with your calendar.",
        "btn_get_input": "Get Started",
        "auto_prod_2_title": "Intelligent Chatbot",
        "auto_prod_2_desc": "Engage visitors 24/7. Provide instant support, guide users, and capture leads effortlessly.",
        "btn_learn_more": "Learn More",
        "auto_prod_3_title": "Custom Workflows",
        "auto_prod_3_desc": "Tailored automation strategies built for your specific business needs. Maximize efficiency.",
        "btn_consultation": "Book Consultation",
        "auto_prod_4_title": "Free Resources",
        "auto_prod_4_desc": "Kickstart your automation journey with our free templates.",
        "tpl_1_title": "Lead Auto-Reply & Notify",
        "tpl_1_desc": "Catch contact form submissions, send an auto-reply to the lead and alert the admin instantly.",
        "tpl_2_title": "Appointment Scheduling Bot",
        "tpl_2_desc": "Receive booking requests via webhook, check availability and send a confirmation email automatically.",
        "tpl_3_title": "Smart FAQ Responder",
        "tpl_3_desc": "Classify incoming questions by keyword across 5 categories and reply with instant pre-defined answers.",
        "tpl_4_title": "Telegram Lead Notifier",
        "tpl_4_desc": "Instantly ping your Telegram when a new lead arrives — name, email, service interest and message, formatted.",
        "tpl_5_title": "Daily Report to Email",
        "tpl_5_desc": "Runs every weekday at 8 AM, fetches your stats and emails a clean HTML summary report to the admin.",
        "tpl_6_title": "Website Health Monitor",
        "tpl_6_desc": "Checks your pages every 15 minutes and emails an alert the moment any page goes down.",
        "tpl_7_title": "CRM Contact Sync",
        "tpl_8_title": "AI Lead Qualifier (OpenClaw)",
        "tpl_8_desc": "When a lead arrives, your local AI scores it 1-10, detects urgency & budget signals, suggests the next action, and drafts a personalized reply — all automatically.",
        "tpl_7_desc": "Validate incoming contacts, push them to your CRM API, and send a branded welcome email — all in parallel.",
        "auto_moltbot_title": "Moltbot Integration",
        "auto_moltbot_desc": "Bring intelligent multi-step bot automation into your company. Moltbot connects your tools, handles incoming requests, and responds with precision — fully tailored to your workflow. Integration available on request.",
        "auto_moltbot_f1": "Multi-step decision logic",
        "auto_moltbot_f2": "Real-time request handling",
        "auto_moltbot_f3": "Deep tool integrations",
        "auto_moltbot_f4": "Custom on-request setup",
        "auto_eyebrow": "AI-powered solutions",
        "auto_stat_1": "Availability",
        "auto_stat_2": "Time Saved",
        "auto_stat_3": "Missed Calls",
        "auto_tag_ai": "AI-Powered",
        "auto_tag_live": "Live on Website",
        "auto_tag_custom": "Fully Custom",
        "auto_tag_partner": "Partner Technology",
        "auto_prod_1_f1": "24/7 call handling",
        "auto_prod_1_f2": "Calendar integration",
        "auto_prod_1_f3": "Natural language understanding",
        "auto_prod_1_f4": "Instant SMS/email follow-up",
        "auto_prod_2_f1": "Trained on your data",
        "auto_prod_2_f2": "Multi-language support",
        "auto_prod_2_f3": "Lead capture & handoff",
        "auto_prod_2_f4": "CRM integration",
        "auto_prod_3_f1": "n8n, Zapier & Make.com",
        "auto_prod_3_f2": "API & webhook connections",
        "auto_prod_3_f3": "Email & notification flows",
        "auto_prod_3_f4": "Data sync between tools",
        "auto_tpl_eyebrow": "n8n Ready",
        "auto_tpl_hint": "All templates are ready-to-import n8n workflow JSON files. Go to n8n → Workflows → Import → select the file.",
        "btn_download": "Download",
        // Tabs
        "auto_tab_workflows": "Workflows & Automation",
        "auto_tab_consulting": "Consulting",
        "auto_tab_tutorials": "Tutorials & Presets",
        "auto_github_banner_title": "All presets on GitHub",
        // OpenClaw
        "auto_tag_opensource": "Open Source",
        "auto_openclaw_title": "OpenClaw Installation",
        "auto_openclaw_desc": "Need a powerful, self-hosted automation platform? We install and configure OpenClaw on your infrastructure — giving you full control over your workflows without vendor lock-in.",
        "auto_openclaw_f1": "Self-hosted & full data ownership",
        "auto_openclaw_f2": "Custom node & plugin setup",
        "auto_openclaw_f3": "Server deployment & maintenance",
        "auto_openclaw_f4": "Integration with your existing stack",
        // Workflow CTA
        "auto_cta_title": "Need a Custom Workflow?",
        "auto_cta_desc": "Whether it's a complex n8n pipeline, an OpenClaw deployment, or a tailored automation strategy — I build it for you at a fair price. Let's talk about your needs.",
        "auto_cta_btn": "Get in Touch",
        // Consulting
        "consult_eyebrow": "Expert Guidance",
        "consult_intro_title": "Science, IT & Marketing Consulting",
        "consult_intro_desc": "With a Master's degree in Physics, experience as an AI lecturer, and years of hands-on development and marketing work — long before the AI boom — I bring a unique combination of deep scientific understanding, technical skill, and real-world business insight to every project.",
        "consult_tag_science": "Science & AI",
        "consult_science_title": "Scientific & AI Consulting",
        "consult_science_desc": "Leverage rigorous scientific methodology combined with cutting-edge AI knowledge. From data analysis to research strategy — get expert advice grounded in physics and mathematics.",
        "consult_science_f1": "Data analysis & scientific modeling",
        "consult_science_f2": "AI strategy & implementation guidance",
        "consult_science_f3": "Research methodology & optimization",
        "consult_science_f4": "Technical workshops & training",
        "consult_tag_it": "IT & Dev",
        "consult_it_title": "IT & Development Consulting",
        "consult_it_desc": "Years of hands-on programming and system architecture experience. I help businesses make the right technology decisions — from stack selection to deployment strategy and code quality.",
        "consult_it_f1": "Architecture & technology audits",
        "consult_it_f2": "Development process optimization",
        "consult_it_f3": "AI tool integration into workflows",
        "consult_it_f4": "Code reviews & best practices",
        "consult_tag_marketing": "Marketing",
        "consult_marketing_title": "Marketing & Growth Consulting",
        "consult_marketing_desc": "Real marketing experience from before the AI era, now supercharged with modern AI tools. I understand both the fundamentals and the cutting-edge — giving you a strategic advantage that most newcomers lack.",
        "consult_marketing_f1": "Digital marketing strategy",
        "consult_marketing_f2": "AI-powered content & SEO",
        "consult_marketing_f3": "Campaign analysis & optimization",
        "consult_marketing_f4": "Brand positioning & growth hacking",
        "consult_cred_title": "Why Work With Me",
        "consult_cred_subtitle": "A unique blend of academic rigor and real-world experience.",
        "consult_cred_1_title": "M.Sc. Physics",
        "consult_cred_1_desc": "Master's degree in Physics — trained in analytical thinking, complex problem-solving, and scientific methodology.",
        "consult_cred_2_title": "AI Lecturer",
        "consult_cred_2_desc": "Active AI Dozent — teaching the next generation how to understand and apply artificial intelligence effectively.",
        "consult_cred_3_title": "Pre-AI Developer",
        "consult_cred_3_desc": "Years of programming and development experience before AI tools existed — a foundation that gives real depth to every solution.",
        "consult_cred_4_title": "Marketing Veteran",
        "consult_cred_4_desc": "Hands-on marketing experience from the pre-AI era, now enhanced with modern AI capabilities — the best of both worlds.",
        "consult_cta_title": "Book a Consulting Session",
        "consult_cta_desc": "Whether you need guidance on a scientific project, want to optimize your IT infrastructure, or need a marketing strategy backed by real expertise — let's talk.",
        "consult_cta_btn": "Get in Touch"
    },
    de: {
        // Navigation
        "nav_home": "Startseite",
        "nav_portfolio": "Portfolio",
        "nav_services": "Dienstleistungen",
        "nav_pricing": "Preise",
        "nav_about": "Über uns",
        "nav_product": "Produkte",
        "nav_contact": "Kontakt",
        "nav_tutorials": "Tutorials",
        "nav_automation": "Automatisierung",
        "nav_web_app": "Web & App",
        "btn_ask_ai": "KI Fragen",
        "tut_eyebrow": "Kostenloses Wissen",
        "tut_hero_title": "Tutorials & Vorlagen",
        "tut_hero_subtitle": "Echte Setups. Ehrliche Erklärungen. Folge auf Instagram und YouTube.",
        "tut_stat_1": "Episoden",
        "tut_stat_2": "Kostenlose Vorlagen",
        "tut_stat_3": "Plattformen",
        "tut_tab_episodes": "Episoden",
        "tut_tab_templates": "Kostenlose Vorlagen",
        "tut_follow_eyebrow": "Folg mit",
        "tut_follow_title": "Der Kanal — @lunexolabs",
        "tut_follow_desc": "KI bewegt sich schnell. Einmal geblinzelt und du hast schon etwas verpasst. Folge um vorne zu bleiben.",
        "tut_ig_platform": "Instagram",
        "tut_ig_desc": "Kurze Reels — KI-Tools, Setup-Tipps, Organisationssysteme. 30–60 Sekunden. Schnell und nützlich.",
        "tut_yt_platform": "YouTube",
        "tut_yt_desc": "Vollständige Setup-Guides, Walkthroughs und Deep Dives. Kein Fluff. Keine Sponsoren. Echte Builds.",
        "tut_follow_btn": "Folgen",
        "tut_subscribe_btn": "Abonnieren",
        "tut_ep_eyebrow": "Alle Episoden",
        "tut_ep_title": "Schauen & Lernen",
        "tut_ep_subtitle": "Von der Kanalvorstellung bis zu kompletten KI-Setups — jede Episode ist ein echter Build.",
        "tut_watch_ig": "Auf Instagram ansehen",
        "tut_watch_yt": "Auf YouTube ansehen",
        "tut_coming_soon": "Demnächst",
        "ep000_title": "Einmal geblinzelt. Schon verpasst.",
        "ep000_desc": "Kanalvorstellung. KI bewegt sich so schnell — einmal geblinzelt und du hast schon etwas verpasst. Das ist meine persönliche Reise durch die Tools, die ich wirklich nutze.",
        "ep001_title": "Obsidian + OpenClaw Setup",
        "ep001_desc": "Baue ein zweites Gehirn, das deine KI wirklich lesen kann. Obsidian Vault-Struktur + OpenClaw-Integration von Grund auf.",
        "ep002_title": "Telegram Lead-Benachrichtiger",
        "ep002_desc": "Hör auf, Leads im Schlaf zu verlieren. n8n-Workflow, der dein Telegram sofort benachrichtigt, wenn ein neuer Lead ankommt.",
        "ep003_title": "E-Mail Auto-Antwort in 3 Sekunden",
        "ep003_desc": "Antworte automatisch auf jede Anfrage in unter 3 Sekunden. n8n E-Mail-Flow mit KI-Personalisierung.",
        "ep004_title": "Schluss mit dem E-Mail-Tennis",
        "ep004_desc": "Terminbuchungsbot, der die Planung automatisch übernimmt. Kein Hin-und-Her mehr.",
        "ep005_title": "Website down? Du weißt es zuerst.",
        "ep005_desc": "Automatischer Website-Monitor, der alle 15 Minuten prüft und sofort benachrichtigt, wenn etwas ausfällt.",
        "ep006_title": "KI Lead-Qualifizierer",
        "ep006_desc": "OpenClaw + n8n: KI bewertet jeden Lead bevor du deinen Posteingang öffnest. Erkennt Dringlichkeit und Budget-Signale.",
        "ep007_title": "Eigene KI in 15 Minuten",
        "ep007_desc": "Ein curl-Befehl. 15 Minuten. Persönlicher KI-Assistent in deinem Telegram — auf deiner eigenen Maschine, ohne Abonnements.",
        "ep008_title": "Die Organisations-Revolution",
        "ep008_desc": "Normales Arbeiten ist vorbei. Alle haben die gleichen Tools. Der Unterschied ist jetzt WIE du dich darum organisierst.",
        "tut_tpl_title": "Kostenlose Automatisierungs-Vorlagen",
        "tut_tpl_subtitle": "Herunterladen, in n8n importieren und starten. Alle Vorlagen sind kostenlos — keine E-Mail erforderlich.",
        "tut_cta_title": "Brauchst du einen eigenen Workflow?",
        "tut_cta_desc": "Vorlagen sind ein Startpunkt. Wenn du etwas Maßgeschneidertes brauchst — eine n8n-Pipeline, OpenClaw-Deployment oder Automatisierungsstrategie — lass uns zusammen bauen.",
        "tut_cta_btn": "Kontakt aufnehmen",
        "btn_free_guide": "Kostenloses Installationsguide",

        // Hero
        "hero_title_1": "Dynamische Action",
        "hero_title_2": "Markengeschichten",
        "hero_title_3": "Kino-Aufnahmen",
        "hero_title_4": "Atemberaubende Ausblicke",
        "hero_btn_portfolio": "Portfolio",
        "hero_btn_more": "Mehr sehen",

        // Services
        // Services
        "services_title": "Wir liefern Ihnen den Ausblick, den Sie verdienen.",
        "services_desc": "Kino-Aufnahmen vom Boden bis zum Himmel – mit FPV-Drohnen und klassischen Kameras. Gefilmt, bearbeitet und optimiert in einem nahtlosen Fluss.",
        
        // Video Services (Restored + New)
        "service_1_title": "FPV Flug",
        "service_1_desc": "Den Moment im freien Flug einfangen",
        "service_2_title": "Digitales Marketing",
        "service_2_desc": "Produkte einfangen",
        "service_3_title": "Vermessungsflüge",
        "service_3_desc": "Den Moment von oben einfangen",

        "service_ai_title": "KI Video",
        "service_ai_desc": "Optimiert durch Künstliche Intelligenz",
        "service_clip_title": "Clipping",
        "service_clip_desc": "Kurzformate für Social Media",

        // Digital Services (New Section)
        "section_digital_title": "Web/App & Automatisierung",
        "section_digital_desc": "Digitale Lösungen für die moderne Zeit.",
        "service_web_title": "Web Design",
        "service_web_desc": "Maßgeschneiderte, responsive Webseiten.",
        "service_app_title": "App Design",
        "service_app_desc": "Nutzerzentrierte mobile Anwendungen.",
        "service_auto_title": "Automatisierung",
        "service_auto_desc": "Workflows optimieren und Zeit sparen.",

        "service_time_approx": "Ca.",

        // Pricing
        "pricing_title": "Flexible Preise für jede Vision",
        "pricing_1_title": "FPV Drohne",
        "pricing_1_desc_1": "Dynamische, schnelle Aufnahmen",
        "pricing_1_desc_2": "Innen- und Außenflüge",
        "pricing_1_desc_3": "4K Kinoqualität",
        "pricing_1_desc_4": "Professioneller Pilot",
        "pricing_2_title": "Standard Drohne",
        "pricing_2_desc_1": "Ruhige, stabilisierte Aufnahmen",
        "pricing_2_desc_2": "Luftfotografie",
        "pricing_2_desc_3": "Immobilien und Events",
        "pricing_2_desc_4": "4K Kinoqualität",
        "pricing_3_title": "Video Design / Marketing",
        "pricing_3_desc_1": "Social Media Kampagnen",
        "pricing_3_desc_2": "Content Erstellung",
        "pricing_3_desc_3": "Videobearbeitung",
        "pricing_3_desc_4": "Markenstrategie",

        "pricing_clip_title": "Clipping",
        "pricing_clip_price": "ab 150€",
        "pricing_clip_desc_1": "TikToks / Reels",
        "pricing_clip_desc_2": "Viraler Schnitt",
        "pricing_clip_desc_3": "Untertitel & Hooks",
        "pricing_clip_desc_4": "Schnelle Lieferung",

        "pricing_ai_title": "KI Video",
        "pricing_ai_price": "ab 350€",
        "pricing_ai_desc_1": "Style Transfer & GenAI",
        "pricing_ai_desc_2": "Individuelle Voiceovers",
        "pricing_ai_desc_3": "KI-Szenenerstellung",
        "pricing_ai_desc_4": "Modelltraining",

        "pricing_web_title": "Web Design",
        "pricing_web_price": "ab 1200€",
        "pricing_web_desc_1": "Responsives Design",
        "pricing_web_desc_2": "SEO Optimierung",
        "pricing_web_desc_3": "CMS Integration",
        "pricing_web_desc_4": "Individuelle Grafiken",

        "pricing_app_title": "App Design",
        "pricing_app_price": "Angebot anfragen",
        "pricing_app_sub": "Schätzung 2k€ - 10k€",
        "pricing_app_desc_1": "UX/UI Prototyping",
        "pricing_app_desc_2": "Interaktive Mockups",
        "pricing_app_desc_3": "User Flow Design",
        "pricing_app_desc_4": "Design System",

        "pricing_auto_title": "Automatisierung",
        "pricing_auto_price": "ab 500€",
        "pricing_auto_desc_1": "Workflow Analyse",
        "pricing_auto_desc_2": "Zapier/Make Integra.",
        "pricing_auto_desc_3": "Chatbot Einrichtung",
        "pricing_auto_desc_4": "CRM Anbindungen",

        // Location
        "location_title": "Standort",
        "location_city": "Tübingen",

        // About
        "about_welcome": "Willkommen bei Lunexo",
        "about_main_title": "ENTDECKEN SIE IHREN MOMENT IN EINER NEUEN PERSPEKTIVE",
        "about_sub_1": "Fangen Sie Ihre Momente ein",
        "about_sub_2": "Wir zeigen Ihnen eine neue Perspektive",
        "about_me_title": "Über mich",
        "about_me_text": "Mein Name ist Sergej Maltsev, Physiker und Gründer von Lunexo. Meine Reise begann mit der Liebe zum visuellen Erzählen und der Leidenschaft, zu verstehen, wie die Welt funktioniert. Ich begann meine Fähigkeiten in der Videografie zu verfeinern, um meinen Lebensunterhalt und meine Miete zu decken, eine Grundlage, die ich später während meines Studiums am Max-Planck-Institut vertiefte, wo ich in analytischer Strenge und präziser Problemlösung geschult wurde. Diese Mischung aus wissenschaftlicher Disziplin und kreativer Vision ist der Kern von Lunexo. Jedes Projekt ist eine Gelegenheit, eine einzigartige Geschichte zu erzählen, und ich widme mich dem Einfangen der Welt aus atemberaubenden neuen Blickwinkeln, um Ihre Vision mit beeindruckenden Bildern und einem Engagement für Qualität zum Leben zu erwecken.",

        // Contact
        "contact_vision": "Haben Sie eine Vision? Schreiben Sie uns einfach eine Nachricht.",
        "contact_title": "LASSEN SIE UNS IHREN MOMENT EINFANGEN",
        "contact_btn": "KONTAKTIEREN SIE UNS",

        // Footer
        "footer_rights": "© LUNEXO 2025. Alle Rechte vorbehalten",

        // Portfolio Page
        "portfolio_title": "Unsere Arbeit",
        "web_portfolio_title": "Web & App Design",
        "web_section_title": "Webseiten",
        "app_section_title": "Apps",
        "references_title": "Referenzen",

        // Automation Page
        "auto_hero_title": "KI-Automatisierung & Workflows",
        "auto_hero_subtitle": "Optimieren Sie Ihr Geschäft mit intelligenten Lösungen.",
        "auto_prod_1_title": "Automatisierter KI-Telefonagent",
        "auto_prod_1_desc": "Verpassen Sie nie wieder einen Anruf. Unser KI-Agent nimmt Termine entgegen, beantwortet Anfragen und integriert sich nahtlos in Ihren Kalender.",
        "btn_get_input": "Jetzt starten",
        "auto_prod_2_title": "Intelligenter Chatbot",
        "auto_prod_2_desc": "Interagieren Sie rund um die Uhr mit Besuchern. Bieten Sie sofortigen Support, leiten Sie Nutzer an und erfassen Sie mühelos Leads.",
        "btn_learn_more": "Mehr erfahren",
        "auto_prod_3_title": "Maßgeschneiderte Workflows",
        "auto_prod_3_desc": "Maßgeschneiderte Automatisierungsstrategien für Ihre spezifischen Geschäftsanforderungen. Maximieren Sie die Effizienz.",
        "btn_consultation": "Beratung buchen",
        "auto_prod_4_title": "Kostenlose Ressourcen",
        "auto_prod_4_desc": "Starten Sie Ihre Automatisierungsreise mit unseren kostenlosen Vorlagen.",
        "tpl_1_title": "Lead Auto-Antwort & Benachrichtigung",
        "tpl_1_desc": "Kontaktformular-Eingaben abfangen, dem Lead automatisch antworten und den Admin sofort benachrichtigen.",
        "tpl_2_title": "Terminplanungs-Bot",
        "tpl_2_desc": "Buchungsanfragen per Webhook empfangen, Verfügbarkeit prüfen und automatisch eine Bestätigungs-E-Mail senden.",
        "tpl_3_title": "Intelligenter FAQ-Responder",
        "tpl_3_desc": "Eingehende Fragen anhand von Schlüsselwörtern in 5 Kategorien klassifizieren und sofort vordefinierte Antworten senden.",
        "tpl_4_title": "Telegram Lead-Benachrichtiger",
        "tpl_4_desc": "Sofort auf Telegram benachrichtigt werden, sobald ein neuer Lead eingeht — Name, E-Mail, Servicewunsch und Nachricht, formatiert.",
        "tpl_5_title": "Tagesbericht per E-Mail",
        "tpl_5_desc": "Läuft jeden Werktag um 8 Uhr, holt Statistiken ab und sendet einen übersichtlichen HTML-Bericht an den Admin.",
        "tpl_6_title": "Website-Health-Monitor",
        "tpl_6_desc": "Überprüft Ihre Seiten alle 15 Minuten und sendet sofort eine Alarm-E-Mail, wenn eine Seite ausfällt.",
        "tpl_7_title": "CRM Kontakt-Sync",
        "tpl_8_title": "KI Lead-Qualifizierer (OpenClaw)",
        "tpl_8_desc": "Sobald ein Lead eingeht, bewertet Ihre lokale KI ihn mit 1–10, erkennt Dringlichkeit und Budget-Signale, schlägt die nächste Aktion vor und verfasst eine personalisierte Antwort — vollautomatisch.",
        "tpl_7_desc": "Eingehende Kontakte validieren, an Ihre CRM-API senden und parallel eine Willkommens-E-Mail verschicken.",
        "auto_moltbot_title": "Moltbot Integration",
        "auto_moltbot_desc": "Bringen Sie intelligente Mehrschritt-Bot-Automatisierung in Ihr Unternehmen. Moltbot verbindet Ihre Tools, verarbeitet eingehende Anfragen und antwortet präzise — vollständig auf Ihren Workflow zugeschnitten. Integration auf Anfrage verfügbar.",
        "auto_moltbot_f1": "Mehrstufige Entscheidungslogik",
        "auto_moltbot_f2": "Echtzeit-Anfragenverarbeitung",
        "auto_moltbot_f3": "Tiefe Tool-Integrationen",
        "auto_moltbot_f4": "Individuelle Einrichtung auf Anfrage",
        "auto_eyebrow": "KI-gestützte Lösungen",
        "auto_stat_1": "Verfügbarkeit",
        "auto_stat_2": "Zeitersparnis",
        "auto_stat_3": "Verpasste Anrufe",
        "auto_tag_ai": "KI-gestützt",
        "auto_tag_live": "Live auf der Website",
        "auto_tag_custom": "Vollständig angepasst",
        "auto_tag_partner": "Partnertechnologie",
        "auto_prod_1_f1": "24/7 Anrufbearbeitung",
        "auto_prod_1_f2": "Kalenderintegration",
        "auto_prod_1_f3": "Natürlichsprachliches Verstehen",
        "auto_prod_1_f4": "Sofortige SMS/E-Mail-Nachverfolgung",
        "auto_prod_2_f1": "Auf Ihren Daten trainiert",
        "auto_prod_2_f2": "Mehrsprachige Unterstützung",
        "auto_prod_2_f3": "Lead-Erfassung & Übergabe",
        "auto_prod_2_f4": "CRM-Integration",
        "auto_prod_3_f1": "n8n, Zapier & Make.com",
        "auto_prod_3_f2": "API & Webhook-Verbindungen",
        "auto_prod_3_f3": "E-Mail- & Benachrichtigungsflüsse",
        "auto_prod_3_f4": "Datensynchronisation zwischen Tools",
        "auto_tpl_eyebrow": "n8n Bereit",
        "auto_tpl_hint": "Alle Vorlagen sind importfertige n8n-Workflow-JSON-Dateien. Gehen Sie in n8n → Workflows → Importieren → Datei auswählen.",
        "btn_download": "Herunterladen",
        // Tabs
        "auto_tab_workflows": "Workflows & Automatisierung",
        "auto_tab_consulting": "Beratung",
        "auto_tab_tutorials": "Tutorials & Vorlagen",
        "auto_github_banner_title": "Alle Vorlagen auf GitHub",
        // OpenClaw
        "auto_tag_opensource": "Open Source",
        "auto_openclaw_title": "OpenClaw Installation",
        "auto_openclaw_desc": "Sie brauchen eine leistungsstarke, selbst gehostete Automatisierungsplattform? Wir installieren und konfigurieren OpenClaw auf Ihrer Infrastruktur — volle Kontrolle über Ihre Workflows ohne Herstellerbindung.",
        "auto_openclaw_f1": "Selbst gehostet & volle Datenhoheit",
        "auto_openclaw_f2": "Individuelle Node- & Plugin-Einrichtung",
        "auto_openclaw_f3": "Server-Deployment & Wartung",
        "auto_openclaw_f4": "Integration in Ihren bestehenden Stack",
        // Workflow CTA
        "auto_cta_title": "Brauchen Sie einen individuellen Workflow?",
        "auto_cta_desc": "Ob eine komplexe n8n-Pipeline, ein OpenClaw-Deployment oder eine maßgeschneiderte Automatisierungsstrategie — ich baue es für Sie zu einem fairen Preis. Lassen Sie uns über Ihre Anforderungen sprechen.",
        "auto_cta_btn": "Kontakt aufnehmen",
        // Consulting
        "consult_eyebrow": "Expertenberatung",
        "consult_intro_title": "Wissenschaft, IT & Marketing Beratung",
        "consult_intro_desc": "Mit einem Masterabschluss in Physik, Erfahrung als KI-Dozent und jahrelanger praktischer Entwicklungs- und Marketingarbeit — lange vor dem KI-Boom — bringe ich eine einzigartige Kombination aus tiefem wissenschaftlichen Verständnis, technischem Können und praktischer Geschäftserfahrung in jedes Projekt ein.",
        "consult_tag_science": "Wissenschaft & KI",
        "consult_science_title": "Wissenschaftliche & KI-Beratung",
        "consult_science_desc": "Nutzen Sie rigorose wissenschaftliche Methodik kombiniert mit modernsten KI-Kenntnissen. Von Datenanalyse bis Forschungsstrategie — fundierte Beratung auf Basis von Physik und Mathematik.",
        "consult_science_f1": "Datenanalyse & wissenschaftliche Modellierung",
        "consult_science_f2": "KI-Strategie & Implementierungsberatung",
        "consult_science_f3": "Forschungsmethodik & Optimierung",
        "consult_science_f4": "Fachliche Workshops & Schulungen",
        "consult_tag_it": "IT & Entwicklung",
        "consult_it_title": "IT- & Entwicklungsberatung",
        "consult_it_desc": "Jahrelange praktische Erfahrung in Programmierung und Systemarchitektur. Ich helfe Unternehmen, die richtigen Technologieentscheidungen zu treffen — von der Stack-Auswahl bis zur Deployment-Strategie und Codequalität.",
        "consult_it_f1": "Architektur- & Technologie-Audits",
        "consult_it_f2": "Optimierung von Entwicklungsprozessen",
        "consult_it_f3": "KI-Tool-Integration in Workflows",
        "consult_it_f4": "Code-Reviews & Best Practices",
        "consult_tag_marketing": "Marketing",
        "consult_marketing_title": "Marketing- & Wachstumsberatung",
        "consult_marketing_desc": "Echte Marketingerfahrung aus der Vor-KI-Ära, jetzt verstärkt mit modernen KI-Tools. Ich verstehe sowohl die Grundlagen als auch die neuesten Trends — ein strategischer Vorteil, den die meisten Newcomer nicht haben.",
        "consult_marketing_f1": "Digitale Marketingstrategie",
        "consult_marketing_f2": "KI-gestützter Content & SEO",
        "consult_marketing_f3": "Kampagnenanalyse & Optimierung",
        "consult_marketing_f4": "Markenpositionierung & Growth Hacking",
        "consult_cred_title": "Warum mit mir arbeiten",
        "consult_cred_subtitle": "Eine einzigartige Mischung aus akademischer Strenge und praktischer Erfahrung.",
        "consult_cred_1_title": "M.Sc. Physik",
        "consult_cred_1_desc": "Masterabschluss in Physik — geschult in analytischem Denken, komplexer Problemlösung und wissenschaftlicher Methodik.",
        "consult_cred_2_title": "KI-Dozent",
        "consult_cred_2_desc": "Aktiver KI-Dozent — ich bringe der nächsten Generation bei, künstliche Intelligenz zu verstehen und effektiv anzuwenden.",
        "consult_cred_3_title": "Vor-KI Entwickler",
        "consult_cred_3_desc": "Jahrelange Programmier- und Entwicklungserfahrung bevor es KI-Tools gab — ein Fundament, das jeder Lösung echte Tiefe verleiht.",
        "consult_cred_4_title": "Marketing-Veteran",
        "consult_cred_4_desc": "Praktische Marketingerfahrung aus der Vor-KI-Ära, jetzt erweitert um moderne KI-Fähigkeiten — das Beste aus beiden Welten.",
        "consult_cta_title": "Beratungsgespräch buchen",
        "consult_cta_desc": "Ob Sie Unterstützung bei einem wissenschaftlichen Projekt brauchen, Ihre IT-Infrastruktur optimieren möchten oder eine von echter Expertise gestützte Marketingstrategie benötigen — lassen Sie uns sprechen.",
        "consult_cta_btn": "Kontakt aufnehmen"
    },
    ru: {
        // Navigation
        "nav_home": "Главная",
        "nav_portfolio": "Портфолио",
        "nav_services": "Услуги",
        "nav_pricing": "Цены",
        "nav_about": "О нас",
        "nav_product": "Продукты",
        "nav_contact": "Контакты",
        "nav_automation": "Автоматизация",
        "nav_web_app": "Веб и Приложения",
        "btn_ask_ai": "Спросить AI",

        // Hero
        "hero_title_1": "Динамичное действие",
        "hero_title_2": "Истории брендов",
        "hero_title_3": "Кинематографичные кадры",
        "hero_title_4": "Потрясающие виды",
        "hero_btn_portfolio": "Портфолио",
        "hero_btn_more": "Узнать больше",

        // Services
        // Services
        "services_title": "Мы даем вам вид, который вы заслуживаете.",
        "services_desc": "Кинематографичные кадры от земли до неба – с FPV дронами и классическими камерами. Снято, смонтировано и оптимизировано в одном плавном процессе.",
        
        // Video Services (Restored + New)
        "service_1_title": "FPV полет",
        "service_1_desc": "Запечатлеть момент в свободном полете",
        "service_2_title": "Цифровой маркетинг",
        "service_2_desc": "Съемка продуктов",
        "service_3_title": "Геодезические полеты",
        "service_3_desc": "Запечатлеть момент сверху",

        "service_ai_title": "AI Видео",
        "service_ai_desc": "Улучшено с помощью Искусственного Интеллекта",
        "service_clip_title": "Клиппинг",
        "service_clip_desc": "Короткие форматы для соцсетей",

        // Digital Services (New Section)
        "section_digital_title": "Веб/Приложения и Автоматизация",
        "section_digital_desc": "Цифровые решения для современности.",
        "service_web_title": "Веб Дизайн",
        "service_web_desc": "Кастомные, адаптивные сайты.",
        "service_app_title": "Дизайн Приложений",
        "service_app_desc": "Удобные мобильные приложения.",
        "service_auto_title": "Автоматизация",
        "service_auto_desc": "Оптимизация процессов и экономия времени.",

        "service_time_approx": "Прим.",

        // Pricing
        "pricing_title": "Гибкие цены для любой идеи",
        "pricing_1_title": "FPV Дрон",
        "pricing_1_desc_1": "Динамичные, скоростные кадры",
        "pricing_1_desc_2": "Полеты в помещении и на улице",
        "pricing_1_desc_3": "4K кинематографичное качество",
        "pricing_1_desc_4": "Профессиональный пилот",
        "pricing_2_title": "Стандартный Дрон",
        "pricing_2_desc_1": "Плавные, стабилизированные кадры",
        "pricing_2_desc_2": "Аэросъемка",
        "pricing_2_desc_3": "Недвижимость и мероприятия",
        "pricing_2_desc_4": "4K кинематографичное качество",
        "pricing_3_title": "Видео Маркетинг",
        "pricing_3_desc_1": "Кампании в социальных сетях",
        "pricing_3_desc_2": "Создание контента",
        "pricing_3_desc_3": "Видеомонтаж",
        "pricing_3_desc_4": "Стратегия бренда",

        "pricing_clip_title": "Клиппинг",
        "pricing_clip_price": "от 150€",
        "pricing_clip_desc_1": "TikToks / Reels",
        "pricing_clip_desc_2": "Вирусный монтаж",
        "pricing_clip_desc_3": "Субтитры",
        "pricing_clip_desc_4": "Быстрые сроки",

        "pricing_ai_title": "AI Видео",
        "pricing_ai_price": "от 350€",
        "pricing_ai_desc_1": "Style Transfer & GenAI",
        "pricing_ai_desc_2": "Кастомные озвучки",
        "pricing_ai_desc_3": "Генерация сцен",
        "pricing_ai_desc_4": "Обучение моделей",

        "pricing_web_title": "Веб Дизайн",
        "pricing_web_price": "от 1200€",
        "pricing_web_desc_1": "Адаптивный дизайн",
        "pricing_web_desc_2": "SEO Оптимизация",
        "pricing_web_desc_3": "Интеграция CMS",
        "pricing_web_desc_4": "Кастомная графика",

        "pricing_app_title": "Дизайн Приложений",
        "pricing_app_price": "По запросу",
        "pricing_app_sub": "Оценка 2k€ - 10k€",
        "pricing_app_desc_1": "UX/UI Прототипирование",
        "pricing_app_desc_2": "Интерактивные макеты",
        "pricing_app_desc_3": "User Flow",
        "pricing_app_desc_4": "Дизайн системы",

        "pricing_auto_title": "Автоматизация",
        "pricing_auto_price": "от 500€",
        "pricing_auto_desc_1": "Анализ процессов",
        "pricing_auto_desc_2": "Zapier/Make Интегра.",
        "pricing_auto_desc_3": "Настройка Чат-ботов",
        "pricing_auto_desc_4": "Связка CRM",

        "pricing_ai_title": "AI Видео",
        "pricing_ai_price": "от 350€",
        "pricing_ai_desc_1": "Style Transfer & GenAI",
        "pricing_ai_desc_2": "Кастомные озвучки",
        "pricing_ai_desc_3": "Генерация сцен",
        "pricing_ai_desc_4": "Обучение моделей",

        "pricing_web_title": "Веб Дизайн",
        "pricing_web_price": "от 1200€",
        "pricing_web_desc_1": "Адаптивный дизайн",
        "pricing_web_desc_2": "SEO Оптимизация",
        "pricing_web_desc_3": "Интеграция CMS",
        "pricing_web_desc_4": "Кастомная графика",

        "pricing_app_title": "Дизайн Приложений",
        "pricing_app_price": "По запросу",
        "pricing_app_sub": "Оценка 2k€ - 10k€",
        "pricing_app_desc_1": "UX/UI Прототипирование",
        "pricing_app_desc_2": "Интерактивные макеты",
        "pricing_app_desc_3": "User Flow",
        "pricing_app_desc_4": "Дизайн системы",

        "pricing_auto_title": "Автоматизация",
        "pricing_auto_price": "от 500€",
        "pricing_auto_desc_1": "Анализ процессов",
        "pricing_auto_desc_2": "Zapier/Make Интегра.",
        "pricing_auto_desc_3": "Настройка Чат-ботов",
        "pricing_auto_desc_4": "Связка CRM",

        // Location
        "location_title": "Расположены в",
        "location_city": "Тюбинген",

        // About
        "about_welcome": "Добро пожаловать в Lunexo",
        "about_main_title": "ОТКРОЙТЕ СВОЙ МОМЕНТ В НОВОЙ ПЕРСПЕКТИВЕ",
        "about_sub_1": "Запечатлейте свои моменты",
        "about_sub_2": "Мы покажем вам новую перспективу",
        "about_me_title": "Обо мне",
        "about_me_text": "Меня зовут Сергей Мальцев, я физик и основатель Lunexo. Мой путь начался с любви к визуальному повествованию и страсти к пониманию того, как устроен мир. Я начал оттачивать свои навыки в видеографии, чтобы покрыть расходы на жизнь и аренду, и эта основа позже была усовершенствована во время учебы в Институте Макса Планка, где я обучался аналитической строгости и точному решению проблем. Это сочетание научной дисциплины и творческого видения лежит в основе Lunexo. Каждый проект — это возможность рассказать уникальную историю, и я посвящаю себя тому, чтобы запечатлеть мир с захватывающих дух новых углов, воплощая ваше видение в жизнь с потрясающими визуальными эффектами и приверженностью к качеству.",

        // Contact
        "contact_vision": "Есть идея? Просто напишите нам сообщение.",
        "contact_title": "ДАВАЙТЕ ЗАПЕЧАТЛЕЕМ ВАШ МОМЕНТ",
        "contact_btn": "СВЯЖИТЕСЬ С НАМИ",

        // Footer
        "footer_rights": "© LUNEXO 2025. Все права защищены",

        // Portfolio Page
        "portfolio_title": "Наши работы",
        "references_title": "Рекомендации",

        // Automation Page
        "auto_hero_title": "AI Автоматизация и Рабочие Процессы",
        "auto_hero_subtitle": "Оптимизируйте свой бизнес с помощью интеллектуальных решений.",
        "auto_prod_1_title": "Автоматизированный AI Телефонный Агент",
        "auto_prod_1_desc": "Никогда больше не пропустите звонок. Наш AI агент назначает встречи, отвечает на запросы и легко интегрируется с вашим календарем.",
        "btn_get_input": "Начать",
        "auto_prod_2_title": "Интеллектуальный Чат-бот",
        "auto_prod_2_desc": "Взаимодействуйте с посетителями 24/7. Предоставляйте мгновенную поддержку, направляйте пользователей и легко привлекайте лидов.",
        "btn_learn_more": "Узнать больше",
        "auto_prod_3_title": "Индивидуальные Рабочие Процессы",
        "auto_prod_3_desc": "Индивидуальные стратегии автоматизации, созданные для ваших конкретных бизнес-задач. Максимизируйте эффективность.",
        "btn_consultation": "Заказать Консультацию",
        "auto_prod_4_title": "Бесплатные Ресурсы",
        "auto_prod_4_desc": "Начните свое путешествие по автоматизации с нашими бесплатными шаблонами.",
        "tpl_1_title": "Авто-ответ лидам и уведомление",
        "tpl_1_desc": "Перехватывать заявки с форм, автоматически отвечать лиду и мгновенно уведомлять администратора.",
        "tpl_2_title": "Бот для записи на встречи",
        "tpl_2_desc": "Принимать запросы на бронирование через вебхук, проверять доступность и автоматически отправлять подтверждение.",
        "tpl_3_title": "Умный FAQ-ответчик",
        "tpl_3_desc": "Классифицировать входящие вопросы по ключевым словам в 5 категориях и мгновенно отвечать заготовленными ответами.",
        "tpl_4_title": "Telegram-уведомитель о лидах",
        "tpl_4_desc": "Мгновенно получать уведомление в Telegram при новом лиде — имя, email, интерес к услуге и сообщение в удобном формате.",
        "tpl_5_title": "Ежедневный отчёт на почту",
        "tpl_5_desc": "Запускается каждый будний день в 8:00, получает статистику и отправляет администратору аккуратный HTML-отчёт.",
        "tpl_6_title": "Мониторинг доступности сайта",
        "tpl_6_desc": "Проверяет ваши страницы каждые 15 минут и немедленно отправляет тревогу, если страница недоступна.",
        "tpl_7_title": "Синхронизация контактов с CRM",
        "tpl_7_desc": "Валидировать входящие контакты, передавать их в CRM API и параллельно отправлять приветственное письмо.",
        "auto_moltbot_title": "Интеграция Moltbot",
        "auto_moltbot_desc": "Внедрите интеллектуальную многоэтапную бот-автоматизацию в вашу компанию. Moltbot объединяет ваши инструменты, обрабатывает входящие запросы и отвечает точно — полностью адаптировано под ваш рабочий процесс. Интеграция доступна по запросу.",
        "auto_moltbot_f1": "Многоэтапная логика решений",
        "auto_moltbot_f2": "Обработка запросов в реальном времени",
        "auto_moltbot_f3": "Глубокая интеграция инструментов",
        "auto_moltbot_f4": "Индивидуальная настройка по запросу",
        "auto_eyebrow": "Решения на базе ИИ",
        "auto_stat_1": "Доступность",
        "auto_stat_2": "Экономия времени",
        "auto_stat_3": "Пропущенных звонков",
        "auto_tag_ai": "На базе ИИ",
        "auto_tag_live": "Работает на сайте",
        "auto_tag_custom": "Полностью кастомный",
        "auto_tag_partner": "Партнёрская технология",
        "auto_prod_1_f1": "Обработка звонков 24/7",
        "auto_prod_1_f2": "Интеграция с календарём",
        "auto_prod_1_f3": "Понимание естественного языка",
        "auto_prod_1_f4": "Мгновенное SMS/email-сопровождение",
        "auto_prod_2_f1": "Обучен на ваших данных",
        "auto_prod_2_f2": "Многоязычная поддержка",
        "auto_prod_2_f3": "Захват и передача лидов",
        "auto_prod_2_f4": "Интеграция с CRM",
        "auto_prod_3_f1": "n8n, Zapier и Make.com",
        "auto_prod_3_f2": "Подключение API и вебхуков",
        "auto_prod_3_f3": "Email и уведомительные потоки",
        "auto_prod_3_f4": "Синхронизация данных между инструментами",
        "auto_tpl_eyebrow": "n8n Готово",
        "auto_tpl_hint": "Все шаблоны — готовые к импорту JSON-файлы рабочих процессов n8n. Перейдите в n8n → Рабочие процессы → Импорт → выберите файл.",
        "web_section_title": "Сайты",
        "app_section_title": "Приложения",
        "web_portfolio_title": "Веб и Приложения",
        "btn_download": "Скачать",
        // Tabs
        "auto_tab_workflows": "Рабочие процессы и автоматизация",
        "auto_tab_consulting": "Консалтинг",
        // OpenClaw
        "auto_tag_opensource": "Открытый код",
        "auto_openclaw_title": "Установка OpenClaw",
        "auto_openclaw_desc": "Нужна мощная, самостоятельно размещаемая платформа автоматизации? Мы установим и настроим OpenClaw на вашей инфраструктуре — полный контроль над рабочими процессами без привязки к вендору.",
        "auto_openclaw_f1": "Собственный хостинг и полный контроль над данными",
        "auto_openclaw_f2": "Настройка пользовательских нод и плагинов",
        "auto_openclaw_f3": "Развёртывание и обслуживание серверов",
        "auto_openclaw_f4": "Интеграция с вашим существующим стеком",
        // Workflow CTA
        "auto_cta_title": "Нужен индивидуальный рабочий процесс?",
        "auto_cta_desc": "Будь то сложный пайплайн n8n, развёртывание OpenClaw или индивидуальная стратегия автоматизации — я сделаю это для вас по справедливой цене. Давайте обсудим ваши потребности.",
        "auto_cta_btn": "Связаться",
        // Consulting
        "consult_eyebrow": "Экспертное руководство",
        "consult_intro_title": "Консалтинг в науке, IT и маркетинге",
        "consult_intro_desc": "С магистерской степенью по физике, опытом преподавания ИИ и многолетней практикой в разработке и маркетинге — задолго до бума ИИ — я привношу в каждый проект уникальное сочетание глубокого научного понимания, технических навыков и реального бизнес-опыта.",
        "consult_tag_science": "Наука и ИИ",
        "consult_science_title": "Научный и ИИ-консалтинг",
        "consult_science_desc": "Используйте строгую научную методологию в сочетании с передовыми знаниями в области ИИ. От анализа данных до исследовательской стратегии — экспертные советы, основанные на физике и математике.",
        "consult_science_f1": "Анализ данных и научное моделирование",
        "consult_science_f2": "Стратегия и руководство по внедрению ИИ",
        "consult_science_f3": "Методология исследований и оптимизация",
        "consult_science_f4": "Технические семинары и обучение",
        "consult_tag_it": "IT и разработка",
        "consult_it_title": "IT- и консалтинг по разработке",
        "consult_it_desc": "Годы практического опыта в программировании и системной архитектуре. Я помогаю бизнесу принимать правильные технологические решения — от выбора стека до стратегии развёртывания и качества кода.",
        "consult_it_f1": "Аудит архитектуры и технологий",
        "consult_it_f2": "Оптимизация процессов разработки",
        "consult_it_f3": "Интеграция ИИ-инструментов в рабочие процессы",
        "consult_it_f4": "Ревью кода и лучшие практики",
        "consult_tag_marketing": "Маркетинг",
        "consult_marketing_title": "Маркетинг и консалтинг по росту",
        "consult_marketing_desc": "Реальный маркетинговый опыт из до-ИИ эры, теперь усиленный современными ИИ-инструментами. Я понимаю и основы, и передовые технологии — это стратегическое преимущество, которого нет у большинства новичков.",
        "consult_marketing_f1": "Стратегия цифрового маркетинга",
        "consult_marketing_f2": "ИИ-контент и SEO",
        "consult_marketing_f3": "Анализ и оптимизация кампаний",
        "consult_marketing_f4": "Позиционирование бренда и Growth Hacking",
        "consult_cred_title": "Почему работать со мной",
        "consult_cred_subtitle": "Уникальное сочетание академической строгости и практического опыта.",
        "consult_cred_1_title": "Магистр физики",
        "consult_cred_1_desc": "Магистерская степень по физике — аналитическое мышление, решение сложных задач и научная методология.",
        "consult_cred_2_title": "Преподаватель ИИ",
        "consult_cred_2_desc": "Активный преподаватель ИИ — обучаю следующее поколение пониманию и эффективному применению искусственного интеллекта.",
        "consult_cred_3_title": "Разработчик до-ИИ эры",
        "consult_cred_3_desc": "Годы опыта программирования и разработки до появления ИИ-инструментов — фундамент, который придаёт реальную глубину каждому решению.",
        "consult_cred_4_title": "Ветеран маркетинга",
        "consult_cred_4_desc": "Практический маркетинговый опыт из до-ИИ эры, теперь расширенный современными возможностями ИИ — лучшее из обоих миров.",
        "consult_cta_title": "Записаться на консультацию",
        "consult_cta_desc": "Нужна помощь с научным проектом, оптимизация IT-инфраструктуры или маркетинговая стратегия, подкреплённая реальным опытом — давайте поговорим.",
        "consult_cta_btn": "Связаться"
    },
};

document.addEventListener("DOMContentLoaded", () => {
    // Check localStorage or auto-detect
    let currentLang = localStorage.getItem("language");
    
    if (!currentLang) {
        // Detect browser language (first 2 chars)
        const browserLang = navigator.language.slice(0, 2);
        // Check if supported (en, de, ru), default to 'en'
        currentLang = ['en', 'de', 'ru'].includes(browserLang) ? browserLang : 'en';
    }

    // Function to change language with fade effect
    const changeLanguage = (lang) => {
        if (!translations[lang]) return;

        // Fade out
        document.body.classList.add('fade-transition');
        document.body.style.opacity = '0';
        
        setTimeout(() => {
            currentLang = lang;
            
            // Try to find display again in case header loaded late
            const currentLangDisplay = document.getElementById("current-lang-display");
            if (currentLangDisplay) {
                currentLangDisplay.textContent = lang.toUpperCase();
            }
            
            // Save to localStorage
            localStorage.setItem("language", lang);

            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });

            // Dispatch custom event
            const event = new CustomEvent("languageChanged", { detail: { lang: lang } });
            document.dispatchEvent(event);
            
            // Fade in
            document.body.classList.remove('fade-transition');
            document.body.style.opacity = '1';

        }, 300); 
    };

    // Initial update without fade
    const initialUpdate = (lang) => {
        // Try getting display
        const currentLangDisplay = document.getElementById("current-lang-display");
        if (currentLangDisplay) {
            currentLangDisplay.textContent = lang.toUpperCase();
        }
        
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                 if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    // Run immediately for static content
    initialUpdate(currentLang);

    // Run again when header is loaded to catch nav items and display
    document.addEventListener('headerLoaded', () => {
        initialUpdate(currentLang);
    });

    // Event Delegation for Language Links (since they are dynamic)
    document.addEventListener('click', (e) => {
        const link = e.target.closest('.dropdown-menu a[data-lang]');
        if (link) {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            changeLanguage(lang);
        }
    });
});
