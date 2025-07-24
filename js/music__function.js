const general = document.querySelector.bind(document)
const player = general('.player')
const playlist = general('.playlist')
const cd = general('.cd')
const h2 = general('h2')
const cdThumb = general('.cd-thumb')
const audio = general('#audio')
const btn__repeat = general('.btn-repeat')
const btn__play = general('.btn-toggle-play')
const btn__prev = general('.btn-prev')
const btn__next = general('.btn-next')
const btn__random = general('.btn-random')
const progress = general('.progress')
const width = cd.offsetWidth
let currentIndex = 0, isRandom = false, isPlaying = false, isSeeking = false, isNext = false


// xử lí phóng to / thu nhỏ 
document.onscroll = function(){
    const scrollTop = window.scrollY
    const newWidth = width - scrollTop
    cd.style.width = newWidth > 0 ? newWidth + "px" : 0
    cd.style.opacity = newWidth / width
}

// hàm tải bài hát 
function loadsong(){
    h2.innerText = songs[currentIndex].Name
    cdThumb.style.backgroundImage = `url('${songs[currentIndex].Image}')`
    audio.src = songs[currentIndex].Path
}

// hàm quay ảnh
const animate = cdThumb.animate([
    {transform: 'rotate(360deg)'}
],{
    duration: 10000,
    iterations: Infinity
})
animate.pause()

// hàm random
btn__random.onclick = function(){
    isRandom = !isRandom
    btn__random.classList.toggle("active",isRandom)
}

// hàm chuyển bài
function ChangeSong(index,song__option){
    for(let i = 0 ; i < songs.length ; ++i){
        let song__extra = document.querySelector(`[data-index="${i+1}"]`)
        if(song__extra.classList.contains('active')){
            song__extra.classList.remove('active')
        }
    }
    song__option.classList.add('active')
    currentIndex = index
    progress.value = 0
    loadsong()
    audio.play()
}

// hàm chuyển bài next
function nextSong(){
    if(!isRandom){
        currentIndex = currentIndex < songs.length - 1 ? currentIndex + 1 : 0
    }
    else{
        let index = currentIndex
        while(currentIndex === index){
            currentIndex = Math.floor(Math.random() * songs.length)
        }
    }
    let song__option = document.querySelector(`[data-index="${currentIndex+1}"]`)
    ChangeSong(currentIndex,song__option)
}
btn__next.onclick = function(){
    isNext = true
    nextSong()
}

// hàm chuyển bài prev
btn__prev.onclick = function(){
    isNext = true
    if(!isRandom){
        currentIndex = currentIndex > 0 ? currentIndex - 1 : songs.length - 1
    }
    else{
        let index = currentIndex
        while(currentIndex === index){
            currentIndex = Math.floor(Math.random() * songs.length)
        }
    }
    let song__option = document.querySelector(`[data-index="${currentIndex+1}"]`)
    ChangeSong(currentIndex,song__option)
}

// hàm phát nhạc
audio.onplay = function(){
    isPlaying = true
    animate.play()
    player.classList.add('playing')
}

// hàm pause nhạc
audio.onpause = function(){
    isPlaying = false
    animate.pause()
    player.classList.remove('playing')
}

// hàm chạy hoặc ngưng nhạc tạm thời
btn__play.onclick = function(){
    if(isPlaying){
        audio.pause()
    }
    else {
        if(audio.currentTime == 0) loadsong()
        audio.play()
    }
}

// hàm thay đổi vị trí của thanh thời gian
audio.ontimeupdate = function () {
    if (!isSeeking && audio.duration) {
        const progressPercent = audio.currentTime / audio.duration * 100
        progress.value = progressPercent
    }
}

// hàm xét lại vị trí của nhạc
progress.oninput = function(e){
    isSeeking = true
    audio.currentTime = e.target.value / 100 * audio.duration
    animate.currentTime = e.target.value / 100 * animate.effect.getTiming().duration
}
progress.onchange = function(){
    isSeeking = false
}

// hàm chạy lại từ đầu
btn__repeat.onclick = function(){
    isNext = true
    animate.currentTime = 0
    audio.currentTime = 0
    progress.value = 0
    audio.play()
}

// hàm tự động chuyển bài

audio.onended = function(){
    isNext = false
    setTimeout(function(){
        if(!isNext){
            nextSong()
        }
    },5000)
}

// hàm tạo danh sách bài hát
songs.forEach(function(song, index){
    let song__html = document.createElement('div')
    song__html.classList.add('song')
    song__html.setAttribute('data-index',`${index+1}`)
    song__html.innerHTML = `<div class="thumb"
                                style="background-image: url('${song.Image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.Name}</h3>
                                <p class="author">${song.Singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>`
    playlist.appendChild(song__html)
    let song__option = document.querySelector(`[data-index="${index+1}"]`)
    song__option.onclick = function(){
        isNext = true
        ChangeSong(index,song__option)
    }
})
