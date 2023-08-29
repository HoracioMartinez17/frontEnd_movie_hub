import css from './moviesForm.module.css'
import { useUserContext } from '../../context/userContext';
import { useAuth0 } from '@auth0/auth0-react';
import { useForm } from 'react-hook-form'

interface MovieCreated {
    id?: string;
    title: string;
    year: number;
    genre: string;
    language: string;
    description: string;
    image: string;
}


export const MoviesForm = () => {
    const { userData, moviesSave } = useUserContext();
    const { getAccessTokenSilently } = useAuth0();
    const form = useForm<MovieCreated>({
        defaultValues: {
            title: 'Batman',
            year: 1900,
            language: '',
            description: '',
            genre: '',
            image: '',
        },
    })
    const { register, handleSubmit, formState } = form
    const { errors } = formState;

    const onSubmit = (newMovieData: MovieCreated) => {
        console.log(newMovieData)

        try {
            moviesSave(newMovieData, getAccessTokenSilently, userData?.id ?? '');
        } catch (error) {
            console.error('Error saving movie:', error);
        }
    };

    return (
        <section className={css.container}>
            <header>ADD Movie</header>
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

                <div className={`${css.input_box} ${css.address}`} >
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
                <button type="submit">ADD Movie</button>
            </form>
        </section>
    )
}
