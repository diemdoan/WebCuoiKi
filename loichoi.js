const music = new Audio('audio/loichoi_audio/1.mp3');

const songs = [
    { id: '1', songName: 'Phóng Đổ Tim Em<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/1.jpg" },
    { id: '2', songName: 'Call Me<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/2.jpg" },
    { id: '3', songName: 'Cầu Vĩnh Tuy<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/3.jpg" },
    { id: '4', songName: 'Từng Quen<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/4.jpg" },
    { id: '5', songName: 'Bé ơi từ từ<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/5.jpg" },
    { id: '6', songName: 'Lối Chơi (Interlude)<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/6.jpg" },
    { id: '7', songName: 'Tình Yêu Vĩ Mô<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/7.jpg" },
    { id: '8', songName: 'Việt Kiều<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/8.jpg" },
    { id: '9', songName: 'ĐĐĐ<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/9.jpg" },
    { id: '10', songName: 'Quyền Anh<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/10.jpg" },
    { id: '11', songName: 'Tò Te Tí<br><div class="subtitle">Wren Evans</div>', poster: "Img/loi_choi_img/11.jpg" }
    
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
        music.src = `audio/loichoi_audio/${index}.mp3`;
        download_music.href = `audio/loichoi_audio/${index}.mp3`;
        poster_master_play.src = `Img/loi_choi_img/${index}.jpg`;
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
        // Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
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
    
    music.src = `audio/loichoi_audio/${index}.mp3`;
    download_music.href = `audio/loichoi_audio/${index}.mp3`;
    poster_master_play.src = `Img/loi_choi_img/${index}.jpg`;
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
    
    // Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
    makeAllPlays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bx-play-circle');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bx-pause-circle');
}

const repeat_music = () =>{
    // masterPlay.classList.add('bx-play');
    masterPlay.classList.add('bx-pause');
    wave.classList.add('active2');
    index;
    
    music.src = `audio/loichoi_audio/${index}.mp3`;
    download_music.href = `audio/loichoi_audio/${index}.mp3`;
    poster_master_play.src =`Img/loi_choi_img/${index}.jpg`;
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
    
    // Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
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
    
    music.src = `audio/loichoi_audio/${index}.mp3`;
    download_music.href =`audio/loichoi_audio/${index}.mp3`;
    poster_master_play.src =`Img/loi_choi_img/${index}.jpg`;
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
    
    // Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgb(105,105,170,.1)";
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
    music.src = `audio/loichoi_audio/${index}.mp3`;
    download_music.href = `audio/loichoi_audio/${index}.mp3`;
    poster_master_play.src = `Img/loi_choi_img/${index}.jpg`;
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
    // Array.from(document.getElementsByClassName('songItem'))[`$/{index-1}`].style.background = "rgb(105,105,170,.1)";

})
next.addEventListener('click', ()=>{
    index -=0 ;
    index +=1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;    
    }
    music.src = `audio/loichoi_audio/${index}.mp3`;
    download_music.href = `audio/loichoi_audio/${index}.mp3`;
    poster_master_play.src = `Img/loi_choi_img/${index}.jpg`;
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
    // Array.from(document.getElementsByClassName('songItem'))[`$/{index-1}`].style.background = "rgb(105,105,170,.1)";
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

let left_scrollss = document.getElementById('left_scrollss');
let right_scrollss = document.getElementById('right_scrollss');
let pop_album = document.getElementsByClassName('pop_album')[0];

left_scrollss.addEventListener('click', ()=> {
    pop_album.scrollLeft -= 330;
})
right_scrollss.addEventListener('click', ()=> {
    pop_album.scrollLeft += 330;
})
let search_result = document.getElementsByClassName('search_result')[0];

songs.forEach(element =>{
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content_1">
          ${songName}
    </div>
    `;
    card.addEventListener('click', ()=> {
        index = id; // Cập nhật index bằng id của bài hát được chọn
        music.src = `audio/loichoi_audio/${id}.mp3`;
        download_music.href = `audio/loichoi_audio/${id}.mp3`;
        poster_master_play.src = `Img/loi_choi_img/${id}.jpg`;
        music.play();
        let song_title = songs.filter((ele) => {
            return ele.id == id;
        });
    
        song_title.forEach(ele => {
            let { songName } = ele;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });
    
        makeAllPlays();
        document.getElementById(`${id}`).classList.remove('bx-play-circle');
        document.getElementById(`${id}`).classList.add('bx-pause-circle');
        wave.classList.add('active2');
    
        masterPlay.classList.remove('bx-play');
        masterPlay.classList.add('bx-pause');
        wave.classList.add('active2');
    });
    search_result.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content_1')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else{
            items[i].style.display = "none";
        }
        if (input_value == "") {
            search_result.style.display="none";
        } else{
            search_result.style.display="";
        }
        
    }
})

let lightMode = document.getElementById('light-mode');
let darkMode = document.getElementById('dark-mode');

darkMode.addEventListener('click', () => {
  document.body.classList.add('light-mode');
  darkMode.style.display = 'none';
  lightMode.style.display = 'block';
  

  lightMode.classList.add('rotate');
  setTimeout(() => {
    lightMode.classList.remove('rotate');
  }, 500);
});

lightMode.addEventListener('click', () => {
  document.body.classList.remove('light-mode');
  darkMode.style.display = 'block';
  lightMode.style.display = 'none';
  
  // Thêm lớp rotate và xóa sau khi animation kết thúc
  darkMode.classList.add('rotate');
  setTimeout(() => {
    darkMode.classList.remove('rotate');
  }, 500);
});
