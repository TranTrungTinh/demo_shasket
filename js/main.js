$('#nav-intro').click(e => {
  e.preventDefault();
  const { hash } = e.currentTarget;
  if (!hash) return;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800);
});
