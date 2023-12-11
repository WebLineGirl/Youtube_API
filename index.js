// Replace YOUR_API_KEY with your actual YouTube Data API key
const apiKey = 'AIzaSyCguDPVw7PsdeBH7o9IZkdvJ7UaAEzhwgk';
let player;

function loadVideo() {
    const videoId = document.getElementById('videoIdInput').value;
    
    if (!videoId) {
        alert('Please enter a valid YouTube Video ID');
        return;
    }

    // Create the YouTube player
    if (player) {
        player.loadVideoById(videoId);
    } else {
        onYouTubeIframeAPIReady(videoId);
    }
}

function onYouTubeIframeAPIReady(videoId) {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'playsinline': 1,
            'controls': 1,
            'rel': 0,
            'showinfo': 0,
            'modestbranding': 1,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do additional actions when the player is ready
    // For example, event.target.playVideo();
}

function onPlayerStateChange(event) {
    // You can handle player state changes here
    // For example, you can track when the video has ended
    if (event.data === YT.PlayerState.ENDED) {
        // Video ended, you can perform additional actions
    }
}

// Load the YouTube API script asynchronously
function loadYouTubeAPI() {
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(script);
}

// Load the YouTube API script
loadYouTubeAPI();
