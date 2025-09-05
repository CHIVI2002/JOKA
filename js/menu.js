const btn = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const abierto = nav.classList.toggle('abierto');
    btn.setAttribute('aria-expanded', abierto ? 'true' : 'false');
  });

  // Cerrar al hacer click en un enlace (móvil)
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=> nav.classList.remove('abierto'));
  });
}
