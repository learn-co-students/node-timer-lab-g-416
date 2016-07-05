var arg = process.argv;

function grabTime(rate){
  var duration = parseInt(rate.split(/(\d+)|(\D+)/)[1], 10);
  var unit = rate.split(/(\d+)|(\D+)/)[5];
  var end = new Date();
  var now = Date.parse(new Date());
  if(unit === 'min'){
    end.setTime(now + (duration * (1000*60)));
  }else if(unit === 's'){
    end.setTime(now + (duration * 1000));
  };
  var time_left = (end - now)/1000;

  return{
    't': time_left,
    'unit': unit
  };
}
  //console.log(now)
  //console.log(end)
  //console.log(now +"_"+ end);
function timer(rate){
  var t = grabTime(rate)
  var seconds = t.t;

  function update(){
    seconds -= 1
    //console.log(t);
    console.log('Left: '+ seconds + 's');
    if (seconds <= 0) {
      console.log('TIME IS UP!')
      clearInterval(countdown)
      process.exit()
  }
}
update();
  var countdown = setInterval(update, 1000);
}

//console.log(arg[2])
timer(arg[2])
