import express from 'express';

const router = express.Router();

router.get('/sc/:scUrl', (req, res, next) => {
  const { scUrl } = req.params;

  const url = scData.get(scUrl);

  if (url) {
    res.redirect(url);
  } else {
    res.send({
      code: 404,
      message: 'not found',
    });
  }
});

export default router;
