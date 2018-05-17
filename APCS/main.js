
Crafty
 .init(window.innerwidth, window.innerheight + 20, document.getElementById('game'));

Crafty
 .e('2D, DOM, Image, Multiway')
 .attr({x: 0, y: 0, w: 1000, h: 1000})
 //.color('#000F0F')
 //.image("http://www.pngall.com/wp-content/uploads/2016/06/Nyan-Cat-PNG.png")
 .image("nyan.gif")
 .multiway({x:200,y:200}
   , {UP_ARROW: -90
   , DOWN_ARROW: 90});
;
alert("Move up and down with arrow keys / set audio volume to 100% / have fun")
document.getElementById("nyan").innerHTML="<embed src='Nyan_Cat.wav' hidden=true autostart=true loop=true>";
