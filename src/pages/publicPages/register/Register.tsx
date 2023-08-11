import css from './register.module.css'
import astronauta from '../../../assets/img/astronaut.jpg'
import email_Svg from '../../../assets/img/email.svg'
import password_Svg from '../../../assets/img/password.svg'
import {Link} from 'react-router-dom'


export const Register = () => {
    return (
        <>
            <span className={css.background}></span>
            <span className={css.centering}>
            <form className={css.my_form} action="#">
                <span className={css.register_welcome_row}>
                    {/* <img className={css.register_welcome} src={astronauta} alt="astronauta" /> */}
                    <h1 className={css.register_h1}>Register</h1>
                </span>
                <div className={css.register_input_text}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" placeholder='Username'/>
                </div>
                <div className={css.register_input_text}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Email'/>
                    <img className={css.register_welcome} src={email_Svg} alt="Email Icon" title='Email Icon'/>
                </div>
                <div className={css.register_input_text}>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" placeholder='Password'/>
                    <img className={css.register_welcome} src={password_Svg} alt="Password Icon" title='Password Icon'/>
                </div>
                    <input className={css.my_form_button} type="submit" value="Register" />
                <div className={css.my_form_actions}>
                    <div className={css.my_form_row}>
                        <span className={css.register_span}> Do you have an account?</span>
                    </div>
                    <div className={css.my_form_login}>
                        <Link to='/login'  title='Create Account'>Log-In</Link>
                    </div>
                </div>
            </form>
            </span>
        </>
    )
}