import React from 'react'
import "./Host.scss"

function Host() {
  return (
    <div className='hote'>
        <div className='nomPhoto'>
          <p className='nom'>Alexandre Dumas</p>
          <img src="https://www.portraitprofessionnel.fr/wp-content/uploads/2022/03/photographe_professionnel_portrait_corporate.jpg" alt="" className='img'/>
        </div>
        <div className='stars'>
            <span class="material-icons-round filled">star</span>
            <span class="material-icons-round filled">star</span>
            <span class="material-icons-round filled">star</span>
            <span class="material-icons-round">star</span>
            <span class="material-icons-round">star</span>
        </div>

    </div>
  )
}

export default Host