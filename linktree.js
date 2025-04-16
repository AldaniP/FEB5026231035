document.addEventListener('DOMContentLoaded', function() {
  // Topbar Button Animation
  const subscribeBtn = document.querySelector('.subscribe-btn');
  const subscribeText = document.querySelector('.subscribe-text');
  
  subscribeBtn.classList.add('collapsed');
  
  setTimeout(() => {
      subscribeBtn.classList.remove('collapsed');
      subscribeBtn.classList.add('expanded');
      
      setTimeout(() => {
          subscribeText.classList.add('visible');
          
          setTimeout(() => {
              subscribeText.classList.remove('visible');
              
              setTimeout(() => {
                  subscribeBtn.classList.remove('expanded');
                  subscribeBtn.classList.add('collapsed');
              }, 300);
          }, 1000);
      }, 100);
  }, 500);

  // Topbar Scroll
  const topbar = document.querySelector('.topbar');
  
  window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = 300;
      const opacity = Math.max(1 - scrollTop / maxScroll, 0);
      topbar.style.opacity = opacity;
  });
});