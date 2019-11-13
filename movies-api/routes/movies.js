const express = require('express');
const MoviesService = require('../services/movies');
const passport = require('passport');

const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//JWT Strategy
require('../utils/auth/strategies/jwt');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);
  const moviesService = new MoviesService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async function(req, res, next) {
      const { tags } = req.query;
      try {
        const movies = await moviesService.getMovies({ tags });
        res.status(200).json({
          data: movies,
          message: 'movies listed'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.get(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:movies']),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const movies = await moviesService.getMovie({ movieId });
        res.status(200).json({
          data: movies,
          message: 'movie retrieved'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:movies']),
    async function(req, res, next) {
      const { body: movie } = req;
      try {
        const createMovieId = await moviesService.createMovie({ movie });
        res.status(201).json({
          data: createMovieId,
          message: 'movie created'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.put(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:movies']),
    async function(req, res, next) {
      const { movieId } = req.params;
      const { body: movie } = req;
      try {
        const updateMovieId = await moviesService.updateMovie({
          movieId,
          movie
        });
        res.status(200).json({
          data: updateMovieId,
          message: 'update movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );

  router.delete(
    '/:movieId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['deleted:movies']),
    async function(req, res, next) {
      const { movieId } = req.params;
      try {
        const deleteMovie = await moviesService.deleteMovie({ movieId });
        res.status(200).json({
          data: deleteMovie,
          message: 'deleted movie'
        });
      } catch (err) {
        next(err);
      }
    }
  );
}

module.exports = moviesApi;
