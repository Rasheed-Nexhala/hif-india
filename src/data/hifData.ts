export interface ProjectTier {
  title: string
  amount: number
  unit: string
  description: string
  isPopular?: boolean
}

export interface ProjectData {
  id: string
  title: string
  subtitle: string
  badge: string
  category: 'Housing' | 'Orphanage' | 'Masjid' | 'Education' | 'Water' | 'Celebration'
  icon: string
  stats: {
    label: string
    value: string
  }[]
  overview: string
  fullStory: string[]
  achievements: string[]
  futureGoals: string[]
  supportTiers: ProjectTier[]
  image: string
  images: string[]
  color: string
}

export interface ActivityData {
  id: string
  title: string
  subtitle: string
  badge: string
  category: 'Healthcare' | 'Education' | 'Youth'
  icon: string
  stats: {
    label: string
    value: string
  }[]
  overview: string
  fullStory: string[]
  features: string[]
  impactPoints: string[]
  image: string
  images: string[]
  color: string
}

export interface GalleryItem {
  id: string
  title: string
  category: 'Housing' | 'Orphanage' | 'Masjid' | 'Healthcare' | 'Education' | 'Community' | 'Youth'
  imageUrl: string
  location: string
  description: string
  year: string
}

export interface ImpactTier {
  id: string
  minAmount: number
  title: string
  category: string
  iconName: string
  description: string
  tangibleImpact: string
  breakdown: string[]
}

export const HIF_ORGANIZATION = {
  name: 'HIF INDIA',
  fullName: 'Highland Islamic Forum (HIF INDIA)',
  tagline: 'Empowering Communities, Transforming Lives with Compassion & Dignity',
  established: 'Registered NGO in Mangaluru',
  regDetails: 'Registered NGO under Indian Trusts Act',
  address: {
    street: 'Masjid Ehsaan Complex, Kankanady',
    city: 'Mangalore',
    state: 'Karnataka',
    pincode: '575002',
    country: 'India',
    full: 'Masjid Ehsaan Mosque, Kankanady, Mangalore - 575002, Karnataka, India'
  },
  contact: {
    primaryPhone: '+91 63662 96133',
    altPhone: '+91 9886017265',
    email: 'info@hif.org.in',
    website: 'https://hif.org.in',
    whatsapp: '+916366296133'
  },
  bankDetails: {
    accountName: 'HIF INDIA',
    accountNumber: '50200064753851',
    ifscCode: 'HDFC0005251',
    bankName: 'HDFC Bank',
    branch: 'HDFC - BUNDER BRANCH - 01, Mangalore',
    accountType: 'Current Account',
    upiId: '50200064753851@hdfcbank'
  },
  socials: {
    facebook: 'https://www.facebook.com/HighlandIslamicForum/',
    instagram: 'https://instagram.com/hif_india',
    youtube: 'https://youtube.com/@hif_india2012'
  },
  statsSummary: [
    { label: 'Houses Delivered', count: 36, suffix: '', subtext: 'Goal: 150 by 2030 in Project Ashiyana', icon: 'Home' },
    { label: 'Masjids Revived & Maintained', count: 150, suffix: '+', subtext: 'Across Karnataka & Andhra Pradesh', icon: 'Landmark' },
    { label: 'Orphan Students Nurtured', count: 225, suffix: '+', subtext: 'Comprehensive living, Hifz & modern schooling', icon: 'GraduationCap' },
    { label: 'Blood Units Mobilized', count: 1500, suffix: '+', subtext: 'Life-saving emergency blood cell units', icon: 'HeartPulse' },
    { label: 'Audit & Transparency', count: 100, suffix: '%', subtext: 'Direct zero-commission grassroots disbursement', icon: 'ShieldCheck' }
  ],
  vision: 'To build a righteous, self-reliant, and compassionate society where no family is left shelterless, every orphan finds a loving sanctuary of growth, rural places of worship flourish with knowledge, and healthcare is accessible to all regardless of socio-economic standing.',
  mission: 'To systematically alleviate poverty, homelessness, and educational deprivation through transparent, community-driven, sustainable programs rooted in Islamic ethical values of universal mercy, dignity, and brotherhood.',
  siteImages: {
    logo: '/images/projects/hif-icon.png',
    heroSlides: [
      '/images/projects/slider-1.jpg',
      '/images/projects/slider-2.jpg',
      '/images/projects/slider-3.jpg',
      '/images/projects/slider-4.jpg'
    ],
    about: '/images/projects/about-us.jpg',
    aboutAlt: '/images/gallery/team-group-selfie-wefie.jpg',
    mission: '/images/projects/mission.jpg'
  },
  teamPhotos: [
    '/images/gallery/team-group-selfie-wefie.jpg',
    '/images/gallery/hif-auditorium-packed-event.jpg',
    '/images/gallery/iftar-al-qalam-arabic-academy.jpg',
    '/images/gallery/team-outdoor-trip-luggage.jpg',
    '/images/gallery/airport-welcome-flowers.jpg',
    '/images/gallery/hif-sports-meet-cricket-winners-2025.jpg',
    '/images/gallery/ramadan-fajr-bicycle-handover.jpg',
    '/images/gallery/hif-team-stage-gathering.jpg',
    '/images/gallery/youth-community-meeting-living-room.jpg'
  ]
}

export const HIF_PROJECTS: ProjectData[] = [
  {
    id: 'project-ashiyana',
    title: 'Project Ashiyana',
    subtitle: 'Shelter of Dignity for Homeless & Destitute Families',
    badge: 'Housing Mission',
    category: 'Housing',
    icon: 'Home',
    image: '/images/projects/ashiyana3.jpg',
    images: [
      '/images/gallery/ashiyana-foundation-laying-ceremony.jpg',
      '/images/gallery/ashiyana-home-handover-2016.jpg',
      '/images/gallery/ashiyana-house-construction-2013.jpg',
      '/images/projects/ashiyana3.jpg',
      '/images/projects/ashiyana4.jpg',
      '/images/projects/ashiyana5.jpg',
      '/images/projects/ashiyana6.jpg',
      '/images/projects/ashiyana7.jpg',
      '/images/projects/ashiyana8.jpg',
      '/images/projects/ashiyana9.jpg',
      '/images/projects/ashiyana10.jpg',
      '/images/projects/ashiyana11.jpg',
      '/images/projects/ashiyana12.jpg',
      '/images/projects/ashiyana13.jpg',
      '/images/projects/ashiyana14.jpg'
    ],
    color: 'emerald',
    stats: [
      { label: 'Homes Built', value: '36' },
      { label: 'Target by 2030', value: '150 Homes' },
      { label: 'Avg Cost per Home', value: '₹6.5 - ₹8 Lakh' }
    ],
    overview: 'Project Ashiyana provides solid, dignified homes for widowed mothers, impoverished rural families, and disabled breadwinners living in dilapidated shacks.',
    fullStory: [
      'Project Ashiyana was born out of ground-level surveys across Dakshina Kannada, Udupi, and rural Karnataka, which uncovered families living under leaky plastic tarpaulins with vulnerable children and elderly parents.',
      'Unlike temporary relief, Ashiyana constructs permanent, weather-resistant pucca homes with dedicated sanitation, clean water connection, and durable roofing.',
      'Beyond brick and mortar, HIF works with each family on a comprehensive rehabilitation path—ensuring children return to school and family members gain vocational livelihood training.'
    ],
    achievements: [
      '36 fully furnished, permanent homes successfully constructed and handed over to destitute families, including homes for families affected by the Wayanad landslides',
      'Zero administrative cut: 100% of designated construction funds channeled straight to materials and local labor',
      'Engineered for coastal cyclone and monsoon durability with reinforced concrete foundations',
      'Sanitation facilities and solar electricity provisions integrated in modern batches'
    ],
    futureGoals: [
      'Deliver 150 completed Ashiyana homes across South Karnataka by the year 2030',
      'Launch clustered sustainable eco-villages with shared water borewells and community study halls',
      'Partner with solar providers to make each Ashiyana shelter completely electricity bill-free'
    ],
    supportTiers: [
      {
        title: 'Full Home Construction Pledge',
        amount: 750000,
        unit: 'per home',
        description: 'Fund the complete end-to-end construction of a 2-bedroom home for a homeless destitute family.',
        isPopular: true
      },
      {
        title: 'Roofing & Structural Reinforcement',
        amount: 150000,
        unit: 'per unit',
        description: 'Provide concrete slab, weather-proof roofing, and foundational reinforcement.'
      },
      {
        title: 'Water & Sanitation Infrastructure',
        amount: 50000,
        unit: 'per household',
        description: 'Build an attached modern bathroom, septic tank, and pipeline connection.'
      },
      {
        title: 'Ashiyana Brick & Cement Fund',
        amount: 10000,
        unit: 'per share',
        description: 'Contribute a fractional share towards ongoing home construction batches.'
      }
    ]
  },
  {
    id: 'chittor-dream-project',
    title: 'Chittor Dream Project',
    subtitle: 'HIF Yateemkana – A 2-Acre Loving Sanctuary for Orphaned Boys',
    badge: 'Orphan Sanctuary',
    category: 'Orphanage',
    icon: 'HeartHandshake',
    image: '/images/projects/chitttor.jpg',
    images: [
      '/images/projects/chitttor.jpg',
      '/images/projects/chittor2.jpg',
      '/images/projects/chittor3.jpg',
      '/images/projects/chittor4.jpg',
      '/images/projects/chittor5.jpg'
    ],
    color: 'amber',
    stats: [
      { label: 'Students Enrolled', value: '225 Boys' },
      { label: 'Campus Area', value: '2.0 Acres' },
      { label: 'Curriculum', value: 'Schooling + Hifz + Aleem' }
    ],
    overview: 'A historic 100-year-old educational sanctuary revitalized into a modern campus providing world-class English medium schooling, memorization of Quran, and character building.',
    fullStory: [
      'Set across 2 sprawling green acres in Chittor, Andhra Pradesh, the Chittor Dream Project is an oasis of hope for 225 orphaned (yatheem) and destitute (miskeen) young boys.',
      'Rather than institutionalizing children, HIF creates a warm, homely family atmosphere where every boy receives tailored mentorship, nutritious hygienic meals, modern digital schooling, and religious scholarship (Hifz & Aleem courses).',
      'Children participate in martial arts, science clubs, computer programming classes, and public speaking workshops, preparing them to enter premier universities and professions.'
    ],
    achievements: [
      'Complete modernization of 100-year-old campus infrastructure including smart classrooms and clean dormitories',
      '225 resident students receiving 100% free education, clothing, medical care, and 4 daily nutritious meals',
      '100% pass rates in state board examinations with multiple student distinctions',
      'On-campus sports facilities, library with 3,000+ books, and high-speed computer laboratory'
    ],
    futureGoals: [
      'Expand capacity to house and educate 250 orphan boys by 2028 with additional hostel wings',
      'Establish a STEM innovation lab and vocational robotics training center',
      'Create a higher education endowment fund supporting alumni through engineering, medical, and civil service studies'
    ],
    supportTiers: [
      {
        title: 'Full Annual Student Sponsorship',
        amount: 15000,
        unit: 'per student / year',
        description: 'Covers full tuition, school books, uniforms, hostel lodging, and medical care for one orphan student for a year.',
        isPopular: true
      },
      {
        title: 'Special Campus Feast Day',
        amount: 8000,
        unit: 'per day (225 boys)',
        description: 'Sponsor a festive, special nutritious meal (Biryani, fruits, sweets) for all 225 boys on your special family occasion.'
      },
      {
        title: 'One Day Regular Food Sponsor',
        amount: 5000,
        unit: 'per day (all meals)',
        description: 'Provides breakfast, lunch, evening snack, and dinner for the entire 225-student campus.'
      },
      {
        title: 'Annual Clothing & Uniform Kit',
        amount: 2500,
        unit: 'per student / year',
        description: 'Provides 2 sets of school uniforms, traditional attire, shoes, winter wear, and bedding essentials.'
      }
    ]
  },
  {
    id: 'masjid-development',
    title: 'Masjid Development Programme',
    subtitle: 'Reopening Closed Masjids & Empowering Rural Spiritual Centers',
    badge: 'Spiritual Community',
    category: 'Masjid',
    icon: 'Landmark',
    image: '/images/projects/masjid.jpg',
    images: [
      '/images/gallery/masjid-al-abbas-presentation-plan.jpg',
      '/images/projects/masjid.jpg',
      '/images/projects/masjid6.jpg',
      '/images/projects/masjid7.jpg',
      '/images/projects/masjid8.jpg',
      '/images/projects/masjid9.jpg',
      '/images/projects/masjid10.jpg'
    ],
    color: 'emerald',
    stats: [
      { label: 'Masjids Reopened', value: '150+' },
      { label: 'Masjids Constructed/Renovated', value: '8 Complete' },
      { label: 'Geographic Reach', value: 'KA & AP' }
    ],
    overview: 'Restoring life, prayers, and community education to abandoned rural masjids while constructing new centers of worship in underserved settlements.',
    fullStory: [
      'In remote rural belts across Karnataka and Andhra Pradesh, hundreds of historical masjids were left locked and decaying due to poverty and migration of local caretakers.',
      'HIF initiated a systematic revival campaign: restoring physical structures, installing solar inverters and sound systems, digging borewells for wudhu, and appointing qualified Imams with guaranteed monthly honorariums.',
      'Today, over 150 masjids buzz with five daily prayers and evening Quranic and moral classes for village children, transforming them into thriving centers of social harmony and guidance.'
    ],
    achievements: [
      'Over 150 closed and neglected rural masjids successfully reopened, refurbished, and kept active',
      '8 masjids newly constructed or fully renovated under the Masjid Development Project (MDP), restoring them as active, functional places of worship',
      'Regular monthly salary disbursement to 100+ rural Imams and Muazzins',
      'Installation of solar electrical setups and clean water filtration units in 40+ remote villages'
    ],
    futureGoals: [
      'Reach 250 revitalized rural masjids with self-sustaining community library setups',
      'Construct 10 new eco-friendly masjids with rainwater harvesting and community medical clinics',
      'Launch an Imam welfare and healthcare insurance scheme'
    ],
    supportTiers: [
      {
        title: 'Rural Imam Monthly Honorarium',
        amount: 10000,
        unit: 'per month',
        description: 'Support a dedicated Imam and teacher serving in a remote rural village masjid.',
        isPopular: true
      },
      {
        title: 'New Rural Masjid Construction Share',
        amount: 100000,
        unit: 'per share (Total: ₹8-10 Lakh)',
        description: 'Contribute a foundation share towards building an entire new village masjid.'
      },
      {
        title: 'Masjid Solar & Wudhu Infrastructure',
        amount: 35000,
        unit: 'per masjid',
        description: 'Provide solar backup power, PA system, and clean water filtration setup.'
      },
      {
        title: 'Rural Madrasa Kit & Quran Distribution',
        amount: 5000,
        unit: 'per batch',
        description: 'Supplies Arabic primers, Qurans, whiteboards, and stationery for 30 village children.'
      }
    ]
  },
  {
    id: 'hif-education-city',
    title: 'HIF Education City',
    subtitle: 'A 3.82-Acre Arabic Academy Rising in Assaigoli, Mangaluru',
    badge: 'Islamic Education Infrastructure',
    category: 'Education',
    icon: 'GraduationCap',
    image: '/images/projects/about-us.jpg',
    images: [
      '/images/projects/about-us.jpg'
    ],
    color: 'amber',
    stats: [
      { label: 'Campus Area', value: '3.82 Acres' },
      { label: 'Location', value: 'Assaigoli, Mangaluru' },
      { label: 'Status', value: 'Land Acquired' }
    ],
    overview: 'A state-of-the-art Arabic Academy coming up on a 3.82-acre campus in Assaigoli, Mangaluru, envisioned to transform Islamic learning for generations of students.',
    fullStory: [
      'HIF Education City is HIF INDIA\'s most ambitious infrastructure undertaking to date — a dedicated Arabic Academy campus that will bring together modern Islamic scholarship, Arabic language mastery, and contemporary academic education under one roof.',
      'The 3.82-acre site in Assaigoli, Mangaluru has been fully purchased, clearing the way for construction to begin. The campus is envisioned as a long-term center of learning that will serve students from across the region for decades to come.',
      'As with every HIF project, the Education City will be built and funded transparently, with donors able to track the campus from land, to foundation, to finished classrooms.'
    ],
    achievements: [
      '3.82 acres of land in Assaigoli, Mangaluru fully purchased and secured for the campus',
      'Construction planned to begin this year, In Sha Allah',
      'Positioned as a flagship, long-term investment in Islamic and academic education for the coastal Karnataka region'
    ],
    futureGoals: [
      'Break ground on Phase 1 construction of the Arabic Academy campus',
      'Develop academic blocks, hostel facilities, and a library for resident students',
      'Establish HIF Education City as a leading center for Arabic and Islamic scholarship in South India'
    ],
    supportTiers: [
      {
        title: 'Founding Campus Patron',
        amount: 500000,
        unit: 'per pledge',
        description: 'Become a founding donor of HIF Education City, supporting core construction of the Arabic Academy campus.',
        isPopular: true
      },
      {
        title: 'Classroom Construction Share',
        amount: 100000,
        unit: 'per share',
        description: 'Contribute a share towards the construction of a classroom block on the new campus.'
      },
      {
        title: 'Campus Building Fund',
        amount: 25000,
        unit: 'per share',
        description: 'Support ongoing construction costs as the campus rises from foundation to finished structure.'
      },
      {
        title: 'Brick & Cement Contribution',
        amount: 5000,
        unit: 'per share',
        description: 'A fractional contribution towards materials for the Education City campus.'
      }
    ]
  },
  {
    id: 'project-boondh',
    title: 'Project Boondh',
    subtitle: 'Safe Drinking Water for Underserved Communities',
    badge: 'Water Security',
    category: 'Water',
    icon: 'Droplet',
    image: '/images/projects/water1.jpg',
    images: [
      '/images/gallery/water-purification-shepherds-academy.jpg',
      '/images/gallery/project-boondh-cutchi-memon-masjid.jpg',
      '/images/gallery/boondh-water-supply-inauguration-2016.jpg',
      '/images/gallery/boondh-water-tanker-delivery-2016.jpg',
      '/images/projects/water1.jpg',
      '/images/projects/water2.jpg',
      '/images/projects/water3.jpg',
      '/images/projects/water7.jpg',
      '/images/projects/water5.jpg',
      '/images/projects/water6.jpg',
      '/images/projects/water8.jpg',
      '/images/gallery/22.jpg'
    ],
    color: 'emerald',
    stats: [
      { label: 'Water Projects Completed', value: '18' },
      { label: 'Focus Area', value: 'Underserved Villages' },
      { label: 'Access Provided', value: 'Safe Drinking Water' }
    ],
    overview: 'Project Boondh ensures access to clean and safe drinking water for underserved communities through borewells, water tankers, and filtration infrastructure.',
    fullStory: [
      'In many rural and low-income settlements across coastal Karnataka, access to clean drinking water remains a daily struggle, especially during summer months when wells and open sources run dry.',
      'Project Boondh addresses this directly — funding borewells, water storage and filtration setups, and emergency tanker deliveries so that no family is forced to drink unsafe water.',
      'Since inception, 18 water projects have been successfully completed, with more in the pipeline as HIF continues to identify water-stressed pockets across the region.'
    ],
    achievements: [
      '18 water projects successfully completed for underserved communities',
      'Emergency free water tanker deliveries to households facing acute summer scarcity',
      'Borewell and filtration infrastructure built to provide lasting, not one-time, access to safe water'
    ],
    futureGoals: [
      'Expand Project Boondh to additional water-stressed villages across Karnataka',
      'Introduce solar-powered water pumping for greater sustainability',
      'Partner with local communities on maintenance so every water project remains functional long-term'
    ],
    supportTiers: [
      {
        title: 'Full Water Project Sponsorship',
        amount: 150000,
        unit: 'per project',
        description: 'Fund a complete borewell, storage, and filtration setup for an underserved community.',
        isPopular: true
      },
      {
        title: 'Water Tanker Emergency Relief',
        amount: 15000,
        unit: 'per tanker deployment',
        description: 'Deliver free drinking water by tanker to households facing acute water scarcity.'
      },
      {
        title: 'Filtration Unit Contribution',
        amount: 5000,
        unit: 'per share',
        description: 'Contribute towards clean water filtration equipment for a village water point.'
      }
    ]
  },
  {
    id: 'project-libaas',
    title: 'Project Libaas',
    subtitle: 'Dignity in Celebration for Underprivileged Brides & Grooms',
    badge: 'Dignity & Celebration',
    category: 'Celebration',
    icon: 'Shirt',
    image: '/images/projects/libaas-cover.png',
    images: [
      '/images/projects/libaas-cover.png',
      '/images/gallery/libaas-wedding-dress-distribution-2015.jpg'
    ],
    color: 'amber',
    stats: [
      { label: 'Wedding Dresses Provided', value: '100+' },
      { label: 'Beneficiaries', value: 'Brides & Grooms' },
      { label: 'Focus', value: 'Dignity in Celebration' }
    ],
    overview: 'Project Libaas provides wedding dresses for brides and grooms from underprivileged families, helping them celebrate their special day with dignity.',
    fullStory: [
      'For many underprivileged families, even a wedding — a day meant for joy — can become a source of financial strain and quiet shame when a proper wedding outfit is out of reach.',
      'Project Libaas was created to remove that burden, providing dignified wedding attire to brides and grooms from low-income families so their special day is marked with celebration, not compromise.',
      'To date, Project Libaas has provided over 100 wedding dresses, letting couples begin their married life with dignity rather than debt.'
    ],
    achievements: [
      '100+ wedding dresses provided to brides and grooms from underprivileged families',
      'Helped couples celebrate their wedding day with dignity, free of financial strain',
      'Delivered as part of HIF\'s broader commitment to dignity in every stage of life'
    ],
    futureGoals: [
      'Expand Project Libaas to reach more underprivileged couples each wedding season',
      'Partner with local tailors and boutiques for sustainable, ongoing dress sponsorship',
      'Pair wedding attire support with essential household starter kits for new couples'
    ],
    supportTiers: [
      {
        title: 'Full Wedding Attire Sponsorship',
        amount: 15000,
        unit: 'per couple',
        description: 'Sponsor a complete wedding outfit for a bride and groom from an underprivileged family.',
        isPopular: true
      },
      {
        title: 'Bridal Dress Contribution',
        amount: 8000,
        unit: 'per bride',
        description: 'Provide a dignified wedding dress for a bride from a low-income family.'
      },
      {
        title: 'Groom\'s Attire Contribution',
        amount: 5000,
        unit: 'per groom',
        description: 'Provide wedding attire for a groom from an underprivileged family.'
      }
    ]
  }
]

export const HIF_ACTIVITIES: ActivityData[] = [
  {
    id: 'hif-medical-cell',
    title: 'HIF Medical Cell & MEDIBANK',
    subtitle: 'Free Medical Equipment on Loan & Life-Saving Healthcare Support',
    badge: 'Healthcare & Relief',
    category: 'Healthcare',
    icon: 'Stethoscope',
    image: '/images/projects/hif1.jpg',
    images: [
      '/images/projects/hif1.jpg',
      '/images/projects/hif2.jpg',
      '/images/projects/hif5.jpg',
      '/images/projects/hif6.jpg',
      '/images/projects/hif7.jpg',
      '/images/projects/hif8.jpg',
      '/images/projects/hif9.jpg',
      '/images/projects/hif10.jpg',
      '/images/projects/hif11.jpg',
      '/images/gallery/blood-donation-camp-june-2023.jpg',
      '/images/gallery/wenlock-hospital-volunteers.jpg',
      '/images/gallery/orphan-day-medical-checkup-2018.jpg'
    ],
    color: 'emerald',
    stats: [
      { label: 'Blood Units Donated', value: '1,500+' },
      { label: 'Equipment Pool', value: '200+ Units' },
      { label: 'Emergency Support', value: '24/7 Helpline' }
    ],
    overview: 'Providing free loans of expensive medical devices (hospital beds, oxygen concentrators, wheelchairs) and coordinating emergency blood donors and dialysis subsidies.',
    fullStory: [
      'Medical emergencies frequently push low-income families into devastating debt. HIF MEDIBANK solves this by maintaining a massive equipment bank that lends critical recovery devices free of cost.',
      'From motorized hospital cots, oxygen cylinders, BiPAP machines, and suction pumps to adult wheelchairs and air mattresses, families borrow what they need and return them after patient recovery.',
      'Our 24/7 Blood Donation Cell has mobilized over 1,500 units of rare blood groups during hospital trauma emergencies, backed by emergency ambulance coordination and regular dialysis financial relief.'
    ],
    features: [
      'HIF MEDIBANK: 100% free loan of hospital beds, oxygen concentrators, wheel chairs & crutches',
      'Rapid Blood Donor Network with 1,500+ registered voluntary donors across Mangaluru & coastal Karnataka',
      'Dialysis Financial Subsidy: Assisting end-stage kidney failure patients with recurring treatment expenses',
      '24/7 Free Emergency Ambulance Coordination and oxygen cylinder refill support',
      'Home Oxygen Therapy Support Bank: Free rotation of oxygen cylinders & concentrators for home-care patients',
      'Regular Vaccination Camps for children and adults in underserved settlements',
      'Hajj Camps with Free Hajj Kits for pilgrims from the community',
      'COVID-19 Frontline Legacy: Free community oxygen bank and food kit distribution during lock-downs'
    ],
    impactPoints: [
      'Saved families over ₹60 Lakhs in equipment rental fees and purchase costs',
      'Zero delay emergency blood matching during critical ICU surgeries and pediatric cases',
      'Over 350 chronic dialysis sessions subsidized for underprivileged breadwinners'
    ]
  },
  {
    id: 'hif-education-wing',
    title: 'HIF Education Wing',
    subtitle: 'Nurturing Academic Excellence, Digital Skills & Value Education',
    badge: 'Academic Empowerment',
    category: 'Education',
    icon: 'BookOpen',
    image: '/images/projects/youth2.jpg',
    images: [
      '/images/gallery/sslc-awards-celebrating-excellence-2025.jpg',
      '/images/gallery/ssr-awards-celebrating-excellence-2023.jpg',
      '/images/projects/youth2.jpg',
      '/images/projects/youth10.jpg',
      '/images/projects/youth14.jpg',
      '/images/projects/youth19.jpg',
      '/images/projects/edu-wali-rehmani.png',
      '/images/projects/edu-munawar-zama.png'
    ],
    color: 'amber',
    stats: [
      { label: 'Students Assisted', value: '2,500+' },
      { label: 'Scholarships Awarded', value: '₹40L+' },
      { label: 'Camps Conducted', value: '45+ Batches' }
    ],
    overview: 'Empowering underprivileged students with merit scholarships, free school bags, textbook distribution, computer education, and summer personality camps.',
    fullStory: [
      'Education is the ultimate equalizer. The HIF Education Wing ensures that financial hardship never forces a talented student to drop out of school or college.',
      'Every academic year, HIF screens hundreds of applicants to award need-cum-merit educational aid for PUC, degree, engineering, nursing, and medical studies.',
      'In addition, weekend computer literacy workshops and youth personality development camps build leadership, ethical grounding, and communication skills.'
    ],
    features: [
      'Higher Education Merit Scholarships for deserving low-income students in professional degrees',
      'Annual Book Fair & Free School Kit Drive (bags, notebooks, geometry sets for 500+ kids annually)',
      'Free Computer Literacy & Coding Foundations workshops in community centers',
      'Personality Development & Public Speaking Bootcamps during school vacations',
      'Career Guidance & Competitive Exam counseling for 10th and 12th standard graduates'
    ],
    impactPoints: [
      'Produced first-generation engineers, teachers, nurses, and accountants from slum settlements',
      'Reduced school dropout rates in targeted coastal neighborhoods to near zero',
      'Encouraged female education with 60%+ scholarship recipients being young women'
    ]
  },
  {
    id: 'hif-youth-wing',
    title: 'HIF Youth Wing Education Cell',
    subtitle: 'Inspiring Next-Gen Leaders with Skills, English & Community Service',
    badge: 'Youth Leadership',
    category: 'Youth',
    icon: 'Users',
    image: '/images/projects/youth1.jpg',
    images: [
      '/images/projects/youth1.jpg',
      '/images/projects/youth4.jpg',
      '/images/projects/youth5.jpg',
      '/images/projects/youth11.jpg',
      '/images/projects/youth15.jpg',
      '/images/projects/youth16.jpg',
      '/images/projects/youth17.jpg',
      '/images/projects/youth18.jpg',
      '/images/gallery/team-group-selfie-wefie.jpg',
      '/images/gallery/hif-sports-meet-cricket-winners-2025.jpg',
      '/images/gallery/ramadan-fajr-bicycle-handover.jpg',
      '/images/gallery/hajj-training-camp-april-2025.jpg',
      '/images/gallery/youth-leadership-training-2018.jpg',
      '/images/gallery/youth-circle-meeting-core-values.jpg',
      '/images/gallery/ramadan-fajr-salah-winners.jpg',
      '/images/gallery/hif-forum-speaker-podium.jpg',
      '/images/gallery/hif-forum-seminar-podium-2026.jpg'
    ],
    color: 'emerald',
    stats: [
      { label: 'Active Youth Volunteers', value: '300+' },
      { label: 'Skill Workshops', value: '60+' },
      { label: 'Community Drives', value: '120+' }
    ],
    overview: 'Mobilizing energetic youth into social change-makers through spoken English courses, digital literacy, disaster relief response, and ethical mentoring.',
    fullStory: [
      'The HIF Youth Wing bridges the gap between raw potential and practical achievement. During the post-COVID transition, the cell pioneered remediation classes to overcome learning loss among children in underprivileged areas.',
      'Our young volunteers are the frontline muscle during flash floods, medical emergencies, and community clean-up campaigns, proving that youth directed towards compassion can transform society.',
      'Through structured debate clubs, English fluency bootcamps, and career mentorship with industry leaders, we nurture youth to become confident, ethical global citizens.'
    ],
    features: [
      'Spoken English & Professional Communication accelerator batches for high schoolers',
      'Post-COVID Learning Loss Recovery Clinics in neighborhood evening centers',
      'Rapid Disaster & Emergency Relief Response Volunteer Corps',
      'Youth Mentorship Network pairing university students with experienced industry professionals',
      'Community Blood Donation Drives and Tree Planting environmental campaigns'
    ],
    impactPoints: [
      'Trained 300+ active youth volunteers ready for rapid emergency disaster mobilization',
      'Over 800 high school students completed conversational English and interview readiness training',
      'Fostered cross-community solidarity and communal harmony through open volunteer drives'
    ]
  }
]

export const HIF_GALLERY: GalleryItem[] = [
  {
    id: 'gal-28',
    title: 'Ashiyana Home Handover #36',
    category: 'Housing',
    imageUrl: '/images/gallery/28.jpg',
    location: 'Meenadi, Kadaba',
    description: 'HIF India and HIF Qatar mark the 36th home handover under Project Ashiyana, with community leaders and the elderly beneficiary at the new house.',
    year: '2026'
  },
  {
    id: 'gal-29',
    title: 'Ashiyana Beneficiary Family Meeting',
    category: 'Housing',
    imageUrl: '/images/gallery/29.jpg',
    location: 'Meenadi, Kadaba',
    description: 'HIF India leadership meets with the beneficiary family inside their newly handed-over home during the 36th Project Ashiyana ceremony.',
    year: '2026'
  },
  {
    id: 'gal-35',
    title: 'HIF India Team Celebration Selfie',
    category: 'Community',
    imageUrl: '/images/gallery/team-group-selfie-wefie.jpg',
    location: 'Mangaluru',
    description: 'A cheerful group of HIF India volunteers and team members celebrating together at a community event.',
    year: '2025'
  },
  {
    id: 'gal-36',
    title: 'Packed HIF Auditorium Event',
    category: 'Community',
    imageUrl: '/images/gallery/hif-auditorium-packed-event.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'A large auditorium filled with attendees at a Highland Islamic Forum community programme.',
    year: '2025'
  },
  {
    id: 'gal-37',
    title: 'Iftar Communal Meal at Al Qalam Academy',
    category: 'Community',
    imageUrl: '/images/gallery/iftar-al-qalam-arabic-academy.jpg',
    location: 'Al Qalam Arabic Academy, Mangaluru',
    description: 'Community members sharing a communal iftar meal together during Ramadan at Al Qalam Arabic Academy.',
    year: '2025'
  },
  {
    id: 'gal-38',
    title: 'HIF Team Outdoor Trip',
    category: 'Community',
    imageUrl: '/images/gallery/team-outdoor-trip-luggage.jpg',
    location: 'Mangaluru',
    description: 'Sixteen HIF India team members posing outdoors with luggage during a team outing or travel programme.',
    year: '2025'
  },
  {
    id: 'gal-39',
    title: 'Airport Welcome with Flowers',
    category: 'Community',
    imageUrl: '/images/gallery/airport-welcome-flowers.jpg',
    location: 'Mangaluru Airport',
    description: 'HIF India volunteers welcoming a guest at the airport arrivals with flower garlands.',
    year: '2025'
  },
  {
    id: 'gal-40',
    title: 'HIF Sports Meet 2025 Cricket Winners',
    category: 'Youth',
    imageUrl: '/images/gallery/hif-sports-meet-cricket-winners-2025.jpg',
    location: 'Mangaluru',
    description: 'Cricket tournament winners celebrating at the HIF Sports Meet 2025 with trophies and team spirit.',
    year: '2025'
  },
  {
    id: 'gal-41',
    title: 'Ramadan Fajr Salah Bicycle Handover',
    category: 'Youth',
    imageUrl: '/images/gallery/ramadan-fajr-bicycle-handover.jpg',
    location: 'Mangaluru',
    description: 'Bicycle prize handover ceremony for winners of the Ramadan Fajr Salah Competition, with children and HIF volunteers.',
    year: '2025'
  },
  {
    id: 'gal-42',
    title: 'HIF Team Stage Gathering',
    category: 'Community',
    imageUrl: '/images/gallery/hif-team-stage-gathering.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'A large group of HIF India team members, youth, and volunteers gathered on stage at a formal HIF programme.',
    year: '2025'
  },
  {
    id: 'gal-43',
    title: 'Youth Community Meeting',
    category: 'Youth',
    imageUrl: '/images/gallery/youth-community-meeting-living-room.jpg',
    location: 'Mangaluru',
    description: 'HIF youth and volunteers in an informal community meeting and discussion session.',
    year: '2024'
  },
  {
    id: 'gal-44',
    title: 'Ashiyana Foundation Laying Ceremony',
    category: 'Housing',
    imageUrl: '/images/gallery/ashiyana-foundation-laying-ceremony.jpg',
    location: 'Karnataka',
    description: 'Foundation laying ceremony at a Project Ashiyana construction site with HIF volunteers and community elders.',
    year: '2025'
  },
  {
    id: 'gal-45',
    title: 'Water Purification Unit at Shepherds Academy',
    category: 'Community',
    imageUrl: '/images/gallery/water-purification-shepherds-academy.jpg',
    location: 'Shepherds International Academy, Mangaluru',
    description: 'Donation and inauguration of a water purification unit at Shepherds International Academy under Project Boondh.',
    year: '2025'
  },
  {
    id: 'gal-46',
    title: 'Project Boondh at Cutchi Memon Masjid',
    category: 'Community',
    imageUrl: '/images/gallery/project-boondh-cutchi-memon-masjid.jpg',
    location: 'Cutchi Memon Masjid, Mangaluru',
    description: 'Public drinking water station inaugurated under Project Boondh at Cutchi Memon Masjid with community members.',
    year: '2024'
  },
  {
    id: 'gal-47',
    title: 'SSLC Awards Celebrating Excellence 2025',
    category: 'Education',
    imageUrl: '/images/gallery/sslc-awards-celebrating-excellence-2025.jpg',
    location: 'Mangaluru',
    description: 'SSLC toppers honoured at the HIF Celebrating Excellence awards ceremony for academic achievement in 2025.',
    year: '2025'
  },
  {
    id: 'gal-48',
    title: 'SSR Awards Celebrating Excellence 2023',
    category: 'Education',
    imageUrl: '/images/gallery/ssr-awards-celebrating-excellence-2023.jpg',
    location: 'Mangaluru',
    description: 'SSR examination toppers recognised at the HIF Celebrating Excellence awards ceremony in 2023.',
    year: '2023'
  },
  {
    id: 'gal-49',
    title: 'Hajj Training Camp April 2025',
    category: 'Youth',
    imageUrl: '/images/gallery/hajj-training-camp-april-2025.jpg',
    location: 'HIF Auditorium, Mangaluru',
    description: 'Hajj training camp session held at the HIF Auditorium in April 2025 for prospective pilgrims.',
    year: '2025'
  },
  {
    id: 'gal-50',
    title: 'Highland Islamic Forum Seminar 2026',
    category: 'Youth',
    imageUrl: '/images/gallery/hif-forum-seminar-podium-2026.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'A speaker addresses the audience from the podium at a Highland Islamic Forum seminar.',
    year: '2026'
  },
  {
    id: 'gal-51',
    title: 'HIF Forum Seminar Speaker Session',
    category: 'Youth',
    imageUrl: '/images/gallery/hif-forum-seminar-speaker-2025.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'A speaker at the Highland Islamic Forum podium during a formal seminar session.',
    year: '2025'
  },
  {
    id: 'gal-52',
    title: 'Food Ration Doorstep Delivery',
    category: 'Community',
    imageUrl: '/images/gallery/food-ration-doorstep-delivery.jpg',
    location: 'Mangaluru',
    description: 'HIF volunteers delivering food ration kits directly to a family\'s doorstep.',
    year: '2025'
  },
  {
    id: 'gal-53',
    title: 'Farewell to Moulana Althaf Hussain',
    category: 'Community',
    imageUrl: '/images/gallery/farewell-moulana-althaf-hussain.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'Farewell gathering for Moulana Althaf Hussain with the HIF India banner and community members.',
    year: '2025'
  },
  {
    id: 'gal-54',
    title: 'Gift Presentation at HIF Exclusive Session',
    category: 'Community',
    imageUrl: '/images/gallery/gift-presentation-exclusive-session.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'Gift presentation ceremony during an HIF India exclusive session with community leaders.',
    year: '2025'
  },
  {
    id: 'gal-55',
    title: 'Masjid Al Abbas Presentation Plan',
    category: 'Masjid',
    imageUrl: '/images/gallery/masjid-al-abbas-presentation-plan.jpg',
    location: 'Kousa, Karnataka',
    description: 'Masjid development team presenting architectural plans and renderings for Masjid Al Abbas at Kousa.',
    year: '2025'
  },
  {
    id: 'gal-56',
    title: 'Project Boondh Water Supply Inauguration',
    category: 'Community',
    imageUrl: '/images/gallery/boondh-water-supply-inauguration-2016.jpg',
    location: 'Mangaluru Region',
    description: 'Inauguration of a Project Boondh public drinking water supply unit for an underserved community.',
    year: '2016'
  },
  {
    id: 'gal-57',
    title: 'Project Boondh Water Tanker Delivery',
    category: 'Community',
    imageUrl: '/images/gallery/boondh-water-tanker-delivery-2016.jpg',
    location: 'Mangaluru Region',
    description: 'HIF volunteers delivering free drinking water by tanker to households facing acute water scarcity.',
    year: '2016'
  },
  {
    id: 'gal-58',
    title: 'Ashiyana House Construction 2013',
    category: 'Housing',
    imageUrl: '/images/gallery/ashiyana-house-construction-2013.jpg',
    location: 'Karnataka',
    description: 'Early Project Ashiyana home construction work providing shelter for a destitute family.',
    year: '2013'
  },
  {
    id: 'gal-59',
    title: 'Ashiyana Home Handover 2016',
    category: 'Housing',
    imageUrl: '/images/gallery/ashiyana-home-handover-2016.jpg',
    location: 'Karnataka',
    description: 'Handover of a completed Ashiyana home to a beneficiary family with HIF volunteers and community members.',
    year: '2016'
  },
  {
    id: 'gal-60',
    title: 'Project Libaas Wedding Dress Distribution',
    category: 'Community',
    imageUrl: '/images/gallery/libaas-wedding-dress-distribution-2015.jpg',
    location: 'Mangaluru',
    description: 'Wedding dress distribution to underprivileged brides under Project Libaas, helping couples celebrate with dignity.',
    year: '2015'
  },
  {
    id: 'gal-61',
    title: 'Youth Leadership Training Event',
    category: 'Youth',
    imageUrl: '/images/gallery/youth-leadership-training-2018.jpg',
    location: 'Mangaluru',
    description: 'HIF Youth Wing leadership training event with young volunteers learning community service and ethical leadership.',
    year: '2018'
  },
  {
    id: 'gal-62',
    title: 'A Day With Orphan Medical Checkup',
    category: 'Healthcare',
    imageUrl: '/images/gallery/orphan-day-medical-checkup-2018.jpg',
    location: 'Highland Educational & Cultural Centre, Mangaluru',
    description: 'Free medical checkup for orphan children during the annual A Day With Orphan event.',
    year: '2018'
  },
  {
    id: 'gal-30',
    title: 'HIF India Blood Donation Camp',
    category: 'Healthcare',
    imageUrl: '/images/gallery/blood-donation-camp-june-2023.jpg',
    location: 'Mangaluru',
    description: 'HIF India Medical Cell volunteers and medical staff at a community blood donation camp, with a donor on cot and group photo beneath the HIF India banner.',
    year: '2023'
  },
  {
    id: 'gal-31',
    title: 'Wenlock Hospital Volunteer Drive',
    category: 'Healthcare',
    imageUrl: '/images/gallery/wenlock-hospital-volunteers.jpg',
    location: 'Wenlock District Hospital, Mangaluru',
    description: 'Twelve HIF Youth Wing volunteers at Wenlock District Hospital with medical supply boxes, supporting healthcare outreach in the community.',
    year: '2024'
  },
  {
    id: 'gal-32',
    title: 'Youth Circle Meeting',
    category: 'Youth',
    imageUrl: '/images/gallery/youth-circle-meeting-core-values.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'HIF Youth Wing members in a circle discussion session with the HIF India core values and principles wall display in the background.',
    year: '2025'
  },
  {
    id: 'gal-33',
    title: 'Ramadan Fajr Salah Competition Winners',
    category: 'Youth',
    imageUrl: '/images/gallery/ramadan-fajr-salah-winners.jpg',
    location: 'Mangaluru',
    description: 'Celebration graphic for 87 winners of the Ramadan Fajr Salah competition jointly organized by HIF India and HIF Youth, with bicycle prizes.',
    year: '2025'
  },
  {
    id: 'gal-34',
    title: 'Highland Islamic Forum Speaker Session',
    category: 'Youth',
    imageUrl: '/images/gallery/hif-forum-speaker-podium.jpg',
    location: 'HIF Center, Mangaluru',
    description: 'A speaker addresses the audience from the podium at a formal HIF Highland Islamic Forum event.',
    year: '2025'
  },
  {
    id: 'gal-1',
    title: 'Ashiyana Home Handover #29',
    category: 'Housing',
    imageUrl: '/images/gallery/1.jpg',
    location: 'Bantwal, Dakshina Kannada',
    description: 'Keys presented to a widowed mother of three children, replacing their flooded thatched hut with a permanent concrete home.',
    year: '2024'
  },
  {
    id: 'gal-2',
    title: 'Chittor Campus Assembly',
    category: 'Orphanage',
    imageUrl: '/images/gallery/2.jpeg',
    location: 'Chittor, Andhra Pradesh',
    description: 'Morning prayer and value assembly for 225 resident orphan students at the 2-acre green sanctuary.',
    year: '2024'
  },
  {
    id: 'gal-3',
    title: 'Masjid Reopening Ceremony',
    category: 'Masjid',
    imageUrl: '/images/gallery/3.jpg',
    location: 'Rural Raichur, Karnataka',
    description: 'A 40-year-old closed rural masjid restored with solar power, borewell, and evening madrasa classes.',
    year: '2023'
  },
  {
    id: 'gal-4',
    title: 'HIF MEDIBANK Equipment Depot',
    category: 'Healthcare',
    imageUrl: '/images/gallery/4.jpg',
    location: 'Kankanady, Mangalore',
    description: 'Motorized hospital beds, oxygen concentrators, and wheelchairs prepped for free delivery to home-care patients.',
    year: '2024'
  },
  {
    id: 'gal-5',
    title: 'Annual Scholarship Distribution',
    category: 'Education',
    imageUrl: '/images/gallery/5.jpg',
    location: 'Mangalore Town Hall',
    description: 'Cheques distributed to 140 promising students pursuing engineering, medicine, and degree courses.',
    year: '2024'
  },
  {
    id: 'gal-6',
    title: 'Mega Blood Donation Camp',
    category: 'Healthcare',
    imageUrl: '/images/gallery/6.jpg',
    location: 'Yenepoya Hospital, Mangaluru',
    description: 'HIF Medical Cell volunteers organized a 180-unit emergency donation drive for local blood banks.',
    year: '2024'
  },
  {
    id: 'gal-7',
    title: 'Ashiyana Foundation Laying',
    category: 'Housing',
    imageUrl: '/images/gallery/7.jpg',
    location: 'Belthangady, Karnataka',
    description: 'Volunteers and community elders laying the concrete foundation for two adjacent family shelters.',
    year: '2023'
  },
  {
    id: 'gal-8',
    title: 'Chittor Smart Computer Lab',
    category: 'Orphanage',
    imageUrl: '/images/gallery/8.jpg',
    location: 'Chittor Campus',
    description: 'Orphan boys learning Python basics and office software in the newly equipped digital lab.',
    year: '2024'
  },
  {
    id: 'gal-9',
    title: 'Solar Wudhu Setup in Village Masjid',
    category: 'Masjid',
    imageUrl: '/images/gallery/9.jpg',
    location: 'Koppal District, Karnataka',
    description: 'Newly installed solar pumping and storage system providing 24/7 water for prayers and villagers.',
    year: '2023'
  },
  {
    id: 'gal-10',
    title: 'School Kit & Bag Distribution',
    category: 'Education',
    imageUrl: '/images/gallery/10.jpg',
    location: 'Ullal, Mangalore',
    description: '500 school kits containing bags, stationery, and notebooks gifted to government school students.',
    year: '2024'
  },
  {
    id: 'gal-11',
    title: 'Youth Leadership & Public Speaking Camp',
    category: 'Youth',
    imageUrl: '/images/gallery/11.jpg',
    location: 'Masjid Ehsaan Hall, Mangalore',
    description: 'High school students practicing debates and presentations at the 3-day personality camp.',
    year: '2024'
  },
  {
    id: 'gal-12',
    title: 'Community Ration & Nutrition Kits',
    category: 'Community',
    imageUrl: '/images/gallery/12.jpg',
    location: 'Mangaluru Coastal Region',
    description: 'Monthly ration packages distributed to 250 destitute families, single mothers, and disabled elders.',
    year: '2024'
  },
  {
    id: 'gal-13',
    title: 'Ashiyana Eco-Friendly Home Design',
    category: 'Housing',
    imageUrl: '/images/gallery/13.jpg',
    location: 'Moodbidri, Karnataka',
    description: 'Completed 2-bedroom home featuring natural ventilation, rain gutters, and durable tiled floor.',
    year: '2024'
  },
  {
    id: 'gal-14',
    title: 'Chittor Special Feast Day',
    category: 'Orphanage',
    imageUrl: '/images/gallery/14.jpg',
    location: 'Chittor Dining Hall',
    description: 'Festive lunch provided by a donor family celebrating a milestone with all 225 boys.',
    year: '2024'
  },
  {
    id: 'gal-15',
    title: 'Rural Children Madrasa Class',
    category: 'Masjid',
    imageUrl: '/images/gallery/15.jpg',
    location: 'Bellary Rural, Karnataka',
    description: 'Evening Quranic recitations and moral lessons guided by the HIF-sponsored village Imam.',
    year: '2023'
  },
  {
    id: 'gal-16',
    title: 'Free Dialysis Support Beneficiary',
    category: 'Healthcare',
    imageUrl: '/images/gallery/16.jpg',
    location: 'Mangaluru Kidney Centre',
    description: 'Patient receiving life-prolonging dialysis treatment with medical subsidies from HIF Medical Cell.',
    year: '2024'
  },
  {
    id: 'gal-17',
    title: 'English Speaking Graduation',
    category: 'Youth',
    imageUrl: '/images/gallery/17.jpg',
    location: 'HIF Center, Mangalore',
    description: '60 high school students awarded graduation certificates upon finishing the 8-week fluency program.',
    year: '2024'
  },
  {
    id: 'gal-18',
    title: 'Monsoon Flood Relief Deployment',
    category: 'Community',
    imageUrl: '/images/gallery/18.jpg',
    location: 'Netravati River Basin',
    description: 'HIF Youth Wing rescue team delivering emergency drinking water, dry rations, and blankets.',
    year: '2023'
  },
  {
    id: 'gal-19',
    title: 'HIF Kapda Bank Clothing Drive',
    category: 'Community',
    imageUrl: '/images/gallery/19.jpg',
    location: 'Rural Dakshina Kannada',
    description: 'Sorted clothing bundles distributed free of cost to flood-affected and low-income families through the HIF Kapda Bank.',
    year: '2023'
  },
  {
    id: 'gal-20',
    title: 'HIF Milk Drive',
    category: 'Community',
    imageUrl: '/images/gallery/20.jpg',
    location: 'Coastal Karnataka',
    description: 'Fresh milk packets delivered door-to-door to children in underserved settlements as part of the HIF Milk Drive.',
    year: '2023'
  },
  {
    id: 'gal-21',
    title: 'A Day With Orphan - Free Medical Checkup',
    category: 'Orphanage',
    imageUrl: '/images/gallery/21.jpg',
    location: 'Highland Educational & Cultural Centre, Mangaluru',
    description: 'A visiting doctor examines an orphan child at the annual "A Day With Orphan" event, offering free health screenings, gifts, and a shared meal.',
    year: '2018'
  },
  {
    id: 'gal-22',
    title: 'HIF Free Water Tanker Supply',
    category: 'Community',
    imageUrl: '/images/gallery/22.jpg',
    location: 'Mangaluru City',
    description: 'HIF volunteers deliver free drinking water by tanker to households facing acute summer water scarcity.',
    year: '2016'
  },
  {
    id: 'gal-23',
    title: 'HIF Rural Electrification Drive',
    category: 'Community',
    imageUrl: '/images/gallery/23.jpg',
    location: 'Rural Dakshina Kannada',
    description: 'A free electricity connection installed for a family that had been living without power, bringing light to their home for the first time.',
    year: '2013'
  },
  {
    id: 'gal-24',
    title: 'HIF Ramadan Kit Distribution',
    category: 'Community',
    imageUrl: '/images/gallery/24.jpg',
    location: 'Mangaluru & Rural Karnataka',
    description: 'Ration kits with rice, oil, and daily essentials delivered door-to-door to needy families during the holy month of Ramadan.',
    year: '2014'
  },
  {
    id: 'gal-25',
    title: 'Kerala Flood Relief',
    category: 'Community',
    imageUrl: '/images/gallery/25.jpg',
    location: 'Wayanad, Kerala',
    description: 'HIF volunteers delivered relief kits and surveyed damaged homes for families affected by severe Kerala flooding.',
    year: '2018'
  },
  {
    id: 'gal-26',
    title: 'United Mangaluru Interfaith Harmony Programme',
    category: 'Community',
    imageUrl: '/images/gallery/26.jpg',
    location: 'Town Hall, Mangaluru',
    description: 'Religious leaders of different faiths shared one stage to promote communal harmony and mutual respect across Mangaluru.',
    year: '2018'
  },
  {
    id: 'gal-27',
    title: 'A Day With Orphan - Sports & Games Day',
    category: 'Orphanage',
    imageUrl: '/images/gallery/27.jpg',
    location: 'Highland Educational & Cultural Centre, Mangaluru',
    description: 'Orphan children enjoy outdoor games as part of the annual "A Day With Orphan" celebration, alongside free medical checkups and gifts.',
    year: '2016'
  }
]

export const IMPACT_CALCULATOR_PRESETS = [
  { amount: 1000, label: '₹1,000' },
  { amount: 2500, label: '₹2,500' },
  { amount: 5000, label: '₹5,000' },
  { amount: 8000, label: '₹8,000' },
  { amount: 15000, label: '₹15,000' },
  { amount: 35000, label: '₹35,000' },
  { amount: 50000, label: '₹50,000' },
  { amount: 100000, label: '₹1,00,000' }
]

export function calculateImpactFromAmount(amount: number): {
  headline: string
  primaryImpact: string
  tangibles: { label: string; count: string; icon: string }[]
  suggestedPledge: string
  recommendedProgram: string
} {
  if (amount < 2000) {
    return {
      headline: 'Vital Healthcare & Student Basics',
      primaryImpact: 'Provides a complete school textbook & stationery kit for 2 needy students and contributes towards MEDIBANK wheel-chair maintenance.',
      tangibles: [
        { label: 'School Kids Equipped', count: '2 Students', icon: 'BookOpen' },
        { label: 'Medical Disposables', count: '1 Home Patient', icon: 'Stethoscope' },
        { label: 'Daily Meals', count: '20 Packets', icon: 'Utensils' }
      ],
      suggestedPledge: 'Micro Charity / Sadaqah',
      recommendedProgram: 'HIF Education & Medical Cell'
    }
  } else if (amount < 5000) {
    return {
      headline: 'Student Clothing & Medical Care',
      primaryImpact: 'Provides complete annual clothing, uniforms, winter wear, and medical checkups for 1 orphan student at Chittor Dream Project.',
      tangibles: [
        { label: 'Full Year Clothing', count: '1 Orphan Boy', icon: 'Shirt' },
        { label: 'Free Equipment Loan', count: '1 Family', icon: 'HeartPulse' },
        { label: 'Madrasa Books', count: '15 Primers', icon: 'GraduationCap' }
      ],
      suggestedPledge: 'Orphan Care Supporter',
      recommendedProgram: 'Chittor Dream Project'
    }
  } else if (amount < 8000) {
    return {
      headline: 'Full Campus Daily Food Feast',
      primaryImpact: 'Sponsors breakfast, lunch, tea, and dinner for the entire 225-student orphan campus at Chittor for a full day.',
      tangibles: [
        { label: 'Orphans Fed (All Day)', count: '225 Boys', icon: 'Utensils' },
        { label: 'Dialysis Aid', count: '2 Sessions', icon: 'Activity' },
        { label: 'Emergency Blood Support', count: '5 Units', icon: 'Heart' }
      ],
      suggestedPledge: 'One Day Food Patron',
      recommendedProgram: 'Chittor Dream Project'
    }
  } else if (amount < 15000) {
    return {
      headline: 'Special Grand Festive Feast & Health Fund',
      primaryImpact: 'Provides a special celebratory feast (Biryani, dessert, fruit) for all 225 boys in Chittor plus critical medicines for rural elderly.',
      tangibles: [
        { label: 'Grand Special Meal', count: '225 Students', icon: 'Sparkles' },
        { label: 'Imam Monthly Honorarium', count: '1 Rural Masjid', icon: 'Landmark' },
        { label: 'Oxygen Concentrator Support', count: '1 Month Loan', icon: 'HeartPulse' }
      ],
      suggestedPledge: 'Special Occasion Sponsor',
      recommendedProgram: 'Chittor Dream Project & Masjid Cell'
    }
  } else if (amount < 35000) {
    return {
      headline: 'Complete Annual Orphan Education & Care',
      primaryImpact: 'Sponsors 1 orphan boy for an entire 365-day year: modern English schooling, Hifz, 4 daily meals, hostel room, healthcare, and guidance.',
      tangibles: [
        { label: '365-Day Full Care', count: '1 Orphan Student', icon: 'GraduationCap' },
        { label: 'Rural Masjid Imam Support', count: '1.5 Months', icon: 'Landmark' },
        { label: 'Ashiyana Construction Share', count: '3 Cement Batches', icon: 'Home' }
      ],
      suggestedPledge: 'Annual Yateem Guardian',
      recommendedProgram: 'Chittor Dream Project'
    }
  } else if (amount < 75000) {
    return {
      headline: 'Masjid Solarization & Ashiyana Water Infrastructure',
      primaryImpact: 'Powers a rural village masjid with a complete solar backup & wudhu water system, or finances modern sanitation for an Ashiyana home.',
      tangibles: [
        { label: 'Solar & Water Setup', count: '1 Rural Masjid', icon: 'Sun' },
        { label: 'Full Year Student Care', count: '2 Orphan Boys', icon: 'GraduationCap' },
        { label: 'Ashiyana Bath/Sanitation', count: '1 House Unit', icon: 'Home' }
      ],
      suggestedPledge: 'Infrastructure Pillar',
      recommendedProgram: 'Masjid Development & Ashiyana'
    }
  } else {
    return {
      headline: 'Permanent Ashiyana Home & Masjid Foundation Share',
      primaryImpact: 'Provides the major concrete foundation and structural slab for a permanent 2-bedroom home, lifting a family out of poverty permanently.',
      tangibles: [
        { label: 'Ashiyana Home Foundation', count: '1 House Share', icon: 'Home' },
        { label: 'Rural Masjid Major Share', count: '1 Community Hub', icon: 'Landmark' },
        { label: 'Annual Orphan Scholarships', count: '6+ Students', icon: 'GraduationCap' }
      ],
      suggestedPledge: 'Major Legacy Sadaqah Jariyah',
      recommendedProgram: 'Project Ashiyana & Chittor'
    }
  }
}
