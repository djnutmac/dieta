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
  const toast = document.getElementById('toast');

  // Stato
  let selectedDayId = null;
  let lightboxImages = [];
  let lightboxIndex = 0;

  // Utility per creare elementi
  function el(tag, attrs = {}, ...children) {
    const element = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === 'checked' || key === 'selected' || key === 'value' || key === 'disabled' || key === 'hidden') {
        element[key] = value;
      } else if (key === 'textContent') {
        element.textContent = value;
      } else if (key === 'innerHTML') {
        element.innerHTML = value;
      } else if (key === 'className') {
        element.className = value;
      } else if (key.startsWith('on') && typeof value === 'function') {
        element.addEventListener(key.substring(2).toLowerCase(), value);
      } else if (key === 'dataset') {
        Object.assign(element.dataset, value);
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

  // Router
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

  // Dashboard
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

  // Menu del giorno
  function renderMenu() {
    if (!selectedDayId) {
      selectedDayId = getGiornoOggi().id;
    }

    const tabs = el('div', { className: 'day-tabs' },
      ...DIETA.meta.giorni.map(g =>
        el('button', {
          className: 'day-tab' + (g.id === selectedDayId ? ' active' : ''),
          onclick: () => { selectedDayId = g.id; renderMenu(); }
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
        renderMenu();
      }}),
      el('span', { className: 'toggle-slider' }),
      'Inverti pranzo e cena'
    );

    const resetAllBtn = el('button', { className: 'btn btn-secondary', onclick: () => {
      DIETA.meta.slot.forEach(s => {
        try { localStorage.removeItem(`dieta_menu_${selectedDayId}_${s.id}`); } catch(e) {}
      });
      renderMenu();
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
      let override = null;
      try { override = JSON.parse(localStorage.getItem(overrideKey)); } catch(e) {}

      const card = el('div', { className: 'slot-card' });
      const header = el('div', { className: 'slot-header' },
        el('span', { className: 'slot-icon' }, slot.icona),
        el('h3', { className: 'slot-name' }, slot.nome),
        override ? el('span', { className: 'badge badge-mod' }, 'Modificato') : null
      );
      card.appendChild(header);

      const body = el('div', { className: 'slot-body' });
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
          try { localStorage.removeItem(overrideKey); } catch(e) {}
          renderMenu();
        }}, 'Ripristina'));
      }

      const select = el('select', { className: 'slot-select', onchange: (e) => {
        const val = e.target.value;
        if (val === 'base') {
          try { localStorage.removeItem(overrideKey); } catch(e) {}
        } else if (val.startsWith('day_')) {
          const dayId = val.substring(4);
          try { localStorage.setItem(overrideKey, JSON.stringify({ type: 'day', dayId })); } catch(e) {}
        } else if (val.startsWith('recipe_')) {
          const recipeId = val.substring(7);
          const alt = slotData.alternative?.find(a => a.ricetta === recipeId);
          if (alt) {
            try { localStorage.setItem(overrideKey, JSON.stringify({ type: 'recipe', recipeId