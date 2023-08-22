import { useEffect } from 'react';
import { Card } from '../card/Card'
import css from './main.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import { useUserContext } from '../../context/userContext';


export const Main = () => {
	const { user, getAccessTokenSilently } = useAuth0();
	const { userData, fetchUserMoviesByGenres } = useUserContext();
  
	useEffect(() => {
	  if (userData && user) {
		fetchUserMoviesByGenres(['horror', 'action', 'comedy'], getAccessTokenSilently, userData.id);
	  }

	},[userData, user]);




	return (
		<>
			{/* <section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}>Horror Movies {userData?.name}</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_1}>
					<div className={css.box1}>
						<Card movie={undefined} />
					</div>
					<div className={css.box1}>
						<Card movie={undefined} />
					</div>
					<div className={css.box1}>
						<Card movie={undefined} />
					</div>
					<div className={css.box1}>
						<Card movie={undefined} />
					</div>
				</div>
				<button type="button" className={css.loadMore} id={css.loadMore1}> Load more</button>

			</section>
			<section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}>Action Movies</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_2}>
				<div className={css.box2}>
						<Card movie={undefined} />
					</div>
					<div className={css.box2}>
						<Card movie={undefined} />
					</div>
					<div className={css.box2}>
						<Card movie={undefined} />
					</div>
					<div className={css.box2}>
						<Card movie={undefined} />
					</div>

				</div>
				<button type="button" className={css.loadMore} id={css.loadMore2}> Load more</button>

			</section>
			<section className={`${css.movies} ${css.container}`}>
				<h2 className={css.titleMovies}> Comedy Movies</h2>
				<hr className={css.hrMovies} />
				<div className={css.boxContainer_3}>
				<div className={css.box3}>
						<Card movie={undefined} />
					</div>
					<div className={css.box3}>
						<Card movie={undefined} />
					</div>
					<div className={css.box3}>
						<Card movie={undefined} />
					</div>
					<div className={css.box3}>
						<Card movie={undefined} />
					</div>

				</div>
				<button type="button" className={css.loadMore} id={css.loadMore3}> Load more</button>

			</section> */}
		</>
	)
}
