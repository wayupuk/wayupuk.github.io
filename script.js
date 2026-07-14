function linkVideoToAudio(videoId, audioId) {
            const video = document.getElementById(videoId);
            const audio = document.getElementById(audioId);
            console.log("linkVideoToAudio")
            // 1. When video plays, play the hidden audio
            video.addEventListener('play', () => {
                // Optional: Pause all other videos first so they don't overlap
                pauseAllOthers(videoId); 
                audio.play();
            });
            
            // 2. When video pauses, pause the hidden audio
            video.addEventListener('pause', () => {
                audio.pause();
            });
            
            // 3. When user scrubs/skips through the video, move the audio to the same timestamp
            video.addEventListener('seeking', () => {
                audio.currentTime = video.currentTime;
            });
            
            // 4. Ensure they stay synced when skipping is finished
            video.addEventListener('seeked', () => {
                audio.currentTime = video.currentTime;
            });
        }

        // Helper function to stop other videos from playing at the same time
function pauseAllOthers(currentVideoId) {
    const allVideos = ['vid1', 'vid2', 'vid3'];
    
    allVideos.forEach(vidId => {
        if (vidId !== currentVideoId) {
            document.getElementById(vidId).pause();
        }
    });
}

        // Initialize the bindings for all three cards
linkVideoToAudio('vid1', 'aud1');
linkVideoToAudio('vid2', 'aud2');
// linkVideoToAudio('vid3', 'aud3');