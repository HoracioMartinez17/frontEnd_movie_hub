import css from './login.module.css'
import astronauta from '../../../assets/img/astronaut.jpg'
import email_Svg from '../../../assets/img/email.svg'
import password_Svg from '../../../assets/img/password.svg'
import {Link} from 'react-router-dom'



export const Login = () => {
    return (
        <>
            <span className={css.background}></span>
            <span className={css.centering}>
            <form className={css.my_form} action="#">
                <span className={css.login_welcome_row}>
                    {/* <img className={css.login_welcome} src={astronauta} alt="astronauta" /> */}
                    <h1 className={css.login_h1}>Login</h1>
                </span>
                <div className={css.login_input_text}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder='Username'/>
                </div>
                <div className={css.login_input_text}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <img className={css.login_welcome} src={email_Svg} alt="Email Icon" title='Email Icon'/>
                </div>
                <div className={css.login_input_text}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password'/>
                    <img className={css.login_welcome} src={password_Svg} alt="Password Icon" title='Password Icon'/>
                </div>
                  <Link to='/home'> <input className={css.my_form_button} type="submit" value="Login" /> </Link>
                <div className={css.my_form_actions}>
                    <div className={css.my_form_row}>
                        <span className={css.login_span}> Did you forget your password?</span>
                        <a className={css.login_span} href="#" title='Reset Password'> Reset password</a>
                    </div>
                    <div className={css.my_form_signup}>
                        <Link to= '/register' title='Create Account'>Create Account</Link>
                    </div>
                </div>
            </form>
            </span>
        </>
    )
}
