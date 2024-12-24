// Countdown Functionality
const countdown = () => {
    const targetDate = new Date('December 24, 2024 1:07:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.querySelector('.countdown').textContent = '¡Feliz Navidad!';
        // Espera 3 segundos antes de redirigir
        setTimeout(() => {
            window.location.href = "12.html"; // Cambia la URL por la que deseas redirigir
        }, 2500); // 3000 milisegundos = 3 segundos
    }
};

// Run Countdown Every Second
setInterval(countdown, 1000);
countdown();
