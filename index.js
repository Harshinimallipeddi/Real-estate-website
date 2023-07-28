/*scrool header*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  }
  
  window.addEventListener('scroll', scrollHeader);
  
  var swiper = new Swiper('.pop-cont', {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  
  const accitems = document.querySelectorAll('.val-acc-item');
  accitems.forEach((item) => {
    const accheader = item.querySelector('.val-acc-header');
    accheader.addEventListener('click', () => {
      toggleitems(item);
    });
  });
  
  const toggleitems = (item) => {
    const accContent = item.querySelector('.val-acc-content');
    if (item.classList.contains('acc-open')) {
      accContent.style.height = '0';
      item.classList.remove('acc-open');
    } else {
      accContent.style.height = `${accContent.scrollHeight}px`;
      item.classList.add('acc-open');
    }
  };
  
  /*scroll hignlighting*/
  const sections = document.querySelectorAll('section[id]');
  document.addEventListener('DOMContentLoaded', scrollActive);
  window.addEventListener('scroll', scrollActive);
  
  function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
      
      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
        } else {
          navLink.classList.remove('active-link');
        }
      }
    });
  }