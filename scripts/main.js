document.addEventListener('DOMContentLoaded', function() {
    const nameContainer = document.getElementById('nameHeader');
    const name = 'Maxwell Brown | CS Senior at Appalachian State University';

    anime({
        targets: nameContainer,
        textContent: ['', name],
        duration: 2000,
        easing: 'easeInOutQuad',
        delay: 500,
        update: function(anim) {
            nameContainer.textContent = name.substring(0, Math.round(anim.progress / 100 * name.length));
        }
    });
});

// const taskbarWindow = document.getElementById('taskbarWindows')
// const portfolioWindow = document.getElementById('window');
// let portfolioButton = document.createElement('button');
// portfolioButton.textContent = 'Portfolio.exe';
// portfolioButton.className = 'bg-b300 hover:bg-b200 text-white text-sm px-3 py-1 rounded transition-all duration-200';

function highlightSection(className){
    anime({
        targets: className,
        color: '#41EAD4',
        duration: 500,
        ease: 'easeInOutQuad'
    })
}

function unhighlightSection(className){
    anime({
        targets: className,
        color: '#FFFFFF',
        duration: 500,
        ease: 'easeInOutQuad'
    })
}

function animateTabContent() {
    anime({
        targets: '._tabContent',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
    });
}