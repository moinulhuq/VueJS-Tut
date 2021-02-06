var  vm = new Vue({
   el: '#msg',
   data: {
      msgbody: 'Hello World'
   },
   methods: {
	   	msgbodyfunc: function(){
	   		return this.msgbody;
		}   
	}
})
