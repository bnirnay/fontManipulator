function setup(){
    canvas=createCanvas(350,350);
    canvas.position(850,150);
    video=createCapture(VIDEO);
    video.size(350,350);
    video.position(200,150);
    posenet=ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotposes);
    }
    function modalloaded(){
    console.log("posenet is insalized");
    }
    function gotposes(results){
    if(results.length>0){
        console.log(results);
        right_wrist_x=results[0].pose.rightWrist.x;
        left_wrist_x=results[0].pose.leftWrist.x;
        distance=floor(left_wrist_x-right_wrist_x);
    }
    }
    function draw(){
        background('blue');
        textSize(distance);
        fill("white");
        text('Nirnay',30,200,distance);
        document.getElementById("fontsize").innerHTML="The font size is "+distance+" px ";
        }    
    distance=0;
    right_wrist_x=0;
    left_wrist_x=0;
   