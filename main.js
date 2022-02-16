noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup() {
    video= createCapture(VIDEO);
    video.size(550, 450);

    canvas= createCanvas(570, 420);
    canvas.position(650, 110);

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("powderblue");
  }

  function modelLoaded(){
      console.log("PoseNet is initialised!");
  }

  function gotPoses(results){
      if(results.length > 0)
      {
          console.log(results);
          noseX= results[0].pose.nose.x;
          noseY= results[0].pose.nose.y;
          console.log("Nose x- " + noseX + ", Nose y- " + noseY);
          leftWristX= results[0].pose.leftWrist.x;
          rightWristX= results[0].pose.rightWrist.x;
          difference= floor(leftWristX-rightWristX);
          console.log("Left wrist X- " + leftWristX + ", Right wrist X- " + rightWristX + "Difference- " + difference);

          

      }
  }

  function draw(){
      background("powderblue");
      document.getElementById("circle_radius").innerHTML="Radius of the circle- " + difference;
      fill("black");
      stroke("black");
      noFill();
      circle(noseX, noseY, difference);
  }
