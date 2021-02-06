var Obj = { fstr: "Hello", lstr: "World"}

var vm = new Vue({
	   el: '#msg',
	   data: {
	      msgbody: Obj
	   }, 
})
