import { Router } from 'express';
import Studio from '../models/Studio.js';
import Film from '../models/Film.js';

export default Router()

  .post('/api/v1/studios', (req, res, next) => {
    Studio.create(req.body)
      .then(studio => res.send(studio))
      .catch(next);
  })

  .get('/api/v1/studios', (req, res, next) => {
    Studio.findAll({ 
      attributes: ['id', 'name']
    })
      .then(studio => res.send(studio))
      .catch(next);
  })
  
  .get('/api/v1/studios/:id', (req, res, next) => {
    Studio.findByPk(req.params.id, {
      attributes: ['id', 'name', 'city', 'state', 'country'],
      include: {
        model: Film,
        attributes: ['id', 'title']
      }
    })
      .then(studio => res.send(studio))
      .catch(next);
  });

