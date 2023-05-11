import videos from "./videos.js"

function loadVideos() {
    let listVideos = document.querySelector('.video-list')
    let mainVideo = document.querySelector('.main-video video')
    let title = document.querySelector('.main-video .title')

    mainVideo.src = videos[0].src
    title.innerHTML = videos[0].title

    videos.forEach((video, index) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <div class="${index + 1 === 1 ? "vid active" : "vid"}">
            <video src=${video.src} muted></video>
            <h3 class="title">${video.title}</h3>
        </div>
        `
        listVideos.appendChild(div)
    })
    clickOnVideo()
}

function clickOnVideo() {
    let listVideos = document.querySelectorAll('.video-list .vid')
    let mainVideo = document.querySelector('.main-video video')
    let title = document.querySelector('.main-video .title')

    listVideos.forEach(video => {
        video.addEventListener('click', () => {
            listVideos.forEach(vid => vid.classList.remove('active'))
            video.classList.add('active')

            if (video.classList.contains('active')) {
                mainVideo.src = video.children[0].getAttribute('src')
                title.innerHTML = video.children[1].innerHTML
            }
        })
    })
}

loadVideos()