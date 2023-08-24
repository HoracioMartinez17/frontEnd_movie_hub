import css from './moviesForm.module.css'

export const MoviesForm = () => {
    return (
        <section className={css.container}>
            <header>Movie Add</header>
            <form className={css.form} action="#">
                <div className={css.input_box}>
                    <label>Title</label>
                    <input required={true} placeholder="Enter full title" type="text" />
                </div>
                <div className={css.column}>
                    <div className={css.input_box}>
                        <label>Language</label>
                        <input required={true} placeholder="Enter movie language" type="text" />
                    </div>
                    <div className={css.input_box}>
                        <label> Movie Year</label>
                        <input required={true} placeholder="Enter movie year" type="number" min="1900" max="2023" />
                    </div>
                </div>
                <div className={css.gender_box}>
                    <label>Gender</label>
                    <div className={css.gender_option}>
                        <div className={css.gender}>
                            <input name="gender" id="check-action" type="radio" />
                            <label htmlFor="check-action">Action</label>
                        </div>
                        <div className={css.gender}>
                            <input name="gender" id="check-horror" type="radio" />
                            <label htmlFor="check-horror">Horror</label>
                        </div>
                        <div className={css.gender}>
                            <input name="gender" id="check-comedy" type="radio" />
                            <label htmlFor="check-comedy">Comedy</label>
                        </div>
                    </div>

                </div>
                <div className={`${css.input_box} ${css.address}`} >
                    <label>Description</label>
                    <input required={true} placeholder="Enter movie description" type="text" />
                        <label className={css.label_file} htmlFor="arquivo">Choose a file:</label>
                        <input accept=".jpg, .jpeg, .png, .gif, .pdf" className={css.inpdddut} name="arquivo" id="arquivo" type="file"/>
                    </div>
                <button type="submit">Add movie</button>
            </form>
        </section>
    )
}
