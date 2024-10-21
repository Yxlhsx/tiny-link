import express from 'express';
import { getConnection } from '../db.js';

const router = express.Router();

router.get('/sc/:scUrl', (req, res, next) => {
  const connection = getConnection();
  const { scUrl } = req.params;

  connection.query(
    'SELECT url FROM links WHERE `key` = ?',
    [scUrl]
  ).then(([results, fields]) => {
    console.log(results);
    if (results.length === 0) {
      res.send({
        code: 404,
        message: 'not found',
      });
      return;
    }

    res.redirect(results[0].url);
  }).catch(err => {
    console.log(err);
    res.send({
      code: 500,
      message: 'error',
    });
  });
});

export default router;
