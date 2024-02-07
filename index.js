const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    alert('¡Gracias, ya sabia que dirias que si!');
    // Redirigir a un video de YouTube
    window.location.href = 'https://www.youtube.com/watch?v=kL0SUi1uXro';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click', function () {
    // Array de mensajes diferentes
    const messages = [
        "Esa no es la opción correcta.",
        "Quizás deberías reconsiderarlo.",
        "¡No te preocupes, hay muchas otras opciones!",
        "¿Estás seguro? Piénsalo de nuevo.",
        "¡Vamos, dame una oportunidad!",
        "No te preocupes, la vida está llena de opciones.",
        "Tal vez te arrepientas después...",
        "¡Ojitos Bonitos dime que si!",
        "¿Seguro que quieres perder esta oportunidad?",
        "Cada elección tiene sus consecuencias...",
    ];

    // Generar un índice aleatorio para seleccionar un mensaje
    const randomIndex = Math.floor(Math.random() * messages.length);

    // Mostrar el mensaje aleatorio
    alert(messages[randomIndex]);
});

