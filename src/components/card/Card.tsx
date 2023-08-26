import imgPrueba from '../../assets/img/cardImg/9.jpg';
import React from 'react';
import css from './card.module.css';

interface Movie {
  id: string;
  title: string;
  year: number;
  language: string;
  description: string;
  image: string;
  userId: string;
  genres: Genre[]; 
}


interface Genre {
  id: string;
  name: string;
  moviesId: string;
}


interface CardProps {
  movie: Partial<Movie>; // Usamos Partial para permitir que las propiedades sean opcionales
}


export const Card: React.FC<CardProps> = ({ movie }) => {
  return (
    <div className={css.card}>
  <img className={css.card_img} src={movie.image} alt="card img" />
  <div className={css.descriptions}>
    <h1>{movie.title}</h1>
    <p>{movie.description}</p>
    <p>Language: {movie.language}</p>
    <p>Year: {movie.year}</p>
  </div>
</div>

  );
};
