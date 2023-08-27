import css from './header.module.css'
import { Link } from 'react-router-dom'
import venom from '../../assets/img/venom.png'
// import play from '../../assets/img/play.png'
import menu from '../../assets/img/menu.png'
import { useAuth0 } from '@auth0/auth0-react'
import Modal from '../modal/Modal'
import { MoviesForm } from '../movies/MoviesForm'
import { useModal } from '../../hooks/useModal';
import ButtonComponent from '../button/ButtonComponent'


export const Header = () => {
  const { logout } = useAuth0()
  const [isOpenModal1, openModal1, closeModal1] = useModal(false)

  return (
    <>
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <MoviesForm />
      </Modal>
      <header className={css.header}>
        <div className={`${css.menu} ${css.container}`}>
          <Link className={css.logo} to='/' >Logo</Link>
          <input type="checkbox" id={css.menu} />
          <label htmlFor={css.menu}>
            <img className={css.menu_icon} src={menu} alt="menu" />
          </label>
          <nav className={`${css.navbar} ${css.container}`}>
            <ul className={css.navList}>
              <li className={css.navItem}>
                <ButtonComponent onClick={openModal1}button_hover="button_hover_red" backgroundColor="greenBackground"
                  textSize="largeText" className={css.buttonClasses}>
                  <span className={css.button_span_addMovie}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                        fill="currentColor"
                        d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                    ></path>
                </svg>
                add movie
            </span>
                </ButtonComponent>
              </li>
              <li className={css.navItem}><Link to='/about'>About</Link></li>
              <li className={css.navItem}><Link to='/contact'>Contact</Link></li>
              <li className={css.navItem}><button className={css.btn1} onClick={(): Promise<void> => logout()} >log out</button></li>
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
    </>

  )
}
