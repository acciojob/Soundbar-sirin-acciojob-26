//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let currentSound = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentSound) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        const sound = button.getAttribute('data-sound');
        currentSound = new Audio(`sounds/${sound}.mp3`);
        currentSound.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentSound) {
        currentSound.pause();
        currentSound.currentTime = 0;
    }
});
