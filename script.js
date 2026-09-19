const modal=document.querySelector('.modal');
const trailerBtn=document.querySelector('.trailer');
const modalClose=document.querySelector('.modal-close');

trailerBtn.onclick=()=>modal.classList.add('open');
modalClose.onclick=()=>modal.classList.remove('open');
modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};

document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{
  document.querySelectorAll('nav a').forEach(x=>x.classList.remove('active'));
  a.classList.add('active');
}));

// Hero slider: keep the existing UI, only enable the left/right controls.
const heroSlide=document.querySelector('.hero-slide');
const heroNumber=document.querySelector('.hero-index b');
const heroProgress=document.querySelector('.hero-index i');
const heroPrev=document.querySelector('.hero-arrow.left');
const heroNext=document.querySelector('.hero-arrow.right');
const heroImages=[
  'assets/images/hero/hero-1.webp',
  'assets/images/hero/hero-2.webp',
  'assets/images/hero/hero-3.webp'
];
let heroCurrent=0;

// Preload so switching feels immediate.
heroImages.forEach(src=>{const img=new Image();img.src=src});

function renderHero(index){
  heroCurrent=(index+heroImages.length)%heroImages.length;
  heroSlide.style.setProperty('--hero',`url('${heroImages[heroCurrent]}')`);
  heroNumber.textContent=String(heroCurrent+1).padStart(2,'0');
  heroProgress.style.background=`linear-gradient(90deg,#fff ${(heroCurrent+1)*33.333}%,#ffffff55 ${(heroCurrent+1)*33.333}%)`;
}

heroPrev.addEventListener('click',()=>renderHero(heroCurrent-1));
heroNext.addEventListener('click',()=>renderHero(heroCurrent+1));
