import React from 'react'
import style from './Landing.module.css'
import { NavLink } from "react-router-dom";



export default function Landing() {
  return (
    <div className={style.body}>
        <div>    
            <NavLink to='/home'>
            <button className={style.Classparpadeo}>Entrar</button>
            </NavLink>
        </div>
    </div>
  )
}
