// ⚛️ ATOMIX JAVASCRIPT

const elements = {
    H: {
        name: "Hydrogen",
        number: 1,
        mass: "1.008",
        symbol: "H",
        description: "Hydrogen is the lightest and most abundant element in the universe."
    },

    He: {
        name: "Helium",
        number: 2,
        mass: "4.003",
        symbol: "He",
        description: "Helium is a very light, non-reactive gas commonly used in balloons."
    },

    Li: {
        name: "Lithium",
        number: 3,
        mass: "6.94",
        symbol: "Li",
        description: "Lithium is a soft, silvery metal and is widely used in batteries."
    },

    Be: {
        name: "Beryllium",
        number: 4,
        mass: "9.012",
        symbol: "Be",
        description: "Beryllium is a lightweight, strong metal used in specialized materials."
    },

    B: {
        name: "Boron",
        number: 5,
        mass: "10.81",
        symbol: "B",
        description: "Boron is a metalloid used in glass, ceramics and other materials."
    },

    C: {
        name: "Carbon",
        number: 6,
        mass: "12.011",
        symbol: "C",
        description: "Carbon is an essential element found in all known forms of life."
    },

    N: {
        name: "Nitrogen",
        number: 7,
        mass: "14.007",
        symbol: "N",
        description: "Nitrogen is a major component of Earth's atmosphere."
    },

    O: {
        name: "Oxygen",
        number: 8,
        mass: "15.999",
        symbol: "O",
        description: "Oxygen is essential for respiration and supports combustion."
    },

    F: {
        name: "Fluorine",
        number: 9,
        mass: "18.998",
        symbol: "F",
        description: "Fluorine is a highly reactive halogen."
    },

    Ne: {
        name: "Neon",
        number: 10,
        mass: "20.180",
        symbol: "Ne",
        description: "Neon is a noble gas famous for its bright glow in signs."
    },
Na: {
    name: "Sodium",
    number: 11,
    mass: "22.990",
    symbol: "Na",
    description: "Sodium is a soft, reactive metal commonly found in salts."
},

Mg: {
    name: "Magnesium",
    number: 12,
    mass: "24.305",
    symbol: "Mg",
    description: "Magnesium is a lightweight metal used in alloys and many products."
},

Al: {
    name: "Aluminium",
    number: 13,
    mass: "26.982",
    symbol: "Al",
    description: "Aluminium is a lightweight metal widely used in construction and packaging."
},

Si: {
    name: "Silicon",
    number: 14,
    mass: "28.085",
    symbol: "Si",
    description: "Silicon is a metalloid important in electronics and computer chips."
},

P: {
    name: "Phosphorus",
    number: 15,
    mass: "30.974",
    symbol: "P",
    description: "Phosphorus is an important element found in living organisms."
},

S: {
    name: "Sulfur",
    number: 16,
    mass: "32.06",
    symbol: "S",
    description: "Sulfur is a yellow nonmetal used in many industrial processes."
},

Cl: {
    name: "Chlorine",
    number: 17,
    mass: "35.45",
    symbol: "Cl",
    description: "Chlorine is a reactive halogen used in water treatment and many compounds."
},

Ar: {
    name: "Argon",
    number: 18,
    mass: "39.948",
    symbol: "Ar",
    description: "Argon is a colorless, non-reactive noble gas."
},

K: {
    name: "Potassium",
    number: 19,
    mass: "39.098",
    symbol: "K",
    description: "Potassium is a soft, reactive metal important for living organisms."
},

Ca: {
    name: "Calcium",
    number: 20,
    mass: "40.078",
    symbol: "Ca",
    description: "Calcium is an important mineral found in bones and teeth."
},

Sc: {
    name: "Scandium",
    number: 21,
    mass: "44.956",
    symbol: "Sc",
    description: "Scandium is a transition metal used in specialized aluminium alloys."
},

Ti: {
    name: "Titanium",
    number: 22,
    mass: "47.867",
    symbol: "Ti",
    description: "Titanium is a strong, lightweight metal resistant to corrosion."
},

V: {
    name: "Vanadium",
    number: 23,
    mass: "50.942",
    symbol: "V",
    description: "Vanadium is a transition metal used to strengthen steel."
},

Cr: {
    name: "Chromium",
    number: 24,
    mass: "51.996",
    symbol: "Cr",
    description: "Chromium is a hard metal used in stainless steel and protective coatings."
},

Mn: {
    name: "Manganese",
    number: 25,
    mass: "54.938",
    symbol: "Mn",
    description: "Manganese is a metal commonly used in steel production."
},

Fe: {
    name: "Iron",
    number: 26,
    mass: "55.845",
    symbol: "Fe",
    description: "Iron is a strong metal widely used in construction and manufacturing."
},

Co: {
    name: "Cobalt",
    number: 27,
    mass: "58.933",
    symbol: "Co",
    description: "Cobalt is a transition metal used in batteries and special alloys."
},

Ni: {
    name: "Nickel",
    number: 28,
    mass: "58.693",
    symbol: "Ni",
    description: "Nickel is a corrosion-resistant metal used in alloys and coins."
},

Cu: {
    name: "Copper",
    number: 29,
    mass: "63.546",
    symbol: "Cu",
    description: "Copper is an excellent conductor of electricity and heat."
},

Zn: {
    name: "Zinc",
    number: 30,
    mass: "65.38",
    symbol: "Zn",
    description: "Zinc is a metal used for galvanizing steel and making alloys."
},
Ga: {
        name: "Gallium",
        number: 31,
        mass: "69.723",
        symbol: "Ga",
        description: "Gallium is a soft metal used mainly in semiconductors and electronics."
    },

    Ge: {
        name: "Germanium",
        number: 32,
        mass: "72.630",
        symbol: "Ge",
        description: "Germanium is a metalloid used in semiconductors and optical devices."
    },

    As: {
        name: "Arsenic",
        number: 33,
        mass: "74.922",
        symbol: "As",
        description: "Arsenic is a metalloid used in some industrial and semiconductor applications."
    },

    Se: {
        name: "Selenium",
        number: 34,
        mass: "78.971",
        symbol: "Se",
        description: "Selenium is a nonmetal used in electronics and glassmaking."
    },

    Br: {
        name: "Bromine",
        number: 35,
        mass: "79.904",
        symbol: "Br",
        description: "Bromine is a reddish-brown liquid halogen."
    },

    Kr: {
        name: "Krypton",
        number: 36,
        mass: "83.798",
        symbol: "Kr",
        description: "Krypton is a noble gas used in specialized lighting."
    },

    Rb: {
        name: "Rubidium",
        number: 37,
        mass: "85.468",
        symbol: "Rb",
        description: "Rubidium is a highly reactive alkali metal used in research."
    },

    Sr: {
        name: "Strontium",
        number: 38,
        mass: "87.62",
        symbol: "Sr",
        description: "Strontium is a reactive metal used in specialized materials."
    },

    Y: {
        name: "Yttrium",
        number: 39,
        mass: "88.906",
        symbol: "Y",
        description: "Yttrium is a transition metal used in electronics and advanced materials."
    },

    Zr: {
        name: "Zirconium",
        number: 40,
        mass: "91.224",
        symbol: "Zr",
        description: "Zirconium is a corrosion-resistant metal used in ceramics and nuclear technology."
    },

    Nb: {
        name: "Niobium",
        number: 41,
        mass: "92.906",
        symbol: "Nb",
        description: "Niobium is a transition metal used in strong alloys and superconducting materials."
    },

    Mo: {
        name: "Molybdenum",
        number: 42,
        mass: "95.95",
        symbol: "Mo",
        description: "Molybdenum is a strong metal used in high-temperature alloys."
    },

    Tc: {
        name: "Technetium",
        number: 43,
        mass: "98",
        symbol: "Tc",
        description: "Technetium is a radioactive element with no stable isotopes."
    },

    Ru: {
        name: "Ruthenium",
        number: 44,
        mass: "101.07",
        symbol: "Ru",
        description: "Ruthenium is a rare transition metal used in electronics and catalysts."
    },

    Rh: {
        name: "Rhodium",
        number: 45,
        mass: "102.91",
        symbol: "Rh",
        description: "Rhodium is a rare, highly reflective metal used in catalysts and coatings."
    },

    Pd: {
        name: "Palladium",
        number: 46,
        mass: "106.42",
        symbol: "Pd",
        description: "Palladium is a precious metal widely used in catalytic converters."
    },

    Ag: {
        name: "Silver",
        number: 47,
        mass: "107.87",
        symbol: "Ag",
        description: "Silver is a precious metal and an excellent conductor of electricity."
    },

    Cd: {
        name: "Cadmium",
        number: 48,
        mass: "112.41",
        symbol: "Cd",
        description: "Cadmium is a soft metal used in specialized batteries and coatings."
    },

    In: {
        name: "Indium",
        number: 49,
        mass: "114.82",
        symbol: "In",
        description: "Indium is a soft metal used in electronics and touchscreens."
    },

    Sn: {
        name: "Tin",
        number: 50,
        mass: "118.71",
        symbol: "Sn",
        description: "Tin is a soft metal used in solder and protective coatings."
    },

    Sb: {
        name: "Antimony",
        number: 51,
        mass: "121.76",
        symbol: "Sb",
        description: "Antimony is a metalloid used in alloys and flame-resistant materials."
    },

    Te: {
        name: "Tellurium",
        number: 52,
        mass: "127.60",
        symbol: "Te",
        description: "Tellurium is a metalloid used in alloys and some solar technologies."
    },

    I: {
        name: "Iodine",
        number: 53,
        mass: "126.90",
        symbol: "I",
        description: "Iodine is a halogen essential in small amounts for human health."
    },

    Xe: {
        name: "Xenon",
        number: 54,
        mass: "131.29",
        symbol: "Xe",
        description: "Xenon is a noble gas used in specialized lamps and scientific equipment."
    },

    Cs: {
        name: "Caesium",
        number: 55,
        mass: "132.91",
        symbol: "Cs",
        description: "Caesium is a highly reactive alkali metal used in precision timekeeping."
    },

    Ba: {
        name: "Barium",
        number: 56,
        mass: "137.33",
        symbol: "Ba",
        description: "Barium is a reactive metal used in specialized compounds and materials."
    },

    La: {
        name: "Lanthanum",
        number: 57,
        mass: "138.91",
        symbol: "La",
        description: "Lanthanum is a rare-earth element used in optical glass and batteries."
    },

    Ce: {
        name: "Cerium",
        number: 58,
        mass: "140.12",
        symbol: "Ce",
        description: "Cerium is a rare-earth metal used in catalysts and polishing materials."
    },

    Pr: {
        name: "Praseodymium",
        number: 59,
        mass: "140.91",
        symbol: "Pr",
        description: "Praseodymium is a rare-earth element used in magnets and specialized glass."
    },

    Nd: {
        name: "Neodymium",
        number: 60,
        mass: "144.24",
        symbol: "Nd",
        description: "Neodymium is a rare-earth metal used to make powerful permanent magnets."
    },
Pm: {
        name: "Promethium",
        number: 61,
        mass: "(145)",
        symbol: "Pm",
        description: "Promethium is a radioactive rare-earth element."
    },

    Sm: {
        name: "Samarium",
        number: 62,
        mass: "150.36",
        symbol: "Sm",
        description: "Samarium is a rare-earth metal used in magnets and specialized applications."
    },

    Eu: {
        name: "Europium",
        number: 63,
        mass: "151.96",
        symbol: "Eu",
        description: "Europium is a rare-earth element used in phosphors and display technologies."
    },

    Gd: {
        name: "Gadolinium",
        number: 64,
        mass: "157.25",
        symbol: "Gd",
        description: "Gadolinium is a rare-earth metal with useful magnetic properties."
    },

    Tb: {
        name: "Terbium",
        number: 65,
        mass: "158.93",
        symbol: "Tb",
        description: "Terbium is a rare-earth element used in phosphors and electronic materials."
    },

    Dy: {
        name: "Dysprosium",
        number: 66,
        mass: "162.50",
        symbol: "Dy",
        description: "Dysprosium is a rare-earth metal used in high-performance magnets."
    },

    Ho: {
        name: "Holmium",
        number: 67,
        mass: "164.93",
        symbol: "Ho",
        description: "Holmium is a rare-earth element with strong magnetic properties."
    },

    Er: {
        name: "Erbium",
        number: 68,
        mass: "167.26",
        symbol: "Er",
        description: "Erbium is a rare-earth element used in optical fiber technology."
    },

    Tm: {
        name: "Thulium",
        number: 69,
        mass: "168.93",
        symbol: "Tm",
        description: "Thulium is one of the rarest naturally occurring rare-earth elements."
    },

    Yb: {
        name: "Ytterbium",
        number: 70,
        mass: "173.05",
        symbol: "Yb",
        description: "Ytterbium is a rare-earth element used in specialized lasers and materials."
    },

    Lu: {
        name: "Lutetium",
        number: 71,
        mass: "174.97",
        symbol: "Lu",
        description: "Lutetium is a dense rare-earth metal used in specialized applications."
    },

    Hf: {
        name: "Hafnium",
        number: 72,
        mass: "178.49",
        symbol: "Hf",
        description: "Hafnium is a corrosion-resistant metal used in high-temperature applications."
    },

    Ta: {
        name: "Tantalum",
        number: 73,
        mass: "180.95",
        symbol: "Ta",
        description: "Tantalum is a corrosion-resistant metal used in electronic components."
    },

    W: {
        name: "Tungsten",
        number: 74,
        mass: "183.84",
        symbol: "W",
        description: "Tungsten has an extremely high melting point and is used in specialized alloys."
    },

    Re: {
        name: "Rhenium",
        number: 75,
        mass: "186.21",
        symbol: "Re",
        description: "Rhenium is a rare metal used in high-temperature superalloys."
    },

    Os: {
        name: "Osmium",
        number: 76,
        mass: "190.23",
        symbol: "Os",
        description: "Osmium is an extremely dense transition metal."
    },

    Ir: {
        name: "Iridium",
        number: 77,
        mass: "192.22",
        symbol: "Ir",
        description: "Iridium is a very dense and corrosion-resistant precious metal."
    },

    Pt: {
        name: "Platinum",
        number: 78,
        mass: "195.08",
        symbol: "Pt",
        description: "Platinum is a valuable metal widely used in catalysts and jewelry."
    },

    Au: {
        name: "Gold",
        number: 79,
        mass: "196.97",
        symbol: "Au",
        description: "Gold is a precious, corrosion-resistant metal used in jewelry and electronics."
    },

    Hg: {
        name: "Mercury",
        number: 80,
        mass: "200.59",
        symbol: "Hg",
        description: "Mercury is a metal that is liquid at room temperature."
    },

    Tl: {
        name: "Thallium",
        number: 81,
        mass: "204.38",
        symbol: "Tl",
        description: "Thallium is a soft metal used in some specialized technologies."
    },

    Pb: {
        name: "Lead",
        number: 82,
        mass: "207.2",
        symbol: "Pb",
        description: "Lead is a dense metal historically used in batteries and radiation shielding."
    },

    Bi: {
        name: "Bismuth",
        number: 83,
        mass: "208.98",
        symbol: "Bi",
        description: "Bismuth is a heavy metal with relatively low toxicity compared with many heavy metals."
    },

    Po: {
        name: "Polonium",
        number: 84,
        mass: "209",
        symbol: "Po",
        description: "Polonium is a rare and highly radioactive element."
    },

    At: {
        name: "Astatine",
        number: 85,
        mass: "210",
        symbol: "At",
        description: "Astatine is a very rare and radioactive halogen."
    },

    Rn: {
        name: "Radon",
        number: 86,
        mass: "222",
        symbol: "Rn",
        description: "Radon is a radioactive noble gas produced naturally from radioactive decay."
    },

    Fr: {
        name: "Francium",
        number: 87,
        mass: "223",
        symbol: "Fr",
        description: "Francium is an extremely rare and highly radioactive alkali metal."
    },

    Ra: {
        name: "Radium",
        number: 88,
        mass: "226",
        symbol: "Ra",
        description: "Radium is a radioactive alkaline-earth metal."
    },

    Ac: {
        name: "Actinium",
        number: 89,
        mass: "227",
        symbol: "Ac",
        description: "Actinium is a radioactive element and the first member of the actinide series."
    },

    Th: {
        name: "Thorium",
        number: 90,
        mass: "232.04",
        symbol: "Th",
        description: "Thorium is a naturally radioactive metal found in Earth's crust."
    },
Pa: {
        name: "Protactinium",
        number: 91,
        mass: "231.04",
        symbol: "Pa",
        description: "Protactinium is a rare radioactive actinide element."
    },

    U: {
        name: "Uranium",
        number: 92,
        mass: "238.03",
        symbol: "U",
        description: "Uranium is a naturally radioactive metal used as a source of nuclear energy."
    },

    Np: {
        name: "Neptunium",
        number: 93,
        mass: "(237)",
        symbol: "Np",
        description: "Neptunium is a radioactive actinide element."
    },

    Pu: {
        name: "Plutonium",
        number: 94,
        mass: "(244)",
        symbol: "Pu",
        description: "Plutonium is a radioactive actinide element."
    },

    Am: {
        name: "Americium",
        number: 95,
        mass: "(243)",
        symbol: "Am",
        description: "Americium is a radioactive actinide element used in some detectors."
    },

    Cm: {
        name: "Curium",
        number: 96,
        mass: "(247)",
        symbol: "Cm",
        description: "Curium is a synthetic radioactive actinide element."
    },

    Bk: {
        name: "Berkelium",
        number: 97,
        mass: "(247)",
        symbol: "Bk",
        description: "Berkelium is a synthetic radioactive actinide element."
    },

    Cf: {
        name: "Californium",
        number: 98,
        mass: "(251)",
        symbol: "Cf",
        description: "Californium is a synthetic radioactive element used in specialized research."
    },

    Es: {
        name: "Einsteinium",
        number: 99,
        mass: "(252)",
        symbol: "Es",
        description: "Einsteinium is a synthetic radioactive actinide element."
    },

    Fm: {
        name: "Fermium",
        number: 100,
        mass: "(257)",
        symbol: "Fm",
        description: "Fermium is a synthetic radioactive actinide element."
    },

    Md: {
        name: "Mendelevium",
        number: 101,
        mass: "(258)",
        symbol: "Md",
        description: "Mendelevium is a synthetic radioactive actinide element."
    },

    No: {
        name: "Nobelium",
        number: 102,
        mass: "(259)",
        symbol: "No",
        description: "Nobelium is a synthetic radioactive actinide element."
    },

    Lr: {
        name: "Lawrencium",
        number: 103,
        mass: "(266)",
        symbol: "Lr",
        description: "Lawrencium is a synthetic radioactive actinide element."
    },

    Rf: {
        name: "Rutherfordium",
        number: 104,
        mass: "267",
        symbol: "Rf",
        description: "Rutherfordium is a synthetic radioactive element."
    },

    Db: {
        name: "Dubnium",
        number: 105,
        mass: "268",
        symbol: "Db",
        description: "Dubnium is a synthetic radioactive element."
    },

    Sg: {
        name: "Seaborgium",
        number: 106,
        mass: "269",
        symbol: "Sg",
        description: "Seaborgium is a synthetic radioactive element."
    },

    Bh: {
        name: "Bohrium",
        number: 107,
        mass: "270",
        symbol: "Bh",
        description: "Bohrium is a synthetic radioactive element."
    },

    Hs: {
        name: "Hassium",
        number: 108,
        mass: "277",
        symbol: "Hs",
        description: "Hassium is a synthetic radioactive element."
    },

    Mt: {
        name: "Meitnerium",
        number: 109,
        mass: "278",
        symbol: "Mt",
        description: "Meitnerium is a synthetic radioactive element."
    },

    Ds: {
        name: "Darmstadtium",
        number: 110,
        mass: "281",
        symbol: "Ds",
        description: "Darmstadtium is a synthetic radioactive element."
    },

    Rg: {
        name: "Roentgenium",
        number: 111,
        mass: "282",
        symbol: "Rg",
        description: "Roentgenium is a synthetic radioactive element."
    },

    Cn: {
        name: "Copernicium",
        number: 112,
        mass: "285",
        symbol: "Cn",
        description: "Copernicium is a synthetic radioactive element."
    },

    Nh: {
        name: "Nihonium",
        number: 113,
        mass: "286",
        symbol: "Nh",
        description: "Nihonium is a synthetic radioactive element."
    },

    Fl: {
        name: "Flerovium",
        number: 114,
        mass: "289",
        symbol: "Fl",
        description: "Flerovium is a synthetic radioactive element."
    },

    Mc: {
        name: "Moscovium",
        number: 115,
        mass: "290",
        symbol: "Mc",
        description: "Moscovium is a synthetic radioactive element."
    },

    Lv: {
        name: "Livermorium",
        number: 116,
        mass: "293",
        symbol: "Lv",
        description: "Livermorium is a synthetic radioactive element."
    },

    Ts: {
        name: "Tennessine",
        number: 117,
        mass: "294",
        symbol: "Ts",
        description: "Tennessine is a synthetic radioactive halogen."
    },

    Og: {
        name: "Oganesson",
        number: 118,
        mass: "294",
        symbol: "Og",
        description: "Oganesson is a synthetic radioactive element in the noble gas group."
    }
};
// =====================================================
// EXTRA ELEMENT INFORMATION
// =====================================================

const elementSpecifications = {

    H: {
        state: "Gas",
        naturalForm: "Mostly found combined with other elements, especially in water and organic compounds.",
        sources: "Water, natural gas and organic compounds.",
        uses: "Chemical production, fuel research and industrial processes."
    },

    He: {
        state: "Gas",
        naturalForm: "Found in trace amounts in Earth's atmosphere and trapped underground in some natural-gas deposits.",
        sources: "Natural-gas deposits and the decay of radioactive elements.",
        uses: "Cryogenics, scientific equipment and specialized balloons."
    },

    Li: {
        state: "Solid",
        naturalForm: "Found mainly in minerals and salts rather than as free metal.",
        sources: "Lithium-bearing minerals and brines.",
        uses: "Rechargeable batteries, ceramics and specialized alloys."
    },

    Be: {
        state: "Solid",
        naturalForm: "Found combined in minerals; not normally found as free metal in nature.",
        sources: "Beryl and bertrandite minerals.",
        uses: "Aerospace materials, specialized alloys and scientific instruments."
    },

    B: {
        state: "Solid",
        naturalForm: "Found combined in minerals and borate compounds.",
        sources: "Borax, kernite and other borate minerals.",
        uses: "Glass, ceramics, detergents and specialized materials."
    },

    C: {
        state: "Solid",
        naturalForm: "Found both in elemental forms and combined in countless compounds.",
        sources: "Graphite, diamond, carbonates, fossil fuels and living organisms.",
        uses: "Steel production, fuels, electronics and many organic materials."
    },

    N: {
        state: "Gas",
        naturalForm: "Exists mainly as nitrogen gas (N₂) in Earth's atmosphere.",
        sources: "Atmosphere, soil and living organisms.",
        uses: "Fertilizers, food preservation and chemical manufacturing."
    },

    O: {
        state: "Gas",
        naturalForm: "Exists mainly as oxygen gas (O₂) in the atmosphere and combined in compounds.",
        sources: "Atmosphere, water and minerals.",
        uses: "Respiration, steelmaking, medicine and chemical processes."
    },

    F: {
        state: "Gas",
        naturalForm: "Not normally found as free fluorine because it is extremely reactive; found in minerals as fluoride.",
        sources: "Fluorite and other fluoride minerals.",
        uses: "Fluorochemicals, specialized materials and chemical manufacturing."
    },

    Ne: {
        state: "Gas",
        naturalForm: "Exists as a free noble gas in very small amounts in Earth's atmosphere.",
        sources: "Atmospheric air.",
        uses: "Signs, lighting and specialized scientific equipment."
    },

    Na: {
        state: "Solid",
        naturalForm: "Not normally found as free metal; mainly occurs as ions in salts and minerals.",
        sources: "Seawater, rock salt and sodium-containing minerals.",
        uses: "Chemical manufacturing, heat-transfer systems and sodium compounds."
    },

    Mg: {
        state: "Solid",
        naturalForm: "Usually found combined in minerals and seawater rather than as free metal.",
        sources: "Magnesite, dolomite and seawater.",
        uses: "Lightweight alloys, fireworks and chemical production."
    },

    Al: {
        state: "Solid",
        naturalForm: "Found combined in minerals and ores; rarely occurs as free metal naturally.",
        sources: "Bauxite and aluminium-containing minerals.",
        uses: "Aircraft, construction, packaging and electrical applications."
    },

    Si: {
        state: "Solid",
        naturalForm: "Found mainly combined with oxygen and other elements in minerals.",
        sources: "Quartz, sand and silicate minerals.",
        uses: "Computer chips, solar cells, glass and ceramics."
    },

    P: {
        state: "Solid",
        naturalForm: "Found mainly in phosphate minerals and biological compounds.",
        sources: "Phosphate rocks and living organisms.",
        uses: "Fertilizers, chemicals and biological processes."
    },

    S: {
        state: "Solid",
        naturalForm: "Can occur as native sulfur and is also found in many minerals and compounds.",
        sources: "Volcanic regions, sulfide minerals and petroleum deposits.",
        uses: "Sulfuric acid production, fertilizers and rubber processing."
    },

    Cl: {
        state: "Gas",
        naturalForm: "Not normally found as free chlorine; mainly occurs as chloride ions in salts.",
        sources: "Seawater, rock salt and chloride minerals.",
        uses: "Water treatment, PVC production and chemical manufacturing."
    },

    Ar: {
        state: "Gas",
        naturalForm: "Exists as a free noble gas in Earth's atmosphere.",
        sources: "Atmospheric air.",
        uses: "Welding, lighting and laboratory applications."
    },

    K: {
        state: "Solid",
        naturalForm: "Not normally found as free metal; occurs mainly in minerals and salts.",
        sources: "Potassium minerals and agricultural soils.",
        uses: "Fertilizers, chemical production and specialized applications."
    },

    Ca: {
        state: "Solid",
        naturalForm: "Found mainly in minerals and compounds rather than as free metal.",
        sources: "Limestone, gypsum, calcite and other minerals.",
        uses: "Cement, construction materials and metallurgy."
    },

Sc: {
state: "Solid",
naturalForm: "Found mainly combined in minerals rather than as free metal.",
sources: "Thortveitite and other rare-earth-containing minerals.",
uses: "Specialized aluminium alloys, lighting and research."
},

Ti: {
    state: "Solid",
    naturalForm: "Found combined in minerals and ores.",
    sources: "Rutile and ilmenite ores.",
    uses: "Strong lightweight alloys, aircraft and medical implants."
},

V: {
    state: "Solid",
    naturalForm: "Found combined in minerals and ores.",
    sources: "Vanadinite, magnetite and other vanadium-bearing ores.",
    uses: "Steel alloys, tools and chemical catalysts."
},

Cr: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals.",
    sources: "Chromite ore.",
    uses: "Stainless steel, protective coatings and pigments."
},

Mn: {
    state: "Solid",
    naturalForm: "Found combined in minerals and ores.",
    sources: "Pyrolusite and other manganese ores.",
    uses: "Steel production, batteries and chemical processes."
},

Fe: {
    state: "Solid",
    naturalForm: "Found in minerals and ores; native iron is uncommon on Earth.",
    sources: "Hematite, magnetite and other iron ores.",
    uses: "Steel production, construction, machinery and tools."
},

Co: {
    state: "Solid",
    naturalForm: "Found combined with other elements in mineral ores.",
    sources: "Cobalt-bearing copper and nickel ores.",
    uses: "Specialized alloys, batteries and pigments."
},

Ni: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals and ores.",
    sources: "Nickel sulfide ores and laterite ores.",
    uses: "Stainless steel, alloys, batteries and protective coatings."
},

Cu: {
    state: "Solid",
    naturalForm: "Can occur as native copper and is also found in minerals.",
    sources: "Chalcopyrite, bornite and other copper ores.",
    uses: "Electrical wiring, electronics, plumbing and alloys."
},

Zn: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals rather than as free metal.",
    sources: "Sphalerite and other zinc ores.",
    uses: "Galvanizing steel, alloys, batteries and chemical products."
},

Ga: {
state: "Solid",
naturalForm: "Found mainly combined in minerals and ores.",
sources: "Bauxite, sphalerite and other mineral ores.",
uses: "Semiconductors, LEDs and specialized electronic materials."
},

Ge: {
    state: "Solid",
    naturalForm: "Found combined in minerals and ores.",
    sources: "Sphalerite, germanite and zinc ores.",
    uses: "Fiber-optic systems, semiconductors and infrared optics."
},

As: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals and ores.",
    sources: "Arsenopyrite and other arsenic-bearing minerals.",
    uses: "Semiconductors, specialized alloys and industrial materials."
},

Se: {
    state: "Solid",
    naturalForm: "Found mainly combined with other elements in minerals.",
    sources: "Metal sulfide ores and copper refining byproducts.",
    uses: "Glassmaking, electronics and solar-cell technology."
},

Br: {
    state: "Liquid",
    naturalForm: "Occurs naturally mainly as bromide compounds and salts.",
    sources: "Seawater, salt lakes and underground brine deposits.",
    uses: "Flame-retardant materials, chemical manufacturing and photography."
},

Kr: {
    state: "Gas",
    naturalForm: "Exists as a trace noble gas in Earth's atmosphere.",
    sources: "Atmospheric air.",
    uses: "Specialized lighting, lasers and scientific applications."
},

Rb: {
    state: "Solid",
    naturalForm: "Found combined in minerals and does not normally occur as free metal in nature.",
    sources: "Pollucite and other potassium-containing minerals.",
    uses: "Scientific research, specialized electronics and atomic clocks."
},

Sr: {
    state: "Solid",
    naturalForm: "Found combined in minerals rather than as free metal.",
    sources: "Celestine and strontianite minerals.",
    uses: "Specialized ceramics, glass and red-colored pyrotechnic effects."
},

Y: {
    state: "Solid",
    naturalForm: "Found combined in rare-earth minerals.",
    sources: "Xenotime and other rare-earth minerals.",
    uses: "LEDs, lasers, ceramics and specialized alloys."
},

Zr: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals and ores.",
    sources: "Zircon and baddeleyite.",
    uses: "Nuclear reactors, ceramics and corrosion-resistant materials."
},

Nb: {
    state: "Solid",
    naturalForm: "Found combined in mineral ores.",
    sources: "Columbite and pyrochlore ores.",
    uses: "Specialized steel alloys, superconducting materials and electronics."
},

Mo: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals and ores.",
    sources: "Molybdenite and other molybdenum-bearing ores.",
    uses: "Steel alloys, catalysts and high-temperature materials."
},

Tc: {
    state: "Solid",
    naturalForm: "A radioactive element produced naturally in tiny amounts and artificially in larger amounts.",
    sources: "Nuclear reactions and radioactive decay processes.",
    uses: "Medical imaging and scientific research."
},

Ru: {
    state: "Solid",
    naturalForm: "Found mainly combined with other platinum-group metals in ores.",
    sources: "Platinum-group metal ores.",
    uses: "Electrical contacts, catalysts and specialized alloys."
},

Rh: {
    state: "Solid",
    naturalForm: "Found mainly with other platinum-group metals in mineral ores.",
    sources: "Platinum and nickel ores.",
    uses: "Automobile catalysts, coatings and specialized alloys."
},

Pd: {
    state: "Solid",
    naturalForm: "Found mainly associated with other platinum-group metals.",
    sources: "Nickel, copper and platinum-group metal ores.",
    uses: "Catalytic converters, electronics and jewelry."
},

Ag: {
    state: "Solid",
    naturalForm: "Can occur as native silver and is also found in mineral ores.",
    sources: "Silver ores and ores of lead, zinc and copper.",
    uses: "Jewelry, electronics, electrical contacts and mirrors."
},

Cd: {
    state: "Solid",
    naturalForm: "Found mainly as a byproduct of zinc and lead mining.",
    sources: "Sphalerite and other zinc ores.",
    uses: "Specialized batteries, pigments and protective coatings."
},

In: {
    state: "Solid",
    naturalForm: "Found in trace amounts in zinc and other metal ores.",
    sources: "Sphalerite and zinc-processing residues.",
    uses: "Touchscreens, semiconductors and electronic materials."
},

Sn: {
    state: "Solid",
    naturalForm: "Found mainly in minerals and ores.",
    sources: "Cassiterite and tin-bearing deposits.",
    uses: "Solder, protective coatings and alloys."
},

Sb: {
    state: "Solid",
    naturalForm: "Found mainly combined in minerals.",
    sources: "Stibnite and other antimony ores.",
    uses: "Flame-retardant materials, alloys and specialized electronics."
},

Te: {
    state: "Solid",
    naturalForm: "Found mainly as a minor component of metal ores.",
    sources: "Copper and lead refining byproducts.",
    uses: "Solar cells, thermoelectric materials and specialized alloys."
},

I: {
    state: "Solid",
    naturalForm: "Occurs mainly as iodide and iodate compounds in nature.",
    sources: "Seawater, brines and iodine-containing minerals.",
    uses: "Chemical manufacturing, laboratory applications and specialized materials."
},

Xe: {
    state: "Gas",
    naturalForm: "Exists as a very small amount of noble gas in Earth's atmosphere.",
    sources: "Atmospheric air.",
    uses: "Specialized lamps, ion propulsion research and scientific instruments."
},

Cs: {
        state: "Solid",
        naturalForm: "Found combined with other elements in minerals.",
        sources: "Pollucite and other cesium-bearing minerals.",
        uses: "Atomic clocks, scientific research and specialized electronics."
    },

    Ba: {
        state: "Solid",
        naturalForm: "Found mainly combined in minerals.",
        sources: "Barite and witherite.",
        uses: "Drilling fluids, glassmaking and specialized chemical applications."
    },

    La: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements in minerals.",
        sources: "Monazite and bastnasite.",
        uses: "Specialized glass, catalysts and electronic materials."
    },

    Ce: {
        state: "Solid",
        naturalForm: "Found mainly in rare-earth minerals.",
        sources: "Monazite and bastnasite.",
        uses: "Glass polishing, catalysts and lighter flints."
    },

    Pr: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements.",
        sources: "Monazite and bastnasite.",
        uses: "Specialized magnets, glass and alloys."
    },

    Nd: {
        state: "Solid",
        naturalForm: "Found mainly in rare-earth minerals.",
        sources: "Monazite and bastnasite.",
        uses: "Powerful permanent magnets, lasers and specialized glass."
    },

    Pm: {
        state: "Solid",
        naturalForm: "A radioactive rare-earth element produced mainly artificially.",
        sources: "Produced in nuclear reactors.",
        uses: "Specialized scientific research and nuclear batteries."
    },

    Sm: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements in minerals.",
        sources: "Monazite and bastnasite.",
        uses: "Magnets, lasers and specialized materials."
    },

    Eu: {
        state: "Solid",
        naturalForm: "Found in small amounts in rare-earth minerals.",
        sources: "Monazite and bastnasite.",
        uses: "Phosphors, displays and specialized lighting."
    },

    Gd: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements.",
        sources: "Monazite and bastnasite.",
        uses: "Magnets, scientific equipment and specialized materials."
    },

    Tb: {
        state: "Solid",
        naturalForm: "Found mainly in rare-earth minerals.",
        sources: "Monazite and xenotime.",
        uses: "Phosphors, electronic devices and specialized alloys."
    },

    Dy: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements.",
        sources: "Xenotime and other rare-earth minerals.",
        uses: "Permanent magnets, lasers and specialized materials."
    },

    Ho: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements.",
        sources: "Monazite and xenotime.",
        uses: "Lasers, magnets and scientific research."
    },

    Er: {
        state: "Solid",
        naturalForm: "Found mainly in rare-earth minerals.",
        sources: "Xenotime and other rare-earth minerals.",
        uses: "Fiber-optic communication, lasers and glass coloring."
    },

    Tm: {
        state: "Solid",
        naturalForm: "Found in very small amounts in rare-earth minerals.",
        sources: "Monazite and xenotime.",
        uses: "Lasers, portable X-ray equipment and research."
    },

    Yb: {
        state: "Solid",
        naturalForm: "Found combined with other rare-earth elements.",
        sources: "Monazite and xenotime.",
        uses: "Lasers, specialized alloys and scientific research."
    },

    Lu: {
        state: "Solid",
        naturalForm: "Found mainly in rare-earth minerals.",
        sources: "Monazite and xenotime.",
        uses: "Medical imaging research, catalysts and specialized materials."
    },

Hf: {
        state: "Solid",
        naturalForm: "Found combined with zirconium in minerals.",
        sources: "Zircon and hafnium-bearing minerals.",
        uses: "Nuclear reactor control rods, alloys and specialized electronics."
    },

    Ta: {
        state: "Solid",
        naturalForm: "Found mainly combined in minerals.",
        sources: "Tantalite and columbite minerals.",
        uses: "Electronic capacitors, surgical equipment and corrosion-resistant alloys."
    },

    W: {
        state: "Solid",
        naturalForm: "Found combined in minerals rather than as free metal.",
        sources: "Wolframite and scheelite.",
        uses: "Cutting tools, high-temperature materials and electrical applications."
    },

    Re: {
        state: "Solid",
        naturalForm: "Found in very small amounts, often associated with molybdenum ores.",
        sources: "Molybdenite and copper-molybdenum ores.",
        uses: "Jet-engine alloys, catalysts and high-temperature materials."
    },

    Os: {
        state: "Solid",
        naturalForm: "Found mainly with other platinum-group metals.",
        sources: "Platinum-group metal ores.",
        uses: "Specialized alloys, electrical contacts and scientific instruments."
    },

    Ir: {
        state: "Solid",
        naturalForm: "Found mainly combined with other platinum-group metals.",
        sources: "Platinum and nickel ores.",
        uses: "Spark plugs, specialized alloys and laboratory equipment."
    },

    Pt: {
        state: "Solid",
        naturalForm: "Occurs naturally in native form and in platinum-group mineral deposits.",
        sources: "Platinum-group metal ores.",
        uses: "Catalytic converters, jewelry, laboratory equipment and electronics."
    },

    Au: {
        state: "Solid",
        naturalForm: "Can occur naturally as native metal.",
        sources: "Gold-bearing rocks, veins and alluvial deposits.",
        uses: "Jewelry, electronics, scientific equipment and finance."
    },

    Hg: {
        state: "Liquid",
        naturalForm: "Found mainly combined in minerals.",
        sources: "Cinnabar and mercury-bearing ores.",
        uses: "Scientific instruments, lamps and specialized industrial applications."
    },

    Tl: {
        state: "Solid",
        naturalForm: "Found in trace amounts in minerals and metal ores.",
        sources: "Sulfide ores of copper, lead and zinc.",
        uses: "Specialized electronics, optical materials and scientific research."
    },

    Pb: {
        state: "Solid",
        naturalForm: "Found mainly combined in minerals.",
        sources: "Galena and other lead ores.",
        uses: "Batteries, radiation shielding and specialized alloys."
    },

    Bi: {
        state: "Solid",
        naturalForm: "Can occur naturally as native bismuth and in minerals.",
        sources: "Bismuthinite and lead ores.",
        uses: "Specialized alloys, electronics and industrial materials."
    },

    Po: {
        state: "Solid",
        naturalForm: "Occurs naturally only in extremely small amounts as a radioactive decay product.",
        sources: "Uranium and thorium decay chains.",
        uses: "Specialized scientific research and radiation sources."
    },

    At: {
        state: "Solid",
        naturalForm: "A highly radioactive element produced naturally only in tiny amounts.",
        sources: "Radioactive decay of uranium and thorium.",
        uses: "Scientific research."
    },

    Rn: {
        state: "Gas",
        naturalForm: "A radioactive noble gas produced naturally by radioactive decay.",
        sources: "Decay of uranium and radium in rocks and soil.",
        uses: "Scientific research."
    },

Fr: {
        state: "Solid",
        naturalForm: "A highly radioactive element found naturally only in extremely small amounts.",
        sources: "Radioactive decay of actinium.",
        uses: "Scientific research."
    },

    Ra: {
        state: "Solid",
        naturalForm: "A radioactive alkaline-earth metal found in tiny amounts in uranium ores.",
        sources: "Uranium and radium-bearing minerals.",
        uses: "Scientific research and specialized radiation studies."
    },

    Ac: {
        state: "Solid",
        naturalForm: "A radioactive metal found naturally in trace amounts.",
        sources: "Uranium ores and radioactive decay chains.",
        uses: "Scientific research and specialized nuclear applications."
    },

    Th: {
        state: "Solid",
        naturalForm: "A naturally occurring radioactive metal found in minerals.",
        sources: "Monazite and thorium-bearing minerals.",
        uses: "Nuclear research, specialized alloys and scientific applications."
    },

    Pa: {
        state: "Solid",
        naturalForm: "A rare radioactive element occurring naturally in trace amounts.",
        sources: "Uranium ores.",
        uses: "Scientific and nuclear research."
    },

    U: {
        state: "Solid",
        naturalForm: "A naturally occurring radioactive metal found in minerals.",
        sources: "Uranium ores such as uraninite.",
        uses: "Nuclear energy, scientific research and specialized applications."
    },

    Np: {
        state: "Solid",
        naturalForm: "A radioactive actinide produced mainly artificially.",
        sources: "Produced in nuclear reactors; trace amounts occur naturally.",
        uses: "Scientific and nuclear research."
    },

    Pu: {
        state: "Solid",
        naturalForm: "A radioactive actinide produced mainly artificially.",
        sources: "Produced in nuclear reactors.",
        uses: "Nuclear research and specialized energy applications."
    },

    Am: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in nuclear reactors.",
        uses: "Smoke detectors and scientific research."
    },

    Cm: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in nuclear reactors and particle accelerators.",
        uses: "Scientific research and specialized radioisotope applications."
    },

    Bk: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in specialized nuclear facilities.",
        uses: "Scientific research."
    },

    Cf: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in nuclear reactors.",
        uses: "Neutron sources and scientific research."
    },

    Es: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in specialized nuclear facilities.",
        uses: "Scientific research."
    },

    Fm: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced through nuclear reactions.",
        uses: "Scientific research."
    },

    Md: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    No: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Lr: {
        state: "Solid",
        naturalForm: "A synthetic radioactive actinide.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Rf: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses:"Scientific research."
    },

    Db: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Sg: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Bh: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Hs: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Mt: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Ds: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Rg: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Cn: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Nh: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Fl: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Mc: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Lv: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Ts: {
        state: "Solid",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },

    Og: {
        state: "Gas",
        naturalForm: "A synthetic radioactive element produced artificially.",
        sources: "Produced in particle accelerators.",
        uses: "Scientific research."
    },
};

function showElement(symbol) {

const element = elements[symbol];

if (!element) return;

document.getElementById("elementName").textContent =
    element.name;

document.getElementById("elementDescription").textContent =
    element.description;

document.getElementById("atomicNumber").textContent =
    element.number;

document.getElementById("atomicMass").textContent =
    element.mass;

document.getElementById("protons").textContent =
    element.number;

document.getElementById("electrons").textContent =
    element.number;

document.getElementById("neutrons").textContent =
    Math.round(parseFloat(element.mass)) - element.number;


// =========================================
// ELEMENT SPECIFICATIONS
// =========================================

const spec = elementSpecifications[symbol];

if (spec) {

    document.getElementById("elementState").textContent =
        spec.state;

    document.getElementById("elementNaturalForm").textContent =
        spec.naturalForm;

    document.getElementById("elementSources").textContent =
        spec.sources;

    document.getElementById("elementUses").textContent =
        spec.uses;

} else {

    document.getElementById("elementState").textContent =
        "Not added yet";

    document.getElementById("elementNaturalForm").textContent =
        "Information not added yet.";

    document.getElementById("elementSources").textContent =
        "Not added yet";

    document.getElementById("elementUses").textContent =
        "Not added yet";
}


createAtom(element.number);


// =========================================
// ELECTRON DISTRIBUTION
// =========================================

const distribution = elementShells[element.symbol];

const distributionBox =
    document.getElementById("electronDistribution");

if (distributionBox && distribution) {

    distributionBox.innerHTML =
        distribution
            .map((electrons, index) =>
                `<div>⚡ Shell ${index + 1}: ${electrons} electron${electrons === 1 ? "" : "s"}</div>`
            )
            .join("");

} else if (distributionBox) {

    distributionBox.textContent =
        "Electron distribution not available.";
}




// =========================================
// CREATE ATOM
// =========================================

createAtom(element.number);

}

// ⚛️ ELECTRON SHELL DATA
// Format: [1st shell, 2nd shell, 3rd shell...]

const elementShells = {
    H:[1], He:[2],

    Li:[2,1], Be:[2,2], B:[2,3], C:[2,4],
    N:[2,5], O:[2,6], F:[2,7], Ne:[2,8],

    Na:[2,8,1], Mg:[2,8,2], Al:[2,8,3], Si:[2,8,4],
    P:[2,8,5], S:[2,8,6], Cl:[2,8,7], Ar:[2,8,8],

    K:[2,8,8,1], Ca:[2,8,8,2],
    Sc:[2,8,9,2], Ti:[2,8,10,2], V:[2,8,11,2],
    Cr:[2,8,13,1], Mn:[2,8,13,2], Fe:[2,8,14,2],
    Co:[2,8,15,2], Ni:[2,8,16,2], Cu:[2,8,18,1],
    Zn:[2,8,18,2], Ga:[2,8,18,3], Ge:[2,8,18,4],
    As:[2,8,18,5], Se:[2,8,18,6], Br:[2,8,18,7],
    Kr:[2,8,18,8],

    Rb:[2,8,18,8,1], Sr:[2,8,18,8,2],
    Y:[2,8,18,9,2], Zr:[2,8,18,10,2],
    Nb:[2,8,18,12,1], Mo:[2,8,18,13,1],
    Tc:[2,8,18,13,2], Ru:[2,8,18,15,1],
    Rh:[2,8,18,16,1], Pd:[2,8,18,18],
    Ag:[2,8,18,18,1], Cd:[2,8,18,18,2],
    In:[2,8,18,18,3], Sn:[2,8,18,18,4],
    Sb:[2,8,18,18,5], Te:[2,8,18,18,6],
    I:[2,8,18,18,7], Xe:[2,8,18,18,8],

    Cs:[2,8,18,18,8,1],
    Ba:[2,8,18,18,8,2],
    La:[2,8,18,18,9,2],
    Ce:[2,8,18,19,9,2],
    Pr:[2,8,18,21,8,2],
    Nd:[2,8,18,22,8,2],
    Pm:[2,8,18,23,8,2],
    Sm:[2,8,18,24,8,2],
    Eu:[2,8,18,25,8,2],
    Gd:[2,8,18,25,9,2],
    Tb:[2,8,18,27,8,2],
    Dy:[2,8,18,28,8,2],
    Ho:[2,8,18,29,8,2],
    Er:[2,8,18,30,8,2],
    Tm:[2,8,18,31,8,2],
    Yb:[2,8,18,32,8,2],
    Lu:[2,8,18,32,9,2],
    Hf:[2,8,18,32,10,2],
    Ta:[2,8,18,32,11,2],
    W:[2,8,18,32,12,2],
    Re:[2,8,18,32,13,2],
    Os:[2,8,18,32,14,2],
    Ir:[2,8,18,32,15,2],
    Pt:[2,8,18,32,17,1],
    Au:[2,8,18,32,18,1],
    Hg:[2,8,18,32,18,2],
    Tl:[2,8,18,32,18,3],
    Pb:[2,8,18,32,18,4],
    Bi:[2,8,18,32,18,5],
    Po:[2,8,18,32,18,6],
    At:[2,8,18,32,18,7],
    Rn:[2,8,18,32,18,8],

    Fr:[2,8,18,32,18,8,1],
    Ra:[2,8,18,32,18,8,2],
    Ac:[2,8,18,32,18,9,2],
    Th:[2,8,18,32,18,10,2],
    Pa:[2,8,18,32,20,9,2],
    U:[2,8,18,32,21,9,2],
    Np:[2,8,18,32,22,9,2],
    Pu:[2,8,18,32,24,8,2],
    Am:[2,8,18,32,25,8,2],
    Cm:[2,8,18,32,25,9,2],
    Bk:[2,8,18,32,27,8,2],
    Cf:[2,8,18,32,28,8,2],
    Es:[2,8,18,32,29,8,2],
    Fm:[2,8,18,32,30,8,2],
    Md:[2,8,18,32,31,8,2],
    No:[2,8,18,32,32,8,2],
    Lr:[2,8,18,32,32,9,2],

    Rf:[2,8,18,32,32,10,2],
    Db:[2,8,18,32,32,11,2],
    Sg:[2,8,18,32,32,12,2],
    Bh:[2,8,18,32,32,13,2],
    Hs:[2,8,18,32,32,14,2],
    Mt:[2,8,18,32,32,15,2],
    Ds:[2,8,18,32,32,16,2],
    Rg:[2,8,18,32,32,18,1],
    Cn:[2,8,18,32,32,18,2],
    Nh:[2,8,18,32,32,18,3],
    Fl:[2,8,18,32,32,18,4],
    Mc:[2,8,18,32,32,18,5],
    Lv:[2,8,18,32,32,18,6],
    Ts:[2,8,18,32,32,18,7],
    Og:[2,8,18,32,32,18,8]
};


// ⚛️ CREATE ATOM
function createAtom(atomicNumber) {

    const shellContainer =
        document.getElementById("electronShells");

    if (!shellContainer) {
        console.log("electronShells element not found");
        return;
    }

    shellContainer.innerHTML = "";

    // Find element using atomic number
    const element =
        Object.values(elements).find(
            item => item.number === atomicNumber
        );

    if (!element) {
        console.log("Element not found:", atomicNumber);
        return;
    }

    const distribution =
        elementShells[element.symbol];

    if (!distribution) {
        console.log("Shell data not found:", element.symbol);
        return;
    }

    console.log(
        element.symbol,
        distribution
    );

    // Create every electron shell
    distribution.forEach((electronCount, index) => {

        const shellNumber = index + 1;

        const shellDiv =
            document.createElement("div");

        shellDiv.className =
            "electron-shell";

        // Keep all 7 shells inside the 290px atom area
        const size =
            50 + shellNumber * 34;

        shellDiv.style.width =
            size + "px";

        shellDiv.style.height =
            size + "px";

        // Different rotation speed for each shell
        shellDiv.style.animationDuration =
            (10 + shellNumber * 2) + "s";

        // Create electrons
        for (
            let i = 0;
            i < electronCount;
            i++
        ) {

            const electron =
                document.createElement("span");

            electron.className =
                "electron";

            const angle =
                (360 / electronCount) * i;

            const radius =
                size / 2;

            electron.style.transform =
                `rotate(${angle}deg) translateY(-${radius}px)`;

            shellDiv.appendChild(electron);
        }

        shellContainer.appendChild(shellDiv);
    });
}

// =====================================================
// ⚛️ ATOMIX ELEMENT COMBINER
// Supports EXACTLY 2 or 3 elements
// Users select elements by NAME
// =====================================================


// =====================================================
// 2-ELEMENT COMBINATIONS
// =====================================================

const twoElementCombinations = {

    // Hydrogen + Oxygen
    "H+O": [
        ["H2O", "Water", "Essential for life and widely used as a solvent."],
        ["H2O2", "Hydrogen peroxide", "Used as an oxidizing and disinfecting chemical."]
    ],

    // Hydrogen + Chlorine
    "Cl+H": [
        ["HCl", "Hydrogen chloride", "Used in many industrial and laboratory processes."]
    ],

    // Hydrogen + Nitrogen
    "H+N": [
        ["NH3", "Ammonia", "Used in fertilizers and many industrial processes."]
    ],

    // Hydrogen + Sulfur
    "H+S": [
        ["H2S", "Hydrogen sulfide", "A compound studied in chemistry and found naturally in some environments."]
    ],

    // Hydrogen + Carbon
    "C+H": [
        ["CH4", "Methane", "A simple hydrocarbon and major component of natural gas."]
    ],

    // Carbon + Oxygen
    "C+O": [
        ["CO", "Carbon monoxide", "A simple carbon-oxygen compound used in industrial chemistry."],
        ["CO2", "Carbon dioxide", "An important gas involved in Earth's carbon cycle."]
    ],

    // Carbon + Sulfur
    "C+S": [
        ["CS2", "Carbon disulfide", "Used in some industrial chemical processes."]
    ],

    // Nitrogen + Oxygen
    "N+O": [
        ["NO", "Nitrogen monoxide", "An important nitrogen oxide involved in atmospheric chemistry."],
        ["NO2", "Nitrogen dioxide", "A nitrogen oxide involved in atmospheric chemistry."]
    ],

    // Sulfur + Oxygen
    "O+S": [
        ["SO2", "Sulfur dioxide", "Used in industrial processes and chemical manufacturing."],
        ["SO3", "Sulfur trioxide", "An important intermediate in sulfuric acid production."]
    ],

    // Sodium + Chlorine
    "Cl+Na": [
        ["NaCl", "Sodium chloride", "Common table salt and an important ionic compound."]
    ],

    // Sodium + Oxygen
    "Na+O": [
        ["Na2O", "Sodium oxide", "A basic oxide used in glass and ceramic chemistry."]
    ],

    // Sodium + Hydrogen
    "H+Na": [
        ["NaH", "Sodium hydride", "A compound used as a strong base in chemical synthesis."]
    ],

    // Potassium + Chlorine
    "Cl+K": [
        ["KCl", "Potassium chloride", "Used in fertilizers and other applications."]
    ],

    // Potassium + Oxygen
    "K+O": [
        ["K2O", "Potassium oxide", "A basic oxide used in chemical and glass-related applications."]
    ],

    // Magnesium + Oxygen
    "Mg+O": [
        ["MgO", "Magnesium oxide", "Used in refractory materials and various industrial applications."]
    ],

    // Magnesium + Chlorine
    "Cl+Mg": [
        ["MgCl2", "Magnesium chloride", "Used in industry and in the production of magnesium."]
    ],

    // Calcium + Oxygen
    "Ca+O": [
        ["CaO", "Calcium oxide", "Also called quicklime; widely used in construction and industry."]
    ],

    // Calcium + Chlorine
    "Ca+Cl": [
        ["CaCl2", "Calcium chloride", "Used for de-icing, moisture control and industrial applications."]
    ],

    // Calcium + Hydrogen
    "Ca+H": [
        ["CaH2", "Calcium hydride", "Used as a source of hydrogen in some chemical applications."]
    ],

    // Aluminium + Oxygen
    "Al+O": [
        ["Al2O3", "Aluminium oxide", "A hard material used in ceramics, abrasives and protective coatings."]
    ],

    // Aluminium + Chlorine
    "Al+Cl": [
        ["AlCl3", "Aluminium chloride", "Used in chemical manufacturing and catalysis."]
    ],

    // Silicon + Oxygen
    "O+Si": [
        ["SiO2", "Silicon dioxide", "A major component of sand, glass and many minerals."]
    ],

    // Silicon + Carbon
    "C+Si": [
        ["SiC", "Silicon carbide", "A very hard material used in abrasives and electronics."]
    ],

    // Iron + Oxygen
    "Fe+O": [
        ["FeO", "Iron(II) oxide", "An iron oxide found in certain minerals and chemical processes."],
        ["Fe2O3", "Iron(III) oxide", "A common iron oxide found in rust and minerals."]
    ],

    // Iron + Sulfur
    "Fe+S": [
        ["FeS", "Iron(II) sulfide", "An iron-sulfur compound studied in chemistry."]
    ],

    // Copper + Oxygen
    "Cu+O": [
        ["CuO", "Copper(II) oxide", "Used in ceramics, pigments and chemical applications."]
    ],

    // Copper + Sulfur
    "Cu+S": [
        ["CuS", "Copper(II) sulfide", "A copper-sulfur compound found in some minerals."]
    ],

    // Zinc + Oxygen
    "O+Zn": [
        ["ZnO", "Zinc oxide", "Used in materials, coatings and many everyday products."]
    ],

    // Zinc + Sulfur
    "S+Zn": [
        ["ZnS", "Zinc sulfide", "Used in phosphors and specialized optical materials."]
    ],

    // Silver + Chlorine
    "Ag+Cl": [
        ["AgCl", "Silver chloride", "A light-sensitive silver compound used in laboratory chemistry."]
    ],

    // Gold + Chlorine
    "Au+Cl": [
        ["AuCl3", "Gold(III) chloride", "A gold compound used in chemical research."]
    ],

    // Lead + Oxygen
    "O+Pb": [
        ["PbO", "Lead(II) oxide", "A lead oxide used in specialized industrial applications."]
    ],

// Lithium + Oxygen
    "Li+O": [
        ["Li2O", "Lithium oxide", "An ionic compound used in specialized materials and chemical processes."]
    ],

    // Lithium + Chlorine
    "Cl+Li": [
        ["LiCl", "Lithium chloride", "Used in chemical research and specialized industrial applications."]
    ],

    // Beryllium + Oxygen
    "Be+O": [
        ["BeO", "Beryllium oxide", "A ceramic material with useful thermal properties."]
    ],

    // Barium + Oxygen
    "Ba+O": [
        ["BaO", "Barium oxide", "Used in specialized glass and chemical manufacturing."]
    ],

    // Strontium + Oxygen
    "O+Sr": [
        ["SrO", "Strontium oxide", "Used in ceramics and specialized glass materials."]
    ],

    // Nickel + Oxygen
    "Ni+O": [
        ["NiO", "Nickel(II) oxide", "Used in ceramics, electronics and chemical applications."]
    ],

    // Nickel + Chlorine
    "Cl+Ni": [
        ["NiCl2", "Nickel(II) chloride", "Used in electroplating and chemical research."]
    ],

    // Cobalt + Oxygen
    "Co+O": [
        ["CoO", "Cobalt(II) oxide", "Used in pigments and ceramic materials."]
    ],

    // Manganese + Oxygen
    "Mn+O": [
        ["MnO", "Manganese(II) oxide", "Used in chemical and materials research."]
    ],

    // Chromium + Oxygen
    "Cr+O": [
        ["Cr2O3", "Chromium(III) oxide", "Used in pigments, coatings and refractory materials."]
    ],

// Chromium + Chlorine
    "Cl+Cr": [
        ["CrCl3", "Chromium(III) chloride", "Used in chemical research and industrial processes."]
    ],

    // Manganese + Chlorine
    "Cl+Mn": [
        ["MnCl2", "Manganese(II) chloride", "Used in chemical manufacturing and laboratory applications."]
    ],

    // Cobalt + Chlorine
    "Cl+Co": [
        ["CoCl2", "Cobalt(II) chloride", "Used in chemical research and specialized industrial processes."]
    ],

    // Copper + Chlorine
    "Cl+Cu": [
        ["CuCl2", "Copper(II) chloride", "Used in chemical processes, pigments and laboratory work."]
    ],

    // Zinc + Chlorine
    "Cl+Zn": [
        ["ZnCl2", "Zinc chloride", "Used in metal treatment and chemical manufacturing."]
    ],

    // Silver + Oxygen
    "Ag+O": [
        ["Ag2O", "Silver oxide", "Used in specialized chemical and electrochemical applications."]
    ],

    // Gold + Oxygen
    "Au+O": [
        ["Au2O3", "Gold(III) oxide", "A gold oxide studied in chemical research."]
    ],

    // Tin + Oxygen
    "O+Sn": [
        ["SnO", "Tin(II) oxide", "Used in glass, ceramics and chemical applications."],
        ["SnO2", "Tin(IV) oxide", "Used in coatings, ceramics and electronic materials."]
    ],

    // Lead + Sulfur
    "Pb+S": [
        ["PbS", "Lead(II) sulfide", "A naturally occurring mineral compound used in materials research."]
    ],

    // Mercury + Sulfur
    "Hg+S": [
        ["HgS", "Mercury(II) sulfide", "A mercury sulfide compound occurring naturally as cinnabar."]
    ],

// Barium + Chlorine
    "Ba+Cl": [
        ["BaCl2", "Barium chloride", "Used in laboratory and industrial chemical processes."]
    ],

    // Strontium + Chlorine
    "Cl+Sr": [
        ["SrCl2", "Strontium chloride", "Used in specialized chemical and industrial applications."]
    ],

    // Beryllium + Chlorine
    "Be+Cl": [
        ["BeCl2", "Beryllium chloride", "Used in chemical research and specialized inorganic chemistry."]
    ],

    // Silicon + Chlorine
    "Cl+Si": [
        ["SiCl4", "Silicon tetrachloride", "Used as an intermediate in the production of silicon-containing materials."]
    ],

    // Phosphorus + Oxygen
    "O+P": [
        ["P4O10", "Phosphorus pentoxide", "An important phosphorus oxide used as a strong drying agent in chemical applications."]
    ],

    // Phosphorus + Chlorine
    "Cl+P": [
        ["PCl3", "Phosphorus trichloride", "Used as an intermediate in chemical manufacturing."],
        ["PCl5", "Phosphorus pentachloride", "Used in specialized chemical synthesis."]
    ],

    // Sulfur + Chlorine
    "Cl+S": [
        ["SCl2", "Sulfur dichloride", "A sulfur-chlorine compound studied in inorganic chemistry."]
    ],

    // Nitrogen + Chlorine
    "Cl+N": [
        ["NCl3", "Nitrogen trichloride", "A nitrogen-chlorine compound studied in inorganic chemistry."]
    ],

    // Carbon + Chlorine
    "C+Cl": [
        ["CCl4", "Carbon tetrachloride", "A carbon-chlorine compound of historical industrial importance."]
    ],

    // Boron + Oxygen
    "B+O": [
        ["B2O3", "Boron trioxide", "Used in glass, ceramics and other boron-containing materials."]
    ],

// Boron + Chlorine
    "B+Cl": [
        ["BCl3", "Boron trichloride", "Used in chemical manufacturing and as a reagent in specialized processes."]
    ],

    // Boron + Hydrogen
    "B+H": [
        ["B2H6", "Diborane", "A boron hydride used in specialized chemical research and synthesis."]
    ],

    // Phosphorus + Hydrogen
    "H+P": [
        ["PH3", "Phosphine", "A phosphorus-hydrogen compound studied in chemistry."]
    ],

    // Selenium + Oxygen
    "O+Se": [
        ["SeO2", "Selenium dioxide", "Used in specialized chemical processes and materials research."]
    ],

    // Selenium + Hydrogen
    "H+Se": [
        ["H2Se", "Hydrogen selenide", "A selenium-hydrogen compound studied in inorganic chemistry."]
    ],

    // Tellurium + Oxygen
    "O+Te": [
        ["TeO2", "Tellurium dioxide", "Used in specialized glass and materials research."]
    ],

    // Iodine + Hydrogen
    "H+I": [
        ["HI", "Hydrogen iodide", "A hydrogen halide used in chemical research and synthesis."]
    ],

    // Bromine + Hydrogen
    "Br+H": [
        ["HBr", "Hydrogen bromide", "A hydrogen halide used in chemical manufacturing and laboratory chemistry."]
    ],

    // Fluorine + Hydrogen
    "F+H": [
        ["HF", "Hydrogen fluoride", "A hydrogen halide used in specialized industrial chemistry."]
    ],

    // Fluorine + Calcium
    "Ca+F": [
        ["CaF2", "Calcium fluoride", "A naturally occurring mineral compound used in optics and industry."]
    ],

// Fluorine + Sodium
    "F+Na": [
        ["NaF", "Sodium fluoride", "Used in dental products and specialized industrial applications."]
    ],

    // Fluorine + Magnesium
    "F+Mg": [
        ["MgF2", "Magnesium fluoride", "Used in optical coatings and specialized materials."]
    ],

    // Fluorine + Aluminium
    "Al+F": [
        ["AlF3", "Aluminium fluoride", "Used in aluminium production and industrial chemistry."]
    ],

    // Bromine + Sodium
    "Br+Na": [
        ["NaBr", "Sodium bromide", "Used in specialized chemical and industrial applications."]
    ],

    // Iodine + Sodium
    "I+Na": [
        ["NaI", "Sodium iodide", "Used in chemical and industrial applications."]
    ],

    // Potassium + Iodine
    "I+K": [
        ["KI", "Potassium iodide", "Used in laboratory and industrial chemistry."]
    ],

    // Silver + Bromine
    "Ag+Br": [
        ["AgBr", "Silver bromide", "A light-sensitive compound used historically in photographic materials."]
    ],

    // Silver + Iodine
    "Ag+I": [
        ["AgI", "Silver iodide", "Used in specialized chemical and materials research."]
    ],

    // Barium + Sulfur
    "Ba+S": [
        ["BaS", "Barium sulfide", "Used in specialized chemical manufacturing."]
    ],

    // Calcium + Sulfur
    "Ca+S": [
        ["CaS", "Calcium sulfide", "Used in specialized industrial and chemical applications."]
    ]

   
};


// =====================================================
// 3-ELEMENT COMBINATIONS
// =====================================================

const threeElementCombinations = {

    // Hydrogen + Carbon + Oxygen
    "C+H+O": [
        ["CH2O", "Formaldehyde", "A simple compound containing carbon, hydrogen and oxygen."]
    ],

    // Hydrogen + Nitrogen + Oxygen
    "H+N+O": [
        ["HNO3", "Nitric acid", "An important acid used in industrial chemistry."]
    ],

    // Hydrogen + Sulfur + Oxygen
    "H+O+S": [
        ["H2SO4", "Sulfuric acid", "An important industrial acid used in many chemical processes."]
    ],

    // Carbon + Oxygen + Calcium
    "C+Ca+O": [
        ["CaCO3", "Calcium carbonate", "Found in limestone, chalk and many natural materials."]
    ],

    // Carbon + Oxygen + Magnesium
    "C+Mg+O": [
        ["MgCO3", "Magnesium carbonate", "A mineral compound used in various materials and industrial applications."]
    ],

    // Carbon + Oxygen + Sodium
    "C+Na+O": [
        ["Na2CO3", "Sodium carbonate", "Also called washing soda; used in glassmaking and cleaning products."]
    ],

    // Carbon + Oxygen + Potassium
    "C+K+O": [
        ["K2CO3", "Potassium carbonate", "Used in glassmaking and other industrial applications."]
    ],

    // Carbon + Oxygen + Zinc
    "C+O+Zn": [
        ["ZnCO3", "Zinc carbonate", "A zinc compound occurring naturally as the mineral smithsonite."]
    ],

    // Carbon + Oxygen + Copper
    "C+Cu+O": [
        ["CuCO3", "Copper carbonate", "A copper-carbonate compound associated with copper minerals."]
    ],

    // Chlorine + Oxygen + Sodium
    "Cl+Na+O": [
        ["NaClO", "Sodium hypochlorite", "A compound commonly used in dilute solutions for cleaning and disinfection."]
    ],

    // Chlorine + Oxygen + Potassium
    "Cl+K+O": [
        ["KClO3", "Potassium chlorate", "An oxygen-containing chlorine compound used in industrial chemistry."]
    ],

    // Chlorine + Oxygen + Calcium
    "Ca+Cl+O": [
        ["Ca(ClO)2", "Calcium hypochlorite", "Used in water treatment and sanitation."]
    ],

    // Hydrogen + Carbon + Nitrogen
    "C+H+N": [
        ["HCN", "Hydrogen cyanide", "A simple compound containing hydrogen, carbon and nitrogen."]
    ],

    // Hydrogen + Nitrogen + Sulfur
    "H+N+S": [
        ["NH4HS", "Ammonium hydrosulfide", "A compound studied in inorganic chemistry."]
    ],

// Hydrogen + Carbon + Oxygen
    "C+H+O": [
        ["HCOOH", "Formic acid", "A simple organic acid found naturally in some plants and insects."]
    ],

    // Hydrogen + Carbon + Nitrogen
    "C+H+N": [
        ["CH3NH2", "Methylamine", "A simple organic compound containing carbon, hydrogen and nitrogen."]
    ],

    // Hydrogen + Carbon + Sulfur
    "C+H+S": [
        ["CH3SH", "Methanethiol", "An organic sulfur compound containing carbon, hydrogen and sulfur."]
    ],

    // Hydrogen + Phosphorus + Oxygen
    "H+O+P": [
        ["H3PO4", "Phosphoric acid", "An important phosphorus-containing acid used in many chemical processes."]
    ],

    // Hydrogen + Chlorine + Oxygen
    "Cl+H+O": [
        ["HClO", "Hypochlorous acid", "An oxygen-containing chlorine acid studied in chemistry."]
    ],

    // Hydrogen + Bromine + Oxygen
    "Br+H+O": [
        ["HBrO", "Hypobromous acid", "A bromine oxyacid containing hydrogen and oxygen."]
    ],

    // Hydrogen + Iodine + Oxygen
    "H+I+O": [
        ["HIO3", "Iodic acid", "An iodine oxyacid used in chemical research."]
    ],

    // Carbon + Nitrogen + Oxygen
    "C+N+O": [
        ["NCO", "Cyanate radical", "A nitrogen-carbon-oxygen species studied in chemistry."]
    ],

    // Boron + Hydrogen + Oxygen
    "B+H+O": [
        ["H3BO3", "Boric acid", "A boron-containing compound used in laboratory and industrial chemistry."]
    ],
// Hydrogen + Sodium + Oxygen
    "H+Na+O": [
        ["NaOH", "Sodium hydroxide", "A common sodium compound used in soap making and many chemical processes."]
    ],

    // Hydrogen + Potassium + Oxygen
    "H+K+O": [
        ["KOH", "Potassium hydroxide", "Used in chemical manufacturing and soap production."]
    ],

    // Hydrogen + Calcium + Oxygen
    "Ca+H+O": [
        ["Ca(OH)2", "Calcium hydroxide", "Also called slaked lime and used in construction and water treatment."]
    ],

    // Hydrogen + Magnesium + Oxygen
    "H+Mg+O": [
        ["Mg(OH)2", "Magnesium hydroxide", "A magnesium compound used in various industrial applications."]
    ],

    // Hydrogen + Aluminium + Oxygen
    "Al+H+O": [
        ["Al(OH)3", "Aluminium hydroxide", "Used in materials and industrial chemical applications."]
    ],

    // Hydrogen + Iron + Oxygen
    "Fe+H+O": [
        ["Fe(OH)2", "Iron(II) hydroxide", "An iron hydroxide studied in inorganic chemistry."],
        ["Fe(OH)3", "Iron(III) hydroxide", "An iron hydroxide found in chemical and environmental processes."]
    ],

    // Hydrogen + Copper + Oxygen
    "Cu+H+O": [
        ["Cu(OH)2", "Copper(II) hydroxide", "A copper compound used in chemical research and materials applications."]
    ],

    // Hydrogen + Zinc + Oxygen
    "H+O+Zn": [
        ["Zn(OH)2", "Zinc hydroxide", "A zinc compound studied in inorganic chemistry."]
    ],

    // Hydrogen + Nickel + Oxygen
    "H+Ni+O": [
        ["Ni(OH)2", "Nickel(II) hydroxide", "Used in specialized electrochemical and materials applications."]
    ],

    // Hydrogen + Cobalt + Oxygen
    "Co+H+O": [
        ["Co(OH)2", "Cobalt(II) hydroxide", "A cobalt hydroxide studied in inorganic chemistry."]
    ],

// Hydrogen + Manganese + Oxygen
    "H+Mn+O": [
        ["Mn(OH)2", "Manganese(II) hydroxide", "A manganese hydroxide studied in inorganic chemistry."]
    ],

    // Hydrogen + Chromium + Oxygen
    "Cr+H+O": [
        ["Cr(OH)3", "Chromium(III) hydroxide", "A chromium compound used in chemical research."]
    ],

    // Hydrogen + Lead + Oxygen
    "H+O+Pb": [
        ["Pb(OH)2", "Lead(II) hydroxide", "A lead hydroxide studied in inorganic chemistry."]
    ],

    // Hydrogen + Tin + Oxygen
    "H+O+Sn": [
        ["Sn(OH)2", "Tin(II) hydroxide", "A tin hydroxide compound studied in chemistry."]
    ],

    // Carbon + Oxygen + Barium
    "Ba+C+O": [
        ["BaCO3", "Barium carbonate", "A barium carbonate compound used in ceramics and specialized chemical applications."]
    ],

    // Carbon + Oxygen + Strontium
    "C+O+Sr": [
        ["SrCO3", "Strontium carbonate", "Used in ceramics and specialized industrial materials."]
    ],

    // Carbon + Oxygen + Iron
    "C+Fe+O": [
        ["FeCO3", "Iron(II) carbonate", "A naturally occurring iron carbonate mineral."]
    ],

    // Carbon + Oxygen + Nickel
    "C+Ni+O": [
        ["NiCO3", "Nickel(II) carbonate", "A nickel carbonate compound used in chemical research."]
    ],

    // Carbon + Oxygen + Cobalt
    "C+Co+O": [
        ["CoCO3", "Cobalt(II) carbonate", "A cobalt carbonate compound used in chemical and materials research."]
    ],

    // Carbon + Oxygen + Manganese
    "C+Mn+O": [
        ["MnCO3", "Manganese(II) carbonate", "A manganese carbonate compound found in minerals and used in materials research."]
    ],
// Carbon + Oxygen + Silver
    "Ag+C+O": [
        ["Ag2CO3", "Silver carbonate", "A silver carbonate compound used in chemical research."]
    ],

    // Carbon + Oxygen + Lead
    "C+O+Pb": [
        ["PbCO3", "Lead(II) carbonate", "A lead carbonate compound found in minerals."]
    ],

    // Carbon + Oxygen + Tin
    "C+O+Sn": [
        ["SnCO3", "Tin(II) carbonate", "A tin carbonate compound studied in inorganic chemistry."]
    ],

    // Carbon + Oxygen + Boron
    "B+C+O": [
        ["B2CO3", "Boron carbonate", "A boron-containing carbonate compound studied in specialized chemical research."]
    ],

    // Nitrogen + Oxygen + Sodium
    "N+Na+O": [
        ["NaNO3", "Sodium nitrate", "Used in fertilizers and industrial chemical processes."]
    ],

    // Nitrogen + Oxygen + Potassium
    "K+N+O": [
        ["KNO3", "Potassium nitrate", "Used in fertilizers and industrial chemical processes."]
    ],

    // Nitrogen + Oxygen + Calcium
    "Ca+N+O": [
        ["Ca(NO3)2", "Calcium nitrate", "Used in fertilizers and chemical manufacturing."]
    ],

    // Nitrogen + Oxygen + Magnesium
    "Mg+N+O": [
        ["Mg(NO3)2", "Magnesium nitrate", "Used in specialized chemical applications."]
    ],

    // Nitrogen + Oxygen + Silver
    "Ag+N+O": [
        ["AgNO3", "Silver nitrate", "A silver compound used in laboratory chemistry and materials applications."]
    ],

    // Nitrogen + Oxygen + Copper
    "Cu+N+O": [
        ["Cu(NO3)2", "Copper(II) nitrate", "Used in chemical research and industrial applications."]
    ],
// Sulfur + Oxygen + Sodium
    "Na+O+S": [
        ["Na2SO4", "Sodium sulfate", "An important sulfate compound used in industry and chemical processes."]
    ],

    // Sulfur + Oxygen + Potassium
    "K+O+S": [
        ["K2SO4", "Potassium sulfate", "Used mainly in fertilizers and agricultural applications."]
    ],

    // Sulfur + Oxygen + Calcium
    "Ca+O+S": [
        ["CaSO4", "Calcium sulfate", "Found in minerals such as gypsum and used in building materials."]
    ],

    // Sulfur + Oxygen + Magnesium
    "Mg+O+S": [
        ["MgSO4", "Magnesium sulfate", "A sulfate compound used in laboratory and industrial applications."]
    ],

    // Sulfur + Oxygen + Copper
    "Cu+O+S": [
        ["CuSO4", "Copper(II) sulfate", "A widely studied copper sulfate compound used in chemistry."]
    ],

    // Sulfur + Oxygen + Zinc
    "O+S+Zn": [
        ["ZnSO4", "Zinc sulfate", "Used in chemical and agricultural applications."]
    ],

    // Sulfur + Oxygen + Iron
    "Fe+O+S": [
        ["FeSO4", "Iron(II) sulfate", "An iron sulfate compound used in chemical and industrial applications."]
    ],

    // Sulfur + Oxygen + Barium
    "Ba+O+S": [
        ["BaSO4", "Barium sulfate", "A stable sulfate compound used in materials and industrial applications."]
    ],

    // Sulfur + Oxygen + Strontium
    "O+S+Sr": [
        ["SrSO4", "Strontium sulfate", "A sulfate compound found naturally in some minerals."]
    ],

    // Sulfur + Oxygen + Silver
    "Ag+O+S": [
        ["Ag2SO4", "Silver sulfate", "A silver sulfate compound studied in inorganic chemistry."]
    ],
// Hydrogen + Sodium + Sulfur
    "H+Na+S": [
        ["NaHS", "Sodium hydrosulfide", "A sodium-sulfur compound used in specialized chemical processes."]
    ],

    // Hydrogen + Potassium + Sulfur
    "H+K+S": [
        ["KHS", "Potassium hydrosulfide", "A potassium-sulfur compound studied in inorganic chemistry."]
    ],

    // Hydrogen + Calcium + Sulfur
    "Ca+H+S": [
        ["Ca(HS)2", "Calcium hydrosulfide", "A calcium-sulfur compound studied in inorganic chemistry."]
    ],
};


// =====================================================
// GET ELEMENT FROM NAME
// =====================================================

function getElementSymbol(input) {

    if (!input) return null;

    input = input.trim().toLowerCase();

    for (const symbol in elements) {

        const name =
            elements[symbol].name.toLowerCase();

        const displayName =
            (elements[symbol].name + " (" + elements[symbol].symbol + ")")
            .toLowerCase();

        if (input === name || input === displayName) {
            return symbol;
        }
    }

    return null;
}


// =====================================================
// CREATE COMBINATION KEY
// =====================================================

function combinationKey(symbols) {

    return [...symbols]
        .sort()
        .join("+");
}


// =====================================================
// COMBINE ELEMENTS
// =====================================================

function combineElements() {

    const input1 =
        document.getElementById("element1").value;

    const input2 =
        document.getElementById("element2").value;

    const input3 =
        document.getElementById("element3").value;

    const result =
        document.getElementById("combinationResult");


    const e1 = getElementSymbol(input1);
    const e2 = getElementSymbol(input2);
    const e3 = getElementSymbol(input3);


    // Need at least 2 elements
    if (!e1 || !e2) {

        result.innerHTML = `
            <h3>⚠️ Enter two elements</h3>
            <p>Please select at least two valid element names.</p>
        `;

        return;
    }


    let symbols = [e1, e2];


    // Add third element only if entered
    if (input3.trim() !== "") {

        if (!e3) {

            result.innerHTML = `
                <h3>⚠️ Invalid third element</h3>
                <p>Please select a valid element name.</p>
            `;

            return;
        }

        symbols.push(e3);
    }


    // Only allow 2 or 3
    if (symbols.length < 2 || symbols.length > 3) {

        result.innerHTML =
            "⚠️ Atomix supports 2 or 3 elements only.";

        return;
    }


    // Don't allow the same element twice
    if (new Set(symbols).size !== symbols.length) {

        result.innerHTML = `
            <h3>⚠️ Duplicate element</h3>
            <p>Please choose different elements.</p>
        `;

        return;
    }


    const key = combinationKey(symbols);


    let combinations;


    if (symbols.length === 2) {

        combinations =
            twoElementCombinations[key];

    } else {

        combinations =
            threeElementCombinations[key];

    }


    // No compound found
    if (!combinations) {

        result.innerHTML = `
            <h3>🔬 No combination recorded</h3>

            <p>
                ${symbols.map(symbol => elements[symbol].name).join(" + ")}
            </p>

            <p>
                Atomix doesn't currently have a common
                compound recorded for these elements.
            </p>
        `;

        return;
    }


    // Display results
    let html = `
        <h3>⚗️ Compounds found</h3>

        <p>
            ${symbols.map(symbol => elements[symbol].name).join(" + ")}
        </p>
    `;


    combinations.forEach(function(compound) {

        html += `
            <div class="compound-result">

                <h3>${compound[1]}</h3>

                <h2>${compound[0]}</h2>

                <p>
                    <strong>Uses:</strong>
                    ${compound[2]}
                </p>

            </div>
        `;

    });


    result.innerHTML = html;
}


// =====================================================
// ELEMENT NAME SUGGESTIONS
// =====================================================

function loadElementSuggestions() {

    const list = document.getElementById("elementList");

    if (!list) return;

    list.innerHTML = "";

    for (const symbol in elements) {

        const option = document.createElement("option");

        option.value =
            elements[symbol].name + " (" + elements[symbol].symbol + ")";

        list.appendChild(option);
    }
}


// =====================================================
// START COMBINER
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadElementSuggestions();

    }
);

/* =========================================================
   CLASS 9–10 CHEMISTRY QUIZ
   ========================================================= */


const allquizQuestions = [

    {
        question: "What is the smallest particle of an element that retains its chemical properties?",
        options: [
            "Atom",
            "Molecule",
            "Compound",
            "Ion"
        ],
        answer: 0
    },

    {
        question: "Which subatomic particle has a negative charge?",
        options: [
            "Proton",
            "Neutron",
            "Electron",
            "Nucleus"
        ],
        answer: 2
    },

    {
        question: "What is the atomic number of an element equal to?",
        options: [
            "Number of neutrons",
            "Number of protons",
            "Number of shells",
            "Atomic mass"
        ],
        answer: 1
    },

    {
        question: "Which element has the chemical symbol Na?",
        options: [
            "Nitrogen",
            "Neon",
            "Sodium",
            "Nickel"
        ],
        answer: 2
    },

    {
        question: "What is the maximum number of electrons that the first shell can hold?",
        options: [
            "2",
            "8",
            "18",
            "32"
        ],
        answer: 0
    },

    {
        question: "Which of the following is a non-metal?",
        options: [
            "Iron",
            "Copper",
            "Oxygen",
            "Aluminium"
        ],
        answer: 2
    },

    {
        question: "What is the chemical formula of water?",
        options: [
            "CO₂",
            "H₂O",
            "O₂",
            "NaCl"
        ],
        answer: 1
    },

    {
        question: "Which gas is necessary for respiration?",
        options: [
            "Nitrogen",
            "Oxygen",
            "Carbon dioxide",
            "Hydrogen"
        ],
        answer: 1
    },

    {
        question: "What is the valency of oxygen?",
        options: [
            "1",
            "2",
            "3",
            "4"
        ],
        answer: 1
    },

    {
        question: "Which of these is a chemical change?",
        options: [
            "Melting ice",
            "Boiling water",
            "Rusting of iron",
            "Dissolving sugar in water"
        ],
        answer: 2
    },

{
    question: "Which particle is present in the nucleus and has no charge?",
    options: [
        "Electron",
        "Proton",
        "Neutron",
        "Ion"
    ],
    answer: 2
},

{
    question: "Which element has the chemical symbol Fe?",
    options: [
        "Fluorine",
        "Iron",
        "Francium",
        "Fermium"
    ],
    answer: 1
},

{
    question: "Which of the following is a metalloid?",
    options: [
        "Silicon",
        "Oxygen",
        "Sodium",
        "Chlorine"
    ],
    answer: 0
},

{
    question: "What is the atomic number of carbon?",
    options: [
        "4",
        "6",
        "8",
        "12"
    ],
    answer: 1
},

{
    question: "Which element is represented by the symbol K?",
    options: [
        "Krypton",
        "Potassium",
        "Calcium",
        "Cobalt"
    ],
    answer: 1
},

{
    question: "Which gas is most abundant in Earth's atmosphere?",
    options: [
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        "Hydrogen"
    ],
    answer: 2
},

{
    question: "What is the chemical formula of carbon dioxide?",
    options: [
        "CO",
        "CO₂",
        "C₂O",
        "CaO"
    ],
    answer: 1
},

{
    question: "Which of the following is a noble gas?",
    options: [
        "Chlorine",
        "Neon",
        "Sodium",
        "Sulfur"
    ],
    answer: 1
},

{
    question: "What is the charge of a proton?",
    options: [
        "Negative",
        "Positive",
        "Neutral",
        "Variable"
    ],
    answer: 1
},

{
    question: "Which particle moves around the nucleus?",
    options: [
        "Proton",
        "Neutron",
        "Electron",
        "Nucleus"
    ],
    answer: 2
},

{
    question: "What is the formula for common salt?",
    options: [
        "NaCl",
        "HCl",
        "NaOH",
        "CaCO₃"
    ],
    answer: 0
},

{
    question: "Which of the following is an acid?",
    options: [
        "NaOH",
        "HCl",
        "CaO",
        "NaCl"
    ],
    answer: 1
},

{
    question: "Which of the following is a base?",
    options: [
        "H₂SO₄",
        "HCl",
        "NaOH",
        "CO₂"
    ],
    answer: 2
},

{
    question: "What is the chemical symbol for gold?",
    options: [
        "Gd",
        "Go",
        "Au",
        "Ag"
    ],
    answer: 2
},

{
    question: "Which element is liquid at room temperature?",
    options: [
        "Iron",
        "Mercury",
        "Carbon",
        "Sodium"
    ],
    answer: 1
},

{
    question: "Which process is used to prevent iron from rusting?",
    options: [
        "Melting",
        "Galvanisation",
        "Evaporation",
        "Condensation"
    ],
    answer: 1
},

{
    question: "Which of the following is a physical change?",
    options: [
        "Burning wood",
        "Rusting iron",
        "Melting ice",
        "Cooking food"
    ],
    answer: 2
},

{
    question: "What is the valency of hydrogen?",
    options: [
        "1",
        "2",
        "3",
        "4"
    ],
    answer: 0
},

{
    question: "Which element is necessary for the formation of haemoglobin?",
    options: [
        "Iron",
        "Helium",
        "Neon",
        "Gold"
    ],
    answer: 0
},

{
    question: "Which of the following is a compound?",
    options: [
        "Oxygen",
        "Gold",
        "Water",
        "Nitrogen"
    ],
    answer: 2
}

,

{
    question: "Which of the following is a homogeneous mixture?",
    options: [
        "Sand and water",
        "Salt and water",
        "Oil and water",
        "Soil"
    ],
    answer: 1
},

{
    question: "Which method is commonly used to separate an insoluble solid from a liquid?",
    options: [
        "Filtration",
        "Distillation",
        "Sublimation",
        "Crystallisation"
    ],
    answer: 0
},

{
    question: "What is the pH value of a neutral solution?",
    options: [
        "0",
        "5",
        "7",
        "14"
    ],
    answer: 2
},

{
    question: "Which gas is produced when an acid reacts with a carbonate?",
    options: [
        "Hydrogen",
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen"
    ],
    answer: 2
},

{
    question: "Which indicator turns pink in a basic solution?",
    options: [
        "Litmus",
        "Phenolphthalein",
        "Turmeric",
        "Methyl orange"
    ],
    answer: 1
},

{
    question: "Which of the following is a covalent compound?",
    options: [
        "NaCl",
        "MgO",
        "H₂O",
        "CaCl₂"
    ],
    answer: 2
},

{
    question: "Which process changes a gas directly into a solid?",
    options: [
        "Melting",
        "Condensation",
        "Deposition",
        "Evaporation"
    ],
    answer: 2
},

{
    question: "What is the chemical symbol for silver?",
    options: [
        "Si",
        "S",
        "Ag",
        "Au"
    ],
    answer: 2
},

{
    question: "Which element has atomic number 1?",
    options: [
        "Helium",
        "Hydrogen",
        "Lithium",
        "Oxygen"
    ],
    answer: 1
},

{
    question: "Which of the following is an alkali metal?",
    options: [
        "Magnesium",
        "Sodium",
        "Aluminium",
        "Calcium"
    ],
    answer: 1
},

{
    question: "Which element belongs to Group 18 of the periodic table?",
    options: [
        "Oxygen",
        "Chlorine",
        "Neon",
        "Sodium"
    ],
    answer: 2
},

{
    question: "What is the chemical formula of methane?",
    options: [
        "CH₄",
        "CO₂",
        "CH₃OH",
        "C₂H₆"
    ],
    answer: 0
},

{
    question: "Which process is used to obtain pure water from salt water?",
    options: [
        "Filtration",
        "Distillation",
        "Sedimentation",
        "Decantation"
    ],
    answer: 1
},

{
    question: "Which of the following is an example of sublimation?",
    options: [
        "Melting ice",
        "Boiling water",
        "Naphthalene changing directly into vapour",
        "Water freezing"
    ],
    answer: 2
},

{
    question: "Which particle determines the identity of an element?",
    options: [
        "Electron",
        "Neutron",
        "Proton",
        "Shell"
    ],
    answer: 2
},

{
    question: "What is the formula of calcium carbonate?",
    options: [
        "CaCO₃",
        "CaCl₂",
        "CaO",
        "CaSO₄"
    ],
    answer: 0
},

{
    question: "Which gas is commonly used by plants during photosynthesis?",
    options: [
        "Oxygen",
        "Nitrogen",
        "Carbon dioxide",
        "Hydrogen"
    ],
    answer: 2
},

{
    question: "What happens to blue litmus paper in an acidic solution?",
    options: [
        "It turns red",
        "It turns green",
        "It remains blue",
        "It turns pink"
    ],
    answer: 0
},

{
    question: "Which of the following has the highest atomic number?",
    options: [
        "Hydrogen",
        "Carbon",
        "Oxygen",
        "Neon"
    ],
    answer: 3
},

{
    question: "Which statement about a physical change is correct?",
    options: [
        "A new substance is always formed",
        "It is always irreversible",
        "No new substance is formed",
        "The chemical composition always changes"
    ],
    answer: 2
}

];


let quizQuestions = [];

let currentQuestion = 0;
let score = 0;
let quizLength = 10;

function shuffleQuestions() {

    const shuffled = [...allquizQuestions];

    shuffled.sort(() => Math.random() - 0.5);

    quizQuestions = shuffled.slice(0, quizLength);

}

/* START QUIZ */

function startQuiz(length) {

    quizLength = length;

    shuffleQuestions();

    currentQuestion = 0;
    score = 0;

    document.getElementById("quizStart").style.display = "none";

    document.getElementById("quizResult").style.display = "none";

    document.getElementById("quizArea").style.display = "block";

    showQuizQuestion();

}


/* SHOW QUESTION */

function showQuizQuestion() {

    const question = quizQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        `Question ${currentQuestion + 1} / ${quizQuestions.length}`;

    document.getElementById("quizScore").textContent =
        `Score: ${score}`;

    document.getElementById("quizQuestion").textContent =
        question.question;


    const optionsContainer =
        document.getElementById("quizOptions");

    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.onclick = () => selectAnswer(index);

        optionsContainer.appendChild(button);

    });

}


/* SELECT ANSWER */

function selectAnswer(selectedAnswer) {

    const question = quizQuestions[currentQuestion];

    const optionButtons =
        document.querySelectorAll("#quizOptions button");


    optionButtons.forEach(button => {

        button.disabled = true;

    });


    if (selectedAnswer === question.answer) {

        score++;

        optionButtons[selectedAnswer]
            .classList.add("correct");

    } else {

        optionButtons[selectedAnswer]
            .classList.add("wrong");

        optionButtons[question.answer]
            .classList.add("correct");

    }


    document.getElementById("quizScore").textContent =
        `Score: ${score}`;


    setTimeout(() => {

        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {

            showQuizQuestion();

        } else {

            showQuizResult();

        }

    }, 1200);

}


/* SHOW RESULT */

function showQuizResult() {

    document.getElementById("quizArea").style.display = "none";

    document.getElementById("quizResult").style.display = "block";


    document.getElementById("finalScore").textContent =
        `Your score: ${score} / ${quizQuestions.length}`;


    let message = "";


    if (score === quizQuestions.length) {

        message = "🏆 Perfect score! You are a chemistry master!";

    } else if (score >= 8) {

        message = "🌟 Excellent work! You know chemistry very well.";

    } else if (score >= 5) {

        message = "👍 Good job! Keep learning and you will improve.";

    } else {

        message = "📚 Keep practicing! Every quiz makes you better.";
    }


    document.getElementById("scoreMessage").textContent = message;

}


/* RESTART QUIZ */

function restartQuiz() {

    startQuiz(quizLength);

}

function logoutAtomix() {


localStorage.removeItem("atomixLoggedIn");
localStorage.removeItem("atomixCurrentUser");

window.location.href = "Welcome.html";

}
