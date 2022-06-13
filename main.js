function setup()
{
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    document.getElementById("status").innerHTML = "Game Is Loaded";
}

function modelLoaded()
{
    console.log('Model Is Successfully Loaded');
}