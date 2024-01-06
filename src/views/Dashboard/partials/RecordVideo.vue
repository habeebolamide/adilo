<template>
    <div>
        <div class="container">
            <p class="text-left live">Live Preview</p>
            <div class="ms-auto all">
                <div class="screen">

                </div>
                <div class="startbtn">
                    <button class="btn" disabled>
                        <span>
                            Start Recording
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RecordVideo",
}
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
.live{
    font-family: 'Poppins';
    font-size: 14px;
}
</style>
