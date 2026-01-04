document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  toggle && toggle.addEventListener('click', function(){
    sidebar.classList.toggle('open');
  });
  // close sidebar when clicking outside (mobile)
  document.addEventListener('click', function(e){
    if(!sidebar.contains(e.target) && !toggle.contains(e.target) && sidebar.classList.contains('open')){
      sidebar.classList.remove('open');
    }
  });

  // Contact form submission (AJAX)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e){
      e.preventDefault();
      const formData = new FormData(contactForm);
      const payload = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        message: formData.get('message') || ''
      };

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (res.ok) {
          alert('Message sent — thank you!');
          contactForm.reset();
        } else {
          const body = await res.json().catch(()=>({}));
          alert('Failed to send message: ' + (body.error || res.statusText));
        }
      } catch (err) {
        alert('Failed to send message');
      }
    });

    // Zelle button copy handler (if present on Donate page)
    const zelleBtn = document.getElementById('zelleBtn');
    if (zelleBtn) {
      zelleBtn.addEventListener('click', function(){
        const number = '+1 (408) 221-5103';
        navigator.clipboard && navigator.clipboard.writeText(number).then(()=>{
          alert('Zelle number copied to clipboard: ' + number);
        }).catch(()=>{
          prompt('Copy this number:', number);
        });
      });
    }
  }
});
