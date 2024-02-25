import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
  // if(!isMenuOpen) return null;
  return !isMenuOpen?null: (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Nisha Singh</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
        <li>Music</li>
      </ul>
    </div>
  )
}

export default Sidebar