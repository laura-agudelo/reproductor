// Lista de reproducción
const playList = [
    {
        title: 'I WANNA BE YOURS',
        artist: 'Arctic Monkeys',
        img: 'img/images.jfif',
        song: 'music/I Wanna Be Yours.mp3'
    },
    {
        title: 'PÚRPURA',
        artist: 'Nanpa Básico',
        img: 'img/purpura.jpg',
        song: 'music/Púrpura - Nanpa Básico (Video Oficial).mp3'
    },
    {
        title: '505',
        artist: 'Arctic Monkeys',
        img: 'img/505.jfif',
        song: 'music/505.mp3'
    },
    {
        title: 'LIKE A STONE',
        artist: 'Audioslave',
        img: 'img/audioslave.jfif',
        song: 'music/Audioslave - Like a Stone (Official Video).mp3',
    },
    {
        title: 'CONFIANZA',
        artist: 'Micro TDH',
        img: 'img/micro.jfif',
        song: 'music/Micro TDH - Confianza (Official Video).mp3'
    }
];

// Elementos DOM
const songTitle = document.querySelector('.player__artist');
const songArtist = document.querySelector('.player__song');
const songImage = document.querySelector('.player__img');
const audio = document.getElementById('audio');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Estado
let currentSongIndex = 0;

// Función para cargar la canción actual
function loadSong(songIndex) {
    const song = playList[songIndex];
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    songImage.src = song.img;
    audio.src = song.song;
}

// Función para cambiar a la canción anterior
function prevSong() {
    currentSongIndex = (currentSongIndex === 0) ? playList.length - 1 : currentSongIndex - 1;
    loadSong(currentSongIndex);
    audio.play();
}

// Función para cambiar a la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex === playList.length - 1) ? 0 : currentSongIndex + 1;
    loadSong(currentSongIndex);
    audio.play();
}

// Event Listeners para los botones
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Cargar la primera canción
loadSong(currentSongIndex);


// Función para reproducir la canción
function playSong() {
    audio.play();
}

// Función para pausar la canción
function pauseSong() {
    audio.pause();
}
