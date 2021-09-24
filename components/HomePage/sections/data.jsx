export const landingCarousel = [
  // {
  //   image:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/desktop/hair.png",
  //   mobileImage:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/mobile/hair.png",
  //   title: "Hair",
  //   subtitle:
  //     "Early stages of hair loss can be reversed if you make that choice. Our solutions help with receding hairlines and boosts your hair's health.",
  //   // button: "Get Started",
  //   link: "/hair"
  // },
  // {
  //   image:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/desktop/weight.png",
  //   mobileImage:
  //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/mobile/weight.png",
  //   title: "Weight",
  //   subtitle:
  //     "Having a healthy body weight increases your overall wellness. We've developed for you our original ACV gummies that help you burn those calories.",
  //   // button: 'Get Started',
  //   link: "/weight"
  // },
  {
    image:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/v1597761171/staging/app/banners/mobile/skinm4.png",
    mobileImage:
      "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/mobile/acne.png",

    title: "Skin",
    subtitle:
      "From acne to aging, we have a solution for all your skin concerns.",
    button: "Get Started",
    link: "/skin"
  }
  // {
  //   image: 'https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/banners/desktop/ageing.png',
  //   title: 'Hair clinic at home',
  //   subtitle: 'Get your free and personal doctor consultation today!',
  //   button: 'Get Started',
  // },
];

export const landingPrograms = {
  title: "Women's Wellness Simplified",
  subtitle: [
    "Bodywise is a wellness revolution designed to help you reclaim control over your health, drowning out the chaotic information you deal with everyday.",
    "Bring the experts home with our carefully crafted care products for you",
    "Bodywise's expert led solutions deliver results on every step of your wellness journey. Now at your doorstep"
  ],
  options: [
    // {
    //   title: "Hair",
    //   color: "#eaaa18",
    //   image:
    //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/category_images/hair.png",
    //   disabled: true,
    //   link: "/hair",
    // },
    // {
    //   title: "Weight Loss",
    //   color: "#094720",
    //   image:
    //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/category_images/weight.png",
    //   disabled: true,
    //   link: "/weight",
    // },
    // {
    //   title: "Anti Ageing",
    //   color: "#3b485f",
    //   image:
    //     "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/category_images/ageing.png",
    //   disabled: true,
    //   link: "/anti-ageing",
    // },
    {
      title: "Skin",
      color: "#0a5225",
      image:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/app/category_images/ageing.png",
      disabled: false,
      link: "skin"
    }
  ]
};

export const landingPersonalized = {
  title: "Feeling confused? ",
  subtitle: [
    "Think of us as your partner in wellness at every step. ",
    "Bodywise's assesment, takes you trough several questions that speak specifically to you health to give you scores for various factors that impact on your skin, hair and weight. We give you actionable steps that will help you reclaim control over the chaos by understanding your health. The assesment lays out clearly the information you need to help you take better care of yourself and achieve clear, youthful and health skin, shiny healthy full head of hair and a healthy and active body."
  ],
  button: "Begin Consultation",
  options: [{}]
};

export const landingRecommended = {
  title: "Expert Recommended Solutions",
  subtitle:
    "Discover doctors developed skin, hair and weight management regimens that improve the overall health of your skin, hair and body.",
  button: "VIEW ALL PRODUCT",
  products: [
    {
      name: "Acne Control Foaming Wash",
      imgUrl:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/acne-control-wash/Foam_Face_washl_600x600.png",
      url_key: "acne-control-wash",
      // desc: "Cleanse + Nourish",
      price: 599,
      step: "Step 1",
      step_name: "CLEANSE",
      task: "Active Acne"
    },
    {
      name: "Skin Health Gummies",
      imgUrl:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-health-gummies/Skin_gummies_600x600.png",
      url_key: "skin-health-gummies",
      // desc: "Cleanse + Repair + Moisturize + protect",
      price: 499,
      step: "Step 2",
      step_name: "REPAIR",
      task: "Active Acne"
    },
    {
      name: "Skin Clarifying Serum",
      imgUrl:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-clarifying/Bodywise__Acne_Serum_monocarton_2.png",
      url_key: "skin-clarifying",
      // desc: "Cleanse + Repair + Moisturize + protect",
      price: 499,
      step: "Step 3",
      step_name: "MOISTURISE",
      task: "Acne Scars"
    },
    {
      name: "Skin Revitilizing Oil-in-Serum",
      imgUrl:
        "https://res.cloudinary.com/mosaic-wellness/image/upload/staging/products/skin-revitilizing-oil/-Revitalizing-Serum-600x600.png",
      url_key: "skin-revitilizing-oil",
      // desc: "Cleanse + Repair + Moisturize + protect",
      price: 499,
      step: "Step 4",
      step_name: "PROTECT",
      task: "Sun & blue light protection"
    }
  ]
};

export const landingHowItWorks = {
  title: "How It Works",
  subtitle: "",
  options: [
    {
      title: "Help us know you",
      subtitle: [
        "Know what you're looking for? Browse Our Carefully Crafted Solutions",
        "Not sure what will work for you? Schedule a free online consultation with our renowned  experts"
      ]
    },
    {
      title: "Wellness at your doorstep",
      subtitle: [
        "Free & Instant Delivery",
        "Expect your products within 3-5 days"
      ]
    },
    {
      title: "Your Regime. Your Expert",
      subtitle: [
        "Extended Care & Treatment",
        "Our Doctors will track your progress post purchase and ensure you’re on the right path"
      ]
    }
  ],
  button: "Shop Now"
};

export const landingMeetExperts = {
  title: "Meet the Experts",
  subtitle:
    "Meet our experts who developed skin, hair and weight management regimens that improve the overall health of your skin, hair and body.",
  options: [
    {
      expert: {
        name: "Dr. Sharmatha",
        description:
          "Dr. Sharmatha is a practicing dermatologist with 8 years of experience. She has a keen interest in cosmetic & aesthetic dermatology. Hair restoration is her area of expertise & she has helped many patients prevent & fight hair loss.",
        desig: "Doctor",
        qualifications: "MBBS",
        expertise: "Cosmetic & aesthetic dermatology"
      }
    },
    {
      expert: {
        name: "Dr. Pallavi Rathi",
        description:
          "Dr. Pallavi Rathi is a Consulting Dermatologist  Trichologist and Cosmetic Surgeon. She has been practicing in Mumbai for more than 12 years and has a keen interest in the field of Aesthetic Medicine. She has been trained nationally and internationally for various Skin and Haircare procedures.",
        desig: "Doctor",
        qualifications: "MBBS",
        expertise:
          "Hair Transplant, Micropigmentation, Lasers, Botox, Fillers, Threadlift"
      }
    },
    {
      expert: {
        name: "Dr. Shobhita Anand",
        description:
          "Dr Shobita Anand is a knowledgable general physician and practising cosmetologist in Mumbai with a working experience of 3 years .she is attached to various esteemed hospitals and clinics. She is disciplined and dedicated consultant with great understanding of skin and hair conditions for early diagnosis and timely treatment.",
        desig: "Doctor",
        qualifications: "BMS, Internal Medicine",
        expertise: "Cosmetology"
      }
    },
    {
      expert: {
        name: "Dr. Mamta Nadar",
        description:
          "Dr. Mamta Nadar M.B.B.S. is a General Physician with an experience of more than 3 years working in Government hospitals in Mumbai. Her area of expertise is General medicine and special interest in Dermatology. She believes in Henry George Bohn's famous quote,  Nature, Time and Patience are three great physicians.",
        desig: "Doctor",
        qualifications: "MBBS",
        expertise: "Dermatology"
      }
    }
  ]
};

export const landingPopularCollections = {
  title: "Browse Popular Collection",
  options: [
    {
      title: "Rs 999 Store",
      background:
        "linear-gradient(to left top, rgb(103, 103, 222), rgb(255, 255, 107))"
    },
    {
      title: "Essentials",
      background:
        "linear-gradient(to left top, rgb(255, 255, 107), rgb(96, 142, 214))"
    },
    {
      title: "Loved by All",
      background:
        "linear-gradient(to left top, rgb(96, 142, 214), rgb(235, 99, 113))"
    },
    {
      title: "New Arrivals",
      background:
        "linear-gradient(to left top, rgb(235, 99, 113), rgb(103, 103, 222))"
    }
  ]
};

export const landingCustomerComments = {
  title: "Our Customer Love Us",
  subtitle: "Here are some stories from some of ClubWise Members",
  options: [
    {
      text:
        "Love my skin now! Thank you Bodywise.This kit is all you need in for your skin care routine. The 4 step regime is a wonderful way to mantain healthy and clear skin. My skin is prone to acne and I constantly struggle with breakouts. The acne face wash and gel have worked amazingly and the skin clarifying serum makes my skin so smooth.",
      name: "Arpita",
      productName: "The Bodywise Experience - Clear Skin Edition",
      age: 29
    }
  ]
};

export const landingBanner = {
  title: "Backed by research , Trusted by Doctors.",
  subtitle:
    "Take our assessment and we will suggest the best kits according to your needs.",
  button: "Begin Assessment"
};

export const howTelemedicineWorks = {
  step1: {
    title: "Create an account and share your details",
    sub_text:
      "We have now learnt everything we need to know about your body! On our online platform, there are doctors at the ready to answer your questions on your terms and in your own time. Get connected with a doctor to start your diagnosis and talk about your treatment options. "
  },
  step2: {
    title: "Schedule a free teleconsultation appointment with our doctors",
    sub_text:
      "We have now learnt everything we need to know about your body! On our online platform, there are doctors at the ready to answer your questions on your terms and in your own time. Get connected with a doctor to start your diagnosis and talk about your treatment options."
  },
  step3: {
    title: "Understand your treatment options",
    sub_text:
      "If you still need more answers, understand your treatment options directly from our expert doctors and get started on your wellness journey."
  },
  step4: {
    title: "Get your products delivered ",
    sub_text:
      "After the teleconsultation, if your doctor decides a prescription we offer is right for you, you will get the treatment products shipped to your house. "
  },
  step5: {
    title: "Follow-up sessions with our doctors",
    sub_text:
      "Your progress will be monitored by our physicians to help keep you on the right path to holistic wellness"
  }
};

export const keyArticles = {
  article1: {
    title: "A holistics skin care guide for women, (in their 20s) WITH ACNE",
    link:
      "https://docs.google.com/document/d/1s2opWW3qFAcFr6Gs7wiyb6-nYvFyAi_U/edit#heading=h.gjdgxs",
    description:
      "Tired of acne? We got an expert-driven skincare routine for you!"
  },
  article2: {
    title:
      "A holistics skin care guide for women, (in their 20s) WITH AGING CONCERNS",
    link:
      "https://docs.google.com/document/d/12a1kiTbTbtOkWVIMY3eBzdFKa1bjWRWo/edit",
    description:
      "Age catching up? We got an expert-driven skincare routine for you!"
  },
  article3: {
    title: "Everything you need to know about female pattern baldness",
    link:
      "https://docs.google.com/document/d/1Y9GEF0TIxso1DJ_9ZAFmVh6fivaUQifI/edit",
    description: "Learn how to recognize and treat female hair loss"
  },
  article4: {
    title: "Correlation between food and hair loss",
    link:
      "https://docs.google.com/document/d/1vY0uhnpGiimfUiK2LPXSTZxWGiLuPwS4doP1gNwLiC8/edit#",
    description:
      "When you don't get the vitamins, minerals, and other nutrients that your body needs from your diet, it can cause a loss of hair. Understand what your body and hair needs."
  },
  article5: {
    title: "How does your gut health influence weight loss",
    link:
      "https://docs.google.com/document/d/1sPZC5Joxd0PiD2BwewEIg2S7-jFZdK4b/edit?dls=true",
    description:
      "Your gut bacteria can affect how your food is digested, how fat is stored and whether you feel hungry or full. Thus, a healthy gut bacteria may be important for maintaining a healthy weight. "
  }
};
