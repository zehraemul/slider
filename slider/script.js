var elements=[
    {name : 'image1', img : '1.jpg'},
    {name : 'image2', img : '2.jpg'},
    {name : 'image3', img : '3.jpg'},
    {name : 'image4', img : '4.jpg'},
    {name : 'image5', img : '5.jpg'},
    {name : 'image6', img : '6.jpg'}

];

var index=0;
var count=elements.length;
var interval;
var prev;
var settings = {
      random : true,
      duration : '2000'
};

displaySlider(index);

function Random(settings){

   interval= setInterval(()=>{
        if(settings.random){
            // random index
            do{
                index = Math.floor( Math.random() * count);
            }while(index==prev){
                prev = index;
            }
            
        }

         /* else{
         //growing index
           if(count==index+1){
                index=0;
            }
            else{
                displaySlider(index);
               index++;
            }
        }
        */
        displaySlider(index);
    },settings.duration);
};


Random(settings);

document.querySelector(".left").addEventListener("click",()=>{
    index--;
    console.log(index)
    displaySlider(index);
});

document.querySelector(".right").addEventListener("click",()=>{
    index++;
    console.log(index);
    displaySlider(index);
});

document.querySelectorAll(".arrow").forEach((item)=>{
    item.addEventListener("mouseenter",(()=>{
        clearInterval(interval);
    }))
})
document.querySelectorAll(".arrow").forEach((item)=>{
    item.addEventListener("mouseleave",(()=>{
        Random(settings);
    }))
}

)
   
function displaySlider(i){
    index = i;
    if(i<0){
        index = count-1;
    }
    if(i>=count){
        index=0;
    }
    document.querySelector('.text-muted').textContent=elements[index].name;
    document.querySelector('.image').setAttribute('src', elements[index].img);
};


