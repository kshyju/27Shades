/**************************************
  Author  : Shyju Krishnankutty
  Twitter : @kshyju
**************************************/
function JColor(colorString)
{
  this.ColorString=colorString;
  this.Red=0;
  this.Green=0;
  this.Blue=0;
  this.Alpha=255; //full visibility
  this.load();
}
JColor.prototype.toRGB=function(){
  return"RGB("+this.Red+","+this.Green+","+this.Blue+")";  
};
JColor.prototype.toHex=function(){
   var redHex=this.Red.toString(16);
   var greenHex=this.Green.toString(16);
   var blueHex=this.Blue.toString(16);
   var res= "#"+(redHex.length==1?"0"+redHex:redHex)+(greenHex.length==1?"0"+greenHex:greenHex)+(blueHex.length==1?"0"+blueHex:blueHex);
   return res.toUpperCase();
};
JColor.prototype.getShade=function(shadeValue)
{ 
  var newRed= GetColorShade(this.Red,shadeValue);
  var newGreen= GetColorShade(this.Green,shadeValue);
  var newBlue= GetColorShade(this.Blue,shadeValue);
  return "RGB("+newRed+","+newGreen+","+newBlue+")";  
};

JColor.prototype.load =function(){ 
  
  if(this.ColorString.substr(0,4).toUpperCase()==="RGBA")
  {       
     var rgba= this.ColorString.substr(5,this.ColorString.length-6).toUpperCase();      
     var rgbaArray=rgba.split(",");     
     if(rgbaArray.length===4)
     {  
        this.Red=parseInt(rgbaArray[0]);
        this.Green=parseInt(rgbaArray[1]);
        this.Blue=parseInt(rgbaArray[2]);  
        this.Alpha=parseInt(rgbaArray[3]);         
        if(this.Alpha===0)
        {
          //Alpha zero. Not sure what to do. So lets keep the color as white.
          this.Red=255;
          this.Green=255;
          this.Blue=255;
        }
     }     
  }
  else if(this.ColorString.substr(0,3).toUpperCase()==="RGB")
  {   
     var rgb= this.ColorString.substr(4,this.ColorString.length-5).toUpperCase();      
     var rgbArray=rgb.split(",");
     if(rgbArray.length===3)
     {     
        this.Red=parseInt(rgbArray[0]);
        this.Green=parseInt(rgbArray[1]);
        this.Blue=parseInt(rgbArray[2]);         
     }    
  }
  else if(this.ColorString.substr(0,1).toUpperCase()==="#")
  { 
    var rgbRepresentation=hexToRgb(this.ColorString);    
    this.ColorString=rgbRepresentation;   
    this.load();
  }
  else
  {
    var hex=colourNameToHex(this.ColorString);
    this.ColorString=hex;   
    this.load();
  }   
};

function GetColorShade(currentValue,percentage)
{
  var newValue=currentValue*percentage/100; 
  return Math.round((currentValue-newValue));
}
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);  
    var rgbResult= result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
    return ("RGB("+rgbResult.r+","+rgbResult.g+","+rgbResult.b+")");   
}

function colourNameToHex(colour)
{
    var colours = {"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff",
    "beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887",
    "cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff",
    "darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f",
    "darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkturquoise":"#00ced1",
    "darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dodgerblue":"#1e90ff",
    "firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff",
    "gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f",
    "honeydew":"#f0fff0","hotpink":"#ff69b4",
    "indianred ":"#cd5c5c","indigo ":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c",
    "lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2",
    "lightgrey":"#d3d3d3","lightgreen":"#90ee90","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightsteelblue":"#b0c4de",
    "lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6",
    "magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370d8","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee",
    "mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5",
    "navajowhite":"#ffdead","navy":"#000080",
    "oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6",
    "palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#d87093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080",
    "red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1",
    "saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4",
    "tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0",
    "violet":"#ee82ee",
    "wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5",
    "yellow":"#ffff00","yellowgreen":"#9acd32"};

    if (typeof colours[colour.toLowerCase()] != 'undefined')
      return colours[colour.toLowerCase()];

    return false;
}

var existingColorArr=[];
var itemCounter=0;
function LoadOriginalStyles()
{
  var allNodes=document.body;
  var bodycss = allNodes.style;       
  if(bodycss!=null)
  {
    if(bodycss.backgroundColor!="")
    {  
      existingColorArr.push( { "index":itemCounter,"bg":bodycss.backgroundColor});
      itemCounter++;
    }
  }
  for(var i=0;i<allNodes.childNodes.length;i++)
  {
    var curNode=allNodes.childNodes[i];
    CheckChildItem(curNode);
  }
  return existingColorArr;
}
 
function CheckChildItem(currentNode)
{ 
  if(IsValidElement(currentNode.localName))
  {            
    var css = window.getComputedStyle(currentNode,null);        
    if(css!=null)
    {
      if(css.backgroundColor!="")
      {           
        existingColorArr.push( { "index":itemCounter,"bg":css.backgroundColor});
        itemCounter++;
      }
    }
    if(currentNode.childNodes.length>0)
    {         
      for(var i=0;i<currentNode.childNodes.length;i++)
      {
        var currentChild=currentNode.childNodes[i];         
        CheckChildItem(currentChild);
      }
    }
  }
}

function IsValidElement(localName)
{
   if(localName==='div' ||localName==='span'||localName==='table'||localName==='h1'||localName==='form'||localName==='p'||localName==='pre'
      ||localName==='nav'||localName==='ul'||   localName==='button'||localName==='a'||localName==='header' || localName==='th'||localName==='h3'
       ||localName==='section'||localName==='code'|| localName==='h2'|localName==='h4')
   {
     return true;
   }
   return false;
}

function PaintChildItem(currentNode,shadeValue)
{
  if(IsValidElement(currentNode.localName))
  {
    var css = window.getComputedStyle(currentNode,null);        
    if(css!=null)
    {
      if(typeof existingColorArr[setCounter]!="undefined")
      {          
        var existingColor=existingColorArr[setCounter].bg;  
        if(existingColor!="") 
        { 
          var col=new JColor(existingColor);
          currentNode.style.backgroundColor=col.getShade(shadeValue);
          setCounter++;            
        }
      }
    }
    if(currentNode.childNodes.length>0)
    {         
      for(var i=0;i<currentNode.childNodes.length;i++)
      {
        var currentChild=currentNode.childNodes[i];         
        PaintChildItem(currentChild,shadeValue);
      }
    }
  }
}
var setCounter=0;
function UpdateStyles(shadeValue)
{      
  var allNodes=document.body;
  var bodycss = window.getComputedStyle(allNodes,null);        
  if(bodycss!=null)
  {
    var existingColor=existingColorArr[setCounter].bg;
    if(existingColor!="")// && existingColor!="rgba(0, 0, 0, 0)")
    {           
      var col=new JColor(existingColor);  
      document.body.style.backgroundColor=col.getShade(shadeValue);
      setCounter++; 
    }
  }
  for(var i=0;i<allNodes.childNodes.length;i++)
  {
    var curNode=allNodes.childNodes[i];
    PaintChildItem(curNode,shadeValue);
  }
}

LoadOriginalStyles();

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
    setCounter=0;
    console.log("got");
  	 UpdateStyles(request.greeting);
});