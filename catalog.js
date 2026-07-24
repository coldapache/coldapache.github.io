// Shared product catalog for index.html and play.html
const STORE = "https://www.teacherspayteachers.com/store/micahs-learning-resources";

const CATALOG = [
  {slug:"industrial-revolution-factory-tycoon", tag:"Simulation / Tycoon Game", title:"Industrial Revolution Factory Tycoon",
   blurb:"Run a 19th-century factory. Hire workers, buy machines, and weigh profit against reform in a decision-driven tycoon game.",
   tpt:"https://www.teacherspayteachers.com/Product/Industrial-Revolution-Game-Factory-Tycoon-Simulation-6th-8th-Grade-History-15316159"},
  {slug:"viking-camp-3d-the-voyage-west", tag:"3D Exploration Game", title:"Viking Camp 3D: The Voyage West",
   blurb:"Explore a Viking camp in full 3D, earn wisdom at fact stations, then command a longship voyage west.",
   tpt:"https://www.teacherspayteachers.com/Product/Vikings-3D-Exploration-Game-Viking-Camp-and-Longship-Voyage-Simulation-16914166"},
  {slug:"credit-debt-mastery-simulator", tag:"Financial Literacy Sim", title:"Credit & Debt Simulator",
   blurb:"Take out loans, watch a credit score move in real time, and race to pay off debt in this hands-on money game.",
   tpt:"https://www.teacherspayteachers.com/Product/Credit-and-Debt-Simulator-Credit-Score-Loans-and-Payoff-Game-16638167"},
  {slug:"marco-polo-life-and-travels-3d-map", tag:"3D Map + Timeline", title:"Marco Polo Interactive 3D Map",
   blurb:"Trace Marco Polo's journey across a rotating 3D relief map paired with a synchronized timeline.",
   tpt:"https://www.teacherspayteachers.com/Product/Marco-Polo-Interactive-3D-Map-Timeline-World-History-Activity-16530624"},
  {slug:"1929-crash-investigation-lab", tag:"Investigation Lab", title:"1929 Crash Investigation Lab",
   blurb:"Play investigator: sift the evidence and primary sources to explain what really triggered the Great Crash.",
   tpt:"https://www.teacherspayteachers.com/Product/1929-Crash-Investigation-Lab-16151751"},
  {slug:"riverside-coffee-cart-economics-simulation", tag:"Economics Simulation", title:"Riverside Coffee Cart Economics Sim",
   blurb:"Set prices, juggle supply and demand, and feel opportunity cost by running a small business day by day.",
   tpt:"https://www.teacherspayteachers.com/Product/Economics-Simulation-Game-Supply-Demand-Opportunity-Cost-Business-Sim-16569358"},
  {slug:"dust-bowl-digital-dbq", tag:"Digital DBQ", title:"Dust Bowl Digital DBQ",
   blurb:"Analyze photographs, letters, and data, then build an evidence-based essay in this interactive Document-Based Question.",
   tpt:"https://www.teacherspayteachers.com/Product/Dust-Bowl-Digital-DBQ-Primary-Sources-Document-Analysis-Essay-16226529"},
  {slug:"world-war-ii-animated-history-timeline", tag:"Animated Timeline", title:"World War II Animated Timeline",
   blurb:"Scroll through 11 major events of World War II in an animated, illustrated timeline experience.",
   tpt:"https://www.teacherspayteachers.com/Product/World-War-II-Animated-History-Timeline-11-Major-Events-Interactive-Scroll-Expe-15665925"},
  {slug:"leonardo-da-vinci-interactive-biography", tag:"Interactive Biography", title:"Leonardo da Vinci Biography",
   blurb:"Explore the Renaissance genius through an interactive timeline, a travel map, and a tour of his inventions and art.",
   tpt:"https://www.teacherspayteachers.com/Product/Leonardo-da-Vinci-Biography-Renaissance-Inventor-and-Artist-Grades-5-9-16311521"},
  {slug:"marie-curie-interactive-biography", tag:"Women in STEM", title:"Marie Curie Biography",
   blurb:"Follow the two-time Nobel laureate's life and discoveries in an interactive Women-in-STEM biography.",
   tpt:"https://www.teacherspayteachers.com/Product/Marie-Curie-Interactive-Biography-Women-in-STEM-Physics-Activity-16311474"}
];

const FREEMAPS = [
  {slug:"california-gold-rush-free-map", title:"California Gold Rush Map",
   blurb:"Map the key sites of the 1849 Gold Rush.", tpt:STORE},
  {slug:"ancient-greece-city-states-free-map", title:"Ancient Greece City-States Map",
   blurb:"Locate Athens, Sparta, and the major city-states.", tpt:STORE},
  {slug:"albert-einstein-life-locations-free-map", title:"Einstein Life Locations Map",
   blurb:"Trace the cities that shaped Einstein's life.", tpt:STORE},
  {slug:"beethoven-vienna-residences-free-map", title:"Beethoven's Vienna Map",
   blurb:"Walk through the Vienna homes where Beethoven composed.", tpt:STORE}
];

const BUNDLES = [
  {title:"Economics & Personal Finance Bundle", emoji:"💰",
   blurb:"Supply & demand game, budgeting activities, and more - the full economics toolkit.",
   tpt:"https://www.teacherspayteachers.com/Product/Economics-Personal-Finance-Bundle-Supply-Demand-Game-Budgeting-Activities-16483375"},
  {title:"Interactive Biography Bundle", emoji:"📚",
   blurb:"Timelines, maps, and quizzes for history's greatest lives. Grades 4-7.",
   tpt:"https://www.teacherspayteachers.com/Product/Biography-Bundle-Interactive-Reading-Timelines-Maps-Quizzes-Grades-4-7-16799631"},
  {title:"Cold War Activities Bundle", emoji:"🌍",
   blurb:"Interactive digital activities, study guides, and maps for the whole Cold War unit.",
   tpt:"https://www.teacherspayteachers.com/Product/Cold-War-Interactive-Digital-Activities-Study-Guides-Maps-Bundle-15581869"},
  {title:"Ancient Greece & Mythology Bundle", emoji:"🏛️",
   blurb:"Gods, city-states, and myths - a complete Ancient Greece companion set.",
   tpt:"https://www.teacherspayteachers.com/Product/Ancient-Greece-Greek-Mythology-Bundle-16298679"},
  {title:"Europe Geography Map Games Bundle", emoji:"🗺️",
   blurb:"France, Germany, Italy, Spain and more - interactive map games for all of Europe.",
   tpt:"https://www.teacherspayteachers.com/Product/Europe-Geography-Map-Games-Bundle-France-Germany-Italy-Spain-and-More-17094287"},
  {title:"ELA Mega Bundle", emoji:"✏️",
   blurb:"Grammar, vocabulary, and reading - interactive ELA activities in one mega pack.",
   tpt:"https://www.teacherspayteachers.com/Product/ELA-Mega-Bundle-Grammar-Vocabulary-Reading-Interactive-Activities-16798523"}
];
