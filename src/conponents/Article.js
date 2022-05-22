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
            <h1>ねこ大好き</h1>
        </header>
    </div>
            
    <main>
        <ul className = "contents">
          <li className = "animationTarget">
              <img src = {img1} alt=""/>
                 <div className="contentsText">
                     <h2>猫と友達のアライグマ</h2>
                     <p>アライグマは気性が荒くて、狩る側の猟犬を逆に狩ってしまったこともあるんだって。<br/>
                     怖いね、でも友達だね。
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img2} alt=""/>
                 <div className="contentsText">
                     <h2>綺麗</h2>
                     <p>顔が世界一奇麗だね。<br/>
                     ネコ界の中でもきっとアイドル的存在なんだろうね。
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img3} alt=""/>
                 <div className="contentsText">
                     <h2>隙間大臣ねこ</h2>
                     <p>ここから先は行っちゃダメだっていうのに体ねじこんじゃうね。<br/>
                     真っ白で柔らかいおばかだね。
                     </p>
                 </div>
          </li>

          <li className = "animationTarget">
          <img src = {img4} alt=""/>
                 <div className="contentsText">
                     <h2>ネコ科の本能</h2>
                     <p>完全に獲物を仕留めた時のサバンナとかに居るネコ科だね。<br/>
                     でもちっちゃいから可愛いね。
                     </p>
                 </div>
          
          </li>
        </ul>


    </main>
</>
  )
}

export default Article