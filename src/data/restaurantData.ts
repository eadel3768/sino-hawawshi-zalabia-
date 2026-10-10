export interface MenuItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn?: string;
  category: 'hawawshi' | 'combo' | 'zalabia' | 'potato' | 'addons' | 'beverages';
  price: number;
  sizes?: { label: string; price: number }[];
  image?: string;
  popular?: boolean;
  allowPizzaWesh?: boolean;
}

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatarColor: string;
}

export const RESTAURANT_INFO = {
  nameAr: 'سِينو | SINO',
  subNameAr: 'حواوشي وزلابيا',
  tagline: 'أصل الحادق ... وسر الحلو',
  phone: '012 12202241',
  whatsappNumber: '201212202241',
  address: 'أمام بن دهب، شارع الهانوفيل، قصر القويري، الرئيسي، محافظة الإسكندرية',
  plusCode: '4Q47+X6 قسم الدخيلة',
  hours: 'مفتوح يومياً حتى الساعة 05:00 فجراً',
  googleMapsUrl: 'https://maps.google.com/?q=4Q47+X6+El+Dekheila+Alexandria',
  rating: 5.0,
  reviewsCount: 11,
  aboutText: `مطعم SINO متخصص في تقديم الحواوشي الإسكندراني والزلابيا الطازجة بجودة عالية وطعم مميز. نهتم باختيار المكونات الطازجة، والتتبيلات الخاصة، والنظافة في كل خطوة، لنقدم لكم تجربة تجمع بين الطعم الأصيل والجودة. استمتعوا بأصناف الحواوشي المتنوعة والزلابيا المقرمشة المحضرة بعناية. أصل الحادق... وسر الحلو – SINO`,
  features: [
    'خدمة التوصيل السريع',
    'طعام سفري وتيك أواي',
    'الجلوس داخل المكان',
    'التسليم بدون تلامس',
    'طلب أثناء القيادة'
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // --- ركن الحواوشي (أصل الحادق) ---
  {
    id: 'hawawshi-meat',
    nameAr: 'حواوشي لحمة بلدي',
    nameEn: 'Meat Hawawshi',
    descriptionAr: 'الأصل والأساس.. لحمة صافي بتتبيلة SINO الخاصة، بصل فريش وفلفل في قلب الرغيف الإسكندراني المقرمش',
    descriptionEn: 'Minced beef with fresh chopped onions, peppers and SINO special secret spice mix in crispy Alexandrian crust',
    category: 'hawawshi',
    price: 70,
    sizes: [
      { label: 'صغير', price: 70 },
      { label: 'وسط', price: 110 },
      { label: 'كبير', price: 155 },
    ],
    image: '/images/hawawshi_signature_1791391938600.jpg',
    popular: true,
    allowPizzaWesh: true,
  },
  {
    id: 'hawawshi-sojouk',
    nameAr: 'حواوشي سجق شرقي إسكندراني',
    nameEn: 'Sausage Hawawshi',
    descriptionAr: 'طعم زمان.. قطع سجق شرقي متبلة بعناية مع الخلطة الإسكندرانية طعم غني ومميز',
    descriptionEn: 'Carefully seasoned oriental sausage pieces with Alexandrian mix, rich and distinct flavor',
    category: 'hawawshi',
    price: 80,
    sizes: [
      { label: 'صغير', price: 80 },
      { label: 'وسط', price: 155 },
      { label: 'كبير', price: 180 },
    ],
    image: '/images/hawawshi_sojouk_alex_1791565028435.jpg',
    popular: true,
    allowPizzaWesh: true,
  },
  {
    id: 'hawawshi-pastrami',
    nameAr: 'حواوشي بسطرمة (ميكس سينو المتميز)',
    nameEn: 'Pastrami Hawawshi (Distinctive Sino Mix)',
    descriptionAr: 'بسطرمة فاخرة مع ميكس جبن تركي وموتزاريلا ذائبة، فلفل ألوان وطماطم فريش في رغيف مقرمش',
    descriptionEn: 'Luxurious pastrami with Turkish cheese mix, melted mozzarella, fresh colored peppers and tomatoes in crunchy loaf',
    category: 'hawawshi',
    price: 85,
    image: '/images/hawawshi_pastrami_cheese_1791564407561.jpg',
    popular: true,
    allowPizzaWesh: true,
  },
  {
    id: 'hawawshi-mix-cheese',
    nameAr: 'حواوشي ميكس جبن',
    nameEn: 'Mix Cheese Hawawshi',
    descriptionAr: 'مزيج غني من الجبن التركي والموتزاريلا والشيدر، مع فلفل ألوان وزيتون وطماطم لعشاق الجبنة الأصلية',
    descriptionEn: 'A rich blend of Turkish, mozzarella and cheddar cheese with fresh peppers, tomatoes and olives',
    category: 'hawawshi',
    price: 85,
    image: '/images/hawawshi_mix_cheese_alex_1791565039665.jpg',
    allowPizzaWesh: true,
  },
  {
    id: 'hawawshi-mix-meat',
    nameAr: 'حواوشي ميكس لحوم سبيشال',
    nameEn: 'Mix Meat Hawawshi',
    descriptionAr: 'لمة الطعم.. ميكس جبار من اللحمة المفرومة، السجق، والبسطرمة بخلطتنا السرية لكل اللي بيحب يدوق كل حاجة برغيف واحد',
    descriptionEn: 'Great mix of minced beef, sausage, and pastrami with our secret mixture for ultimate taste lovers',
    category: 'hawawshi',
    price: 95,
    image: '/images/hawawshi_signature_1791391938600.jpg',
    popular: true,
    allowPizzaWesh: true,
  },
  {
    id: 'hawawshi-sojouk-special',
    nameAr: 'حواوشي سجق سبيشال',
    nameEn: 'Sausage Special Hawawshi',
    descriptionAr: 'طعم الأصالة.. قطع سجق شرقي متبلة بالخلطة الإسكندرانية النارية والمقرمشة',
    descriptionEn: 'Pieces of oriental sausage carefully seasoned with signature Alexandrian mixture',
    category: 'hawawshi',
    price: 80,
    image: '/images/hawawshi_sojouk_alex_1791565028435.jpg',
    allowPizzaWesh: true,
  },

  // --- وجبات كومبو سينو ---
  {
    id: 'combo-1',
    nameAr: 'كومبو سينو ملوك الحادق والحلو (مع زلابيا)',
    nameEn: 'Sino Combo (Meat Hawawshi + Potato + Zalabia)',
    descriptionAr: 'رغيف حواوشي لحمة مقرمش + باكت بطاطس فارم فريتس + طبق زلابيا مقرمشة بالسكر أو الصوص (بدون عصير)',
    descriptionEn: 'Meat Hawawshi + Potato packet + crispy golden Zalabia (no beverage)',
    category: 'combo',
    price: 150,
    image: '/images/combo_hawawshi_fries_zalabia_1791565886695.jpg',
    popular: true,
  },
  {
    id: 'combo-2',
    nameAr: 'كومبو سينو الكامل (حواوشي + بطاطس + زلابيا + كولا)',
    nameEn: 'Hawawshi Meat + Potato Packet + Zalabia + Cola',
    descriptionAr: 'وجبة سينو المتكاملة: رغيف حواوشي لحمة + باكت بطاطس + طبق زلابيا حلواني + كانز كولا مثلجة',
    descriptionEn: 'Minced meat hawawshi + potato packet + sweet zalabia + cold cola drink',
    category: 'combo',
    price: 170,
    image: '/images/sino_combo_meal_1791391961575.jpg',
    popular: true,
  },
  {
    id: 'combo-3',
    nameAr: 'كومبو سينو السريع (حواوشي + بطاطس + كاتشب ومايونيز)',
    nameEn: 'Sino Express (Hawawshi + Potato + Ketchup & Mayo)',
    descriptionAr: 'رغيف حواوشي لحمة سخن ومقرمش + باكت بطاطس مقرمشة مع كاتشب ومايونيز (بدون عصير وبدون زلابيا)',
    descriptionEn: 'Crispy meat hawawshi with fresh potato packet, served with ketchup and mayonnaise',
    category: 'combo',
    price: 120,
    image: '/images/combo_hawawshi_fries_ketchup_1791565898843.jpg',
  },

  // --- ركن الزلابيا (سر الحلو) ---
  {
    id: 'zalabia-sauces-large',
    nameAr: 'زلابيا صوصات (كبير فاخر)',
    nameEn: 'Large Size Zalabia Sauces',
    descriptionAr: 'كرات الزلابيا الذهبية المقرمشة مغطاة بأشهى الصوصات (نوتيلا شوكولاتة، لوتس، كراميل، وايت شوكلت)',
    descriptionEn: 'Crispy fried dough balls dipped in syrup and drizzled with gourmet chocolate & lotus sauces',
    category: 'zalabia',
    price: 90,
    image: '/images/zalabia_chocolate_mix_1791391951151.jpg',
    popular: true,
  },
  {
    id: 'zalabia-classic-large',
    nameAr: 'زلابيا كلاسيك كبير (سكر بودرة / شربات)',
    nameEn: 'Zalabia Large Classic',
    descriptionAr: 'زلابيا بالسكر البودرة الناعم أو الشربات الأصلي مقرمشة من برة ودايبة من جوة',
    descriptionEn: 'Crispy golden fried dough dipped in classic honey syrup or powdered sugar',
    category: 'zalabia',
    price: 70,
    image: '/images/zalabia_classic_powdered_1791564396474.jpg',
  },
  {
    id: 'zalabia-sauces-medium',
    nameAr: 'زلابيا صوصات (وسط)',
    nameEn: 'Medium Zalabia Sauces',
    descriptionAr: 'زلابيا مقرمشة مغطاة بصوص الشوكولاتة واللوتس اللذيذ',
    descriptionEn: 'Crispy dough balls dipped in sweet syrup and creamy sauces',
    category: 'zalabia',
    price: 45,
    image: '/images/zalabia_chocolate_mix_1791391951151.jpg',
  },
  {
    id: 'zalabia-classic-medium',
    nameAr: 'زلابيا كلاسيك وسط',
    nameEn: 'Medium Classic Zalabia',
    descriptionAr: 'طبق زلابيا تقليدي مقرمش بالسكر البودرة أو الشربات المركز',
    descriptionEn: 'Classic crispy zalabia with sugar or honey syrup',
    category: 'zalabia',
    price: 30,
    image: '/images/zalabia_classic_powdered_1791564396474.jpg',
  },

  // --- البطاطس والإضافات ---
  {
    id: 'potato-classic',
    nameAr: 'باكت بطاطس فارم فريتس بالبهارات',
    nameEn: 'Potato (Alex Spices - Ketchup - Mayonnaise)',
    descriptionAr: 'أصابع بطاطس مقلية ذهبية مقرمشة بالخلطة والبهارات الإسكندرانية تقدم مع كاتشب ومايونيز',
    descriptionEn: 'Crispy golden french fries with Alexandrian spices served with ketchup and mayonnaise',
    category: 'potato',
    price: 25,
    image: '/images/potato_egyptian_spiced_1791565050809.jpg',
  },
  {
    id: 'potato-sauces-large',
    nameAr: 'بطاطس صوصات كبير سبيشال',
    nameEn: 'Potatoes Sauces Large',
    descriptionAr: 'طبق بطاطس كبير غرقان صوصات: جبنة شيدر، رانش، سويت تشيلي، وباربيكيو مدخن',
    descriptionEn: 'Large crispy fries topped with cheese sauce, ranch, sweet chili, and barbecue sauces',
    category: 'potato',
    price: 40,
    image: '/images/potato_loaded_sauces_1791564385843.jpg',
    popular: true,
  },
  {
    id: 'addon-jalapeno',
    nameAr: 'قطع هالبينو وفلفل حار',
    nameEn: 'Jalapenos Spicy',
    descriptionAr: 'فلفل هالبينو متبل حار وناري لعشاق السبايسي',
    descriptionEn: 'Savory spicy jalapeno slices',
    category: 'addons',
    price: 10,
    image: '/images/egyptian_pickles_torchy_1791565059801.jpg',
  },
  {
    id: 'addon-pickle',
    nameAr: 'مخلل وطرشي بلدي إسكندراني',
    nameEn: 'Pickle (Torshi Baladi)',
    descriptionAr: 'طرشي بلدي إسكندراني مشكل ومقرمش متبل ومملح بعناية',
    descriptionEn: 'Traditional Egyptian salty pickled vegetables',
    category: 'addons',
    price: 10,
    image: '/images/egyptian_pickles_torchy_1791565059801.jpg',
  },

  // --- المشروبات المنعشة والعصائر ---
  {
    id: 'bev-cola',
    nameAr: 'كوكاكولا كانز مثلجة',
    nameEn: 'Coca-Cola Can',
    descriptionAr: 'كانز كوكاكولا أحمر مثلج ومنعش مع مكعبات الثلج',
    descriptionEn: 'Chilled refreshing Coca-Cola can on ice',
    category: 'beverages',
    price: 20,
    image: '/images/coca_cola_can_ice_1791565911048.jpg',
  },
  {
    id: 'bev-diet-coke',
    nameAr: 'دايت كوك كانز',
    nameEn: 'Diet Coke Can',
    descriptionAr: 'كانز دايت كوك سيلفر مثلج خالي من السكر',
    descriptionEn: 'Cold crisp Diet Coke can on crushed ice',
    category: 'beverages',
    price: 20,
    image: '/images/diet_coke_can_ice_1791565921592.jpg',
  },
  {
    id: 'bev-lemon',
    nameAr: 'عصير ليمون ونعناع مثلج منعش',
    nameEn: 'Lemon Mint Juice',
    descriptionAr: 'كوب عصير ليموناضة طبيعي بارد مع أوراق النعناع الفريش المنعشة',
    descriptionEn: 'Fresh iced lemonade with fresh vibrant mint leaves',
    category: 'beverages',
    price: 20,
    image: '/images/lemon_mint_juice_glass_1791565936468.jpg',
  },
  {
    id: 'bev-pineapple',
    nameAr: 'عصير أناناس مثلج',
    nameEn: 'Pineapple Juice',
    descriptionAr: 'كأس عصير أناناس طبيعي ذهبي مثلج مع شرائح الأناناس الاستوائي',
    descriptionEn: 'Pure tropical pineapple juice served cold with pineapple slices',
    category: 'beverages',
    price: 20,
    image: '/images/fresh_pineapple_juice_1791565946820.jpg',
  },
  {
    id: 'bev-water',
    nameAr: 'مياه معدنية صغيرة',
    nameEn: 'Mineral Water Bottle',
    descriptionAr: 'زجاجة مياه معدنية طبيعية نقية ومثلجة مع قطرات الندى',
    descriptionEn: 'Pure cold bottled mineral water with condensation drops',
    category: 'beverages',
    price: 10,
    image: '/images/pure_mineral_water_bottle_1791565958141.jpg',
  },
];

export const EXTRAS_LIST = [
  { id: 'extra-pizza', nameAr: 'إضافة وش بيتزا (موتزاريلا، طماطم، فلفل ألوان، زيتون)', price: 30 },
  { id: 'extra-turkey', nameAr: 'إضافة جبنة تركي مبشورة (رومي)', price: 15 },
  { id: 'extra-mozzarella', nameAr: 'إضافة جبنة موتزاريلا ذائبة', price: 15 },
];

export const REVIEWS_LIST: ReviewItem[] = [
  {
    id: 'r1',
    name: 'Safaa Elatawy',
    date: 'قبل شهرين',
    rating: 5,
    comment: 'مطعم جديد ذو طابع خاص تحس كدا معمول بحب واجتهاد وطعم رائع، أنصح بيه عند الجوع تاكل كدا حاجة نظيفة بطعم بيتي فاخر ونظافة لا تعليق اللهم بارك...',
    avatarColor: 'bg-emerald-600',
  },
  {
    id: 'r2',
    name: 'Mohamed Elatawy',
    date: 'قبل شهرين',
    rating: 5,
    comment: 'طعم الحواوشي والزلابيا في حتة تانية خالص! أكل تحس بجودته وتتبيلته الإسكندرانية النظيفة.',
    avatarColor: 'bg-amber-600',
  },
  {
    id: 'r3',
    name: 'يوسف حسن',
    date: 'قبل شهرين',
    rating: 5,
    comment: 'مكان ممتاز جداً وخدمة راقية وسرعة في التحضير، الحواوشي مقرمش والزلابيا سخنة وتفتح النفس.',
    avatarColor: 'bg-orange-600',
  },
  {
    id: 'r4',
    name: 'Riham Elkhwas',
    date: 'قبل شهرين',
    rating: 5,
    comment: 'استمروا وبالتوفيق إن شاء الله تعالى، بصراحة طعم وجودة ونظافة تحترم جداً وتستاهل التجربة.',
    avatarColor: 'bg-rose-600',
  },
  {
    id: 'r5',
    name: 'Gogo Said',
    date: 'قبل شهرين',
    rating: 5,
    comment: 'ما شاء الله اللهم بارك الأكل ممتاز وكل حاجة ممتازة، إن شاء الله نيجي ناخد من عندك تاني وتالت.',
    avatarColor: 'bg-purple-600',
  },
  {
    id: 'r6',
    name: 'Youssef Ali',
    date: 'قبل 4 أسابيع',
    rating: 5,
    comment: 'الطعام: 5/5 | الخدمة: 5/5 | الأجواء: 5/5. تجربة ممتازة في شارع الهانوفيل.',
    avatarColor: 'bg-blue-600',
  },
  {
    id: 'r7',
    name: 'Karim Sheded',
    date: 'قبل شهر',
    rating: 5,
    comment: 'الطعام: 5/5 | الخدمة: 5/5 | الأجواء: 5/5. تجربة استثنائية وأصل الحادق وسر الحلو فعلاً.',
    avatarColor: 'bg-teal-600',
  },
];

