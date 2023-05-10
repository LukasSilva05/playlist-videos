let listVideos = document.querySelectorAll('.video-list .vid')
let mainVideo = document.querySelector('.main-video video')
let title = document.querySelector('.main-video .title')


listVideos.forEach(video => {
    video.addEventListener('click', () => {
        listVideos.forEach(vid => vid.classList.remove('active'))
        video.classList.add('active')

        if (video.classList.contains('active')) {
            //let src = video.children[0].getAttribute('src')
            mainVideo.src = video.children[0].getAttribute('src')
            //let text = video.children[1].innerHTML
            title.innerHTML = video.children[1].innerHTML
        }
    })
})