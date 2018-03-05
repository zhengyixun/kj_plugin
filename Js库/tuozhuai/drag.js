/*
* @Author: Lenovo
* @Date:   2017-08-18 17:41:27
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-21 08:53:29
*/

// function drag(obj){
// 	this.obj=obj
// }
// drag.prototype={
// 	move:function(){
// 		this.down()
// 	}
// 	down:function(){
// 		let that=this
// 		//this     指向aa
// 		this.obj.onmousedown=function(e){
// 			let a=e.offsetX,b=e.offsetY                //鼠标相对于事件源的位置
// 			document.onmousemove=function(e){
// 				//this 指向document
// 				let cx=e.clientX,cy=clientY         //鼠标相对于屏幕的位置
// 				that.obj.style.left=`${cx-a}px`     
// 				that.obj.style.top=`${cy-b}px`
// 			}
// 		}
// 		this.obj.onmouseup=function(){
// 			document.onmousemove=null
// 		}
// 	}

// }
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
		let ox = e.offsetX,oy = e.offsetY      //按下时相对于事件源的位置
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
