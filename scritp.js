const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

// 30 ta yuqori sifatli Unsplash rasmlari
const IDS = [
  '1566073771259-6a8506099945', '1551882547-ff40c63fe5fa', '1542314831-068cd1dbfeeb', '1520250497591-112f2f40a3f4',
  '1582719478250-c89cae4dc85b', '1578683010236-d716f9a3f461', '1611892440504-42a792e24d32', '1590490360182-c33d57733427',
  '1618773928121-c32242e63f39', '1564501049412-61c2a3083791', '1445019980597-93fa8acb246c', '1571896349842-33c89424de2d',
  '1596394516093-501ba68a0ba6', '1584132967334-10e028bd69f7', '1631049307264-da0ec9d70304', '1540541338287-41700207dee6',
  '1522771739844-6a9f6d5f14af', '1544161515-4ab6ce6db874', '1414235077428-338989a2e8c0', '1517248135467-4c7edcad34c4',
  '1591088398332-8a7791972843', '1602002418082-a4443e081dd1', '1584132915807-fd1f5fbc078f', '1571003123894-1f0594d2b5d9',
  '1560448204-e02f11c3d0e2', '1595576508898-0ad5c879a061', '1615460549969-36fa19529a42', '1587985064135-0366536eab42',
  '1578683010236-d716f9a3f461', '1566665797739-1674de7a421a'
];
const img = (i, w = 900) => `https://images.unsplash.com/photo-${IDS[i % IDS.length]}?auto=format&fit=crop&w=${w}&q=75`;

const fallback = (el) => {
  const h = (Math.random() * 60 + 160) | 0;
  const svg = `<svg xmlns='http://www\.w3.org/2000/svg' width='900' height='600'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${h},60%,30%)'/><stop offset='1' stop-color='hsl(${h + 50},70%,14%)'/></linearGradient></defs><rect width='900' height='600' fill='url(#g)'/><circle cx='700' cy='160' r='70' fill='#ffb703' opacity='.85'/><path d='M0 430 Q225 340 450 430 T900 420 V600 H0Z' fill='#ffffff18'/></svg>`;
  el.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG' && !e.target.dataset.fb) { e.target.dataset.fb = 1; fallback(e.target); }
}, true);

// 20 TA SOTILADIGAN XONA VA VILLA
const ROOMS = [
  { n: 'Standart Shahar', t: 'standart', p: 89, i: 4, g: 2, s: 24, b: 'Qirol karavoti', r: '4.8', d: 'Shahar manzarali qulay va shinam xona, tezkor ish stoli bilan.' },
  { n: 'Standart Bog\'', t: 'standart', p: 99, i: 5, g: 2, s: 26, b: 'Ikki karavot', r: '4.8', d: 'Tropik yashil bog\'ga qaragan sokin va salqin xona.' },
  { n: 'Standart Klassik', t: 'standart', p: 109, i: 14, g: 2, s: 28, b: 'Qirol karavoti', r: '4.9', d: 'Zamonaviy minimalizm uslubidagi keng yotoqxona.' },
  { n: 'Standart Balkonli', t: 'standart', p: 119, i: 16, g: 2, s: 30, b: 'Qirol karavoti', r: '4.9', d: 'Tonggi qahva uchun shaxsiy kichik balkonga ega xona.' },
  { n: 'Standart Comfort', t: 'standart', p: 129, i: 24, g: 2, s: 32, b: 'King Size', r: '4.9', d: 'Kengaytirilgan dam olish zonasi va yumshoq kreslolar bilan.' },

  { n: 'Deluxe Dengiz', t: 'deluxe', p: 159, i: 6, g: 3, s: 38, b: 'Balkon + dengiz', r: '4.9', d: 'To\'g\'ridan-to\'g\'ri moviy dengizga qaragan panoramali oyna.' },
  { n: 'Deluxe Terrasa', t: 'deluxe', p: 179, i: 7, g: 3, s: 42, b: 'Shaxsiy terrasa', r: '5.0', d: 'Quyosh botishini tomosha qilish uchun keng terrasa.' },
  { n: 'Deluxe Laguna', t: 'deluxe', p: 189, i: 11, g: 3, s: 44, b: 'Basseyn chiqishi', r: '4.9', d: 'Terrasadan to\'g\'ridan-to\'g\'ri basseyn suviga tushish imkoniyati.' },
  { n: 'Deluxe Panorama', t: 'deluxe', p: 199, i: 13, g: 3, s: 46, b: '360° manzara', r: '5.0', d: 'Yuqori qavatda joylashgan, butun ko\'rfaz ko\'rinadigan xona.' },
  { n: 'Deluxe Romantik', t: 'deluxe', p: 215, i: 20, g: 2, s: 48, b: 'Vanna + gullar', r: '5.0', d: 'Juftliklar uchun maxsus bezatilgan va jakuzili xona.' },

  { n: 'Oila Suiti', t: 'suit', p: 249, i: 8, g: 4, s: 64, b: '2 yotoqxona', r: '4.9', d: 'Bolalar va ota-onalar uchun alohida ikki xonali keng suit.' },
  { n: 'Junior Suit', t: 'suit', p: 269, i: 9, g: 3, s: 58, b: 'Mehmonxona zonasi', r: '4.9', d: 'Keng mehmon kutish zali va alohida ish kabinetiga ega.' },
  { n: 'Executive Suit', t: 'suit', p: 299, i: 21, g: 4, s: 72, b: 'VIP Lounge', r: '5.0', d: 'Biznes va dam olishni birlashtiruvchilar uchun premium suit.' },
  { n: 'Royal Oila Suiti', t: 'suit', p: 349, i: 22, g: 5, s: 85, b: '3 yotoqxona', r: '5.0', d: 'Katta oilalar uchun oshxona va keng zalga ega hashamatli suit.' },
  { n: 'Prezident Suiti', t: 'suit', p: 399, i: 12, g: 4, s: 96, b: 'Jakuzi + butler', r: '5.0', d: '24/7 shaxsiy butler va panoramali jakuziga ega eng nufuzli suit.' },

  { n: 'Sohil Villasi', t: 'villa', p: 459, i: 1, g: 4, s: 115, b: 'Xususiy plyaj', r: '5.0', d: 'Oltin qumli sohilning o\'zida joylashgan alohida villa.' },
  { n: 'Basseynli Villa', t: 'villa', p: 529, i: 3, g: 6, s: 140, b: 'Shaxsiy basseyn', r: '5.0', d: 'Faqat sizning oilangiz uchun isitiladigan xususiy basseyn.' },
  { n: 'Tropik Bog\' Villasi', t: 'villa', p: 589, i: 15, g: 6, s: 160, b: 'Bog\' + BBQ zona', r: '5.0', d: 'Palmalar orasida yashiringan, ochiq osmon ostidagi dam olish maskani.' },
  { n: 'Okean Sunset Villa', t: 'villa', p: 649, i: 25, g: 6, s: 185, b: 'Okean ustida', r: '5.0', d: 'Suv ustida qurilgan shisha polli va quyosh botishini ko\'rsatuvchi villa.' },
  { n: 'Aurelia Grand Villa', t: 'villa', p: 749, i: 23, g: 8, s: 220, b: '2 qavat + yaxta', r: '5.0', d: 'Shaxsiy pristan, kinoteatr va oshpazga ega eng oliy darajadagi villa.' }
];

const DINING = [
  { n: 'Azure Sohil Restorani', t: '07:00 – 23:00', i: 18, d: 'Yangi tutilgan dengiz mahsulotlari va O\'rta yer dengizi taomlari.' },
  { n: 'Saffron Milliy & Sharq', t: '12:00 – 00:00', i: 19, d: 'An\'anaviy o\'zbek va sharqona shohona taomlar zamonaviy talqinda.' },
  { n: 'Sunset Sky Lounge', t: '17:00 – 02:00', i: 10, d: 'Tom ustidagi ochiq terassada mualliflik kokteyllari va jonli jaz.' },
  { n: 'Breeze Basseyn Bari', t: '09:00 – 21:00', i: 0, d: 'Suv bo\'yida yangi siqilgan sharbatlar, muzqaymoq va yengil gazaklar.' }
];

const OFFERS = [
  { b: '-25% ERTA BRON', n: 'Yozgi Ta\'til Paketi', p: 'Kamida 30 kun oldin band qiling va barcha xonalarga 25% chegirma hamda bepul transferga ega bo\'ling.', i: 2 },
  { b: 'ASAL OYI', n: 'Romantik Juftliklar Uchun', p: 'Xonada gullar bezagi, kechki sham yorug\'idagi ovqat va juftliklar uchun 60 daqiqalik SPA massaji.', i: 17 },
  { b: 'OILA PAKETI', n: 'Bolalar Bepul Dam Oladi', p: '12 yoshgacha bo\'lgan 2 nafar bola uchun yashash va nonushta mutlaqo bepul, shuningdek animatsiya klubi.', i: 15 }
];

const FAC = [
  ['fa-water-ladder', 'Cheksiz basseyn', 'Dengizga qaragan, 24/7 ochiq'], ['fa-wifi', 'Tezkor Wi-Fi', '1 Gbit/s butun hudud bo\'ylab'],
  ['fa-utensils', '4 ta Restoran', 'Mahalliy va jahon taomlari'], ['fa-spa', 'Spa markazi', 'Massaj, hammom, sauna'],
  ['fa-dumbbell', 'Fitnes zal', 'Zamonaviy trenajyorlar'], ['fa-square-parking', 'Bepul parkovka', 'Qo\'riqlanadigan, yopiq'],
  ['fa-plane-arrival', 'Aeroport transfer', 'Har bir reysga kutib olamiz'], ['fa-martini-glass-citrus', 'Sohil bari', 'Kokteyllar va jonli musiqa']
];

const PLANS = [
  { n: 'Standart', d: 89, f: ['Nonushta kiritilgan', 'Bepul Wi-Fi', 'Basseyndan foydalanish', 'Fitnes zal'] },
  { n: 'Deluxe', d: 159, f: ['Nonushta va kechki ovqat', 'Dengiz manzarasi', 'Spa 30 daqiqa', 'Aeroport transfer'], hot: 1 },
  { n: 'Suit & Villa', d: 249, f: ['Barcha ovqatlar (All Inclusive)', '24/7 Shaxsiy butler', 'Jakuzi va xususiy plyaj', 'Cheksiz spa'] }
];

const REVIEWS = [
  ['Dilnoza R.', 'Balkondan chiqqan quyosh va tong sukunati — shuncha vaqtdan beri bunchalik dam olmagandim.', 9],
  ['James K.', 'Xizmat a\'lo darajada. Butler bizni ismimiz bilan kutib oldi, bolalar basseyndan chiqmadi.', 10],
  ['Aziz T.', 'Narx va sifat mos keldi. Bron qilish bir daqiqa ham olmadi, transfer ham vaqtida keldi.', 11],
  ['Marta S.', 'Spa markazi eng zo\'ri. Albatta yana kelamiz, endi do\'stlar bilan.', 17]
];

const FAQS = [
  ['Mehmonxonaga kirish (Check-in) va chiqish (Check-out) vaqti qachon?', 'Kirish soat 14:00 dan boshlanadi, chiqish esa soat 12:00 gacha. Bo\'sh xonalar mavjud bo\'lsa, ertaroq joylashish imkoniyati taqdim etiladi.'],
  ['Aeroportdan kutib olish (Transfer) xizmati bormi?', 'Ha, bizning haydovchilarimiz sizni aeroportda ism-familiyangiz yozilgan lavha bilan kutib oladi. Band qilish formasida "Transfer" bandini belgilashingiz kifoya.'],
  ['Bolalar uchun qanday sharoitlar yaratilgan?', 'Mehmonxonamizda bolalar uchun xavfsiz sayoz basseyn, maxsus menyu, o\'yin maydonchasi va professional enagalar xizmati mavjud.'],
  ['Band qilishni bekor qilish yoki sanani o\'zgartirish mumkinmi?', 'Kirish sanasidan 48 soat oldin bandlovni bepul bekor qilishingiz yoki boshqa kunga ko\'chirishingiz mumkin.']
];

let weekly = false;
const money = (n) => '$' + Math.round(n).toLocaleString('en-US');

// Hero Slider
$('#slides').innerHTML = [1, 3, 10, 0].map((n, k) => `<div class="${k ? '' : 'on'}" style="background-image:url('${img(n, 1600)}')"></div>`).join('');
let slideNow = 0;
setInterval(() => {
  const all = $$('#slides div');
  if (!all.length) return;
  all[slideNow].classList.remove('on');
  slideNow = (slideNow + 1) % all.length;
  all[slideNow].classList.add('on');
}, 5500);

$('#marquee').innerHTML = [...FAC, ...FAC].map(f => `<span><i class="fa-solid ${f[0]}"></i> ${f[1]}</span>`).join('');

// 20 ta Xonani chizish + Filter + Qidiruv
let currentFilter = 'all';
let searchQuery = '';

function drawRooms() {
  const list = ROOMS.filter(r => {
    const matchCat = currentFilter === 'all' || r.t === currentFilter;
    const q = searchQuery.toLowerCase();
    const matchText = !q || r.n.toLowerCase().includes(q) || r.d.toLowerCase().includes(q) || r.b.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  if (!list.length) {
    $('#roomGrid').innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--mut)"><i class="fa-solid fa-magnifying-glass" style="font-size:2.5rem;margin-bottom:10px;color:var(--act)"></i><p>So'rovingiz bo'yicha xona topilmadi.</p></div>`;
    return;
  }

  $('#roomGrid').innerHTML = list.map(r => `
    <article class="room">
      <div class="pic">
        <img src="${img(r.i)}" alt="${r.n}" loading="lazy">
        <span class="tag">${r.t}</span>
        <span class="rating-badge"><i class="fa-solid fa-star"></i> ${r.r}</span>
        <button class="heart" aria-label="Sevimli"><i class="fa-solid fa-heart"></i></button>
      </div>
      <div class="info">
        <h3>${r.n}</h3>
        <p class="room-desc">${r.d}</p>
        <div class="meta">
          <span><i class="fa-solid fa-user-group"></i>${r.g} mehmon</span>
          <span><i class="fa-solid fa-ruler-combined"></i>${r.s} m²</span>
          <span><i class="fa-solid fa-bed"></i>${r.b}</span>
        </div>
        <div class="foot">
          <div class="cost">${money(r.p)} <small>/ kecha</small></div>
          <button class="btn small pick" data-room="${r.n}"><i class="fa-solid fa-check"></i> Tanlash</button>
        </div>
      </div>
    </article>`).join('');
}
drawRooms();

$('#filters').onclick = (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  $$('.chip').forEach(c => c.classList.remove('on'));
  b.classList.add('on');
  currentFilter = b.dataset.f;
  drawRooms();
};

$('#roomSearch').oninput = (e) => {
  searchQuery = e.target.value;
  drawRooms();
};

// Restoranlar
$('#diningGrid').innerHTML = DINING.map(d => `
  <div class="dine-card reveal">
    <img src="${img(d.i, 700)}" alt="${d.n}" loading="lazy">
    <div class="dine-body">
      <span class="dine-time"><i class="fa-regular fa-clock"></i> ${d.t}</span>
      <h3>${d.n}</h3>
      <p>${d.d}</p>
    </div>
  </div>
`).join('');

// Aksiyalar
$('#offersGrid').innerHTML = OFFERS.map(o => `
  <div class="offer-card reveal">
    <img src="${img(o.i, 800)}" alt="${o.n}" loading="lazy">
    <div class="offer-content">
      <span class="offer-badge"><i class="fa-solid fa-fire"></i> ${o.b}</span>
      <h3>${o.n}</h3>
      <p>${o.p}</p>
      <a href="#booking" class="btn small"><i class="fa-solid fa-bolt"></i> Foydalanish</a>
    </div>
  </div>
`).join('');

// Qulayliklar
$('#facGrid').innerHTML = FAC.map(f => `<div class="f reveal"><i class="fa-solid ${f[0]}"></i><h3>${f[1]}</h3><p>${f[2]}</p></div>`).join('');

// Narxlar
function drawPrices() {
  $('#priceGrid').innerHTML = PLANS.map(p => {
    const v = weekly ? p.d * 7 * 0.85 : p.d;
    return `<div class="plan ${p.hot ? 'hot' : ''}"><h3>${p.n}</h3><div class="amt">${money(v)}</div><div>${weekly ? 'haftasiga' : 'bir kechaga'}</div>
      <ul>${p.f.map(x => `<li><i class="fa-solid fa-check"></i>${x}</li>`).join('')}</ul><button class="btn pick" data-room="${p.n}"><i class="fa-solid fa-calendar-plus"></i> Shuni tanlayman</button></div>`;
  }).join('');
}
drawPrices();
$('#priceSwitch').onclick = (e) => {
  weekly = !weekly;
  e.currentTarget.classList.toggle('on', weekly);
  $$('.amt').forEach(a => a.classList.add('flip'));
  setTimeout(drawPrices, 260);
};

// Galereya (30 ta rasm)
$('#masonry').innerHTML = IDS.map((_, i) => `
  <figure class="reveal">
    <img src="${img(i, 700)}" alt="Galereya ${i + 1}" loading="lazy" style="aspect-ratio:${[4 / 5, 1, 4 / 3, 3 / 4][i % 4]};object-fit:cover">
    <div class="masonry-zoom"><i class="fa-solid fa-magnifying-glass-plus"></i></div>
  </figure>`).join('');

$('#masonry').onclick = (e) => {
  const f = e.target.closest('figure');
  if (!f) return;
  $('#lightbox img').src = f.querySelector('img').src.replace('w=700', 'w=1400');
  $('#lightbox').classList.add('open');
};
$('#lightbox').onclick = (e) => {
  if (e.target.id === 'lightbox' || e.target.closest('#lbClose')) $('#lightbox').classList.remove('open');
};

// Sharhlar
let rv = 0;
function drawReview() {
  const r = REVIEWS[rv];
  $('#review').innerHTML = `<blockquote>“${r[1]}”</blockquote><div class="who"><img src="${img(r[2], 200)}" alt=""><div><b style="color:var(--ink)">${r[0]}</b><br><span style="color:var(--act)">★★★★★</span></div></div>`;
  $('#dots').innerHTML = REVIEWS.map((_, i) => `<button class="${i === rv ? 'on' : ''}" data-i="${i}" aria-label="Fikr ${i + 1}"></button>`).join('');
}
drawReview();
$('#dots').onclick = (e) => { if (e.target.dataset.i) { rv = +e.target.dataset.i; drawReview(); } };
setInterval(() => { rv = (rv + 1) % REVIEWS.length; drawReview(); }, 6500);

// FAQ
$('#faqList').innerHTML = FAQS.map((q, idx) => `
  <div class="faq-item ${idx === 0 ? 'open' : ''}">
    <button class="faq-q" type="button"><span>${q[0]}</span><i class="fa-solid fa-chevron-down"></i></button>
    <div class="faq-a"><p>${q[1]}</p></div>
  </div>
`).join('');
$('#faqList').onclick = (e) => {
  const btn = e.target.closest('.faq-q');
  if (btn) btn.parentElement.classList.toggle('open');
};

// Band qilish formasi
const fRoom = $('#fRoom');
fRoom.innerHTML = ROOMS.map(r => `<option value="${r.p}" data-i="${r.i}">${r.n} — ${money(r.p)}/kecha</option>`).join('');
const iso = (d) => d.toISOString().slice(0, 10);
const today = new Date(), tom = new Date(Date.now() + 864e5 * 2);
['#qIn', '#fIn'].forEach(s => { $(s).min = iso(today); $(s).value = iso(today); });
['#qOut', '#fOut'].forEach(s => { $(s).min = iso(today); $(s).value = iso(tom); });

function calc() {
  const n = Math.max(0, Math.round((new Date($('#fOut').value) - new Date($('#fIn').value)) / 864e5));
  const ex = $$('.ex input:checked').reduce((a, c) => a + +c.dataset.p, 0);
  const sum = n * (+fRoom.value + ex);
  $('#nights').innerHTML = `<i class="fa-solid fa-moon"></i> ${n} kecha`;
  $('#total').textContent = money(sum);
  $('#bookImg').src = img(fRoom.selectedOptions[0].dataset.i, 1000);
}
['#fIn', '#fOut'].forEach(s => $(s).addEventListener('change', calc));
fRoom.onchange = calc;
$$('.ex input').forEach(c => c.onchange = calc);
calc();

document.addEventListener('click', (e) => {
  const b = e.target.closest('.btn');
  if (b) {
    const r = b.getBoundingClientRect(), d = Math.max(r.width, r.height);
    const s = document.createElement('span');
    s.className = 'ripple';
    s.style.cssText = `width:${d}px;height:${d}px;left:${e.clientX - r.left - d / 2}px;top:${e.clientY - r.top - d / 2}px`;
    b.appendChild(s);
    setTimeout(() => s.remove(), 700);
  }
  const h = e.target.closest('.heart');
  if (h) { h.classList.toggle('on'); toast(h.classList.contains('on') ? 'Sevimlilarga qo\'shildi ❤' : 'Sevimlilardan olib tashlandi'); }
  const p = e.target.closest('.pick');
  if (p) {
    const idx = ROOMS.findIndex(r => r.n.toLowerCase().includes(p.dataset.room.toLowerCase()));
    if (idx > -1) fRoom.selectedIndex = idx;
    calc();
    $('#booking').scrollIntoView({ behavior: 'smooth' });
    toast(`${p.dataset.room} tanlandi`);
  }
});

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t.timer);
  t.timer = setTimeout(() => t.classList.remove('show'), 2400);
}

$('#quick').onsubmit = (e) => {
  e.preventDefault();
  $('#fIn').value = $('#qIn').value;
  $('#fOut').value = $('#qOut').value;
  calc();
  $('#rooms').scrollIntoView({ behavior: 'smooth' });
  toast(`${$('#qGuests').value} mehmon uchun bo'sh xonalar`);
};

$('#bookForm').onsubmit = (e) => {
  e.preventDefault();
  let bad = null;
  ['#fName', '#fPhone', '#fMail'].forEach(s => {
    const el = $(s), ok = el.value.trim().length > 2 && (s !== '#fMail' || /\S+@\S+\.\S+/.test(el.value));
    el.classList.toggle('bad', !ok);
    if (!ok && !bad) bad = el;
  });
  const n = Math.round((new Date($('#fOut').value) - new Date($('#fIn').value)) / 864e5);
  if (n < 1) { $('#err').textContent = 'Chiqish sanasi kirish sanasidan keyin bo\'lishi kerak.'; return; }
  if (bad) { $('#err').textContent = 'Qizil maydonlarni to\'g\'ri to\'ldiring.'; bad.focus(); return; }
  $('#err').textContent = '';
  $('#modalText').textContent = `${$('#fName').value}, ${fRoom.selectedOptions[0].text.split(' — ')[0]} xonasi ${n} kechaga band qilindi. Jami: ${$('#total').textContent}. Tasdiqlash ${$('#fMail').value} manziliga yuboriladi.`;
  $('#modal').classList.add('open');
  boom();
};
$('#modalOk').onclick = () => $('#modal').classList.remove('open');
$('#news').onsubmit = (e) => { e.preventDefault(); e.target.reset(); toast('Obuna bo\'ldingiz! 🎉'); boom(); };

const cv = $('#confetti'), cx = cv.getContext('2d');
function boom() {
  cv.width = innerWidth; cv.height = innerHeight;
  const cols = ['#ffb703', '#2ec4b6', '#ff5d73', '#ffffff', '#8338ec'];
  const ps = Array.from({ length: 160 }, () => ({ x: innerWidth / 2, y: innerHeight / 1.8, vx: (Math.random() - .5) * 22, vy: Math.random() * -20 - 4, s: Math.random() * 9 + 4, c: cols[(Math.random() * 5) | 0], r: Math.random() * 6, vr: Math.random() * .4 }));
  (function loop() {
    cx.clearRect(0, 0, cv.width, cv.height);
    ps.forEach(p => { p.vy += .45; p.x += p.vx; p.y += p.vy; p.r += p.vr; cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r); cx.fillStyle = p.c; cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); cx.restore(); });
    if (ps.some(p => p.y < cv.height + 20)) requestAnimationFrame(loop); else cx.clearRect(0, 0, cv.width, cv.height);
  })();
}

addEventListener('mousemove', (e) => { const g = $('#glow'); if(g){ g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; } });

const nav = $('#nav'), up = $('#toTop');
addEventListener('scroll', () => {
  const y = scrollY, max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
  $('#progress').style.width = (y / max) * 100 + '%';
  nav.classList.toggle('solid', y > 60);
  up.classList.toggle('show', y > 600);
});
up.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
$('#burger').onclick = () => $('#menu').classList.toggle('open');
$('#menu').onclick = (e) => { if(e.target.tagName === 'A') $('#menu').classList.remove('open'); };

// Reveal kuzatuvchi
const io = new IntersectionObserver((en) => en.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { threshold: .08 });
$$('.reveal').forEach(el => io.observe(el));

setInterval(() => { $('#viewers').textContent = 4 + ((Math.random() * 9) | 0); }, 3500);

// Tez va kafolatlangan Intro (0.9 soniyada ochiladi va hech qachon qotib qolmaydi)
(function runIntro() {
  const intro = $('#intro'), bar = $('#introBar'), num = $('#introNum');
  let p = 0;
  const iv = setInterval(() => {
    p = Math.min(100, p + 25);
    if (bar) bar.style.width = p + '%';
    if (num) num.textContent = p + '%';
    if (p >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        if (intro) intro.classList.add('open');
        setTimeout(() => { if (intro) intro.classList.add('gone'); }, 800);
      }, 150);
    }
  }, 120);
  // Har qanday holatda ham 2 soniyadan keyin majburan yopish
  setTimeout(() => { if (intro) { intro.classList.add('open', 'gone'); } }, 2000);
})();
