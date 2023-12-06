
var video = document.querySelector('.video');
var seta1 = document.getElementById('seta1');
var seta2 = document.getElementById('seta2');
var audio = document.getElementById('Audio');
seta1.addEventListener('click', function() {
    video.style.height = '250px';
    video.play(); //ja começa video
    seta1.style.display = 'none'; // esconde a seta para cima
    seta2.style.display = 'block'; // mostra a seta para baixo
    window.scrollTo(0, 0); // move a página para o topo
    audio.play(); // começa a tocar a música
});
seta2.addEventListener('click', function() {
    video.style.height = '0';
    video.pause();
    seta1.style.display = 'block'; // mostra a seta para cima
    seta2.style.display = 'none'; // esconde a seta para baixo
    audio.pause(); // para a música
});