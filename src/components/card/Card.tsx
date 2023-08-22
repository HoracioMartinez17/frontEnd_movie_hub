import { FC } from 'react';
import css from './card.module.css';
import imgPrueba from '../../assets/img/cardImg/9.jpg';

// Definir una interfaz para las películas
interface Movie {
  id: string;
  title: string;
  year: number;
  language: string;
  description: string;
  image: string;
  userId: string;
  genres: Genre[]; // Opcionalmente, puedes tipar también los géneros si es necesario
}

// Definir una interfaz para los géneros
interface Genre {
  id: string;
  name: string;
  moviesId: string;
}

// Utilizar el componente funcional con tipo FC y proporcionar la prop 'movie'
export const Card: FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <div className={css.content}>
      <img src={imgPrueba} alt={movie.title} />
      <h3 className={css.title}>{movie.title}</h3>
      <p className={css.description}>{movie.description}</p>
    </div>
  );
};
