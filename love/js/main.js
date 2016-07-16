window.onload=function(){
	var obtn=document.getElementById('top');
	var timer=null;
	var isTop=true;

	window.onscroll=function(){
		if(!isTop){
			clearInterval(timer);
		}
		isTop=false;
	}

	obtn.onclick=function(){
		timer=setInterval(function(){
		var osTop=document.documentElement.scrollTop || document.body.scrollTop;
		var isspeed=Math.floor(-osTop/6);
		document.documentElement.scrollTop=document.body.scrollTop =osTop+isspeed;
		isTop=true;
		if(osTop==0){
			clearInterval(timer);
		}

		},50);
		
		


	}
}