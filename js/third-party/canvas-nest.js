!function(){if("false"!=document.getElementById("canvas_nest").getAttribute("mobile")||!/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){var d,u,e,n=document.createElement("canvas"),l=(e=(t=h("script")).length,t=t[e-1],{l:e,z:f(t,"zIndex",-1),o:f(t,"opacity",.5),c:f(t,"color","0,0,0"),n:f(t,"count",99)}),t="c_n"+l.l,m=n.getContext("2d"),r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/45)},i=Math.random,x={x:null,y:null,max:2e4};n.id=t,n.style.cssText="position:fixed;top:0;left:0;z-index:"+l.z+";opacity:"+l.o,h("body")[0].appendChild(n),g(),window.onresize=g,window.onmousemove=function(e){e=e||window.event,x.x=e.clientX,x.y=e.clientY},window.onmouseout=function(){x.x=null,x.y=null};for(var s=[],o=0;l.n>o;o++){var a=i()*d,c=i()*u,w=2*i()-1,y=2*i()-1;s.push({x:a,y:c,xa:w,ya:y,max:6e3})}setTimeout(function(){b()},100)}function f(e,n,t){return e.getAttribute(n)||t}function h(e){return document.getElementsByTagName(e)}function g(){d=n.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,u=n.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}function b(){m.clearRect(0,0,d,u);var n,t,i,o,a,c=[x].concat(s);s.forEach(function(e){for(e.x+=e.xa,e.y+=e.ya,e.xa*=e.x>d||e.x<0?-1:1,e.ya*=e.y>u||e.y<0?-1:1,m.fillRect(e.x-.5,e.y-.5,1,1),t=0;t<c.length;t++)e!==(n=c[t])&&null!==n.x&&null!==n.y&&(i=e.x-n.x,o=e.y-n.y,(a=i*i+o*o)<n.max&&(n===x&&a>=n.max/2&&(e.x-=.03*i,e.y-=.03*o),a=(n.max-a)/n.max,m.beginPath(),m.lineWidth=a/2,m.strokeStyle="rgba("+l.c+","+(.2+a)+")",m.moveTo(e.x,e.y),m.lineTo(n.x,n.y),m.stroke()));c.splice(c.indexOf(e),1)}),r(b)}}();