import React from 'react'
import img1 from "../image/image1.jpg"
import img2 from "../image/image2.jpg"
import img3 from "../image/image3.png"
import img4 from "../image/image4.png"

const Article = (props) => {
  return (
<>   
    <div>
        <header>
            <h1>猫画像
            </h1>
        </header>
    </div>
            
    <main>
        <ul className = "contents">
          <li className = "animationTarget">
              <img src = {img1} alt=""/>
                 <div className="contentsText">
                     <h2>猫１</h2>
                     <p>猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫<br/>
                     猫猫猫猫猫猫猫猫猫猫
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img2} alt=""/>
                 <div className="contentsText">
                 <h2>猫２</h2>
                     <p>猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫<br/>
                     猫猫猫猫猫猫猫猫猫猫
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img3} alt=""/>
                 <div className="contentsText">
                 <h2>猫３</h2>
                     <p>猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫<br/>
                     猫猫猫猫猫猫猫猫猫猫
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img4} alt=""/>
                 <div className="contentsText">
                 <h2>猫４</h2>
                     <p>猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫<br/>
                     猫猫猫猫猫猫猫猫猫猫
                     </p>
                 </div>
          
          </li>
        </ul>


    </main>
</>
  )
}

export default Article