window.onload=function(){
      // e.preventDefault();
var text=document.getElementById('textarea');
var spas=document.getElementById('spa');
var buttombox=document.getElementById('bot-box');

var kaiguan=true;
text.onclick=function(){
	var fabu1=buttombox.firstElementChild;
    var div=document.createElement('div');
      div.setAttribute('class','fabu');
      buttombox.insertBefore(div,fabu1);
      div.innerHTML=re;
}
text.onclick=function(){
   if(kaiguan){
	this.value='';kaiguan=false;
   }
}
spas.innerHTML='126';
var dd=document.getElementsByClassName('top-right')[0];
text.onkeyup=function(){
var chaochu=document.getElementById('shurukuang');
console.log(chaochu);
var length=text.value.length;
var zishu=126-length;
	if(length>-1){
		but.style.background='rgba(237,59,3,1)';
   }
   var aa=spas.innerHTML=126-length;
   if(aa=='126'){
		but.style.background='rgba(237,59,3,0.3)';
   }
   if(length>126){
   	  chaochu.innerHTML='已超出';
      aa=spas.innerHTML=Math.abs(126-length);
   }
   if(length<126){
   	  chaochu.innerHTML='还可以输入';
   }
};
// var text.onkeydown=textfn;
// var text.onkeyup=textfn;
var but=document.getElementById('but');
var fabu=document.getElementsByClassName('fabu');	
but.onclick=function(){
	var fabu1=buttombox.firstElementChild;
    var div=document.createElement('div');
      div.setAttribute('class','fabu');
      buttombox.insertBefore(div,fabu1);
      div.style.marginBottom='30px';
      div.innerHTML='<div class="img-box"><img src="images/01.jpg"></div><div class="name">一毛不拔大师@王小琪</div><div class="neirong">'+text.value+'</div><div class="text"><div class="dwer">收藏</div><div class="dwer">转发</div><div class="dwer">评论</div><div class="dianzan">赞</div></div>'
      textarea.value='';
      spas.innerHTML='126';
	  but.style.background='rgba(237,59,3,0.6)';
}
buttombox.onclick=function(e){
	var el=e.target;
	if(el.getAttribute('class')!='dianzan'){
		return
	}
	    if(!el.hasAttribute('data')){
	    	var span=document.createElement('span');
            span.innerHTML='1';
            el.setAttribute('data',1);
            el.appendChild(span);
	    }else{
	    	var data=Number(el.getAttribute('data'));
	    	el.innerHTML='赞<span>'+(data+1)+'</span>';
	    	el.setAttribute('data',data+1);
	    }
};
buttombox.onmousedown=function(e){
      e.preventDefault();

}
but.onmousedown=function(e){
   e.preventDefault();
}






var dingbu=document.getElementById('dingbu');
dingbu.onclick=function(){
	var val=document.body.scrollTop;
	var cha=0-val;
	var aa=val;
	move=function(){
		var chazhi=Math.abs(cha/30)
		document.body.scrollTop=aa;
		aa-=chazhi;
	    document.body.scrollTop=aa;
	    if(aa<=0){
	    	clearInterval(dd);
	    }
	}
	var dd=setInterval(move,30)
};



















};