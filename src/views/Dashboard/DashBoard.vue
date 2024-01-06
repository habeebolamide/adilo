<template>
    <div>
        <div v-if="awaitingPermission" class="waiting-permission">
            hekcfge
        </div>
        <div v-else>
            <div class="container">
                <ul class="breadcrumbs">
                    <li>SnapByte</li>
                    <li>My Recording</li>
                </ul>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h2>My Recordings 25</h2>
                    </div>
                    <div class="col-md-8 float-right">
                        <div class="btn btn-info text-white"><i class="bi bi-camera-video pr-2"
                                style="font-size: 20px;"></i>
                            New Request</div>
                        <div class="btn btn-danger text-white mx-3"  @click="$bvModal.show('record')"> <span
                                class="rec"> REC</span> Start Recording</div>
                    </div>
                </div>

                <table class="table mt-5">
                    <thead>
                        <tr>
                            <td>Recordings</td>
                            <td>Title</td>
                            <td>Views</td>
                            <td>Size</td>
                            <td>Last Modified</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                        </tr>
                    </tbody>
                </table>
            </div>
            <b-modal size="md" id="record" hide-footer :title="'New Recording'">
                <span>Save the recording in</span>
                <select class="form-control custom-select mt-3">
                    <option>Select a project</option>
                </select>

                <div class="row mt-3">
                    <div class="col-md-6">
                        <h6>Record Screen</h6>
                    </div>
                    <div class="col-md-6">
                        <input type="checkbox" v-model="recordOptions.screen" id="toggle1" />
                        <label for="toggle1"></label>
                    </div>
                    <div class="col-md-6">
                        <h6>Record camera</h6>
                    </div>
                    <div class="col-md-6 float-right">
                        <input type="checkbox" v-model="recordOptions.camera" id="toggle2" />
                        <label for="toggle2"></label>
                    </div>
                    <div class="col-md-6">
                        <h6>Record Mic</h6>
                    </div>
                    <div class="col-md-6 float-right">
                        <input type="checkbox" v-model="recordOptions.microphone" id="toggle3" />
                        <label for="toggle3"></label>
                    </div>
                </div>
                <div style="display: flex;">
                    <button class="btn submit mx-auto mt-4" @click="startRecording">Start Recording</button>
                </div>
            </b-modal>
        </div>
    </div>
</template>


<style scoped>
.btn {
    border-radius: 50px;
}

h1,
h2 {
    color: gray;
    font-family: helvetica;
}

h6 {
    font-family: helvetica;
}

.rec {
    font-size: 10px;
    font-weight: 600;
    background-color: white;
    border-radius: 100%;
    color: black;
    padding: 5px;
}

#toggle1 {
    display: none;
}

#toggle2 {
    display: none;
}

#toggle3 {
    display: none;
}

label {
    float: inline-end;
    display: inline-block;
    ;
    width: 40px;
    height: 20px;
    background-color: #ccc;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    margin-left: 32px;
}

label::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    transition: transform 0.3s;
}

#toggle1:checked+label,
#toggle2:checked+label,
#toggle3:checked+label {
    background-color: #0AD688;
    content: '>';
}

#toggle1:checked+label::before,
#toggle2:checked+label::before,
#toggle3:checked+label::before {
    transform: translateX(20px);
}

.submit {
    background-color: #0DABD8;
    color: white;
    width: 289px;
}

.submit:hover {
    background-color: #0DABD8;
    color: white;
    width: 289px;
}
</style>
<script>


export default {
    name: "DashBoard",
    components: {

    },
    data() {
        return {
            recordOptions: {
                screen: false,
                camera: false,
                microphone: false
            },
            awaitingPermission: false
        };
    },
    methods: {
        startRecording() {
            var recordOptions = this.recordOptions
            // this.awaitingPermission = true
            // const constraints = {
            //     video: this.recordOptions.camera,
            //     audio: this.recordOptions.microphone
            // };

            this.$router.push({ name: 'record', params: { recordOptions } });

            // navigator.mediaDevices.getUserMedia(constraints)
            //     .then(() => {
            //         this.$router.push('/record-video')
            //         // Use the stream for recording
            //         console.log('Permission granted. Start recording...');
            //         // Your recording logic here
            //     })
            //     .catch(err => {
            //         console.error('Permission denied for media devices', err);
            //         // Handle errors or display user messages for permission denial
            //     });

            this.showModal = false;
        }
    },
}
</script>