const music = new Audio('audio.mp3');

const songs = [
    {
        id: '1',
        songName: 'Em Iu <br><div class="subtitle">Andree</div>',
        poster: "Img/1.jpg"
    },
    {
        id: '2',
        songName: 'Cry<br><div class="subtitle">Parker Jack</div>',
        poster: "Img/2.jpg"
    },
    {
        id: '3',
        songName: 'Dù Con Đã Khôn Lớn<br><div class="subtitle">Yuno BigBoi x Tổng Đài</div>',
        poster: "Img/3.jpg"
    },
    {
        id: '4',
        songName: 'Quá Sớm<br><div class="subtitle">Low G</div>',
        poster: "Img/4.jpg"
    },
    {
        id: '5',
        songName: 'Rời Bỏ<br><div class="subtitle">Anh Tú</div>',
        poster: "Img/5.jpg"
    },
    {
        id: '6',
        songName: 'Lối Nhỏ<br><div class="subtitle">Đen Vâu</div>',
        poster: "Img/6.jpg"
    },
    {
        id: '7',
        songName: 'Chịu Cách mình Nói Thua<br><div class="subtitle">Rhyder</div>',
        poster: "Img/7.jpg"
    },
    {
        id: '8',
        songName: 'Đầu Đường Xó Chợ<br><div class="subtitle">Obito x Lăng LD</div>',
        poster: "Img/8.jpg"
    },
    {
        id: '9',
        songName: 'Mượn Rượu Tỏ Tình<br><div class="subtitle">BIGDADDY x Emily</div>',
        poster: "Img/9.jpg"
    },
    {
        id: '10',
        songName: 'Lời tâm sự số 3<br><div class="subtitle">Mike</div>',
        poster: "Img/10.jpg"
    },
    {
        id: '11',
        songName: 'Đánh Đổi<br><div class="subtitle">Obito x MCK</div>',
        poster: "Img/11.jpg"
    },
    {
        id: '12',
        songName: 'Buồn Hay Vui<br><div class="subtitle">Vsoul, Obito, MCK, Ronboogz</div>',
        poster: "Img/12.jpg"
    },
    {
        id: '13',
        songName: 'Tay To<br><div class="subtitle">MCK</div>',
        poster: "Img/13.jpg"
    },
    {
        id: '14',
        songName: 'Phóng Đổ Tim Em<br><div class="subtitle">Wren Evans</div>',
        poster: "Img/14.jpg"
    },
    {
        id: '15',
        songName: 'Call Me<br><div class="subtitle">Wren Evans</div>',
        poster: "Img/15.jpg"
    },
    {
        id: '16',
        songName: 'Tao Của Ngày Xưa<br><div class="subtitle">Khách Jayz</div>',
        poster: "Img/16.jpg"
    },
    {
        id: '17',
        songName: 'Tháng Năm<br><div class="subtitle">Soobin Hoàng Sơn</div>',
        poster: "Img/17.jpg"
    },
    {
        id: '18',
        songName: 'Cho Mình Em<br><div class="subtitle">Binz x Đen</div>',
        poster: "Img/18.jpg"
    },
];

Array.from(document.getElementsByClassName('songName')).forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bx-play');
        masterPlay.classList.remove('bx-pause');
        wave.classList.remove('active2');
    }
});

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.classList.add('bx-play-circle');
        element.classList.remove('bx-pause-circle');
    });
};

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
        music.src = `audio/${index}.mp3`;
        poster_master_play.src = `Img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        });

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
        });

        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        wave.classList.add('active2');
    });
});