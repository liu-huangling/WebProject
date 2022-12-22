let number = document.querySelectorAll('.text');
let btn = document.querySelectorAll('.btn');

let arrs = [{starnum : 0, current : 100, end : 280},
           {starnum : 0, current : 100, end : 205},
          {starnum : 0, current : 100, end : 330}];

let runTime = 10;   // 控制數字+1變化時間
let startTime = Date.now()   // 抓現在的時間，回傳的數值是豪秒/單位

let animationStart = false;   // 為了控制動畫開關

function Run(){
  
  animationStart = arrs[0].current < arrs[0].end || arrs[1].current < arrs[1].end || arrs[2].current < arrs[2].end ? true : false;
  
  let now = Date.now(); 
  
  number.forEach((item, i)=>{
    if(now > startTime + runTime * (arrs[i].current - arrs[i].starnum) && arrs[i].current < arrs[i].end ){
      arrs[i].current++;
      item.innerHTML = arrs[i].current;
    }
  })
    
  if(animationStart) requestAnimationFrame(()=>Run());  // 如果數字還沒到，就一直呼叫自己直到結束
}

function addRun(){
  arrs.forEach((item)=>{  
    item.current = item.starnum
  });
  Run();
}

$('.btn').on('click',function(){
  let bgc = document.getElementById("main-box");
  let BGclolor = getComputedStyle(bgc).backgroundColor;
  // getComputedStyle(bgc).backgroundColor 獲取背景顏色
  if(BGclolor == "rgb(12, 26, 96)"){  
    $('.box').css('color','black')
    $('.main-box').css('background-color','#FFD027')
    $(".btn > svg").css('color','#0c1a60')
  }else{
    $('.box').css('color','white')
    $('.main-box').css('background-color','#0c1a60')
    $(".btn > svg").css('color','#FFD027')
  } 
  
  addRun()
});

$(document).ready(function() {
   addRun()
});


// 參考老師 https://ithelp.ithome.com.tw/articles/10271838