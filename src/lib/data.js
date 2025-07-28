import {
  Ambulance,
  Building,
  Shield,
  Flame,
  Phone,
  User,
  HeartPulse,
  HelpCircle,
  Scissors,
  Bone,
  Syringe,
  ShieldAlert,
  Thermometer,
  Eye,
  Zap,
  Waves,
  Mountain,
  Tornado,
  Wind,
  Droplet,
  Tent,
} from "lucide-react";

export const emergencyContacts = [
  {
    id: "ambulance",
    name: "Ambulance / Medical",
    description: "For urgent medical assistance, injuries, or health crises.",
    number: "102",
    icon: Ambulance,
  },
  {
    id: "fire-dept",
    name: "Fire Department",
    description: "For fires, gas leaks, and other fire-related emergencies.",
    number: "101",
    icon: Flame,
  },
  {
    id: "police",
    name: "Police",
    description: "For reporting crimes, immediate threats, or for police assistance.",
    number: "100",
    icon: Shield,
  },
  {
    id: "national-emergency",
    name: "National Emergency Number",
    description: "A single emergency helpline for fire, police, and ambulance services.",
    number: "112",
    icon: Phone,
  },
  {
    id: "disaster-management",
    name: "Disaster Management",
    description: "For assistance with natural disasters. Connects to the National Disaster Management Authority (NDMA).",
    number: "108",
    icon: Building,
  },
  {
    id: "poison-control",
    name: "Poison Control Center",
    description: "For information on poisonous substances. Provided by AIIMS.",
    number: "1800-11-6117",
    icon: User,
  },
];

export const emergencyLocations = [
  { id: "h1", name: "AIIMS, Delhi", address: "Ansari Nagar, New Delhi", type: "hospital" },
  { id: "h3", name: "Max Super Speciality Hospital", address: "Vaishali, Ghaziabad", type: "hospital" },
  { id: "h4", name: "Fortis Hospital, Noida", address: "Sector 62, Noida", type: "hospital" },
  { id: "h5", name: "Anand Hospital", address: "A-1, Damodor Colony, Garh Road, Meerut", type: "hospital" },
  { id: "h6", name: "King George's Medical University", address: "Shah Mina Road, Lucknow", type: "hospital" },
  { id: "h7", name: "Lala Lajpat Rai Hospital", address: "Swaroop Nagar, Kanpur", type: "hospital" },
  { id: "h8", name: "SN Medical College", address: "MG Road, Agra", type: "hospital" },
  { id: "h9", name: "Sir Sunderlal Hospital, BHU", address: "Varanasi", type: "hospital" },
  { id: "p1", name: "Police Station Connaught Place", address: "Connaught Place, New Delhi", type: "police" },
  { id: "p2", name: "Police Station Kavi Nagar", address: "Kavi Nagar, Ghaziabad", type: "police" },
  { id: "p3", name: "Police Station Sector 20", address: "Sector 20, Noida", type: "police" },
  { id: "p4", name: "Police Station Civil Lines", address: "Civil Lines, Meerut", type: "police" },
  { id: "p5", name: "Police Station Hazratganj", address: "Hazratganj, Lucknow", type: "police" },
  { id: "p6", name: "Police Station Kotwali", address: "Kotwali, Kanpur", type: "police" },
  { id: "p7", name: "Police Station Tajganj", address: "Tajganj, Agra", type: "police" },
  { id: "p8", name: "Police Station Lanka", address: "Lanka, Varanasi", type: "police" },
  { id: "f1", name: "Delhi Fire Service, Connaught Place", address: "Connaught Place, New Delhi", type: "fire" },
  { id: "f2", name: "Fire Station Vaishali", address: "Vaishali, Ghaziabad", type: "fire" },
  { id: "f3", name: "Fire Station Phase 1", address: "Phase 1, Noida", type: "fire" },
  { id: "f4", name: "Fire Station Meerut Cantt", address: "Meerut Cantt, Meerut", type: "fire" },
  { id: "f5", name: "Fire Station Hazratganj", address: "Hazratganj, Lucknow", type: "fire" },
  { id: "f6", name: "Fire Station La Touche Road", address: "La Touche Road, Kanpur", type: "fire" },
  { id: "f7", name: "Fire Station Agra Fort", address: "Agra Fort, Agra", type: "fire" },
  { id: "f8", name: "Fire Station Bhelupur", address: "Bhelupur, Varanasi", type: "fire" },
  { id: "d1", name: "NDMA Bhawan", address: "Safdarjung Enclave, New Delhi", type: "disaster" },
  { id: "d2", name: "State Disaster Response Force", address: "Ghaziabad", type: "disaster" },
  { id: "d3", name: "UP State Disaster Management Authority", address: "Gomti Nagar, Lucknow", type: "disaster" },
  { id: "pc1", name: "National Poisons Information Centre, AIIMS", address: "Ansari Nagar, New Delhi", type: "poison-control" },
  { id: "pc2", name: "Poison Information Centre, KGMU", address: "Shah Mina Road, Lucknow", type: "poison-control" },
  { id: "rc1", name: "Community Hall Relief Camp", address: "Sector 22, Noida", type: "relief-camp" },
  { id: "rc2", name: "Government School Shelter", address: "Vijay Nagar, Ghaziabad", type: "relief-camp" },
  { id: "rc3", name: "Yamuna Sports Complex", address: "Surajmal Vihar, Delhi", type: "relief-camp" },
];

export const guides = [
  {
    id: "cuts-scrapes",
    title: "Cuts and Scrapes",
    category: "Common Injuries",
    icon: Scissors,
    youtubeUrl: "https://youtu.be/4e7evinsfm0?si=3kSZ-1c_uyskqstf",
    steps: [
      {
        title: "Stop the Bleeding",
        instruction: "Apply gentle pressure with a clean cloth or bandage for 20 to 30 minutes.",
      },
      {
        title: "Clean the Wound",
        instruction: "Rinse the wound with clear water. Use tweezers cleaned with alcohol to remove any debris.",
      },
      {
        title: "Apply an Antibiotic",
        instruction: "Apply a thin layer of an antibiotic cream or ointment to help keep the surface moist.",
      },
      {
        title: "Cover the Wound",
        instruction: "Cover the wound with a sterile bandage. Change the dressing daily or whenever it becomes wet or dirty.",
      },
      {
        title: "Watch for Signs of Infection",
        instruction: "See a doctor if you notice redness, increasing pain, drainage, warmth, or swelling.",
      },
    ],
  },
  {
    id: "burns",
    title: "Minor Burns",
    category: "Common Injuries",
    icon: Flame,
    youtubeUrl: "https://youtu.be/TLr2qsEhpC8?si=vVLyuUQ5Xb7QkTFw",
    steps: [
        {
            title: "Cool the Burn",
            instruction: "Hold the burned area under cool (not cold) running water for about 10 minutes.",
        },
        {
            title: "Remove Jewelry",
            instruction: "Gently remove rings or other tight items from the burned area before it swells.",
        },
        {
            title: "Don't Break Blisters",
            instruction: "Fluid-filled blisters protect against infection. If a blister breaks, clean the area with water and apply an antibiotic ointment.",
        },
        {
            title: "Apply Lotion",
            instruction: "Once the burn is cooled, apply a lotion, such as one with aloe vera, to moisturize and prevent drying.",
        },
        {
            title: "Bandage the Burn",
            instruction: "Cover the burn with a sterile gauze bandage (not fluffy cotton). Wrap it loosely to avoid putting pressure on burned skin.",
        },
    ],
  },
    {
    id: "sprains",
    title: "Sprains",
    category: "Common Injuries",
    icon: Bone,
    youtubeUrl: "https://youtu.be/0jps5SZlTdo?si=Dd1c2YbOw7GgB52z",
    steps: [
      {
        title: "Rest",
        instruction: "Avoid activities that cause pain, swelling or discomfort.",
      },
      {
        title: "Ice",
        instruction: "Ice the area immediately. Use an ice pack or a bag of frozen vegetables for 15 to 20 minutes each time, every two to three hours.",
      },
      {
        title: "Compression",
        instruction: "To help stop swelling, compress the area with an elastic bandage until the swelling stops.",
      },
      {
        title: "Elevation",
        instruction: "Elevate the injured limb above your heart level, especially at night, which allows gravity to help reduce swelling.",
      },
    ],
  },
  {
    id: "nosebleeds",
    title: "Nosebleeds",
    category: "Common Injuries",
    icon: Droplet,
    youtubeUrl: "https://youtu.be/PmmhxW0vVXA?si=onaoF3a8s_hr5zzK",
    steps: [
      {
        title: "Sit Up and Lean Forward",
        instruction: "Keep your head higher than the level of your heart. Leaning forward will help you avoid swallowing blood.",
      },
      {
        title: "Pinch Your Nose",
        instruction: "Use your thumb and index finger to pinch both your nostrils shut. Breathe through your mouth. Continue to pinch for 10 to 15 minutes.",
      },
      {
        title: "Avoid Strenuous Activity",
        instruction: "For several hours after the nosebleed, do not pick or blow your nose and do not bend down. This can cause the nose to bleed again.",
      },
      {
        title: "Seek Medical Care",
        instruction: "If the bleeding lasts for more than 20 minutes or if it follows an accident, a fall or an injury to your head, seek medical attention.",
      },
    ],
  },
  {
    id: "fractures",
    title: "Suspected Fractures",
    category: "Common Injuries",
    icon: Bone,
    youtubeUrl: "https://youtu.be/2v8vlXgGXwE?si=UDaAxh095Vl7jJMX",
    steps: [
        {
            title: "Stop any Bleeding",
            instruction: "If there's bleeding, apply pressure to the wound with a sterile bandage, a clean cloth, or a clean piece of clothing.",
        },
        {
            title: "Immobilize the Injured Area",
            instruction: "Don't try to realign the bone. If you've been trained in how to splint and professional help isn't readily available, apply a splint to the area above and below the fracture sites.",
        },
        {
            title: "Apply Ice Packs to Limit Swelling",
            instruction: "Wrap ice in a towel or cloth and apply to the injured area for up to 10 minutes at a time.",
        },
        {
            title: "Treat for Shock",
            instruction: "If the person feels faint or is breathing in short, rapid breaths, lay the person down with the head slightly lower than the trunk and, if possible, elevate the legs.",
        },
    ],
  },
  {
    id: "choking",
    title: "Choking (Adult)",
    category: "Medical Emergencies",
    icon: HelpCircle,
    youtubeUrl: "https://youtu.be/j45WfhxK_Hs?si=tzoB7GXEMQRWIe7B",
    steps: [
      {
        title: "Assess the Situation",
        instruction: "Ask the person 'Are you choking?'. If they can speak, cough, or breathe, encourage them to keep coughing.",
      },
      {
        title: "Give 5 Back Blows",
        instruction: "Stand to the side and slightly behind a choking adult. For a child, kneel down behind. Place one arm across the person's chest for support. Bend the person over at the waist so that the upper body is parallel with the ground. Deliver five separate back blows between the person's shoulder blades with the heel of your hand.",
      },
      {
        title: "Give 5 Abdominal Thrusts",
        instruction: "Perform five abdominal thrusts (also known as the Heimlich maneuver).",
      },
      {
        title: "Alternate",
        instruction: "Alternate between 5 blows and 5 thrusts until the blockage is dislodged.",
      },
    ],
  },
  {
    id: "anaphylaxis",
    title: "Anaphylaxis",
    category: "Medical Emergencies",
    icon: Syringe,
    youtubeUrl: "https://youtu.be/QL_CD0-uEL0?si=ECjNhQblha06-meF",
    steps: [
      {
        title: "Call for an Ambulance",
        instruction: "Immediately call your local emergency number.",
      },
      {
        title: "Use an Epinephrine Autoinjector",
        instruction: "If the person has an epinephrine autoinjector (like an EpiPen), help them use it. ",
      },
      {
        title: "Loosen Tight Clothing",
        instruction: "Help the person lie on their back and loosen any tight clothing.",
      },
      {
        title: "Turn them on their side",
        instruction: "If they are vomiting or bleeding from the mouth, turn them on their side to prevent choking.",
      },
      {
        title: "Perform CPR if needed",
        instruction: "If there are no signs of breathing, coughing or movement, begin CPR.",
      },
    ],
  },
  {
    id: "heat-exhaustion",
    title: "Heat Exhaustion",
    category: "Medical Emergencies",
    icon: Thermometer,
    youtubeUrl: "https://youtu.be/R6VdoV8dZRc?si=GIPoHB2PLckLD5Wo",
    steps: [
      {
        title: "Move to a Cool Place",
        instruction: "Get the person out of the sun and into a shady or air-conditioned location.",
      },
      {
        title: "Loosen Clothing",
        instruction: "Remove any tight or unnecessary clothing.",
      },
      {
        title: "Cool the Skin",
        instruction: "Cool the person's skin by spraying or sponging with cool water. Fan the person.",
      },
      {
        title: "Sip Cool Water",
        instruction: "Have the person sip cool water or a sports drink. Do not let them drink too quickly.",
      },
      {
        title: "Seek Medical Attention",
        instruction: "If symptoms worsen or do not improve within an hour, seek medical help immediately.",
      },
    ],
  },
  {
    id: "earthquake",
    title: "Earthquake",
    category: "Disaster Preparedness",
    icon: Zap,
    youtubeUrl: "https://youtu.be/BLEPakj1YTY?si=g66XWVbkqTiBuze9",
    steps: [
      {
        title: "Drop, Cover, and Hold On",
        instruction: "Drop to your hands and knees. Cover your head and neck with your arms. If a sturdy table or desk is nearby, crawl underneath it for shelter. Hold on to your shelter until the shaking stops.",
      },
      {
        title: "Stay Indoors",
        instruction: "Stay inside until the shaking has stopped and you are sure it is safe to exit. Most injuries during earthquakes occur from falling objects.",
      },
      {
        title: "Stay Away from Windows",
        instruction: "Stay away from glass, windows, outside doors and walls, and anything that could fall, such as lighting fixtures or furniture.",
      },
      {
        title: "Be Aware of Aftershocks",
        instruction: "Be prepared for aftershocks. These secondary shockwaves are usually less violent than the main quake but can be strong enough to do additional damage to weakened structures.",
      },
    ],
  },
  {
    id: "flood",
    title: "Flood",
    category: "Disaster Preparedness",
    icon: Waves,
    youtubeUrl: "https://youtu.be/43M5mZuzHF8?si=NOODopUXtoDTe6E5",
    steps: [
      {
        title: "Move to Higher Ground",
        instruction: "Immediately move to higher ground. Do not wait for instructions to move.",
      },
      {
        title: "Do Not Walk or Drive Through Floodwaters",
        instruction: "Just six inches of moving water can knock you down, and one foot of moving water can sweep your vehicle away. Turn around, don't drown.",
      },
      {
        title: "Stay Informed",
        instruction: "Listen to the radio or television for information and instructions.",
      },
      {
        title: "Avoid Contact with Floodwater",
        instruction: "Floodwater may be contaminated by oil, gasoline, or raw sewage. It may also be electrically charged from underground or downed power lines.",
      },
    ],
  },
  {
    id: "landslide",
    title: "Landslide",
    category: "Disaster Preparedness",
    icon: Mountain,
    youtubeUrl: "https://youtu.be/vHqTF1u8kuc?si=3FNWOP7bI-08jsbk",
    steps: [
      {
        title: "Move Away Quickly",
        instruction: "If you suspect a landslide, move away from the path of the slide as quickly as possible. Avoid river valleys and low-lying areas.",
      },
      {
        title: "Listen for Unusual Sounds",
        instruction: "Pay attention to unusual sounds such as trees cracking or boulders knocking together that might indicate moving debris.",
      },
      {
        title: "Watch for Changes in Water Flow",
        instruction: "If you are near a stream or channel, be alert for any sudden increase or decrease in water flow and for a change from clear to muddy water.",
      },
      {
        title: "Move to Higher Ground",
        instruction: "If you can't escape, curl into a tight ball and protect your head.",
      },
      {
        title: "Stay Informed",
        instruction: "After the landslide, stay away from the slide area. Listen to local radio or television for the latest emergency information.",
      },
    ],
  },
  {
    id: "hurricane",
    title: "Hurricane",
    category: "Disaster Preparedness",
    icon: Tornado,
    youtubeUrl: "https://youtu.be/xHRbnuB9F1I?si=tzwSFKjI8T6CCA5F",
    steps: [
      {
        title: "Secure Your Home",
        instruction: "Cover all of your home's windows. Permanent storm shutters offer the best protection for windows. A second option is to board up windows with 5/8” exterior grade or marine plywood, cut to fit and ready to install.",
      },
      {
        title: "Stay Indoors",
        instruction: "Stay inside and away from windows and glass doors. Close all interior doors—secure and brace external doors.",
      },
      {
        title: "Seek Shelter",
        instruction: "Take refuge in a small interior room, closet, or hallway on the lowest level.",
      },
      {
        title: "Evacuate if Necessary",
        instruction: "If you are instructed to evacuate, do so immediately. Follow the designated evacuation routes.",
      },
      {
        title: "Listen to Officials",
        instruction: "Listen to the advice of local officials, and leave if they tell you to.",
      },
    ],
  },
  {
    id: "fire",
    title: "Fire Safety",
    category: "Disaster Preparedness",
    icon: Flame,
    youtubeUrl: "https://youtu.be/Q3LDGOFxJAE?si=ZOHkJ1NM938aWxGt",
    steps: [
      {
        title: "Install Smoke Alarms",
        instruction: "Install smoke alarms on every level of your home, inside bedrooms and outside sleeping areas. Test them every month.",
      },
      {
        title: "Know Your Exits",
        instruction: "Plan and practice two ways out of every room, especially sleeping areas.",
      },
      {
        title: "Feel Doors for Heat",
        instruction: "Before opening a door, feel it with the back of your hand. If the door is hot, do not open it. Use your second way out.",
      },

      {
        title: "Crawl Low Under Smoke",
        instruction: "If you have to escape through smoke, crawl on your hands and knees to the nearest safe exit. The cleaner air is near the floor.",
      },
      {
        title: "Stop, Drop, and Roll",
        instruction: "If your clothes catch fire, stop where you are, drop to the ground, and roll over and over to smother the flames. Cover your face with your hands.",
      },
    ],
  },
];