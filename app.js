(function() {
  'use strict';

  const DIETA = window.DIETA;
  if (!DIETA) { console.error('Dati non trovati. Assicurati che data.js sia caricato.'); return; }

  // Riferimenti DOM
  const app = document.getElementById('app');
  const pageTitle = document.getElementById('page-title');
  const backBtn = document.getElementById('back-btn');
  const themeToggle = document.getElementById('theme-toggle');
  const footerText = document.getElementById('footer-text');
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');

  // Stato
  let selectedDayId = null;
  let lightboxImages = [];
  let lightboxIndex = 0;

  // CACHE IN MEMORIA PER GLI OVERRIDE (evita problemi con localStorage)
  let overridesState = {};
  try {
    const stored = localStorage.getItem('dieta_overrides_state');
    if (stored) overridesState = JSON.parse(stored);
  } catch(e) { overridesState = {}; }

  function getOverride(key) {
    return overridesState[key] || null;
  }

  function setOverride(key, value) {
    if (value === null || value === undefined) {
      delete overridesState[key];
    } else {
      overridesState[key] = value;
    }
    try { localStorage.setItem('dieta_overrides_state', JSON.stringify(overridesState)); } catch(e) {}
  }

  function clearOverridesForDay(dayId) {
    Object.keys(overridesState).forEach(key => {
      if (key.startsWith(`dieta_menu_${dayId}_`)) {
        delete overridesState[key];
      }
    });
    try { localStorage.setItem('dieta_overrides_state', JSON.stringify(overridesState)); } catch(e) {}
  }

  // Utility per creare elementi
  function el(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'checked' || key === 'selected' || key === 'value' || key === 'disabled' || key === 'hidden') {
        element[key] = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'className') {
        element.className = value;
      } else if (key === 'dataset') {
        Object.assign(element.dataset, value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        element.addEventListener(key.substring(2).toLowerCase(), value);
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else {
        element.setAttribute(key, value);
      }
    }
    for (const child of children) {
      if (child == null) continue;
      if (Array.isArray(child)) {
        child.forEach(c => element.appendChild(c instanceof Node ? c : document.createTextNode(c)));
      } else if (typeof child === 'string' || typeof child === 'number') {
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        element.appendChild(child);
      }
    }
    return element;
  }

  function accorcia(testo, max) {
    if (!testo) return '';
    if (testo.length <= max) return testo;
    return testo.substring(0, max).trim() + '…';
  }

  function getGiornoOggi() {
    const jsDay = new Date().getDay();
    return DIETA.meta.giorni.find(g => g.js === jsDay) || DIETA.meta.giorni[0];
  }

  function getNextSlotId() {
    const h = new Date().getHours();
    if (h < 10) return 'colazione';
    if (h < 12) return 'snack1';
    if (h < 15) return 'pranzo';
    if (h < 18) return 'snack2';
    if (h < 21) return 'cena';
    return 'dopocena';
  }

  function updateTitleForPage(page, param) {
    const titles = {
      dashboard: DIETA.meta.titolo,
      menu: 'Menu del giorno',
      regole: 'Regole per comporre i pasti',
      raccomandazioni: 'Raccomandazioni',
      cottura: 'Variazioni di peso con la cottura',
      acque: 'Acque aromatizzate',
      pesare: 'Pesare senza bilancia',
      stagionalita: 'Stagionalità',
      porzioni: 'Porzioni',
      unita: 'Unità di misura',
      ricettario: 'Ricettario'
    };
    if (page === 'ricettario' && param) {
      const ricetta = DIETA.ricettario.find(r => r.id === param);
      pageTitle.textContent = ricetta ? ricetta.titolo : 'Ricetta';
    } else {
      pageTitle.textContent = titles[page] || DIETA.meta.titolo;
    }
  }

  function handleRoute() {
    const hash = window.location.hash.slice(1) || '/';
    const parts = hash.split('/').filter(Boolean);
    const page = parts[0] || 'dashboard';
    const param = parts[1];

    backBtn.hidden = page === 'dashboard';
    updateTitleForPage(page, param);

    app.innerHTML = '';
    window.scrollTo(0, 0);

    switch (page) {
      case 'dashboard': renderDashboard(); break;
      case 'menu': renderMenu(); break;
      case 'regole': renderRegole(); break;
      case 'raccomandazioni': renderRaccomandazioni(); break;
      case 'cottura': renderCottura(); break;
      case 'acque': renderAcque(); break;
      case 'pesare': renderPesare(); break;
      case 'stagionalita': renderStagionalita(); break;
      case 'porzioni': renderPorzioni(); break;
      case 'unita': renderUnita(); break;
      case 'ricettario':
        if (param) renderRicettaDetail(param);
        else renderRicettario();
        break;
      default: renderDashboard();
    }
  }

  function renderDashboard() {
    const now = new Date();
    const h = now.getHours();
    let greeting = 'Buongiorno';
    if (h >= 12 && h < 18) greeting = 'Buon pomeriggio';
    else if (h >= 18) greeting = 'Buonasera';

    const giornoOggi = getGiornoOggi();
    const nextSlotId = getNextSlotId();
    const slotInfo = DIETA.meta.slot.find(s => s.id === nextSlotId);
    const pastoOggi = DIETA.menu[giornoOggi.id]?.[nextSlotId];
    const vociPasto = pastoOggi ? pastoOggi.voci : ['Nessun pasto previsto'];

    const hero = el('section', { className: 'hero' },
      el('h2', {}, `${greeting},`),
      el('p', { className: 'hero-sub' }, `oggi è ${giornoOggi.nome}`),
      el('div', { className: 'next-meal-card' },
        el('div', { className: 'next-meal-header' },
          el('span', { className: 'next-meal-icon' }, slotInfo?.icona || '🍽️'),
          el('span', { className: 'next-meal-label' }, 'Prossimo pasto: ' + (slotInfo?.nome || '')),
        ),
        el('ul', { className: 'next-meal-list' },
          ...vociPasto.map(v => el('li', {}, v))
        ),
        el('a', { href: '#/menu', className: 'btn btn-small' }, 'Vai al menu')
      )
    );

    const cardsData = [
      { icon: '📅', title: 'Menu del giorno', desc: 'Consulta e personalizza i pasti di oggi', hash: '#/menu', large: true },
      { icon: '📋', title: 'Regole per comporre i pasti', desc: 'Sostituzioni e combinazioni corrette', hash: '#/regole' },
      { icon: '💡', title: 'Raccomandazioni', desc: '40 consigli della nutrizionista', hash: '#/raccomandazioni' },
      { icon: '⚖️', title: 'Variazioni di peso con la cottura', desc: 'Crudo vs cotto e calcolatore', hash: '#/cottura' },
      { icon: '💧', title: 'Acque aromatizzate', desc: '10 ricette per bere di più', hash: '#/acque' },
      { icon: '🤲', title: 'Pesare senza bilancia', desc: 'Porzioni a occhio con mano e pugno', hash: '#/pesare' },
      { icon: '🌱', title: 'Stagionalità del mese', desc: 'Frutta e verdura di stagione', hash: '#/stagionalita' },
      { icon: '🍽️', title: 'Porzioni', desc: 'Guida fotografica alle porzioni', hash: '#/porzioni' },
      { icon: '🥄', title: 'Unità di misura a tavola', desc: 'Cucchiai, tazze e equivalenze', hash: '#/unita' },
      { icon: '📖', title: 'Ricettario', desc: '51 ricette per variare', hash: '#/ricettario' }
    ];

    const grid = el('div', { className: 'card-grid' },
      ...cardsData.map(card =>
        el('a', { href: card.hash, className: 'card' + (card.large ? ' card-large' : '') },
          el('div', { className: 'card-icon' }, card.icon),
          el('h3', { className: 'card-title' }, card.title),
          el('p', { className: 'card-desc' }, card.desc)
        )
      )
    );

    app.append(hero, grid);
  }

  function renderMenu() {
    if (!selectedDayId) {
      selectedDayId = getGiornoOggi().id;
    }

    const tabs = el('div', { className: 'day-tabs' },
      ...DIETA.meta.giorni.map(g =>
        el('button', {
          className: 'day-tab' + (g.id === selectedDayId ? ' active' : ''),
          onclick: () => { selectedDayId = g.id; setTimeout(renderMenu, 0); }
        },
          g.breve,
          g.id === getGiornoOggi().id ? el('span', { className: 'badge badge-oggi' }, 'Oggi') : null
        )
      )
    );

    const invertKey = `dieta_invert_${selectedDayId}`;
    let isInverted = false;
    try { isInverted = localStorage.getItem(invertKey) === 'true'; } catch(e) {}

    const invertToggle = el('label', { className: 'toggle' },
      el('input', { type: 'checkbox', checked: isInverted, onchange: (e) => {
        try { localStorage.setItem(invertKey, e.target.checked); } catch(e) {}
        setTimeout(renderMenu, 0);
      }}),
      el('span', { className: 'toggle-slider' }),
      'Inverti pranzo e cena'
    );

    const resetAllBtn = el('button', { className: 'btn btn-secondary', onclick: () => {
      clearOverridesForDay(selectedDayId);
      setTimeout(renderMenu, 0);
    }}, 'Ripristina tutto il giorno');

    const controls = el('div', { className: 'menu-controls' }, invertToggle, resetAllBtn);

    const slotsContainer = el('div', { className: 'slots-container' });

    let menuDay = DIETA.menu[selectedDayId];
    if (isInverted) {
      menuDay = { ...menuDay };
      const temp = menuDay.pranzo;
      menuDay.pranzo = menuDay.cena;
      menuDay.cena = temp;
    }

    DIETA.meta.slot.forEach(slot => {
      const slotData = menuDay[slot.id];
      if (!slotData) return;

      const overrideKey = `dieta_menu_${selectedDayId}_${slot.id}`;
      const override = getOverride(overrideKey);

      const card = el('div', { className: 'slot-card' });

      let badgeText = null;
      if (override) {
        if (override.type === 'day') {
          const g = DIETA.meta.giorni.find(x => x.id === override.dayId);
          badgeText = g ? 'Da ' + g.nome : 'Modificato';
        } else if (override.type === 'recipe') {
          badgeText = 'Ricetta alternativa';
        }
      }
      const header = el('div', { className: 'slot-header' },
        el('span', { className: 'slot-icon' }, slot.icona),
        el('h3', { className: 'slot-name' }, slot.nome),
        badgeText ? el('span', { className: 'badge badge-mod' }, badgeText) : null
      );
      card.appendChild(header);

      const body = el('div', { className: 'slot-body' });

      if (override) {
        let bannerText = '';
        if (override.type === 'day') {
          const g = DIETA.meta.giorni.find(x => x.id === override.dayId);
          bannerText = g ? `Stai vedendo il pasto di ${g.nome}` : 'Pasto alternativo';
        } else if (override.type === 'recipe') {
          bannerText = `Alternativa: ${override.title || ''}`;
        }
        body.appendChild(el('div', { className: 'slot-override-banner' }, '↪ ' + bannerText));
      }

      let displayedVoci = slotData.voci;
      let displayedTitle = null;
      let recipeId = slotData.ricetta || null;
      let isRecipeAlternative = false;

      if (override) {
        if (override.type === 'day') {
          const otherDayMenu = DIETA.menu[override.dayId];
          const otherSlot = otherDayMenu?.[slot.id];
          if (otherSlot) {
            displayedVoci = otherSlot.voci;
            recipeId = otherSlot.ricetta || null;
          }
        } else if (override.type === 'recipe') {
          displayedTitle = override.title;
          recipeId = override.recipeId;
          isRecipeAlternative = true;
        }
      }

      if (isRecipeAlternative) {
        body.appendChild(el('p', { className: 'slot-recipe-title' }, displayedTitle));
        if (recipeId) {
          body.appendChild(el('button', { className: 'btn btn-small', onclick: () => openRecipeModal(recipeId) }, 'Apri ricetta'));
        }
      } else {
        const ul = el('ul', { className: 'slot-voci' });
        displayedVoci.forEach(v => ul.appendChild(el('li', {}, v)));
        body.appendChild(ul);
        if (recipeId) {
          body.appendChild(el('button', { className: 'btn btn-small', onclick: () => openRecipeModal(recipeId) }, 'Ricetta'));
        }
      }

      if (override) {
        body.appendChild(el('button', { className: 'btn btn-small btn-secondary', onclick: () => {
          setOverride(overrideKey, null);
          setTimeout(renderMenu, 0);
        }}, 'Ripristina piano base'));
      }

      const select = el('select', { className: 'slot-select' });

      select.appendChild(el('option', { value: 'base' }, '— Piano base (originale) —'));

      if (slotData.tipo) {
        const group = el('optgroup', { label: 'Stesso pasto in altri giorni' });
        DIETA.meta.giorni.forEach(g => {
          if (g.id === selectedDayId) return;
          const otherSlot = DIETA.menu[g.id]?.[slot.id];
          if (otherSlot && otherSlot.tipo === slotData.tipo) {
            const testoCompleto = otherSlot.voci.join(' — ');
            group.appendChild(el('option', { value: `day_${g.id}`, title: testoCompleto }, `${g.nome}: ${accorcia(testoCompleto, 70)}`));
          }
        });
        if (group.children.length > 0) select.appendChild(group);
      }

      if (slotData.alternative && slotData.alternative.length > 0) {
        const group = el('optgroup', { label: 'Alternative con ricetta' });
        slotData.alternative.forEach(alt => {
          group.appendChild(el('option', { value: `recipe_${alt.ricetta}`, title: alt.titolo }, alt.titolo));
        });
        select.appendChild(group);
      }

      if (override) {
        if (override.type === 'day') select.value = `day_${override.dayId}`;
        else if (override.type === 'recipe') select.value = `recipe_${override.recipeId}`;
      } else {
        select.value = 'base';
      }

      select.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'base') {
          setOverride(overrideKey, null);
        } else if (val.startsWith('day_')) {
          setOverride(overrideKey, { type: 'day', dayId: val.substring(4) });
        } else if (val.startsWith('recipe_')) {
          const recipeId = val.substring(7);
          const alt = slotData.alternative?.find(a => a.ricetta === recipeId);
          if (alt) {
            setOverride(overrideKey, { type: 'recipe', recipeId: alt.ricetta, title: alt.titolo });
          }
        }
        setTimeout(renderMenu, 0);
      });

      const footer = el('div', { className: 'slot-footer' },
        el('label', { className: 'slot-select-label' }, 'Cambia con un\'alternativa'),
        select
      );

      card.appendChild(body);
      card.appendChild(footer);
      slotsContainer.appendChild(card);
    });

    const scambiBox = el('details', { className: 'scambi-box' },
      el('summary', {}, 'Come funzionano gli scambi'),
      el('div', { className: 'scambi-content' },
        ...DIETA.meta.intro.map(t => el('p', {}, t))
      )
    );

    app.append(tabs, controls, slotsContainer, scambiBox);
  }

  function renderRegole() {
    const princ = DIETA.principi;
    const princCard = el('div', { className: 'card', style: { marginBottom: '24px' } },
      el('h2', { className: 'section-title' }, princ.titolo),
      el('p', { className: 'intro' }, princ.intro),
      ...princ.paragrafi.map(p => el('p', { style: { marginBottom: '12px', fontSize: '0.95rem' } }, p)),
      ...princ.immagini.map(img =>
        el('figure', { className: 'immagine-regola' },
          el('img', { src: img.file, alt: img.didascalia, loading: 'lazy', onclick: () => openLightbox(princ.immagini, princ.immagini.indexOf(img)) }),
          el('figcaption', {}, img.didascalia)
        )
      )
    );

    const searchInput = el('input', { type: 'text', className: 'search-input', placeholder: 'Cerca una sostituzione (es. pasta)...', oninput: (e) => filterRegole(e.target.value) });

    const accordion = el('div', { className: 'accordion' });
    DIETA.regole.forEach(regola => {
      const item = el('div', { className: 'accordion-item' });
      const header = el('button', { className: 'accordion-header', onclick: () => {
        item.classList.toggle('open');
        const content = item.querySelector('.accordion-content');
        if (item.classList.contains('open')) {
          content.style.maxHeight = content.scrollHeight + 'px';
        } else {
          content.style.maxHeight = null;
        }
      }},
        el('span', { className: 'accordion-icon' }, regola.icona),
        el('span', { className: 'accordion-title' }, regola.titolo),
        el('span', { className: 'accordion-arrow' }, '▼')
      );
      
      const content = el('div', { className: 'accordion-content' });
      const inner = el('div', { style: { paddingBottom: '20px' } });
      
      inner.appendChild(el('p', { className: 'regola-intro' }, regola.intro));
      if (regola.esempio) {
        inner.appendChild(el('div', { className: 'regola-esempio' }, 'Esempio: ' + regola.esempio));
      }
      
      regola.gruppi.forEach(gruppo => {
        inner.appendChild(el('div', { className: 'regola-gruppo' },
          el('h4', {}, gruppo.nome),
          el('ul', { className: 'chip-list' },
            ...gruppo.voci.map(v => el('li', { className: 'chip' }, v))
          )
        ));
      });
      
      if (regola.immagini) {
        regola.immagini.forEach(img => {
          inner.appendChild(el('figure', { className: 'immagine-regola' },
            el('img', { src: img.file, alt: img.didascalia, loading: 'lazy', onclick: () => openLightbox(regola.immagini, regola.immagini.indexOf(img)) }),
            el('figcaption', {}, img.didascalia)
          ));
        });
      }
      
      content.appendChild(inner);
      item.appendChild(header);
      item.appendChild(content);
      accordion.appendChild(item);
    });

    app.append(princCard, searchInput, accordion);
  }

  function filterRegole(query) {
    const q = query.toLowerCase();
    document.querySelectorAll('.accordion-item').forEach(item => {
      let hasMatch = false;
      item.querySelectorAll('.chip').forEach(chip => {
        if (chip.textContent.toLowerCase().includes(q)) hasMatch = true;
      });
      if (item.querySelector('.accordion-title').textContent.toLowerCase().includes(q)) hasMatch = true;
      
      if (q === '' || hasMatch) {
        item.style.display = '';
        if (q !== '' && hasMatch) {
          item.classList.add('open');
          item.querySelector('.accordion-content').style.maxHeight = item.querySelector('.accordion-content').scrollHeight + 'px';
        }
      } else {
        item.style.display = 'none';
      }
    });
  }

  function renderRaccomandazioni() {
    const searchInput = el('input', { type: 'text', className: 'search-input', placeholder: 'Cerca un consiglio...', oninput: (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.raccomandazione-card').forEach(card => {
        const text = card.querySelector('.raccomandazione-testo').textContent.toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    }});
    
    const list = el('div', { className: 'raccomandazioni-list' },
      ...DIETA.raccomandazioni.map(r =>
        el('div', { className: 'raccomandazione-card' },
          el('div', { className: 'raccomandazione-num' }, r.n),
          el('div', { className: 'raccomandazione-testo' }, r.testo)
        )
      )
    );
    
    app.append(searchInput, list);
  }

  function renderCottura() {
    const tables = el('div', { className: 'cottura-tables' });
    DIETA.pesoCottura.gruppi.forEach(gruppo => {
      const table = el('table', { className: 'cottura-table' },
        el('thead', {},
          el('tr', {},
            el('th', {}, 'Alimento'),
            el('th', {}, 'Peso cotto (per 100g crudo)')
          )
        ),
        el('tbody', {},
          ...gruppo.voci.map(v =>
            el('tr', {},
              el('td', {}, v.alimento),
              el('td', {}, v.cotto + ' g')
            )
          )
        )
      );
      tables.appendChild(el('div', { className: 'cottura-group' },
        el('h3', {}, gruppo.nome),
        table
      ));
    });

    const allVoci = [];
    DIETA.pesoCottura.gruppi.forEach(g => g.voci.forEach(v => allVoci.push({ ...v, gruppo: g.nome })));

    const select = el('select', { className: 'calc-select' },
      ...allVoci.map(v => el('option', { value: v.alimento }, `${v.alimento} (${v.gruppo})`))
    );
    
    const input = el('input', { type: 'number', className: 'calc-input', placeholder: 'Grammi', min: '0' });
    
    const radioCrudo = el('input', { type: 'radio', name: 'direzione', value: 'crudo', checked: true });
    const radioCotto = el('input', { type: 'radio', name: 'direzione', value: 'cotto' });
    
    const resultDiv = el('div', { className: 'calc-result' });
    
    const calcola = () => {
      const alimento = allVoci.find(v => v.alimento === select.value);
      if (!alimento) return;
      const g = parseFloat(input.value);
      if (isNaN(g) || g <= 0) { resultDiv.textContent = ''; return; }
      
      if (radioCrudo.checked) {
        const cotto = (g * alimento.cotto) / 100;
        resultDiv.textContent = `${g}g crudo = ${cotto.toFixed(1)}g cotto`;
      } else {
        const crudo = (g * 100) / alimento.cotto;
        resultDiv.textContent = `${g}g cotto = ${crudo.toFixed(1)}g crudo`;
      }
    };
    
    input.addEventListener('input', calcola);
    select.addEventListener('change', calcola);
    radioCrudo.addEventListener('change', calcola);
    radioCotto.addEventListener('change', calcola);

    const calcCard = el('div', { className: 'calc-card card' },
      el('h3', {}, 'Calcolatore crudo/cotto'),
      select,
      input,
      el('div', { className: 'calc-direzione' },
        el('label', {}, radioCrudo, 'Da crudo a cotto'),
        el('label', {}, radioCotto, 'Da cotto a crudo')
      ),
      resultDiv
    );

    app.append(
      el('h2', { className: 'section-title' }, DIETA.pesoCottura.titolo),
      el('p', { className: 'intro' }, DIETA.pesoCottura.sottotitolo),
      tables,
      calcCard
    );
  }

  function renderAcque() {
    const intro = el('p', { className: 'intro' }, DIETA.acque.intro);
    const perche = el('div', { style: { marginBottom: '20px' } },
      el('h3', { style: { marginBottom: '10px' } }, 'Perché sceglierle?'),
      el('div', { className: 'chip-list' },
        ...DIETA.acque.perche.map(p => el('span', { className: 'chip' }, p))
      )
    );
    
    const grid = el('div', { className: 'acque-grid' },
      ...DIETA.acque.ricette.map(r =>
        el('div', { className: 'acqua-card card' },
          el('span', { className: 'acqua-num' }, r.n),
          el('h3', {}, r.nome),
          el('p', {}, r.testo)
        )
      )
    );
    
    const suggerisciBtn = el('button', { className: 'btn', onclick: () => {
      document.querySelectorAll('.acqua-card').forEach(c => c.classList.remove('highlight'));
      const cards = document.querySelectorAll('.acqua-card');
      const random = Math.floor(Math.random() * cards.length);
      cards[random].classList.add('highlight');
      cards[random].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }}, 'Suggeriscimi un\'acqua');
    
    app.append(intro, perche, suggerisciBtn, grid);
  }

  function renderPesare() {
    const utensili = el('div', { style: { marginBottom: '20px' } },
      el('h3', { style: { marginBottom: '10px' } }, DIETA.pesare.intro),
      el('div', { className: 'chip-list' },
        ...DIETA.pesare.utensili.map(u => el('span', { className: 'chip' }, u))
      )
    );
    
    const equivList = el('div', { className: 'equivalenze-list' },
      ...DIETA.pesare.equivalenze.map(e => el('div', { className: 'equivalenza-card card' }, e))
    );
    
    const manoSection = el('div', { className: 'mano-section' },
      el('h3', { style: { marginBottom: '10px' } }, DIETA.pesare.mano_intro),
      el('ul', { className: 'mano-list' },
        ...DIETA.pesare.mano.map(m => el('li', {}, m))
      )
    );
    
    const imgGrid = el('div', { className: 'immagini-grid' },
      ...DIETA.pesare.immagini.map((img, i) =>
        el('figure', { className: 'immagine-card' },
          el('img', { src: img.file, alt: img.didascalia, loading: 'lazy', onclick: () => openLightbox(DIETA.pesare.immagini, i) }),
          el('figcaption', {}, img.didascalia)
        )
      )
    );
    
    app.append(utensili, equivList, manoSection, imgGrid);
  }

  function renderStagionalita() {
    let currentMonth = new Date().getMonth() + 1;
    
    const monthChips = el('div', { className: 'month-chips' },
      ...DIETA.stagionalita.mesi.map((m, i) =>
        el('button', {
          className: 'chip' + (i + 1 === currentMonth ? ' active' : ''),
          onclick: () => {
            currentMonth = i + 1;
            setTimeout(renderStagionalita, 0);
          }
        }, m)
      )
    );
    
    const fruttaInStagione = DIETA.stagionalita.frutta.filter(f => f.mesi.includes(currentMonth));
    const verduraInStagione = DIETA.stagionalita.verdura.filter(v => v.mesi.includes(currentMonth));
    
    const counts = el('p', { className: 'stagione-counts' },
      `${fruttaInStagione.length} frutti e ${verduraInStagione.length} verdure di stagione a ${DIETA.stagionalita.mesi[currentMonth - 1]}`
    );
    
    const fruttaGrid = el('div', { className: 'stagione-grid' },
      ...fruttaInStagione.map(f => {
        const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
        return el('div', { className: 'stagione-card card' },
          el('span', { className: 'stagione-emoji' }, f.emoji),
          el('span', { className: 'stagione-nome' }, f.nome),
          !f.mesi.includes(prevMonth) ? el('span', { className: 'badge badge-inizio' }, 'Inizia') : null,
          !f.mesi.includes(nextMonth) ? el('span', { className: 'badge badge-fine' }, 'Fine') : null
        );
      })
    );
    
    const verduraGrid = el('div', { className: 'stagione-grid' },
      ...verduraInStagione.map(v => {
        const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        const nextMonth = currentMonth === 12 ? 1 : currentMonth + 1;
        return el('div', { className: 'stagione-card card' },
          el('span', { className: 'stagione-emoji' }, v.emoji),
          el('span', { className: 'stagione-nome' }, v.nome),
          !v.mesi.includes(prevMonth) ? el('span', { className: 'badge badge-inizio' }, 'Inizia') : null,
          !v.mesi.includes(nextMonth) ? el('span', { className: 'badge badge-fine' }, 'Fine') : null
        );
      })
    );

    const calendarBtns = el('div', { className: 'calendar-btns' },
      ...DIETA.stagionalita.immagini.map((img, i) =>
        el('button', { className: 'btn btn-secondary', onclick: () => openLightbox(DIETA.stagionalita.immagini, i) }, img.didascalia)
      )
    );
    
    app.append(
      el('h2', { className: 'section-title' }, 'Stagionalità'),
      monthChips,
      counts,
      el('h3', { style: { marginBottom: '12px' } }, 'Frutta'),
      fruttaGrid,
      el('h3', { style: { marginBottom: '12px', marginTop: '24px' } }, 'Verdura'),
      verduraGrid,
      calendarBtns
    );
  }

  function renderPorzioni() {
    const categorie = [...new Set(DIETA.porzioni.map(p => p.categoria))];
    let activeCat = 'Tutte';
    
    const filterChips = el('div', { className: 'filter-chips' });
    const allChip = el('button', { className: 'chip active' }, 'Tutte');
    allChip.addEventListener('click', () => {
      activeCat = 'Tutte';
      document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
      allChip.classList.add('active');
      filterPorzioni();
    });
    filterChips.appendChild(allChip);
    
    categorie.forEach(cat => {
      const chip = el('button', { className: 'chip' }, cat);
      chip.addEventListener('click', () => {
        activeCat = cat;
        document.querySelectorAll('.filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        filterPorzioni();
      });
      filterChips.appendChild(chip);
    });
    
    const grid = el('div', { className: 'porzioni-grid' });
    
    DIETA.porzioni.forEach((p, index) => {
      grid.appendChild(el('div', { className: 'porzione-card card', dataset: { categoria: p.categoria }, onclick: () => openLightbox(DIETA.porzioni, index) },
        el('img', { src: p.file, alt: p.titolo, loading: 'lazy' }),
        el('div', { className: 'porzione-info' },
          el('h4', {}, p.titolo),
          el('p', {}, p.didascalia)
        )
      ));
    });
    
    function filterPorzioni() {
      document.querySelectorAll('.porzione-card').forEach(card => {
        card.style.display = (activeCat === 'Tutte' || card.dataset.categoria === activeCat) ? '' : 'none';
      });
    }
    
    app.append(filterChips, grid);
  }

  function renderUnita() {
    const searchInput = el('input', { type: 'text', className: 'search-input', placeholder: 'Cerca un\'unità di misura...', oninput: (e) => {
      const q = e.target.value.toLowerCase();
      document.querySelectorAll('.unita-row').forEach(row => {
        row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    }});
    
    const groups = el('
