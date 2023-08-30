import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../../context/userContext';
import css from './userFormDelete.module.css'
import { FC } from 'react';
import { useNavigate } from "react-router-dom";
interface ModalConfirmationProps {
    onClose: () => void;
}

export const UserFormDelete: FC<ModalConfirmationProps> = ({ onClose }) => {
    const { userData, deleteUsersData } = useUserContext();
    const { getAccessTokenSilently } = useAuth0();
    const history = useNavigate();

    const handleDeleteUser = async () => {
        try {
            const response = await deleteUsersData(userData?.id ?? '', getAccessTokenSilently);
            console.log(response)
            if (response.status === 204) {
               return history("/");
            }
        } catch (error) {
            console.error('Error delete user:', error);
        }
    }


    return (
        <div className={css.modal_container_user}>
            <div className={css.modal_content_user}>
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete your account?</p>
                <div className={css.button_container_user}>
                    <button className={css.cancel_button_user} onClick={onClose}>Cancel</button>
                    <button className={css.confirm_button_user} onClick={handleDeleteUser}>Delete</button>
                </div>
            </div>
        </div>
    )
}
