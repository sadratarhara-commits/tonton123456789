/* ==========================================================================
   فروشگاه تخصصی لباس زیر گل‌برگ (Golbarg Lingerie) - Vanilla JavaScript
   موتور رندر استودیویی فقط لباس، Canvas CGI، کارت‌های سه‌بعدی و سایزیاب کاپ
   ========================================================================== */

/* ۱. تولید تصاویر برداری استودیویی فقط لباس روی چوب‌لباسی (بدون هیچ مدل انسانی) */
function generateGarmentOnlySVG(type, c1, c2, idSuffix = '0') {
  const gradId = `g_${type}_${idSuffix}`;
  const hanger = `
    <path d="M120 12 C134 12 134 28 120 34 L120 44" fill="none" stroke="#d48c7c" stroke-width="4" stroke-linecap="round"/>
    <path d="M35 68 L120 42 L205 68" fill="none" stroke="#e29d8d" stroke-width="5" stroke-linecap="round"/>
  `;

  let garmentPaths = '';

  if (type === 'lace-set') {
    garmentPaths = `
      ${hanger}
      <path d="M64 62 L64 102 M176 62 L176 102" stroke="${c2}" stroke-width="4"/>
      <path d="M52 102 Q72 72 116 124 Q85 148 52 128 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M188 102 Q168 72 124 124 Q155 148 188 128 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M64 92 Q90 108 116 124 M176 92 Q150 108 124 124" stroke="#fff" stroke-width="3" stroke-dasharray="4 3" fill="none"/>
      <rect x="52" y="126" width="136" height="9" rx="4.5" fill="${c2}"/>
      <circle cx="120" cy="128" r="5" fill="#fff"/>
      <path d="M66 168 Q120 176 174 168 L166 196 Q135 208 126 236 L114 236 Q105 208 74 196 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M74 196 Q105 210 114 235 M166 196 Q135 210 126 235" stroke="#fff" stroke-width="2.5" stroke-dasharray="4 3" fill="none"/>
      <circle cx="120" cy="174" r="4.5" fill="#fff"/>
    `;
  } else if (type === 'bralette') {
    garmentPaths = `
      ${hanger}
      <path d="M70 60 L70 95 M170 60 L170 95" stroke="${c2}" stroke-width="3.5"/>
      <path d="M55 145 L70 90 L118 145 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M185 145 L170 90 L122 145 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <rect x="55" y="144" width="130" height="16" rx="6" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <line x1="58" y1="160" x2="182" y2="160" stroke="#fff" stroke-width="3" stroke-dasharray="5 4"/>
      <circle cx="120" cy="145" r="5" fill="#fff"/>
      <path d="M72 182 Q120 190 168 182 L162 200 Q130 212 124 235 L116 235 Q110 212 78 200 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
    `;
  } else if (type === 'sleep-robe') {
    garmentPaths = `
      ${hanger}
      <path d="M76 56 L120 96 L164 56 L212 128 L184 142 L170 112 L178 236 L62 236 L70 112 L56 142 L28 128 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M76 56 L120 102 L164 56" fill="none" stroke="#fff" stroke-width="3.5" stroke-dasharray="5 3"/>
      <rect x="68" y="148" width="104" height="10" rx="5" fill="#fff"/>
      <path d="M120 153 L106 196 M120 153 L136 196" stroke="#fff" stroke-width="5" stroke-linecap="round"/>
    `;
  } else if (type === 'bodysuit') {
    garmentPaths = `
      ${hanger}
      <path d="M76 58 L76 92 M164 58 L164 92" stroke="${c2}" stroke-width="4"/>
      <path d="M68 92 Q95 110 120 96 Q145 110 172 92 L166 186 Q135 204 126 236 L114 236 Q105 204 74 186 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M74 128 Q120 142 166 128 M76 158 Q120 172 164 158" fill="none" stroke="rgba(255,255,255,0.65)" stroke-width="2" stroke-dasharray="4 3"/>
      <circle cx="120" cy="98" r="5" fill="#fff"/>
    `;
  } else if (type === 'cotton-pack') {
    garmentPaths = `
      <g transform="translate(0, -18)">
        <path d="M58 95 Q120 105 182 95 L172 130 Q135 144 126 172 L114 172 Q105 144 68 130 Z" fill="#ffffff" stroke="#f9a8d4" stroke-width="2"/>
        <circle cx="120" cy="102" r="4.5" fill="#f472b6"/>
      </g>
      <g transform="translate(0, 22)">
        <path d="M58 95 Q120 105 182 95 L172 130 Q135 144 126 172 L114 172 Q105 144 68 130 Z" fill="#fce7f3" stroke="#f472b6" stroke-width="2"/>
        <circle cx="120" cy="102" r="4.5" fill="#db2777"/>
      </g>
      <g transform="translate(0, 62)">
        <path d="M58 95 Q120 105 182 95 L172 130 Q135 144 126 172 L114 172 Q105 144 68 130 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
        <circle cx="120" cy="102" r="4.5" fill="#fff"/>
      </g>
    `;
  } else if (type === 'sport-set') {
    garmentPaths = `
      ${hanger}
      <path d="M68 62 L84 62 L84 95 L156 95 L156 62 L172 62 L178 148 L62 148 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <rect x="62" y="142" width="116" height="11" rx="4" fill="#fff" stroke="${c2}" stroke-width="1.5"/>
      <path d="M66 174 L174 174 L166 206 Q135 216 126 238 L114 238 Q105 216 74 206 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <rect x="66" y="170" width="108" height="9" rx="4" fill="#fff" stroke="${c2}" stroke-width="1.5"/>
    `;
  } else if (type === 'babydoll') {
    garmentPaths = `
      ${hanger}
      <path d="M78 58 L78 88 M162 58 L162 88" stroke="${c2}" stroke-width="3.5"/>
      <path d="M68 88 Q94 108 120 92 Q146 108 172 88 L198 228 Q120 244 42 228 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <path d="M44 224 Q120 240 196 224" fill="none" stroke="#fff" stroke-width="4" stroke-dasharray="6 4"/>
      <circle cx="120" cy="96" r="5" fill="#fff"/>
    `;
  } else {
    garmentPaths = `
      ${hanger}
      <path d="M68 60 L68 92 M172 60 L172 92" stroke="${c2}" stroke-width="3.5"/>
      <path d="M58 92 Q90 76 120 98 Q150 76 182 92 L172 162 L68 162 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
      <line x1="95" y1="98" x2="95" y2="160" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
      <line x1="120" y1="98" x2="120" y2="160" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
      <line x1="145" y1="98" x2="145" y2="160" stroke="rgba(255,255,255,0.7)" stroke-width="2"/>
      <path d="M68 180 Q120 188 172 180 L164 206 Q135 218 126 238 L114 238 Q105 218 76 206 Z" fill="url(#${gradId})" stroke="#fff" stroke-width="2"/>
    `;
  }

  return `
    <svg viewBox="0 0 240 255" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${c1}" />
          <stop offset="100%" stop-color="${c2}" />
        </linearGradient>
      </defs>
      ${garmentPaths}
    </svg>
  `;
}

/* ۲. موتور گرافیکی CGI با HTML5 Canvas */
function initCGICanvas() {
  const canvas = document.getElementById('cgi-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  class PetalParticle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.r = Math.random() * 6 + 3;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = Math.random() * 0.55 + 0.25;
      this.angle = Math.random() * Math.PI * 2;
      this.spin = (Math.random() - 0.5) * 0.02;
      this.alpha = Math.random() * 0.45 + 0.2;
      this.color = Math.random() > 0.4 ? '#f9a8d4' : '#ffffff';
    }
    update() {
      const dx = this.x - mouse.x;
      const dy = this.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120 && dist > 0) {
        this.x += (dx / dist) * 1.3;
        this.y += (dy / dist) * 1.3;
      }
      this.x += this.vx + Math.sin(this.angle) * 0.3;
      this.y += this.vy;
      this.angle += this.spin;
      if (this.y > canvas.height + 20 || this.x < -20 || this.x > canvas.width + 20) {
        this.reset();
        this.y = -15;
      }
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = this.alpha;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.ellipse(0, 0, this.r, this.r * 0.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 40; i++) particles.push(new PetalParticle());

  let waveTick = 0;
  function animateCGI() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    waveTick += 0.012;
    ctx.save();
    ctx.beginPath();
    for (let x = 0; x <= canvas.width; x += 25) {
      const y = canvas.height * 0.35 + Math.sin(x * 0.003 + waveTick) * 50 + Math.cos(x * 0.007 - waveTick) * 22;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = 'rgba(244, 114, 182, 0.13)';
    ctx.lineWidth = 42;
    ctx.stroke();
    ctx.restore();

    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animateCGI);
  }
  animateCGI();
}

/* ۳. موتور چرخش سه‌بعدی کارت‌ها (3D Tilt Engine) */
function bindTiltCards() {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    if (card.dataset.tiltBound) return;
    card.dataset.tiltBound = 'true';
    const glare = card.querySelector('.tilt-glare');

    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -7;
      const rotY = ((x - cx) / cx) * 7;
      card.style.transform = `perspective(900px) rotateX(${rotX.toFixed(2)}deg) rotateY(${rotY.toFixed(2)}deg) translateY(-4px)`;
      if (glare) {
        const gx = (x / rect.width) * 100;
        const gy = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.7), transparent 60%)`;
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ۴. داده‌های محصولات لباس زیر گل‌برگ */
const PRODUCTS = [
  { id: 1, title: "ست سوتین و شورت دانتل گل‌برگ", cat: "set", catName: "ست سوتین و شورت", price: 690000, old: 840000, tag: "پرفروش‌ترین", sizes: ["70B","75B","80B","85C"], colors: ["#f472b6","#ffffff"], svgType: "lace-set", c1: "#ffd1e8", c2: "#ec4899", desc: "ست دانتل فرانسوی ضدحساسیت با آستر نخ‌پنبه و فنر طبی بسیار نرم." },
  { id: 2, title: "برالت حریر و دانتل سفید عروس", cat: "bralette", catName: "برالت و نیم‌تنه", price: 540000, old: 650000, tag: "کالکشن عروس", sizes: ["S","M","L"], colors: ["#ffffff","#fce7f3"], svgType: "bralette", c1: "#ffffff", c2: "#f9a8d4", desc: "برالت بدون فنر بسیار راحت با حاشیه گیپور ظریف و شورت ست." },
  { id: 3, title: "رب‌دوشامبر ساتن ابریشم صورتی", cat: "sleep", catName: "لباس خواب و ساتن", price: 980000, old: 1180000, tag: "ساتن ابریشم", sizes: ["Free","L","XL"], colors: ["#f9a8d4","#db2777"], svgType: "sleep-robe", c1: "#fce7f3", c2: "#f472b6", desc: "لباس خواب و روبدوشامبر ساتن ابریشم سبک با کمربند پاپیونی." },
  { id: 4, title: "بادی یک‌سره گیپور رزگلد", cat: "brief", catName: "پک شورت و بادی", price: 780000, old: 920000, tag: "فانتزی لوکس", sizes: ["S","M","L"], colors: ["#fb7185","#ffffff"], svgType: "bodysuit", c1: "#ffe4e6", c2: "#e11d48", desc: "بادی توری و دانتل کشسان با تن‌خور استاندارد و قزن تنظیم‌شونده." },
  { id: 5, title: "پک ۳ عددی شورت نخ‌پنبه ارگانیک", cat: "brief", catName: "پک شورت و بادی", price: 390000, old: 480000, tag: "آنتی باکتریال", sizes: ["M","L","XL","2XL"], colors: ["#ffffff","#fce7f3","#f472b6"], svgType: "cotton-pack", c1: "#fbcfe8", c2: "#ec4899", desc: "پک سه عددی شورت ۱۰۰٪ نخ‌پنبه تنفس‌پذیر در رنگ‌های سفید و صورتی پاستلی." },
  { id: 6, title: "ست نیم‌تنه و شورت اسپرت کبریتی", cat: "bralette", catName: "برالت و نیم‌تنه", price: 590000, old: 710000, tag: "راحتی روزانه", sizes: ["S","M","L","XL"], colors: ["#f472b6","#ffffff"], svgType: "sport-set", c1: "#fbcfe8", c2: "#db2777", desc: "ست بدون درز (Seamless) با پد متحرک، مناسب استفاده روزمره و ورزشی." },
  { id: 7, title: "لباس خواب حریر ارگانزا شکوفه", cat: "sleep", catName: "لباس خواب و ساتن", price: 860000, old: 1020000, tag: "ویژه", sizes: ["S","M","L"], colors: ["#fce7f3","#f472b6"], svgType: "babydoll", c1: "#fff0f6", c2: "#f472b6", desc: "پیراهن خواب حریر کلوش همراه با شورت ست در بسته‌بندی کادویی." },
  { id: 8, title: "ست نیم‌تنه کاپ‌دار و شورت مروارید", cat: "set", catName: "ست سوتین و شورت", price: 890000, old: 1080000, tag: "مزونی VIP", sizes: ["75B","80B","85B"], colors: ["#ffffff","#f9a8d4"], svgType: "corset-set", c1: "#fdf2f8", c2: "#ec4899", desc: "ست کاپ‌دار جک‌دار ملایم با دوخت ظریف و بندهای قابل تنظیم." }
];

/* ۵. مدیریت پایدار سبد خرید و علاقه‌مندی با LocalStorage */
let cart = JSON.parse(localStorage.getItem('golbarg_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('golbarg_wish') || '[]');
let discountPercent = 0;
let activeCat = 'all';

function saveState() {
  localStorage.setItem('golbarg_cart', JSON.stringify(cart));
  localStorage.setItem('golbarg_wish', JSON.stringify(wishlist));
}

function formatPrice(n) {
  return n.toLocaleString('fa-IR') + ' تومان';
}

function showToast(msg) {
  const stack = document.getElementById('toast-stack');
  if (!stack) return;
  const el = document.createElement('div');
  el.className = 'toast-item';
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

/* ۶. استودیو شخصی‌سازی ست لباس زیر (CGI Set Customizer) */
let customSetState = {
  colorName: 'صورتی گل‌برگ',
  fabricName: 'ساتن ابریشم',
  price: 680000,
  c1: '#ffd1e8',
  c2: '#f472b6'
};

function updateCGISet(c1, c2, c3, colorLabel, btn) {
  document.getElementById('bra-stop-1')?.setAttribute('stop-color', c1);
  document.getElementById('bra-stop-2')?.setAttribute('stop-color', c2);
  document.getElementById('bra-stop-3')?.setAttribute('stop-color', c3);
  customSetState.colorName = colorLabel;
  customSetState.c1 = c1;
  customSetState.c2 = c2;
  document.querySelectorAll('#cgi-swatches .color-swatch').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateCGILabel();
}

function updateCGIFabric(fabricLabel, sheenOpacity, basePrice, btn) {
  document.getElementById('cgi-sheen-stop')?.setAttribute('stop-color', `rgba(255,255,255,${sheenOpacity})`);
  customSetState.fabricName = fabricLabel;
  customSetState.price = basePrice;
  document.querySelectorAll('#cgi-fabrics .fabric-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  updateCGILabel();
}

function updateCGILabel() {
  const badge = document.getElementById('cgi-preview-badge');
  const priceEl = document.getElementById('cgi-live-price');
  if (badge) badge.textContent = `طیف: ${customSetState.colorName} | بافت: ${customSetState.fabricName}`;
  if (priceEl) priceEl.textContent = `قیمت ست سفارشی: ${formatPrice(customSetState.price)}`;
}

function addCustomSetToCart() {
  cart.push({
    id: 900 + Math.floor(Math.random() * 99),
    title: `ست سفارشی (${customSetState.colorName} - ${customSetState.fabricName})`,
    price: customSetState.price,
    size: '75B',
    svgType: 'lace-set',
    c1: customSetState.c1,
    c2: customSetState.c2,
    qty: 1
  });
  saveState();
  renderCart();
  toggleCart(true);
  showToast('ست سفارشی شما به سبد خرید اضافه شد 🌸');
}

/* ۷. الگوریتم تخصصی محاسبه سایز سوتین و کاپ */
let bandOffset = 0;

function setBraBandOffset(val, btn) {
  bandOffset = val;
  document.querySelectorAll('#bra-fit-group .filter-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  runBraSizeAlgorithm();
}

function runBraSizeAlgorithm() {
  const underEl = document.getElementById('inp-underbust');
  const overEl = document.getElementById('inp-overbust');
  const hipEl = document.getElementById('inp-hip');
  if (!underEl || !overEl || !hipEl) return;

  const under = parseInt(underEl.value, 10);
  const over = parseInt(overEl.value, 10);
  const hip = parseInt(hipEl.value, 10);

  document.getElementById('val-underbust').textContent = `${under.toLocaleString('fa-IR')} سانتی‌متر`;
  document.getElementById('val-overbust').textContent = `${over.toLocaleString('fa-IR')} سانتی‌متر`;
  document.getElementById('val-hip').textContent = `${hip.toLocaleString('fa-IR')} سانتی‌متر`;

  let band = Math.round((under + bandOffset) / 5) * 5;
  band = Math.max(65, Math.min(95, band));

  const diff = Math.max(8, over - under);
  let cup = 'B';
  if (diff < 12) cup = 'A';
  else if (diff < 15) cup = 'B';
  else if (diff < 18) cup = 'C';
  else if (diff < 21) cup = 'D';
  else cup = 'DD';

  let panty = 'M (مدیوم)';
  if (hip < 90) panty = 'S (اسمال)';
  else if (hip <= 98) panty = 'M (مدیوم)';
  else if (hip <= 106) panty = 'L (لارج)';
  else if (hip <= 114) panty = 'XL (ایکس‌لارج)';
  else panty = '2XL (دو ایکس‌لارج)';

  const fullBraSize = `${band}${cup}`;
  document.getElementById('ai-bra-output').textContent = fullBraSize;
  document.getElementById('ai-panty-output').textContent = `سایز شورت و لباس خواب: ${panty}`;
  document.getElementById('ai-bra-confidence').textContent =
    `اختلاف کاپ: ${diff.toLocaleString('fa-IR')} سانتی‌متر | دقت محاسبه: ۹۹٪`;
  document.getElementById('ai-bra-advice').textContent =
    `بر اساس دور زیر سینه ${under.toLocaleString('fa-IR')} و دور سینه ${over.toLocaleString('fa-IR')}، سایز ${fullBraSize} ایستایی ایده‌آل و بدون فشار را برای شما فراهم می‌کند.`;
}

/* ۸. ساخت کارت محصول، فیلتر کاتالوگ و سبد خرید */
function buildCardHTML(p) {
  const wished = wishlist.includes(p.id) ? 'active' : '';
  const dots = p.colors.map(c => `<span class="dot-color" style="background:${c}"></span>`).join('');
  const svgArt = generateGarmentOnlySVG(p.svgType, p.c1, p.c2, p.id);

  return `
    <article class="product-card tilt-card" data-tilt>
      <div class="tilt-glare"></div>
      <div class="product-media">
        ${svgArt}
        <span class="badge-top">${p.tag}</span>
        <div class="card-quick-tools">
          <button class="circle-action ${wished}" onclick="toggleWish(${p.id}, this)">♥</button>
          <button class="circle-action" onclick="openQuickModal(${p.id})">👁</button>
        </div>
      </div>
      <div class="product-info">
        <span class="product-cat">${p.catName}</span>
        <h3 class="product-name">${p.title}</h3>
        <div class="product-sub">
          <span>سایز: ${p.sizes.join('، ')}</span>
          <div class="dot-group">${dots}</div>
        </div>
        <div class="product-bottom">
          <div>
            <span class="price-old">${formatPrice(p.old)}</span>
            <span class="price-now">${formatPrice(p.price)}</span>
          </div>
          <button class="btn-add-sm" onclick="addProductToCart(${p.id}, '${p.sizes[0]}')">+ افزودن</button>
        </div>
      </div>
    </article>
  `;
}

function filterCatalog() {
  const grid = document.getElementById('catalog-grid');
  if (!grid) return;

  const q = (document.getElementById('search-input')?.value || '').trim();
  const sort = document.getElementById('sort-select')?.value || 'popular';
  const maxP = parseInt(document.getElementById('price-slider')?.value || '1500000', 10);
  const priceLabel = document.getElementById('price-slider-val');
  if (priceLabel) priceLabel.textContent = maxP.toLocaleString('fa-IR');

  let list = PRODUCTS.filter(p => {
    const cMatch = activeCat === 'all' || p.cat === activeCat;
    const qMatch = p.title.includes(q) || p.catName.includes(q);
    const pMatch = p.price <= maxP;
    return cMatch && qMatch && pMatch;
  });

  if (sort === 'asc') list.sort((a, b) => a.price - b.price);
  if (sort === 'desc') list.sort((a, b) => b.price - a.price);

  grid.innerHTML = list.length
    ? list.map(buildCardHTML).join('')
    : `<div class="glass" style="grid-column:1/-1; padding:45px; text-align:center; border-radius:24px;">محصولی در این بازه قیمتی یافت نشد 🌸</div>`;
  bindTiltCards();
}

function toggleWish(id, btn) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    if (btn) btn.classList.remove('active');
  } else {
    wishlist.push(id);
    if (btn) btn.classList.add('active');
    showToast('به لیست علاقه‌مندی‌های شما اضافه شد 💖');
  }
  saveState();
  const wishBadge = document.getElementById('wish-badge');
  if (wishBadge) wishBadge.textContent = wishlist.length.toLocaleString('fa-IR');
}

function addProductToCart(id, size) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const found = cart.find(i => i.id === id && i.size === size);
  if (found) found.qty += 1;
  else cart.push({ id: p.id, title: p.title, price: p.price, size, svgType: p.svgType, c1: p.c1, c2: p.c2, qty: 1 });
  saveState();
  renderCart();
  showToast(`«${p.title}» به سبد خرید اضافه شد 🛍️`);
}

function changeQty(idx, delta) {
  if (!cart[idx]) return;
  cart[idx].qty += delta;
  if (cart[idx].qty <= 0) cart.splice(idx, 1);
  saveState();
  renderCart();
}

function applyCoupon() {
  const code = (document.getElementById('coupon-inp')?.value || '').trim().toUpperCase();
  if (code === 'GOLBARG20') {
    discountPercent = 20;
    renderCart();
    showToast('کد تخفیف ۲۰٪ (GOLBARG20) با موفقیت اعمال شد 🎉');
  } else {
    showToast('کد تخفیف معتبر: GOLBARG20');
  }
}

function renderCart() {
  const totalCount = cart.reduce((s, i) => s + i.qty, 0);
  const cartBadge = document.getElementById('cart-badge');
  if (cartBadge) cartBadge.textContent = totalCount.toLocaleString('fa-IR');
  const wishBadge = document.getElementById('wish-badge');
  if (wishBadge) wishBadge.textContent = wishlist.length.toLocaleString('fa-IR');

  const rawTotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const freeThreshold = 1200000;
  const pct = Math.min(100, Math.round((rawTotal / freeThreshold) * 100));
  const bar = document.getElementById('shipping-bar');
  const msg = document.getElementById('shipping-msg');
  if (bar) bar.style.width = pct + '%';
  if (msg) {
    msg.textContent = rawTotal >= freeThreshold
      ? '🎉 سفارش شما شامل ارسال رایگان و محرمانه شد!'
      : `تا ارسال رایگان: ${formatPrice(freeThreshold - rawTotal)} دیگر باقی مانده`;
  }

  const listEl = document.getElementById('cart-list');
  if (!listEl) return;

  if (!cart.length) {
    listEl.innerHTML = `<div style="text-align:center; padding:45px 10px; color:var(--ink-soft);">🛍️ سبد خرید شما خالی است</div>`;
  } else {
    listEl.innerHTML = cart.map((item, idx) => `
      <div class="cart-row">
        <div class="cart-thumb-svg">
          ${generateGarmentOnlySVG(item.svgType || 'lace-set', item.c1 || '#ffd1e8', item.c2 || '#ec4899', 'cart_' + idx)}
        </div>
        <div style="flex:1;">
          <div style="font-weight:800; font-size:0.88rem;">${item.title}</div>
          <div style="font-size:0.76rem; color:var(--ink-soft);">سایز: ${item.size}</div>
          <div style="color:var(--pink-600); font-weight:800; font-size:0.85rem;">${formatPrice(item.price)}</div>
        </div>
        <div style="display:flex; align-items:center; gap:8px; background:var(--pink-50); padding:4px 10px; border-radius:99px;">
          <button onclick="changeQty(${idx}, 1)" style="font-weight:900; color:var(--pink-600);">+</button>
          <span style="font-weight:800; font-size:0.85rem;">${item.qty.toLocaleString('fa-IR')}</span>
          <button onclick="changeQty(${idx}, -1)" style="font-weight:900; color:var(--pink-600);">−</button>
        </div>
      </div>
    `).join('');
  }

  const discAmount = Math.round((rawTotal * discountPercent) / 100);
  const finalAmount = rawTotal - discAmount;
  const discEl = document.getElementById('cart-discount-val');
  const finalEl = document.getElementById('cart-final-val');
  if (discEl) discEl.textContent = formatPrice(discAmount);
  if (finalEl) finalEl.textContent = formatPrice(finalAmount);
}

function toggleCart(open) {
  document.getElementById('cart-panel')?.classList.toggle('open', open);
  document.getElementById('cart-backdrop')?.classList.toggle('open', open);
}

function checkoutCart() {
  if (!cart.length) return showToast('سبد خرید شما خالی است!');
  cart = [];
  discountPercent = 0;
  saveState();
  renderCart();
  toggleCart(false);
  showToast('سفارش محرمانه ثبت شد! کد رهگیری: GOLBARG-1405 ✨');
}

function openQuickModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const body = document.getElementById('quick-modal-body');
  if (!body) return;
  body.innerHTML = `
    <div style="background:radial-gradient(circle, #fff, #fce7f3); display:flex; align-items:center; justify-content:center; padding:24px;">
      <div style="width:220px; height:240px;">
        ${generateGarmentOnlySVG(p.svgType, p.c1, p.c2, 'modal_' + p.id)}
      </div>
    </div>
    <div style="padding:28px; position:relative;">
      <button onclick="closeModal()" style="position:absolute; top:16px; left:16px; width:34px; height:34px; border-radius:50%; background:var(--pink-50);">✕</button>
      <span class="pill-tag">${p.catName}</span>
      <h2 style="font-size:1.4rem; margin-bottom:10px;">${p.title}</h2>
      <p style="color:var(--ink-soft); font-size:0.9rem; margin-bottom:14px;">${p.desc}</p>
      <div style="font-size:0.84rem; color:var(--ink-soft); margin-bottom:12px;">سایزهای موجود: <strong>${p.sizes.join(' - ')}</strong></div>
      <div style="font-size:1.3rem; font-weight:900; color:var(--pink-600); margin-bottom:18px;">${formatPrice(p.price)}</div>
      <button class="btn btn-pink full-width" onclick="addProductToCart(${p.id}, '${p.sizes[0]}'); closeModal();">
        افزودن به سبد خرید محرمانه
      </button>
    </div>
  `;
  document.getElementById('quick-modal')?.classList.add('open');
}

function closeModal() {
  document.getElementById('quick-modal')?.classList.remove('open');
}

function trackOrderAlgorithm() {
  const code = (document.getElementById('track-code-inp')?.value || '').trim().toUpperCase();
  const box = document.getElementById('track-result-box');
  if (!box) return;
  box.style.display = 'block';
  if (code.startsWith('GOLBARG')) {
    box.innerHTML = `
      <div style="font-weight:800; color:#10b981; margin-bottom:8px;">✅ مرسوله ${code} در «بسته‌بندی سفید بدون نام (کاملاً محرمانه)» پلمپ شده و تحویل پست پیشتاز گردید.</div>
      <div style="font-size:0.86rem; color:var(--ink-soft);">زمان تحویل تخمینی: فردا بین ساعت ۱۰:۰۰ تا ۱۴:۰۰</div>
    `;
  } else {
    box.innerHTML = `<div style="color:var(--pink-600); font-weight:700;">کد رهگیری یافت نشد. لطفاً کد آزمایشی GOLBARG-1405 را امتحان کنید.</div>`;
  }
}

/* ۹. راه‌اندازی خودکار در تمامی ۴ صفحه */
document.addEventListener('DOMContentLoaded', () => {
  initCGICanvas();
  renderCart();

  // منوی موبایل
  const mobileBtn = document.getElementById('mobile-menu-btn');
  if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
      document.getElementById('nav-menu')?.classList.toggle('show');
    });
  }

  // صفحه اول (index.html)
  const heroHolder = document.getElementById('hero-svg-holder');
  if (heroHolder) {
    heroHolder.innerHTML = generateGarmentOnlySVG('lace-set', '#ffd1e8', '#ec4899', 'hero_main');
  }

  const featuredGrid = document.getElementById('home-featured-grid');
  if (featuredGrid) {
    featuredGrid.innerHTML = PRODUCTS.slice(0, 4).map(buildCardHTML).join('');
  }

  // صفحه فروشگاه (products.html) + خواندن پارامتر ?cat= از آدرس
  const catalogGrid = document.getElementById('catalog-grid');
  if (catalogGrid) {
    const urlCat = new URLSearchParams(window.location.search).get('cat');
    if (urlCat) activeCat = urlCat;

    document.querySelectorAll('#cat-chips .filter-chip').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.cat === activeCat);
      btn.addEventListener('click', () => {
        document.querySelectorAll('#cat-chips .filter-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCat = btn.dataset.cat;
        filterCatalog();
      });
    });

    document.getElementById('search-input')?.addEventListener('input', filterCatalog);
    document.getElementById('sort-select')?.addEventListener('change', filterCatalog);
    document.getElementById('price-slider')?.addEventListener('input', filterCatalog);
    filterCatalog();
  }

  // صفحه سایزیاب (about.html)
  if (document.getElementById('inp-underbust')) {
    runBraSizeAlgorithm();
  }

  bindTiltCards();
});