function preload()
{

}
function setup()
{
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  video =  createCapture(VIDEO);
  video.hide();
}
function draw()
{
    image(video, 0, 0, 640, 480);
    circle(50, 50, 100);
    circle(590, 50, 100);
    circle(50, 430, 100);
    circle(590, 430, 100);
}
function take_snapshot()
{
    save("partypicture.png");
}