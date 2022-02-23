let player;
const playerContainer = $(".player");

let eventsInit = () => {
    $(".player__start").click(e => {
        e.preventDefault();

        if (playerContainer.hasClass("paused")) {
            playerContainer.removeClass("paused");
            player.pauseVideo();
        } else {
            playerContainer.addClass("paused");
            player.playVideo();
        }
    });

    $(".player__playback").click(e => {
        const bar = $(e.currentTarget);
        const clickedPosition = e.originalEvent.layerX;
        const newButtonPositionPersent = (clickedPosition / bar.width()) * 100;
        const newPlaybackPositionSec = (player.getDuration() / 100) * newButtonPositionPersent;

        $(".player__playback-button").css({
            left: `${newButtonPositionPersent}%`
        });

        player.seekTo(newPlaybackPositionSec);
    });
};

const onPlayerReady = () => {
    let interval;
    const durationSec = player.getDuration();

    if(typeof interval != 'undefined') {
        clearInterval(interval);
    }

    interval = setInterval(() => {
        const completedSec = player.getCurrentTime();
        const completedPercent = (completedSec / durationSec) * 100;

        $( ".player__playback-button").css({
            left: `${completedPercent}%`
        });
    }, 1000);
};

function onYouTubeIframeAPIReady() {
    player = new YT.Player("yt-player", {
        height: "392",
        width: "662",
        videoId: "IExy8l1v9VE",
        events: {
            onRaedy: onPlayerReady,

        },
        playerVars: {
            controls: 0,
            disablekd: 0,
            showinfo: 0,
            rel: 0,
            autoplay: 0,
            modestbranding: 0
        }     
    });
}

eventsInit();

