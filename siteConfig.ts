export type ServiceIconType =
  | 'electrician'
  | 'plumber'
  | 'gardening'
  | 'painting'
  | 'tiles'
  | 'waterproofing';

export type ProviderKey = 'raj' | 'vijay';

export interface ServiceItem {
  id: string;
  icon: ServiceIconType;
  titleHi: string;
  titleEn: string;
  shortDescHi: string;
  points: string[];
  recommendedProvider: ProviderKey;
}

export interface GalleryItem {
  id: string;
  categoryHi: string;
  categoryEn: string;
  captionHi: string;
  imageUrl: string;
  alt: string;
  isPlaceholder: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface SiteContentData {
  businessName: string;
  mainTagline: string;
  supportingTagline: string;
  locationLabel: string;
  locationBadge: string;
  heroSubheadline: string;
  rajName: string;
  rajPhoneDisplay: string;
  rajPhoneE164: string; // e.g. 919826982839
  vijayName: string;
  vijayPhoneDisplay: string;
  vijayPhoneE164: string; // e.g. 919399711132
  aboutHeading: string;
  aboutDescription: string;
  serviceAreaStatement: string;
  customLocalities: string[];
  heroElectricianImage: string;
  heroPlumberImage: string;
  services: ServiceItem[];
  gallery: GalleryItem[];
}

export const DEFAULT_SITE_CONTENT: SiteContentData = {
  businessName: 'Raj Electrician & Vijay Plumber',
  mainTagline: 'घर की हर समस्या का एक ही हल!',
  supportingTagline: 'आपका भरोसा, हमारी पहचान।',
  locationLabel: 'Indore, Madhya Pradesh, India',
  locationBadge: 'इंदौर में सेवाएँ उपलब्ध',
  heroSubheadline:
    'इलेक्ट्रिशियन, प्लंबर, गार्डनिंग, पेंटिंग और घर की रिपेयरिंग की सुविधाएँ — इंदौर में।',
  rajName: 'Raj Electrician',
  rajPhoneDisplay: '9826982839',
  rajPhoneE164: '919826982839',
  vijayName: 'Vijay Plumber',
  vijayPhoneDisplay: '09399711132',
  vijayPhoneE164: '919399711132',
  aboutHeading: 'आपके घर की देखभाल, हमारी जिम्मेदारी',
  aboutDescription:
    'Raj Electrician & Vijay Plumber इंदौर में घर और दुकान से जुड़ी विभिन्न सेवाओं के लिए संपर्क का एक आसान विकल्प है। इलेक्ट्रिकल कार्य, प्लंबिंग, गार्डनिंग, पेंटिंग और अन्य रिपेयरिंग सेवाओं के लिए हमसे संपर्क करें। अपनी आवश्यकता बताइए और उपलब्ध सेवा के बारे में जानकारी प्राप्त कीजिए।',
  serviceAreaStatement:
    'इंदौर में इलेक्ट्रिशियन, प्लंबिंग और होम रिपेयरिंग सेवाओं के लिए संपर्क करें।',
  customLocalities: [],
  heroElectricianImage:
    'https://images.pexels.com/photos/6349399/pexels-photo-6349399.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  heroPlumberImage:
    'https://images.pexels.com/photos/14953886/pexels-photo-14953886.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  services: [
    {
      id: 'electrician',
      icon: 'electrician',
      titleHi: 'इलेक्ट्रिशियन सेवाएँ',
      titleEn: 'Electrician Services',
      shortDescHi:
        'घर, दुकान और ऑफिस के सभी नए इलेक्ट्रिकल कनेक्शन, फिटिंग और वायरिंग रिपेयर का कार्य।',
      points: [
        'नए इलेक्ट्रिकल कनेक्शन (New electrical connections)',
        'पंखा, लाइट और फिटिंग इंस्टॉलेशन (Fan, light & fitting installation)',
        'मीटर फिटिंग (Meter fitting)',
        'वायरिंग और इलेक्ट्रिकल रिपेयर (Wiring & electrical repairs)',
        'MCB और डिस्ट्रीब्यूशन बोर्ड इंस्टॉलेशन (MCB & distribution board)',
        'सामान्य इलेक्ट्रिकल समस्या समाधान (General electrical troubleshooting)',
      ],
      recommendedProvider: 'raj',
    },
    {
      id: 'plumbing',
      icon: 'plumber',
      titleHi: 'प्लंबिंग सेवाएँ',
      titleEn: 'Plumbing Services',
      shortDescHi:
        'नल-पाइप फिटिंग, पानी लीकेज सुधार, बाथरूम फिटिंग और पानी की टंकी से जुड़े सभी कार्य।',
      points: [
        'नल और पाइप फिटिंग (Tap & pipe fitting)',
        'पानी लीकेज रिपेयर (Water leakage repair)',
        'सिंक और वॉशबेसिन इंस्टॉलेशन (Sink & washbasin installation)',
        'बाथरूम फिटिंग्स (Bathroom fittings)',
        'पानी की टंकी सफाई (Water tank cleaning)',
        'पानी की टंकी फिटिंग (Water tank fitting)',
        'सामान्य प्लंबिंग रिपेयर (General plumbing repairs)',
      ],
      recommendedProvider: 'vijay',
    },
    {
      id: 'gardening',
      icon: 'gardening',
      titleHi: 'गार्डनिंग और गार्डन डेवलपमेंट',
      titleEn: 'Gardening & Garden Development',
      shortDescHi:
        'घर या परिसर के बगीचे की देखभाल, पौधारोपण सहायता और गार्डन सफाई सेवा।',
      points: [
        'गार्डन मेंटेनेंस और देखरेख (Garden maintenance)',
        'पौधारोपण और गार्डनिंग सहायता (Planting & gardening assistance)',
        'बेसिक गार्डन डेवलपमेंट (Basic garden development)',
        'गार्डन क्लीनअप और सफाई (Garden cleanup)',
      ],
      recommendedProvider: 'vijay',
    },
    {
      id: 'painting',
      icon: 'painting',
      titleHi: 'होम पेंटिंग',
      titleEn: 'Home Painting',
      shortDescHi:
        'घर और दुकान के अंदर-बाहर की दीवारों पर पेंटिंग, री-पेंटिंग और टच-अप कार्य।',
      points: [
        'इंटीरियर वॉल पेंटिंग (Interior wall painting)',
        'एक्सटीरियर पेंटिंग (Exterior painting)',
        'री-पेंटिंग और टच-अप (Repainting & touch-ups)',
        'बेसिक पेंटिंग और फिनिशिंग कार्य (Basic painting & finishing work)',
      ],
      recommendedProvider: 'raj',
    },
    {
      id: 'tiles',
      icon: 'tiles',
      titleHi: 'टाइल्स और पेवर ब्लॉक',
      titleEn: 'Tiles & Paver Blocks',
      shortDescHi:
        'फर्श व दीवार पर टाइल्स लगाने, टूटी टाइल्स बदलने और पेवर ब्लॉक इंस्टॉलेशन का काम।',
      points: [
        'टाइल इंस्टॉलेशन (Tile installation)',
        'टाइल रिपेयर और रिप्लेसमेंट (Tile repair & replacement)',
        'पेवर ब्लॉक इंस्टॉलेशन (Paver block installation)',
        'संबंधित मरम्मत कार्य (Related repair work)',
      ],
      recommendedProvider: 'vijay',
    },
    {
      id: 'waterproofing',
      icon: 'waterproofing',
      titleHi: 'छत वॉटरप्रूफिंग',
      titleEn: 'Terrace Waterproofing',
      shortDescHi:
        'छत से पानी रिसाव (लीकेज) की जाँच और वॉटरप्रूफिंग से संबंधित मरम्मत सेवाएँ।',
      points: [
        'टेरेस वॉटरप्रूफिंग सेवाएँ (Terrace waterproofing services)',
        'छत लीकेज निरीक्षण (Roof leakage inspection)',
        'वॉटरप्रूफिंग संबंधित रिपेयर कार्य (Waterproofing-related repair work)',
      ],
      recommendedProvider: 'vijay',
    },
  ],
  gallery: [
    {
      id: 'gal-1',
      categoryHi: 'इलेक्ट्रिकल इंस्टॉलेशन',
      categoryEn: 'Electrical Installations',
      captionHi: 'स्विचबोर्ड, MCB पैनल और नए कनेक्शन से जुड़ा कार्य',
      imageUrl:
        'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'इलेक्ट्रिकल पैनल और MCB इंस्टॉलेशन कार्य का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
    {
      id: 'gal-2',
      categoryHi: 'वायरिंग और रिपेयर कार्य',
      categoryEn: 'Wiring & Repair Work',
      captionHi: 'घरेलू व दुकान की वायरिंग जाँच और फॉल्ट सुधार',
      imageUrl:
        'https://images.pexels.com/photos/8488029/pexels-photo-8488029.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'इलेक्ट्रिकल वायरिंग और स्विचबोर्ड रिपेयर का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
    {
      id: 'gal-3',
      categoryHi: 'प्लंबिंग और नल फिटिंग',
      categoryEn: 'Plumbing & Tap Fittings',
      captionHi: 'पाइपलाइन जोड़, नल फिटिंग और लीकेज रिपेयर',
      imageUrl:
        'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'प्लंबिंग पाइप और नल फिटिंग का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
    {
      id: 'gal-4',
      categoryHi: 'बाथरूम रिपेयर और फिटिंग',
      categoryEn: 'Bathroom Repairs',
      captionHi: 'वॉशबेसिन, सिंक और बाथरूम नल रिपेयर कार्य',
      imageUrl:
        'https://images.pexels.com/photos/7579012/pexels-photo-7579012.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'बाथरूम नल और बेसिन फिटिंग का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
    {
      id: 'gal-5',
      categoryHi: 'गार्डनिंग और देखभाल',
      categoryEn: 'Gardening',
      captionHi: 'पौधों की कटाई-छँटाई, पौधारोपण और गार्डन क्लीनअप',
      imageUrl:
        'https://images.pexels.com/photos/38936344/pexels-photo-38936344.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'बगीचे की देखभाल और पौधों की छँटाई का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
    {
      id: 'gal-6',
      categoryHi: 'पेंटिंग और वॉटरप्रूफिंग',
      categoryEn: 'Painting & Waterproofing',
      captionHi: 'दीवारों पर पेंटिंग, टच-अप और छत लीकेज सुधार',
      imageUrl:
        'https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      alt: 'दीवार पेंटिंग और कोटिंग कार्य का प्रतीकात्मक चित्र',
      isPlaceholder: true,
    },
  ],
};

export const WHY_CHOOSE_US_FEATURES = [
  {
    id: 'multi-service',
    titleHi: 'एक ही जगह कई घरेलू सेवाएँ',
    titleEn: 'Multiple Home Services in One Place',
    descHi:
      'इलेक्ट्रिशियन, प्लंबिंग, गार्डनिंग, पेंटिंग, टाइल्स और टेरेस वॉटरप्रूफिंग के लिए अलग-अलग जगह ढूँढने की आवश्यकता नहीं।',
  },
  {
    id: 'direct-contact',
    titleHi: 'सीधे सेवा प्रदाता से संपर्क',
    titleEn: 'Direct Contact with Service Providers',
    descHi:
      'बिना किसी बिचौलिए के सीधे Raj Electrician या Vijay Plumber से फोन पर बात करके काम की जानकारी लें।',
  },
  {
    id: 'call-whatsapp',
    titleHi: 'आसान कॉल और WhatsApp सुविधा',
    titleEn: 'Easy Call & WhatsApp Convenience',
    descHi:
      'एक क्लिक में सीधे कॉल करें या WhatsApp पर अपनी आवश्यकता और लोकेशन भेजकर संपर्क करें।',
  },
  {
    id: 'home-shop-office',
    titleHi: 'घर, दुकान और ऑफिस के काम के लिए संपर्क',
    titleEn: 'For Home, Shop & Office Requirements',
    descHi:
      'इंदौर में घरेलू मरम्मत के साथ-साथ दुकान और ऑफिस के इलेक्ट्रिकल, प्लंबिंग व रिपेयर कार्यों हेतु उपलब्ध।',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'इंदौर में इलेक्ट्रिशियन सेवा कैसे बुक करें?',
    answer:
      'आप सीधे Raj Electrician को 9826982839 पर कॉल कर सकते हैं, WhatsApp बटन पर क्लिक करके संदेश भेज सकते हैं, या इस वेबसाइट के "संपर्क और सेवा अनुरोध फॉर्म" में अपनी जानकारी भरकर WhatsApp के माध्यम से अनुरोध भेज सकते हैं।',
  },
  {
    id: 'faq-2',
    question: 'प्लंबिंग की समस्या के लिए किस नंबर पर कॉल करें?',
    answer:
      'नल, पाइप लीकेज, वॉशबेसिन, बाथरूम फिटिंग या पानी की टंकी से जुड़े किसी भी प्लंबिंग कार्य के लिए Vijay Plumber से 09399711132 पर सीधे कॉल या WhatsApp करें।',
  },
  {
    id: 'faq-3',
    question: 'क्या गार्डनिंग और पेंटिंग का काम भी उपलब्ध है?',
    answer:
      'जी हाँ, इलेक्ट्रिशियन और प्लंबिंग के अलावा गार्डनिंग (बगीचे की देखभाल, पौधारोपण, क्लीनअप), होम पेंटिंग, टाइल्स/पेवर ब्लॉक और टेरेस वॉटरप्रूफिंग से संबंधित कार्यों के लिए भी आप संपर्क कर सकते हैं।',
  },
  {
    id: 'faq-4',
    question: 'क्या घर और दुकान दोनों के लिए संपर्क कर सकते हैं?',
    answer:
      'जी हाँ, इंदौर में घर, दुकान और ऑफिस के इलेक्ट्रिकल, प्लंबिंग और रिपेयरिंग कार्यों की जानकारी व सेवा उपलब्धता के लिए संपर्क किया जा सकता है।',
  },
  {
    id: 'faq-5',
    question: 'सेवा का खर्च कैसे पता करें?',
    answer:
      'प्रत्येक कार्य का खर्च काम के प्रकार, आवश्यक सामग्री और साइट की स्थिति पर निर्भर करता है। सटीक जानकारी के लिए कृपया फोन या WhatsApp पर समस्या का विवरण साझा करके सीधे सेवा प्रदाता से बात करें।',
  },
  {
    id: 'faq-6',
    question: 'क्या WhatsApp पर समस्या की फोटो भेज सकते हैं?',
    answer:
      'जी हाँ! आप Raj Electrician (9826982839) या Vijay Plumber (09399711132) के WhatsApp नंबर पर चैट खोलकर खराब स्विचबोर्ड, पाइप लीकेज, दीवार या अन्य समस्या की फोटो और अपना पता भेज सकते हैं, जिससे काम समझने में आसानी होती है।',
  },
];

export function cleanDigitsForTel(e164Digits: string): string {
  const digits = e164Digits.replace(/\D/g, '');
  return digits.startsWith('91') ? `+${digits}` : `+91${digits.replace(/^0+/, '')}`;
}

export function buildWhatsAppLink(
  e164Digits: string,
  options?: {
    providerName?: string;
    serviceName?: string;
    customerName?: string;
    customerMobile?: string;
    locality?: string;
    preferredDate?: string;
    problemDescription?: string;
  }
): string {
  const cleanPhone = e164Digits.replace(/\D/g, '');
  const lines: string[] = ['नमस्ते! मुझे इंदौर में होम सर्विस के लिए संपर्क करना है।'];

  if (options?.serviceName) {
    lines.push(`• आवश्यक सेवा: ${options.serviceName}`);
  }
  if (options?.customerName) {
    lines.push(`• नाम: ${options.customerName}`);
  }
  if (options?.customerMobile) {
    lines.push(`• मोबाइल नंबर: ${options.customerMobile}`);
  }
  if (options?.locality) {
    lines.push(`• पता / इलाका (इंदौर): ${options.locality}`);
  }
  if (options?.preferredDate) {
    lines.push(`• पसंदीदा तारीख: ${options.preferredDate}`);
  }
  if (options?.problemDescription) {
    lines.push(`• समस्या का विवरण: ${options.problemDescription}`);
  }

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${cleanPhone}?text=${text}`;
}
