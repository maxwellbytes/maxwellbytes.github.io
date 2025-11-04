document.addEventListener("DOMContentLoaded", function() {
    var activeTab = "welcome";
    //Methods to call on start
    eventListeners();
    initializeAnimations();

    function initializeAnimations() {
        // Split the text into characters
        const text = document.querySelector('h2');
        const characters = text.innerHTML.split('');
        
        // Wrap each character in a span
        text.innerHTML = characters
            .map(char => `<span class="char">${char}</span>`)
            .join('');

        // Create the animation
        anime({
            targets: '.char',
            //change this to make the characters move more or less
            translateY: [-50, 0],
            rotate: {
                value: ['360deg', '0deg'],
                duration: 1000,
                easing: 'easeInOutSine'
            },
            opacity: [0, 1],
            //change this to get different animation styles
            easing: 'easeOutExpo',
            //adjust this to make it faster or slower
            duration: 2000,
            //changes how quickly characters appear after each other
            delay: anime.stagger(100),
            //set this to false if i want it to only play once
            loop: true
        });
    }
/*
    function eventListeners(){
        document.getElementById('welcome_tab').addEventListener('click', function() {
            if (activeTab != "welcome") {
                changeActiveTab("welcome")
            }
        })
        document.getElementById('about_tab').addEventListener('click', function() {
            if (activeTab != "about"){
                changeActiveTab("about")
            }
        })
        document.getElementById('projects_tab').addEventListener('click', function() {
            if (activeTab != "projects"){
                changeActiveTab("projects")
            }
        })
        document.getElementById('resume_tab').addEventListener('click', function() {
            if (activeTab != "resume"){
                changeActiveTab("resume")
            }
        })
    }

    function changeActiveTab(newActive){
        let newTab = document.getElementById(`${newActive}_tab`)
        newTab.classList.add('tab-active')

        let currTab = document.getElementById(`${activeTab}_tab`)
        currTab.classList.remove('tab-active')

        activeTab = newActive
    }
        */
});