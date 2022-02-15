$(function()
{
    var imgsrc=[
        "img1.jpeg",
        "img2.jpeg",
        "img3.jpeg"
    ];
    $storage=$('.storage');
    $viewer=$('.viewer');
    $index=0;

    for(var i=0;i<imgsrc.length;i++)
    {
       $storage.append("<div class="+"image"+"></div>");
       $('image'+i).append("<img src="+imgsrc[i]+"></img>")
    }

});