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
            <img src="${video.thumb}"/>
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

    listVideos.forEach((video, index) => {
        video.addEventListener('click', () => {
            listVideos.forEach(vid => vid.classList.remove('active'))
            video.classList.add('active')

            if (video.classList.contains('active')) {
                mainVideo.src = videos[index].src
                title.innerHTML = videos[index].title
            }
        })
    })
}

loadVideos()