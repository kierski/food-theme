
const nav = () => {

  	// variables
  	const nav = document.querySelector('.nav');
    const navHeight = nav.offsetHeight;
    const doc = document.documentElement;

    window.addEventListener("scroll", function(e) {
      let top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      if (top >= 100) {
        nav.classList.add('nav--extended');
      } else if (top <= (90 + navHeight)) {
        nav.classList.remove('nav--extended');
      }
    }, false);

};
