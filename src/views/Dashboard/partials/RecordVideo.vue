<template>
    <div>
        <div class="container">
            <p class="text-left live">Live Preview</p>
            <div class="ms-auto all">
                <div class="screen">
                    <video id="videoElement" v-show="showvideo" autoplay playsinline :controls="playingrecord"></video>
                </div>
                <div class="startbtn">
                    <button class="btn" :disabled="!showvideo" @click="record" v-if="!recording">
                        <span>Start Recording</span>
                    </button>
                    <button class="btn" :disabled="!showvideo" @click="stop" v-if="recording">
                        <span>Stop Recording</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "RecordVideo",
    data() {
        return {
            recordOptions: {},
            showvideo: false,
            mediaRecorder: null,
            chunks: [],
            srcObject: null,
            playingrecord: false,
            recording: false
        };
    },
    methods: {
        startRecording() {
            const constraints = {
                video: {
                    cursor: "always" // To capture cursor movements as well
                },
                audio: this.recordOptions.microphone
            };

            if (this.recordOptions.screen) {
                navigator.mediaDevices.getDisplayMedia(constraints)
                    .then((stream) => {
                        const videoElement = document.getElementById('videoElement');
                        videoElement.srcObject = stream;
                        this.srcObject = stream;
                        videoElement.play()
                            .catch(function (error) {
                                console.error('Error playing the video stream:', error);
                            });
                        this.showvideo = true;
                    })
                    .catch(err => {
                        console.error('Permission denied for screen recording', err);
                        // Handle errors or display user messages for permission denial
                    });
            } else {
                navigator.mediaDevices.getUserMedia({ video: true, audio: this.recordOptions.microphone })
                    .then((stream) => {
                        const videoElement = document.getElementById('videoElement');
                        videoElement.srcObject = stream;
                        this.srcObject = stream;
                        videoElement.play()
                            .catch(function (error) {
                                console.error('Error playing the video stream:', error);
                            });
                        this.showvideo = true;
                    })
                    .catch(err => {
                        console.error('Permission denied for media devices', err);
                        // Handle errors or display user messages for permission denial
                    });
            }
        },

        record() {
            if (this.srcObject) {
                this.recording = true;
                this.mediaRecorder = new MediaRecorder(this.srcObject);
                this.chunks = [];

                this.mediaRecorder.ondataavailable = (event) => {
                    this.chunks.push(event.data);
                };

                this.mediaRecorder.onstop = () => {
                    const recordedBlob = new Blob(this.chunks, { type: 'video/webm' });
                    console.log(recordedBlob);
                    const videoElement = document.getElementById('videoElement');
                    videoElement.src = URL.createObjectURL(recordedBlob);
                };

                this.mediaRecorder.start();
            }
        },
        stop() {
            if (this.mediaRecorder && this.mediaRecorder.state !== 'inactive') {
                this.mediaRecorder.stop();
                this.recording = false;
                const recordedBlob = new Blob(this.chunks, { type: 'video/webm' });
                const videoElement = document.getElementById('videoElement');

                videoElement.srcObject = null; // Clear the live stream
                videoElement.src = URL.createObjectURL(recordedBlob); // Set recorded video as source
                this.playingrecord = true;
                videoElement.play(); // Play the recorded video
                this.showvideo = true; // Show the recorded video
            }
        },
    },
    mounted() {
        this.recordOptions = this.$route.params.recordOptions;
        this.startRecording();
    }
};
</script>
  
<style scoped>
.all {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.screen {
    background: #21455E 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    width: 965px;
    height: 518px;
    margin-bottom: 20px;
}

/* You can add additional styling for the button if needed */
.startbtn button {
    padding: 10px 35px;
    font-size: 16px;
    background: #0DABD8 0% 0% no-repeat padding-box;
    color: #FFFFFF;
    border-radius: 20px;
}

.live {
    font-family: 'Poppins';
    font-size: 14px;
}
</style>
  