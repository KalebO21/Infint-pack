document.addEventListener('DOMContentLoaded', function() {
    const players = document.querySelectorAll('audio');
    players.forEach(player => {
        new MediaElementPlayer(player, {
            features: ['playpause', 'progress', 'volume', 'fullscreen'],
            startVolume: 0.8,
            showPosterWhenPaused: true,
            audioWidth: '100%',
            
        });

        
    });

});

function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}
