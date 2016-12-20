process.argv.shift()
process.argv.shift()
//console.log(process.argv[0])
var s = parseInt(process.argv[0])
if (process.argv[0].indexOf("m")!==-1){
	s*=60
}
//console.log(s)
setInterval(function(){
	s--
	console.log("Left: "+s.toString()+"s")
}, 1000)