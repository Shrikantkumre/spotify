
const backButton = document.querySelector('.back');
const imageplay = document.querySelector('.imageplay')
const imagepause = document.querySelector('.imagepause')
const storesong = document.querySelector('.storesong')
const songRange = document.querySelector('.songrange');
const onoffElements = document.querySelectorAll('.onoff');
const songoprate = document.querySelector('.songoprate')


let current = 0
let currentindex = 0
let audio = new Audio();
let song = [
    {
        songname: "HASS HASS",
        path: "Hass Hass (Official Video) Diljit X Sia - Diljit Dosanjh.mp3",
        logo: "https://c.saavncdn.com/245/Hass-Hass-English-2023-20231026170517-500x500.jpg"

    },
    {
        songname: "GULABI",
        path: "gulabisadi.mp3",
        logo: "https://c.saavncdn.com/593/Gulabi-Sadi-Marathi-2024-20240220043332-500x500.jpg"
    },
    {
        songname: "TU HAI KAHAN",
        path: "TU HAI KAHAN.mp3",
        logo: "https://www.pagalworld.com.cm/siteuploads/thumb/sft141/70390_4.jpg"
    },
    {
        songname: "Aghori Deva",
        path: "Aghori Deva.mp3",
        logo: "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/10/image-223.png?size=*:900"
    },
    {
        songname: "वांग्याची भाजी ",
        path: "vangyachi.mp3",
        logo: "https://a10.gaanacdn.com/gn_img/lyricist/jBr3gybR1m/Br3gQal9bR/size_m.jpg"
    },
    {
        songname: "Apna Bana Le",
        path: "Apna Bana le.mp3",
        logo: "https://miro.medium.com/v2/resize:fit:640/1*JopmQPNCqr3GpAfX9kUMIw.jpeg"
    },
    {
        songname: "Bapu Zimidar",
        path: "bappu.mp3",
        logo: "https://i1.sndcdn.com/artworks-000112322178-5wp5r8-t500x500.jpg"
    },
    {
        songname: "Desi Desi",
        path: "desi desi.mp3",
        logo: "https://pagalsongs.com.in/siteuploads/thumb/sft12/5774_7.webp"
    },
]


song.forEach(function (value, index) {
    storesong.innerHTML +=

        `   <div class="song">
    <div class="logo">
        <img src="${value.logo}" alt="logo">
    </div>
    <div class="text">
        <h6>${value.songname}</h6>
    </div>
    <div class="time">
        <h6>05:34</h6>
    </div>
    <div class="onoff" onclick="playSong(${index}, this)">
        <img src="https://w7.pngwing.com/pngs/851/883/png-transparent-audio-multimedia-music-pause-player-rounded-stop-play-rounded-icon-thumbnail.png"
            alt="" class="imageplay imageplay1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAEKKAcI-fwfR0_vDwthmrpqXOFiMYz4dRw&usqp=CAU"
            alt="" class="imagepause imagepause1">
    </div>
</div>`
})

onoffElements.forEach((element, index) => {
    element.addEventListener('click', function () {
        opratesong(index, this);
    });
});



function playSong(index, element) {
    if (current !== index || audio.paused) {
        current = index;
        audio.src = song[index].path;
        audio.play();
    } else {
        audio.pause();
    }
    element.classList.toggle('playing')
}

function opratesong(index, element) {
    if (currentindex !== index || audio.paused) {
        currentindex = index;
        audio.src = song[index].path;
        audio.play();
    } else {
        audio.pause();
    }
    element.classList.toggle('play')
}

const nextButton = document.querySelector('.next');

nextButton.addEventListener('click', function () {

    currentindex++;

    if (currentindex >= song.length) {
        currentindex = 0;

    }
    // else{
    // currentindex = song.length - 1;  
    // } 
    audio.src = song[currentindex].path;
    audio.play();
});
backButton.addEventListener('click', function () {
    currentindex--;
    if (currentindex < 0) {
        currentindex = song.length - 1;
    }
    audio.src = song[currentindex].path;
    audio.play();
});

audio.addEventListener('timeupdate', function () {
    const progress = (this.currentTime / this.duration) * 100;
    songRange.value = progress;
});
songRange.addEventListener('input', function () {
    const newTime = (audio.duration / 100) * this.value;
    audio.currentTime = newTime;
});
