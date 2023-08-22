import css from './footer.module.css';
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className={`${css.footer} ${css.container}`}>
            <h3> Cine Max</h3>
            <ul>
                <li>
                <Link className={css.socials} to='/' >Instagram</Link>
                <Link className={css.socials} to='/' >Github</Link>
                <Link className={css.socials} to='/' >Linkedin</Link>
                </li>
            </ul>
            <p>© 2021 Cine Max</p>
        </footer>
    )
}
