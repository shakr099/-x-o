
let vbn = document.querySelector('.vbn')
let sterd =[];
function end(num1,num2,num3)
{
    vbn.innerHTML = ' النصر ';
    document.getElementById('item'+num1).style.background = '#000';
    document.getElementById('item'+num2).style.background = '#000';
    document.getElementById('item'+num3).style.background = '#000';
 
     setInterval(function(){vbn.innerHTML += '.'},1000 );
     setTimeout(function(){location.reload()},4000)
}
function wite(){
    for(let i =1; i<10;i++){
     sterd[i] =  document.getElementById("item"+i).innerHTML;
    }
  if(sterd[1] == sterd[2] && sterd[2] == sterd[3] && sterd[1] !='')
  {
    end(1,2,3);
  }
  else  if(sterd[4] == sterd[5] && sterd[5] == sterd[6] && sterd[5] !='')
  {end(4,5,6);
   
  }
  else  if(sterd[7] == sterd[8] && sterd[8] == sterd[9] && sterd[8] !='')
  {
    end(7,8,9 );
  }

  if(sterd[1] == sterd[4] && sterd[4] == sterd[7] && sterd[1] !='')
  {
    end(1,4,7);
  }
  else  if(sterd[2] == sterd[5] && sterd[5] == sterd[8] && sterd[5] !='')
  {
    end(2,5,8);
  }
  else  if(sterd[3] == sterd[6] && sterd[6] == sterd[9] && sterd[6] !='')
  {
    end(3,6,9);
  }
  else  if(sterd[1] == sterd[5] && sterd[5] == sterd[9] && sterd[5] !='')
  {
    end(1,5,9)
  }
  else  if(sterd[3] == sterd[5] && sterd[5] == sterd[7] && sterd[5] !='')
  {
    end(3,5,7)
  }
}
let turn ='x';
function gaim(id)
{
    let element = document.getElementById(id);
    if(turn ==='x' && element.innerHTML=='')
    {
        element.innerHTML ='x';
        turn ='o';
        vbn.innerHTML = 'o';
    }
    else if(turn === 'o' && element.innerHTML==''){
        element.innerHTML ='o';
        turn ='x';
        vbn.innerHTML = 'x';
    }
    wite();
}


