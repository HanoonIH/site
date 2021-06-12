window.onload = () => {

    // Menu & Nav screen
    var menuIcon = document.querySelector('#menuIcon');
    var closeIcon = document.querySelector('#closeIcon');
    var navScreen = document.getElementById('navScreen');
    var navItems = document.querySelectorAll('nav li a');

    menuIcon.addEventListener('click', openNavScreen);
    closeIcon.addEventListener('click', closeNavScreen);
    navItems.forEach(item => {
        item.addEventListener('click', closeNavScreen);
    });

    function openNavScreen() {
        navScreen.style.visibility = 'visible';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
        console.log('done');
    }
    
    function closeNavScreen() {
        navScreen.style.visibility = 'hidden';
        closeIcon.style.display = 'none';
        menuIcon.style.display = 'block';
    }

    // Hire button text change in mobile
    var mobileScreen = window.matchMedia("(max-width: 425px)");
    function changeText(mobileScreen) {
        if(mobileScreen.matches) {
            document.getElementById('hireBtn').innerHTML = 'Hire';
        } else {
            document.getElementById('hireBtn').innerHTML = 'Hire Me';

        
        }
    }
    changeText(mobileScreen);
    mobileScreen.addListener(changeText);
}
