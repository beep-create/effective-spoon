
var canvas = new fabric.Canvas("myCanvas");
var block_image_width = 30;
var block_image_height = 30;
var block_image_object = "";
var player_object = "";
var player_x = 10;
var player_y = 10;

function player_update() {
    console.log("canada mexico panama");
    fabric.Image.fromURL("Iron_man_mark_85.png", function(Img)
    {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({top: player_y, left:player_x });
        canvas.add(player_object);

    } );

}



function  new_image(get_image) {
 fabric.Image.fromURL(get_image,function(Img)
 {
   block_image_object = Img;
   block_image_object.scaleToWidth(block_image_width);
   block_image_object.scaleToHeight(block_image_height);
   block_image_object.set({top:player_y, left:player_x });
   canvas.add(block_image_object);

 } );


  }    
  
 window.addEventListener("keydown",my_keydown);
  
function my_keydown(e) {
keypressed=e.keyCode;
    if (keypressed == '38')
    {
        up();
        console.log("up");
    }

    if (keypressed == '40')
     {
        down();
       console.log("down");
     }

    if (keypressed == '37')
    {
       left();
       console.log("left");
    }

    if (keypressed == '39')
    {
     right();
     console.log("right");
    }



    
}

function up()
{
	if(player_y >=0)
	{
		player_y = player_y - 10;
		console.log("When up arrow is pressed,  x = " + player_x + " | y = " +player_y);
    canvas.remove(player_object);
		player_update()
	}
}
function down()
{
	if(player_y <=500)
	{
		player_y =player_y+ 10;
		console.log("When down arrow is pressed,  x = " + player_x + " | y = " +player_y);
    canvas.remove(player_object);
		player_update()
	}
}
function left()
{
	if(player_x >= 0)
	{
		player_x =player_x - 10;
		console.log("When left arrow is pressed,  x = " + player_x + " | y = " +player_y);
    canvas.remove(player_object);
		player_update()
    }
}
function right()
{
	if(player_x <= 700)
	{
		player_x =player_x + 10;
		console.log("When right arrow is pressed,  x = " + player_x + " | y = " +player_y);
    canvas.remove(player_object);
		player_update()
   }
} 





