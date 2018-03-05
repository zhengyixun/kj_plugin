/*
* @Author: ³ó°Ë¹Ö
* @Date:   2017-08-18 18:03:49
* @Last Modified by:   丑八怪
* @Last Modified time: 2017-08-18 18:17:46
*/
function drag(obj){
 this.obj = obj
}
drag.prototype ={
	move:function(){
		this.down()
	},
	down:function(){
		let that = this
		this.obj.onmousedown = function(e){
		let ox = e.offsetX,oy = e.offsetY
		document.onmousemove =function(e){
			let cx = e.clientX,cy = e.clientY
			that.obj.style.left = cx-ox+'px';
			that.obj.style.top = cy-ox+'px';
		}
	}
	this.obj.onmouseup = ()=>{
		document.onmousemove = null
	}
	}
}