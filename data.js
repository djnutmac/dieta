// Dati del piano alimentare — generati dal PDF. Non modificare la struttura.
window.DIETA = {
 "meta": {
  "titolo": "Il mio piano alimentare",
  "nutrizionista": {
   "nome": "Dr.ssa Alessandra Esposito",
   "qualifica": "Biologa Nutrizionista",
   "sito": "www.nutrizionistaesposito.it"
  },
  "intro": [
   "Durante la giornata si possono bere tranquillamente caffè, tè e tisane, facendo attenzione a limitare lo zucchero.",
   "I pasti sono tutti intercambiabili in orizzontale (stessa fascia in un altro giorno), purché si sostituisca sempre un primo con un altro primo o un suo equivalente (pizza/piadina/panino), evitando di scambiare un secondo con un primo piatto.",
   "È possibile, se si sente la necessità, invertire pranzo e cena della stessa giornata senza alcun problema.",
   "Nella sezione “alcune alternative” i piatti con l’asterisco hanno la ricetta nel ricettario."
  ],
  "giorni": [
   {
    "id": "lun",
    "nome": "Lunedì",
    "breve": "Lun",
    "js": 1
   },
   {
    "id": "mar",
    "nome": "Martedì",
    "breve": "Mar",
    "js": 2
   },
   {
    "id": "mer",
    "nome": "Mercoledì",
    "breve": "Mer",
    "js": 3
   },
   {
    "id": "gio",
    "nome": "Giovedì",
    "breve": "Gio",
    "js": 4
   },
   {
    "id": "ven",
    "nome": "Venerdì",
    "breve": "Ven",
    "js": 5
   },
   {
    "id": "sab",
    "nome": "Sabato",
    "breve": "Sab",
    "js": 6
   },
   {
    "id": "dom",
    "nome": "Domenica",
    "breve": "Dom",
    "js": 0
   }
  ],
  "slot": [
   {
    "id": "colazione",
    "nome": "Colazione",
    "icona": "☕"
   },
   {
    "id": "snack1",
    "nome": "Snack mattina",
    "icona": "🍎"
   },
   {
    "id": "pranzo",
    "nome": "Pranzo",
    "icona": "🍝"
   },
   {
    "id": "snack2",
    "nome": "Snack pomeriggio",
    "icona": "🥛"
   },
   {
    "id": "cena",
    "nome": "Cena",
    "icona": "🍽️"
   },
   {
    "id": "dopocena",
    "nome": "Dopo cena",
    "icona": "🌙"
   }
  ]
 },
 "menu": {
  "lun": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "3 biscotti Gocciole"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "1 pezzetto di grana (20g) + 1 banana"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "50-60g pasta integrale + 100g ceci cotti o conservati (es. in scatola) + 150g verdure (es. broccoli e zucchine) + 1 cucchiaio d’olio"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Orecchiette con cannellini e pesto",
      "ricetta": "orecchiette-ai-cannellini-e-pesto"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + 1 yogurt TRUBLEND (Fage) gusto a piacere"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "Pollo al limone: 200g pollo + farina q.b. + succo di limone + 1 cucchiaino d’olio",
     "1 piatto di finocchi in insalata (150g) + 1 cucchiaino d’olio (+ aceto)",
     "1 panino integrale (50g)"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Omelette broccoli e feta",
      "ricetta": "omelette-broccoli-e-feta"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "2 fette di pane integrale (50g) + crema Novi"
    ],
    "alternative": []
   }
  },
  "mar": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "2 fette di pane integrale (50g) + 25g Philadelphia + marmellata ricca di frutta (es. Natù)"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "20g frutta secca (es. noci, mandorle, nocciole..) + 2 mandarini"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "50-60g pasta integrale + 3 cucchiai di ragù",
     "1 piatto di radicchio e cavolo cappuccio in insalata + 1 cucchiaino d’olio (+ aceto)"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Penne al forno ai 2 formaggi e salsa ai peperoni",
      "ricetta": "penne-al-forno-ai-2-formaggi-e-salsa-ai-peperoni"
     },
     {
      "titolo": "Risotto con zucchine e fontina gratinato al forno",
      "ricetta": "risotto-con-zucchine-e-fontina-gratinato-al-forno"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + 1 dessert proteico (es. HiPro Pudding Danone, Milk Pro Mousse, Milk Pro Crema Dessert..)"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "300g filetti di merluzzo al forno con 150g verdure (es. zucchine, peperoni, carote..) + 150g patate + 1 cucchiaio d’olio"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Pollo al volo",
      "ricetta": "pollo-al-volo"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "2 gallette ricoperte di cioccolato fondente (es. Fiorentini)"
    ],
    "alternative": []
   }
  },
  "mer": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "Brioche"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "1 pezzetto di grana (20g) + 1 mela"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "50-60g pasta integrale + 80g salmone affumicato + 15g verdure (es. verza e cavolo viola..) + qualche oliva + 1 cucchiaio d’olio"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Pasta primavera al pollo",
      "ricetta": "pasta-primavera-al-pollo"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + Toast: 2 fette di pane integrale (50g) + 50g affettato di pollo o tacchino"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "3 uova sode o all’occhio di bue",
     "1 piatto di zucca al forno (150g) + 1 cucchiaio d’olio",
     "1 panino integrale (50g)"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Pollo tonnato",
      "ricetta": "pollo-tonnato"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "1 pacchetto di Pavesini al cacao"
    ],
    "alternative": []
   }
  },
  "gio": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "3 biscotti Gocciole"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "20g frutta secca (es. noci, mandorle, nocciole..) + 1 banana"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "50-60g pasta integrale + sugo di pomodoro q.b. + 1 cucchiaio d’olio",
     "1 piatto di finocchi in insalata + 100g fiocchi di latte + 1 cucchiaino d’olio (+ aceto)"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Insalata spinaci e orzo",
      "ricetta": "insalata-di-spinaci-e-orzo"
     },
     {
      "titolo": "Cous cous verde",
      "ricetta": "cous-cous-verde"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + 1 yogurt TRUBLEND (Fage) gusto a piacere"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "8 polpettine di tonno al sugo (vedi ricetta nel ricettario)",
     "1 piatto di verdure al forno (es. zucchina, carote, zucca..) + 150g patate + 1 cucchiaino d’olio"
    ],
    "tipo": "secondo",
    "ricetta": "polpette-di-tonno-al-sugo",
    "alternative": [
     {
      "titolo": "Stufato di pollo e fagiolini",
      "ricetta": "stufato-di-pollo-e-fagiolini"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "1 barretta (es. Grancereale)"
    ],
    "alternative": []
   }
  },
  "ven": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "2 fette di pane integrale (50g) + 25g Philadelphia + marmellata ricca di frutta (es. Natù)"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "20g frutta secca (es. noci, mandorle, nocciole..) + 2 mandarini"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "Carbonara di zucca: 50-60g pasta integrale + zucca a dadini in padella q.b. + 1 uovo + 1 cucchiaio d’olio + 1 spolverata di grana",
     "1 piatto di coste saltate in padella o bollite + 1 cucchiaino d’olio"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Fettuccine al forno con piselli e asparagi",
      "ricetta": "fettuccine-al-forno-con-piselli-e-asparagi"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + 1 yogurt TRUBLEND (Fage) gusto a piacere"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "Zuppa di lenticchie: 250g lenticchie cotte/conservate + 150g verdure (es. broccoli, cavolo, verza..) + 1 cucchiaio d’olio (+ brodo)",
     "30g crostini"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Crocchette di spinaci e tofu",
      "ricetta": "crocchette-di-spinaci-e-tofu"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "1 dessert proteico (es. HiPro Pudding Danone, Milk Pro Mousse, Milk Pro Crema Dessert..)"
    ],
    "alternative": []
   }
  },
  "sab": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "3 biscotti Gocciole"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "1 pezzetto di grana (20g) + 1 mela"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "Pollo al curry: 200g pollo + 50ml latte di cocco (o 1 cucchiaio d’olio) + 150-200g verdure (es. zucca, carote e broccoli) + spezie a piacere",
     "35g riso basmati integrale (da bollire)"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Pollo ai peperoni",
      "ricetta": "pollo-ai-peperoni"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + Toast: 2 fette di pane integrale (50g) + 50g affettato di pollo o tacchino"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "Pizza o sushi o pokè o pinsa.."
    ],
    "tipo": "primo",
    "alternative": []
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "1 pacchetto di Pavesini al cacao"
    ],
    "alternative": []
   }
  },
  "dom": {
   "colazione": {
    "voci": [
     "Cappuccino o Marocchino",
     "Brioche"
    ],
    "alternative": []
   },
   "snack1": {
    "voci": [
     "1 pacchettino monoporzione di Sì&No Fiorentini (20g) + 1 mela"
    ],
    "alternative": []
   },
   "pranzo": {
    "voci": [
     "50-60g pasta integrale + 150g gamberetti + 200g verdure (es. carote, funghi, verza e cavolo cappuccio..) + 1 cucchiaio d’olio"
    ],
    "tipo": "primo",
    "alternative": [
     {
      "titolo": "Insalata di farro e orzo",
      "ricetta": "insalata-di-farro-e-orzo"
     },
     {
      "titolo": "Insalata di riso, orzo, farro e carciofi",
      "ricetta": "insalata-di-riso-orzo-farro-e-carciofi"
     }
    ]
   },
   "snack2": {
    "voci": [
     "1 tisana + 1 dessert proteico (es. HiPro Pudding Danone, Milk Pro Mousse, Milk Pro Crema Dessert..)"
    ],
    "alternative": []
   },
   "cena": {
    "voci": [
     "Frittata: 3 uova + zucca e funghi q.b. + 1 cucchiaino d’olio",
     "1 piatto di spinaci saltati in padella (150-200g) + 1 cucchiaino d’olio",
     "1 panino integrale/di segale (50g)"
    ],
    "tipo": "secondo",
    "alternative": [
     {
      "titolo": "Omelette broccoli e feta",
      "ricetta": "omelette-broccoli-e-feta"
     }
    ]
   },
   "dopocena": {
    "voci": [
     "Tisana",
     "Frutta (1 banana, 1 mela o 2 mandarini o 1 bicchiere di macedonia…)",
     "1 barretta (es. Grancereale)"
    ],
    "alternative": []
   }
  }
 },
 "regole": [
  {
   "id": "colazione",
   "titolo": "Colazione",
   "icona": "☕",
   "intro": "Ogni colazione deve essere costituita da una porzione di proteine, una porzione di carboidrati, una porzione di vitamine (frutto, marmellata, miele o spremuta d’arancia) e una porzione di grassi buoni (frutta secca o cioccolato extrafondente).",
   "esempio": "200ml latte parz. scremato + 50g pane integrale + marmellata + 2 noci",
   "immagini": [
    {
     "file": "img/colazione-sana.jpg",
     "didascalia": "Colazione sana: frutta, carboidrati, grassi buoni e proteine"
    }
   ],
   "gruppi": [
    {
     "nome": "Proteine a colazione",
     "voci": [
      "200ml latte parz. scremato/kefir",
      "250ml latte di soia",
      "180ml albumi",
      "150ml latte intero",
      "1 yogurt Total 0% grassi (170g)",
      "1 yogurt bianco intero al naturale (125g)/yogurt di soia (125g)",
      "70g salume magro (tacchino o pollo)",
      "50g salmone affumicato/ricotta/prosciutto cotto",
      "2 uova"
     ]
    },
    {
     "nome": "Carboidrati a colazione",
     "voci": [
      "3 fette biscottate",
      "50g pane integrale",
      "30g cereali cornflakes/fiocchi d’avena/fiocchi di quinoa/riso soffiato",
      "40g muesli/cereali con frutta secca e/o cioccolato (contengono già i grassi)",
      "4 frollini integrali es. ColCuore Galbusera/PiùIntegrali Galbusera",
      "1 pacchettino di Cecille o Zenzerini o Cioccoavena (Mulino Bianco)",
      "3 biscotti Gocciole (contengono già i grassi del pasto)",
      "3 biscotti Pan di Stelle/Abbracci",
      "2 biscotti Digestive/Grancereale",
      "3 biscotti con cioccolato fondente (Cereali G Galbusera) (contiene già i grassi buoni)",
      "5 gallette di mais/farro/kamut/biscotti secchi (Oro Saiwa ai 5 cereali)",
      "3 gallette di riso",
      "180ml latte di riso (senza zucchero)"
     ]
    },
    {
     "nome": "Vitamine a colazione",
     "voci": [
      "1 porzione di frutta",
      "1 velo di marmellata almeno al 65%",
      "30g frutta disidratata (es. prugne secche)",
      "1 bicchiere di spremuta d’agrumi"
     ]
    },
    {
     "nome": "Grassi buoni a colazione",
     "voci": [
      "2 noci",
      "10g frutta secca/cioccolato extrafondente (almeno 70% di cacao)/10g chips di cocco",
      "10g anacardi/nocciole/pistacchi",
      "30g polpa avocado",
      "1 velo di burro bio/burro chiarificato bio/crema di frutta secca al 100% (es. arachidi)",
      "1 velo di crema nocciole e cioccolato (es. Novi)",
      "1 cucchiaino d’olio extravergine d’oliva"
     ]
    }
   ]
  },
  {
   "id": "pranzo",
   "titolo": "Pranzo",
   "icona": "🍝",
   "intro": "Ogni pranzo deve essere costituito da una porzione di carboidrati (es. 60g pasta) condito con un grasso buono (1 cucchiaio d’olio EVO) + una piccola porzione di proteine (es. carne o legumi) + una porzione di vitamine (verdure) + 1 porzione di frutta.",
   "esempio": "60g pasta + 120g carne bianca + 10g olio (1 cucchiaio) + 200g di verdure + 1 porzione frutta",
   "immagini": [],
   "gruppi": [
    {
     "nome": "60g di pasta sono sostituibili con",
     "voci": [
      "60g riso/farro/tortellini/bulgur/spaghetti di riso/quinoa/miglio/pasta all’uovo/cous cous/orzo",
      "150g gnocchi",
      "60g lasagne/cannelloni già cotti",
      "1 piadina",
      "80g pane integrale/segale",
      "120g pasta cotta"
     ]
    },
    {
     "nome": "Come condire la pasta",
     "voci": [
      "1 cucchiaio di olio/pesto + 200g verdure + secondo piatto (es. 120g carne bianca)"
     ]
    },
    {
     "nome": "120g di carne bianca sono sostituibili con",
     "voci": [
      "80g bresaola o prosciutto crudo",
      "90g prosciutto cotto sgrassato",
      "30g salame",
      "90g carne rossa/cavallo/tofu/seitan/roastbeef",
      "120g vitello",
      "70g kebab tacchino (Aia)/formaggio Linea Osella",
      "40g formaggio",
      "80g pesce grasso (tonno/salmone/sgombro)",
      "180g pesce magro (merluzzo/sogliola)",
      "220g molluschi (polpo/calamari/seppie)",
      "100g ricotta light",
      "80g salmone affumicato/ricotta",
      "70g stracchino light/mozzarella light",
      "2 uova/scatolette di tonno (80g cad.)",
      "80g farinata",
      "100g ceci (cotti)",
      "30g ceci (secchi)",
      "140g fagioli borlotti (cotti)",
      "40g fagioli borlotti (secchi)",
      "170g fagioli cannellini (cotti)",
      "40g fagioli cannellini (secchi)",
      "150g lenticchie (cotte)",
      "35g lenticchie (secche)",
      "180g piselli (cotti)",
      "35g piselli (secchi)",
      "40g pasta di legumi al 100%",
      "150g fiocchi di latte light",
      "100g fiocchi di latte",
      "50g mozzarella"
     ]
    }
   ]
  },
  {
   "id": "verdura-frutta",
   "titolo": "Verdure e frutta",
   "icona": "🥗",
   "intro": "Le verdure sono totalmente sostituibili tra loro e la quantità è 150-200g (1 piatto) oppure 80-100g per le verdure in foglia (es. insalata). La frutta è sostituibile per porzioni.",
   "esempio": "",
   "immagini": [
    {
     "file": "img/mano-piena-frutta-verdura.jpg",
     "didascalia": "Una mano piena o due mani piene: porzioni di frutta e verdura a occhio"
    }
   ],
   "gruppi": [
    {
     "nome": "Una porzione di frutta equivale a",
     "voci": [
      "1 mela = 1 pera/arancia/banana/fetta d’anguria",
      "2 kiwi/prugne/mandaranci/fette di melone",
      "4 albicocche",
      "250g fragole",
      "200g ananas/ciliegie",
      "125g frutti di bosco",
      "130g uva"
     ]
    }
   ]
  },
  {
   "id": "cena",
   "titolo": "Cena",
   "icona": "🍽️",
   "intro": "Ogni cena deve essere costituita da una porzione di proteine (es. 200g di carne bianca) + 1 contorno (es. 150-200g di verdure) e da una porzione di carboidrati (es. 50g pane integrale) + 1 porzione di frutta.",
   "esempio": "200g carne bianca + 150-200g verdure + 10g olio + 50g pane integrale + 1 porzione di frutta",
   "immagini": [],
   "gruppi": [
    {
     "nome": "200g di carne bianca sono sostituibili con",
     "voci": [
      "130g bresaola o prosciutto crudo",
      "150g prosciutto cotto sgrassato",
      "150g carne rossa/cavallo/tofu/seitan/roastbeef",
      "180g vitello",
      "1 mozzarella light",
      "120g pesce grasso (tonno/salmone/sgombro)",
      "170g pesce semi-magro (trota/orata)",
      "280g pesce magro (merluzzo/sogliola)",
      "3 uova/scatolette di tonno (80g cad.)",
      "130g farinata/ricotta",
      "160g ceci (cotti)",
      "60g ceci (secchi)",
      "220g fagioli borlotti (cotti)",
      "70g fagioli borlotti (secchi)",
      "240g fagioli cannellini (cotti)",
      "80g fagioli cannellini (secchi)",
      "250g lenticchie (cotte)",
      "60g lenticchie (secche)",
      "270g piselli (cotti)",
      "60g piselli (secchi)",
      "60g pasta di legumi al 100%"
     ]
    },
    {
     "nome": "50g di pane sono sostituibili con",
     "voci": [
      "30g grissini integrali",
      "100g purè pronto (preparato con latte intero e burro)",
      "150g patate/mais",
      "35g riso/pasta/pastina/grano saraceno/farro",
      "180g polenta pronta",
      "3 fette biscottate integrali",
      "3 wasa",
      "5 gallette di mais"
     ]
    }
   ]
  },
  {
   "id": "composti",
   "titolo": "Minestrone, panino e insalatona",
   "icona": "🥪",
   "intro": "Anche in questi casi bisogna comporre un pasto completo.",
   "esempio": "",
   "immagini": [],
   "gruppi": [
    {
     "nome": "Come inserire il minestrone",
     "voci": [
      "150-200g verdure (a scelta, qualsiasi andrà bene) + proteine (in questo caso legumi oppure al di fuori del minestrone 100g prosciutto crudo o 100g ricotta...) + carboidrati (35g riso o pasta oppure 50g pane o 150g patate) + frutta."
     ]
    },
    {
     "nome": "Come inserire il panino/piadina",
     "voci": [
      "Es. n°1 (nell’altro pasto mangiare il secondo piatto): 150-200g verdure (a scelta, qualsiasi andrà bene. Es. 1 pomodoro) + proteine (80g prosciutto crudo, 2 scatolette di tonno..) + carboidrati (100g pane integrale) + 10g olio (1 cucchiaio) + frutta.",
      "Es. n°2 (nell’altro pasto mangiare il primo piatto): 150-200g verdure (a scelta, qualsiasi andrà bene. Es. 1 pomodoro) + proteine (100g prosciutto crudo, 100g prosciutto cotto..) + carboidrati (50g pane integrale) + 10g olio (1 cucchiaio) + frutta.",
      "Es. n°3 (nell’altro pasto mangiare il secondo piatto): 150-200g verdure (a scelta, qualsiasi andrà bene. Es. 1 pomodoro) + proteine (80g prosciutto crudo, 2 scatolette di tonno..) + carboidrati (1 piada) + 10g olio (1 cucchiaio) + frutta."
     ]
    },
    {
     "nome": "Come inserire l’insalatona",
     "voci": [
      "250g verdure (a scelta, qualsiasi andrà bene) + proteine (3 uova, 3 scatolette di tonno, 100g mozzarella light..) + carboidrati (50g pane integrale) + 10g olio (1 cucchiaio) + frutta."
     ]
    }
   ]
  }
 ],
 "principi": {
  "titolo": "Piramide mediterranea e piatto sano",
  "intro": "La chiave per una corretta alimentazione sta nell’equilibrio tra i vari nutrienti e nella misura delle porzioni. Tramite la piramide alimentare della dieta mediterranea e lo schema del “Piatto sano” si può imparare a costruirsi sempre e ovunque un’alimentazione equilibrata.",
  "immagini": [
   {
    "file": "img/piramide-mediterranea.jpg",
    "didascalia": "Piramide della dieta mediterranea (IFMed, 2016)"
   },
   {
    "file": "img/piatto-sano.jpg",
    "didascalia": "Lo schema del “Piatto sano”"
   }
  ],
  "paragrafi": [
   "Questa è la piramide redatta da IFMed (International Foundation of Mediterranean Diet) nel 2016, basata su un consenso scientifico tra gli esperti e fondata sulla ricerca e sulle evidenze scientifiche nel campo della nutrizione e della salute, derivate da grandi studi epidemiologici.",
   "Alla base della piramide troviamo i COMPORTAMENTI BENEFICI: l’attività fisica regolare, l’adeguato riposo, la convivialità, la scelta di alimenti stagionali in base al territorio (km 0) e alle tradizioni, assieme all’acqua, nutriente fondamentale per mantenersi in buona salute.",
   "Ad OGNI PASTO, tutti i giorni, non possono mancare: frutta, verdura, ortaggi e cereali preferibilmente integrali (orzo, pasta, farro, cous cous, polenta, pane, quinoa, bulgur..), conditi con olio extravergine d’oliva e una varietà di spezie, erbe aromatiche (rosmarino, salvia, alloro, basilico, timo, curcuma, curry, pepe, peperoncino...) e semi oleosi (semi di zucca, sesamo, girasole, lino, chia..).",
   "Come FONTI PROTEICHE si consiglia di variare tra: legumi (fagioli, ceci, piselli, lenticchie..) da assumere volendo anche ogni giorno; pesce più di 2 volte alla settimana; carne bianca (pollo, tacchino..) 2 porzioni alla settimana; uova 2-4 porzioni; carne rossa (manzo, vitello, cavallo..) meno di 2 volte alla settimana; carne trasformata (affettati, insaccati, wurstel...) il meno possibile.",
   "Nel corso della giornata si consiglia inoltre di assumere 2 PORZIONI di latticini preferibilmente a basso apporto di grassi (yogurt, latte, formaggi magri come la ricotta) e della frutta a guscio (noci, nocciole, mandorle, arachidi, noci pecan..).",
   "In cima alla piramide troviamo i dolci (biscotti, gelati, torte, brioche, merendine varie..), il consumo consigliato è non più di 2 porzioni alla settimana."
  ]
 },
 "raccomandazioni": [
  {
   "n": 1,
   "testo": "Associa questa dieta ad una corretta attività fisica: Tutti i giorni cerca di effettuare una passeggiata di 30 minuti e almeno 2/3 volte a settimana fai una camminata veloce di 1 ora (tapis roulant), 1 ora di cyclette, 1 ora di Zumba oppure 1 ora di acquagym L’OMS (Organizzazione Mondiale della Sanità) indica come attività fisica minima quotidiana = 10.000 passi"
  },
  {
   "n": 2,
   "testo": "Consuma lo snack non più tardi di 45 minuti-1 ora prima dell’attività fisica, ti darà sufficiente energia e non ti resterà sullo stomaco."
  },
  {
   "n": 3,
   "testo": "Durante l’attività fisica mantieniti costantemente idratato. Prova con 1 cucchiaio di miele e succo di limone sciolti in una bottiglietta d’acqua."
  },
  {
   "n": 4,
   "testo": "Per ridurre il senso di fame prova con i semi di Chia, ti aiuteranno a sentirti sazia. Mescola 2 cucchiai di semi di Chia in un bicchiere d’acqua, attendi qualche minuto, ma non troppi, altrimenti assorbiranno troppi liquidi e bevi il tutto. Provali dopo la prima colazione e dopo pranzo in modo da frenare le voglie di metà giornata. Questi semi sono ricchi di Calcio e Omega-3!!"
  },
  {
   "n": 5,
   "testo": "Per aumentare l’apporto giornaliero di Omega-3 prova con l’olio di lino e/o i semi di lino: 1 solo cucchiaino di olio di lino contiene l’apporto giornaliero di Omega-3, lo stesso vale per 30gr di semi macinaci. L’olio di lino non va impiegato per cucinare, ma va usato a crudo e i semi di lino vanno macinati per favorire l’assorbimento dei nutrienti. Altre fonti di Omega-3 sono i pesci grassi (tonno, sgombro, salmone), i pesci azzurri (sardine, alici..) le noci (max 3 al giorno), i vegetali a foglia verde (spinaci, broccoli, lattuga, cavolo..), le leguminose (specialmente la soia), l’olio di semi di canapa (che, come quello di semi di lino, va consumato esclusivamente crudo), le alghe e gli oli algali."
  },
  {
   "n": 6,
   "testo": "Siediti ad ogni pasto. Mandare giù un boccone, magari di corsa e in piedi, predispone alle abbuffate e non vi permette di focalizzare ciò che state mangiando e la sua quantità."
  },
  {
   "n": 7,
   "testo": "Rallenta un attimo. Prova a rilassarti durante i pasti: gusterai di più il cibo e mangerai di meno."
  },
  {
   "n": 8,
   "testo": "Cambia i piatti. Cerca di usare i piatti da frutta o da formaggio, più piccoli di quelli piani e fondi. Con questo trucchetto, le porzioni vi sembreranno più grandi e il piatto sarà sempre pieno."
  },
  {
   "n": 9,
   "testo": "Non saltare i pasti o gli spuntini per dimagrire più in fretta. Così facendo, otterrai solo l’effetto opposto, scatenando una fame compulsiva; se sei convinto di mangiare troppo, riduci gradualmente le porzioni. Ma assolutamente mai saltare i pasti."
  },
  {
   "n": 10,
   "testo": "Consuma quotidianamente più porzioni di ortaggi e frutta fresca, e aumenta il consumo di legumi sia freschi che secchi, avendo sempre cura di limitare le aggiunte di oli e di grassi, che vanno eventualmente sostituiti con aromi e spezie."
  },
  {
   "n": 11,
   "testo": "Consuma regolarmente pane, pasta, riso ed altri cereali (meglio se integrali), evitando di aggiungere troppi condimenti grassi."
  },
  {
   "n": 12,
   "testo": "I vantaggi derivanti dal consumo di cibi integrali vanno in gran parte ricondotti all'aumentato apporto di fibra. La fibra alimentare infatti aumenta il senso di sazietà, facilità il transito intestinale e riduce l'assorbimento di grassi e colesterolo."
  },
  {
   "n": 13,
   "testo": "Quando puoi, scegli prodotti ottenuti a partire da farine integrali e non con la semplice aggiunta di crusca o altre fibre (leggi le etichette)."
  },
  {
   "n": 14,
   "testo": "Modera la quantità di grassi ed oli che usi per condire e cucinare. Utilizza eventualmente tegami antiaderenti, cotture al cartoccio, forno a microonde, cottura al vapore, ecc."
  },
  {
   "n": 15,
   "testo": "Impara a soffriggere utilizzando poco olio e molta acqua."
  },
  {
   "n": 16,
   "testo": "Limita il consumo di grassi da condimento di origine animale (burro, lardo, strutto, panna, ecc.)."
  },
  {
   "n": 17,
   "testo": "Per cuocere preferisci l'olio di cocco extravergine e il burro chiarificato/ghee (tengono molto bene le alte temperature senza ossidarsi); a crudo l'olio extravergine d'oliva, l'olio di semi di lino e l'olio di canapa; per friggere l'olio di arachidi."
  },
  {
   "n": 18,
   "testo": "Non eccedere nel consumo di alimenti fritti."
  },
  {
   "n": 19,
   "testo": "Mangia più spesso il pesce, sia fresco che surgelato, almeno 2-3 volte a settimana. Pesce grasso 70g (tonno/salmone/orata), pesce magro 180g (merluzzo/sogliola/trota)."
  },
  {
   "n": 20,
   "testo": "Tra le carni, preferisci quelle magre ed elimina il grasso visibile."
  },
  {
   "n": 21,
   "testo": "Se ti piacciono le uova ne puoi mangiare fino a 6 per settimana, distribuite nei vari giorni (attenzione al conteggio perché nei prodotti confezionati possono essere presenti le uova)"
  },
  {
   "n": 22,
   "testo": "Tutti i formaggi contengono quantità elevate di grassi: scegli comunque quelli più magri, oppure consumane porzioni più piccole."
  },
  {
   "n": 23,
   "testo": "Durante l’attività sportiva mantieniti idratato assumendo molta acqua."
  },
  {
   "n": 24,
   "testo": "Riduci progressivamente l’uso di sale sia a tavola che in cucina."
  },
  {
   "n": 25,
   "testo": "Preferisci al sale comune il sale arricchito con iodio (sale iodato) o il sale povero di sodio (sale dietetico)"
  },
  {
   "n": 26,
   "testo": "Insaporisci i cibi con erbe aromatiche (come aglio, cipolla, basilico, prezzemolo, rosmarino, salvia, menta, origano, maggiorana, sedano, porro, timo, semi di finocchio) e spezie (come pepe, peperoncino, noce moscata, zafferano, curry)."
  },
  {
   "n": 27,
   "testo": "Esalta il sapore dei cibi usando succo di limone e aceto."
  },
  {
   "n": 28,
   "testo": "Varia spesso le tue scelte a tavola."
  },
  {
   "n": 29,
   "testo": "Elimina le bevande gassate zuccherate, soprattutto se nella forma diet o zero. La lattina da 33 cl della Coca Cola contiene 35g di zucchero equivalenti a 12 cucchiaini scarsi oppure 7 bustine di zucchero!"
  },
  {
   "n": 30,
   "testo": "Al giorno sono concessi massimo 3 caffè, meglio se amari, oppure con mezzo cucchiaino di zucchero."
  },
  {
   "n": 31,
   "testo": "Bevi almeno 2 Litri d’acqua al giorno. Spesso si scambia la sete per fame, per cui mantieniti idratato."
  },
  {
   "n": 32,
   "testo": "Varia molto frutta e verdura es. 1 arancia, 2 pesche, 1 mela, 5 albicocche, 1 pera, 2 fette di melone, 1 fetta grande di anguria, 2 kiwi, 2 prugne."
  },
  {
   "n": 33,
   "testo": "Scegli frutta meno matura. Con la maturazione, l’amido contenuto nella frutta si trasforma in zucchero!"
  },
  {
   "n": 34,
   "testo": "Non aggiungere zucchero alla frutta."
  },
  {
   "n": 35,
   "testo": "Limita il consumo di dolci a 1 volta o 2 a settimana: ad es. 100g di gelato alla frutta (2 palline); 1 fettina di torta margherita; 30g cioccolato fondente."
  },
  {
   "n": 36,
   "testo": "Dormi un’ora in più per notte. Il sonno è fondamentale per ridurre il girovita e dormire una o due ore in più per notte può davvero fare la differenza. Quando non si dorme abbastanza, infatti sale il livello dell’ormone della fame (grelina), e scende quello della sazietà (leptina). Ciò fa accumulare grasso sulla pancia, provocando fame, indolenza e stress."
  },
  {
   "n": 37,
   "testo": "Alcool con moderazione; è concesso 1 bicchiere di vino/birra al giorno."
  },
  {
   "n": 38,
   "testo": "Se si esce per un aperitivo ordina sempre in aggiunta una bottiglietta d’acqua."
  },
  {
   "n": 39,
   "testo": "Tutti gli alimenti della dieta sono pesati a crudo e al netto degli scarti tranne i legumi, sono quelli in scatola e pesati dopo essere stati scolati."
  },
  {
   "n": 40,
   "testo": "È indispensabile favorire la varietà dell’alimentazione, anche perché la ripetizione sistematica dell’assunzione di alcuni alimenti da facilmente luogo all’insorgere di ipersensibilità."
  }
 ],
 "pesoCottura": {
  "titolo": "Variazioni in peso degli alimenti con la cottura",
  "sottotitolo": "Peso cotto corrispondente a 100 g di alimento crudo, parte edibile",
  "gruppi": [
   {
    "nome": "Cereali",
    "voci": [
     {
      "alimento": "Pasta all’uovo secca",
      "cotto": 299
     },
     {
      "alimento": "Pasta di semola corta",
      "cotto": 202
     },
     {
      "alimento": "Pasta di semola lunga",
      "cotto": 244
     },
     {
      "alimento": "Riso brillato",
      "cotto": 260
     },
     {
      "alimento": "Riso parboiled",
      "cotto": 236
     },
     {
      "alimento": "Tortellini freschi",
      "cotto": 192
     }
    ]
   },
   {
    "nome": "Legumi",
    "voci": [
     {
      "alimento": "Fagiolini",
      "cotto": 95
     },
     {
      "alimento": "Fave",
      "cotto": 80
     },
     {
      "alimento": "Piselli",
      "cotto": 87
     },
     {
      "alimento": "Ceci",
      "cotto": 290
     },
     {
      "alimento": "Fagioli",
      "cotto": 242
     },
     {
      "alimento": "Lenticchie",
      "cotto": 247
     }
    ]
   },
   {
    "nome": "Ortaggi",
    "voci": [
     {
      "alimento": "Agretti",
      "cotto": 86
     },
     {
      "alimento": "Asparagi",
      "cotto": 96
     },
     {
      "alimento": "Bieta",
      "cotto": 86
     },
     {
      "alimento": "Broccoletti a testa",
      "cotto": 96
     },
     {
      "alimento": "Broccoletti di rapa",
      "cotto": 95
     },
     {
      "alimento": "Carciofi",
      "cotto": 74
     },
     {
      "alimento": "Cardi",
      "cotto": 60
     },
     {
      "alimento": "Carote",
      "cotto": 87
     },
     {
      "alimento": "Cavolfiore",
      "cotto": 93
     },
     {
      "alimento": "Cavoli di Bruxelles",
      "cotto": 90
     },
     {
      "alimento": "Cavolo broccolo verde ramoso",
      "cotto": 57
     },
     {
      "alimento": "Cavolo cappuccio verde",
      "cotto": 99
     },
     {
      "alimento": "Cavolo verza",
      "cotto": 100
     },
     {
      "alimento": "Cicoria di campo",
      "cotto": 100
     },
     {
      "alimento": "Cicoria da taglio coltivata",
      "cotto": 80
     },
     {
      "alimento": "Cipolle",
      "cotto": 73
     },
     {
      "alimento": "Cipolline",
      "cotto": 78
     },
     {
      "alimento": "Finocchi",
      "cotto": 86
     },
     {
      "alimento": "Melanzane",
      "cotto": 80
     },
     {
      "alimento": "Patate con buccia",
      "cotto": 100
     },
     {
      "alimento": "Patate pelate",
      "cotto": 87
     },
     {
      "alimento": "Peperoni",
      "cotto": 60
     },
     {
      "alimento": "Porri",
      "cotto": 98
     },
     {
      "alimento": "Rape",
      "cotto": 93
     },
     {
      "alimento": "Spinaci",
      "cotto": 84
     },
     {
      "alimento": "Topinambur",
      "cotto": 100
     },
     {
      "alimento": "Zucchine",
      "cotto": 90
     }
    ]
   }
  ]
 },
 "acque": {
  "intro": "Si tratta di acqua arricchita di vitamine e minerali in maniera naturale, grazie all’aggiunta di frutta, le erbette fresche e/o le spezie e lasciata a macerare in frigorifero per un tempo variabile da 1 a 12 ore. Si può preparare in una brocca, un barattolo di vetro oppure una bottiglia di plastica.",
  "perche": [
   "Rende l’acqua decisamente più invitante",
   "L’acqua rende sazi e questo vi eviterà di cercare le tipiche schifezze durante il pomeriggio",
   "Bere molto aiuta a depurare il corpo dalle tossine",
   "Evitando le bevande zuccherate ridurrete il vostro apporto di zuccheri semplici",
   "Vi fa sentire bene e pieni di energia",
   "Alla fine, potete gustare la frutta"
  ],
  "ricette": [
   {
    "n": 1,
    "nome": "Acqua di fragole",
    "testo": "Per 1 litro d’acqua vi basteranno 5 fragole fresche e potrete dolcificare il tutto, se volete, con qualche foglia di stevia. Lasciate riposare l’acqua di fragole in un barattolo a chiusura ermetica, in frigorifero, per tutto il giorno o per tutta la notte."
   },
   {
    "n": 2,
    "nome": "Acqua di anguria",
    "testo": "Per preparare la vostra acqua di anguria, versate in un barattolo di vetro 5 o 6 cubetti di questo frutto. La quantità di frutta da utilizzare dipende dalle dimensioni del barattolo e dall’intensità di sapore desiderata. Per un effetto rinfrescante, insieme all’acqua unite anche qualche fogliolina di menta."
   },
   {
    "n": 3,
    "nome": "Acqua di mirtilli",
    "testo": "Versate uno strato di mirtilli freschi sul fondo del vostro barattolo di vetro. A piacere, potrete aggiungere delle fettine sottili di limone o di lime e qualche ago di rosmarino, a seconda dei vostri gusti, prima di versare l’acqua e di chiudere il barattolo. Il rosmarino aiuta la digestione e ha proprietà antinfiammatorie, mentre i mirtilli sono ricchi di antiossidanti."
   },
   {
    "n": 4,
    "nome": "Acqua di cetrioli e limone",
    "testo": "Per preparare questa acqua aromatizzata naturale, vi serviranno dei cetrioli e dei limoni freschi. Per ogni barattolo vi basteranno 4 o 5 fettine sottili di cetriolo e 2 o 3 fette o spicchi di limone. Per arricchire di gusto la bevanda, potrete unire anche qualche fogliolina di menta."
   },
   {
    "n": 5,
    "nome": "Acqua di lamponi",
    "testo": "Con dei lamponi freschi, meglio ancora se appena raccolti, potrete preparare una fantastica acqua aromatizzata. Versatene una manciata sul fondo di un barattolo e aggiungete una o due fettine di limone e qualche fogliolina di menta. Chiudete il barattolo e lasciate riposare in frigo per alcune ore prima di filtrare e servire."
   },
   {
    "n": 6,
    "nome": "Acqua di ciliegie",
    "testo": "Approfittate del momento in cui le ciliegie sono di stagione per preparare la vostra acqua aromatizzata naturale. Versatene alcune sul fondo di un bicchiere, lasciandole intere senza problemi, e aggiungete, insieme all’acqua, alcune fettine di lime o di limone. Lasciate riposare in frigorifero in un barattolo ben chiuso per qualche ora prima di servire."
   },
   {
    "n": 7,
    "nome": "Acqua di ananas",
    "testo": "Con ananas e foglioline di menta otterrete una bevanda dissetante da bere quando vorrete durante la giornata. Per prepararla, versate in un barattolo capiente da 2 a 4 fette d’ananas divise in pezzetti e 2 rametti di menta. Come di consueto, chiudete il barattolo e lasciate riposare in frigorifero."
   },
   {
    "n": 8,
    "nome": "Acqua di pesca",
    "testo": "Questa preparazione è molto semplice. Non dovrete fare altro che lavare, sbucciare e tagliare a fettine 1 pesca matura. Versate le fette di pesca in una brocca o in uno o più barattoli e lasciate riposare in frigorifero almeno per un’ora, in modo che l’acqua possa aromatizzarsi."
   },
   {
    "n": 9,
    "nome": "Acqua di limone e zenzero",
    "testo": "Per preparare un litro di acqua aromatizzata al limone e zenzero vi serviranno mezzo limone da tagliare a fettine e un pezzetto di radice di zenzero fresco. Versate in una brocca o in barattoli di vetro e lasciate riposare e insaporire per un’ora o più in frigorifero prima di servire."
   },
   {
    "n": 10,
    "nome": "Acqua di arance",
    "testo": "Per 1 litro d’acqua vi serviranno 1 arancia e 1 cetriolo da tagliare a fettine sottili. Versate tutti gli ingredienti in una brocca o in barattoli diversi e lasciate riposare in frigorifero almeno per un’ora prima di servire. Potete aggiungere anche qualche fettina di limone e delle foglioline di menta."
   }
  ]
 },
 "pesare": {
  "intro": "Servono solo alcuni utensili tra i più comuni…",
  "utensili": [
   "Un bicchiere da acqua",
   "Un cucchiaio da minestra",
   "Un cucchiaino da caffè",
   "Un piccolo mestolo"
  ],
  "equivalenze": [
   "2 bicchieri colmi di pasta cruda equivalgono a 80 grammi, mentre se la pasta è cotta saranno 3 mestoli rasi a contenerne 80 grammi",
   "½ bicchiere di riso prima della cottura contiene 80 grammi, l’equivalente di 3 mestoli di riso cotto",
   "1 cucchiaino di formaggio grattugiato equivale a 5 grammi",
   "1 cucchiaio di olio pesa 10 grammi",
   "Pane: un mignon equivale a 30 grammi, una rosetta piccola a 60 grammi e un panino grande a 100 grammi",
   "Una patata piccola pesa 60 gr, una media 150 grammi",
   "1 fetta di prosciutto crudo pesa 15 grammi",
   "1 fetta di prosciutto cotto pesa 20 grammi",
   "1 fetta di arrosto di petto di tacchino pesa 25 grammi",
   "1 fetta di bresaola pesa 10 grammi"
  ],
  "mano_intro": "Anche il palmo della mano può essere usato come unità di misura:",
  "mano": [
   "1 fetta di carne o di pesce, grande come il palmo della propria mano aperta, corrisponde a 120-150 grammi",
   "Una porzione di frutta da 150-200 grammi equivale al contenuto in un pugno della mano",
   "Una fetta di pane, che sarà grossa come la propria mano aperta, corrisponde a 40-60 grammi"
  ],
  "immagini": [
   {
    "file": "img/unita-a-mano.jpg",
    "didascalia": "Porzioni a occhio con mano e pugno"
   },
   {
    "file": "img/mano-piena-frutta-verdura.jpg",
    "didascalia": "Una mano piena o due mani piene per frutta e verdura"
   }
  ]
 },
 "stagionalita": {
  "mesi": [
   "Gennaio",
   "Febbraio",
   "Marzo",
   "Aprile",
   "Maggio",
   "Giugno",
   "Luglio",
   "Agosto",
   "Settembre",
   "Ottobre",
   "Novembre",
   "Dicembre"
  ],
  "nota": "I mesi sono numerati da 1 (gennaio) a 12 (dicembre). Dati trascritti dai calendari della frutta e della verdura inclusi nel piano.",
  "frutta": [
   {
    "nome": "Albicocche",
    "emoji": "🍑",
    "mesi": [
     6,
     7,
     8
    ]
   },
   {
    "nome": "Anguria",
    "emoji": "🍉",
    "mesi": [
     6,
     7,
     8
    ]
   },
   {
    "nome": "Arance",
    "emoji": "🍊",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     11,
     12
    ]
   },
   {
    "nome": "Caki",
    "emoji": "🟠",
    "mesi": [
     10,
     11,
     12
    ]
   },
   {
    "nome": "Castagne",
    "emoji": "🌰",
    "mesi": [
     1,
     2,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Ciliegie",
    "emoji": "🍒",
    "mesi": [
     5,
     6,
     7
    ]
   },
   {
    "nome": "Clementine",
    "emoji": "🍊",
    "mesi": [
     1,
     2,
     3,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Fichi",
    "emoji": "🟣",
    "mesi": [
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Fragole",
    "emoji": "🍓",
    "mesi": [
     4,
     5,
     6,
     7
    ]
   },
   {
    "nome": "Kiwi",
    "emoji": "🥝",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Lamponi",
    "emoji": "🔴",
    "mesi": [
     5,
     6,
     7,
     8,
     9,
     10
    ]
   },
   {
    "nome": "Limoni",
    "emoji": "🍋",
    "mesi": [
     1,
     2,
     3,
     4,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Mandarini",
    "emoji": "🍊",
    "mesi": [
     1,
     2,
     3,
     11,
     12
    ]
   },
   {
    "nome": "Mele",
    "emoji": "🍎",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Meloni",
    "emoji": "🍈",
    "mesi": [
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Mirtilli",
    "emoji": "🫐",
    "mesi": [
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Nespole",
    "emoji": "🟡",
    "mesi": [
     4,
     5
    ]
   },
   {
    "nome": "Noci",
    "emoji": "🥜",
    "mesi": [
     10,
     11,
     12
    ]
   },
   {
    "nome": "Pere",
    "emoji": "🍐",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Pesche",
    "emoji": "🍑",
    "mesi": [
     5,
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Pompelmo",
    "emoji": "🍊",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     11,
     12
    ]
   },
   {
    "nome": "Susine",
    "emoji": "🟣",
    "mesi": [
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Uva",
    "emoji": "🍇",
    "mesi": [
     7,
     8,
     9,
     10,
     11
    ]
   }
  ],
  "verdura": [
   {
    "nome": "Aglio",
    "emoji": "🧄",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11
    ]
   },
   {
    "nome": "Asparagi",
    "emoji": "🌱",
    "mesi": [
     3,
     4,
     5,
     6
    ]
   },
   {
    "nome": "Barbabietole",
    "emoji": "🟣",
    "mesi": [
     1,
     2,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Bietola da costa",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Carciofi",
    "emoji": "🌿",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Carote",
    "emoji": "🥕",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cavolfiore",
    "emoji": "🥦",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cavolo broccolo",
    "emoji": "🥦",
    "mesi": [
     1,
     2,
     3,
     4,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cavolo cappuccio",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cavolini di Bruxelles",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cavolo verza",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     4,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Cetriolo",
    "emoji": "🥒",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Cipolla",
    "emoji": "🧅",
    "mesi": [
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Fagioli",
    "emoji": "🫘",
    "mesi": [
     5,
     6,
     7,
     8,
     9,
     10,
     11
    ]
   },
   {
    "nome": "Fagiolini",
    "emoji": "🌱",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ]
   },
   {
    "nome": "Fave",
    "emoji": "🌱",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9
    ]
   },
   {
    "nome": "Finocchio",
    "emoji": "🌿",
    "mesi": [
     1,
     2,
     3,
     4,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Insalata",
    "emoji": "🥗",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Melanzana",
    "emoji": "🍆",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ]
   },
   {
    "nome": "Peperone",
    "emoji": "🫑",
    "mesi": [
     4,
     5,
     6,
     7,
     8,
     9,
     10
    ]
   },
   {
    "nome": "Piselli",
    "emoji": "🌱",
    "mesi": [
     4,
     5,
     6
    ]
   },
   {
    "nome": "Pomodori",
    "emoji": "🍅",
    "mesi": [
     5,
     6,
     7,
     8,
     9,
     10
    ]
   },
   {
    "nome": "Porri",
    "emoji": "🌿",
    "mesi": [
     1,
     2,
     3,
     4,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Prezzemolo",
    "emoji": "🌿",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Radicchio",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Ravanello",
    "emoji": "🔴",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Sedano",
    "emoji": "🌿",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     6,
     7,
     8,
     9,
     10,
     11
    ]
   },
   {
    "nome": "Spinaci",
    "emoji": "🥬",
    "mesi": [
     1,
     2,
     3,
     4,
     5,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Zucca",
    "emoji": "🎃",
    "mesi": [
     1,
     2,
     8,
     9,
     10,
     11,
     12
    ]
   },
   {
    "nome": "Zucchine",
    "emoji": "🥒",
    "mesi": [
     5,
     6,
     7,
     8,
     9,
     10
    ]
   }
  ],
  "immagini": [
   {
    "file": "img/calendario-frutta.jpg",
    "didascalia": "Calendario della frutta di stagione"
   },
   {
    "file": "img/calendario-verdura.jpg",
    "didascalia": "Calendario della verdura di stagione"
   }
  ]
 },
 "porzioni": [
  {
   "file": "img/porzioni-pane-1.jpg",
   "categoria": "Pane e cereali",
   "titolo": "Pane comune",
   "didascalia": "Porzioni da 30g, 50g e 100g"
  },
  {
   "file": "img/porzioni-pane-2.jpg",
   "categoria": "Pane e cereali",
   "titolo": "Pane e panini",
   "didascalia": "A) Pane tipo baguette 120g; B) Panino al latte 40g; C) Panino tipo michetta 60g; D) Panino integrale 60g; E) Panino tipo biovetta 80g; F) Pane per hamburger 40g"
  },
  {
   "file": "img/porzioni-cereali-muesli.jpg",
   "categoria": "Pane e cereali",
   "titolo": "Muesli e fiocchi di cereali",
   "didascalia": "A) 15g; B) 30g; C) 45g (muesli) · 1) 15g; 2) 30g; 3) 45g (fiocchi di cereali)"
  },
  {
   "file": "img/porzioni-latte.jpg",
   "categoria": "Latte e latticini",
   "titolo": "Latte",
   "didascalia": "A) 120 ml; B) 200 ml; C) 300 ml"
  },
  {
   "file": "img/porzioni-pasta-sugo.jpg",
   "categoria": "Pasta, riso e patate",
   "titolo": "Pasta al sugo",
   "didascalia": "A) 40g pasta, 20g sugo, 3g grana; B) 60g pasta, 30g sugo, 5g grana; C) 100g pasta, 50g sugo, 10g grana"
  },
  {
   "file": "img/porzioni-gnocchi.jpg",
   "categoria": "Pasta, riso e patate",
   "titolo": "Gnocchi di patate",
   "didascalia": "Porzioni da 100g, 200g e 300g"
  },
  {
   "file": "img/porzioni-spaghetti.jpg",
   "categoria": "Pasta, riso e patate",
   "titolo": "Spaghetti al pomodoro",
   "didascalia": "Porzioni da 50g, 80g e 110g"
  },
  {
   "file": "img/porzioni-patate.jpg",
   "categoria": "Pasta, riso e patate",
   "titolo": "Patate lesse intere o a fette",
   "didascalia": "Porzioni da 100g, 150g e 200g"
  },
  {
   "file": "img/porzioni-piselli.jpg",
   "categoria": "Legumi e verdure",
   "titolo": "Piselli in scatola",
   "didascalia": "Porzioni da 75g, 125g e 175g"
  },
  {
   "file": "img/porzioni-carote.jpg",
   "categoria": "Legumi e verdure",
   "titolo": "Carote cotte e crude",
   "didascalia": "Porzioni di carote cotte e crude, con le grammature riportate sulla foto"
  },
  {
   "file": "img/porzioni-pomodori.jpg",
   "categoria": "Legumi e verdure",
   "titolo": "Pomodori",
   "didascalia": "Porzioni da 100g, 150g e 200g"
  },
  {
   "file": "img/porzioni-insalata.jpg",
   "categoria": "Legumi e verdure",
   "titolo": "Insalata verde",
   "didascalia": "Porzioni da 50g, 100g e 150g"
  },
  {
   "file": "img/porzioni-zucchine-melanzane.jpg",
   "categoria": "Legumi e verdure",
   "titolo": "Zucchine e melanzane",
   "didascalia": "Porzioni da 100g, 150g e 200g"
  },
  {
   "file": "img/porzioni-mozzarella.jpg",
   "categoria": "Latte e latticini",
   "titolo": "Mozzarella (treccia, bocconcino, bufala o fiordilatte)",
   "didascalia": "Porzioni da 60g, 125g e 200g"
  },
  {
   "file": "img/porzioni-formaggi.jpg",
   "categoria": "Latte e latticini",
   "titolo": "Parmigiano, groviera, caciotta, provolone, brie",
   "didascalia": "Porzioni da 30g, 50g e 70g"
  },
  {
   "file": "img/porzioni-bovino.jpg",
   "categoria": "Carne, pesce e salumi",
   "titolo": "Fettina di bovino alla griglia e arrosto",
   "didascalia": "Porzioni da 80g, 120g e 150g"
  },
  {
   "file": "img/porzioni-pollo.jpg",
   "categoria": "Carne, pesce e salumi",
   "titolo": "Petto di pollo",
   "didascalia": "Porzioni da 80g, 120g e 160g"
  },
  {
   "file": "img/porzioni-prosciutto-crudo.jpg",
   "categoria": "Carne, pesce e salumi",
   "titolo": "Prosciutto crudo",
   "didascalia": "Porzioni da 20g, 40g e 60g"
  },
  {
   "file": "img/porzioni-merluzzo.jpg",
   "categoria": "Carne, pesce e salumi",
   "titolo": "Merluzzo, filetto",
   "didascalia": "Porzioni da 100g, 150g e 200g"
  },
  {
   "file": "img/porzioni-dolci-spalmare.jpg",
   "categoria": "Dolci",
   "titolo": "Dolci da spalmare",
   "didascalia": "Marmellata, miele e crema alle nocciole: porzioni da 5g, 10g e 15g"
  },
  {
   "file": "img/porzioni-gelato.jpg",
   "categoria": "Dolci",
   "titolo": "Gelato",
   "didascalia": "Porzioni da 35g, 70g, 100g e 250g"
  },
  {
   "file": "img/guida-piatto-1.jpg",
   "categoria": "Guida al piatto",
   "titolo": "Guida alla creazione di un piatto (1)",
   "didascalia": "Come comporre il piatto, con porzioni e quadranti"
  },
  {
   "file": "img/guida-piatto-2.jpg",
   "categoria": "Guida al piatto",
   "titolo": "Guida alla creazione di un piatto (2)",
   "didascalia": "Come comporre il piatto, con porzioni e quadranti"
  }
 ],
 "unita": {
  "gruppi": [
   {
    "nome": "Cucchiai, tazze e misure comuni",
    "voci": [
     {
      "voce": "1 bicchiere da tavola di riso",
      "valore": "160 gr."
     },
     {
      "voce": "1 bicchiere da tavola di latte",
      "valore": "200 gr."
     },
     {
      "voce": "1 cucchiaio di latte o acqua",
      "valore": "10-15 gr."
     },
     {
      "voce": "1 cucchiaio di zucchero",
      "valore": "15 gr."
     },
     {
      "voce": "1 cucchiaio di zucchero a velo",
      "valore": "5 gr."
     },
     {
      "voce": "1 cucchiaio di farina",
      "valore": "10-12 gr."
     },
     {
      "voce": "1 cucchiaio di fecola",
      "valore": "20 gr."
     },
     {
      "voce": "1 cucchiaio di semolino",
      "valore": "12 gr."
     },
     {
      "voce": "1 cucchiaio di pangrattato",
      "valore": "10 gr."
     },
     {
      "voce": "1 cucchiaio di cacao",
      "valore": "5 gr."
     },
     {
      "voce": "1 cucchiaio di panna",
      "valore": "15 gr."
     },
     {
      "voce": "1 cucchiaio di olio",
      "valore": "10-13 gr."
     },
     {
      "voce": "1 cucchiaio di burro",
      "valore": "10 gr."
     },
     {
      "voce": "1 cucchiaio di grana grattato",
      "valore": "7-10 gr."
     },
     {
      "voce": "1 cucchiaio di miele",
      "valore": "20-22 gr."
     },
     {
      "voce": "1 cucchiaio di marmellata",
      "valore": "18-20 gr."
     },
     {
      "voce": "1 cucchiaio di sale grosso",
      "valore": "25 gr."
     },
     {
      "voce": "1 cucchiaio di sale fine",
      "valore": "20 gr."
     },
     {
      "voce": "1 cucchiaio di riso",
      "valore": "20 gr."
     },
     {
      "voce": "1 cucchiaino di lievito in polv.",
      "valore": "4 gr."
     },
     {
      "voce": "1 cucchiaino di sale fino",
      "valore": "5 gr."
     },
     {
      "voce": "1 tazza di riso",
      "valore": "200 gr."
     },
     {
      "voce": "1 tazza di zucchero",
      "valore": "250 gr."
     },
     {
      "voce": "1 tazza di farina",
      "valore": "100 gr."
     },
     {
      "voce": "1 tazza di sale",
      "valore": "250 gr."
     },
     {
      "voce": "1 tazza di pasta corta",
      "valore": "200 gr."
     },
     {
      "voce": "1 tazzina da caffè di riso",
      "valore": "70-80 gr."
     },
     {
      "voce": "1 tazzina da caffè di pastina",
      "valore": "15 gr."
     },
     {
      "voce": "1 litro di olio",
      "valore": "900 gr."
     },
     {
      "voce": "1 litro di acqua",
      "valore": "1 chilo"
     }
    ]
   },
   {
    "nome": "Per i liquidi",
    "voci": [
     {
      "voce": "1 cucchiaio da caffè",
      "valore": "5 ml."
     },
     {
      "voce": "1 cucchiaio da tè",
      "valore": "10 ml."
     },
     {
      "voce": "1 cucchiaio da tavola",
      "valore": "15 ml."
     },
     {
      "voce": "1 bicchierino da liquore",
      "valore": "30 ml."
     },
     {
      "voce": "1 tazzina da caffè",
      "valore": "50 ml."
     },
     {
      "voce": "1 tazza da tè",
      "valore": "150 ml."
     },
     {
      "voce": "1 bicchiere da tavola medio",
      "valore": "200 ml."
     },
     {
      "voce": "1 tazza da caffellatte",
      "valore": "250 ml."
     }
    ]
   },
   {
    "nome": "Infine…",
    "voci": [
     {
      "voce": "3 cucchiaini da caffè",
      "valore": "2 cucchiaini da tè = 1 cucchiaio da minestra"
     },
     {
      "voce": "16 cucchiai da minestra",
      "valore": "1 tazza da caffè/latte"
     },
     {
      "voce": "2 tazze",
      "valore": "mezzo litro"
     },
     {
      "voce": "4 tazze",
      "valore": "1 litro"
     },
     {
      "voce": "1 bicchiere da acqua",
      "valore": "200 ml."
     },
     {
      "voce": "1 bicchiere da vino",
      "valore": "100 ml."
     },
     {
      "voce": "1 zolletta di zucchero",
      "valore": "6 grammi circa"
     },
     {
      "voce": "2 zucchine medie",
      "valore": "200 gr."
     },
     {
      "voce": "2 pomodori medi",
      "valore": "200 gr."
     },
     {
      "voce": "1 finocchio",
      "valore": "200 gr."
     },
     {
      "voce": "3 carote medie",
      "valore": "200 gr."
     },
     {
      "voce": "1/3 melanzana",
      "valore": "200 gr."
     },
     {
      "voce": "1 peperone e mezzo medio",
      "valore": "200 gr."
     }
    ]
   }
  ]
 },
 "ricettario": [
  {
   "id": "bicchierino-al-mirtillo",
   "titolo": "Bicchierino al mirtillo",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per circa 4 porzioni: 100 g di anacardi al naturale, 100 g di latte di riso (sconsigliate le variazioni), 100 g di yogurt al naturale (bene anche di soia), 20 g di cioccolato fondente tritato (min 85% di cacao), Vaniglia naturale in polvere qb",
    "Base: 45 g circa di cocco in scaglie, 120 g di datteri al naturale, 1 cucchiaino di scorza di limone bio",
    "Salsa: 200 g di mirtilli freschi, Scorza di limone bio qb, 1 cucchiaio scarso di acqua"
   ],
   "preparazione": [
    "Procedimento: Se puoi tieni in ammollo gli anacardi per 1-2 ore altrimenti procedi. Dopo avere sciacquato e scolato bene gli anacardi, frullali finemente insieme al latte di riso fino ad ottenere una crema soffice e liscia. Mescola la crema insieme allo yogurt, alla vaniglia e al cioccolato fondente. Fai riposare in frigo. In un tegamino fai cuocere i mirtilli lavati e asciugati con un goccino d’acqua e la scorza di limone. Fai addensare e lascia intiepidire o raffreddare. Trita in un piccolo robot a lama bassa i datteri con il cocco rapé e la scorza di limone. Distribuisci alla base di piccoli bicchieri o vasetti pressando un po’; Aggiungi la crema e in seguito la salsa di mirtilli. Il consiglio è quello di prepararlI alla sera"
   ]
  },
  {
   "id": "biscotti-ai-fiocchi-davena-e-banana",
   "titolo": "Biscotti ai fiocchi d’avena e banana",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per circa 40 biscotti: 3 banane mature, 200g di fiocchi di avena, 12 datteri, 30g olio (io extra vergine di oliva), 1/2 cucchiaino di polvere di vaniglia"
   ],
   "preparazione": [
    "Preparazione: Sbucciate e tagliate le banane a pezzetti, poi schiacciatele con una forchetta. Togliete il nocciolo dai datteri e tagliateli a pezzetti. Aggiungete tutt gli ingredienti alle banane schiacciate (olio, fiocchi d'avena, datteri e vaniglia) e mescolate fino ad amalgamare il tutto. Aiutandovi con un cucchiaio, prendere piccoli pezzi di impasto, fatene una pallina con le mani e poi schiacciatela su una teglia ricoperta di carta da forno. Cuocete in forno caldo 180° ventilato 15 minuti circa."
   ]
  },
  {
   "id": "biscotti-integrali-con-fiocchi-davena",
   "titolo": "Biscotti integrali con fiocchi d’avena",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 20 biscotti: 150 g. di farina integrale, 70 g. di zucchero, 40 ml. di olio evo, 30 g. di mirtilli disidratati, 10 g. di fiocchi d'avena, mezzo cucchiaino di lievito vanigliato, 1 pizzico di sale"
   ],
   "preparazione": [
    "Indicazioni: Mischiate assieme l'olio e lo zucchero, quindi aggiungete la farina, i mirtilli, il lievito ed il pizzico di sale. Lavorate l'impasto e, con l'aiuto della carta da forno, formate una specie di cilindro. Lasciatelo in frigorifero per 15 minuti. Quindi rimuovete la carta da forno e tagliate i biscotti dello spessore di mezzo centimetro. Distribuite sopra i fiocchi d'avena e schiacciateli leggermente. Rivestite una teglia di carta da forno, disponete i biscotti distanziati fra loro ed infornate per 15 minuti a 180°C."
   ]
  },
  {
   "id": "brioche-allacqua",
   "titolo": "Brioche all’acqua",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti per 8 porzioni: 250 g. di farina 00, 125 ml. di acqua, 3 g. di lievito di birra, 60 g. di zucchero, 10 g. di stevia, 30 g. di olio di oliva evo, 1 pizzico di sale, buccia grattugiata di mezzo limone, zucchero a velo q.b."
   ],
   "preparazione": [
    "Impastate la farina con il lievito, l'acqua, lo zucchero, la stevia, la scorza del limone per una decina di minuti. Quindi aggiungete l'olio un poco alla volta facendolo assorbire molto bene. Aggiungete un pizzico di sale e continuate ad impastare fino ad ottenere un composto liscio ed elastico. Lasciate lievitare in una ciotola coperta da uno strofinaccio finché l'impasto non raddoppia. A questo punto formate 8 palline, lavorandole finché non sono lisce: disponetele su una teglia rivestita di carta da forno ed infornatele a 180° con funzione ventilato per circa 15 minuti dal raggiungimento della temperatura. Fate completamente raffreddare le brioche e quindi spolverizzatele con lo zucchero a velo."
   ]
  },
  {
   "id": "burger-di-ceci",
   "titolo": "Burger di ceci",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 4 burger: 350 grammi di ceci lessati, 1 cucchiaio d’olio extravergine d'oliva, noce moscata in polvere, erba cipollina tritata, prezzemolo tritato, pangrattato (2 cucchiai circa), sale e pepe, curry"
   ],
   "preparazione": [
    "Indicazioni: Schiacciate i ceci con una forchetta, se sono abbastanza morbidi, oppure passateli al mixer con un filo d'olio ed aggiungendo acqua tiepida quanto basta fino ad ottenere una purea non troppo liquida. Trasferite il composto all'interno di una ciotola ed amalgamando con un cucchiaio aggiungete le spezie (un pizzico di noce moscata e mezzo cucchiaino di curry) e le erbe aromatiche tritate (quantità a piacere). Salate e pepate. Regolate la consistenza del composto aggiungendo due o tre cucchiai di pangrattato, dividete il composto in quattro parti, formate delle palline e schiacciatele dopo averle disposte su di un piatto o su carta forno. Dorate in padella o cuocete in forno a 180°C per 20-25 minuti."
   ]
  },
  {
   "id": "burger-di-fagioli-rossi",
   "titolo": "Burger di fagioli rossi",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 4 burger: 350 grammi di fagioli rossi lessati, 1 cucchiaio d’olio extravergine d'oliva, prezzemolo tritato, farina di mais (3 cucchiai circa), 1 scalogno, sale e pepe"
   ],
   "preparazione": [
    "Indicazioni: Per eseguire questa ricetta potrete partire utilizzando dei fagioli rossi già lessati (350 grammi) o secchi (180 grammi) da lessare dopo averli lasciati in ammollo in acqua per una notte, con l'aggiunta di un pizzico di bicarbonato. I fagioli già cotti o una volta che si saranno ben ammorbiditi dovranno essere frullati nel mixer oppure schiacciati con una forchetta fino a quando non otterrete una vera e propria purea a cui potrete a questo punto addizionare sale e pepe, un cucchiaio di olio extravergine d'oliva e del prezzemolo (fresco o secco) tritato. A questo punto tritate e dorate in padella uno scalogno ed amalgamatelo alla purea di fagioli rossi insieme a tre o quattro cucchiai di farina di mais, fino ad ottenere un composto ben lavorabile. Date forma ai burger con l'aiuto delle mani. Se saranno sufficientemente consistenti potranno essere cotti in padella per circa cinque minuti per lato, altrimenti disponeteli su di una teglia oliata o ricoperta di carta forno e cuocete per 20 minuti a 180°C."
   ]
  },
  {
   "id": "burger-di-lenticchie",
   "titolo": "Burger di lenticchie",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 4 burger: 180 grammi di lenticchie verdi secche, 1 cucchiaio d’olio extravergine d'oliva, origano tritato, salvia fresca, pangrattato (3 cucchiai circa), sale e pepe"
   ],
   "preparazione": [
    "Indicazioni: Le lenticchie verdi non necessitano di ammollo prima di essere cotte, quindi potrete procedere direttamente con il lessarle per circa 20-25 minuti in acqua non salata, accompagnate da alcune foglie di salvia, che oltre ad insaporirle le renderanno ancora più digeribili. Una volta che le lenticchie saranno pronte, scolatele e frullale nel mixer incorporando anche le foglie di salvia utilizzate nella cottura ed aggiungendo un cucchiaino di origano tritato, un cucchiaio di olio extravergine d'oliva, sale e pepe. Frullate il tutto e trasferite il composto ottenuto in una ciotola. Iniziate con l'aggiunta di un cucchiaio di pangrattato e mescolate. Aggiungetene ancora due o tre cucchiai fino ad ottenere un composto facilmente lavorabile con le mani. Foderate una teglia con carta da forno, formate con le mani delle palline e disponetele su di essa, schiacciandole fino ad ottenere la forma e lo spessore desiderato per ognuno dei vostri burger. Cuocete in forno a 180°C per 20 minuti e servite."
   ]
  },
  {
   "id": "burger-di-tofu",
   "titolo": "Burger di tofu",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 1 persona: 150 gr di tofu al naturale; 100 gr di peperoni; 1 cucchiaio di salsa di soia; mezzo spicchio d’aglio schiacciato; 1 cucchiaio di doppio concentrato di pomodoro; 1 tazzina da caffè di riso o di burghul; farina di mais q.b; 15 gr di olio evo q.b; semi di cumino q.b."
   ],
   "preparazione": [
    "Indicazioni: Frullate il tofu con i peperoni, la salsa di soia, lo spicchio d’aglio schiacciato e il concentrato di pomodoro. Cuocete il riso o il burgul stracuocendolo leggermente. Mixatelo al tofu frullato, salate e pepate, se volete aggiungete anche un pizzico di peperoncino e/o i semi di cumino. Formate delle palline e schiacciatele coi palmi delle mani, passatele nella farina di mais e cuocete da entrambi i lati in padella con poco olio."
   ]
  },
  {
   "id": "cheesecake-nel-bicchiere",
   "titolo": "Cheesecake nel bicchiere",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 1 porzione: 4 biscotti secchi (es. Oro Saiwa) + 15g frutta secca a piacere + 1 yogurt greco (Total Fage 0%) + 1 vaschetta di frutti di bosco + 1 cucchiaino di miele"
   ],
   "preparazione": [
    "Frullate i biscotti insieme alla frutta secca e versate il tutto sul fondo di un bicchiere. Aggiungete il miele e mescolate. Frullate lo yogurt greco con mezza vaschetta di frutti di bosco e versatelo nel bicchiere. La restante frutta potete tagliarla a pezzetti oppure frullarla, aggiungendola poi sopra allo yogurt."
   ]
  },
  {
   "id": "chia-pudding-al-cacao",
   "titolo": "Chia pudding al cacao",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti: 20 g di semi di chia, 100 ml di latte (vaccino o di soia), 1 cucchiaino di cacao amaro"
   ],
   "preparazione": [
    "In un barattolo o contenitore ermetico unite i semi di chia con il latte vegetale e il cacao amaro. Mescolate bene, coprite con la pellicola trasparente e trasferite nel frigorifero per tutta la notte."
   ]
  },
  {
   "id": "cioccolata-calda",
   "titolo": "Cioccolata calda",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti: 15 gr. cioccolato fondente all'85%, 150 ml latte parzialmente scremato senza lattosio* bio, 1 cucchiaino di amido di mais, 1 cucchiaino di cacao amaro, 1/2 cucchiaino di cannella in polvere"
   ],
   "preparazione": [
    "In un pentolino scaldare il latte e aggiungere il resto degli ingredienti continuando a mescolare per evitare la formazione di grumi"
   ]
  },
  {
   "id": "cous-cous-verde",
   "titolo": "Cous cous verde",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 3 persone: 220 gr di cous cous; 300 gr di tofu al naturale; 3 cucchiai di olio evo; 3 cucchiai di basilico fresco tritato; 1 spicchio d’aglio; 150 gr di piselli già cotti; latte di soia q.b; 1 arancia non trattata."
   ],
   "preparazione": [
    "Preparazione: Cuocete il cous cous seguendo le istruzioni indicate sulla confezione. Preparare la crema di tofu al basilico: frullate il tofu con 3 cucchiai di olio evo, il basilico, lo spicchio d’aglio (facoltativo) e il latte di soia sufficiente a creare una crema liscia e vellutata. Salate e pepate. In una ciotola unite al cous cous la crema di tofu al basilico, i piselli e la buccia dell’arancia grattugiata. Impiattate avendo la cura di mettere in ogni piatto una fettina d’arancia in modo che il commensale, se lo desidera, possa spremerne il succo per arricchire il proprio cous cous."
   ]
  },
  {
   "id": "crepes",
   "titolo": "Crepes",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti per 8 crepes: 170ml latte parz. scremato bio, 100g farina tipi 2, 25g burro fuso bio, 2 uova bio, sale"
   ],
   "preparazione": [
    "Preparazione: In una ciotola unite tutti gli ingredienti e mescolateli bene usando una frusta. Lasciare riposare il composto per almeno 15 minuti. Spennellate di burro una padella calda antiaderente e versate 2 cucchiai di impasto, in modo che si sparga uniformemente a coprire il fondo. Quando i bordi della crêpe si sollevano, giratela per far cuocere l’altro lato."
   ]
  },
  {
   "id": "crocchette-di-spinaci-e-tofu",
   "titolo": "Crocchette di spinaci e tofu",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti: Spinaci già puliti 420 g, tofu 200 g, pane raffermo grattugiato q.b., sale, pepe, noce moscata, olio extra vergine di oliva"
   ],
   "preparazione": [
    "Preparazione: Sbriciolate il tofu in un mixer e lessate gli spinaci in acqua salata. Scolate gli spinaci, fateli raffreddare e strizzateli perfettamente. Frullateli insieme al tofu. Aggiungete 1 cucchiaio di pane grattugiato, salate, pepate e profumate con la noce moscata grattugiata. Inumiditevi le mani e formate delle crocchette o polpette schiacciate. Passate le polpette ottenute nel pane grattugiato (molto buone anche coi semi di sesamo) e cuocetele in una padella antiaderente con un filo d'olio a fiamma bassa per circa 5 minuti per lato oppure in forno ventilato a 180° fino a doratura"
   ]
  },
  {
   "id": "dado-vegetale",
   "titolo": "Dado vegetale",
   "categoria": "Basi",
   "ingredienti": [
    "Ingredienti: 200g sedano, 3 carote, 1 porro, 4 coste di bieta, 1 cipolla, 2 zucchine, 15 pomodorini, 100g prezzemolo, 20 foglie di basilico, 5 foglie di salvia, ½ bicchiere di vino bianco, 3 cucchiai di olio EVO, 3 cucchiai di sale"
   ],
   "preparazione": [
    "Preparazione: Lava le verdure e le erbe aromatiche. Sminuzzale e versale in una pentola con olio, vino e sale. Lascia cuocere a fuoco lento per 50 minuti. Pian piano il composto inizierà a diventare dento, ma dovrai renderlo omogeneo con un frullatore ad immersione. Lascialo raffreddare e dopodiché dividilo nelle vaschette per i cubetti di ghiaccio."
   ]
  },
  {
   "id": "farinata-di-ceci",
   "titolo": "Farinata di ceci",
   "categoria": "Secondi",
   "ingredienti": [
    "250g di farina di ceci, 3 cucchiai di olio extravergine di oliva, sale q.b. rosmarino q.b."
   ],
   "preparazione": [
    "Preparazione: In una ciotola capiente, diluire a poco a poco la farina di ceci con 900ml di acqua fredda, sciogliendo bene i grumi. Salare e fare riposare almeno 3 ore. Schiumare, mescolare con 3 cucchiai di olio di oliva e versare in una larga teglia da forno con i bordi bassi ben unta, in modo che venga non più alta di 2 cm. Cospargere di rosmarino e infornate a 200° fino a quando non avrà preso un bel colore dorato."
   ]
  },
  {
   "id": "fettuccine-al-forno-con-piselli-e-asparagi",
   "titolo": "Fettuccine al forno con piselli e asparagi",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per una teglia da circa 10 porzioni: Fettuccine di pasta all'uovo fresche: 1 kg (se secche la quantità è inferiore: circa 700g), Mozzarella: 400g, Piselli freschi o surgelati: 150g, Asparagi: 200g, Parmigiano o grana: 200g"
   ],
   "preparazione": [
    "Lessate le fettuccine in abbondante acqua salata. Scolatele al dente e rovesciatele sopra un canovaccio. Tagliate a dadini la mozzarella e gli asparagi che avrete precedentemente lessato. Aggiungete i piselli anch'essi già cotti e aggiustati di sale. Aggiungete tutti questi ingredienti alle fettuccine, mescolate bene e rovesciate il composto dentro una teglia da forno leggermente imburrata. Cospargete la superficie con il parmigiano e cuocete in forno già caldo (200°) per circa 20 minuti (o fino a quando si sarà formata una crosticina dorata)."
   ]
  },
  {
   "id": "french-toast",
   "titolo": "French toast",
   "categoria": "Colazione",
   "ingredienti": [],
   "preparazione": [
    "Sbattete 1 uovo bio con il latte senza lattosio. Io adoro la cannella quindi ne ho aggiunta parecchio. Immergetevi le fette di pane e giratele da entrambi i lati. Scaldate una padella antiaderente e aggiungete una noce di burro bio o qualche spruzzata d'olio. Aggiunte le fette di pane e fatele cuocere qualche minuto per lato fino a doratura."
   ]
  },
  {
   "id": "fusilli-con-sugo-di-gamberi-e-zucchine",
   "titolo": "Fusilli con sugo di gamberi e zucchine",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 320 gr pasta, 300g gamberi, 100g pomodori ciliegia, ½ bicchiere di vino bianco, 40 ml olio extravergine d’oliva (4 cucchiai), 1 spicchio d’aglio, 2 zucchine, pepe bianco q/b, finocchietto selvatico q/b, sale q/b"
   ],
   "preparazione": [
    "Preparazione: Sgusciate i gamberi, aprendo delicatamente il carapace. Con uno stecchino di legno, eliminate il filetto nero lungo il dorso. Lavate rapidamente i gamberi, asciugateli con carta assorbente da cucina e tagliate ciascuno in 3 parti. Lavate le zucchine, asciugatele, eliminate le estremità e tagliatele a rondelle, possibilmente dello stesso spessore. Preparate il sugo: schiacciate e spellate lo spicchio d'aglio, lasciatelo rosolare in una padella con l’olio ed eliminatelo. Unite i gamberi, cuoceteli a fiamma alta per 1 minuto scarso, regolate di sale, bagnateli con ½ bicchiere di vino bianco caldo, lasciatelo leggermente evaporare e sgocciolateli dal fondo di cottura con una schiumarola. Mettete nella padella con il fondo di cottura rimasto il finocchietto tritato, i pomodorini tagliati a metà e le zucchine, regolate di sale e cuocete le verdure per 3-4 minuti. Nel frattempo portate a ebollizione abbondante acqua, salatela, buttatevi la pasta e cuocetela al dente. Sgocciolatela, rovesciatela nella padella con il condimento, aggiungete i gamberi tenuti da parte e spadellate per qualche istante, in modo che la pasta risulti ben condita. Pepate e servite."
   ]
  },
  {
   "id": "insalata-di-farro-e-orzo",
   "titolo": "Insalata di farro e orzo",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 160g di orzo perlato, 160g di farro, 1 mozzarella light, 10 pomodorini ciliegia, 3-4 cucchiai di pesto, 1 manciatina di olive snocciolate, basilico qb"
   ],
   "preparazione": [
    "Indicazioni: Mettere a cuocere orzo e farro in acqua salata. Scolare i cereali e unirli a mozzarella tagliata a dadini, pesto, pomodorini tagliati a spicchi e olive. Servite l'insalata di farro e orzo fredda, guarnita con foglie di basilico fresco."
   ]
  },
  {
   "id": "insalata-di-riso-orzo-farro-e-carciofi",
   "titolo": "Insalata di riso orzo farro e carciofi",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 2 persone: 160 gr. di tris di cereali (riso orzo farro), 1 carciofo, 1 cucchiaio di olio evo, timo q.b."
   ],
   "preparazione": [
    "Preparazione: Lessate il tris di cereali in acqua salata per il tempo consigliato sulla confezione. Pulite il carciofo, togliete via le spine e affettatelo in modo sottile. Mischiate il timo con l'olio e lasciatelo riposare. Scolate il tris di cereali e raccoglietelo in una ciotola, unite il carciofo ed il condimento aromatizzato, lasciate insaporire per qualche minuto e portate in tavola."
   ]
  },
  {
   "id": "insalata-di-spada-pomodori-zucchine-e-sesamo",
   "titolo": "Insalata di spada, pomodori, zucchine e sesamo",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 2 porzioni: 200 gr. di pesce spada, 1 pomodoro cuore di bue, 1 zucchina trombetta, 2 cucchiai di sesamo, 1 cucchiaio di olio evo, sale q.b."
   ],
   "preparazione": [
    "Tagliate la zucchina a rondelle e cuocetela al vapore. Tostate il sesamo finché si colorisce (il mio non si è scurito granché), tagliate le fette di spada a dadini e passateli nel sesamo quindi spadellateli in un tegame molto caldo. Tagliate il pomodoro a cubetti. Mischiate assieme lo spada, il pomodoro e la zucchina, condite con olio e sale e dividete in due porzioni."
   ]
  },
  {
   "id": "insalata-di-spinaci-e-orzo",
   "titolo": "Insalata di spinaci e orzo",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 300 gr di spinaci, 200 gr di mozzarella vaccina, 400 gr di fagiolini, 50 gr di pomodori secchi, 200 gr di orzo perlato, 4,5 cucchiai di olio extravergine di oliva, 1 rametto di timo limonato, sale q. b."
   ],
   "preparazione": [
    "Preparazione: lavare con cura gli spinaci e i fagiolini. Sbollentare per circa 7 minuti i fagiolini e, separatamente, i pomodori secchi per circa 3 minuti. Tagliare a dadini il fiordilatte. Adagiare gli spinaci su ciascun piatto, aggiungere i fagiolini e i dadini di fiordilatte; guarnire con i pomodorini secchi tagliati a listarelle; condire con parte dell’olio e un pizzico di sale. Nel frattempo far bollire l'orzo perlato. Una volta scolato, mettere un quarto dell’orzo in uno stampino di forma cilindrica da rigirare su ciascun piatto e condire con un filo d'olio e il timo."
   ]
  },
  {
   "id": "mousse-al-cioccolato",
   "titolo": "Mousse al cioccolato",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 6 porzioni: 125 gr. di cioccolato fondente, 2 uova, 12 gr. di zucchero semolato, 12 gr. di zucchero a velo, 15 gr. di olio di cocco, 1 pizzico di sale"
   ],
   "preparazione": [
    "Rompete a pezzetti il cioccolato e mettetelo in una casseruola a fondere a bagnomaria. Toglietelo dal fuoco ed incorporate il l’olio di cocco (precedentemente sciolto) con un cucchiaio di legno. Quindi lasciate intiepidire. Aggiungete i tuorli incorporandoli uno alla volta. Unite agli albumi un pizzico di sale, lo zucchero a velo e lo zucchero semolato e montateli a neve ferma. A questo punto unite gli albumi montati a neve al composto di cioccolato, amalgamandoli dal basso verso l'alto (così non si smontano e inglobando l'aria il composto rimane più soffice). Quando la mousse risulta gonfia e spumosa, dividetela in 6 bicchierini monoporzione: copriteli con la pellicola trasparente e lasciateli in frigo per almeno 3 ore."
   ]
  },
  {
   "id": "muffin-pere-e-cioccolato",
   "titolo": "Muffin pere e cioccolato",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 6 muffin: 6 pere piccole varietà coscia, 125 g. di farina 00, 125 ml. di latte di mandorla, 60 g. di zucchero, 2 cucchiai di olio evo, 25 g. di cacao amaro in polvere, mezza bustina di lievito"
   ],
   "preparazione": [
    "Setacciate la farina assieme al lievito e al cacao. Aggiungete lo zucchero quindi unite l'olio con il latte. Mescolate velocemente e versate nei pirottini di carta inseriti nello stampo da muffin. Accendete il forno a 180°C. Sbucciate le pere, lasciando il picciolo attaccato e tagliate il fondo in modo che i frutti rimangano in posizione dritta. Affondate le pere nell'impasto dei muffin. Infornate per circa 20 minuti, quindi controllate la cottura."
   ]
  },
  {
   "id": "omelette-broccoli-e-feta",
   "titolo": "Omelette broccoli e feta",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 1 persona: 175g cime di broccoli tritate, 2 uova, 30g formaggio feta a pezzetti, olio evo per ungere."
   ],
   "preparazione": [
    "Indicazioni: Scaldate una padella antiaderente leggermente unta a fuoco medio e fate scaldare i broccoli per 3 minuti. In una ciotola, mescolate le uova con il formaggio, quindi versate il composto in padella e fate cuocere per 3-4 minuti. Ripiegate l’omelette in due con una spatola e fatela dorare per 2 minuti o finchè il tutto non risulti ben cotto."
   ]
  },
  {
   "id": "orecchiette-ai-cannellini-e-pesto",
   "titolo": "Orecchiette ai cannellini e pesto",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 280g orecchiette, 2 spicchi d’aglio tritati finemente, 450g fagioli cannellini in scatola, 3 pomodori perini a dadini, 100ml di pesto, 60g grana, 1 cucchiaino d’olio evo."
   ],
   "preparazione": [
    "Preparazione: Cuocete la pasta in abbondante acqua bollente non salata, secondo i tempi indicati dalla confezione. Mentre le orecchiette cuociono, scaldate a fuoco medio-alto l’olio con l’aglio in un’ampia padella antiaderente, finchè non si sente il profumo dell’aglio. Unite i fagioli e i pomodori; abbassate la fiamma e fate cuocere per 5-7 minuti, mescolando di tanto in tanto. Scolate la pasta e trasferitela nella padella per condirla. Aggiungete il pesto, mantecate e fate 4 porzioni uguali. Completate ogni piatto con una spolverata di grana."
   ]
  },
  {
   "id": "pancakes-integrali",
   "titolo": "Pancakes integrali",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti: 150g farina integrale, 50g farina di riso integrale, 1 bustina di lievito per dolci, 2 uova, 2 cucchiai di zucchero di canna integrale, 200ml latte di mandorla o scremato, 1 cucchiaino d’olio extravergine d’oliva, 1 cucchiaino di cannella in polvere, 1 pizzico di sale, Sciroppo d’acero"
   ],
   "preparazione": [
    "Indicazioni: Lavorate assieme i rossi d’uovo con lo zucchero e montate gli albumi. Unite la farina integrale con la farina di riso integrale, aggiungete il lievito, il latte, la cannella e il pizzico di sale, dopodichè mescolate. Aggiungete il composto tuorli-zucchero e successivamente, aggiungete gli albumi montati a neve, mescolando dall’alto verso il basso allo scopo d’incorporare più aria possibile. Lasciate a riposo per mezz’ora. Con un pennellino da cucina ungete d’olio una padella antiaderente di circa 20 cm di diametro e riscaldatela a fiamma bassa. Per la cottura dei pancake dovrete procedere versando al centro della padella mezzo mestolo di pastella. Cuocete ogni pancake da entrambi i lati fino a doratura, rigirando con delicatezza. Servite i pancakes integrali guarnendoli con lo sciroppo d’acero e a piacere frutta fresca e secca!"
   ]
  },
  {
   "id": "pancakes-senza-uova",
   "titolo": "Pancakes senza uova",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti (4 persone): 150g farina integrale, 220ml latte parz. scremato o di soia senza zucchero, 30g zucchero, ½ bustina lievito, 1 cucchiaino di cannella"
   ],
   "preparazione": [
    "Mescolate tutti gli ingredienti fino ad ottenere una pastella. Scaldate una padella antiaderente con un cucchiaio d'olio extravergine di cocco. Con l'aiuto di un mestolo versate poco impasto nella padella. Cuocete ogni pancakes un paio di minuti per lato."
   ]
  },
  {
   "id": "pane-dolce-al-cacao",
   "titolo": "Pane dolce al cacao",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per uno stampo da plumcake (16 porzioni): 200 gr. di farina 00, 100 gr. di fecola di patate, 150 gr. di zucchero, 250 ml. di acqua, 35 gr. di cacao amaro, 1 bustina di lievito vanigliato"
   ],
   "preparazione": [
    "Indicazioni: Setacciate la farina assieme alla fecola, al cacao ed al lievito. Aggiungete lo zucchero e mischiate tutto assieme. Versate l'acqua poca alla volta e mescolate finché non ottenete un composto cremoso. Accendete il forno a 180°. Rivestite lo stampo per plumcake con carta da forno (anche sulle pareti verticali) e quindi versateci dentro il composto. Infornate per 40 minuti, quindi spegnete il forno e lasciate raffreddare, aprendo leggermente lo sportello del forno."
   ]
  },
  {
   "id": "pane-integrale",
   "titolo": "Pane integrale",
   "categoria": "Basi",
   "ingredienti": [
    "Ingredienti per una pagnotta: farina integrale (500gr), olio extravergine di oliva (3 cucchiai), sale (10gr), acqua (300/350ml), malto o zucchero (1 cucchiaino), lievito di birra (12gr)."
   ],
   "preparazione": [
    "Preparazione: Per preparare il pane integrale, sbriciolate il lievito di birra in una piccola ciotolina e ricopritelo con dell’acqua tiepida prendendola da quella che avete a disposizione come da ricetta. Unite anche il malto (o lo zucchero) e sciogliete il tutto. Nell’acqua rimanente sciogliete il sale e unite l'olio. Versate la farina integrale in una ciotola, quindi unite il composto di lievito, mescolate e unite anche l’acqua con il sale disciolto e l’olio. Impastate per bene fino ad amalgamare gli ingredienti, poi trasferitevi su di una spianatoia e impastate con vigore per almeno 5-10 minuti, fino ad ottenere un composto liscio ed omogeneo. Spennellate con pochissimo olio una ciotola capiente e posizionate al suo interno l’impasto ottenuto. Coprite con della pellicola trasparente e mettete il tutto a lievitare nel forno spento ma con la luce accesa per almeno 1 ora e mezza o due. L’impasto dovrà raddoppiare il suo volume. Trascorso il tempo necessario, prendete l’impasto di farina integrale e lavoratelo fino ad ottenere un filone o un pagnotta (a seconda dei gusti) e cercando di tirare l’impasto affinché la chiusura finisca sul fondo della sagoma scelta. Non realizzate delle sagome piatte e mosce, ma piuttosto cercate di dare forme bombate e ben tese, in modo che durante la lievitazione queste non tendano a crescere di lato appiattendosi ulteriormente, ma piuttosto si espandano in altezza. Posizionate il pane integrale su di una leccarda foderata con carta forno e copritelo con una ciotola di vetro o con della pellicola trasparente e mettetela di nuovo a lievitare fino al raddoppiamento del volume (meglio se nel forno spento con la luce accesa). Quando il pane sarà pronto, eseguite con il coltello dei tagli trasversali sulla superficie e infornatelo in forno statico già caldo a 180 gradi per circa 45-50 minuti; estraete il pane integrale dal forno quando sarà leggermente dorato in superficie!"
   ]
  },
  {
   "id": "pasta-aglio-olio-e-tonno",
   "titolo": "Pasta aglio, olio e tonno",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 320 gr spaghetti; 60 ml olio d’oliva (6 cucchiai); 160 gr tonno al naturale in scatola; 2 spicchi d’aglio; 2 peperoncini; prezzemolo q/b"
   ],
   "preparazione": [
    "Preparazione: Scaldate l’olio, unite 2 spicchi d'aglio, uno intero non spellato, l’altro spellato e tagliato a metà, 2 peperoncini interi e fate soffriggere. Aggiungete 160 g di tonno e 320 g di pasta (preferibilmente spaghetti) cotta al dente in acqua bollente salata. Spadellate, mescolando con 2 forchette e spolverizzate di prezzemolo tritato."
   ]
  },
  {
   "id": "pasta-primavera-al-pollo",
   "titolo": "Pasta primavera al pollo",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 2 persone: 170g fusilli integrali, 125g petto di pollo tagliato a striscioline, 1 cipolla a spicchi sottili, 3 spicchi d’aglio affettati finemente, 1 cucchiaino di origano, 400g pomodori tagliati a dadini, 1 zucchina affettata molto sottilmente nel senso della lunghezza, 20g grana grattugiato, 2 cucchiaini di olio evo, 1 pizzico di sale, 1 pizzico di pepe."
   ],
   "preparazione": [
    "Indicazioni: Fate cuocere la pasta e nel frattempo, in una padella antiaderente scaldate l’olio a fuoco medio e aggiungere le striscioline di pollo. Fate saltare per 5 minuti. Unite la cipolla, l’aglio, l’origano e il pomodoro; condite con sale e pepe, quindi lasciate cuocere per 8-10 minuti. Dopo aver scolato la pasta versatela in una ciotola, unite il tutto mescolando delicatamente, aggiungete le zucchine e spolverizzate col grana."
   ]
  },
  {
   "id": "pesce-spatola-con-verdure",
   "titolo": "Pesce spatola con verdure",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 2 persone: 500 g. di pesce spatola in filetti, 1 zucchina, 1 carota, mezzo peperone giallo, 1 cucchiaio di olio evo, sale q.b."
   ],
   "preparazione": [
    "Pulite le verdure e tagliatele a cubetti delle stesse dimensioni.",
    "In una padella antiaderente mettete 1 cucchiaio di olio e 2 cucchiai di acqua, aggiungete prima le carote e dopo qualche minuto le zucchine ed i peperoni. Proseguite la cottura a fuoco medio (senza mai far saltare la padella) finché le verdure non diventano tenere. Salatele. Nel frattempo cuocete su una piastra antiaderente molto calda i filetti di pesce da entrambi i lati. Componete il piatto: distribuite le verdurine sui filetti di pesce... buon appetito!"
   ]
  },
  {
   "id": "penne-al-forno-ai-2-formaggi-e-salsa-ai-peperoni",
   "titolo": "Penne al forno ai 2 formaggi e salsa ai peperoni",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 4 persone: 280g penne integrali, 30g farina, 350ml di latte scremato, 25g grana, 50g di fontina a pezzetti, 60g pangrattato, 120g di peperoni rossi arrostiti al forno, 1 cucchiaio di yogurt greco light, 30ml olio evo, 1 pizzico di sale, pepe in grani."
   ],
   "preparazione": [
    "Indicazioni: Preriscaldate il forno a 180° C. Foderate con carta da forno una teglia e tenete da parte. In una pentola, portate a bollore abbondante acqua non salata, a fuoco alto; buttate la pasta e fatela cuocere secondo i tempi indicati sulla confezione. Scolatela al dente e tenetela da parte. Abbassate la fiamma e, nella stessa pentola, versate l’olio. Unite la farina setacciata,, salate e aggiungete una manciata di pepe. Cuocete per 1-2 minuti o finchè la farina non comincia a scurirsi. Incorporate prima il latte (120ml alla volta), sbattendo con la frusta per amalgamare la farina, poi i formaggi, mescolando bene finchè non si sciolgono completamente. Versate la pasta nella pentola, mantecate e trasferite nella teglia. Spolverizzate con il pangrattato. Informate e cuocete per 20 minuti, o finchè la superficie non è dorata e vi si formano delle bolle. Nel frattempo, passate al mixer i peperoni insieme allo yogurt, fino a ottenere un composto cremoso. Dividete le penne in 4 porzioni e completate ogni piatto con la salsa ai peperoni."
   ]
  },
  {
   "id": "pizza-integrale-lievitazione-24h",
   "titolo": "Pizza integrale (lievitazione 24h)",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti: 20 g di olio (2 cucchiai), 220 g di acqua a temperatura ambiente, 1 cucchiaino di zucchero, 20 g di lievito di birra secco, 400 g di farina integrale"
   ],
   "preparazione": [
    "Preparazione: Ungere leggermente una zuppiera capiente e metteterla da parte. Sciogliere il lievito in un bicchiere di acqua a temperatura ambiente. Creare una fontana con la farina, aggiungere l'olio, il lievito sciolto e l'acqua un po’ per volta. Impastare con forza fino ad ottenere un panetto omogeneo e compatto. Riporre il panetto di pasta nella zuppiera, rivestire con la pellicola e lasciaterla riposare nel forno spento per 24 ore.",
    "Il giorno dopo stendere la base della pizza su una teglia rivestita con carta da forno. Farcire a piacere. Cuocere in forno già caldo (190°) per 30 minuti."
   ]
  },
  {
   "id": "plumcake-alle-mele",
   "titolo": "Plumcake alle mele",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 12 porzioni abbondanti: 1 kg mele , 180 gr. di farina 00, 200 ml. di latte di mandorla, 3 uova intere, 150 gr. di zucchero, 20 gr. di maizena, ½ bustina di lievito per dolci, 1 limone non trattato, 1 pizzico di sale"
   ],
   "preparazione": [
    "Preparazione: Separate i tuorli dagli albumi e mischiateli con lo zucchero, mescolando molto bene; aggiungete un pizzico di sale. Aggiungete la farina setacciata con il lievito e la maizena, versate il latte continuando a mescolare. Aggiungete la scorza del limone grattugiata. Nel frattempo accendete il forno a 180°. Lavate le mele e, utilizzando l'affetta mele, eliminate il torsolo, quindi sbucciate gli spicchi ottenuti. Allineateli vicino alla forma da plumcake in modo da conservare abbastanza spicchi per la decorazione. Tagliate a pezzetti i rimanenti spicchi ed incorporateli al composto ottenuto. Montate a neve gli albumi con un pizzico di sale ed uniteli delicatamente al composto. Versate il tutto nella forma da plumcake rivestita con carta fa forno bagnata e strizzata molto bene. Infornate nel forno già caldo per 40 minuti."
   ]
  },
  {
   "id": "pollo-ai-peperoni",
   "titolo": "Pollo ai peperoni",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 6 persone: 1 kg circa di sovra cosce di pollo, 3 cucchiai di olio extravergine di oliva, 2/3 peperoni gialli e rossi, 1 spicchio d’aglio, ½ bicchiere di vino bianco secco, Brodo q.b., Rosmarino ed erbe aromatiche a piacere, sale e pepe q.b."
   ],
   "preparazione": [
    "Preparazione: Pulite e lavate i peperoni, eliminate i semi e tagliateli. Metteteli in un colapasta in modo che si asciughino. Tritate finemente l’aglio, oppure potete lasciarlo intero ed eliminatelo dopo la cottura. In una teglia mettete il pollo e i peperoni, aggiungete l’olio, l’aglio, il sale e il pepe e il rosmarino e mescolate bene. Infornate a 200°/220° per circa 45 minuti, regolatevi in base al vostro forno. Quando il pollo avrà preso colore da un lato, giratelo e bagnate con il vino bianco e fate cuocere fino a completa cottura, aggiungendo eventuale brodo o acqua al bisogno, considerate che il pollo già di suo rilascia i propri succhi ma se vedete che si asciuga troppo aggiungete 1 o 2 mestoli di brodo o acqua. A fine cottura assaggiate per valutare la sapidità ed eliminate il rametto di rosmarino."
   ]
  },
  {
   "id": "pollo-al-volo",
   "titolo": "Pollo al volo",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 2 persone: mezzo pollo allo spiedo, 1 zucchina, 1 carota, 1/4 peperone giallo, 2 cucchiai di olio evo, Vino bianco, aromi: aglio, prezzemolo, origano, sesamo, senape"
   ],
   "preparazione": [
    "Ho messo il wok sul fuoco con aglio e olio, ho aggiunto per prima carote e peperone, un minuto dopo la zucchina, tagliate tutte molto velocemente col pela patate. Appena hanno iniziato ad arrostire, ho spruzzato del vino bianco, circa 2 cm di senape (ho usato quella in tubetto); dopo due minuti ho aggiunto il pollo avanzato che avevo in frigo, una spolverata di prezzemolo, di origano, di sesamo. Ancora un minuto o due, il tempo che il pollo sia caldo, ed ho impiattato!"
   ]
  },
  {
   "id": "pollo-tonnato",
   "titolo": "Pollo tonnato",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 4 persone: Petto di pollo tagliato a fette molto sottili: 300g, Ricotta di tipo cremoso: 250g, 2 scatolette di tonno in scatola ben sgocciolate, una manciata di capperi"
   ],
   "preparazione": [
    "Cuocete al vapore (o lessate) le fettine di pollo. Disponetele sul piatto di portata, in questo modo si raffredderanno. Mettete nel mixer la ricotta, il tonno e una manciatina di capperi. Azionate fino a quando non otterrete una cremina vellutata (se risultasse troppo densa, aggiungete un goccio d'acqua). Disponete la crema sopra le fette di pollo e guarnite con qualche cappero. Tenete la pietanza in frigo per almeno 30 minuti prima di consumarla."
   ]
  },
  {
   "id": "polpette-di-tonno-al-sugo",
   "titolo": "Polpette di tonno al sugo",
   "categoria": "Secondi",
   "ingredienti": [
    "Per 18 polpette: 300g tonno in vetro ben sgocciolato, 2 uova bio, Pangrattato q.b., Farina q.b., Polpa di pomodoro, Olio extravergine d'oliva, Sale, Aromi a piacere"
   ],
   "preparazione": [
    "La ricetta è molto semplice: in un piatto fondo sminuzzate il tonno con una forchetta, aggiungete le uova, il pangrattato (io ho messo ad occhio 4-5 cucchiai) e gli aromi (per me origano e pepe). Potete aggiungere anche della frutta secca frullata. Formate con le mani le polpette e passatele nella farina. Scaldate l'olio in una padella e fateci rosolare le polpette, quando pronte aggiungete la polpa di pomodoro. Aggiungete infine il basilico e regolate di sale."
   ]
  },
  {
   "id": "porridge-1",
   "titolo": "Porridge 1",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti per persona: 30 grammi di avena in fiocchi, una tazza di latte, mezza tazza di acqua, un cucchiaino di zucchero (meglio se di canna integrale), un pizzico di sale."
   ],
   "preparazione": [
    "Preparazione: versare i fiocchi in un pentolino, con l'acqua e un pizzico di sale; fare cuocere a fuoco moderato per circa cinque minuti, mescolando di tanto in tanto. L'avena è pronta quando l'acqua sarà evaporata e si forma una specie di poltiglia; a questo punto aggiungete il latte e fare cuocere ancora un paio di minuti, fino a raggiungere una consistenza cremosa. Si versa In una ciotola, cosparso di ciò che preferite: frutta fresca (gli inglesi lo amano molto con la banana) o frutta secca, sciroppo d'acero, succo di mela o d'uva concentrato, miele."
   ]
  },
  {
   "id": "porridge-senza-cottura",
   "titolo": "Porridge senza cottura",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti per 1 persona: 30 g fiocchi d’avena integrali, 100 ml latte, 3 noci, 1 cucchiaino di cannella, mezza banana, 1 cucchiaino di semi di chia"
   ],
   "preparazione": [
    "Procedimento: La sera prima mettere in ammollo i fiocchi d’avena integrali con il latte, la cannella e i semi di chia. Dopo aver mescolato per bene il tutto chiudere il contenitore con il coperchio (va benissimo usare anche la pellicola trasparente in alternativa) e poi lasciare a riposare in frigorifero per 12 ore! La mattina seguente aggiungere la frutta e le noci!"
   ]
  },
  {
   "id": "porridge-invernale",
   "titolo": "Porridge invernale",
   "categoria": "Colazione",
   "ingredienti": [
    "Ingredienti per persona: 30 grammi di fiocchi di avena, acqua, una mela, un cucchiaio di uvetta, un cucchiaino di zucchero di canna integrale, mandorle a scaglie, una stecca di cannella, zenzero, cardamomo."
   ],
   "preparazione": [
    "Procedimento: mettere a bollire l'avena in poco più di mezza tazza di acqua in cui avevate messo la stecca di vaniglia e un pizzico di sale, aggiungendo la mela tagliata in piccoli dadolini, l'uvetta e un cucchiaino di zucchero di canna integrale o miele. Lasciare bollire per circa 7/8 minuti, aggiungendo un pizzico di zenzero e cardamomo in polvere. Lasciate intiepidire la crema, togliete la stecca di cannella e servite cosparso di scaglie di mandorle."
   ]
  },
  {
   "id": "risotto-agli-asparagi-pollo-e-funghi",
   "titolo": "Risotto agli asparagi, pollo e funghi",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 1 persona: 10 g di olio d'oliva, 100 g di petto di pollo, aglio, 40 g di cipolle, 80 g di funghi, 70 g di riso, 60 ml di vino bianco, 150 ml di brodo vegetale, 70 g di spinaci, 80 g di asparago bianco, 10 g di formaggio Parmigiano, acqua q.b."
   ],
   "preparazione": [
    "Preparazione: Riscaldate metà dell’olio con dell’acqua in una padella e fate friggere le listarelle di pollo fino a quando non assumono un colore dorato, quindi rimuovetele per usarle più tardi. Riscaldate l’olio con l’acqua e rosolate aglio, cipolla e funghi. Aggiungete il riso e lasciate cuocere fino a quando diventa trasparente. Aggiungete il vino e cuocete fino a quando non viene assorbito. Aggiungete il brodo e mescolate bene in modo che il riso assorba il liquido. Quando il riso è ammorbidito, aggiungete pollo e spinaci, mescolate bene e coprite. Riducete la fiamma e fate cuocere fino a quando il riso non è tenero. Ripetete il passaggio 5 fino a quando il riso non è quasi tenero (25-30 minuti). Aggiungete il pollo e gli spinaci. Mescolate bene e coprite. Riducete la fiamma e lasciare cuocere fino a quando il riso non è tenero. Rimuovete il riso dal fornello; aggiungete formaggio Parmigiano e prezzemolo. Insaporite e ricoprite con asparago bianco."
   ]
  },
  {
   "id": "risotto-ai-ceci",
   "titolo": "Risotto ai ceci",
   "categoria": "Primi",
   "ingredienti": [
    "Ingredienti per 3 persone: 3 tazzine da caffè di riso carnaroli; 270 gr di ceci precotti; 750 ml di brodo di verdure; prezzemolo q.b; 1 cipolla piccola; 30 gr olio extravergine d’oliva"
   ],
   "preparazione": [
    "Preparazione: Scaldate bene il brodo di verdure. Frullate i ceci con un cucchiaio d’olio, salate e pepate. In una padella ampia fate soffriggere la cipolla con il restante olio evo, successivamente aggiungete il riso e fatelo tostare per pochi minuti. Aggiungete il brodo due mestoli alla volta e quando il risotto sarà giunto a metà cottura aggiungete anche il purè di ceci, finite la cottura con il brodo. Salate, pepate e abbondate con il prezzemolo."
   ]
  },
  {
   "id": "risotto-con-zucchine-e-fontina-gratinato-al-forno",
   "titolo": "Risotto con zucchine e fontina gratinato al forno",
   "categoria": "Primi",
   "ingredienti": [
    "Per 2 persone: Riso 120g, 4 zucchine tonde, 2 zucchine lunghe (circa 300g), 1/2 cipolla, Brodo vegetale q.b. (circa 1 litro), Olio extravergine di oliva 2 cucchiai, Parmigiano o grana: 2 cucchiai, Fontina 40g"
   ],
   "preparazione": [
    "Preparate circa un litro di brodo vegetale, portatelo a bollitura e fate in modo che continui a bollire durante l'esecuzione del risotto. In un'altra pentola, fate lessare le cipolle in un dito di acqua, poi aggiungete le zucchine lunghe tagliate a filetto, assieme a un mestolo di brodo vegetale. Aggiungete il riso e fatelo asciugare, continuando a mescolare. Mano a mano che il riso si asciuga, aggiungete altro brodo, un mestolo alla volta, aspettando che si asciughi il riso prima di aggiungere altro brodo, così fino a cottura (circa 20 minuti). A fornello spento aggiungete 2 cucchiai di olio di oliva e 1 cucchiaio di parmigiano o grana. Aggiustate di sale. Accendete il forno a 200°. Bollite le zucchine tonde, tagliate la parte superiore (che diventerà un coperchietto), scavatele, tagliate la polpa a dadini e aggiungetela al risotto. Ponete le zucchine su una teglia da forno e riempitele con il risotto. Tagliate il formaggio fontina a dadini e inseritelo nel risotto. Spolverizzate la superficie con un cucchiaio di parmigiano e cuocete il tutto in forno per circa 10 minuti, senza il \"coperchietto\". A cottura ultimata, aggiungete il coperchio alle vostre zucchine e servite."
   ]
  },
  {
   "id": "seitan-in-crosta-di-sesamo",
   "titolo": "Seitan in crosta di sesamo",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 2 porzioni: 240 gr. di seitan, 20 gr. di pane grattugiato, 3 cucchiai di sesamo tostato, 1 cucchiaio di olio evo, sale q. b., 1 uovo (per la versione vegetariana)"
   ],
   "preparazione": [
    "Preparazione: Tagliate il seitan a fette non troppo spesse. Mischiate il pane grattugiato con il sesamo tostato ed il sale, quindi passate in questo mix le fettine di seitan, facendo aderire per bene la panatura. Foderate una teglia con carta da forno, adagiate sopra il seitan, spruzzate con il vaporizzatore l'olio ed infornate a 180° per 8 minuti."
   ]
  },
  {
   "id": "strudel-di-fragole-e-mirtilli",
   "titolo": "Strudel di fragole e mirtilli",
   "categoria": "Dolci",
   "ingredienti": [
    "Ingredienti per 10 porzioni: 200 gr. di farina, 1 uovo, 2 cucchiai di zucchero a velo, 3 cucchiai e mezzo di olio di semi, 1 bustina di vaniglina, 400 gr. di fragole, 100 gr. di mirtilli, 100 gr. di ricotta senza lattosio, 1 cucchiaio di mandorle polverizzate, 3 cucchiai e mezzo di zucchero, 1 cucchiaio di succo di limone"
   ],
   "preparazione": [
    "Preparazione: Disponete la farina a fontana e sgusciate dentro l’uovo. Aggiungete 3 cucchiai di olio, lo zucchero a velo e la vaniglina. Impastate aggiungendo qualche cucchiaio di acqua tiepida finché non risulta un impasto elastico e morbido. Formate una palla e avvolgetela nella pellicola per alimenti, lasciatela riposare per mezzora al fresco. Nel frattempo lavate i mirtilli e le fragole che taglierete a pezzetti, mettetele in una ciotola assieme ai 3 cucchiai di zucchero ed al cucchiaio di succo di limone, lasciando riposare per mezzora. Stendete la pasta (sopra un foglio di carta da forno) fino a formare un rettangolo di spessore sottile (meno di mezzo centimetro.). Distribuite il cucchiaio di mandorle spolverizzate sopra la sfoglia. Accendete il forno a 180°. Nel frattempo mischiate la ricotta al composto di fragole e mirtilli e stendete il tutto sulla sfoglia lasciando liberi i bordi laterali. Aiutandovi con la carta da forno sigillate i lembi della sfoglia chiudendola su se stessa sia dal lato lungo sia dai lati corti del rettangolo. Bucherellate la sfoglia con uno stuzzicadenti, spennellatela con il mezzo cucchiaio di olio rimasto e spolverizzate sopra mezzo cucchiaio di zucchero semolato. Mettete lo strudel nel forno già caldo per 30 minuti."
   ]
  },
  {
   "id": "stufato-di-pollo-e-fagiolini",
   "titolo": "Stufato di pollo e fagiolini",
   "categoria": "Secondi",
   "ingredienti": [
    "Ingredienti per 4 persone: 900 gr pollo intero a pezzi, 400 gr fagiolini in scatola, 400 gr pomodorini ciliegia, 1 cipolla, ½ bicchiere vino bianco secco, 1 cucchiaio di semi di finocchio, 4 cucchiaio di olio extravergine d’oliva, sale"
   ],
   "preparazione": [
    "Preparazione: Eliminate la pelle dai pezzi di pollo, sbucciate la cipolla e tritatela molto fine. Scolate i fagiolini dal liquido di conservazione, sciacquateli velocemente sotto l'acqua corrente e fateli sgocciolare bene. Scaldate l'olio in una casseruola, unite la cipolla tritata e i semi di finocchio e soffriggeteli leggermente a fiamma bassa; aggiungete i pezzi di pollo e una presa di sale, lasciate insaporire il pollo per 2-3 minuti a fuoco moderatamente vivace, bagnatelo con il vino e fatelo consumare quasi completamente. Unite i pomodorini sgocciolati, coprite e proseguite la cottura a fiamma bassa per circa 30 minuti, mescolando ogni tanto e aggiungendo un goccio d'acqua bollente se il fondo di cottura tendesse ad asciugarsi troppo. Regolate di sale, aggiungete i fagiolini sgocciolati e proseguite la cottura per altri 15 minuti. Servite il pollo e le verdure caldissimi."
   ]
  },
  {
   "id": "sugo-alle-melanzane",
   "titolo": "Sugo alle melanzane",
   "categoria": "Basi",
   "ingredienti": [
    "Ingredienti per 2 persone: 1 melanzana di piccole dimensioni, sale, 1 cipolla bionda di piccole dimensioni, 2 cucchiai di olio extravergine di oliva, 300 g di passata di pomodoro, 6 foglie di basilico"
   ],
   "preparazione": [
    "Preparazione: Lavare la melanzana, affettarla nello spessore di un centimetro circa e ricavarne dei cubetti. Metterli in un colino, cospargerli con un pizzico di sale, mescolarli e lasciarli perdere liquido di vegetazione per almeno 20 minuti. Nel frattempo pelare la cipolla, tritarla finemente e metterla in una capace padella assieme all'olio e farla dolcemente dorare con un pizzico di sale. Alzare la fiamma, unire le melanzane e cuocerle per 5 minuti circa, fintanto che non sono belle morbide. Unire la passata di pomodoro, le foglie di basilico lavate e spezzettate e proseguire la cottura a fuoco dolce, coperto, per 10-15 minuti, finché il sugo non si sarà ristretto secondo il proprio gusto personale. Solo a fine cottura assaggiare e regolare di sale. Lessare la pasta in abbondante acqua salata e, poco prima di scolarla, aggiungere un mestolo di acqua di cottura nella padella delle melanzane, quindi accendere il fuoco. Saltare la pasta scolata a fiamma vivace nella padella del condimento per qualche istante, girando di frequente."
   ]
  }
 ]
};
