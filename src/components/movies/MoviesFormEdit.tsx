import css from './moviesForm.module.css'
import { useUserContext } from '../../context/userContext';
import { useForm } from 'react-hook-form'
import { useAuth0 } from '@auth0/auth0-react';
interface MoviesFormEditProps {
    movieId: string;
}

interface MovieCreated {
    id?: string;
    title: string;
    year: number;
    genre: string;
    language: string;
    description: string;
    image: string;
}


export const MoviesFormEdit: React.FC<MoviesFormEditProps> = ({ movieId }) => {
    const { moviesUpdate, userData } = useUserContext();
    const { getAccessTokenSilently } = useAuth0();
    // Encontrar la película específica en los datos del usuario
    const movieToEdit = userData?.movies.find(movie => movie.id === movieId);

    const form = useForm<MovieCreated>({
        defaultValues: {
            title: movieToEdit?.title || '',
            year: movieToEdit?.year || 0,
            language: movieToEdit?.language || '',
            description: movieToEdit?.description || '',
            image: movieToEdit?.image || '',
        },
    })
    const { register, handleSubmit, formState } = form
    const { errors } = formState;


    const onSubmit = async (updateMovieData: MovieCreated) => {
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
            <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={css.input_box}>
                    <label htmlFor='title'>Title</label>
                    <input {...register("title", {
                        required: {
                            value: true,
                            message: "Title is required"
                        }
                    })} placeholder="Enter full title" type="text" id='title' />
                    {<span className={css.error_input}>{errors.title?.message}</span>}
                </div>
                <div className={css.column}>
                    <div className={css.input_box}>
                        <label htmlFor='language'>Language</label>
                        <input {...register("language", {
                            required: {
                                value: true,
                                message: "Language is required"
                            }
                        })} placeholder="Enter movie language" type="text" id='language' />
                        {<span className={css.error_input}>{errors.language?.message}</span>}
                    </div>
                    <div className={css.input_box}>
                        <label htmlFor='year'> Movie Year</label>
                        <input {...register("year", {
                            required: {
                                value: true,
                                message: "Year is required"
                            }
                        })} placeholder="Enter movie year" type="number" min="1900" max="2023" id='year' />
                        {<span className={css.error_input}>{errors.year?.message}</span>}
                    </div>
                </div>
                <div className={css.gender_box}>
                    <label htmlFor='genre'>Gender</label>
                    <div className={css.gender_option}>
                        <div className={css.gender}>
                            <input {...register("genre", { required: true })} id="check-action" type="radio" value="64e6528e8c0d6c104567dc96" />
                            <label htmlFor="check-action">Action</label>
                        </div>
                        <div className={css.gender}>
                            <input {...register("genre", { required: true })} id="check-horror" type="radio" value="64e65b981c47fa8590a8fb1e" />
                            <label htmlFor="check-horror">Horror</label>
                        </div>
                        <div className={css.gender}>
                            <input {...register("genre", { required: true })} id="check-comedy" type="radio" value="64e65b8f1c47fa8590a8fb1d" />
                            <label htmlFor="check-comedy">Comedy</label>
                        </div>
                    </div>
                    {errors.genre && <span className={css.error_input}>Genre is required</span>}
                </div>

                <div className={`${css.input_box} ${css.description}`} >
                    <label htmlFor='description'>Description</label>
                    <input {...register("description", {
                        required: {
                            value: true,
                            message: "Please enter a description"
                        }
                    })} placeholder="Enter movie description" type="text" id='description' />
                    {<span className={css.error_input}>{errors.description?.message}</span>}
                    <label className={css.label_file} htmlFor="image">Choose a file:</label>
                    <input {...register("image", {
                        required: {
                            value: true,
                            message: "Please choose a file"
                        }
                    })} className={css.inpdddut} id="image" type="text" />
                    {<span className={css.error_input}>{errors.image?.message}</span>}
                </div>
                <button type="submit">Edit Movie</button>
            </form>
        </section>
    )
}
