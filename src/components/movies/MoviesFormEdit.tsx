import { ChangeEvent } from 'react'
import { useForm } from '../../hooks/useForm'
import css from './moviesForm.module.css'
import { useUserContext } from '../../context/userContext';

import { useAuth0 } from '@auth0/auth0-react';
interface MoviesFormEditProps {
    movieId: string;
  }


  export const MoviesFormEdit: React.FC<MoviesFormEditProps> = ({ movieId }) => {
    const initialValues = {
        title: '',
        year: 0,
        language: '',
        description: '',
        genre: '',
        image: '',
    };
    const {  moviesUpdate} = useUserContext();
    const { getAccessTokenSilently } = useAuth0();
    const { form, handleChange } = useForm(initialValues)



    const updateMovie = async (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const updateMovieData = form;

        try {


          // Llama a la función para actualizar la película en la base de datos
          moviesUpdate(movieId, getAccessTokenSilently, updateMovieData);
        } catch (error) {
          console.error('Error saving movie:', error);
        }
      };


    return (
        <section className={css.container}>
            <header>Edit Movie</header>
            <form className={css.form} onSubmit={updateMovie}>
                <div className={css.input_box}>
                    <label>Title</label>
                    <input name='title' required={true} placeholder="Enter full title" type="text" onChange={handleChange} />
                </div>
                <div className={css.column}>
                    <div className={css.input_box}>
                        <label>Language</label>
                        <input name='language' required={true}  placeholder="Enter movie language" type="text" onChange={handleChange} />
                    </div>
                    <div className={css.input_box}>
                        <label> Movie Year</label>
                        <input name='year' required={true}  placeholder="Enter movie year" type="number" min="1900" max="2023" onChange={handleChange} />
                    </div>
                </div>
                <div className={css.gender_box}>
                    <label>Gender</label>
                    <div className={css.gender_option}>
                        <div className={css.gender}>
                            <input name="genre" id="check-action" type="radio" value="64e6528e8c0d6c104567dc96" onChange={handleChange} />
                            <label htmlFor="check-action">Action</label>
                        </div>
                        <div className={css.gender}>
                            <input name="genre" id="check-horror" type="radio" value="64e65b981c47fa8590a8fb1e" onChange={handleChange} />
                            <label htmlFor="check-horror">Horror</label>
                        </div>
                        <div className={css.gender}>
                            <input name="genre" id="check-comedy" type="radio" value="64e65b8f1c47fa8590a8fb1d" onChange={handleChange} />
                            <label htmlFor="check-comedy">Comedy</label>
                        </div>
                    </div>
                </div>
                <div className={`${css.input_box} ${css.address}`} >
                    <label>Description</label>
                    <input name='description' required={true}  placeholder="Enter movie description" type="text" onChange={handleChange} />
                    <label className={css.label_file} htmlFor="arquivo">Choose a file:</label>
                    <input  value={form.image}  className={css.inpdddut} name="image" id="arquivo" type="text" onChange={handleChange} />
                </div>
                <button type="submit">Edit Movie</button>
            </form>
        </section>
    )
}
