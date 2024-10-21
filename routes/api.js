import express from 'express';
import { nanoid } from 'nanoid';
import { getConnection } from '../db.js';

const router = express.Router();

/**
 * 生产短链接
 */
router.get('/generate', (req, res, next) => {
    const connection = getConnection();
    const { url } = req.query;

    const shortLink = nanoid(10);


    connection.query(
        'INSERT INTO links (`key`, url, source) VALUES (?, ?, ?)',
        [shortLink, url, '测试']
    ).then(result => {
        console.log(result);

        res.send({
            code: 200,
            message: 'success',
            data: {
                shortLink,
            },
        });
    }).catch(err => {
        console.log(err);
        res.send({
            code: 500,
            message: 'error',
        });
    });


});

export default router;
