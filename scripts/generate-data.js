const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'src', 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

// Routes data
const routes = [
  { to: "Jamshedpur", state: "Jharkhand", dist: 130, time: "2.5 hrs", lat: 22.8046, lng: 86.2029 },
  { to: "Dhanbad", state: "Jharkhand", dist: 160, time: "3.5 hrs", lat: 23.7957, lng: 86.4304 },
  { to: "Bokaro", state: "Jharkhand", dist: 110, time: "2.5 hrs", lat: 23.6693, lng: 86.1511 },
  { to: "Hazaribagh", state: "Jharkhand", dist: 100, time: "2 hrs", lat: 23.9921, lng: 85.3637 },
  { to: "Deoghar", state: "Jharkhand", dist: 250, time: "5 hrs", lat: 24.4764, lng: 86.6944 },
  { to: "Giridih", state: "Jharkhand", dist: 190, time: "4 hrs", lat: 24.1854, lng: 86.3003 },
  { to: "Ramgarh", state: "Jharkhand", dist: 45, time: "1 hr", lat: 23.6310, lng: 85.5265 },
  { to: "Dumka", state: "Jharkhand", dist: 300, time: "6 hrs", lat: 24.2688, lng: 87.2521 },
  { to: "Chaibasa", state: "Jharkhand", dist: 130, time: "3 hrs", lat: 22.5571, lng: 85.8032 },
  { to: "Gumla", state: "Jharkhand", dist: 95, time: "2 hrs", lat: 23.0438, lng: 84.5419 },
  { to: "Lohardaga", state: "Jharkhand", dist: 72, time: "1.5 hrs", lat: 23.4359, lng: 84.6841 },
  { to: "Simdega", state: "Jharkhand", dist: 130, time: "3 hrs", lat: 22.6154, lng: 84.5060 },
  { to: "Khunti", state: "Jharkhand", dist: 40, time: "1 hr", lat: 23.0746, lng: 85.2786 },
  { to: "Chatra", state: "Jharkhand", dist: 140, time: "3 hrs", lat: 24.2050, lng: 84.8710 },
  { to: "Latehar", state: "Jharkhand", dist: 130, time: "3 hrs", lat: 23.7406, lng: 84.5013 },
  { to: "Daltonganj", state: "Jharkhand", dist: 170, time: "4 hrs", lat: 24.0299, lng: 84.0669 },
  { to: "Garhwa", state: "Jharkhand", dist: 210, time: "5 hrs", lat: 24.1853, lng: 83.8039 },
  { to: "Koderma", state: "Jharkhand", dist: 160, time: "3.5 hrs", lat: 24.4675, lng: 85.5942 },
  { to: "Jamtara", state: "Jharkhand", dist: 230, time: "5 hrs", lat: 23.9584, lng: 86.8014 },
  { to: "Pakur", state: "Jharkhand", dist: 350, time: "7 hrs", lat: 24.6349, lng: 87.8434 },
  { to: "Sahebganj", state: "Jharkhand", dist: 380, time: "8 hrs", lat: 25.2494, lng: 87.6388 },
  { to: "Godda", state: "Jharkhand", dist: 310, time: "7 hrs", lat: 24.8271, lng: 87.2139 },
  { to: "Seraikela", state: "Jharkhand", dist: 120, time: "2.5 hrs", lat: 22.7076, lng: 85.9713 },
  { to: "Chandil", state: "Jharkhand", dist: 100, time: "2 hrs", lat: 22.9566, lng: 86.0498 },
  { to: "Netarhat", state: "Jharkhand", dist: 155, time: "4 hrs", lat: 23.4786, lng: 84.2711 },
  { to: "Betla", state: "Jharkhand", dist: 180, time: "4.5 hrs", lat: 23.6279, lng: 84.1653 },
  { to: "Patratu", state: "Jharkhand", dist: 40, time: "1 hr", lat: 23.6717, lng: 85.2846 },
  { to: "McCluskieganj", state: "Jharkhand", dist: 60, time: "1.5 hrs", lat: 23.6370, lng: 85.0671 },
  { to: "Rajrappa", state: "Jharkhand", dist: 70, time: "1.5 hrs", lat: 23.6472, lng: 85.3819 },
  { to: "Patna", state: "Bihar", dist: 330, time: "6.5 hrs", lat: 25.6093, lng: 85.1376 },
  { to: "Gaya", state: "Bihar", dist: 230, time: "5 hrs", lat: 24.7914, lng: 84.9994 },
  { to: "Bodh Gaya", state: "Bihar", dist: 240, time: "5.5 hrs", lat: 24.6961, lng: 84.9869 },
  { to: "Rajgir", state: "Bihar", dist: 260, time: "5.5 hrs", lat: 25.0288, lng: 85.4196 },
  { to: "Nalanda", state: "Bihar", dist: 270, time: "5.5 hrs", lat: 25.1360, lng: 85.4430 },
  { to: "Nawada", state: "Bihar", dist: 220, time: "4.5 hrs", lat: 24.8861, lng: 85.5378 },
  { to: "Sasaram", state: "Bihar", dist: 310, time: "6.5 hrs", lat: 24.9519, lng: 84.0336 },
  { to: "Muzaffarpur", state: "Bihar", dist: 420, time: "8 hrs", lat: 26.1209, lng: 85.3647 },
  { to: "Bhagalpur", state: "Bihar", dist: 350, time: "7 hrs", lat: 25.2425, lng: 86.9842 },
  { to: "Aurangabad Bihar", state: "Bihar", dist: 260, time: "5.5 hrs", lat: 24.7539, lng: 84.3742 },
  { to: "Kolkata", state: "West Bengal", dist: 400, time: "8 hrs", lat: 22.5726, lng: 88.3639 },
  { to: "Asansol", state: "West Bengal", dist: 220, time: "4.5 hrs", lat: 23.6832, lng: 86.9524 },
  { to: "Durgapur", state: "West Bengal", dist: 250, time: "5 hrs", lat: 23.5204, lng: 87.3119 },
  { to: "Purulia", state: "West Bengal", dist: 170, time: "4 hrs", lat: 23.3321, lng: 86.3652 },
  { to: "Siliguri", state: "West Bengal", dist: 600, time: "11 hrs", lat: 26.7271, lng: 88.3953 },
  { to: "Kharagpur", state: "West Bengal", dist: 280, time: "5.5 hrs", lat: 22.3460, lng: 87.3236 },
  { to: "Bhubaneswar", state: "Odisha", dist: 440, time: "9 hrs", lat: 20.2961, lng: 85.8245 },
  { to: "Rourkela", state: "Odisha", dist: 210, time: "4.5 hrs", lat: 22.2604, lng: 84.8536 },
  { to: "Cuttack", state: "Odisha", dist: 450, time: "9 hrs", lat: 20.4625, lng: 85.8830 },
  { to: "Puri", state: "Odisha", dist: 500, time: "10 hrs", lat: 19.7983, lng: 85.8249 },
  { to: "Sambalpur", state: "Odisha", dist: 300, time: "6 hrs", lat: 21.4669, lng: 83.9812 },
  { to: "Varanasi", state: "Uttar Pradesh", dist: 420, time: "8.5 hrs", lat: 25.3176, lng: 82.9739 },
  { to: "Prayagraj", state: "Uttar Pradesh", dist: 480, time: "9 hrs", lat: 25.4358, lng: 81.8463 },
  { to: "Mirzapur", state: "Uttar Pradesh", dist: 400, time: "8 hrs", lat: 25.1337, lng: 82.5644 },
  { to: "Lucknow", state: "Uttar Pradesh", dist: 700, time: "13 hrs", lat: 26.8467, lng: 80.9462 },
].map(r => {
  const slug = `ranchi-to-${r.to.toLowerCase().replace(/\s+/g,'-')}-cab`;
  const perKm = { sedan: 11, suv: 14, crysta: 16 };
  const attractions = getAttractions(r.to);
  return {
    slug,
    from: "Ranchi",
    to: r.to,
    state: r.state,
    distance: r.dist,
    duration: r.time,
    lat: r.lat,
    lng: r.lng,
    fares: {
      dzire: Math.round(r.dist * perKm.sedan),
      etios: Math.round(r.dist * 12),
      ertiga: Math.round(r.dist * 13),
      innova: Math.round(r.dist * perKm.suv),
      crysta: Math.round(r.dist * perKm.crysta),
    },
    metaTitle: `Ranchi to ${r.to} Cab Service | Taxi Fare ₹${Math.round(r.dist*11)} | Book Now`,
    metaDesc: `Book Ranchi to ${r.to} cab at ₹${perKm.sedan}/km. Distance ${r.dist} km, ${r.time}. One-way & round trip taxi. AC sedan, SUV, Innova. Call +91 7488341848.`,
    attractions
  };
});

function getAttractions(city) {
  const map = {
    "Jamshedpur": ["Jubilee Park", "Dimna Lake", "Dalma Wildlife Sanctuary"],
    "Dhanbad": ["Maithon Dam", "Topchanchi Lake", "Bhatinda Falls"],
    "Bokaro": ["Garga Dam", "City Park", "Jawaharlal Nehru Biological Park"],
    "Hazaribagh": ["Hazaribagh Wildlife Sanctuary", "Canary Hill", "Hazaribagh Lake"],
    "Deoghar": ["Baidyanath Dham Temple", "Trikut Hill", "Naulakha Temple"],
    "Patna": ["Golghar", "Patna Museum", "Mahavir Mandir", "Nalanda ruins"],
    "Kolkata": ["Victoria Memorial", "Howrah Bridge", "Dakshineswar Temple"],
    "Varanasi": ["Kashi Vishwanath Temple", "Ganga Aarti", "Sarnath"],
    "Gaya": ["Vishnupad Temple", "Bodhi Tree", "Dungeshwari Cave"],
    "Bodh Gaya": ["Mahabodhi Temple", "Great Buddha Statue", "Bodhi Tree"],
    "Bhubaneswar": ["Lingaraj Temple", "Udayagiri Caves", "Nandankanan Zoo"],
    "Puri": ["Jagannath Temple", "Puri Beach", "Konark Sun Temple"],
    "Rourkela": ["Hanuman Vatika", "Vedvyas Temple", "Mandira Dam"],
    "Netarhat": ["Magnolia Point", "Sunset Point", "Upper Ghaghri Falls"],
    "Betla": ["Betla National Park", "Palamau Fort", "Elephant Safari"],
    "Rajrappa": ["Chhinnamasta Temple", "Damodar River", "Bhairavi Confluence"],
    "Giridih": ["Parasnath Hill", "Usri Falls", "Khandoli Park"],
    "Patratu": ["Patratu Dam", "Patratu Valley", "Scenic Drive"],
  };
  return map[city] || ["City Center", "Local Markets", "Cultural Sites"];
}

// Cities data
const cities = [
  { name: "Ranchi", state: "Jharkhand", type: "capital", lat: 23.3441, lng: 85.3096, pop: "14.5 lakh", famous: "Capital of Jharkhand, waterfalls, tribal culture", areas: ["Doranda","Main Road","Lalpur","Ratu Road","Kanke","Namkum","Hatia","Morabadi","Bariatu","Ashok Nagar","Kokar","Harmu","Hinoo","Chutia","Piska More"] },
  { name: "Jamshedpur", state: "Jharkhand", type: "city", lat: 22.8046, lng: 86.2029, pop: "13 lakh", famous: "Steel City, Tata Steel, Jubilee Park", areas: ["Bistupur","Sakchi","Sonari","Kadma","Telco","Mango","Adityapur","Gamharia"] },
  { name: "Dhanbad", state: "Jharkhand", type: "city", lat: 23.7957, lng: 86.4304, pop: "12 lakh", famous: "Coal Capital of India", areas: ["Hirapur","Bank More","Jharia","Katras","Sindri","Govindpur"] },
  { name: "Bokaro", state: "Jharkhand", type: "city", lat: 23.6693, lng: 86.1511, pop: "6 lakh", famous: "Bokaro Steel City", areas: ["Sector 1","Sector 4","Chas","City Centre","Bokaro General Hospital Area"] },
  { name: "Hazaribagh", state: "Jharkhand", type: "city", lat: 23.9921, lng: 85.3637, pop: "4 lakh", famous: "Wildlife Sanctuary, Canary Hill", areas: ["Court Road","Guru Gobind Singh Chowk","Annanda Chowk"] },
  { name: "Deoghar", state: "Jharkhand", type: "city", lat: 24.4764, lng: 86.6944, pop: "3.5 lakh", famous: "Baidyanath Dham, 12 Jyotirlingas", areas: ["Tower Chowk","Nandan Pahar","Karnibad"] },
  { name: "Giridih", state: "Jharkhand", type: "city", lat: 24.1854, lng: 86.3003, pop: "3 lakh", famous: "Parasnath Hill, Jain pilgrimage", areas: ["Station Road","Barachatti","Purana Bazar"] },
  { name: "Ramgarh", state: "Jharkhand", type: "city", lat: 23.6310, lng: 85.5265, pop: "2 lakh", famous: "Rajrappa Temple, Coal mines", areas: ["Ramgarh Cantt","Bhurkunda","Dulmi"] },
  { name: "Dumka", state: "Jharkhand", type: "city", lat: 24.2688, lng: 87.2521, pop: "2 lakh", famous: "Sub-capital of Jharkhand", areas: ["Station Road","Motijheel","Hansdiha Road"] },
  { name: "Chaibasa", state: "Jharkhand", type: "city", lat: 22.5571, lng: 85.8032, pop: "1.5 lakh", famous: "West Singhbhum HQ", areas: ["Gopalpur","Town Area","Ranchi Road"] },
  { name: "Gumla", state: "Jharkhand", type: "city", lat: 23.0438, lng: 84.5419, pop: "1 lakh", famous: "Tribal culture, forests", areas: ["Main Road","Bus Stand Area"] },
  { name: "Lohardaga", state: "Jharkhand", type: "city", lat: 23.4359, lng: 84.6841, pop: "1 lakh", famous: "Bauxite mining", areas: ["Station Road","Kisko Road"] },
  { name: "Simdega", state: "Jharkhand", type: "city", lat: 22.6154, lng: 84.5060, pop: "0.8 lakh", famous: "Forests, tribal culture", areas: ["Main Road","Hospital Road"] },
  { name: "Khunti", state: "Jharkhand", type: "city", lat: 23.0746, lng: 85.2786, pop: "0.8 lakh", famous: "Ulihatu - birthplace of Birsa Munda", areas: ["Main Bazaar","NH Road"] },
  { name: "Chatra", state: "Jharkhand", type: "city", lat: 24.2050, lng: 84.8710, pop: "1 lakh", famous: "Historical forts, forests", areas: ["Main Road","Court Area"] },
  { name: "Latehar", state: "Jharkhand", type: "city", lat: 23.7406, lng: 84.5013, pop: "0.6 lakh", famous: "Netarhat gateway, Betla NP", areas: ["Station Road","Bazaar"] },
  { name: "Daltonganj", state: "Jharkhand", type: "city", lat: 24.0299, lng: 84.0669, pop: "1.5 lakh", famous: "Palamu Fort, Betla National Park", areas: ["Station Road","Medininagar","Court Road"] },
  { name: "Koderma", state: "Jharkhand", type: "city", lat: 24.4675, lng: 85.5942, pop: "1 lakh", famous: "Mica mining capital", areas: ["Station Road","Jhumri Tilaiya"] },
  { name: "Seraikela", state: "Jharkhand", type: "city", lat: 22.7076, lng: 85.9713, pop: "0.6 lakh", famous: "Chhau dance origin", areas: ["Main Road","Gamharia Side"] },
].map(c => {
  const slug = `cab-service-in-${c.name.toLowerCase().replace(/\s+/g,'-')}`;
  return {
    slug,
    ...c,
    metaTitle: `Cab Service in ${c.name} | Car Rental ${c.name} | Book Taxi ₹10/km`,
    metaDesc: `Best cab service in ${c.name}, ${c.state}. Local taxi, outstation, airport transfer. AC sedan, SUV, Innova. 24/7 booking. Call +91 7488341848.`,
  };
});

// Tours data
const tours = [
  { id: "ranchi-local-sightseeing", name: "Ranchi Local Sightseeing Tour", duration: "1 Day", price: 1800, places: ["Tagore Hill","Rock Garden","Ranchi Lake","Pahari Mandir","Kanke Dam","Birsa Zoo"], desc: "Explore the capital city of Jharkhand with our full-day Ranchi local sightseeing tour covering all major attractions." },
  { id: "ranchi-waterfall-circuit", name: "Ranchi Waterfall Circuit Tour", duration: "1 Day", price: 2500, places: ["Hundru Falls","Jonha Falls","Dassam Falls","Sita Falls"], desc: "Experience the majestic waterfalls around Ranchi. This tour covers the top 4 waterfalls in a single day trip." },
  { id: "netarhat-hill-station", name: "Netarhat Hill Station Tour", duration: "2-3 Days", price: 5500, places: ["Netarhat Sunrise Point","Magnolia Point","Upper Ghaghri Falls","Sadni Falls","Pine Forests"], desc: "Visit the Queen of Chotanagpur — Netarhat hill station with its stunning sunrise views and dense pine forests." },
  { id: "betla-national-park-safari", name: "Betla National Park Safari", duration: "2 Days", price: 5000, places: ["Betla National Park","Elephant Safari","Palamau Fort","Lodh Falls"], desc: "Wildlife adventure at Betla National Park with jungle safari, elephant rides, and ancient Palamau Fort." },
  { id: "deoghar-baidyanath-dham", name: "Deoghar Baidyanath Dham Tour", duration: "2 Days", price: 4500, places: ["Baidyanath Temple","Trikut Hill","Naulakha Temple","Nandan Pahar","Tapovan"], desc: "Spiritual journey to one of the 12 Jyotirlingas at Deoghar. Includes Trikut Hill ropeway and temple visits." },
  { id: "rajrappa-temple-tour", name: "Rajrappa Temple Tour", duration: "1 Day", price: 1800, places: ["Chhinnamasta Temple","Bhairavi-Damodar Confluence","River Bathing"], desc: "Visit the powerful Chhinnamasta Temple at Rajrappa, situated at the scenic confluence of Bhairavi and Damodar rivers." },
  { id: "jharkhand-tribal-heritage", name: "Jharkhand Tribal Heritage Tour", duration: "3 Days", price: 7500, places: ["Ulihatu","Tribal Museums","Dassam Falls","Local Villages","Craft Markets"], desc: "Immerse yourself in the rich tribal culture of Jharkhand. Visit Birsa Munda's birthplace and tribal villages." },
  { id: "hundru-jonha-dassam-tour", name: "Hundru-Jonha-Dassam Falls Tour", duration: "1 Day", price: 2200, places: ["Hundru Falls","Jonha Falls","Gautamdhara Buddha Temple","Dassam Falls"], desc: "The most popular day trip from Ranchi covering three spectacular waterfalls in the scenic Jharkhand countryside." },
  { id: "kolkata-weekend-tour", name: "Kolkata Weekend Tour from Ranchi", duration: "3 Days", price: 12000, places: ["Victoria Memorial","Howrah Bridge","Dakshineswar","Park Street","Science City"], desc: "Weekend getaway from Ranchi to Kolkata. Explore the City of Joy's iconic landmarks and vibrant culture." },
  { id: "bodh-gaya-spiritual-tour", name: "Bodh Gaya Spiritual Tour", duration: "2 Days", price: 5500, places: ["Mahabodhi Temple","Great Buddha Statue","Bodhi Tree","Dungeshwari Cave","Sujata Stupa"], desc: "Pilgrimage to Bodh Gaya, the place where Lord Buddha attained enlightenment. UNESCO World Heritage Site." },
  { id: "puri-bhubaneswar-tour", name: "Puri-Bhubaneswar Temple Tour", duration: "4 Days", price: 15000, places: ["Jagannath Temple","Puri Beach","Konark Sun Temple","Lingaraj Temple","Udayagiri Caves"], desc: "Grand temple tour covering Odisha's most sacred sites including Jagannath Temple Puri and Konark Sun Temple." },
  { id: "varanasi-spiritual-tour", name: "Varanasi Spiritual Tour from Ranchi", duration: "3 Days", price: 10000, places: ["Kashi Vishwanath Temple","Ganga Aarti","Sarnath","Assi Ghat","BHU"], desc: "Experience the spiritual capital of India. Witness the mesmerizing Ganga Aarti and visit ancient temples." },
  { id: "patratu-valley-tour", name: "Patratu Valley Day Trip", duration: "1 Day", price: 1500, places: ["Patratu Dam","Patratu Valley","Scenic Road Drive"], desc: "Drive through one of India's most scenic roads — the Patratu Valley. Perfect for a quick nature escape from Ranchi." },
  { id: "corporate-retreat-package", name: "Corporate Retreat Package", duration: "Flexible", price: 8000, places: ["Resort Stay","Team Activities","Netarhat/Patratu Options"], desc: "Customized corporate retreat packages with transport, accommodation coordination, and team building destinations." },
  { id: "jharkhand-complete-tour", name: "Jharkhand Complete State Tour", duration: "7 Days", price: 25000, places: ["Ranchi","Jamshedpur","Deoghar","Netarhat","Betla","Parasnath","Rajrappa"], desc: "The ultimate Jharkhand tour covering all major destinations across the state in 7 unforgettable days." },
];

tours.forEach(t => {
  t.slug = t.id;
  t.metaTitle = `${t.name} | ${t.duration} Package from ₹${t.price} | Car Rental Ranchi`;
  t.metaDesc = `Book ${t.name} from Ranchi. ${t.duration} tour covering ${t.places.slice(0,3).join(', ')}. Starting ₹${t.price}. Call +91 7488341848.`;
});

// Blogs data
const blogs = [
  { slug: "top-10-tourist-places-ranchi", title: "Top 10 Tourist Places in Ranchi You Must Visit", excerpt: "Discover the best tourist attractions in Ranchi from waterfalls to temples." },
  { slug: "ranchi-to-kolkata-road-trip-guide", title: "Ranchi to Kolkata Road Trip: Complete Travel Guide", excerpt: "Everything you need to know about driving from Ranchi to Kolkata." },
  { slug: "best-time-visit-netarhat", title: "Best Time to Visit Netarhat Hill Station", excerpt: "Planning a trip to Netarhat? Here's the ideal season and travel tips." },
  { slug: "cheapest-cab-booking-ranchi", title: "How to Book the Cheapest Cab in Ranchi", excerpt: "Smart tips to save money on cab bookings in Ranchi." },
  { slug: "ranchi-airport-transport-guide", title: "Birsa Munda Airport Transport Guide 2025", excerpt: "Complete guide to reaching and leaving Ranchi Airport." },
  { slug: "jharkhand-waterfall-tour-guide", title: "Jharkhand Waterfall Tour: Complete Itinerary", excerpt: "Plan the perfect waterfall circuit tour around Ranchi." },
  { slug: "ranchi-to-deoghar-travel-guide", title: "Ranchi to Deoghar: Baidyanath Dham Travel Guide", excerpt: "Everything about traveling from Ranchi to Deoghar for darshan." },
  { slug: "best-wedding-cars-ranchi", title: "Best Wedding Cars for Rent in Ranchi", excerpt: "Make your wedding special with premium decorated cars." },
];

blogs.forEach(b => {
  b.metaTitle = `${b.title} | Car Rental Ranchi`;
  b.metaDesc = b.excerpt + " Read more at Car Rental Ranchi.";
  b.date = "2025-05-15";
});

// Write files
fs.writeFileSync(path.join(dataDir, 'routes.json'), JSON.stringify(routes, null, 2));
fs.writeFileSync(path.join(dataDir, 'cities.json'), JSON.stringify(cities, null, 2));
fs.writeFileSync(path.join(dataDir, 'tours.json'), JSON.stringify(tours, null, 2));
fs.writeFileSync(path.join(dataDir, 'blogs.json'), JSON.stringify(blogs, null, 2));

console.log(`Generated ${routes.length} routes, ${cities.length} cities, ${tours.length} tours, ${blogs.length} blogs`);
