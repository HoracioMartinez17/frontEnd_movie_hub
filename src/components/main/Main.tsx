import { useEffect } from 'react';
import { Card } from '../card/Card'
import css from './main.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../../context/userContext';



export const Main = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { userData,allMovies, movies,movieUpdate,moviesDelete, fetchUserMoviesByGenres } = useUserContext();
	const { horror, action, comedy } = allMovies?.allMovies || {};

	useEffect(() => {
	  if (userData && user) {
		fetchUserMoviesByGenres(['horror', 'action', 'comedy'], getAccessTokenSilently, userData.id);

	}

	},[userData, user, movies,movieUpdate,moviesDelete]);



	return (
		<>
			<section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}>Horror Movies</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_1}>
				{horror?.map((movie) => (
                        <div key={movie.id} className={css.box1}>
                            <Card movie={movie} />
                        </div>
                    ))}
				</div>
				<button type="button" className={css.loadMore} id={css.loadMore1}> Load more</button>

			</section>
			<section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}>Action Movies</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_2}>
				{action?.map((movie) => (
                        <div key={movie.id} className={css.box2}>
                            <Card movie={movie} />
                        </div>
                    ))}
				</div>
				<button type="button" className={css.loadMore} id={css.loadMore2}> Load more</button>

			</section>
			<section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}> Comedy Movies</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_3}>
				{comedy?.map((movie) => (
                        <div key={movie.id} className={css.box3}>
                            <Card movie={movie} />
                        </div>
                    ))}
				</div>
				<button type="button" className={css.loadMore} id={css.loadMore3}> Load more</button>

			</section>
		</>
	)
}
