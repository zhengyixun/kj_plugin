/*
* @Author: Lenovo
* @Date:   2017-08-17 16:03:41
* @Last Modified by:   Lenovo
* @Last Modified time: 2017-08-19 14:39:35
*/
window.onload=function(){

	///////////////////////////////图片的按需加载////////////////////////////////////////////////////
	let ch=window.innerHeight             //获取浏览器高度
	let floor=document.querySelectorAll('.floor')     //获取ul
	let a=document.querySelector('.sli')
	let sli=a.querySelectorAll('li')              //获取侧边栏li

	let serach=document.querySelector('.serach')       //获取搜索框
	let Sflag=true
	let totop=document.querySelector('.totop')

	let nth=0
	let posArr=[]                                 //用来存放ul 距离
	floor.forEach(element=>{                          //遍历ul 放到数组中
		posArr.push(element.offsetTop)	              // body超出浏览器的距离
	})
//固定定位的侧边栏
	sli.forEach(function(element,index){               //遍历li
		element.onclick=function(){
			animate(document.body,{scrollTop:posArr[index]})      //scroll没有延迟，只能用动画
			           //动画体     移动的距离        
		} 
	})

window.onscroll=function(){              //滚动事件
	let st=document.body.scrollTop      //body到浏览器制左上角的距离         
	posArr.forEach((element,index)=>{       //遍历获取到的ul的位置*遍历posArr
		if(ch+st>element+300){	            //如果浏览器高度+滚动条距离>ul的位置

			sli[nth].classList.remove('active')        //右侧页码随滚动条移动显示不同位置
			sli[index].classList.add('active')
			nth=index

			let imgs=floor[index].getElementsByTagName('img') //获取img
			for(let i=0;i<imgs.length;i++){
				imgs[i].src=imgs[i].getAttribute('imgPath')   //返回指定属性的属性值
			}
		}
	})
	////搜索框
	if(st>500){
		if(Sflag){
			Sflag=false
			animate(serach,{top:0})  //搜索框
			animate(a,{left:10})   //侧边栏
			animate(totop,{right:10})   //回到顶部
		}
	}else{
		if(!Sflag){
			Sflag=true
			animate(serach,{top:-50})
			animate(a,{left:-70})
			animate(totop,{right:-90})
		}
	}
	totop.onclick=function(){
		animate(document.body,{scrollTop:0})
	}	

}
}



/*
	获取 querySelectorAll()
		//nodelist      foreach
		document.gerElementsByTagName('')	

使集合拥有forEach属性
	冒充	Array.prototype.forEach.call(div.function(element,index,obj){ })
	直接把集合转化成数组	Array.from() //能够遍历的，类似于数组结构的






楼层跳转
		获取侧边栏  sli querySelectorAll
		添加下标 nth=0
		
		if里边
		nth remove 一个类
		sli[index]添加一个类
		nth=index


	    点击
	    sli.foreach（function(){   
	       element.onclick=function(){   animate()   }}  
	    

 */


/*
       搜索框
       滚动事件里边  （加开关true）
       if滑动距离大于500
       animate（serach,{top；50}）


 */