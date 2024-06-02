const music = new Audio('audio.mp3');

const songs = [
    {
        id: '1',
        songName: 'Em Iu<br><div class="subtitle">Andree</div>',
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
    })
}
const makeAllBackground = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
        element.style.background = "rgb(105,105,170,0)";   
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        index = e.target.id;
        makeAllPlays();
        e.target.classList.remove('bx-play-circle');
        e.target.classList.add('bx-pause-circle');
        music.src = `audio/${index}.mp3`;
        download_music.href = `audio/${index}.mp3`;
        poster_master_play.src = `Img/${index}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == index;
        })

        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        })

        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        wave.classList.add('active2');
        // music.addEventListener('ended',()=>{
        //     masterPlay.classList.add('bx-play');
        //     masterPlay.classList.remove('bx-pause');
        //     wave.classList.remove('active2');
        // })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if(sec<10){
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if(sec1<10){
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width =`${seekbar}%`;
    dot.style.left =`${seekbar}%`;
})

seek.addEventListener('change',()=>{
    music.currentTime = seek.value *music.duration/100;
})
const next_music = () =>{
    // masterPlay.classList.add('bx-play');
    masterPlay.classList.add('bx-pause');
    wave.classList.add('active2');
    if(index == songs.length){
        index == 0;
    }
    index ++;
    
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src = `Img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bx-play-circle');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bx-pause-circle');
}

const repeat_music = () =>{
    // masterPlay.classList.add('bx-play');
    masterPlay.classList.add('bx-pause');
    wave.classList.add('active2');
    index;
    
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src = `Img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bx-play-circle');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bx-pause-circle');
}
const random_music = () =>{
    // masterPlay.classList.add('bx-play');
    masterPlay.classList.add('bx-pause');
    wave.classList.add('active2');
    if(index == songs.length){
        index == 0;
    }
    index= Math.floor((Math.random()*songs.length)+1);
    
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src = `Img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    })

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    })
    makeAllBackground();
    
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bx-play-circle');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bx-pause-circle');
}

let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click', ()=>{
    let a= shuffle.innerHTML;
    switch(a){
        case "next":
            shuffle.classList.add('bx-repeat');
            shuffle.classList.remove('bxs-music');
            shuffle.classList.remove('bx-shuffle');
            shuffle.innerHTML = "repeat";
            break;
        case "repeat":
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.remove('bxs-music');
            shuffle.classList.add('bx-shuffle');
            shuffle.innerHTML = "random";
            break;
        case "random":
            shuffle.classList.remove('bx-repeat');
            shuffle.classList.add('bxs-music');
            shuffle.classList.remove('bx-shuffle');
            shuffle.innerHTML = "next";
            break;
    }
});

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.add('bxs-volume-mute');
        vol_icon.classList.remove('bxs-volume-full');
    }
    if(vol.value > 0){
        vol_icon.classList.add('bxs-volume-low');
        vol_icon.classList.remove('bx-volume-mute');
        vol_icon.classList.remove('bxs-volume-full');
    }
    if(vol.value > 50){
        vol_icon.classList.remove('bxs-volume-low');
        vol_icon.classList.remove('bxs-volume-mute');
        vol_icon.classList.add('bxs-volume-full');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -=1 ;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src = `Img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    });

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
    makeAllPlays()
    document.getElementById(`${index}`).classList.remove('bx-play');
    document.getElementById(`${index}`).classList.add('bx-pause');
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[`$/{index-1}`].style.background = "rgb(105,105,170,.1)";

})
next.addEventListener('click', ()=>{
    index -=0 ;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;    
    }
    music.src = `audio/${index}.mp3`;
    download_music.href = `audio/${index}.mp3`;
    poster_master_play.src = `Img/${index}.jpg`;
    music.play();
    let song_title = songs.filter((ele) => {
        return ele.id == index;
    });

    song_title.forEach(ele => {
        let { songName } = ele;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });
    makeAllPlays()

    document.getElementById(`${index}`).classList.remove('bx-play');
    document.getElementById(`${index}`).classList.add('bx-pause');
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[`$/{index-1}`].style.background = "rgb(105,105,170,.1)";
})


let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=> {
    pop_song.scrollLeft -= 330;
})
right_scroll.addEventListener('click', ()=> {
    pop_song.scrollLeft += 330;
})

let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=> {
    item.scrollLeft -= 330;
})
right_scrolls.addEventListener('click', ()=> {
    item.scrollLeft += 330;
})