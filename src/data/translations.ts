export type Language = 'en' | 'kn' | 'hi'

export interface LanguageOption {
  code: Language
  label: string
  nativeLabel: string
  shortLabel: string
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'EN' },
  { code: 'kn', label: 'Kannada', nativeLabel: 'ಕನ್ನಡ', shortLabel: 'ಕ' },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', shortLabel: 'हि' }
]

export interface TranslationDictionary {
  nav: {
    home: string
    about: string
    projects: string
    activities: string
    gallery: string
    getInvolved: string
    contact: string
    donate: string
    donateNow: string
    menu: string
    closeMenu: string
    language: string
  }
  org: {
    name: string
    fullName: string
    tagline: string
    shortTagline: string
    established: string
    regDetails: string
    slogan: string
    sloganShort: string
    auditBadge: string
    addressLabel: string
    hqLocation: string
    centralSecretariat: string
    phoneLabel: string
    emailLabel: string
    websiteLabel: string
    workingHours: string
    workingHoursVal: string
  }
  common: {
    donateNow: string
    viewDetails: string
    exploreProjects: string
    exploreActivities: string
    learnMore: string
    joinAsVolunteer: string
    backToProjects: string
    backToActivities: string
    backToHome: string
    close: string
    submit: string
    submitting: string
    copy: string
    copied: string
    download: string
    share: string
    filterAll: string
    readMore: string
    viewAll: string
    search: string
    send: string
    sending: string
    seeImpact: string
    pledgeNow: string
    transparent: string
    zeroCommission: string
    verified: string
    monthly: string
    oneTime: string
    all: string
    loading: string
    success: string
    error: string
    sendAnother: string
    next: string
    prev: string
    required: string
    optional: string
    or: string
    call: string
    dayMode: string
    nightMode: string
    now: string
  }
  hero: {
    establishedBadge: string
    title: string
    subtitle: string
    donateCta: string
    donateBannerTitle: string
    impactCta: string
    activeVolunteers: string
    emergencyFundBanner: string
    emergencyFundTitle: string
    emergencyFundDesc: string
    liveCounters: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    whoWeAreBadge: string
    whoWeAreTitle: string
    whoWeAreText1: string
    whoWeAreText2: string
    teamBadge: string
    teamTitle: string
    teamDesc: string
    teamPhotoAlt: string
    visionTitle: string
    visionText: string
    missionTitle: string
    missionText: string
    coreValuesTitle: string
    coreValuesSubtitle: string
    values: {
      transparencyTitle: string
      transparencyDesc: string
      compassionTitle: string
      compassionDesc: string
      dignityTitle: string
      dignityDesc: string
      sustainabilityTitle: string
      sustainabilityDesc: string
    }
    historyTitle: string
    historyText: string
    boardTitle: string
    boardSubtitle: string
    pillarsTitle: string
    pillarsSubtitle: string
    pillarsDesc: string
    trustTitle: string
    trustPoint1: string
    trustPoint2: string
    trustPoint3: string
    trustPoint4: string
    hqTitle: string
  }
  stats: {
    housesDelivered: string
    housesSubtext: string
    masjidsRevived: string
    masjidsSubtext: string
    orphansNurtured: string
    orphansSubtext: string
    bloodUnits: string
    bloodSubtext: string
    auditTransparency: string
    auditSubtext: string
  }
  pillars: {
    housingTitle: string
    housingDesc: string
    orphanCareTitle: string
    orphanCareDesc: string
    masjidRevivalTitle: string
    masjidRevivalDesc: string
    healthcareTitle: string
    healthcareDesc: string
  }
  projects: {
    eyebrow: string
    title: string
    subtitle: string
    allProgramsBadge: string
    allProgramsTitle: string
    viewAll: string
    achievementsTitle: string
    futureGoalsTitle: string
    tiersTitle: string
    ashiyana: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statHomesBuilt: string
      statTarget: string
      statAvgCost: string
    }
    chittor: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statBoys: string
      statCampus: string
      statCurriculum: string
    }
    masjid: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statReopened: string
      statNewBuilt: string
      statReach: string
    }
    educationCity: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    boondh: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    libaas: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
  }
  activities: {
    eyebrow: string
    title: string
    subtitle: string
    wingsBadge: string
    wingsTitle: string
    featuresTitle: string
    impactTitle: string
    medical: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statBlood: string
      statEquipment: string
      statHelpline: string
    }
    education: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statStudents: string
      statScholarships: string
      statCamps: string
    }
    youth: {
      title: string
      subtitle: string
      badge: string
      overview: string
      statVolunteers: string
      statWorkshops: string
      statDrives: string
    }
    womenSkill: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
    disasterRelief: {
      title: string
      subtitle: string
      badge: string
      overview: string
    }
  }
  gallery: {
    eyebrow: string
    title: string
    subtitle: string
    filters: {
      all: string
      housing: string
      orphanage: string
      masjid: string
      healthcare: string
      education: string
      community: string
      youth: string
    }
    emptyMessage: string
  }
  reels: {
    eyebrow: string
    title: string
    subtitle: string
    previous: string
    next: string
    viewReel: string
    followUs: string
    mute: string
    unmute: string
  }
  getInvolved: {
    eyebrow: string
    title: string
    description: string
    calculatorBadge: string
    calculatorTitle: string
    calculatorSubtitle: string
    volunteerBadge: string
    volunteerTitle: string
    volunteerSubtitle: string
    form: {
      fullName: string
      fullNamePlaceholder: string
      email: string
      emailPlaceholder: string
      phone: string
      phonePlaceholder: string
      city: string
      cityPlaceholder: string
      skillsLabel: string
      availableHours: string
      availableHoursPlaceholder: string
      notes: string
      notesPlaceholder: string
      submitButton: string
      submittingButton: string
      submitError: string
      whatsAppButton: string
      successTitle: string
      successMessage: string
      submitAnother: string
    }
    skills: {
      bloodDonation: string
      teaching: string
      disasterResponse: string
      mediaDesign: string
      fieldVerification: string
      eventLogistics: string
    }
    bankCard: {
      title: string
      subtitle: string
      accountName: string
      accountNumber: string
      ifsc: string
      branch: string
      upiId: string
      taxNote: string
      copyDetails: string
    }
    faqTitle: string
    faqSubtitle: string
    faqs: {
      q1: string
      a1: string
      q2: string
      a2: string
      q3: string
      a3: string
      q4: string
      a4: string
    }
  }
  contact: {
    eyebrow: string
    title: string
    description: string
    centralSecretariat: string
    hours: string
    hoursValue: string
    primaryPhoneLabel: string
    altPhoneLabel: string
    emailLabel: string
    formTitle: string
    formSubtitle: string
    nameLabel: string
    namePlaceholder: string
    emailInputLabel: string
    emailPlaceholder: string
    phoneInputLabel: string
    phonePlaceholder: string
    subjectLabel: string
    subjectPlaceholder: string
    subjects: {
      general: string
      donation: string
      volunteer: string
      medical: string
      partnership: string
      other: string
    }
    messageFieldLabel: string
    messagePlaceholder: string
    sendMessage: string
    sendingMessage: string
    submitError: string
    whatsAppButton: string
    whatsAppHint: string
    messageSentTitle: string
    messageSentText: string
    sendAnother: string
  }
  donateModal: {
    title: string
    subtitle: string
    forCause: string
    generalFund: string
    presetAmounts: string
    customAmount: string
    customAmountPlaceholder: string
    tabScanQr: string
    tabBankTransfer: string
    fastestBadge: string
    beneficiaryName: string
    accountNumber: string
    ifscCode: string
    branch: string
    branchValue: string
    upiId: string
    scanQr: string
    showQr: string
    hideQr: string
    qrHelp: string
    qrSecurityTitle: string
    qrSecurityNote: string
    tax80GNote: string
    notifyWhatsapp: string
    close: string
    copiedToast: string
  }
  footer: {
    aboutText: string
    zeroCommission: string
    exploreTitle: string
    programsTitle: string
    supportUs: string
    bankAccount: string
    donateQr: string
    allRightsReserved: string
    addressFull: string
    slogan: string
    developedBy: string
  }
}

export const translations: Record<Language, any> = {
  // ==========================================
  // ENGLISH TRANSLATIONS
  // ==========================================
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      activities: 'Activities',
      gallery: 'Gallery',
      getInvolved: 'Get Involved',
      contact: 'Contact',
      donate: 'Donate',
      donateNow: 'Donate Now',
      menu: 'Menu',
      closeMenu: 'Close Menu',
      language: 'Language'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'Highland Islamic Forum (HIF INDIA)',
      tagline: 'Empowering Communities, Transforming Lives with Compassion & Dignity',
      shortTagline: 'Empowering Communities, Transforming Lives',
      established: 'Registered NGO in Mangaluru',
      regDetails: 'Registered NGO under Indian Trusts Act',
      slogan: '100% direct, zero-commission grassroots disbursement',
      sloganShort: '100% Direct Grassroots Relief',
      auditBadge: 'Audited & Transparent',
      addressLabel: 'Address',
      hqLocation: 'Masjid Ehsaan Complex, Kankanady, Mangalore – 575002',
      centralSecretariat: 'Central Secretariat',
      phoneLabel: 'Phone',
      emailLabel: 'Email',
      websiteLabel: 'Website',
      workingHours: 'Working Hours',
      workingHoursVal: '9:00 AM – 7:00 PM (Mon–Sat)'
    },
    common: {
      donateNow: 'Donate Now',
      viewDetails: 'View Details',
      exploreProjects: 'Explore Projects',
      exploreActivities: 'Explore Activities',
      learnMore: 'Learn More',
      joinAsVolunteer: 'Join as Volunteer',
      backToProjects: 'Back to Projects',
      backToActivities: 'Back to Activities',
      backToHome: 'Back to Home',
      close: 'Close',
      submit: 'Submit',
      submitting: 'Submitting...',
      copy: 'Copy',
      copied: 'Copied!',
      download: 'Download',
      share: 'Share',
      filterAll: 'All',
      readMore: 'Read More',
      viewAll: 'View All',
      search: 'Search',
      send: 'Send Message',
      sending: 'Sending...',
      seeImpact: 'See Our Impact',
      pledgeNow: 'Pledge Now',
      transparent: '100% Transparent',
      zeroCommission: 'Zero Commission',
      verified: 'Verified Grassroots NGO',
      monthly: 'Monthly',
      oneTime: 'One Time',
      all: 'All',
      loading: 'Loading...',
      success: 'Success',
      error: 'Error',
      sendAnother: 'Send Another',
      next: 'Next',
      prev: 'Previous',
      required: 'Required',
      optional: 'Optional',
      or: 'or',
      call: 'Call',
      dayMode: 'Day (Light) Mode',
      nightMode: 'Night (Dark) Mode',
      now: 'Now'
    },
    hero: {
      establishedBadge: 'Registered NGO in Mangaluru',
      title: 'Dignity, shelter & hope for communities across Karnataka.',
      subtitle:
        'HIF INDIA builds permanent homes, nurtures orphaned children, revives rural masjids, and delivers free medical relief — with 100% direct, transparent grassroots impact.',
      donateCta: 'Donate Now',
      donateBannerTitle: 'Your support builds homes, futures, and hope.',
      impactCta: 'See Our Impact',
      activeVolunteers: 'Active Volunteers Across Coastal Karnataka',
      emergencyFundBanner: 'Emergency Relief Active: Providing Flood, Medical, and Food Relief Support.',
      emergencyFundTitle: 'Immediate Humanitarian Response',
      emergencyFundDesc: 'Mobilizing direct assistance for vulnerable families in distress.',
      liveCounters: 'Real-Time Impact Metrics'
    },
    about: {
      eyebrow: 'About HIF INDIA',
      title: 'A grassroots trust, built on community trust.',
      description:
        'Highland Islamic Forum (HIF INDIA) is a registered NGO headquartered in Mangaluru, working across Karnataka and Andhra Pradesh.',
      whoWeAreBadge: 'Who We Are',
      whoWeAreTitle: 'Highland Islamic Forum (HIF INDIA)',
      whoWeAreText1:
        'Empowering Communities, Transforming Lives with Compassion & Dignity. Since our founding, we have focused on tangible, measurable interventions — permanent housing for the homeless, a loving residential sanctuary for orphaned boys, restoration of abandoned rural masjids, and free-of-cost medical equipment loans and blood donation coordination for families in crisis.',
      whoWeAreText2:
        'Registered NGO under Indian Trusts Act, HIF INDIA operates on a strict zero-commission policy: every rupee donated toward a specific project is channeled directly into materials, labor, meals, or medical relief for the intended beneficiaries.',
      teamBadge: 'Our Community',
      teamTitle: 'The people behind the mission',
      teamDesc:
        'HIF India is powered by hundreds of volunteers, youth leaders, and community members who show up with compassion at every event, programme, and relief drive.',
      teamPhotoAlt: 'HIF India team and community',
      visionTitle: 'Our Vision',
      visionText:
        'To build a righteous, self-reliant, and compassionate society where no family is left shelterless, every orphan finds a loving sanctuary of growth, rural places of worship flourish with knowledge, and healthcare is accessible to all regardless of socio-economic standing.',
      missionTitle: 'Our Mission',
      missionText:
        'To systematically alleviate poverty, homelessness, and educational deprivation through transparent, community-driven, sustainable programs rooted in Islamic ethical values of universal mercy, dignity, and brotherhood.',
      coreValuesTitle: 'Our Core Values',
      coreValuesSubtitle: 'Guiding principles that govern every initiative and grassroots intervention.',
      values: {
        transparencyTitle: '100% Transparency',
        transparencyDesc:
          'Every rupee received is publicly accounted for and channeled directly to the field with zero administrative cuts.',
        compassionTitle: 'Universal Compassion',
        compassionDesc:
          'Serving all human beings with genuine care, empathy, and unconditional brotherhood regardless of background.',
        dignityTitle: 'Upholding Human Dignity',
        dignityDesc:
          'Empowering recipients through permanent solutions and respect, rather than temporary patronizing charity.',
        sustainabilityTitle: 'Sustainable Impact',
        sustainabilityDesc:
          'Designing long-term programs in housing, education, and solar-powered facilities that endure for generations.'
      },
      historyTitle: 'Our Journey',
      historyText:
        'Starting as a grassroots youth collective in Mangaluru, HIF evolved into a state-wide humanitarian organization touching thousands of lives with housing, orphan nurture, and healthcare.',
      boardTitle: 'Board of Trustees & Leadership',
      boardSubtitle: 'Guided by experienced community leaders, scholars, and dedicated social workers.',
      pillarsTitle: 'Our Four Pillars',
      pillarsSubtitle: 'Integrated programs addressing the essential foundations of a dignified life.',
      pillarsDesc:
        'Every rupee donated flows into one of these four pillars — connected to a single, transparent core commitment to grassroots dignity.',
      trustTitle: 'Transparency & Trust',
      trustPoint1: 'Registered NGO under Indian Trusts Act, based in Mangaluru, Karnataka.',
      trustPoint2: '100% direct, zero-commission disbursement to grassroots beneficiaries.',
      trustPoint3: 'Annual financial audits with donor-visible spend breakdowns on request.',
      trustPoint4: 'Transfer receipts and 80G tax exemption certificates issued for contributions.',
      hqTitle: 'Headquarters'
    },
    stats: {
      housesDelivered: 'Houses Delivered',
      housesSubtext: 'Goal: 150 by 2030 in Project Ashiyana',
      masjidsRevived: 'Masjids Revived & Maintained',
      masjidsSubtext: 'Across Karnataka & Andhra Pradesh',
      orphansNurtured: 'Orphan Students Nurtured',
      orphansSubtext: 'Comprehensive living, Hifz & modern schooling',
      bloodUnits: 'Blood Units Mobilized',
      bloodSubtext: 'Life-saving emergency blood cell units',
      auditTransparency: 'Audit & Transparency',
      auditSubtext: 'Direct zero-commission grassroots disbursement'
    },
    pillars: {
      housingTitle: 'Housing',
      housingDesc: 'Permanent Ashiyana homes for destitute families',
      orphanCareTitle: 'Orphan Care',
      orphanCareDesc: 'Chittor sanctuary nurturing 225 boys',
      masjidRevivalTitle: 'Masjid Revival',
      masjidRevivalDesc: '150+ rural masjids restored & maintained',
      healthcareTitle: 'Healthcare',
      healthcareDesc: 'Free MEDIBANK equipment & blood donor network'
    },
    projects: {
      eyebrow: 'Our Projects',
      title: 'Flagship programs, built for lasting change.',
      subtitle:
        'Three long-term initiatives addressing housing, orphan care, and spiritual community infrastructure across South India.',
      allProgramsBadge: 'All Programs',
      allProgramsTitle: 'Every project, transparently tracked from fund to field.',
      viewAll: 'View All Projects',
      achievementsTitle: 'Key Achievements',
      futureGoalsTitle: 'Future Goals',
      tiersTitle: 'Sponsorship Tiers',
      ashiyana: {
        title: 'Project Ashiyana',
        subtitle: 'Shelter of Dignity for Homeless & Destitute Families',
        badge: 'Housing Mission',
        overview:
          'Project Ashiyana provides solid, dignified homes for widowed mothers, impoverished rural families, and disabled breadwinners living in dilapidated shacks.',
        statHomesBuilt: '36 Homes Built',
        statTarget: 'Target: 150 Homes by 2030',
        statAvgCost: '₹6.5 – ₹8 Lakh Avg Cost'
      },
      chittor: {
        title: 'Chittor Dream Project',
        subtitle: 'HIF Yateemkana – A 2-Acre Loving Sanctuary for Orphaned Boys',
        badge: 'Orphan Sanctuary',
        overview:
          'A historic 100-year-old educational sanctuary revitalized into a modern campus providing world-class English medium schooling, memorization of Quran, and character building.',
        statBoys: '225 Boys Enrolled',
        statCampus: '2.0 Acres Campus',
        statCurriculum: 'Schooling + Hifz + Aleem'
      },
      masjid: {
        title: 'Masjid Development Programme',
        subtitle: 'Reopening Closed Masjids & Empowering Rural Spiritual Centers',
        badge: 'Spiritual Community',
        overview:
          'Restoring life, prayers, and community education to abandoned rural masjids while constructing new centers of worship in underserved settlements.',
        statReopened: '150+ Masjids Reopened',
        statNewBuilt: '8 Masjids Constructed/Renovated',
        statReach: 'Karnataka & Andhra Pradesh'
      },
      educationCity: {
        title: 'HIF Education City',
        subtitle: 'A 3.82-Acre Arabic Academy Rising in Assaigoli, Mangaluru',
        badge: 'Islamic Education Infrastructure',
        overview:
          'A state-of-the-art Arabic Academy coming up on a 3.82-acre campus in Assaigoli, Mangaluru, envisioned to transform Islamic learning for generations of students.'
      },
      boondh: {
        title: 'Project Boondh',
        subtitle: 'Safe Drinking Water for Underserved Communities',
        badge: 'Water Security',
        overview:
          'Project Boondh ensures access to clean and safe drinking water for underserved communities through borewells, water tankers, and filtration infrastructure.'
      },
      libaas: {
        title: 'Project Libaas',
        subtitle: 'Dignity in Celebration for Underprivileged Brides & Grooms',
        badge: 'Dignity & Celebration',
        overview:
          'Project Libaas provides wedding dresses for brides and grooms from underprivileged families, helping them celebrate their special day with dignity.'
      }
    },
    activities: {
      eyebrow: 'Activities & Wings',
      title: 'Specialized wings for targeted community impact.',
      subtitle:
        'From emergency medical equipment to youth development and academic aid, our dedicated wings provide continuous grassroots support.',
      wingsBadge: 'Our Wings',
      wingsTitle: 'Continuous community intervention across health, education, and youth.',
      featuresTitle: 'What We Do',
      impactTitle: 'Impact So Far',
      medical: {
        title: 'HIF Medical Cell & MEDIBANK',
        subtitle: 'Free Medical Equipment on Loan & Life-Saving Healthcare Support',
        badge: 'Healthcare & Relief',
        overview:
          'Providing free loans of expensive medical devices (hospital beds, oxygen concentrators, wheelchairs) and coordinating emergency blood donors and dialysis subsidies.',
        statBlood: '1,500+ Blood Units Donated',
        statEquipment: '200+ Equipment Pool',
        statHelpline: '24/7 Helpline Support'
      },
      education: {
        title: 'HIF Education Wing',
        subtitle: 'Nurturing Academic Excellence, Digital Skills & Value Education',
        badge: 'Academic Empowerment',
        overview:
          'Empowering underprivileged students with merit scholarships, free school bags, textbook distribution, computer education, and summer personality camps.',
        statStudents: '2,500+ Students Assisted',
        statScholarships: '₹40L+ Scholarships Awarded',
        statCamps: '45+ Batches Conducted'
      },
      youth: {
        title: 'HIF Youth Wing Education Cell',
        subtitle: 'Inspiring Next-Gen Leaders with Skills, English & Community Service',
        badge: 'Youth Leadership',
        overview:
          'Mobilizing energetic youth into social change-makers through spoken English courses, digital literacy, disaster relief response, and ethical mentoring.',
        statVolunteers: '300+ Active Youth Volunteers',
        statWorkshops: '60+ Skill Workshops',
        statDrives: '120+ Community Drives'
      },
      womenSkill: {
        title: 'Women Skill & Livelihood Center',
        subtitle: 'Tailoring, Vocational Craft & Micro-Enterprise Support',
        badge: 'Livelihood',
        overview:
          'Empowering widowed and low-income women with tailoring machines, embroidery training, and home enterprise incubation.'
      },
      disasterRelief: {
        title: 'Disaster Relief & Rapid Response',
        subtitle: 'Flood Relief, Ration Kits & Emergency Rehabilitation',
        badge: 'Emergency Aid',
        overview:
          'Deploying emergency volunteer rescue teams, potable water, ration kits, and home repair materials during monsoon floods and calamities.'
      }
    },
    gallery: {
      eyebrow: 'Impact Gallery',
      title: 'Moments of change from the ground.',
      subtitle:
        'A visual record of homes handed over, students taught, masjids revived, and lives touched — captured across our project sites.',
      filters: {
        all: 'All',
        housing: 'Housing',
        orphanage: 'Orphanage',
        masjid: 'Masjid',
        healthcare: 'Healthcare',
        education: 'Education',
        community: 'Community',
        youth: 'Youth'
      },
      emptyMessage: 'No photos found for this category.'
    },
    reels: {
      eyebrow: 'Our Reels',
      title: 'Stories worth watching, straight from the field',
      subtitle:
        'A closer look at the moments behind our work — home handovers, classroom days, and relief drives, told through short reels.',
      previous: 'Previous reel',
      next: 'Next reel',
      viewReel: 'View reel',
      followUs: 'Follow @hif_india for more',
      mute: 'Mute',
      unmute: 'Unmute'
    },
    getInvolved: {
      eyebrow: 'Get Involved',
      title: 'Everyone has a role to play.',
      description:
        'Calculate your impact, sign up to volunteer, or contribute directly — every path leads to real change on the ground.',
      calculatorBadge: 'Impact Calculator',
      calculatorTitle: 'See what your gift can do',
      calculatorSubtitle: 'Choose an amount to see the tangible change you will bring.',
      volunteerBadge: 'Join the Movement',
      volunteerTitle: 'Become a HIF Volunteer',
      volunteerSubtitle: 'Put your skills and time into action for lasting community transformation.',
      form: {
        fullName: 'Full Name *',
        fullNamePlaceholder: 'e.g. Mohammed Farooq',
        email: 'Email Address *',
        emailPlaceholder: 'you@example.com',
        phone: 'Phone / WhatsApp *',
        phonePlaceholder: '+91 98765 43210',
        city: 'City / Location *',
        cityPlaceholder: 'e.g. Mangalore, Udupi, Bengaluru',
        skillsLabel: 'How would you like to contribute? (Select skills)',
        availableHours: 'Available Hours / Week',
        availableHoursPlaceholder: 'e.g. 4-6 hours / weekends',
        notes: 'Brief Introduction / Relevant Experience',
        notesPlaceholder: 'Tell us a little about your background, hobbies, or why you want to volunteer...',
        submitButton: 'Register as Volunteer',
        submittingButton: 'Submitting...',
        submitError: 'Unable to submit your application. Please try again or message us on WhatsApp.',
        whatsAppButton: 'Message us on WhatsApp',
        successTitle: 'Thank You for Registering!',
        successMessage: 'Our volunteer coordinator will get in touch with you via WhatsApp or phone shortly.',
        submitAnother: 'Submit Another Application'
      },
      skills: {
        bloodDonation: 'Blood Donation / Medical Coordination',
        teaching: 'Teaching / Spoken English / Tutoring',
        disasterResponse: 'Disaster & Flood Emergency Response',
        mediaDesign: 'Graphic Design, Video & Social Media',
        fieldVerification: 'Ashiyana Field Verification & Relief',
        eventLogistics: 'Event Organization & Logistics'
      },
      bankCard: {
        title: 'Direct Bank Transfer',
        subtitle: 'Directly fund our accounts with zero processing fees',
        accountName: 'Beneficiary Name',
        accountNumber: 'Account Number',
        ifsc: 'IFSC Code',
        branch: 'Branch',
        upiId: 'UPI ID',
        taxNote: 'All donations are eligible for 80G tax exemption benefits.',
        copyDetails: 'Copy All Bank Details'
      },
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Clear answers on how donations, audits, and projects are managed.',
      faqs: {
        q1: 'Is HIF India eligible for 80G tax deductions?',
        a1: 'Yes, donations to HIF INDIA are eligible for 80G tax exemption under the Indian Income Tax Act. Official receipts and certificates are provided.',
        q2: 'How much of my donation goes directly to beneficiaries?',
        a2: '100% of project-designated donations go directly to materials, labor, food, or medical aid with zero administrative cuts.',
        q3: 'Can I sponsor an entire Ashiyana home or orphan student?',
        a3: 'Yes! You can sponsor an entire home construction (₹7.5L) or sponsor an orphan student annually (₹15,000/yr) with full milestone reports.',
        q4: 'Can I volunteer remotely if I live outside Mangalore?',
        a4: 'Absolutely. We welcome remote volunteers for digital design, translation, web development, curriculum drafting, and social media outreach.'
      }
    },
    contact: {
      eyebrow: 'Contact',
      title: "We'd love to hear from you.",
      description:
        'Reach our Mangaluru headquarters for donations, sponsorships, medical equipment requests, or volunteering.',
      centralSecretariat: 'Central Secretariat',
      hours: 'Working Hours',
      hoursValue: '9:00 AM – 7:00 PM (Mon–Sat)',
      primaryPhoneLabel: 'Primary Office & Medical Cell',
      altPhoneLabel: 'Alternate Helpline',
      emailLabel: 'Official Email',
      formTitle: 'Send Us a Message',
      formSubtitle: 'We typically respond within 24 hours.',
      nameLabel: 'Full Name *',
      namePlaceholder: 'e.g. Ahmed Khan',
      emailInputLabel: 'Email Address *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'Phone / WhatsApp',
      phonePlaceholder: '+91 98860 12345',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Select a subject',
      subjects: {
        general: 'General Inquiry',
        donation: 'Donation & 80G Receipt',
        volunteer: 'Volunteering',
        medical: 'Medical Equipment / MEDIBANK Request',
        partnership: 'CSR / Organization Partnership',
        other: 'Other'
      },
      messageFieldLabel: 'Your Message *',
      messagePlaceholder: 'How can we assist you today?',
      sendMessage: 'Send Message',
      sendingMessage: 'Sending...',
      submitError: 'Unable to send your message. Please try again or message us on WhatsApp.',
      whatsAppButton: 'Message us on WhatsApp',
      whatsAppHint: 'Fastest way to reach us — tap to open WhatsApp.',
      messageSentTitle: 'Message sent!',
      messageSentText: 'Thank you for reaching out to HIF INDIA. We will reply shortly.',
      sendAnother: 'Send another message'
    },
    donateModal: {
      title: 'Donate to HIF INDIA',
      subtitle: 'Bank transfer & UPI payment details',
      forCause: 'For',
      generalFund: 'General Humanitarian Fund',
      presetAmounts: 'Quick Amounts',
      customAmount: 'Custom Amount',
      customAmountPlaceholder: 'Enter custom amount (₹)',
      tabScanQr: 'Scan & Pay',
      tabBankTransfer: 'Bank Transfer',
      fastestBadge: 'Fastest',
      beneficiaryName: 'Beneficiary Name',
      accountNumber: 'Account Number (Current Account)',
      ifscCode: 'IFSC Code',
      branch: 'Branch',
      branchValue: 'HDFC Bunder Branch, Mangalore',
      upiId: 'UPI ID',
      scanQr: 'Scan UPI QR Code to Pay',
      showQr: 'Show QR Code',
      hideQr: 'Hide QR Code',
      qrHelp: 'Scan with GPay, PhonePe, Paytm, or BHIM',
      qrSecurityTitle: 'Verify before you pay',
      qrSecurityNote:
        'After scanning, your UPI app must show the payee name as "HIF INDIA". If any other name appears, do not proceed — stop and contact us on WhatsApp immediately.',
      tax80GNote: '80G Tax Exemption applies. Please share payment receipt on WhatsApp for your certificate.',
      notifyWhatsapp: 'Notify on WhatsApp after payment',
      close: 'Close',
      copiedToast: 'Copied to clipboard'
    },
    footer: {
      aboutText:
        'A registered grassroots NGO in Mangaluru empowering families with permanent housing, orphan education, masjid revival, and free medical equipment.',
      zeroCommission: '100% direct, zero-commission grassroots disbursement',
      exploreTitle: 'Explore',
      programsTitle: 'Programs',
      supportUs: 'Support Us',
      bankAccount: 'HDFC Bank A/C',
      donateQr: 'Donate / UPI QR',
      allRightsReserved: 'Highland Islamic Forum (HIF INDIA). All rights reserved.',
      addressFull: 'Masjid Ehsaan Complex, Kankanady, Mangalore – 575002',
      slogan: 'Empowering Communities, Transforming Lives with Compassion & Dignity',
      developedBy: 'Developed by'
    }
  },

  // ==========================================
  // KANNADA TRANSLATIONS (ಕನ್ನಡ)
  // ==========================================
  kn: {
    nav: {
      home: 'ಮುಖಪುಟ',
      about: 'ನಮ್ಮ ಬಗ್ಗೆ',
      projects: 'ಯೋಜನೆಗಳು',
      activities: 'ಸೇವೆಗಳು',
      gallery: 'ಚಿತ್ರಗಳು',
      getInvolved: 'ಸೇರಿ',
      contact: 'ಸಂಪರ್ಕ',
      donate: 'ದಾನ',
      donateNow: 'ಈಗ ದಾನ ಮಾಡಿ',
      menu: 'ಮೆನು',
      closeMenu: 'ಮೆನು ಮುಚ್ಚಿ',
      language: 'ಭಾಷೆ'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA)',
      tagline: 'ಕರುಣೆ ಮತ್ತು ಗೌರವದಿಂದ ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      shortTagline: 'ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      established: 'ಮಂಗಳೂರಿನಲ್ಲಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಸಂಸ್ಥೆ',
      regDetails: 'ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ',
      slogan: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ',
      sloganShort: '100% ನೇರ ಜನರ ನೆರವು',
      auditBadge: 'ಪರಿಶೀಲಿತ ಮತ್ತು ಸ್ಪಷ್ಟ ಲೆಕ್ಕ',
      addressLabel: 'ವಿಳಾಸ',
      hqLocation: 'ಮಸೀದಿ ಎಹ್ಸಾನ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕಂಕನಾಡಿ, ಮಂಗಳೂರು – 575002',
      centralSecretariat: 'ಮುಖ್ಯ ಕಚೇರಿ',
      phoneLabel: 'ದೂರವಾಣಿ',
      emailLabel: 'ಇಮೇಲ್',
      websiteLabel: 'ವೆಬ್‌ಸೈಟ್',
      workingHours: 'ಕೆಲಸದ ಸಮಯ',
      workingHoursVal: 'ಬೆಳಗ್ಗೆ 9:00 – ಸಂಜೆ 7:00 (ಸೋಮ–ಶನಿ)'
    },
    common: {
      donateNow: 'ಈಗ ದಾನ ಮಾಡಿ',
      viewDetails: 'ವಿವರಗಳನ್ನು ನೋಡಿ',
      exploreProjects: 'ಯೋಜನೆಗಳನ್ನು ನೋಡಿ',
      exploreActivities: 'ಚಟುವಟಿಕೆಗಳನ್ನು ನೋಡಿ',
      learnMore: 'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ',
      joinAsVolunteer: 'ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ',
      backToProjects: 'ಯೋಜನೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
      backToActivities: 'ಚಟುವಟಿಕೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ',
      backToHome: 'ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ',
      close: 'ಮುಚ್ಚಿ',
      submit: 'ಸಲ್ಲಿಸಿ',
      submitting: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
      copy: 'ನಕಲಿಸಿ',
      copied: 'ನಕಲಿಸಲಾಗಿದೆ!',
      download: 'ಡೌನ್‌ಲೋಡ್',
      share: 'ಹಂಚಿಕೊಳ್ಳಿ',
      filterAll: 'ಎಲ್ಲವೂ',
      readMore: 'ಇನ್ನಷ್ಟು ಓದಿ',
      viewAll: 'ಎಲ್ಲವನ್ನೂ ನೋಡಿ',
      search: 'ಹುಡುಕಿ',
      send: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sending: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      seeImpact: 'ನಮ್ಮ ಪ್ರಭಾವವನ್ನು ನೋಡಿ',
      pledgeNow: 'ಈಗಲೇ ವಾಗ್ದಾನ ಮಾಡಿ',
      transparent: '100% ಪಾರದರ್ಶಕ',
      zeroCommission: 'ಕಮಿಷನ್ ಇಲ್ಲ',
      verified: 'ಪರಿಶೀಲಿಸಿದ ನೇರ ಸಂಸ್ಥೆ',
      monthly: 'ಮಾಸಿಕ',
      oneTime: 'ಒಂದು ಬಾರಿ',
      all: 'ಎಲ್ಲವೂ',
      loading: 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
      success: 'ಯಶಸ್ವಿಯಾಗಿದೆ',
      error: 'ದೋಷ',
      sendAnother: 'ಇನ್ನೊಂದು ಕಳುಹಿಸಿ',
      next: 'ಮುಂದೆ',
      prev: 'ಹಿಂದೆ',
      required: 'ಅಗತ್ಯವಿದೆ',
      optional: 'ಐಚ್ಛಿಕ',
      or: 'ಅಥವಾ',
      call: 'ಕರೆ',
      dayMode: 'ಹಗಲು ಬಣ್ಣ',
      nightMode: 'ರಾತ್ರಿ ಬಣ್ಣ',
      now: 'ಈಗ'
    },
    hero: {
      establishedBadge: 'ಮಂಗಳೂರಿನಲ್ಲಿ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಸಂಸ್ಥೆ',
      title: 'ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಮುದಾಯಗಳಿಗೆ ಘನತೆ, ಆಸರೆ ಮತ್ತು ಭರವಸೆ.',
      subtitle:
        'HIF INDIA ನಿರಾಶ್ರಿತರಿಗೆ ಶಾಶ್ವತ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸುತ್ತದೆ, ಅನಾಥ ಮಕ್ಕಳಿಗೆ ಪೋಷಣೆ ನೀಡುತ್ತದೆ, ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳನ್ನು ಸರಿಪಡಿಸುತ್ತದೆ ಮತ್ತು ಉಚಿತ ವೈದ್ಯಕೀಯ ನೆರವನ್ನು ನೀಡುತ್ತದೆ — 100% ಪಾರದರ್ಶಕ ನೇರ ಪ್ರಭಾವದೊಂದಿಗೆ.',
      donateCta: 'ಈಗ ದಾನ ಮಾಡಿ',
      donateBannerTitle: 'ನಿಮ್ಮ ಸಹಾಯ ಮನೆಗಳು, ಭವಿಷ್ಯ ಮತ್ತು ಭರವಸೆ ನಿರ್ಮಿಸುತ್ತದೆ.',
      impactCta: 'ನಮ್ಮ ಪ್ರಭಾವವನ್ನು ನೋಡಿ',
      activeVolunteers: 'ಕರಾವಳಿ ಕರ್ನಾಟಕದಾದ್ಯಂತ ಸಕ್ರಿಯ ಸ್ವಯಂಸೇವಕರು',
      emergencyFundBanner: 'ತುರ್ತು ಪರಿಹಾರ ಕಾರ್ಯ ಸಕ್ರಿಯ: ಪ್ರವಾಹ, ವೈದ್ಯಕೀಯ ಮತ್ತು ಆಹಾರ ನೆರವು ಒದಗಿಸಲಾಗುತ್ತಿದೆ.',
      emergencyFundTitle: 'ತಕ್ಷಣದ ಮಾನವೀಯ ಸ್ಪಂದನೆ',
      emergencyFundDesc: 'ಸಂಕಷ್ಟದಲ್ಲಿರುವ ದುರ್ಬಲ ಕುಟುಂಬಗಳಿಗೆ ನೇರ ನೆರವು ಒದಗಿಸುವುದು.',
      liveCounters: 'ನೈಜ ಸಮಯದ ಪ್ರಭಾವದ ಅಂಕಿಅಂಶಗಳು'
    },
    about: {
      eyebrow: 'HIF INDIA ಬಗ್ಗೆ',
      title: 'ಸಮುದಾಯದ ನಂಬಿಕೆಯ ಮೇಲೆ ಕಟ್ಟಲಾದ ನೇರ ಟ್ರಸ್ಟ್.',
      description:
        'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA) ಮಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿ ಹೊಂದಿರುವ, ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶದಾದ್ಯಂತ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿರುವ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ ಆಗಿದೆ.',
      whoWeAreBadge: 'ನಾವು ಯಾರು',
      whoWeAreTitle: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA)',
      whoWeAreText1:
        'ಸಹಾನುಭೂತಿ ಮತ್ತು ಘನತೆಯೊಂದಿಗೆ ಸಮುದಾಯಗಳ ಬಲಪಡಿಸುವುದು, ಜೀವನ ಪರಿವರ್ತನೆ. ಸಂಸ್ಥೆಯ ಸ್ಥಾಪನೆಯಿಂದಲೂ, ನಾವು ನೇರ ಮತ್ತು ಅಳೆಯಬಹುದಾದ ಕಾರ್ಯಕ್ರಮಗಳ ಮೇಲೆ ಗಮನಹರಿಸಿದ್ದೇವೆ — ನಿರಾಶ್ರಿತರಿಗೆ ಶಾಶ್ವತ ಮನೆಗಳು, ಅನಾಥ ಬಾಲಕರಿಗೆ ಪ್ರೀತಿಯ ವಸತಿ ಆಶ್ರಯ, ಪಾಳುಬಿದ್ದ ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳ ಜೀರ್ಣೋದ್ಧಾರ, ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಸಾಲ ಮತ್ತು ತುರ್ತು ರಕ್ತದಾನ ಸಮನ್ವಯ.',
      whoWeAreText2:
        'ಭಾರತೀಯ ಟ್ರಸ್ಟ್ ಕಾಯ್ದೆಯಡಿ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆಯಾಗಿರುವ HIF INDIA ಕಮಿಷನ್ ಇಲ್ಲದ ನೀತಿಯಡಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ: ನಿರ್ದಿಷ್ಟ ಯೋಜನೆಗಾಗಿ ನೀಡಲಾದ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಯೂ ನೇರವಾಗಿ ವಸ್ತುಗಳು, ಕಾರ್ಮಿಕ ವೆಚ್ಚ, ಆಹಾರ ಅಥವಾ ವೈದ್ಯಕೀಯ ಪರಿಹಾರಕ್ಕಾಗಿ ಫಲಾನುಭವಿಗಳಿಗೆ ತಲುಪುತ್ತದೆ.',
      teamBadge: 'ನಮ್ಮ ಸಮುದಾಯ',
      teamTitle: 'ಈ ಕಾರ್ಯದ ಹಿಂದಿನ ಜನರು',
      teamDesc:
        'HIF India ಅನ್ನು ನೂರಾರು ಸ್ವಯಂಸೇವಕರು, ಯುವ ನಾಯಕರು ಮತ್ತು ಸಮುದಾಯ ಸದಸ್ಯರು ಪ್ರತಿ ಕಾರ್ಯಕ್ರಮ, ಸಭೆ ಮತ್ತು ನೆರವು ಕಾರ್ಯದಲ್ಲಿ ಸಹಾನುಭೂತಿಯಿಂದ ಕೆಲಸ ಮಾಡುವ ಮೂಲಕ ನಡೆಸುತ್ತಾರೆ.',
      teamPhotoAlt: 'HIF India ತಂಡ ಮತ್ತು ಸಮುದಾಯ',
      visionTitle: 'ನಮ್ಮ ಗುರಿ',
      visionText:
        'ಯಾವುದೇ ಕುಟುಂಬವು ಆಸರೆರಹಿತವಾಗಿ ಉಳಿಯದ, ಪ್ರತಿಯೊಬ್ಬ ಅನಾಥ ಮಗುವೂ ಪ್ರೀತಿ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಆಶ್ರಯ ಪಡೆಯುವ, ಗ್ರಾಮೀಣ ಆರಾಧನಾ ಸ್ಥಳಗಳು ಜ್ಞಾನದಿಂದ ಕಂಗೊಳಿಸುವ ಮತ್ತು ಸಾಮಾಜಿಕ-ಆರ್ಥಿಕ ಸ್ಥಿತಿಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಎಲ್ಲರಿಗೂ ಆರೋಗ್ಯ ರಕ್ಷಣೆ ಸಿಗುವ ಧಾರ್ಮಿಕ, ಸ್ವಾವಲಂಬಿ ಮತ್ತು ಸಹಾನುಭೂತಿಯ ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸುವುದು.',
      missionTitle: 'ನಮ್ಮ ಕೆಲಸ',
      missionText:
        'ಸಾರ್ವತ್ರಿಕ ಕರುಣೆ, ಘನತೆ ಮತ್ತು ಭ್ರಾತೃತ್ವದ ಇಸ್ಲಾಮಿಕ್ ನೈತಿಕ ಮೌಲ್ಯಗಳಲ್ಲಿ ಬೇರೂರಿರುವ ಪಾರದರ್ಶಕ, ಸಮುದಾಯ-ಚಾಲಿತ, ಸುಸ್ಥಿರ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಬಡತನ, ನಿರಾಶ್ರಿತತೆ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ವಂಚನೆಯನ್ನು ವ್ಯವಸ್ಥಿತವಾಗಿ ನಿವಾರಿಸುವುದು.',
      coreValuesTitle: 'ನಮ್ಮ ಮೂಲ ಮೌಲ್ಯಗಳು',
      coreValuesSubtitle: 'ಪ್ರತಿಯೊಂದು ಉಪಕ್ರಮ ಮತ್ತು ನೇರ ಕಾರ್ಯಾಚರಣೆಯನ್ನು ಮುನ್ನಡೆಸುವ ಮಾರ್ಗದರ್ಶಿ ತತ್ವಗಳು.',
      values: {
        transparencyTitle: '100% ಪಾರದರ್ಶಕತೆ',
        transparencyDesc:
          'ಸ್ವೀಕರಿಸಿದ ಪ್ರತಿಯೊಂದು ರೂಪಾಯಿಗೂ ಸಾರ್ವಜನಿಕ ಲೆಕ್ಕಪತ್ರವಿದ್ದು, ಶೂನ್ಯ ಆಡಳಿತ ಕಡಿತದೊಂದಿಗೆ ನೇರವಾಗಿ ಯೋಜನೆಗೆ ತಲುಪಿಸಲಾಗುತ್ತದೆ.',
        compassionTitle: 'ಸಾರ್ವತ್ರಿಕ ಸಹಾನುಭೂತಿ',
        compassionDesc:
          'ಹಿನ್ನೆಲೆಯನ್ನು ಲೆಕ್ಕಿಸದೆ ಪ್ರತಿಯೊಬ್ಬ ಮಾನವನಿಗೂ ನೈಜ ಕಾಳಜಿ, ಅನುಭೂತಿ ಮತ್ತು ಬೇಷರತ್ ಭ್ರಾತೃತ್ವದೊಂದಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವುದು.',
        dignityTitle: 'ಮಾನವ ಘನತೆಯ ರಕ್ಷಣೆ',
        dignityDesc:
          'ತಾತ್ಕಾಲಿಕ ಉಪಕಾರದ ಬದಲು ಶಾಶ್ವತ ಪರಿಹಾರಗಳು ಮತ್ತು ಗೌರವದ ಮೂಲಕ ಜನರನ್ನು ಬಲಪಡಿಸುತ್ತೇವೆ.',
        sustainabilityTitle: 'ಸುಸ್ಥಿರ ಪ್ರಭಾವ',
        sustainabilityDesc:
          'ವಸತಿ, ಶಿಕ್ಷಣ ಮತ್ತು ಸೌರಶಕ್ತಿ ಸೌಲಭ್ಯಗಳಲ್ಲಿ ತಲೆಮಾರುಗಳವರೆಗೆ ಬಾಳಿಕೆ ಬರುವ ದೀರ್ಘಕಾಲೀನ ಯೋಜನೆಗಳನ್ನು ರೂಪಿಸುವುದು.'
      },
      historyTitle: 'ನಮ್ಮ ಪಯಣ',
      historyText:
        'ಮಂಗಳೂರಿನಲ್ಲಿ ಸಣ್ಣ ಯುವಕರ ಒಕ್ಕೂಟವಾಗಿ ಪ್ರಾರಂಭವಾದ HIF, ಇಂದು ವಸತಿ, ಅನಾಥರ ಆರೈಕೆ ಮತ್ತು ಆರೋಗ್ಯ ರಕ್ಷಣೆಯ ಮೂಲಕ ಸಾವಿರಾರು ಜನರ ಜೀವನವನ್ನು ಮುಟ್ಟುವ ರಾಜ್ಯಮಟ್ಟದ ಮಾನವೀಯ ಸಂಸ್ಥೆಯಾಗಿ ಬೆಳೆದಿದೆ.',
      boardTitle: 'ಟ್ರಸ್ಟಿ ಮಂಡಳಿ ಮತ್ತು ನಾಯಕತ್ವ',
      boardSubtitle: 'ಅನುಭವಿ ಸಮುದಾಯ ಮುಖಂಡರು, ವಿದ್ವಾಂಸರು ಮತ್ತು ಸಮರ್ಪಿತ ಸಮಾಜ ಸೇವಕರ ಮಾರ್ಗದರ್ಶನ.',
      pillarsTitle: 'ನಮ್ಮ ನಾಲ್ಕು ಪ್ರಮುಖ ಸ್ತಂಭಗಳು',
      pillarsSubtitle: 'ಘನತೆಯುಕ್ತ ಜೀವನಕ್ಕೆ ಅಗತ್ಯವಾದ ಅಡಿಪಾಯಗಳನ್ನು ಒದಗಿಸುವ ಸಮಗ್ರ ಕಾರ್ಯಕ್ರಮಗಳು.',
      pillarsDesc: 'ನೀವು ನೀಡುವ ಪ್ರತಿ ರೂಪಾಯಿ ಈ ನಾಲ್ಕು ಕೆಲಸಗಳಲ್ಲಿ ಒಂದಕ್ಕೆ ನೇರವಾಗಿ ಹೋಗುತ್ತದೆ.',
      trustTitle: 'ಪಾರದರ್ಶಕತೆ ಮತ್ತು ನಂಬಿಕೆ',
      trustPoint1: 'ಕರ್ನಾಟಕದ ಮಂಗಳೂರಿನಲ್ಲಿ ಪ್ರಧಾನ ಕಚೇರಿ ಹೊಂದಿರುವ ನೋಂದಾಯಿತ ಎನ್‌ಜಿಒ.',
      trustPoint2: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ.',
      trustPoint3: 'ವಿನಂತಿಯ ಮೇರೆಗೆ ದಾನಿಗಳಿಗೆ ಲಭ್ಯವಿರುವ ವಾರ್ಷಿಕ ಆರ್ಥಿಕ ಲೆಕ್ಕಪರಿಶೋಧನೆ.',
      trustPoint4: 'ಪ್ರತಿಯೊಂದು ಕೊಡುಗೆಗೂ ಬ್ಯಾಂಕ್ ರಸೀದಿ ಮತ್ತು 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಪ್ರಮಾಣಪತ್ರ.',
      hqTitle: 'ಕೇಂದ್ರ ಕಚೇರಿ'
    },
    stats: {
      housesDelivered: 'ವಿತರಿಸಲಾದ ಮನೆಗಳು',
      housesSubtext: 'ಗುರಿ: ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾದಲ್ಲಿ 2030 ರ ವೇಳೆಗೆ 150 ಮನೆಗಳು',
      masjidsRevived: 'ಸರಿಪಡಿಸಿದ ಮಸೀದಿಗಳು',
      masjidsSubtext: 'ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶದಾದ್ಯಂತ',
      orphansNurtured: 'ಪೋಷಿಸಲಾದ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಗಳು',
      orphansSubtext: 'ಸಮಗ್ರ ವಸತಿ, ಹಿಫ್ಜ್ ಮತ್ತು ಆಧುನಿಕ ಶಿಕ್ಷಣ',
      bloodUnits: 'ಸಂಗ್ರಹಿಸಿದ ರಕ್ತದ ಯೂನಿಟ್‌ಗಳು',
      bloodSubtext: 'ಜೀವ ಉಳಿಸುವ ತುರ್ತು ರಕ್ತ ನಿಧಿ ಯೂನಿಟ್‌ಗಳು',
      auditTransparency: 'ಲೆಕ್ಕ ಮತ್ತು ನಂಬಿಕೆ',
      auditSubtext: 'ನೇರ ಸಹಾಯ. ಕಮಿಷನ್ ಇಲ್ಲ'
    },
    pillars: {
      housingTitle: 'ವಸತಿ ಯೋಜನೆ',
      housingDesc: 'ನಿರ್ಗತಿಕ ಕುಟುಂಬಗಳಿಗೆ ಶಾಶ್ವತ ಆಶಿಯಾನಾ ಮನೆಗಳು',
      orphanCareTitle: 'ಅನಾಥರ ಪೋಷಣೆ',
      orphanCareDesc: '225 ಬಾಲಕರನ್ನು ಪೋಷಿಸುವ ಚಿತ್ತೂರು ಆಶ್ರಯಧಾಮ',
      masjidRevivalTitle: 'ಮಸೀದಿ ಜೀರ್ಣೋದ್ಧಾರ',
      masjidRevivalDesc: '150+ ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳ ಪುನರುಜ್ಜೀವನ ಮತ್ತು ನಿರ್ವಹಣೆ',
      healthcareTitle: 'ಆರೋಗ್ಯ ಸೇವೆ',
      healthcareDesc: 'ಉಚಿತ ಮೆಡಿಬ್ಯಾಂಕ್ ಉಪಕರಣಗಳು ಮತ್ತು ರಕ್ತದಾನಿಗಳ ಜಾಲ'
    },
    projects: {
      eyebrow: 'ನಮ್ಮ ಯೋಜನೆಗಳು',
      title: 'ಶಾಶ್ವತ ಬದಲಾವಣೆಗಾಗಿ ರೂಪಿಸಲಾದ ಪ್ರಮುಖ ಕಾರ್ಯಕ್ರಮಗಳು.',
      subtitle:
        'ದಕ್ಷಿಣ ಭಾರತದಾದ್ಯಂತ ವಸತಿ, ಅನಾಥರ ಆರೈಕೆ ಮತ್ತು ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯ ಮೂಲಸೌಕರ್ಯವನ್ನು ಬಲಪಡಿಸುವ ಮೂರು ದೀರ್ಘಕಾಲೀನ ಯೋಜನೆಗಳು.',
      allProgramsBadge: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳು',
      allProgramsTitle: 'ನಿಧಿಯಿಂದ ಹಿಡಿದು ಕಾರ್ಯಕ್ಷೇತ್ರದವರೆಗೆ ಪಾರದರ್ಶಕವಾಗಿ ದಾಖಲಿಸಲ್ಪಡುವ ಯೋಜನೆಗಳು.',
      viewAll: 'ಎಲ್ಲಾ ಯೋಜನೆಗಳನ್ನು ನೋಡಿ',
      achievementsTitle: 'ಮುಖ್ಯ ಸಾಧನೆಗಳು',
      futureGoalsTitle: 'ಮುಂದಿನ ಗುರಿ',
      tiersTitle: 'ಸಹಾಯದ ಮೊತ್ತ',
      ashiyana: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾ',
        subtitle: 'ನಿರಾಶ್ರಿತ ಮತ್ತು ನಿರ್ಗತಿಕ ಕುಟುಂಬಗಳಿಗೆ ಘನತೆಯ ಆಸರೆ',
        badge: 'ವಸತಿ ಮಿಷನ್',
        overview:
          'ಶಿಥಿಲಾವಸ್ಥೆಯ ಗುಡಿಸಲುಗಳಲ್ಲಿ ವಾಸಿಸುತ್ತಿರುವ ವಿಧವಾ ತಾಯಂದಿರು, ಬಡ ಗ್ರಾಮೀಣ ಕುಟುಂಬಗಳು ಮತ್ತು ವಿಕಲಚೇತನರಿಗೆ ಪ್ರಾಜೆಕ್ಟ್ ಆಶಿಯಾನಾ ಗಟ್ಟಿಮುಟ್ಟಾದ ಶಾಶ್ವತ ಮನೆಗಳನ್ನು ನಿರ್ಮಿಸಿಕೊಡುತ್ತದೆ.',
        statHomesBuilt: '36 ನಿರ್ಮಿಸಿದ ಮನೆಗಳು',
        statTarget: 'ಗುರಿ: 2030 ರ ವೇಳೆಗೆ 150 ಮನೆಗಳು',
        statAvgCost: 'ಸರಾಸರಿ ವೆಚ್ಚ ₹6.5 – ₹8 ಲಕ್ಷ'
      },
      chittor: {
        title: 'ಚಿತ್ತೂರು ಡ್ರೀಮ್ ಪ್ರಾಜೆಕ್ಟ್',
        subtitle: 'HIF ಯತೀಮ್‌ಖಾನಾ – ಅನಾಥ ಬಾಲಕರಿಗಾಗಿ 2 ಎಕರೆ ಪ್ರೀತಿಯ ಆಶ್ರಯಧಾಮ',
        badge: 'ಅನಾಥರ ಆಶ್ರಯಧಾಮ',
        overview:
          '100 ವರ್ಷಗಳ ಐತಿಹಾಸಿಕ ಶಿಕ್ಷಣ ಸಂಕೀರ್ಣವನ್ನು ವಿಶ್ವದರ್ಜೆಯ ಇಂಗ್ಲಿಷ್ ಮಾಧ್ಯಮ ಶಿಕ್ಷಣ, ಕುರಾನ್ ಕಂಠಪಾಠ (ಹಿಫ್ಜ್) ಮತ್ತು ನೈತಿಕ ಸಂಸ್ಕಾರ ನೀಡುವ ಆಧುನಿಕ ಆವರಣವಾಗಿ ಪುನಶ್ಚೇತನಗೊಳಿಸಲಾಗಿದೆ.',
        statBoys: '225 ಬಾಲಕರು ದಾಖಲು',
        statCampus: '2.0 ಎಕರೆ ಆವರಣ',
        statCurriculum: 'ಸ್ಕೂಲಿಂಗ್ + ಹಿಫ್ಜ್ + ಆಲೀಮ್'
      },
      masjid: {
        title: 'ಮಸೀದಿ ಅಭಿವೃದ್ಧಿ ಯೋಜನೆ',
        subtitle: 'ಮುಚ್ಚಿದ ಮಸೀದಿಗಳ ಪುನರಾರಂಭ ಮತ್ತು ಗ್ರಾಮೀಣ ಆಧ್ಯಾತ್ಮಿಕ ಕೇಂದ್ರಗಳ ಬಲಪಡಿಸುವುದು',
        badge: 'ಆಧ್ಯಾತ್ಮಿಕ ಸಮುದಾಯ',
        overview:
          'ಕೈಬಿಡಲಾದ ಗ್ರಾಮೀಣ ಮಸೀದಿಗಳಿಗೆ ಪ್ರಾರ್ಥನೆ ಮತ್ತು ಸಮುದಾಯ ಶಿಕ್ಷಣದ ಜೀವಕಳೆ ತುಂಬುವುದು ಮತ್ತು ಸೌಲಭ್ಯವಂಚಿತ ಪ್ರದೇಶಗಳಲ್ಲಿ ಹೊಸ ಆರಾಧನಾ ಕೇಂದ್ರಗಳನ್ನು ನಿರ್ಮಿಸುವುದು.',
        statReopened: '150+ ಮಸೀದಿಗಳು ಪುನರಾರಂಭ',
        statNewBuilt: '8 ಮಸೀದಿಗಳ ನಿರ್ಮಾಣ/ಜೀರ್ಣೋದ್ಧಾರ',
        statReach: 'ಕರ್ನಾಟಕ ಮತ್ತು ಆಂಧ್ರಪ್ರದೇಶ'
      },
      educationCity: {
        title: 'HIF ಎಜುಕೇಶನ್ ಸಿಟಿ',
        subtitle: 'ಮಂಗಳೂರಿನ ಅಸೈಗೋಳಿಯಲ್ಲಿ ತಲೆಯೆತ್ತುತ್ತಿರುವ 3.82 ಎಕರೆಯ ಅರೇಬಿಕ್ ಅಕಾಡೆಮಿ',
        badge: 'ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣ ಮೂಲಸೌಕರ್ಯ',
        overview:
          'ಮಂಗಳೂರಿನ ಅಸೈಗೋಳಿಯಲ್ಲಿ 3.82 ಎಕರೆ ಆವರಣದಲ್ಲಿ ತಲೆಯೆತ್ತುತ್ತಿರುವ ಅತ್ಯಾಧುನಿಕ ಅರೇಬಿಕ್ ಅಕಾಡೆಮಿ, ಮುಂದಿನ ಪೀಳಿಗೆಯ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಇಸ್ಲಾಮಿಕ್ ಶಿಕ್ಷಣವನ್ನು ಪರಿವರ್ತಿಸುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ.'
      },
      boondh: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಬೂಂದ್',
        subtitle: 'ಸೌಲಭ್ಯವಂಚಿತ ಸಮುದಾಯಗಳಿಗೆ ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರು',
        badge: 'ನೀರಿನ ಭದ್ರತೆ',
        overview:
          'ಪ್ರಾಜೆಕ್ಟ್ ಬೂಂದ್ ಬೋರ್‌ವೆಲ್, ನೀರಿನ ಟ್ಯಾಂಕರ್ ಮತ್ತು ಶುದ್ಧೀಕರಣ ಮೂಲಸೌಕರ್ಯದ ಮೂಲಕ ಸೌಲಭ್ಯವಂಚಿತ ಸಮುದಾಯಗಳಿಗೆ ಶುದ್ಧ ಮತ್ತು ಸುರಕ್ಷಿತ ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸುತ್ತದೆ.'
      },
      libaas: {
        title: 'ಪ್ರಾಜೆಕ್ಟ್ ಲಿಬಾಸ್',
        subtitle: 'ಸೌಲಭ್ಯವಂಚಿತ ವಧು-ವರರಿಗೆ ಘನತೆಯ ಆಚರಣೆ',
        badge: 'ಘನತೆ ಮತ್ತು ಆಚರಣೆ',
        overview:
          'ಪ್ರಾಜೆಕ್ಟ್ ಲಿಬಾಸ್ ಸೌಲಭ್ಯವಂಚಿತ ಕುಟುಂಬಗಳ ವಧು-ವರರಿಗೆ ಮದುವೆ ಉಡುಪುಗಳನ್ನು ಒದಗಿಸಿ, ಅವರ ವಿಶೇಷ ದಿನವನ್ನು ಘನತೆಯಿಂದ ಆಚರಿಸಲು ನೆರವಾಗುತ್ತದೆ.'
      }
    },
    activities: {
      eyebrow: 'ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ವಿಭಾಗಗಳು',
      title: 'ವಿಶೇಷ ಸಮುದಾಯ ಪ್ರಭಾವಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಘಟಕಗಳು.',
      subtitle:
        'ತುರ್ತು ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳಿಂದ ಹಿಡಿದು ಯುವಜನತೆಯ ಕೌಶಲ್ಯ ವಿಕಸನ ಮತ್ತು ಶೈಕ್ಷಣಿಕ ನೆರವಿನವರೆಗೆ ನಮ್ಮ ವಿಭಾಗಗಳು ನಿರಂತರ ನೇರ ಸೇವೆ ನೀಡುತ್ತವೆ.',
      wingsBadge: 'ನಮ್ಮ ವಿಭಾಗಗಳು',
      wingsTitle: 'ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಮತ್ತು ಯುವಜನತೆಯಲ್ಲಿ ನಿರಂತರ ಸಮುದಾಯ ಸೇವೆ.',
      featuresTitle: 'ನಾವು ಮಾಡುವುದು',
      impactTitle: 'ಇಲ್ಲಿಯವರೆಗಿನ ಸಹಾಯ',
      medical: {
        title: 'HIF ವೈದ್ಯಕೀಯ ವಿಭಾಗ & ಮೆಡಿಬ್ಯಾಂಕ್',
        subtitle: 'ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಸಾಲ ಮತ್ತು ಜೀವ ಉಳಿಸುವ ಆರೋಗ್ಯ ಸೇವೆ',
        badge: 'ಆರೋಗ್ಯ ಮತ್ತು ಪರಿಹಾರ',
        overview:
          'ಆಸ್ಪತ್ರೆ ಬೆಡ್‌ಗಳು, ಆಕ್ಸಿಜನ್ ಕಾನ್ಸನ್‌ಟ್ರೇಟರ್‌ಗಳು, ವ್ಹೀಲ್‌ಚೇರ್‌ಗಳಂತಹ ದುಬಾರಿ ಉಪಕರಣಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡುವುದು ಮತ್ತು ತುರ್ತು ರಕ್ತದಾನ ಹಾಗೂ ಡಯಾಲಿಸಿಸ್ ಸಹಾಯಧನ ಒದಗಿಸುವುದು.',
        statBlood: '1,500+ ಯೂನಿಟ್ ರಕ್ತದಾನ',
        statEquipment: '200+ ಉಪಕರಣಗಳ ಭಂಡಾರ',
        statHelpline: '24/7 ಸಹಾಯವಾಣಿ'
      },
      education: {
        title: 'HIF ಶಿಕ್ಷಣ ವಿಭಾಗ',
        subtitle: 'ಶೈಕ್ಷಣಿಕ ಉತ್ಕೃಷ್ಟತೆ, ಡಿಜಿಟಲ್ ಕೌಶಲ್ಯ ಮತ್ತು ಮೌಲ್ಯಾಧಾರಿತ ಶಿಕ್ಷಣ',
        badge: 'ಶೈಕ್ಷಣಿಕ ಬಲಪಡಿಸುವುದು',
        overview:
          'ಪ್ರತಿಭಾವಂತ ಬಡ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನ, ಉಚಿತ ಬ್ಯಾಗ್ ಮತ್ತು ಪುಸ್ತಕ ವಿತರಣೆ, ಕಂಪ್ಯೂಟರ್ ಶಿಕ್ಷಣ ಹಾಗೂ ಬೇಸಿಗೆ ನಾಯಕತ್ವ ಶಿಬಿರಗಳನ್ನು ನಡೆಸುವುದು.',
        statStudents: '2,500+ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೆರವು',
        statScholarships: '₹40L+ ವಿದ್ಯಾರ್ಥಿವೇತನ ವಿತರಣೆ',
        statCamps: '45+ ಶಿಬಿರಗಳು'
      },
      youth: {
        title: 'HIF ಯುವ ಘಟಕ ಶಿಕ್ಷಣ ಕೋಶ',
        subtitle: 'ಕೌಶಲ್ಯ, ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಸಮುದಾಯ ಸೇವೆಯೊಂದಿಗೆ ಮುಂದಿನ ಪೀಳಿಗೆಯ ನಾಯಕರನ್ನು ಪ್ರೇರೇಪಿಸುವುದು',
        badge: 'ಯುವ ನಾಯಕತ್ವ',
        overview:
          'ಸ್ಪೋಕನ್ ಇಂಗ್ಲಿಷ್ ತರಬೇತಿ, ಡಿಜಿಟಲ್ ಸಾಕ್ಷರತೆ, ಪ್ರವಾಹ ಪರಿಹಾರ ಕಾರ್ಯಾಚರಣೆ ಮತ್ತು ನೈತಿಕ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಯುವಕರನ್ನು ಸಮಾಜ ಪರಿವರ್ತಕರನ್ನಾಗಿ ರೂಪಿಸುವುದು.',
        statVolunteers: '300+ ಸಕ್ರಿಯ ಯುವ ಸ್ವಯಂಸೇವಕರು',
        statWorkshops: '60+ ಕೌಶಲ್ಯ ಕಾರ್ಯಾಗಾರಗಳು',
        statDrives: '120+ ಸಮುದಾಯ ಅಭಿಯಾನಗಳು'
      },
      womenSkill: {
        title: 'ಮಹಿಳಾ ಕೌಶಲ್ಯ ಮತ್ತು ಜೀವನೋಪಾಯ ಕೇಂದ್ರ',
        subtitle: 'ಹೊಲಿಗೆ, ಕರಕುಶಲ ತರಬೇತಿ ಮತ್ತು ಕಿರು ಉದ್ಯಮ ಬೆಂಬಲ',
        badge: 'ಸ್ವಾವಲಂಬನೆ',
        overview:
          'ವಿಧವೆಯರು ಮತ್ತು ಕಡಿಮೆ ಆದಾಯದ ಮಹಿಳೆಯರಿಗೆ ಹೊಲಿಗೆ ಯಂತ್ರ ವಿತರಣೆ, ಕಸೂತಿ ತರಬೇತಿ ಮತ್ತು ಸ್ವಾವಲಂಬಿ ಗೃಹ ಉದ್ಯಮಗಳಿಗೆ ಪ್ರೋತ್ಸಾಹ ನೀಡುವುದು.'
      },
      disasterRelief: {
        title: 'ವಿಪತ್ತು ಪರಿಹಾರ ಮತ್ತು ತ್ವರಿತ ಕಾರ್ಯಾಚರಣೆ',
        subtitle: 'ಪ್ರವಾಹ ಪರಿಹಾರ, ಪಡಿತರ ಕಿಟ್‌ಗಳು ಮತ್ತು ತುರ್ತು ಪುನರ್ವಸತಿ',
        badge: 'ತುರ್ತು ನೆರವು',
        overview:
          'ಮಳೆಗಾಲದ ಪ್ರವಾಹ ಮತ್ತು ಪ್ರಾಕೃತಿಕ ವಿಕೋಪಗಳ ಸಂದರ್ಭದಲ್ಲಿ ತುರ್ತು ರಕ್ಷಣಾ ತಂಡಗಳು, ಕುಡಿಯುವ ನೀರು, ಆಹಾರ ಕಿಟ್‌ಗಳು ಮತ್ತು ಮನೆ ದುರಸ್ತಿ ಸಾಮಗ್ರಿಗಳನ್ನು ತಲುಪಿಸುವುದು.'
      }
    },
    gallery: {
      eyebrow: 'ಚಿತ್ರಗಳು',
      title: 'ಕಾರ್ಯಕ್ಷೇತ್ರದಲ್ಲಿ ಬದಲಾವಣೆಯ ನೈಜ ಕ್ಷಣಗಳು.',
      subtitle:
        'ಮನೆಗಳ ಹಸ್ತಾಂತರ, ವಿದ್ಯಾರ್ಥಿಗಳ ಕಲಿಕೆ, ಮಸೀದಿಗಳ ಜೀರ್ಣೋದ್ಧಾರ ಮತ್ತು ಸಾಂತ್ವನ ಪಡೆದ ಜನರ ಮುಖಗಳ ದೃಶ್ಯ ದಾಖಲೆ.',
      filters: {
        all: 'ಎಲ್ಲವೂ',
        housing: 'ವಸತಿ',
        orphanage: 'ಅನಾಥಾಲಯ',
        masjid: 'ಮಸೀದಿ',
        healthcare: 'ಆರೋಗ್ಯ ಸೇವೆ',
        education: 'ಶಿಕ್ಷಣ',
        community: 'ಸಮುದಾಯ',
        youth: 'ಯುವಜನತೆ'
      },
      emptyMessage: 'ಈ ವರ್ಗದಲ್ಲಿ ಯಾವುದೇ ಫೋಟೋಗಳು ಕಂಡುಬಂದಿಲ್ಲ.'
    },
    reels: {
      eyebrow: 'ನಮ್ಮ ರೀಲ್‌ಗಳು',
      title: 'ಕಾರ್ಯಕ್ಷೇತ್ರದಿಂದ ನೇರವಾಗಿ, ನೋಡಲೇಬೇಕಾದ ಕಥೆಗಳು',
      subtitle:
        'ಮನೆ ಹಸ್ತಾಂತರ, ತರಗತಿಯ ದಿನಗಳು ಮತ್ತು ಪರಿಹಾರ ಕಾರ್ಯಗಳ ಹಿಂದಿನ ಕ್ಷಣಗಳನ್ನು ಕಿರು ರೀಲ್‌ಗಳ ಮೂಲಕ ಹತ್ತಿರದಿಂದ ನೋಡಿ.',
      previous: 'ಹಿಂದಿನ ರೀಲ್',
      next: 'ಮುಂದಿನ ರೀಲ್',
      viewReel: 'ರೀಲ್ ನೋಡಿ',
      followUs: 'ಹೆಚ್ಚಿನ ಮಾಹಿತಿಗಾಗಿ @hif_india ಅನ್ನು ಫಾಲೋ ಮಾಡಿ',
      mute: 'ಮ್ಯೂಟ್',
      unmute: 'ಅನ್‌ಮ್ಯೂಟ್'
    },
    getInvolved: {
      eyebrow: 'ಭಾಗವಹಿಸಿ',
      title: 'ಸಮಾಜ ಬದಲಾವಣೆಯಲ್ಲಿ ಪ್ರತಿಯೊಬ್ಬರಿಗೂ ಪಾತ್ರವಿದೆ.',
      description:
        'ನಿಮ್ಮ ಪ್ರಭಾವವನ್ನು ಲೆಕ್ಕಹಾಕಿ, ಸ್ವಯಂಸೇವಕರಾಗಿ ನೋಂದಾಯಿಸಿ ಅಥವಾ ನೇರವಾಗಿ ದಾನ ಮಾಡಿ — ಪ್ರತಿಯೊಂದು ಮಾರ್ಗವೂ ನೇರಲ್ಲಿ ಸಕಾರಾತ್ಮಕ ಬದಲಾವಣೆಗೆ ಕಾರಣವಾಗುತ್ತದೆ.',
      calculatorBadge: 'ಪ್ರಭಾವ ಕ್ಯಾಲ್ಕುಲೇಟರ್',
      calculatorTitle: 'ನಿಮ್ಮ ದೇಣಿಗೆ ಎಂತಹ ಬದಲಾವಣೆ ತರುತ್ತದೆ ನೋಡಿ',
      calculatorSubtitle: 'ನೀವು ತರಬಹುದಾದ ನೈಜ ಬದಲಾವಣೆಯನ್ನು ನೋಡಲು ಮೊತ್ತವನ್ನು ಆಯ್ಕೆಮಾಡಿ.',
      volunteerBadge: 'ನಮ್ಮೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ',
      volunteerTitle: 'HIF ಸ್ವಯಂಸೇವಕರಾಗಿ',
      volunteerSubtitle: 'ಸಮುದಾಯದ ಶಾಶ್ವತ ಪರಿವರ್ತನೆಗಾಗಿ ನಿಮ್ಮ ಕೌಶಲ್ಯ ಮತ್ತು ಸಮಯವನ್ನು ವಿನಿಯೋಗಿಸಿ.',
      form: {
        fullName: 'ಪೂರ್ಣ ಹೆಸರು *',
        fullNamePlaceholder: 'ಉದಾ: ಮೊಹಮ್ಮದ್ ಫಾರೂಕ್',
        email: 'ಇಮೇಲ್ ವಿಳಾಸ *',
        emailPlaceholder: 'you@example.com',
        phone: 'ದೂರವಾಣಿ / WhatsApp *',
        phonePlaceholder: '+91 98765 43210',
        city: 'ನಗರ / ಸ್ಥಳ *',
        cityPlaceholder: 'ಉದಾ: ಮಂಗಳೂರು, ಉಡುಪಿ, ಬೆಂಗಳೂರು',
        skillsLabel: 'ನೀವು ಹೇಗೆ ಕೊಡುಗೆ ನೀಡಲು ಬಯಸುತ್ತೀರಿ? (ಕೌಶಲ್ಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ)',
        availableHours: 'ಲಭ್ಯವಿರುವ ಸಮಯ / ವಾರಕ್ಕೆ',
        availableHoursPlaceholder: 'ಉದಾ: ವಾರಾಂತ್ಯದಲ್ಲಿ 4-6 ಗಂಟೆಗಳು',
        notes: 'ಸಂಕ್ಷಿಪ್ತ ಪರಿಚಯ / ಹಿಂದಿನ ಅನುಭವ',
        notesPlaceholder: 'ನಿಮ್ಮ ಹಿನ್ನೆಲೆ, ಆಸಕ್ತಿಗಳು ಅಥವಾ ಸ್ವಯಂಸೇವಕರಾಗಲು ಕಾರಣಗಳನ್ನು ತಿಳಿಸಿ...',
        submitButton: 'ಸ್ವಯಂಸೇವಕರಾಗಿ ನೋಂದಾಯಿಸಿ',
        submittingButton: 'ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...',
        submitError: 'ಅರ್ಜಿ ಸಲ್ಲಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
        whatsAppButton: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
        successTitle: 'ನೋಂದಣಿಗೆ ಧನ್ಯವಾದಗಳು!',
        successMessage: 'ನಮ್ಮ ಸ್ವಯಂಸೇವಕ ಸಂಯೋಜಕರು ಶೀಘ್ರದಲ್ಲೇ WhatsApp ಅಥವಾ ಫೋನ್ ಮೂಲಕ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತಾರೆ.',
        submitAnother: 'ಇನ್ನೊಂದು ಅರ್ಜಿ ಸಲ್ಲಿಸಿ'
      },
      skills: {
        bloodDonation: 'ರಕ್ತದಾನ / ವೈದ್ಯಕೀಯ ಸಮನ್ವಯ',
        teaching: 'ಓದಿಸುವುದು / ಸ್ಪೋಕನ್ ಇಂಗ್ಲಿಷ್',
        disasterResponse: 'ವಿಪತ್ತು ಮತ್ತು ಪ್ರವಾಹ ತುರ್ತು ಸ್ಪಂದನೆ',
        mediaDesign: 'ಗ್ರಾಫಿಕ್ ವಿನ್ಯಾಸ, ವೀಡಿಯೊ ಮತ್ತು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ',
        fieldVerification: 'ಆಶಿಯಾನಾ ಕ್ಷೇತ್ರ ಪರಿಶೀಲನೆ & ಪರಿಹಾರ',
        eventLogistics: 'ಕಾರ್ಯಕ್ರಮ ಸಂಘಟನೆ ಮತ್ತು ಲಾಜಿಸ್ಟಿಕ್ಸ್'
      },
      bankCard: {
        title: 'ನೇರ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ',
        subtitle: 'ಯಾವುದೇ ಸಂಸ್ಕರಣಾ ಶುಲ್ಕವಿಲ್ಲದೆ ನೇರವಾಗಿ ನಮ್ಮ ಖಾತೆಗೆ ಜಮಾ ಮಾಡಿ',
        accountName: 'ಫಲಾನುಭವಿಯ ಹೆಸರು',
        accountNumber: 'ಖಾತೆ ಸಂಖ್ಯೆ',
        ifsc: 'IFSC ಕೋಡ್',
        branch: 'ಶಾಖೆ',
        upiId: 'UPI ID',
        taxNote: 'ಎಲ್ಲಾ ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಸೌಲಭ್ಯ ಅನ್ವಯಿಸುತ್ತದೆ.',
        copyDetails: 'ಎಲ್ಲಾ ಬ್ಯಾಂಕ್ ವಿವರ ನಕಲಿಸಿ'
      },
      faqTitle: 'ಪದೇ ಪದೇ ಕೇಳಲಾಗುವ ಪ್ರಶ್ನೆಗಳು',
      faqSubtitle: 'ದಾನ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ಮತ್ತು ಯೋಜನೆಗಳ ಬಗ್ಗೆ ಸರಳ ಉತ್ತರಗಳು.',
      faqs: {
        q1: 'HIF India ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಲಭ್ಯವಿದೆಯೇ?',
        a1: 'ಹೌದು, ಭಾರತೀಯ ಆದಾಯ ತೆರಿಗೆ ಕಾಯ್ದೆಯಡಿ HIF INDIA ಗೆ ನೀಡುವ ದೇಣಿಗೆಗಳಿಗೆ 80G ತೆರಿಗೆ ವಿನಾಯಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ. ಅಧಿಕೃತ ರಸೀದಿಗಳನ್ನು ನೀಡಲಾಗುತ್ತದೆ.',
        q2: 'ನನ್ನ ದೇಣಿಗೆಯ ಎಷ್ಟು ಭಾಗ ನೇರವಾಗಿ ಫಲಾನುಭವಿಗಳಿಗೆ ತಲುಪುತ್ತದೆ?',
        a2: 'ಯೋಜನೆಗಾಗಿ ನೀಡಲಾದ ದೇಣಿಗೆಯ 100% ಭಾಗವು ಯಾವುದೇ ಆಡಳಿತಾತ್ಮಕ ಕಡಿತವಿಲ್ಲದೆ ನೇರವಾಗಿ ಸಾಮಗ್ರಿಗಳು, ಆಹಾರ ಅಥವಾ ವೈದ್ಯಕೀಯ ನೆರವಿಗೆ ಬಳಕೆಯಾಗುತ್ತದೆ.',
        q3: 'ನಾನು ಸಂಪೂರ್ಣ ಆಶಿಯಾನಾ ಮನೆ ಅಥವಾ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಯನ್ನು ಪ್ರಾಯೋಜಿಸಬಹುದೇ?',
        a3: 'ಖಂಡಿತವಾಗಿ! ನೀವು ಸಂಪೂರ್ಣ ಮನೆ ನಿರ್ಮಾಣವನ್ನು (₹7.5 ಲಕ್ಷ) ಅಥವಾ ಅನಾಥ ವಿದ್ಯಾರ್ಥಿಯ ವಾರ್ಷಿಕ ಶಿಕ್ಷಣವನ್ನು (₹15,000/ವರ್ಷ) ಸಂಪೂರ್ಣ ವರದಿಯೊಂದಿಗೆ ಪ್ರಾಯೋಜಿಸಬಹುದು.',
        q4: 'ನಾನು ಮಂಗಳೂರಿನ ಹೊರಗಿದ್ದರೆ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಸ್ವಯಂಸೇವಕನಾಗಬಹುದೇ?',
        a4: 'ಖಂಡಿತ. ಡಿಜಿಟಲ್ ವಿನ್ಯಾಸ, ಅನುವಾದ, ವೆಬ್ ಅಭಿವೃದ್ಧಿ ಮತ್ತು ಸೋಷಿಯಲ್ ಮೀಡಿಯಾ ಪ್ರಚಾರಕ್ಕಾಗಿ ಆನ್‌ಲೈನ್ ಸ್ವಯಂಸೇವಕರನ್ನು ನಾವು ಸ್ವಾಗತಿಸುತ್ತೇವೆ.'
      }
    },
    contact: {
      eyebrow: 'ಸಂಪರ್ಕಿಸಿ',
      title: 'ನಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡಿ.',
      description:
        'ದೇಣಿಗೆಗಳು, ಪ್ರಾಯೋಜಕತ್ವಗಳು, ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ವಿನಂತಿ ಅಥವಾ ಸ್ವಯಂಸೇವಕರಾಗಲು ನಮ್ಮ ಮಂಗಳೂರು ಕೇಂದ್ರ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      centralSecretariat: 'ಕೇಂದ್ರ ಕಾರ್ಯಾಲಯ',
      hours: 'ಕೆಲಸದ ಸಮಯ',
      hoursValue: 'ಬೆಳಗ್ಗೆ 9:00 – ಸಂಜೆ 7:00 (ಸೋಮ–ಶನಿ)',
      primaryPhoneLabel: 'ಮುಖ್ಯ ಕಚೇರಿ & ವೈದ್ಯಕೀಯ ವಿಭಾಗ',
      altPhoneLabel: 'ಪರ್ಯಾಯ ಸಹಾಯವಾಣಿ',
      emailLabel: 'ಅಧಿಕೃತ ಇಮೇಲ್',
      formTitle: 'ನಮಗೆ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      formSubtitle: 'ನಾವು ಸಾಮಾನ್ಯವಾಗಿ 24 ಗಂಟೆಗಳ ಒಳಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತೇವೆ.',
      nameLabel: 'ಪೂರ್ಣ ಹೆಸರು *',
      namePlaceholder: 'ಉದಾ: ಅಹ್ಮದ್ ಖಾನ್',
      emailInputLabel: 'ಇಮೇಲ್ ವಿಳಾಸ *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'ದೂರವಾಣಿ / WhatsApp',
      phonePlaceholder: '+91 98860 12345',
      subjectLabel: 'ವಿಷಯ',
      subjectPlaceholder: 'ವಿಷಯವನ್ನು ಆಯ್ಕೆಮಾಡಿ',
      subjects: {
        general: 'ಸಾಮಾನ್ಯ ವಿಚಾರಣೆ',
        donation: 'ದೇಣಿಗೆ ಮತ್ತು 80G ರಸೀದಿ',
        volunteer: 'ಸ್ವಯಂಸೇವಕ ಸೇವೆ',
        medical: 'ವೈದ್ಯಕೀಯ ಉಪಕರಣ / ಮೆಡಿಬ್ಯಾಂಕ್ ವಿನಂತಿ',
        partnership: 'ಸಂಸ್ಥೆ / ಸಿಎಸ್‌ಆರ್ ಪಾಲುದಾರಿಕೆ',
        other: 'ಇತರೆ'
      },
      messageFieldLabel: 'ನಿಮ್ಮ ಸಂದೇಶ *',
      messagePlaceholder: 'ನಾವು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
      sendMessage: 'ಸಂದೇಶ ಕಳುಹಿಸಿ',
      sendingMessage: 'ಕಳುಹಿಸಲಾಗುತ್ತಿದೆ...',
      submitError: 'ಸಂದೇಶ ಕಳುಹಿಸಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ ಅಥವಾ WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ.',
      whatsAppButton: 'WhatsApp ನಲ್ಲಿ ಸಂದೇಶ ಕಳುಹಿಸಿ',
      whatsAppHint: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಅತಿ ವೇಗದ ಮಾರ್ಗ — WhatsApp ತೆರೆಯಲು ಟ್ಯಾಪ್ ಮಾಡಿ.',
      messageSentTitle: 'ಸಂದೇಶ ಕಳುಹಿಸಲಾಗಿದೆ!',
      messageSentText: 'HIF INDIA ಅನ್ನು ಸಂಪರ್ಕಿಸಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಾವು ಶೀಘ್ರದಲ್ಲೇ ಉತ್ತರಿಸುತ್ತೇವೆ.',
      sendAnother: 'ಇನ್ನೊಂದು ಸಂದೇಶ ಕಳುಹಿಸಿ'
    },
    donateModal: {
      title: 'HIF INDIA ಗೆ ದಾನ ಮಾಡಿ',
      subtitle: 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮತ್ತು UPI ಪಾವತಿ ವಿವರಗಳು',
      forCause: 'ಯೋಜನೆ',
      generalFund: 'ಸಾಮಾನ್ಯ ಮಾನವೀಯ ನಿಧಿ',
      presetAmounts: 'ತ್ವರಿತ ಮೊತ್ತಗಳು',
      customAmount: 'ಇತರ ಮೊತ್ತ',
      customAmountPlaceholder: 'ಮೊತ್ತ ನಮೂದಿಸಿ (₹)',
      tabScanQr: 'ಸ್ಕ್ಯಾನ್ ಮಾಡಿ ಪಾವತಿಸಿ',
      tabBankTransfer: 'ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ',
      fastestBadge: 'ವೇಗದ',
      beneficiaryName: 'ಫಲಾನುಭವಿಯ ಹೆಸರು (ಖಾತೆ)',
      accountNumber: 'ಖಾತೆ ಸಂಖ್ಯೆ (ಚಾಲ್ತಿ ಖಾತೆ)',
      ifscCode: 'IFSC ಕೋಡ್',
      branch: 'ಶಾಖೆ',
      branchValue: 'HDFC ಬಂದರ್ ಶಾಖೆ, ಮಂಗಳೂರು',
      upiId: 'UPI ID',
      scanQr: 'ಪಾವತಿಸಲು UPI QR ಕೋಡ್ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
      showQr: 'QR ಕೋಡ್ ತೋರಿಸಿ',
      hideQr: 'QR ಕೋಡ್ ಮರೆಮಾಡಿ',
      qrHelp: 'GPay, PhonePe, Paytm, ಅಥವಾ BHIM ಮೂಲಕ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ',
      qrSecurityTitle: 'ಪಾವತಿಸುವ ಮೊದಲು ಪರಿಶೀಲಿಸಿ',
      qrSecurityNote:
        'ಸ್ಕ್ಯಾನ್ ಮಾಡಿದ ನಂತರ, ನಿಮ್ಮ UPI ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಪಡೆಯುವವರ ಹೆಸರು "HIF INDIA" ಎಂದು ತೋರಿಸಬೇಕು. ಬೇರೆ ಯಾವುದೇ ಹೆಸರು ಕಂಡುಬಂದರೆ, ಪಾವತಿ ಮುಂದುವರಿಸಬೇಡಿ — ಕೂಡಲೇ WhatsApp ನಲ್ಲಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      tax80GNote: '80G ಆದಾಯ ತೆರಿಗೆ ವಿನಾಯಿತಿ ಅನ್ವಯಿಸುತ್ತದೆ. ರಸೀದಿಗಾಗಿ ಪಾವತಿಯ ವಿವರವನ್ನು WhatsApp ನಲ್ಲಿ ಕಳುಹಿಸಿ.',
      notifyWhatsapp: 'ಪಾವತಿಯ ನಂತರ WhatsApp ನಲ್ಲಿ ತಿಳಿಸಿ',
      close: 'ಮುಚ್ಚಿ',
      copiedToast: 'ಕ್ಲಿಪ್‌ಬೋರ್ಡ್‌ಗೆ ನಕಲಿಸಲಾಗಿದೆ'
    },
    footer: {
      aboutText:
        'ಮಂಗಳೂರಿನ ನೋಂದಾಯಿತ ಸಂಸ್ಥೆ. ಮನೆ, ಅನಾಥರ ಶಿಕ್ಷಣ, ಮಸೀದಿ ದುರಸ್ತಿ ಮತ್ತು ಉಚಿತ ವೈದ್ಯಕೀಯ ಉಪಕರಣಗಳ ಮೂಲಕ ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.',
      zeroCommission: 'ನೀಡಿದ ಹಣ 100% ನೇರವಾಗಿ ಜನರಿಗೆ. ಕಮಿಷನ್ ಇಲ್ಲ',
      exploreTitle: 'ನೋಡಿ',
      programsTitle: 'ಕಾರ್ಯಕ್ರಮಗಳು',
      supportUs: 'ಬೆಂಬಲಿಸಿ',
      bankAccount: 'HDFC ಬ್ಯಾಂಕ್ ಖಾತೆ',
      donateQr: 'ದೇಣಿಗೆ / UPI QR',
      allRightsReserved: 'ಹೈಲ್ಯಾಂಡ್ ಇಸ್ಲಾಮಿಕ್ ಫೋರಮ್ (HIF INDIA). ಸರ್ವ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.',
      addressFull: 'ಮಸೀದಿ ಎಹ್ಸಾನ್ ಕಾಂಪ್ಲೆಕ್ಸ್, ಕಂಕನಾಡಿ, ಮಂಗಳೂರು – 575002',
      slogan: 'ಕರುಣೆ ಮತ್ತು ಗೌರವದಿಂದ ಜನರನ್ನು ಬಲಪಡಿಸಿ, ಜೀವನ ಬದಲಿಸಿ',
      developedBy: 'ಅಭಿವೃದ್ಧಿಪಡಿಸಿದ್ದು'
    }
  },

  // ==========================================
  // HINDI TRANSLATIONS (हिन्दी)
  // ==========================================
  hi: {
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      projects: 'योजनाएं',
      activities: 'सेवाएं',
      gallery: 'तस्वीरें',
      getInvolved: 'जुड़ें',
      contact: 'संपर्क',
      donate: 'दान',
      donateNow: 'अभी दान करें',
      menu: 'मेनू',
      closeMenu: 'मेनू बंद करें',
      language: 'भाषा'
    },
    org: {
      name: 'HIF INDIA',
      fullName: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)',
      tagline: 'दया और इज्जत के साथ लोगों को मजबूत बनाना',
      shortTagline: 'लोगों को मजबूत बनाना, जिंदगी बदलना',
      established: 'मंगलुरु में पंजीकृत गैर-सरकारी संगठन (NGO)',
      regDetails: 'भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत एनजीओ',
      slogan: 'दिया गया पैसा 100% सीधे लोगों तक। कोई कमीशन नहीं',
      sloganShort: '100% सीधी जमीनी राहत',
      auditBadge: 'ऑडिटेड व पारदर्शी',
      addressLabel: 'पता',
      hqLocation: 'मस्जिद एहसान कॉम्प्लेक्स, कंकनाडी, मंगलुरु – 575002',
      centralSecretariat: 'केंद्रीय सचिवालय',
      phoneLabel: 'फ़ोन',
      emailLabel: 'ईमेल',
      websiteLabel: 'वेबसाइट',
      workingHours: 'कार्य समय',
      workingHoursVal: 'सुबह 9:00 – शाम 7:00 (सोम–शनि)'
    },
    common: {
      donateNow: 'अभी दान करें',
      viewDetails: 'विवरण देखें',
      exploreProjects: 'योजनाएं देखें',
      exploreActivities: 'गतिविधियां देखें',
      learnMore: 'और जानें',
      joinAsVolunteer: 'स्वयंसेवक बनें',
      backToProjects: 'योजनाओं पर वापस जाएं',
      backToActivities: 'गतिविधियों पर वापस जाएं',
      backToHome: 'होम पर वापस जाएं',
      close: 'बंद करें',
      submit: 'जमा करें',
      submitting: 'जमा हो रहा है...',
      copy: 'कॉपी करें',
      copied: 'कॉपी हो गया!',
      download: 'डाउनलोड',
      share: 'साझा करें',
      filterAll: 'सभी',
      readMore: 'और पढ़ें',
      viewAll: 'सभी देखें',
      search: 'खोजें',
      send: 'संदेश भेजें',
      sending: 'भेजा जा रहा है...',
      seeImpact: 'हमारा प्रभाव देखें',
      pledgeNow: 'प्रतिज्ञा करें',
      transparent: '100% पारदर्शी',
      zeroCommission: 'बिना कमीशन',
      verified: 'सत्यापित जमीनी संगठन',
      monthly: 'मासिक',
      oneTime: 'एक बार',
      all: 'सभी',
      loading: 'लोड हो रहा है...',
      success: 'सफल',
      error: 'त्रुटि',
      sendAnother: 'एक और भेजें',
      next: 'आगे',
      prev: 'पीछे',
      required: 'आवश्यक',
      optional: 'वैकल्पिक',
      or: 'या',
      call: 'कॉल',
      dayMode: 'दिन का रंग',
      nightMode: 'रात का रंग',
      now: 'अब'
    },
    hero: {
      establishedBadge: 'मंगलुरु में पंजीकृत गैर-सरकारी संगठन',
      title: 'कर्नाटक भर के समुदायों के लिए गरिमा, आश्रय और उम्मीद।',
      subtitle:
        'HIF INDIA बेघरों के लिए पक्के मकान बनाता है, अनाथ बच्चों का पालन-पोषण करता है, ग्रामीण मस्जिदों को पुनर्जीवित करता है और निःशुल्क चिकित्सा राहत प्रदान करता है — 100% प्रत्यक्ष, पारदर्शी जमीनी प्रभाव के साथ।',
      donateCta: 'अभी दान करें',
      donateBannerTitle: 'आपका सहयोग घर, भविष्य और उम्मीद बनाता है।',
      impactCta: 'हमारा प्रभाव देखें',
      activeVolunteers: 'तटीय कर्नाटक में सक्रिय स्वयंसेवक',
      emergencyFundBanner: 'आपातकालीन राहत सक्रिय: बाढ़, चिकित्सा और भोजन सहायता प्रदान की जा रही है।',
      emergencyFundTitle: 'त्वरित मानवीय सहायता',
      emergencyFundDesc: 'संकटग्रस्त जरूरतमंद परिवारों को सीधी सहायता पहुंचाना।',
      liveCounters: 'अभी तक की मदद के आंकड़े'
    },
    about: {
      eyebrow: 'HIF INDIA के बारे में',
      title: 'सामुदायिक विश्वास पर आधारित एक जमीनी ट्रस्ट।',
      description:
        'हाइलैंड इस्लामिक फोरम (HIF INDIA) मंगलुरु में मुख्यालय वाला एक पंजीकृत एनजीओ है, जो कर्नाटक और आंध्र प्रदेश में कार्यरत है।',
      whoWeAreBadge: 'हम कौन हैं',
      whoWeAreTitle: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)',
      whoWeAreText1:
        'सहानुभूति और गरिमा के साथ समुदायों को मजबूत बनाना, जीवन में बदलाव। अपनी स्थापना के बाद से, हमने ठोस और प्रत्यक्ष पहलों पर ध्यान केंद्रित किया है — बेघरों के लिए स्थायी पक्के घर, अनाथ बालकों के लिए प्रेमपूर्ण आवासीय आश्रम, वीरान ग्रामीण मस्जिदों का जीर्णोद्धार, निःशुल्क चिकित्सा उपकरण ऋण और आपातकालीन रक्तदान समन्वय।',
      whoWeAreText2:
        'भारतीय ट्रस्ट अधिनियम के तहत पंजीकृत संगठन के रूप में, HIF INDIA बिना कमीशन की सख्त नीति पर काम करता है: किसी विशिष्ट योजना के लिए दान किया गया प्रत्येक रुपया सीधे लाभार्थियों के लिए सामग्री, श्रम, भोजन या चिकित्सा राहत में लगाया जाता है।',
      teamBadge: 'हमारा समुदाय',
      teamTitle: 'इस मिशन के पीछे के लोग',
      teamDesc:
        'HIF India सैकड़ों स्वयंसेवकों, युवा नेताओं और समुदाय के सदस्यों द्वारा संचालित है, जो हर कार्यक्रम, सत्र और राहत अभियान में सहानुभूति के साथ मैदान में उतरते हैं।',
      teamPhotoAlt: 'HIF India टीम और समुदाय',
      visionTitle: 'हमारा लक्ष्य',
      visionText:
        'एक धर्मपरायण, आत्मनिर्भर और करुणामय समाज का निर्माण करना जहाँ कोई भी परिवार बेघर न रहे, हर अनाथ बच्चे को प्यार और विकास का आश्रय मिले, ग्रामीण इबादतगाह ज्ञान से रोशन हों और सामाजिक-आर्थिक स्थिति की परवाह किए बिना स्वास्थ्य सेवा सभी के लिए सुलभ हो।',
      missionTitle: 'हमारा काम',
      missionText:
        'सार्वभौमिक दया, गरिमा और भाईचारे के इस्लामी नैतिक मूल्यों पर आधारित पारदर्शी, समुदाय-संचालित, टिकाऊ कार्यक्रमों के माध्यम से गरीबी, बेघरपन और शैक्षिक अभाव को व्यवस्थित रूप से दूर करना।',
      coreValuesTitle: 'हमारे मूल मूल्य',
      coreValuesSubtitle: 'वे मार्गदर्शक सिद्धांत जो हमारी हर पहल और जमीनी सेवा को दिशा देते हैं।',
      values: {
        transparencyTitle: '100% पारदर्शिता',
        transparencyDesc:
          'प्राप्त प्रत्येक रुपये का सार्वजनिक हिसाब रखा जाता है और बिना किसी प्रशासनिक कटौती के सीधे कार्यक्षेत्र में उपयोग किया जाता है।',
        compassionTitle: 'सार्वभौमिक सहानुभूति',
        compassionDesc:
          'बिना किसी भेदभाव के हर इंसान की सच्ची देखभाल, संवेदना और निस्वार्थ सेवा करना।',
        dignityTitle: 'मानवीय गरिमा का सम्मान',
        dignityDesc:
          'अस्थायी दान के बजाय स्थायी समाधानों और सम्मान के माध्यम से लोगों को आत्मनिर्भर बनाना।',
        sustainabilityTitle: 'टिकाऊ प्रभाव',
        sustainabilityDesc:
          'आवास, शिक्षा और सौर ऊर्जा जैसी सुविधाओं में दीर्घकालिक योजनाएं बनाना जो पीढ़ियों तक लाभ पहुंचाएं।'
      },
      historyTitle: 'हमारा सफर',
      historyText:
        'मंगलुरु में युवाओं के एक छोटे समूह के रूप में शुरू होकर, HIF आज राज्यव्यापी मानवीय संस्था बन चुका है जो आवास, अनाथ सेवा और स्वास्थ्य के माध्यम से हजारों जिंदगियों को संवार रहा है।',
      boardTitle: 'ट्रस्टी बोर्ड और नेतृत्व',
      boardSubtitle: 'अनुभवी सामाजिक कार्यकर्ताओं, विद्वानों और समुदाय के मार्गदर्शकों का कुशल नेतृत्व।',
      pillarsTitle: 'हमारे चार प्रमुख स्तंभ',
      pillarsSubtitle: 'गरिमामय जीवन के लिए आवश्यक बुनियादी आवश्यकताओं को पूरा करने वाले कार्यक्रम।',
      pillarsDesc: 'आपका हर रुपया इन चार कामों में से एक में सीधे लगता है।',
      trustTitle: 'पारदर्शिता और विश्वास',
      trustPoint1: 'मंगलुरु, कर्नाटक में पंजीकृत भारतीय ट्रस्ट एनजीओ।',
      trustPoint2: 'जमीनी लाभार्थियों को 100% प्रत्यक्ष, बिना कमीशन वितरण।',
      trustPoint3: 'दाताओं के लिए उपलब्ध वार्षिक वित्तीय ऑडिट रिपोर्ट।',
      trustPoint4: 'हर दान के लिए आधिकारिक रसीद और 80G आयकर छूट प्रमाण पत्र।',
      hqTitle: 'केंद्रीय मुख्यालय'
    },
    stats: {
      housesDelivered: 'सौंपे गए मकान',
      housesSubtext: 'लक्ष्य: प्रोजेक्ट आशियाना में 2030 तक 150 मकान',
      masjidsRevived: 'पुनर्जीवित व प्रबंधित मस्जिदें',
      masjidsSubtext: 'कर्नाटक और आंध्र प्रदेश भर में',
      orphansNurtured: 'संवारे गए अनाथ छात्र',
      orphansSubtext: 'समग्र आवास, हिफ्ज़ और आधुनिक स्कूली शिक्षा',
      bloodUnits: 'एकत्रित रक्त इकाइयां',
      bloodSubtext: 'जीवन रक्षक आपातकालीन ब्लड सेल यूनिट्स',
      auditTransparency: 'ऑडिट और पारदर्शिता',
      auditSubtext: 'प्रत्यक्ष बिना कमीशन जमीनी वितरण'
    },
    pillars: {
      housingTitle: 'आवास मिशन',
      housingDesc: 'जरूरतमंद परिवारों के लिए स्थायी आशियाना घर',
      orphanCareTitle: 'अनाथ संरक्षण',
      orphanCareDesc: 'चित्तूर आश्रम में 225 बालकों का लालन-पालन',
      masjidRevivalTitle: 'मस्जिद जीर्णोद्धार',
      masjidRevivalDesc: '150+ ग्रामीण मस्जिदों का पुनरुद्धार और रख-रखाव',
      healthcareTitle: 'स्वास्थ्य सेवा',
      healthcareDesc: 'निःशुल्क मेडीबैंक उपकरण और रक्तदाताओं का नेटवर्क'
    },
    projects: {
      eyebrow: 'हमारी योजनाएं',
      title: 'स्थायी बदलाव के लिए बनाई गई प्रमुख योजनाएं।',
      subtitle:
        'दक्षिण भारत भर में आवास, अनाथ संरक्षण और आध्यात्मिक बुनियादी ढांचे को मजबूत करने वाली तीन प्रमुख दीर्घकालिक पहल।',
      allProgramsBadge: 'सभी कार्यक्रम',
      allProgramsTitle: 'दान से लेकर मैदान तक, हर योजना का पारदर्शी रिकॉर्ड।',
      viewAll: 'सभी योजनाएं देखें',
      achievementsTitle: 'मुख्य काम',
      futureGoalsTitle: 'आगे का लक्ष्य',
      tiersTitle: 'मदद की राशि',
      ashiyana: {
        title: 'प्रोजेक्ट आशियाना',
        subtitle: 'बेघर और जरूरतमंद परिवारों के लिए गरिमामय आश्रय',
        badge: 'आवास मिशन',
        overview:
          'कच्ची झोपड़ियों में रहने वाली विधवा माताओं, निर्धन ग्रामीण परिवारों और दिव्यांगजनों के लिए प्रोजेक्ट आशियाना मजबूत, स्थायी पक्के मकान बनाता है।',
        statHomesBuilt: '36 निर्मित मकान',
        statTarget: 'लक्ष्य: 2030 तक 150 मकान',
        statAvgCost: 'औसत लागत ₹6.5 – ₹8 लाख'
      },
      chittor: {
        title: 'चित्तूर ड्रीम प्रोजेक्ट',
        subtitle: 'HIF यतीमखाना – अनाथ बालकों के लिए 2 एकड़ का प्रेमपूर्ण आश्रय',
        badge: 'अनाथ आश्रम',
        overview:
          '100 वर्ष पुराने ऐतिहासिक परिसर को आधुनिक रूप देकर अनाथ बालकों को विश्वस्तरीय अंग्रेजी माध्यम शिक्षा, कुरआन हिफ़्ज़ और नैतिक संस्कार प्रदान किए जाते हैं।',
        statBoys: '225 बालक नामांकित',
        statCampus: '2.0 एकड़ परिसर',
        statCurriculum: 'स्कूली शिक्षा + हिफ्ज़ + आलिम'
      },
      masjid: {
        title: 'मस्जिद विकास कार्यक्रम',
        subtitle: 'बंद मस्जिदों को फिर से खोलना और ग्रामीण आध्यात्मिक केंद्रों का मजबूत बनाना',
        badge: 'आध्यात्मिक समुदाय',
        overview:
          'वीराने में पड़ी ग्रामीण मस्जिदों में नमाज और सामुदायिक शिक्षा को पुनर्जीवित करना तथा वंचित क्षेत्रों में नए इबादतगाहों का निर्माण करना।',
        statReopened: '150+ मस्जिदें पुनर्जीवित',
        statNewBuilt: '8 मस्जिदों का निर्माण/जीर्णोद्धार',
        statReach: 'कर्नाटक और आंध्र प्रदेश'
      },
      educationCity: {
        title: 'HIF एजुकेशन सिटी',
        subtitle: 'मंगलुरु के असैगोली में तैयार हो रहा 3.82 एकड़ का अरबी अकादमी परिसर',
        badge: 'इस्लामिक शिक्षा बुनियादी ढांचा',
        overview:
          'मंगलुरु के असैगोली में 3.82 एकड़ परिसर पर तैयार हो रही अत्याधुनिक अरबी अकादमी, जो आने वाली पीढ़ियों के विद्यार्थियों के लिए इस्लामिक शिक्षा को नया रूप देगी।'
      },
      boondh: {
        title: 'प्रोजेक्ट बूंद',
        subtitle: 'वंचित समुदायों के लिए सुरक्षित पेयजल',
        badge: 'जल सुरक्षा',
        overview:
          'प्रोजेक्ट बूंद बोरवेल, पानी के टैंकर और फिल्ट्रेशन बुनियादी ढांचे के माध्यम से वंचित समुदायों को स्वच्छ और सुरक्षित पेयजल उपलब्ध कराता है।'
      },
      libaas: {
        title: 'प्रोजेक्ट लिबास',
        subtitle: 'वंचित दूल्हा-दुल्हन के लिए गरिमामय उत्सव',
        badge: 'गरिमा और उत्सव',
        overview:
          'प्रोजेक्ट लिबास वंचित परिवारों के दूल्हा-दुल्हन के लिए शादी के कपड़े उपलब्ध कराकर उन्हें अपने खास दिन को गरिमा के साथ मनाने में मदद करता है।'
      }
    },
    activities: {
      eyebrow: 'गतिविधियां और विंग',
      title: 'विशिष्ट सामुदायिक प्रभाव के लिए समर्पित विभाग।',
      subtitle:
        'आपातकालीन चिकित्सा उपकरणों से लेकर युवा विकास और शैक्षणिक सहायता तक, हमारे विंग निरंतर सीधे लोगों तक सेवा दे रहे हैं।',
      wingsBadge: 'हमारे विंग्स',
      wingsTitle: 'स्वास्थ्य, शिक्षा और युवा मजबूत बनाना में निरंतर सेवाएं।',
      featuresTitle: 'हम क्या करते हैं',
      impactTitle: 'अब तक की मदद',
      medical: {
        title: 'HIF मेडिकल सेल और मेडीबैंक',
        subtitle: 'निःशुल्क चिकित्सा उपकरण ऋण और जीवन रक्षक स्वास्थ्य सहायता',
        badge: 'स्वास्थ्य और राहत',
        overview:
          'अस्पताल के बेड, ऑक्सीजन कंसंट्रेटर, व्हीलचेयर जैसे महंगे उपकरण मुफ्त उधार देना तथा आपातकालीन रक्तदान व डायलिसिस सब्सिडी प्रदान करना।',
        statBlood: '1,500+ यूनिट रक्तदान',
        statEquipment: '200+ उपकरणों का बैंक',
        statHelpline: '24/7 हेल्पलाइन सहायता'
      },
      education: {
        title: 'HIF शिक्षा विंग',
        subtitle: 'शैक्षणिक उत्कृष्टता, डिजिटल कौशल और मूल्यपरक शिक्षा',
        badge: 'शैक्षणिक मजबूत बनाना',
        overview:
          'जरूरतमंद मेधावी छात्रों को छात्रवृत्ति, मुफ्त स्कूल बैग व किताबें, कंप्यूटर शिक्षा और ग्रीष्मकालीन व्यक्तित्व विकास शिविर आयोजित करना।',
        statStudents: '2,500+ छात्रों को सहायता',
        statScholarships: '₹40L+ छात्रवृत्ति वितरित',
        statCamps: '45+ शिविर आयोजित'
      },
      youth: {
        title: 'HIF यूथ विंग एजुकेशन सेल',
        subtitle: 'कौशल, अंग्रेजी और समाज सेवा से नई पीढ़ी के नेताओं को प्रेरित करना',
        badge: 'युवा नेतृत्व',
        overview:
          'स्पोकन इंग्लिश कोर्स, डिजिटल साक्षरता, बाढ़ राहत कार्य और नैतिक मार्गदर्शन के माध्यम से युवाओं को सामाजिक बदलाव का संवाहक बनाना।',
        statVolunteers: '300+ सक्रिय युवा स्वयंसेवक',
        statWorkshops: '60+ कौशल कार्यशालाएं',
        statDrives: '120+ सामुदायिक अभियान'
      },
      womenSkill: {
        title: 'महिला कौशल एवं आजीविका केंद्र',
        subtitle: 'सिलाई, हस्तशिल्प प्रशिक्षण और स्वरोजगार सहायता',
        badge: 'आत्मनिर्भरता',
        overview:
          'विधवा और निम्न आय वर्ग की महिलाओं को सिलाई मशीनें, कढ़ाई प्रशिक्षण और घरेलू उद्यम स्थापित करने में सहयोग देना।'
      },
      disasterRelief: {
        title: 'आपदा राहत एवं त्वरित प्रतिक्रिया',
        subtitle: 'बाढ़ राहत, राशन किट और आपातकालीन पुनर्वास',
        badge: 'आपातकालीन राहत',
        overview:
          'प्राकृतिक आपदाओं और बाढ़ के दौरान त्वरित बचाव दल, स्वच्छ पेयजल, सूखा राशन किट और मकान मरम्मत सामग्री पहुंचाना।'
      }
    },
    gallery: {
      eyebrow: 'चित्र वीथिका',
      title: 'सीधे लोगों तक बदलाव के जीवंत दृश्य।',
      subtitle:
        'सौंपे गए मकान, पढ़ते हुए बच्चे, पुनर्जीवित मस्जिदें और संवरती जिंदगियों का सचित्र प्रमाण।',
      filters: {
        all: 'सभी',
        housing: 'आवास',
        orphanage: 'अनाथालय',
        masjid: 'मस्जिद',
        healthcare: 'स्वास्थ्य सेवा',
        education: 'शिक्षा',
        community: 'समुदाय',
        youth: 'युवा'
      },
      emptyMessage: 'इस श्रेणी में कोई तस्वीर नहीं मिली।'
    },
    reels: {
      eyebrow: 'हमारी रील्स',
      title: 'मैदान से सीधे, देखने लायक कहानियाँ',
      subtitle:
        'घर सौंपने, कक्षा के दिन और राहत अभियानों के पीछे के पलों को छोटी रील्स के ज़रिए करीब से देखें।',
      previous: 'पिछली रील',
      next: 'अगली रील',
      viewReel: 'रील देखें',
      followUs: 'अधिक के लिए @hif_india को फॉलो करें',
      mute: 'म्यूट',
      unmute: 'अनम्यूट'
    },
    getInvolved: {
      eyebrow: 'हमसे जुड़ें',
      title: 'समाज सेवा में हर किसी की भूमिका है।',
      description:
        'अपने प्रभाव का आकलन करें, स्वयंसेवक बनें या सीधे दान करें — हर प्रयास से जमीन पर वास्तविक बदलाव आता है।',
      calculatorBadge: 'प्रभाव कैलकुलेटर',
      calculatorTitle: 'देखें आपका दान क्या बदलाव ला सकता है',
      calculatorSubtitle: 'अपनी दान राशि चुनें और देखें कि इससे कितने लोगों की मदद होगी।',
      volunteerBadge: 'हमारे साथ जुड़ें',
      volunteerTitle: 'HIF स्वयंसेवक बनें',
      volunteerSubtitle: 'समाज में स्थायी बदलाव लाने के लिए अपने कौशल और समय का सदुपयोग करें।',
      form: {
        fullName: 'पूरा नाम *',
        fullNamePlaceholder: 'उदा: मोहम्मद फारूक',
        email: 'ईमेल पता *',
        emailPlaceholder: 'you@example.com',
        phone: 'फ़ोन / WhatsApp *',
        phonePlaceholder: '+91 98765 43210',
        city: 'शहर / स्थान *',
        cityPlaceholder: 'उदा: मंगलुरु, उडुपी, बेंगलुरु',
        skillsLabel: 'आप किस प्रकार योगदान देना चाहते हैं? (कौशल चुनें)',
        availableHours: 'उपलब्ध समय / प्रति सप्ताह',
        availableHoursPlaceholder: 'उदा: सप्ताहांत में 4-6 घंटे',
        notes: 'संक्षिप्त परिचय / अनुभव',
        notesPlaceholder: 'अपनी पृष्ठभूमि, रुचियां या स्वयंसेवक बनने की प्रेरणा साझा करें...',
        submitButton: 'स्वयंसेवक के रूप में पंजीकरण करें',
        submittingButton: 'जमा हो रहा है...',
        submitError: 'आवेदन जमा नहीं हो सका। कृपया पुनः प्रयास करें या WhatsApp पर संदेश भेजें।',
        whatsAppButton: 'WhatsApp पर संदेश भेजें',
        successTitle: 'पंजीकरण के लिए धन्यवाद!',
        successMessage: 'हमारे स्वयंसेवक समन्वयक जल्द ही WhatsApp या फ़ोन के माध्यम से आपसे संपर्क करेंगे।',
        submitAnother: 'एक और आवेदन जमा करें'
      },
      skills: {
        bloodDonation: 'रक्तदान / चिकित्सा समन्वय',
        teaching: 'अध्यापन / स्पोकन इंग्लिश / ट्यूशन',
        disasterResponse: 'आपदा एवं बाढ़ राहत प्रतिक्रिया',
        mediaDesign: 'ग्राफिक डिजाइन, वीडियो व सोशल मीडिया',
        fieldVerification: 'आशियाना फील्ड सत्यापन व राहत',
        eventLogistics: 'कार्यक्रम आयोजन एवं व्यवस्था'
      },
      bankCard: {
        title: 'सीधा बैंक ट्रांसफर',
        subtitle: 'बिना किसी अतिरिक्त शुल्क के सीधे हमारे बैंक खाते में दान करें',
        accountName: 'लाभार्थी का नाम',
        accountNumber: 'खाता संख्या',
        ifsc: 'IFSC कोड',
        branch: 'शाखा',
        upiId: 'UPI ID',
        taxNote: 'सभी दान 80G आयकर छूट के पात्र हैं।',
        copyDetails: 'सभी बैंक विवरण कॉपी करें'
      },
      faqTitle: 'अक्सर पूछे जाने वाले प्रश्न',
      faqSubtitle: 'दान, ऑडिट और योजनाओं के प्रबंधन से जुड़े स्पष्ट उत्तर।',
      faqs: {
        q1: 'क्या HIF India को दिए गए दान पर 80G छूट मिलती है?',
        a1: 'हाँ, भारतीय आयकर अधिनियम के तहत HIF INDIA को दिए गए दान पर 80G कर छूट लागू है। आधिकारिक रसीद प्रदान की जाती है।',
        q2: 'मेरे दान का कितना हिस्सा सीधे लाभार्थियों तक पहुंचता है?',
        a2: 'योजना के लिए दिए गए दान का 100% हिस्सा बिना किसी प्रशासनिक कटौती के सीधे सामग्री, भोजन या दवाओं में उपयोग होता है।',
        q3: 'क्या मैं पूरा आशियाना घर या किसी अनाथ छात्र को प्रायोजित कर सकता हूँ?',
        a3: 'बिल्कुल! आप एक पूरे घर का निर्माण (₹7.5 लाख) या एक अनाथ छात्र की वार्षिक शिक्षा (₹15,000/वर्ष) प्रायोजित कर सकते हैं।',
        q4: 'यदि मैं मंगलुरु से बाहर रहता हूँ तो क्या मैं ऑनलाइन स्वयंसेवा कर सकता हूँ?',
        a4: 'हाँ! डिजिटल डिजाइन, अनुवाद, वेब डेवलपमेंट और सोशल मीडिया आउटरीच के लिए ऑनलाइन स्वयंसेवकों का स्वागत है।'
      }
    },
    contact: {
      eyebrow: 'संपर्क करें',
      title: 'हमसे संपर्क करें।',
      description:
        'दान, प्रायोजन, चिकित्सा उपकरण अनुरोध या स्वयंसेवा के लिए हमारे मंगलुरु मुख्यालय से संपर्क करें।',
      centralSecretariat: 'केंद्रीय सचिवालय',
      hours: 'कार्य समय',
      hoursValue: 'सुबह 9:00 – शाम 7:00 (सोम–शनि)',
      primaryPhoneLabel: 'मुख्य कार्यालय एवं मेडिकल सेल',
      altPhoneLabel: 'वैकल्पिक हेल्पलाइन',
      emailLabel: 'आधिकारिक ईमेल',
      formTitle: 'हमें संदेश भेजें',
      formSubtitle: 'हम आमतौर पर 24 घंटे के भीतर जवाब देते हैं।',
      nameLabel: 'पूरा नाम *',
      namePlaceholder: 'उदा: अहमद खान',
      emailInputLabel: 'ईमेल पता *',
      emailPlaceholder: 'ahmed@example.com',
      phoneInputLabel: 'फ़ोन / WhatsApp',
      phonePlaceholder: '+91 98860 12345',
      subjectLabel: 'विषय',
      subjectPlaceholder: 'विषय चुनें',
      subjects: {
        general: 'सामान्य पूछताछ',
        donation: 'दान एवं 80G रसीद',
        volunteer: 'स्वयंसेवा',
        medical: 'चिकित्सा उपकरण / मेडीबैंक अनुरोध',
        partnership: 'सीएसआर / संस्थागत साझेदारी',
        other: 'अन्य'
      },
      messageFieldLabel: 'आपका संदेश *',
      messagePlaceholder: 'हम आपकी किस प्रकार सहायता कर सकते हैं?',
      sendMessage: 'संदेश भेजें',
      sendingMessage: 'भेजा जा रहा है...',
      submitError: 'संदेश नहीं भेजा जा सका। कृपया पुनः प्रयास करें या WhatsApp पर संदेश भेजें।',
      whatsAppButton: 'WhatsApp पर संदेश भेजें',
      whatsAppHint: 'हमसे संपर्क करने का सबसे तेज़ तरीका — WhatsApp खोलने के लिए टैप करें।',
      messageSentTitle: 'संदेश भेजा गया!',
      messageSentText: 'HIF INDIA से संपर्क करने के लिए धन्यवाद। हम जल्द ही आपसे संपर्क करेंगे।',
      sendAnother: 'एक और संदेश भेजें'
    },
    donateModal: {
      title: 'HIF INDIA को दान करें',
      subtitle: 'बैंक ट्रांसफर और UPI भुगतान विवरण',
      forCause: 'इसके लिए',
      generalFund: 'सामान्य मानवीय राहत कोष',
      presetAmounts: 'सुझाई गई राशि',
      customAmount: 'अन्य राशि',
      customAmountPlaceholder: 'राशि दर्ज करें (₹)',
      tabScanQr: 'स्कैन करें और भुगतान करें',
      tabBankTransfer: 'बैंक ट्रांसफर',
      fastestBadge: 'सबसे तेज़',
      beneficiaryName: 'लाभार्थी का नाम (खाताधारक)',
      accountNumber: 'खाता संख्या (चालू खाता)',
      ifscCode: 'IFSC कोड',
      branch: 'शाखा',
      branchValue: 'HDFC बंदर शाखा, मंगलुरु',
      upiId: 'UPI ID',
      scanQr: 'भुगतान के लिए UPI QR कोड स्कैन करें',
      showQr: 'QR कोड देखें',
      hideQr: 'QR कोड छुपाएं',
      qrHelp: 'GPay, PhonePe, Paytm या BHIM ऐप से स्कैन करें',
      qrSecurityTitle: 'भुगतान से पहले जांच लें',
      qrSecurityNote:
        'स्कैन करने के बाद, आपके UPI ऐप में प्राप्तकर्ता का नाम "HIF INDIA" दिखना चाहिए। यदि कोई अन्य नाम दिखे, तो भुगतान न करें — तुरंत WhatsApp पर हमसे संपर्क करें।',
      tax80GNote: '80G आयकर छूट लागू। दान प्रमाण पत्र के लिए रसीद WhatsApp पर साझा करें।',
      notifyWhatsapp: 'भुगतान के बाद WhatsApp पर सूचित करें',
      close: 'बंद करें',
      copiedToast: 'क्लिपबोर्ड पर कॉपी हो गया'
    },
    footer: {
      aboutText:
        'मंगलुरु में पंजीकृत एक जमीनी गैर-सरकारी संगठन जो स्थायी आवास, अनाथ शिक्षा, मस्जिद जीर्णोद्धार और निःशुल्क चिकित्सा उपकरणों के माध्यम से लोगों की मदद करता है।',
      zeroCommission: 'दिया गया पैसा 100% सीधे लोगों तक। कोई कमीशन नहीं',
      exploreTitle: 'देखें',
      programsTitle: 'कार्यक्रम',
      supportUs: 'सहयोग करें',
      bankAccount: 'HDFC बैंक खाता',
      donateQr: 'दान करें / UPI QR',
      allRightsReserved: 'हाइलैंड इस्लामिक फोरम (HIF INDIA)। सर्वाधिकार सुरक्षित।',
      addressFull: 'मस्जिद एहसान कॉम्प्लेक्स, कंकनाडी, मंगलुरु – 575002',
      slogan: 'सहानुभूति और गरिमा के साथ समुदायों को मजबूत बनाना, जीवन में बदलाव',
      developedBy: 'द्वारा विकसित'
    }
  }
}
