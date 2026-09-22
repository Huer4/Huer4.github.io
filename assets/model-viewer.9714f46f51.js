import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { STLLoader } from './vendor/STLLoader.js';
const host=document.querySelector('#geometry-viewer');
const status=document.querySelector('#model-status');
if(host){
 try{
 const scene=new THREE.Scene();scene.background=new THREE.Color('#e5eaee');
 const camera=new THREE.PerspectiveCamera(35,1,0.01,100);camera.up.set(0,0,1);
 const renderer=new THREE.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));host.appendChild(renderer.domElement);
 renderer.domElement.setAttribute('aria-label','Interactive spaceplane forebody model. Use the buttons below to rotate, zoom, or reset the view.');renderer.domElement.setAttribute('role','img');
 const controls=new OrbitControls(camera,renderer.domElement);controls.enableDamping=true;controls.minDistance=0.5;controls.maxDistance=9;controls.enablePan=true;
 scene.add(new THREE.HemisphereLight(0xffffff,0x53657b,2.6));const key=new THREE.DirectionalLight(0xffffff,3);key.position.set(2,1,4);scene.add(key);const fill=new THREE.DirectionalLight(0xb5cfff,1.8);fill.position.set(-2,-3,1);scene.add(fill);
 let mesh;
 function reset(){camera.position.set(2.3,2.7,1.8);controls.target.set(0,0,0);controls.update();}
 reset();
 function resize(){const w=host.clientWidth,h=host.clientHeight;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h);}
 new ResizeObserver(resize).observe(host);resize();
 new STLLoader().load('assets/spaceplanehead.stl',geometry=>{
 geometry.computeBoundingBox();geometry.center();geometry.computeVertexNormals();
 mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color:0x687f95,metalness:0.35,roughness:0.42,side:THREE.DoubleSide}));scene.add(mesh);status.textContent='Drag to rotate · Scroll or pinch to zoom · Right-drag to pan';
 document.querySelectorAll('[data-model-action]').forEach(b=>b.disabled=false);
 },undefined,()=>{status.textContent='The 3D preview could not load. Please refresh the page to try again.';});
 document.querySelectorAll('[data-model-action]').forEach(button=>button.addEventListener('click',()=>{
 const action=button.dataset.modelAction;
 if(action==='reset')reset();
 if(action==='left'||action==='right'){const offset=camera.position.clone().sub(controls.target);offset.applyAxisAngle(new THREE.Vector3(0,0,1),action==='left'?0.25:-0.25);camera.position.copy(controls.target).add(offset);}
 if(action==='in'||action==='out'){const offset=camera.position.clone().sub(controls.target);offset.multiplyScalar(action==='in'?0.8:1.25);offset.clampLength(controls.minDistance,controls.maxDistance);camera.position.copy(controls.target).add(offset);}
 if(action==='wireframe'&&mesh){mesh.material.wireframe=!mesh.material.wireframe;button.setAttribute('aria-pressed',String(mesh.material.wireframe));}
 controls.update();
 }));
 renderer.setAnimationLoop(()=>{controls.update();renderer.render(scene,camera);});
 }catch(error){status.textContent='Interactive 3D is unavailable in this browser. Download the STL below to view it in CAD software.';}
}
