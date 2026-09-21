/* ========================================================================== 
   TU TIÊN VỰC - DOWNLOAD PAGE
   File này đã chia khu vực để dễ sửa.
   Phần bạn sẽ sửa nhiều nhất nằm ngay bên dưới: DỮ LIỆU 4 GAME.
   ========================================================================== */


/* ========================================================================== 
   1. DỮ LIỆU 4 GAME
   --------------------------------------------------------------------------
   CÁC CHỖ THƯỜNG SỬA:

   downloadUrl : link của nút "TẢI GAME"
   hero        : ảnh Hero chính
   shots       : ảnh Hero Scene + Gallery

   Chưa có link thì cứ để "#".
   ========================================================================== */

const games = [
  // -------------------------------------------------------------------------
  // GAME 01 - THIÊN CƠ QUYỀN
  // -------------------------------------------------------------------------
  {
    name: 'Thiên Cơ Quyền',
    title: 'Thiên Cơ Quyền',
    mini: 'Tu tiên chân thực',
    slogan: 'MỞ RA THẾ GIỚI TU TIÊN ĐÍCH THỰC',
    desc: 'Hành trình tu tiên, kết duyên đồng hành, khám phá vạn giới. Tải game ngay để bắt đầu!',

    version: '1.0.2',
    size: '2.8 GB',
    date: '15/09/2026',

    // ===== LINK TẢI GAME 01 - DÁN LINK VÀO ĐÂY =====
    downloadUrl: 'https://t.skeideng.com/WZin83.html',
    windowsUrl: 'https://t.skeideng.com/WZin83.html',
    androidUrl: 'https://t.skeideng.com/WZin83.html',
    iosUrl: 'https://t.skeideng.com/WZin83.html',
    // ===== ẢNH GAME 01 =====
    hero: 'assets/showcase/g1-hero.jpg',
    shots: [
      'assets/showcase/g1-shot-1.jpg',
      'assets/showcase/g1-shot-2.jpg',
      'assets/showcase/g1-shot-3.jpg',
      'assets/showcase/g1-shot-4.jpg',
      'assets/showcase/g1-shot-5.jpg',
      'assets/showcase/g1-shot-6.jpg',
      'assets/showcase/g1-shot-7.jpg',
      'assets/showcase/g1-shot-8.jpg',
      'assets/showcase/g1-shot-9.jpg',
      'assets/showcase/g1-shot-10.jpg',
      'assets/showcase/g1-shot-11.jpg',
      'assets/showcase/g1-shot-12.jpg',
      'assets/showcase/g1-shot-13.jpg'
    ],

    labels: [
      'Trailer game',
      'Cảnh sắc thế giới',
      'Chiến đấu mãn nhãn',
      'Hệ thống nhân vật',
      'Bối cảnh tu tiên'
    ]
  },

  // -------------------------------------------------------------------------
  // GAME 02 - THẦN MA GIÁNG THẾ
  // -------------------------------------------------------------------------
  {
    name: 'Thần Ma Giáng Thế',
    title: 'Thần Ma Giáng Thế',
    mini: 'Hắc ám thức tỉnh',
    slogan: 'THẦN MA GIAO TRANH · NHẤT NIỆM ĐỊNH CÀN KHÔN',
    desc: 'Bước vào chiến trường thần ma, thức tỉnh sức mạnh và viết lại trật tự tam giới.',

    version: '0.9.8',
    size: '3.1 GB',
    date: '12/09/2026',

    // ===== LINK TẢI GAME 02 - DÁN LINK VÀO ĐÂY =====
    downloadUrl: 'https://p.googlelik.com/?p=ii2mue ',
    windowsUrl: 'https://p.googlelik.com/?p=ii2mue',
    androidUrl: 'https://p.googlelik.com/?p=ii2mue',
    iosUrl: 'https://p.googlelik.com/?p=ii2mue',


    // ===== ẢNH GAME 02 =====
    hero: 'assets/showcase/g2-hero.jpg',
    shots: [
      'assets/showcase/g2-shot-1.jpg',
      'assets/showcase/g2-shot-2.jpg',
      'assets/showcase/g2-shot-3.jpg',
      'assets/showcase/g2-shot-4.jpg',
      'assets/showcase/g2-shot-5.jpg',
      'assets/showcase/g2-shot-6.jpg',
      'assets/showcase/g2-shot-7.jpg',
      'assets/showcase/g2-shot-8.jpg',
      'assets/showcase/g2-shot-9.jpg',
      'assets/showcase/g2-shot-10.jpg',
      'assets/showcase/g2-shot-11.jpg',
      'assets/showcase/g2-shot-12.jpg',
      'assets/showcase/g2-shot-13.jpg'
    ],

    labels: [
      'Thần Ma giáng thế',
      'Đại chiến tam giới',
      'Sự kiện chiến trường',
      'BOSS thế giới',
      'Trang bị thần binh'
    ]
  },

  // -------------------------------------------------------------------------
  // GAME 03 - TÂN BINH THỨC TỈNH
  // -------------------------------------------------------------------------
  {
    name: 'Tân Binh Thức Tỉnh',
    title: 'Tân Binh Thức Tỉnh',
    mini: 'Hành trình mới',
    slogan: 'THẾ GIỚI DIỆU KỲ · PHIÊU LƯU NGAY',
    desc: 'Một chuyến phiêu lưu chibi nhẹ nhàng, vui nhộn với đồng đội, pet và những vùng đất đầy màu sắc.',

    version: '1.0.0',
    size: '1.6 GB',
    date: '10/09/2026',

    // ===== LINK TẢI GAME 03 - DÁN LINK VÀO ĐÂY =====
    downloadUrl: 'https://t.skeideng.com/IHXVo2.html ',
    windowsUrl: 'https://t.skeideng.com/IHXVo2.html ',
    androidUrl: 'https://t.skeideng.com/IHXVo2.html ',
    iosUrl: 'hhttps://t.skeideng.com/IHXVo2.html ',

    // ===== ẢNH GAME 03 =====
    hero: 'assets/showcase/g3-hero.jpg',
    shots: [
      'assets/showcase/g3-shot-1.jpg',
      'assets/showcase/g3-shot-2.webp',
      'assets/showcase/g3-shot-3.webp',
      'assets/showcase/g3-shot-4.webp',
      'assets/showcase/g3-shot-5.webp',
      'assets/showcase/g3-shot-6.webp',
      'assets/showcase/g3-shot-7.png',
      'assets/showcase/g3-shot-8.jpg',
      'assets/showcase/g3-shot-9.jpg',
      'assets/showcase/g3-shot-10.jpg',
      'assets/showcase/g3-shot-11.jpg',
      'assets/showcase/g3-shot-12.jpg',
      'assets/showcase/g3-shot-13.jpg'
    ],

    labels: [
      'Thế giới chibi',
      'Đồng đội đáng yêu',
      'Sự kiện vui nhộn',
      'Vùng đất mới',
      'Tân binh xuất chiến'
    ]
  },

  
];


/* ========================================================================== 
   2. BIẾN / ELEMENT
   ========================================================================== */

const $ = (selector) => document.querySelector(selector);

const pager = $('#pager');
const grid = $('#galleryGrid');
const bg = $('#heroBg');
const heroScenes = $('#heroScenes');
const windowsBtn = $('#windowsBtn');
const downloadLink = $('#downloadLink');
const androidBtn = $('#androidBtn');
const iosBtn = $('#iosBtn');
const hero = $('#hero');
const downloadModal = $('#downloadModal');
const downloadModalClose = $('#downloadModalClose');
let current = 0;
let currentHeroScene = 0;


/* ========================================================================== 
   3. HERO SCENE SELECTOR
   ========================================================================== */

function setHeroScene(src, index) {
  currentHeroScene = index;

  bg.style.opacity = '.18';
  bg.style.transform = 'scale(1.025)';

  setTimeout(() => {
    bg.style.backgroundImage = `url('${src}')`;
    bg.style.opacity = '1';
    bg.style.transform = 'scale(1.01)';
  }, 120);

  heroScenes.querySelectorAll('.hero-scene').forEach((element, sceneIndex) => {
    element.classList.toggle('on', sceneIndex === index);
  });
}

function renderHeroScenes(game) {
  // Hero chính + 3 ảnh đầu trong shots = 4 ô Scene Selector.
  const scenes = [game.hero, ...game.shots.slice(0, 3)];
  const labels = ['Ảnh đại diện', ...game.labels.slice(0, 3)];

  heroScenes.innerHTML = scenes.map((img, index) => `
    <button class="hero-scene ${index === 0 ? 'on' : ''}" data-scene="${index}">
      <img src="${img}" alt="${labels[index]}">
      <b>${labels[index]}</b>
      ${index === 0 ? '<span class="play">▶</span>' : ''}
    </button>
  `).join('');

  heroScenes.querySelectorAll('.hero-scene').forEach((element, index) => {
    element.onclick = () => setHeroScene(scenes[index], index);
  });

  currentHeroScene = 0;
}


/* ========================================================================== 
   4. RENDER GAME
   Khi bấm game 01 / 02 / 03 / 04, toàn bộ Hero + link tải đổi theo game.
   ========================================================================== */

function animateHeroContent() {
  const copy = document.querySelector('.copy');
  if (!copy) return;
  copy.classList.remove('is-switching');
  void copy.offsetWidth;
  copy.classList.add('is-switching');
}

function renderGame(index) {
  if (hero) {
    hero.classList.add('game-changing');
    clearTimeout(renderGame._transitionTimer);
    renderGame._transitionTimer = setTimeout(() => hero.classList.remove('game-changing'), 620);
  }
  current = index;
  const game = games[index];

  document.body.dataset.game = index;
  animateHeroContent();

  // Nội dung Hero
  setHeroScene(game.hero, 0);
  $('#gameTag').textContent = game.name.toUpperCase();
  $('#gameTitle').textContent = game.title;
  $('#gameSlogan').textContent = game.slogan;
  $('#gameDesc').textContent = game.desc;
  $('#gameMeta').textContent = `◉ Phiên bản ${game.version}　 ◉ Dung lượng ${game.size}　 ◉ Cập nhật ${game.date}`;
  $('#galleryDesc').textContent = `Khám phá thế giới ${game.name} qua những khung hình chân thực`;


  // ===== NÚT TẢI GAME MỞ POPUP CHỌN NỀN TẢNG =====
  downloadLink.href = '#';
  downloadLink.onclick = (event) => {
    event.preventDefault();
    openDownloadModal(game);
  };

// ===== GÁN LINK PLATFORM =====
if (windowsBtn) {
    windowsBtn.onclick = () => {
        window.open(game.windowsUrl, '_blank', 'noopener,noreferrer');
    };
}

if (androidBtn) {
    androidBtn.onclick = () => {
        window.open(game.androidUrl, '_blank', 'noopener,noreferrer');
    };
}

if (iosBtn) {
    iosBtn.onclick = () => {
        window.open(game.iosUrl, '_blank', 'noopener,noreferrer');
    };
}

// ===== HERO SCENES =====
// code cũ của m tiếp tục ở dưới đây...
  
  // Menu 4 game bên Hero
  pager.innerHTML = games.map((item, gameIndex) => `
    <button class="${gameIndex === index ? 'on' : ''}" data-game="${gameIndex}">
      <img src="${item.hero}" alt="">
      <span class="ptext">
        <strong>${String(gameIndex + 1).padStart(2, '0')}</strong>
        <b>${item.name}</b>
        <small>${item.mini}</small>
      </span>
    </button>
  `).join('');

  pager.querySelectorAll('button').forEach((button) => {
    button.onclick = () => renderGame(Number(button.dataset.game));
  });

  // Hero Scene Selector
  renderHeroScenes(game);

  // Gallery
  const galleryImages = [game.hero, ...game.shots];
  const galleryLabels = ['Ảnh tổng quan', ...game.labels];

  grid.innerHTML = galleryImages.map((img, imageIndex) => `
    <button class="shot">
      <img src="${img}" alt="${galleryLabels[imageIndex]}">
      <b>${galleryLabels[imageIndex]}</b>
      <span>↗</span>
    </button>
  `).join('');

  grid.scrollLeft = 0;
  grid.classList.add('motion-ready');
  if (galleryObserver && grid.getBoundingClientRect().top < window.innerHeight) {
    requestAnimationFrame(() => grid.classList.add('is-visible'));
  }
  bindLightbox();
  requestAnimationFrame(updateGalleryArrows);
}


/* ========================================================================== 
   5. LIGHTBOX GALLERY
   ========================================================================== */

function bindLightbox() {
  const lightbox = $('#lightbox');
  const lightboxImage = lightbox.querySelector('img');

  grid.querySelectorAll('.shot').forEach((shot) => {
    shot.onclick = () => {
      lightboxImage.src = shot.querySelector('img').src;
      lightbox.classList.add('show');
    };
  });
}

const lightbox = $('#lightbox');

lightbox.onclick = (event) => {
  if (event.target === lightbox || event.target.tagName === 'BUTTON') {
    lightbox.classList.remove('show');
  }
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    lightbox.classList.remove('show');
  }
});


/* ========================================================================== 
   6. GALLERY CAROUSEL
   ========================================================================== */

const prevArrow = document.querySelector('.gallery-arrow.prev');
const nextArrow = document.querySelector('.gallery-arrow.next');

function galleryStep() {
  const card = grid.querySelector('.shot');
  return card ? card.getBoundingClientRect().width + 10 : 320;
}

function updateGalleryArrows() {
  const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth - 2);

  prevArrow.disabled = grid.scrollLeft <= 2;
  nextArrow.disabled = grid.scrollLeft >= maxScroll;
}

function moveGallery(direction) {
  grid.scrollBy({
    left: direction * galleryStep(),
    behavior: 'smooth'
  });

  setTimeout(updateGalleryArrows, 350);
}

prevArrow.onclick = () => moveGallery(-1);
nextArrow.onclick = () => moveGallery(1);

grid.addEventListener('scroll', updateGalleryArrows, { passive: true });
window.addEventListener('resize', updateGalleryArrows);

$('#viewAll').onclick = () => {
  grid.scrollTo({
    left: grid.scrollWidth,
    behavior: 'smooth'
  });

  setTimeout(updateGalleryArrows, 400);
};


// Gallery reveal khi cuon toi khu vuc hinh anh
const galleryObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.16 });

galleryObserver.observe(grid);


/* ========================================================================== 
   7. KHỞI ĐỘNG TRANG
   ========================================================================== */

renderGame(0);



/* ========================================================================== 
   8. CINEMATIC EXTRAS
   ========================================================================== */

// Ambient particles - nhe, khong chen vao thao tac nguoi dung.
const particleHost = $('#heroParticles');
if (particleHost) {
  for (let i = 0; i < 22; i++) {
    const particle = document.createElement('span');
    particle.style.left = `${(i * 37) % 101}%`;
    particle.style.setProperty('--dur', `${7 + (i % 6) * 1.15}s`);
    particle.style.setProperty('--delay', `${-(i % 9) * 1.05}s`);
    particle.style.setProperty('--drift', `${((i % 7) - 3) * 22}px`);
    particle.style.width = particle.style.height = `${2 + (i % 3)}px`;
    particleHost.appendChild(particle);
  }
}

// Custom cursor desktop.
const ttvCursor = $('#ttvCursor');
if (ttvCursor && window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', (event) => {
    ttvCursor.style.left = `${event.clientX}px`;
    ttvCursor.style.top = `${event.clientY}px`;
  }, { passive: true });
  document.addEventListener('mouseover', (event) => {
    ttvCursor.classList.toggle('is-hover', Boolean(event.target.closest('a,button,.shot,.hero-scene')));
  });
  document.addEventListener('mousedown', () => ttvCursor.classList.add('is-down'));
  document.addEventListener('mouseup', () => ttvCursor.classList.remove('is-down'));
}

// Popup tai game.
function openDownloadModal(game) {
  if (!downloadModal) return;
  $('#downloadModalGame').textContent = game.name;
  $('#downloadModalMeta').textContent = `Phiên bản ${game.version} · Dung lượng ${game.size} · Cập nhật ${game.date}`;
  downloadModal.querySelectorAll('.modal-size').forEach(el => el.textContent = game.size);
  downloadModal.querySelector('[data-platform="windows"]').onclick = () => openPlatform(game.windowsUrl);
  downloadModal.querySelector('[data-platform="android"]').onclick = () => openPlatform(game.androidUrl);
  downloadModal.querySelector('[data-platform="ios"]').onclick = () => openPlatform(game.iosUrl);
  downloadModal.classList.add('show');
  downloadModal.setAttribute('aria-hidden', 'false');
}

function openPlatform(url) {
  if (!url || url.trim() === '#') return;
  window.open(url.trim(), '_blank', 'noopener,noreferrer');
}

function closeDownloadModal() {
  if (!downloadModal) return;
  downloadModal.classList.remove('show');
  downloadModal.setAttribute('aria-hidden', 'true');
}

if (downloadModalClose) downloadModalClose.onclick = closeDownloadModal;
if (downloadModal) downloadModal.onclick = (event) => {
  if (event.target === downloadModal) closeDownloadModal();
};

// Easter egg: bam logo header 5 lan trong khoang ngan.
let logoClicks = 0;
let logoClickTimer;
const headerLogo = document.querySelector('header .brand');
if (headerLogo) {
  headerLogo.addEventListener('click', (event) => {
    logoClicks += 1;
    clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClicks = 0; }, 1600);
    if (logoClicks >= 5) {
      event.preventDefault();
      logoClicks = 0;
      const toast = $('#secretToast');
      document.body.classList.remove('secret-mode');
      void document.body.offsetWidth;
      document.body.classList.add('secret-mode');
      if (toast) toast.classList.add('show');
      setTimeout(() => {
        document.body.classList.remove('secret-mode');
        if (toast) toast.classList.remove('show');
      }, 2400);
    }
  });
}

// Escape dong ca lightbox va popup download.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeDownloadModal();
});


/* ==========================================================================
   9. LOADING SCREEN
   Giu loader toi thieu 1.5 giay, sau do fade-out khi trang da tai xong.
   ========================================================================== */
const loaderStartedAt = performance.now();
window.addEventListener('load', () => {
  const pageLoader = document.getElementById('pageLoader');
  if (!pageLoader) return;
  const elapsed = performance.now() - loaderStartedAt;
  const wait = Math.max(0, 1500 - elapsed);
  setTimeout(() => {
    pageLoader.classList.add('is-hidden');
    document.body.classList.remove('is-loading');
    setTimeout(() => pageLoader.remove(), 700);
  }, wait);
});
