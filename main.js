Peter_pan_song="";
Harry_potter_theme_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist=0;
statusoftheSong="";


function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    Peter_pan_song = loadSound("music2.mp3");
    Harry_potter_theme_song = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,530);
    fill("#f60000")
    stroke("#f70000");
    statusoftheSong=Peter_pan_song.isPlaying();
    if(scoreleftWrist>0.2){
    circle(leftWristx,leftWristy,25);
   Harry_potter_theme_song.stop();
    
    if(statusoftheSong==false){
  Peter_pan_song.play();
  document.getElementById("song").innerHTML="Peter Pan Song";
  
    }
    }
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotposes(results){
    if(results.length > 0){
        console.log(results);
        scoreleftWrist=results[0].pose.keypoints[9].score;
         console.log("scoreLeftwrist="+scoreleftWrist);
        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}