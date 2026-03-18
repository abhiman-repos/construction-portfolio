import type { Language } from "@/lib/i18n/types";

export type Dictionary = Record<string, string>;

export const dictionaries: Record<Language, Dictionary> = {
  en: {
    // Home content
    "home.stats.projectsCompleted": "Projects Completed",
    "home.stats.yearsExperience": "Years Experience",
    "home.stats.happyClients": "Happy Clients",
    "home.services.house.title": "House Construction",
    "home.services.house.description":
      "End-to-end residential builds with clear milestones.",
    "home.services.renovation.title": "Renovation",
    "home.services.renovation.description":
      "Fast, clean upgrades with minimal downtime.",
    "home.services.interior.title": "Interior Work",
    "home.services.interior.description":
      "Premium finishes, carpentry, lighting, and textures.",
    "home.services.commercial.title": "Commercial Projects",
    "home.services.commercial.description":
      "Execution you can trust for offices and retail spaces.",
    "home.features.ontime.title": "On-time delivery",
    "home.features.ontime.description":
      "Weekly progress updates and milestone-based planning.",
    "home.features.pricing.title": "Transparent pricing",
    "home.features.pricing.description":
      "Clear scope, line items, and no last-minute surprises.",
    "home.features.workforce.title": "Skilled workforce",
    "home.features.workforce.description":
      "Experienced teams supervised for quality and safety.",
    "home.features.materials.title": "High-quality materials",
    "home.features.materials.description":
      "We prioritize durability and premium finishing.",
    "home.testimonials.1.text":
      "Very professional team. Delivered exactly as promised and kept everything transparent throughout.",
    "home.testimonials.2.text":
      "Clean work, on time, and the finish quality was excellent. Great coordination and updates every week.",
    "home.testimonials.3.text":
      "They handled our renovation fast with minimal disruption. Strong attention to detail in the final handover.",

    // Nav
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.settings": "Settings",

    // Hero
    "hero.tagline": "Building Dreams with Precision & Trust",
    "hero.description":
      "Delivering high-quality residential & commercial construction solutions with transparent pricing, skilled execution, and on-time delivery.",
    "hero.cta.consultation": "Get Free Consultation",
    "hero.cta.callNow": "Call Now",
    "hero.bullets.ontime": "On-time delivery",
    "hero.bullets.pricing": "Transparent pricing",
    "hero.bullets.finishing": "Premium finishing",
    "hero.whatsapp.consultation":
      "Hi! I’d like a free consultation for my construction project.",

    // About
    "about.eyebrow": "About",
    "about.title": "Construction work you can trust",
    "about.description":
      "We focus on clear scope, disciplined execution, and premium finishes—so you get the result you imagined, without surprises.",
    "about.body":
      "Based in {{location}}, we deliver residential, commercial, renovation, and interior projects with transparent pricing and weekly progress updates.",

    // Projects
    "projects.eyebrow": "Projects",
    "projects.title": "Work that sells for you",
    "projects.description":
      "Before clients call, they browse. These are the projects that build trust instantly.",
    "projects.viewDetails": "View details",

    // Services
    "services.eyebrow": "Services",
    "services.title": "Clear offerings, premium execution",
    "services.description":
      "From new builds to renovations and interiors—choose what you need and we’ll handle the rest.",

    // Why
    "why.eyebrow": "Why choose us",
    "why.title": "Built on trust, delivered with discipline",
    "why.description":
      "Clients choose us for predictable timelines, honest pricing, and finishing quality that holds up.",

    // Testimonials
    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "Social proof that converts",
    "testimonials.description": "Real clients. Real results. Consistent quality.",
    "testimonials.rating": "5 star rating",

    // Contact
    "contact.eyebrow": "Contact",
    "contact.title": "Get a free consultation",
    "contact.description":
      "Tell us what you’re building. We’ll share a clear plan, timeline, and estimate.",
    "contact.call": "Call",
    "contact.email": "Email",
    "contact.form.name": "Name",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Your name",
    "contact.form.phonePlaceholder": "+91 ...",
    "contact.form.messagePlaceholder":
      "Describe your project (location, budget range, timeline)...",
    "contact.form.helper":
      "Prefer email? Submit opens your email app with this message.",
    "contact.form.submit": "Send by Email",
    "contact.whatsapp.composed":
      "Hi, I'm {{name}}. Phone: {{phone}}.\n\n{{message}}",

    // Footer
    "footer.projects": "Projects",
    "footer.services": "Services",
    "footer.contact": "Contact",

    // Settings
    "settings.eyebrow": "Settings",
    "settings.title": "Your preferences",
    "settings.description":
      "Choose a language for the whole page. Your selection is saved on this device.",
    "settings.language.label": "Language",
    "settings.language.en": "English",
    "settings.language.hi": "Hindi (हिंदी)",
    "settings.language.hinglish": "Hinglish",
  },

  hi: {
    "home.stats.projectsCompleted": "पूर्ण किए गए प्रोजेक्ट्स",
    "home.stats.yearsExperience": "अनुभव (वर्ष)",
    "home.stats.happyClients": "खुश क्लाइंट्स",
    "home.services.house.title": "हाउस कंस्ट्रक्शन",
    "home.services.house.description":
      "स्पष्ट माइलस्टोन के साथ एंड-टू-एंड रेजिडेंशियल बिल्ड।",
    "home.services.renovation.title": "रेनोवेशन",
    "home.services.renovation.description":
      "कम समय में साफ़-सुथरे अपग्रेड, न्यूनतम बाधा के साथ।",
    "home.services.interior.title": "इंटीरियर वर्क",
    "home.services.interior.description":
      "प्रीमियम फिनिश, कारपेंट्री, लाइटिंग और टेक्सचर।",
    "home.services.commercial.title": "कमर्शियल प्रोजेक्ट्स",
    "home.services.commercial.description":
      "ऑफिस और रिटेल स्पेस के लिए भरोसेमंद निष्पादन।",
    "home.features.ontime.title": "समय पर डिलीवरी",
    "home.features.ontime.description":
      "साप्ताहिक प्रगति अपडेट और माइलस्टोन-बेस्ड प्लानिंग।",
    "home.features.pricing.title": "पारदर्शी प्राइसिंग",
    "home.features.pricing.description":
      "स्पष्ट स्कोप, लाइन-आइटम्स, और आख़िरी समय के सरप्राइज़ नहीं।",
    "home.features.workforce.title": "कुशल टीम",
    "home.features.workforce.description":
      "क्वालिटी और सेफ्टी के लिए सुपरवाइज़ की गई अनुभवी टीमें।",
    "home.features.materials.title": "उच्च-गुणवत्ता सामग्री",
    "home.features.materials.description":
      "हम टिकाऊपन और प्रीमियम फिनिशिंग को प्राथमिकता देते हैं।",
    "home.testimonials.1.text":
      "बहुत प्रोफेशनल टीम। जैसा वादा किया था वैसा ही डिलीवर किया और पूरी प्रक्रिया पारदर्शी रही।",
    "home.testimonials.2.text":
      "काम साफ़, समय पर और फिनिश क्वालिटी शानदार थी। हर हफ्ते बढ़िया कोऑर्डिनेशन और अपडेट्स मिले।",
    "home.testimonials.3.text":
      "रेनोवेशन जल्दी और कम डिस्टर्बेंस के साथ किया। फाइनल हैंडओवर में डिटेल पर बहुत ध्यान था।",

    "nav.about": "परिचय",
    "nav.projects": "प्रोजेक्ट्स",
    "nav.services": "सेवाएं",
    "nav.reviews": "रिव्यू",
    "nav.contact": "संपर्क",
    "nav.settings": "सेटिंग्स",

    "hero.tagline": "सटीकता और भरोसे के साथ सपनों का निर्माण",
    "hero.description":
      "पारदर्शी प्राइसिंग, कुशल टीम और समय पर डिलीवरी के साथ उच्च-गुणवत्ता वाले रेजिडेंशियल और कमर्शियल निर्माण समाधान।",
    "hero.cta.consultation": "मुफ़्त सलाह लें",
    "hero.cta.callNow": "अभी कॉल करें",
    "hero.bullets.ontime": "समय पर डिलीवरी",
    "hero.bullets.pricing": "पारदर्शी प्राइसिंग",
    "hero.bullets.finishing": "प्रीमियम फिनिशिंग",
    "hero.whatsapp.consultation":
      "नमस्ते! मुझे अपने कंस्ट्रक्शन प्रोजेक्ट के लिए मुफ़्त कंसल्टेशन चाहिए।",

    "about.eyebrow": "परिचय",
    "about.title": "ऐसा निर्माण जिस पर आप भरोसा कर सकें",
    "about.description":
      "हम स्पष्ट स्कोप, अनुशासित निष्पादन और प्रीमियम फिनिश पर ध्यान देते हैं—ताकि आपको वही परिणाम मिले जो आपने सोचा था, बिना किसी सरप्राइज़ के।",
    "about.body":
      "{{location}} में आधारित, हम रेजिडेंशियल, कमर्शियल, रेनोवेशन और इंटीरियर प्रोजेक्ट्स पारदर्शी प्राइसिंग और साप्ताहिक अपडेट के साथ करते हैं।",

    "projects.eyebrow": "प्रोजेक्ट्स",
    "projects.title": "ऐसा काम जो आपके लिए खुद बोले",
    "projects.description":
      "क्लाइंट कॉल करने से पहले देखते हैं। ये वही प्रोजेक्ट्स हैं जो तुरंत भरोसा बनाते हैं।",
    "projects.viewDetails": "डिटेल देखें",

    "services.eyebrow": "सेवाएं",
    "services.title": "स्पष्ट सेवाएं, प्रीमियम निष्पादन",
    "services.description":
      "नई बिल्ड से लेकर रेनोवेशन और इंटीरियर तक—जो चाहिए चुनें, बाकी हम संभालेंगे।",

    "why.eyebrow": "हमें क्यों चुनें",
    "why.title": "भरोसे पर बना, अनुशासन के साथ पूरा",
    "why.description":
      "क्लाइंट हमें अनुमानित टाइमलाइन, ईमानदार प्राइसिंग और टिकाऊ फिनिश क्वालिटी के लिए चुनते हैं।",

    "testimonials.eyebrow": "टेस्टिमोनियल्स",
    "testimonials.title": "वो भरोसा जो कन्वर्ट करता है",
    "testimonials.description": "असल क्लाइंट। असल नतीजे। लगातार क्वालिटी।",
    "testimonials.rating": "5 स्टार रेटिंग",

    "contact.eyebrow": "संपर्क",
    "contact.title": "मुफ़्त कंसल्टेशन लें",
    "contact.description":
      "बताइए आप क्या बनवा रहे हैं। हम स्पष्ट प्लान, टाइमलाइन और अनुमान साझा करेंगे।",
    "contact.call": "कॉल",
    "contact.email": "ईमेल",
    "contact.form.name": "नाम",
    "contact.form.phone": "फोन",
    "contact.form.message": "मैसेज",
    "contact.form.namePlaceholder": "आपका नाम",
    "contact.form.phonePlaceholder": "+91 ...",
    "contact.form.messagePlaceholder":
      "अपने प्रोजेक्ट के बारे में लिखें (लोकेशन, बजट रेंज, टाइमलाइन)...",
    "contact.form.helper":
      "ईमेल पसंद है? सबमिट करने पर आपके मैसेज के साथ ईमेल ऐप खुलेगा।",
    "contact.form.submit": "ईमेल से भेजें",
    "contact.whatsapp.composed":
      "नमस्ते, मेरा नाम {{name}} है। फोन: {{phone}}.\n\n{{message}}",

    "footer.projects": "प्रोजेक्ट्स",
    "footer.services": "सेवाएं",
    "footer.contact": "संपर्क",

    "settings.eyebrow": "सेटिंग्स",
    "settings.title": "आपकी पसंद",
    "settings.description":
      "पूरे पेज के लिए भाषा चुनें। आपकी पसंद इस डिवाइस पर सेव रहेगी।",
    "settings.language.label": "भाषा",
    "settings.language.en": "English",
    "settings.language.hi": "हिंदी",
    "settings.language.hinglish": "Hinglish",
  },

  hinglish: {
    "home.stats.projectsCompleted": "Projects Completed",
    "home.stats.yearsExperience": "Years Experience",
    "home.stats.happyClients": "Happy Clients",
    "home.services.house.title": "House Construction",
    "home.services.house.description":
      "End-to-end residential build with clear milestones.",
    "home.services.renovation.title": "Renovation",
    "home.services.renovation.description":
      "Fast, clean upgrades with minimal downtime.",
    "home.services.interior.title": "Interior Work",
    "home.services.interior.description":
      "Premium finish, carpentry, lighting aur textures.",
    "home.services.commercial.title": "Commercial Projects",
    "home.services.commercial.description":
      "Offices aur retail spaces ke liye execution you can trust.",
    "home.features.ontime.title": "On-time delivery",
    "home.features.ontime.description":
      "Weekly progress updates aur milestone-based planning.",
    "home.features.pricing.title": "Transparent pricing",
    "home.features.pricing.description":
      "Clear scope, line items, aur last-minute surprises nahi.",
    "home.features.workforce.title": "Skilled workforce",
    "home.features.workforce.description":
      "Experienced teams, quality aur safety ke liye supervised.",
    "home.features.materials.title": "High-quality materials",
    "home.features.materials.description":
      "Durability aur premium finishing ko priority dete hain.",
    "home.testimonials.1.text":
      "Bahut professional team. Exactly promised jaisa deliver kiya aur sab kuch transparent rakha.",
    "home.testimonials.2.text":
      "Clean work, on time, aur finish quality excellent. Great coordination aur weekly updates.",
    "home.testimonials.3.text":
      "Renovation fast kiya with minimal disruption. Final handover mein detail par strong focus.",

    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.settings": "Settings",

    "hero.tagline": "Precision aur Trust ke saath Dream Homes",
    "hero.description":
      "Transparent pricing, skilled team aur on-time delivery ke saath high-quality residential & commercial construction solutions.",
    "hero.cta.consultation": "Free Consultation lo",
    "hero.cta.callNow": "Abhi Call karo",
    "hero.bullets.ontime": "On-time delivery",
    "hero.bullets.pricing": "Transparent pricing",
    "hero.bullets.finishing": "Premium finishing",
    "hero.whatsapp.consultation":
      "Hi! Mujhe apne construction project ke liye free consultation chahiye.",

    "about.eyebrow": "About",
    "about.title": "Construction jisme aap trust kar sako",
    "about.description":
      "Hum clear scope, disciplined execution aur premium finish par focus karte hain—taaki aapko wahi result mile jo aapne imagine kiya tha.",
    "about.body":
      "{{location}} based, hum residential, commercial, renovation aur interior projects transparent pricing aur weekly updates ke saath deliver karte hain.",

    "projects.eyebrow": "Projects",
    "projects.title": "Work jo aapke liye sell kare",
    "projects.description":
      "Client call se pehle browse karta hai. Ye projects instantly trust build karte hain.",
    "projects.viewDetails": "Details dekho",

    "services.eyebrow": "Services",
    "services.title": "Clear offerings, premium execution",
    "services.description":
      "New builds se leke renovations aur interiors—jo chahiye choose karo, baaki hum handle karenge.",

    "why.eyebrow": "Why choose us",
    "why.title": "Trust par built, discipline ke saath delivered",
    "why.description":
      "Clients hume predictable timelines, honest pricing aur finishing quality ke liye choose karte hain.",

    "testimonials.eyebrow": "Testimonials",
    "testimonials.title": "Social proof jo convert kare",
    "testimonials.description": "Real clients. Real results. Consistent quality.",
    "testimonials.rating": "5 star rating",

    "contact.eyebrow": "Contact",
    "contact.title": "Free consultation lo",
    "contact.description":
      "Aap kya build kar rahe ho batayein. Hum clear plan, timeline aur estimate share karenge.",
    "contact.call": "Call",
    "contact.email": "Email",
    "contact.form.name": "Name",
    "contact.form.phone": "Phone",
    "contact.form.message": "Message",
    "contact.form.namePlaceholder": "Aapka naam",
    "contact.form.phonePlaceholder": "+91 ...",
    "contact.form.messagePlaceholder":
      "Apna project describe karo (location, budget range, timeline)...",
    "contact.form.helper":
      "Email prefer? Submit karne par aapke message ke saath email app open hogi.",
    "contact.form.submit": "Email se bhejo",
    "contact.whatsapp.composed":
      "Hi, main {{name}}. Phone: {{phone}}.\n\n{{message}}",

    "footer.projects": "Projects",
    "footer.services": "Services",
    "footer.contact": "Contact",

    "settings.eyebrow": "Settings",
    "settings.title": "Your preferences",
    "settings.description":
      "Puri page ke liye language choose karo. Selection is device par save rahega.",
    "settings.language.label": "Language",
    "settings.language.en": "English",
    "settings.language.hi": "Hindi (हिंदी)",
    "settings.language.hinglish": "Hinglish",
  },
};

