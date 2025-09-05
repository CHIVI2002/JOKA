const slides = document.querySelectorAll('.hero-slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let i = 0;

function mostrar(idx){
  slides.forEach(s=>s.classList.remove('activo'));
  slides[idx].classList.add('activo');
}
function siguiente(){ i = (i + 1) % slides.length; mostrar(i); }
function anterior(){ i = (i - 1 + slides.length) % slides.length; mostrar(i); }

if (slides.length){
  mostrar(i);
  let auto = setInterval(siguiente, 5000);
  next?.addEventListener('click', ()=>{ siguiente(); reiniciar(); });
  prev?.addEventListener('click', ()=>{ anterior(); reiniciar(); });
  function reiniciar(){ clearInterval(auto); auto = setInterval(siguiente, 5000); }
}
