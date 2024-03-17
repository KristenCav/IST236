import Destination from "../models/destinations";
import Country from "../models/countries";

export const COUNTRY = [
  new Country("s1", "USA", "#33FFE3"), // Red
  new Country("s2", "United Arab Emirates", "#334FFF"), // Blue
  new Country("s3", "Italy", "#E333FF"), // Green
  new Country("s4", "Greece", "#33B5FF"), // Orange
  new Country("s5", "France", "#7D33FF"), // Purple
  new Country("s6", "Scotland", "#FF33B5"), // Yellow
  new Country("s7", "Maldives", "#33FFE3"), // Light Blue
  new Country("s8", "Sweden", "#334FFF"), // Light Green
  new Country("s9", "Ireland", "#E333FF"), // Deep Orange
  new Country("s10", "Norway", "#33B5FF"), // Deep Purple
];

export const DESTINATIONS = [
  new Destination(
    "c1",
    "s1",
    "Yellowstone National Park",
    '$35',
    1872,
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/84/92/2f/yellowstone-national.jpg?w=1200&h=-1&s=1",
    "Yellowstone National Park, the oldest, one of the largest, and probably the best-known national park in the United States. It is situated principally in northwestern Wyoming and partly in southern Montana and eastern Idaho and includes the greatest concentration of hydrothermal features in the world."
  ),
  new Destination(
    "c2",
    "s2",
    "Aura Skypool",
    '$55',
    2021,
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e3/6a/e4/aura-skypool-ain-marina.jpg?w=1200&h=-1&s=1",
    "Suspended 200 metres in the air, AURA SKYPOOL is the world's highest 360-degree infinity pool offering incredible views of the iconic Dubai skyline, Palm Jumeirah and the glistening horizon of the Arabian Gulf."
    ),
  new Destination(
    "c3",
    "s3",
    "Gladiator's Gate Colosseum Tour",
    '$70',
    '70AD',
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/e5/3d/e5/tour.jpg?w=1200&h=-1&s=1",
    "The first time you see the Colosseum should be special, and on this tour, it is. With exclusive access, you'll enter through the Gladiator's Gate and walk directly onto the arena floor."
  ),
  new Destination(
    "c4",
    "s4",
    "Acropolis",
    '$15',
    '5BC',
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/91/62/30/caption.jpg?w=1200&h=-1&s=1",
    "This ancient citadel, built in the fifth century B.C., towers over the city and is home to some of the most impressive ancient ruins, buildings, and artifacts. The most famous temple, the Parthenon, was dedicated to the goddess Athena and is considered the peak of Greek art."
  ),
  new Destination(
    "c5",
    "s5",
    "Sainte-Chapelle",
    '$22',
    1246,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/8e/f9/54/caption.jpg?w=1200&h=-1&s=1",
    "The Sainte-Chapelle is the finest royal chapel to be built in France and features a truly exceptional collection of stained-glass windows. It was built in the mid 13th century by Louis IX, at the heart of the royal residence, the Palais de la Cité."
  ),
  new Destination(
    "c6",
    "s6",
    "Edinburgh Castle",
    '$105',
    1200,
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/ff/32/2a/edinburgh-castle.jpg?w=1200&h=-1&s=1",
    "If you're visiting Edinburgh with your family, book a private sightseeing tour specially designed for those with kids. With a private guide, the tour can be tailored to your children's ages and interests to keep everyone entertained."
  ),
  new Destination(
    "c7",
    "s7",
    "5.8 Undersea Restaurant",
    '$80',
    2016,
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/90/29/bc/interior-of-58-undersea.jpg?w=1200&h=-1&s=1",
    "Send your senses soaring 5.8 meters below Hurawalhi Maldives, at the world's largest all-glass undersea restaurant."
  ),
  new Destination(
    "c8",
    "s8",
    "Vasa Museum",
    '$100',
    1990,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/2e/17/99/smtm.jpg?w=1200&h=-1&s=1",
    "The Vasa ship capsized and sank in Stockholm 1628. After 333 years on the seabed the mighty warship was salvaged and the voyage could continue. Today Vasa is the world's only preserved 17th century ship."
  ),
  new Destination(
    "c9",
    "s9",
    "The Causeway Coasteering",
    '$125',
    '--',
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/a7/51/82/caption.jpg?w=1100&h=-1&s=1",
    "Coasteering is adrenaline; cliff jumping, bouldering, climbing, being tossed by waves and basically using our rugged coastline as an adventure playground."
  ),
  new Destination(
    "c10",
    "s10",
    "Fram Museum - Oslo",
    '$14',
    1796,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/f9/cc/a8/enjoy-a-cinematic-show.jpg?w=1200&h=-1&s=1",
    "We focus on polar history, our centrepiece beeing FRAM, the strongest wooden polar ship ever, dating from 1893."
  ),
  new Destination(
    "c11",
    "s1",
    "Hell's Revenge 4x4 Off-Roading Tour",
    '$162',
    '--',
    5,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/36/34/01.jpg",
    "Go on an off-roading adventure, driving your vehicle down Hell's Revenge and up the steep incline of Devil's Backbone on this guided tour from Moab."
  ),
  new Destination(
    "c12",
    "s2",
    "LEGOLAND Dubai",
    '$85',
    2016,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ad/1f/60/caption.jpg?w=1200&h=-1&s=1",
    "LEGOLAND® Dubai is the ultimate world of year-round LEGO® theme park adventures for families with children aged 2-12. It will feature over 40 interactive rides, shows and attractions and 15,000 LEGO® model structures made from over 60 million LEGO® bricks."
  ),
  new Destination(
    "c13",
    "s3",
    "Valle dei Templi",
    '$20',
    '600BC',
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/93/ec/b5/la-vallee-des-temples.jpg?w=1200&h=-1&s=1",
    "This region is one of the most important archeological sites in the world with many great temples such as Hera (Juno,) Lacinia, Concordia, Heracles (Hercules) and Olympian Zeus (Jupiter,) all dramatically perched along a long rocky scarp."
  ),
  new Destination(
    "c14",
    "s4",
    "Meteora Sunset Tour",
    '$48',
    1340,
    5,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/10/f9/ee/84.jpg",
    "Meteora's monasteries are best experienced near dusk, when the daytime crowds dissolve and the sun bathes everything in gold. On this small-group tour from Kalambaka or Kastraki, you visit a monastery, plus the tucked-away Badovas caves and a hidden spot for panoramic views as the sun goes down."
  ),
  new Destination(
    "c15",
    "s5",
    "Futuroscope",
    '$48',
    1987,
    4,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/ff/34/ce/futuroscope.jpg?w=1200&h=-1&s=1",
    "Futuroscope is the ideal place to relax in, with 60 hectares of tranquil green countryside and 25 original experiences you won't find anywhere else: films in giant format, thrill-filled attractions, 3D rides with 4D effects, games, live shows, open-air activities, and more."
  ),
  new Destination(
    "c16",
    "s6",
    "Edinburgh Vaults",
    '$26',
    1788,
    5,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0b/2c/72/61.jpg",
    "The Edinburgh Vaults, one of the city's most fascinating sights, can only be accessed on a tour. Step inside with a local guide who'll reveal tales of hardship and struggle in 18th-century Edinburgh, grisly stories from the city's dark past, and lead you to a hidden witchcraft temple."
  ),
  new Destination(
    "c17",
    "s7",
    "Sandbank Snorkeling and Sunset Cruise",
    '$76',
    '--',
    4,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/7a/b9/66.jpg",
    "Make the most of your visit to the Maldives with this small-group tour that combines snorkeling, swimming, and sunbathing with a sunset dolphin cruise from Hulhumale."
  ),
  new Destination(
    "c18",
    "s8",
    "Adventuremine Äventyrsgruvan",
    '$115',
    2011,
    5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/51/d4/12/gruvan-har-ca-30km-gangar.jpg?w=1200&h=-1&s=1",
    "The adventure of a lifetime begins here! Follow us underground and explore old epic tunnels. With experienced guides, helmet, headlamp and harness we access dry adits and drifts above subterranean lakes and deep schafts."
  ),
  new Destination(
    "c19",
    "s9",
    "Kilmainham Gaol Museum",
    '$9',
    1796,
    4.5,
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/2f/1f/c6/photo1jpg.jpg?w=1200&h=-1&s=1",
    "This bleak old jail was notorious in the 19th century for its harsh treatment of prisoners."
  ),
  new Destination(
    "c20",
    "s10",
    "Northern Lights Tour with Greenlander",
    '$278',
    '--',
    5,
    "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/06/96/48/a9.jpg",
    "Embark on an adventurous Northern Lights chase in Northern Norway aboard a modified Mercedes Benz Vito. With a professional photographer as a guide and a small group, you'll get plenty of attention and tips on how to capture the best possible photos of the Aurora Borealis."
  ),
];
