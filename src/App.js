import './App.css';
import React, { useEffect,useState } from 'react';
import Article from './conponents/Article';

function App() {


  const targetElement = document.querySelectorAll(".animationTarget");
   
  const[num,setnum] = useState(0);

  useEffect( () =>{

  document.addEventListener("scroll", function(){ 
      for(let i = 0;i < targetElement.length;i++){
    const getElementDistance = targetElement[i].getBoundingClientRect().top + (targetElement[i].clientHeight * 0.6);
     
    if(window.innerHeight > getElementDistance ){
        targetElement[i].classList.add("show");
    }
    
    
 }})});

 const numAdd = () => {
   setnum(prevState => prevState + 1);
 }

 document.addEventListener("scroll", function(){ 
   numAdd();
});
 
return (
  <>  
   <Article />
   
  </> 
  );
}

export default App;
