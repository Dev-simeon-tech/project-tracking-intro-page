const primaryNav = document.querySelector('.primary-navigation');
const mobileToggle = document.querySelector('.mobile-nav-toggle');

const showNavigation = (nav,toggleBtn)=>{
    toggleBtn.addEventListener( 'click', ()=>{
        const visibility = nav.getAttribute('aria-expanded');

        if(visibility === 'false'){
            nav.setAttribute('aria-expanded',true);
            toggleBtn.src = '../images/icon-close.svg'
        }
        else{
            nav.setAttribute('aria-expanded',false);
            toggleBtn.src = '../images/icon-hamburger.svg' 
        }

    })

}
showNavigation(primaryNav,mobileToggle)
