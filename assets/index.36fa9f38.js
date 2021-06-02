import*as e from"https://threejs.org/build/three.module.js";import t from"https://threejs.org/examples/jsm/libs/stats.module.js";import{CinematicCamera as n}from"https://threejs.org/examples/jsm/cameras/CinematicCamera.js";let o=new t;document.body.appendChild(o.dom);const i=new e.Vector2;document.addEventListener("mousemove",(function(e){e.preventDefault(),i.x=e.clientX/window.innerWidth*2-1,i.y=-e.clientY/window.innerHeight*2+1})),window.addEventListener("resize",(function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight)}));const s=new e.Scene,r=new n(75,window.innerWidth/window.innerHeight,1,1e3);r.setLens(15),r.position.set(2,1,500);const c=new e.WebGLRenderer({canvas:document.querySelector("#bg")});let a,l,d,m;function g(){s.add(new e.AmbientLight(16777215,.3));const t=new e.DirectionalLight(16777215,.35);t.position.set(1,1,1).normalize(),s.add(t);const n=new e.BoxGeometry(20,20,20);for(let o=0;o<1500;o++){const t=new e.Mesh(n,new e.MeshLambertMaterial({color:16777215*Math.random()}));t.position.x=800*Math.random()-400,t.position.y=800*Math.random()-400,t.position.z=800*Math.random()-400,s.add(t),s.background=new e.Color(15790320),a=0,document.getElementById("score").innerText=a,l=!1,d=!1,m=sessionStorage.getItem("showGuide"),document.getElementById("guide-text").style.display="true"==m?"inline":"none",document.getElementById("game-over-header").style.display="none",document.getElementById("start-header").style.display="inline",document.onclick=S}}c.setPixelRatio(window.devicePixelRatio),c.setSize(window.innerWidth,window.innerHeight),r.position.setZ(30),r.position.setX(-3),c.render(s,r),sessionStorage.setItem("showGuide",!0),g();let u,h,p=0;u=new e.Raycaster;let w,y,b,f=Date.now();const I={focalLength:15,fstop:22,maxblur:0,showFocus:!1,focalDepth:3};function S(){document.getElementById("score-header").style.display="inline-block",document.getElementById("start-header").style.display="none",a=0,d||(l=!0),document.onclick=null}let x,v;function M(e){return e>=150?'<img src="./icons/diamond.png" class="score-icon"></img>':e>=100?'<img src="./icons/gold.png" class="score-icon"></img>':e>=50?'<img src="./icons/silver.png" class="score-icon"></img>':e>=25?'<img src="./icons/bronze.png" class="score-icon"></img>':""}function E(){s.clear(),g()}!function(){for(const e in I)e in r.postprocessing.bokeh_uniforms&&(r.postprocessing.bokeh_uniforms[e].value=I[e]);r.postprocessing.bokeh_uniforms.znear.value=r.near,r.postprocessing.bokeh_uniforms.zfar.value=r.far,r.setLens(I.focalLength,r.frameHeight,I.fstop,r.coc),I.focalDepth=r.postprocessing.bokeh_uniforms.focalDepth.value}(),function t(){w=1e3/(Date.now()-f),f=Date.now(),y=w,requestAnimationFrame(t),o.update(),b=144/y,l&&(p+=.02*b),r.position.x=200*Math.sin(e.MathUtils.degToRad(p)),r.position.y=200*Math.sin(e.MathUtils.degToRad(p)),r.position.z=200*Math.cos(e.MathUtils.degToRad(p)),r.lookAt(s.position),u.setFromCamera(i,r);const n=u.intersectObjects(s.children);l&&(n.length>0?h!=n[0].object&&(l||h&&h.material.emissive.setHex(h.currentHex),h=n[0].object,16711680!=h.material.emissive.getHex()&&l&&(a+=1,document.getElementById("score").innerText=a),h.material.emissive.setHex(16711680)):(!function(){localStorage.getItem("cubeTotal")?(v=parseInt(localStorage.getItem("cubeTotal"),10),localStorage.setItem("cubeTotal",v+a)):localStorage.setItem("cubeTotal",a);x=localStorage.getItem("highScore"),a>x&&localStorage.setItem("highScore",a);document.getElementById("game-over-header").style.display="inline",document.getElementById("your-score").innerHTML=`Your Score: ${a} &nbsp&nbsp;&nbsp`+M(a),document.getElementById("your-high-score").innerHTML=`Your High Score:  ${localStorage.getItem("highScore")} &nbsp&nbsp;&nbsp`+M(localStorage.getItem("highScore")),document.onclick=E,sessionStorage.setItem("showGuide",!1)}(),d=!0,l=!1,document.getElementById("score").innerText=a,h=null)),r.postprocessing.enabled?r.renderCinematic(s,c):(s.overrideMaterial=null,c.clear(),c.render(s,r))}(),document.onclick=S;
