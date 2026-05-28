const DRIVERS = {
    // Red Bull
    "max_verstappen": {
        id: "max_verstappen",
        givenName: "Max",
        familyName: "Verstappen",
        dateOfBirth: "1997-09-30",
        nationality: "Dutch",
        permanentNumber: "3",
        code: "VER",
        team: "oracle red bull racing",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/fiyui61769371945.png",
    },

    "isack_hadjar": {
        id: "isack_hadjar",
        givenName: "Isack",
        familyName: "Hadjar",
        dateOfBirth: "2004-09-11",
        nationality: "French",
        permanentNumber: "6",
        code: "HAD",
        team: "oracle red bull racing",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/ifqmow1772534127.png",
    },

    // Ferrari
    "lewis_hamilton": {
        id: "lewis_hamilton",
        givenName: "Lewis",
        familyName: "Hamilton",
        dateOfBirth: "1985-01-07",
        nationality: "British",
        permanentNumber: "44",
        code: "HAM",
        team: "scuderia ferrari hp",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/exado51769372031.png",
    },

    "charles_leclerc": {
        id: "charles_leclerc",
        givenName: "Charles",
        familyName: "Leclerc",
        dateOfBirth: "1997-10-16",
        nationality: "Monegasque",
        permanentNumber: "16",
        code: "LEC",
        team: "scuderia ferrari hp",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/t7asa51769372100.png",
    },

    // McLaren
    "lando_norris": {
        id: "lando_norris",
        givenName: "Lando",
        familyName: "Norris",
        dateOfBirth: "1999-11-13",
        nationality: "British",
        permanentNumber: "4",
        code: "NOR",
        team: "mclaren formula 1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/og7n5r1769371379.png",
    },

    "oscar_piastri": {
        id: "oscar_piastri",
        givenName: "Oscar",
        familyName: "Piastri",
        dateOfBirth: "2001-04-06",
        nationality: "Australian",
        permanentNumber: "81",
        code: "PIA",
        team: "mclaren formula 1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/ce3zpq1769371471.png",
    },

    // Mercedes
    "george_russell": {
        id: "george_russell",
        givenName: "George",
        familyName: "Russell",
        dateOfBirth: "1998-02-15",
        nationality: "British",
        permanentNumber: "63",
        code: "RUS",
        team: "mercedes-amg petronas formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/cmqswc1769371629.png",
    },

    "andrea_kimi_antonelli": {
        id: "andrea_kimi_antonelli",
        givenName: "Andrea Kimi",
        familyName: "Antonelli",
        dateOfBirth: "2006-08-25",
        nationality: "Italian",
        permanentNumber: "12",
        code: "ANT",
        team: "mercedes-amg petronas formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/8s9ouj1769371565.png",
    },

    // Aston Martin
    "fernando_alonso": {
        id: "fernando_alonso",
        givenName: "Fernando",
        familyName: "Alonso",
        dateOfBirth: "1981-07-29",
        nationality: "Spanish",
        permanentNumber: "14",
        code: "ALO",
        team: "aston martin aramco formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/rmczq21677931848.png",
    },

    "lance_stroll": {
        id: "lance_stroll",
        givenName: "Lance",
        familyName: "Stroll",
        dateOfBirth: "1998-10-29",
        nationality: "Canadian",
        permanentNumber: "18",
        code: "STR",
        team: "aston martin aramco formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/25otva1679827137.png",
    },

    // Williams
    "carlos_sainz": {
        id: "carlos_sainz",
        givenName: "Carlos",
        familyName: "Sainz",
        dateOfBirth: "1994-09-01",
        nationality: "Spanish",
        permanentNumber: "55",
        code: "SAI",
        team: "williams racing",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/4ojzdf1769372410.png",
    },

    "alexander_albon": {
        id: "alexander_albon",
        givenName: "Alexander",
        familyName: "Albon",
        dateOfBirth: "1996-03-23",
        nationality: "Thai-British",
        permanentNumber: "23",
        code: "ALB",
        team: "williams racing",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/x6mxpp1769372345.png",
    },

    // Alpine
    "pierre_gasly": {
        id: "pierre_gasly",
        givenName: "Pierre",
        familyName: "Gasly",
        dateOfBirth: "1996-02-07",
        nationality: "French",
        permanentNumber: "10",
        code: "GAS",
        team: "bwt alpine formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/6tef141769371181.png",
    },

    "franco_colapinto": {
        id: "franco_colapinto",
        givenName: "Franco",
        familyName: "Colapinto",
        dateOfBirth: "1999-11-27",
        nationality: "Argentine",
        permanentNumber: "43",
        code: "COL",
        team: "bwt alpine formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/uztkh41769371230.png",
    },

    // Haas
    "oliver_bearman": {
        id: "oliver_bearman",
        givenName: "Oliver",
        familyName: "Bearman",
        dateOfBirth: "2005-09-27",
        nationality: "British",
        permanentNumber: "87",
        code: "BEA",
        team: "moneygram haas f1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/f4stqe1769371755.png",
    },

    "esteban_ocon": {
        id: "esteban_ocon",
        givenName: "Esteban",
        familyName: "Ocon",
        dateOfBirth: "1996-09-17",
        nationality: "French",
        permanentNumber: "31",
        code: "OCO",
        team: "moneygram haas f1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/m7uhbe1769371819.png",
    },

    // Audi
    "hulkenberg": {
        id: "hulkenberg",
        givenName: "Nico",
        familyName: "Hülkenberg",
        dateOfBirth: "1987-08-19",
        nationality: "German",
        permanentNumber: "27",
        code: "HUL",
        team: "stake f1 team kick sauber",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/90zkg81773160744.png",
    },

    "gabriel_bortoleto": {
        id: "gabriel_bortoleto",
        givenName: "Gabriel",
        familyName: "Bortoleto",
        dateOfBirth: "2004-12-19",
        nationality: "Brazilian",
        permanentNumber: "88",
        code: "BOR",
        team: "stake f1 team kick sauber",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/dw6mi31773160637.png",
    },

    // Racing Bulls
    "liam_lawson": {
        id: "liam_lawson",
        givenName: "Liam",
        familyName: "Lawson",
        dateOfBirth: "2002-01-11",
        nationality: "New Zealand",
        permanentNumber: "30",
        code: "LAW",
        team: "visa cash app racing bulls formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/3wa7ut1769372613.png",
    },

    "arvid_lindblad": {
        id: "arvid_lindblad",
        givenName: "Arvid",
        familyName: "Lindblad",
        dateOfBirth: "2004-07-28",
        nationality: "British",
        permanentNumber: "41",
        code: "LIN",
        team: "visa cash app racing bulls formula one team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/fspuvx1770026197.png",
    },

    // Cadillac
    "sergio_perez": {
        id: "sergio_perez",
        givenName: "Sergio",
        familyName: "Pérez",
        dateOfBirth: "1990-01-26",
        nationality: "Mexican",
        permanentNumber: "11",
        code: "PER",
        team: "cadillac formula 1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/tk90eh1662920615.png",
    },

    "valtteri_bottas": {
        id: "valtteri_bottas",
        givenName: "Valtteri",
        familyName: "Bottas",
        dateOfBirth: "1989-08-28",
        nationality: "Finnish",
        permanentNumber: "77",
        code: "BOT",
        team: "cadillac formula 1 team",
        cutout: "https://r2.thesportsdb.com/images/media/player/cutout/kf5lq01772535017.png",
    },
    "fabio_silva": {
        id: "fabio_silva",
        givenName: "Fábio",
        familyName: "Silva",
        dateOfBirth: "2001-02-12",
        nationality: "Brazilian",
        permanentNumber: "67",
        code: "SIL",
        team: "SENAI formula 1 team",
        cutout: "./data/fabio.png",    
    },
    "miguel_santana": {
        id: "miguel_santana",
        givenName: "Miguel",
        familyName: "Santana",
        dateOfBirth: "2008-02-11",
        nationality: "Brazilian",
        permanentNumber: "69",
        code: "SAN",
        team: "SENAI formula 1 team",
        cutout: "./data/miguel.png",    
    }
};

export default DRIVERS;