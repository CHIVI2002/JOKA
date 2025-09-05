document.querySelectorAll('.acordeon .pregunta').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const item = btn.parentElement;
    const panel = item.querySelector('.respuesta');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
    panel.style.maxHeight = expanded ? '0px' : panel.scrollHeight + 'px';
    panel.style.padding = expanded ? '0 16px' : '0 16px 14px';
  });
});
