window.onload = function () {
            var Lis = document.getElementsByTagName("li");
            for (i = 0; i < Lis.length; i++) {
                Lis[i].i = i;
                Lis[i].onmouseover = function () {
                    this.className = "lihover";

                    var h0 = (this.i - 1) * 30 + 42;
                    var y = this.getElementsByTagName("div")[0].offsetHeight;
                    var h = this.getElementsByTagName("div")[0].style.top + y;

                    if (h < h0) {
                        this.getElementsByTagName("div")[0].style.top = h0 + "px";
                    }

                    if (y > 550) {
                        this.getElementsByTagName("div")[0].style.top = "3px";
                    }
                }

                Lis[i].onmouseout = function () {
                    this.className = "";
                }
            }

var container=document.getElementById('container');
            var list=document.getElementById('list');
            var buttons=document.getElementById('buttons').getElementsByTagName('span');
            var prev=document.getElementById('prev');
            var next=document.getElementById('next');
            var index=1;
            var animated=false;
            

            function animate(offset){
                animated=true;
                var time=300;
                var interval=10;
                var speed=offset/parseInt((time/interval));
                var newLeft=parseInt(list.style.left)+offset;

                function go(){
                    if((speed<0&&parseInt(list.style.left)>newLeft) || (speed>0&&parseInt(list.style.left)<newLeft)){
                        list.style.left=parseInt(list.style.left)+speed+'px';
                        setTimeout(go,interval);
                    }else{
                        animated=false;
                        list.style.left=newLeft+'px';
                        if(newLeft>-1000){
                            list.style.left=-6000+'px';
                            }
                        if(newLeft<-6000){
                            list.style.left=-1000+'px';
                            }
                    }
                }
                go();   
            }
            function showButton(){
                for(var i=0;i<buttons.length;i++){
                    if(buttons[i].className=='on'){
                    buttons[i].className='';
                    break;
                }
                }
                buttons[index-1].className='on';
            }

            prev.onclick=function (){
                if(index==1){
                    index=5;
                }else{
                    index-=1;
                }
                showButton();
                if(!animated){
                animate(1000);
                    }
            }
            next.onclick=function (){
                if(index==5){
                    index=1;
                }else{
                    index+=1;
                }
                showButton();
                if(!animated){
                animate(-1000);
                    }
            }

            for(var i=0;i<buttons.length;i++){
                buttons[i].onclick=function (){
                    if(this.className=='on'){
                        return;
                    }
                    var myIndex=parseInt(this.getAttribute('index'));
                    var offset= -1000*(myIndex-index);
                    animate(offset);
                    index=myIndex;
                    showButton();

                }
            }


        }