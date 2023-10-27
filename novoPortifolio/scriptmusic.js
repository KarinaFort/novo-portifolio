
let musicas = [
    { titulo: 'Let Her Go', src: 'music/Let Her Go [Lofi Fruits Release] (320 kbps).mp3' },
    { titulo: 'Soothing Breeze', src: 'music/Soothing Breeze [asian lofi hip hop] lofi2.mp3'},
    { titulo: '5AM IN TOKYO', src: 'music/5AM IN TOKYO -  Mellow chill  jazz hip hop beats (128 kbps).mp3'} ,
    { titulo: 'Missing You', src: 'music/Missing You (128 kbps).mp3'},
    { titulo: 'Dontcry x Glimlip', src: 'music/Dontcry x Glimlip - Jiro Dreams (128 kbps) lofi5.mp3'} ,
    { titulo: 'Afternoon Jazz',  src: 'music/Afternoon Jazz  [lofi hip hop_study beats] lofi6(128 kbps).mp3'},
    { titulo: 'dryhope', src: 'music/dryhope - White Oak [chill hip hop beats] (320 kbps).mp3'},
    { titulo: 'Lindecis', src: 'music/Lindecis - Soulful (128 kbps).mp3'},
    { titulo: 'Lofi nine', src: 'music/lofi9.mp3'},
    { titulo: 'lofi songs for slow days', src: 'music/lofi songs for slow days (128 kbps).mp3'}

]

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.end');
let nomeDaMusica = document.querySelector('.description h2');

mudarMusica(indexMusica);

document.querySelector('.btn-play').addEventListener('click', tocarMusica);
document.querySelector('.btn-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.last').addEventListener('click', voltarMusica);
document.querySelector('.next').addEventListener('click', proximaMusica);

function voltarMusica()  {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = 10;
    }
    mudarMusica(indexMusica);
    corrigirBotaoVoltar();
}
function proximaMusica(){
        indexMusica++;
        if (indexMusica > 10) {
            indexMusica = 0;
        }
        mudarMusica(indexMusica);
        corrigirBotaoPular();

}


function corrigirBotaoVoltar() {
    musica.pause();
    document.querySelector('.btn-play').style.display = 'block';
    document.querySelector('.btn-pause').style.display = 'none';
}
function corrigirBotaoPular() {
    musica.play();
    document.querySelector('.btn-play').style.display = 'none';
    document.querySelector('.btn-pause').style.display = 'block';
}

function mudarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeDaMusica.textContent = musicas[index].titulo;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica() {
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
    continuarMusica();
}


function pausarMusica() {
    musica.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.start');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));

    if (musica.currentTime === musica.duration) {
        proximaMusica();
    }
}

function segundosParaMinutos(segundos) {
    let = campoMinutos = Math.floor(segundos / 60);
    let = campoSegundos = segundos % 60;

    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;
}