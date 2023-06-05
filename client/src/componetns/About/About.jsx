import React from 'react'
import style from './About.module.css'
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <div className={style.body}>
      <div>
             <NavLink to='/home' className={style.btn}>
              <button>Home</button>
              </NavLink>
      </div>
    </div>
  )
}
