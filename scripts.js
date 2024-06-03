const videos = document.querySelectorAll('video');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const handlePlayPause = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.play();
        } else {
            entry.target.pause();
        }
    });
};

const observer = new IntersectionObserver(handlePlayPause, options);

videos.forEach(video => {
    observer.observe(video);
});

const startFirstVideo = () => {
    if (videos.length > 0) {
        const firstVideo = videos[0];
        firstVideo.play().catch(error => {
            console.error('Error attempting to play the first video browser roles', error);
        });
    }
};

document.addEventListener('click', startFirstVideo, { once: true });

videos.forEach(video => {
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});
