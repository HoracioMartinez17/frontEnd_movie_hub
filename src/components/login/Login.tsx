import css from './login.module.css';
import { useAuth0 } from '@auth0/auth0-react';


export const Login = () => {
    const {  loginWithRedirect } = useAuth0();


    return (
        <div className={css.my_form_container}>
            <button onClick={() => loginWithRedirect()} className={css.my_form_button}>
                Login
            </button>
        </div>
    );
};
