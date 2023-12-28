import React, { useEffect } from 'react'
import "./home.css"
import moon from "../images/moon.jpg"
import * as THREE from 'three';
import { Typography } from '@mui/material';
import {SiHtml5,SiCss3,SiJavascript,SiReact,SiExpress,SiMongodb,SiNodedotjs} from 'react-icons/si'
const Home = () => {
    useEffect(()=>{
const scene=new THREE.Scene();
const textureloader=new THREE.TextureLoader();
const moontexture=textureloader.load(moon)
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const canvas=document.querySelector(".homecanvas")
const renderer=new THREE.WebGLRenderer({canvas})
const goemetry=new THREE.SphereGeometry(3,64,64);
const  material=new THREE.MeshStandardMaterial({map:moontexture})
const pointlight=new THREE.PointLight(0xffffff,1)
const mesh=new THREE.Mesh(goemetry,material)
pointlight.position.z=5
pointlight.position.y=-1
pointlight.position.x=-2
scene.add(mesh)
scene.add(pointlight);
camera.position.z=6;
const constspeed=0.01
window.addEventListener("mouseover",(e)=>{
if(e.clientX<=window.innerWidth/2){
  mesh.rotation.x+=constspeed
  mesh.rotation.y+=constspeed
}
if(e.clientX>=window.innerWidth/2){
  mesh.rotation.x-=constspeed
  mesh.rotation.y-=constspeed
}
if(e.clientY>=window.innerHeight/2){
  mesh.rotation.x+=constspeed
  mesh.rotation.y+=constspeed
}if(e.clientY>=window.innerHeight/2){
  mesh.rotation.x-=constspeed
  mesh.rotation.y-=constspeed
}
})
const animation3d=()=>{
requestAnimationFrame(animation3d);
mesh.rotation.y+=0.007
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.render(scene,camera)
}
animation3d();
    })
  return  (<>
  <div className="home">
        <canvas className="homecanvas" >
        </canvas>

    </div>
    <div className="homeskills">
      <Typography variant="h1">Skills</Typography>
      <div className="homecubeskills">
         <div className="homecubedivfaces homecubeskillfaced1">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div> <div className="homecubedivfaces homecubeskillfaced2">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div> <div className="homecubedivfaces homecubeskillfaced3">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div> <div className="homecubedivfaces homecubeskillfaced4">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div> <div className="homecubedivfaces homecubeskillfaced5">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div> <div className="homecubedivfaces homecubeskillfaced6">
          <img src="https://th.bing.com/th/id/OIG.ey_KYrwhZnirAkSgDhmg" alt="" />
        </div>
        
      </div>
      <div className="cubeshadow"></div>
      <div className="homeskillbox">
        <SiCss3/>
        <SiExpress/>
        <SiHtml5/>
        <SiJavascript/>
        <SiNodedotjs/>
        <SiMongodb/>
        <SiReact/>
      </div>
      
    </div>
    
    </>
    
  )
}

export default Home