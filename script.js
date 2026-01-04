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
});
