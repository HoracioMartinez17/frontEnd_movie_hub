import css from './header.module.css'
import { Link } from 'react-router-dom'
import venom from '../../assets/img/venom.png'
// import play from '../../assets/img/play.png'
import menu from '../../assets/img/menu.png'
import {useAuth0} from '@auth0/auth0-react'
import {useState} from 'react'


export const Header = () => {
  const {logout} = useAuth0()
  const {user} = useAuth0()
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  return (
    <header className={css.header}>
      <div className={`${css.menu} ${css.container}`}>
        <Link className={css.logo} to='/' >Logo</Link>
        <input type="checkbox" id={css.menu} />
        <label htmlFor={css.menu}>
        <img className={css.menu_icon} src={menu} alt="menu" />
        </label>
        <nav className={`${css.navbar} ${css.container}`}>
          <ul className={css.navList}>
            <li className={css.navItem}><Link to='/'>home</Link></li>
            <li className={css.navItem}><Link to='/about'>About</Link></li>
            <li className={css.navItem}><Link to='/contact'>Contact</Link></li>
            <li className={css.navItem}><button className={css.btn1} onClick={():Promise<void> =>logout()} >log out</button></li>
          </ul>
        </nav>
      </div>
      <div className={`${css.header_content} ${css.container}`}>
        <div className={css.header1}>
          <img src={venom} alt="logo" />
          <Link className={css.btn2} to='/' >watch now</Link>
        </div>
        <div className={css.header2}>
          <h1>The best <hr /> Movies </h1>
          {/* <img src={play} alt="btn_play" /> */}
        </div>
      </div>
    </header>
  )
}
