import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All","Live","Gamming","Hello"];
  return (
    <div className='flex'>
      {
        list.map((button)=>(
          <Button key={button} name={button}/>
        ))
      }
    </div>
  )
}

export default ButtonList