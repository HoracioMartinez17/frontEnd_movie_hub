import '../../styles/sass/_main.scss'
import '../../styles/sass/_btn.scss'
import '../../styles/sass/_generales.scss'
import '../../styles/sass/_media.scss'
import '../../styles/sass/_sidebar.scss'
import '../../styles/sass/_variables.scss'
import '../../styles/sass/index.scss'
import imgPrueba  from '../../assets/img/9.jpg'

export const Main = () => {
  return (
    <>
    	<div className="contenedor">
			<aside className="sidebar">
				<div className="sidebar__logo">
					<img className="sidebar__logo-imagen" src="./img/logo.png" alt="" />
				</div>

				<div className="sidebar__generos">
					<h3 className="sidebar__titulo">Genders</h3>
					<div className="sidebar__contenedor-generos" id="filtro-generos">
						 <button className="btn">Actión</button>
						<button className="btn">Adventure</button>
						<button className="btn">Sci-fi</button>
						<button className="btn">Comedy</button>
						<button className="btn">Fantasy</button>
						<button className="btn">Musical</button>
					</div>
				</div>

				<div className="sidebar__años">
					<h3 className="sidebar__titulo">Years</h3>
					<div className="sidebar__contenedor-inputs">
						<input
							className="sidebar__input"
							id="años-min"
							type="number"
							min="1950"
							max="2022"
							// maxlength="4"
							placeholder="1950"
						/>
						<span> - </span>
						<input
							className="sidebar__input"
							id="años-max"
							type="number"
							min="1950"
							max="2022"
							value="2022"
							// maxlength="4"
							placeholder="2022"
						/>
					</div>
				</div>

				<div className="sidebar__buscar" id="btn-buscar">
					<button className="btn btn--100 btn--rojo">Search</button>
				</div>
			</aside>

			<main className="main">
				<div className="main__filtros">
					<button className="btn btn--active" id="movie">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="btn__icono"
							viewBox="0 0 16 16"
						>
							<path
								d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm4 0v6h8V1H4zm8 8H4v6h8V9zM1 1v2h2V1H1zm2 3H1v2h2V4zM1 7v2h2V7H1zm2 3H1v2h2v-2zm-2 3v2h2v-2H1zM15 1h-2v2h2V1zm-2 3v2h2V4h-2zm2 3h-2v2h2V7zm-2 3v2h2v-2h-2zm2 3h-2v2h2v-2z"
							/>
						</svg>
						Movies
					</button>
					<button className="btn" id="tv">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="btn__icono"
							viewBox="0 0 16 16"
						>
							<path
								d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"
							/>
						</svg>
						Series
					</button>
				</div>

				<div className="main__populares" id="populares" data-pagina="1">
					<h2 className="main__titulo">POPULAR MOVIES</h2>
					<div className="main__grid">
						 <div className="main__media">
							<a href="#" className="main__media-thumb">
								<img className="main__media-img" src={imgPrueba}alt="" />
							</a>
							<p className="main__media-titulo">The boys</p>
							<p className="main__media-fecha">2021</p>
						</div> 
						 <div className="main__media">
							<a href="#" className="main__media-thumb">
								<img className="main__media-img" src={imgPrueba}alt="" />
							</a>
							<p className="main__media-titulo">The boys</p>
							<p className="main__media-fecha">2021</p>
						</div> 
						 <div className="main__media">
							<a href="#" className="main__media-thumb">
								<img className="main__media-img" src={imgPrueba}alt="" />
							</a>
							<p className="main__media-titulo">The boys</p>
							<p className="main__media-fecha">2021</p>
						</div> 
						 <div className="main__media">
							<a href="#" className="main__media-thumb">
								<img className="main__media-img" src={imgPrueba}alt="" />
							</a>
							<p className="main__media-titulo">The boys</p>
							<p className="main__media-fecha">2021</p>
						</div> 
						 <div className="main__media">
							<a href="#" className="main__media-thumb">
								<img className="main__media-img" src={imgPrueba}alt="" />
							</a>
							<p className="main__media-titulo">The boys</p>
							<p className="main__media-fecha">2021</p>
						</div> 
					</div>
				</div>

				<div className="main__paginacion">
					<button className="btn" id="pagina-anterior">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="btn__icono"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
							/>
						</svg>
						PREVIOUS
					</button>
					<button className="btn" id="pagina-siguiente">
						NEXT
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="btn__icono"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
							/>
						</svg>
					</button>
				</div>
			</main>

			<section className="media" id="media">
				<div className="media__contenedor">
					{/* <!-- <div className="media__backdrop">
						<img
							src="https://image.tmdb.org/t/p/w500//jsoz1HlxczSuTx0mDl2h0lxy36l.jpg"
							className="media__backdrop-image"
						/>
					</div>
					<div className="media__imagen">
						<img
							src="https://image.tmdb.org/t/p/w500//4GVIfQVABjKuAWy3fvidPJZE52t.jpg"
							className="media__poster"
						/>
					</div>
					<div className="media__info">
						<h1 className="media__titulo">Titulo</h1>
						<p className="media__fecha">2022</p>
						<p className="media__overview">Lorem ipsum dolor sit amet.</p>
					</div>
					<button className="media__btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							viewBox="0 0 16 16"
							className="media__btn-icono"
						>
							<path
								d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
							/>
						</svg>
					</button> --> */}
				</div>
			</section>
		</div>
    </>
  )
}
