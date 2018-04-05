var percent = 0

var timer = setInterval(function(){
  $(".bar").css("width",percent+"%")
  percent+=1
  if(percent>100){
    $(".pageLoading").hide()
    $(".board").css("opacity","1")
    clearInterval(timer)
  }
},15)