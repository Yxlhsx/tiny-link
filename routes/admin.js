import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {

  res.render('login', {
    title: 'Admin',
    message: 'Hello, Admin!',
  });
});

router.post('/login', (req, res, next) => {
  console.log(req.body)

  // res.render('login', {
  //   title: 'Admin',
  //   message: 'Hello, Admin!',
  // });
});

export default router;
