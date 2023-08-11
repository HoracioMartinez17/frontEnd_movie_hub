import css from './header.module.css'
import { Link } from 'react-router-dom'
import venom from '../../assets/img/venom.png'
// import play from '../../assets/img/play.png'
import menu from '../../assets/img/menu.png'

export const Header = () => {
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
            <li className={css.navItem}><Link to='/'>Home</Link></li>
            <li className={css.navItem}><Link to='/about'>About</Link></li>
            <li className={css.navItem}><Link to='/contact'>Contact</Link></li>
          </ul>
          <Link className={css.btn1} to='/' >log out</Link>
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
