let portfolioButton;
let mainWindow;
let portfolioWindow;
//change this once i implement more than 1 window
let isMinimized = true;

document.addEventListener('DOMContentLoaded', () => {
    portfolioButton = document.querySelector('#portfolioButton');
    mainWindow = document.querySelector('#mainWindow');
    portfolioWindow = document.querySelector('#portfolioContent')
    // taskbarWindow = document.querySelector("#taskbarWindows");
});

window.addEventListener('load', () => {
    startupWindow();
    //deleted the getElementById and it still works #ilovecoding
    // pb.style.display = 'none'
    // const loadingScreen = document.getElementById('loadingScreen');
    // const progressPercentage = document.getElementById('progressPercentage');
    // const startup1 = document.getElementById('startup1');
    // const startup2 = document.getElementById('startup2');
    // const startup3 = document.getElementById('startup3');

    // const line1 = `cd C:\\Users\\Maxwell\\Portfolio`
    // const line2 = '$ ./bytes.os'
    // const line3 = 'Starting bytes.os...'
    // const bar = 30;
    
    // //god's most efficient animation
    // anime({
    //     targets: startup1,
    //     duration: 800,
    //     easing: 'linear',
    //     delay: 500,
    //     update: function(anim) {
    //         const progress = Math.round(anim.progress / 100 * line1.length);
    //         startup1.textContent = line1.substring(0, progress) + (anim.progress < 100 ? "█" : "");
    //     },
    //     complete: () => {
    //         startup1.textContent = line1;
            
    //         anime({
    //             targets: startup2,
    //             duration: 800,
    //             easing: 'linear',
    //             delay: 500,
    //             update: function(anim) {
    //                         const progress = Math.round(anim.progress / 100 * line2.length);
    //                         startup2.textContent = line2.substring(0, progress) + (anim.progress < 100 ? "█" : "");
    //                     },
    //             complete: () => {
    //                 startup2.textContent = line2;

    //                 anime({
    //                     targets: startup3,
    //                     duration: 800,
    //                     easing: 'linear',
    //                     delay: 300,
    //                     update: function(anim) {
    //                         const progress = Math.round(anim.progress / 100 * line3.length);
    //                         startup3.textContent = line3.substring(0, progress) + (anim.progress < 100 ? "█" : "");
    //                     },
    //                     complete: () => {
    //                         startup3.textContent = line3;
    //                         pb.style.display = 'inline';
    //                         anime({
    //                             targets: { progress: 0 },
    //                             progress: 100,
    //                             duration: 2000,
    //                             easing: 'linear',
    //                             delay: 500,
    //                             update: function(anim) {
    //                                 const percent = Math.round(anim.animations[0].currentValue);
    //                                 const filled = Math.round((percent / 100) * bar);
    //                                 const empty = bar - filled;
                                    
    //                                 progressBar.textContent = '█'.repeat(filled) + '─'.repeat(empty);
    //                                 progressPercentage.textContent = percent + '%';
    //                             },
    //                             complete: () => {
    //                                 setTimeout(() => {
    //                                     anime({
    //                                         targets: loadingScreen,
    //                                         opacity: [1, 0],
    //                                         easing: 'easeOutQuad',
    //                                         duration: 500,
    //                                         complete: () => {
    //                                             loadingScreen.style.display = 'none';
    //                                         }
    //                                     });
    //                                 }, 500);
    //                             }
    //                         });
    //                     }})
    //             }
    //         })
    //     }
    // })
});

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

    // createGradientWave()

    // function createGradientWave() {
    //     const wave = document.createElement('div');
    //     wave.style.cssText = `
    //         position: absolute;
    //         width: 250%;
    //         height: 200%;
    //         background: linear-gradient(45deg, 
    //             rgba(65, 234, 212, 0.05) 0%, 
    //             rgba(255, 119, 255, 0.05) 50%, 
    //             rgba(65, 234, 212, 0.05) 100%);
    //         pointer-events: none;
    //         left: -50%;
    //         top: -50%;
    //     `;
    //     mainWindow.appendChild(wave);
        
    //     anime({
    //         targets: wave,
    //         rotate: 360,
    //         easing: 'linear',
    //         duration: 60000,
    //         loop: true
    //     });
    // }

    // createVaporwaveGrid()

    // function createVaporwaveGrid() {
    //     const grid = document.createElement('div');
    //     grid.style.cssText = `
    //         position: absolute;
    //         width: 200%;
    //         height: 100%;
    //         left: -50%;
    //         background: 
    //         linear-gradient(0deg, 
    //             transparent 20%, 
    //             rgba(65, 234, 212, 0.2) 25%, 
    //             rgba(65, 234, 212, 0.2) 30%,
    //             transparent 35%, 
    //             transparent 70%, 
    //             rgba(65, 234, 212, 0.2) 75%, 
    //             rgba(65, 234, 212, 0.2) 80%,
    //             transparent 85%),
    //         linear-gradient(90deg, 
    //             transparent 20%, 
    //             rgba(65, 234, 212, 0.2) 25%, 
    //             rgba(65, 234, 212, 0.2) 30%, 
    //             transparent 35%, 
    //             transparent 70%, 
    //             rgba(65, 234, 212, 0.2) 75%, 
    //             rgba(65, 234, 212, 0.2) 80%, 
    //             transparent 85%);
    //         background-size: 80px 80px;
    //         pointer-events: none;
    //         transform-origin: center bottom;
    //         transform: perspective(150px) rotateX(25deg);
    //     `;
    //     mainWindow.appendChild(grid);
    
    //     anime({
    //         targets: grid,
    //         translateY: ['0%', '50%'],
    //         easing: 'linear',
    //         duration: 20000,
    //         loop: true
    //     });
    // }

    createCRTEffect()
    function createCRTEffect() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                rgba(18, 16, 16, 0) 50%, 
                rgba(0, 0, 0, 0.25) 50%
            );
            background-size: 100% 4px;
            pointer-events: none;
            opacity: 0.1;
        `;
        mainWindow.appendChild(overlay);
    }
});

//actually portfolio window, would need to change this if i add other windows

// const portfolioWindow = document.getElementById('window');
// let portfolioButton = document.createElement('button');
// portfolioButton.textContent = 'Portfolio.exe';
// portfolioButton.className = 'bg-b300 hover:bg-b200 text-white text-sm px-3 py-1 rounded transition-all duration-200';

function changeWindow(){
    if (isMinimized){
        // anime({
        //     targets: mainWindow,
        //     scale: 0.2,
        //     translateY: window.innerHeight - 200,
        //     translateX: -300,
        //     opacity: 0.5,
        //     borderRadius: "1rem",
        //     easing: "easeInOutQuad",
        //     duration: 500,
        // })
        restoreWindow();
    }
    else {
        minimizeWindow();
    }
}

function startupWindow(){
    let buttonCoords = portfolioButton.getBoundingClientRect();
    let windowCoords = mainWindow.getBoundingClientRect();

    let translateX = buttonCoords.left + buttonCoords.width/2 - (windowCoords.left + windowCoords.width/2);
    let translateY = buttonCoords.top + buttonCoords.height/2 - (windowCoords.top + windowCoords.height/2);

    portfolioWindow.style.zIndex = 0;

    anime({
        targets: portfolioWindow,
        translateX: translateX,
        translateY: translateY,
        scale: 0.01,
        duration: 50,
        complete: () => {
            portfolioWindow.style.display = 'none';
        }
    })
}

function minimizeWindow() {
    let buttonCoords = portfolioButton.getBoundingClientRect();
    let windowCoords = mainWindow.getBoundingClientRect();

    let translateX = buttonCoords.left + buttonCoords.width/2 - (windowCoords.left + windowCoords.width/2);
    let translateY = buttonCoords.top + buttonCoords.height/2 - (windowCoords.top + windowCoords.height/2);

    portfolioWindow.style.zIndex = 0;

    anime({
        targets: portfolioWindow,
        translateX: translateX,
        translateY: translateY,
        scale: 0.01,
        easing: 'easeInOutQuad',
        duration: 250,
        complete: () => {
            portfolioWindow.style.display = 'none'
        }
    });
    isMinimized = true;
}

function restoreWindow() {
    portfolioWindow.style.display = 'flex';
    portfolioWindow.style.zIndex = 1;

    anime({
        targets: portfolioWindow,
        translateX: 0,
        translateY: 0,
        scale: 1,
        opacity: 1,
        borderRadius: '0.5rem',
        easing: 'easeInOutQuad',
        duration: 250,
    });
    isMinimized = false
}

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

