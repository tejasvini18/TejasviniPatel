
const progress=document.querySelector('.progress');
function updateProgress(){const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(max>0?window.scrollY/max*100:0)+'%'}
window.addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const root=document.documentElement;window.addEventListener('pointermove',e=>{root.style.setProperty('--mx',e.clientX+'px');root.style.setProperty('--my',e.clientY+'px')},{passive:true});
const menu=document.querySelector('.menu'), mobile=document.querySelector('.mobile-menu');
if(menu&&mobile){menu.addEventListener('click',()=>mobile.classList.toggle('open'));mobile.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')))}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const year=document.querySelectorAll('[data-year]');year.forEach(el=>el.textContent=new Date().getFullYear());
// Counters
const counters=document.querySelectorAll('[data-counter]');const counterObs=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;const target=parseInt(el.dataset.counter,10);let n=0;const step=Math.max(1,Math.ceil(target/50));const timer=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(timer)}el.textContent=n+(el.dataset.suffix||'')},25);counterObs.unobserve(el)}),{threshold:.7});counters.forEach(x=>counterObs.observe(x));
// Project filters + modal
const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.project-card');filters.forEach(f=>f.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');const cat=f.dataset.filter;cards.forEach(c=>{c.style.display=cat==='all'||c.dataset.category===cat?'block':'none'})}));
const modal=document.querySelector('.project-modal');if(modal){const title=modal.querySelector('[data-modal-title]'),body=modal.querySelector('[data-modal-body]');cards.forEach(card=>card.addEventListener('click',()=>{title.textContent=card.dataset.title;body.innerHTML=card.dataset.details;modal.classList.add('open');document.body.style.overflow='hidden'}));const close=()=>{modal.classList.remove('open');document.body.style.overflow=''};modal.querySelector('.close').addEventListener('click',close);modal.addEventListener('click',e=>{if(e.target===modal)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})}
// Header theme control
const themeToggle=document.querySelector('.theme-toggle');
if(themeToggle){
  const saved=localStorage.getItem('portfolio-theme');
  if(saved==='light') document.body.classList.add('light-theme');
  const icon=themeToggle.querySelector('i');
  const sync=()=>{if(icon) icon.className=document.body.classList.contains('light-theme')?'fa-solid fa-sun':'fa-solid fa-moon'};
  sync();
  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('light-theme');
    localStorage.setItem('portfolio-theme',document.body.classList.contains('light-theme')?'light':'dark');
    sync();
  });
}
