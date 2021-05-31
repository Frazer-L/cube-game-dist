import*as e from"https://threejs.org/build/three.module.js";import t from"https://threejs.org/examples/jsm/libs/stats.module.js";import{CinematicCamera as n}from"https://threejs.org/examples/jsm/cameras/CinematicCamera.js";let o=new t;document.body.appendChild(o.dom);const i=new e.Vector2;document.addEventListener("mousemove",(function(e){e.preventDefault(),i.x=e.clientX/window.innerWidth*2-1,i.y=-e.clientY/window.innerHeight*2+1})),window.addEventListener("resize",(function(){r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),a.setSize(window.innerWidth,window.innerHeight)}));const s=new e.Scene,r=new n(75,window.innerWidth/window.innerHeight,1,1e3);r.setLens(15),r.position.set(2,1,500);const a=new e.WebGLRenderer({canvas:document.querySelector("#bg")});a.setPixelRatio(window.devicePixelRatio),a.setSize(window.innerWidth,window.innerHeight),r.position.setZ(30),r.position.setX(-3),a.render(s,r),s.add(new e.AmbientLight(16777215,.3));const d=new e.DirectionalLight(16777215,.35);d.position.set(1,1,1).normalize(),s.add(d);const c=new e.BoxGeometry(20,20,20);for(let M=0;M<1500;M++){const t=new e.Mesh(c,new e.MeshLambertMaterial({color:16777215*Math.random()}));t.position.x=800*Math.random()-400,t.position.y=800*Math.random()-400,t.position.z=800*Math.random()-400,s.add(t)}s.background=new e.Color(15790320);let l,m,h=0;l=new e.Raycaster;let p,u,w,g=0,f=!1,y=!1,b=Date.now();const x={focalLength:15,fstop:22,maxblur:0,showFocus:!1,focalDepth:3};function v(){return location.reload(),!1}!function(){for(const e in x)e in r.postprocessing.bokeh_uniforms&&(r.postprocessing.bokeh_uniforms[e].value=x[e]);r.postprocessing.bokeh_uniforms.znear.value=r.near,r.postprocessing.bokeh_uniforms.zfar.value=r.far,r.setLens(x.focalLength,r.frameHeight,x.fstop,r.coc),x.focalDepth=r.postprocessing.bokeh_uniforms.focalDepth.value}(),function t(){p=1e3/(Date.now()-b),b=Date.now(),u=p,requestAnimationFrame(t),o.update(),w=144/u,f&&(h+=.02*w),r.position.x=200*Math.sin(e.MathUtils.degToRad(h)),r.position.y=200*Math.sin(e.MathUtils.degToRad(h)),r.position.z=200*Math.cos(e.MathUtils.degToRad(h)),r.lookAt(s.position),l.setFromCamera(i,r);const n=l.intersectObjects(s.children);f&&(n.length>0?m!=n[0].object&&(f||m&&m.material.emissive.setHex(m.currentHex),m=n[0].object,16711680!=m.material.emissive.getHex()&&f&&(g+=1,document.getElementById("score").innerText=g),m.material.emissive.setHex(16711680)):(document.getElementById("game-over-header").style.display="inline",document.getElementById("your-score").innerText=`Your Score:  ${g}`,document.onclick=v,y=!0,f=!1,document.getElementById("score").innerText=g,m=null)),r.postprocessing.enabled?r.renderCinematic(s,a):(s.overrideMaterial=null,a.clear(),a.render(s,r))}(),document.onclick=function(){document.getElementById("score-header").style.display="inline-block",document.getElementById("start-header").style.display="none",g=0,y||(f=!0)};
