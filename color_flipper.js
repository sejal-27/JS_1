const color=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn=document.getElementById('btn');

btn.addEventListener('click',function(){
    let colorcode="#";
    for(let i=0;i<6;i++)
    {
        colorcode+=color[getRandomnumber()];
    }
    document.body.style.backgroundColor=colorcode;
    document.getElementById('color_name').innerHTML=colorcode;
});

function getRandomnumber()
{
    return Math.floor(Math.random()*color.length);
}

