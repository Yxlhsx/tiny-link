import express from 'express';
import { nanoid } from 'nanoid';

const router = express.Router();

/**
 * 生产短链接
 */
router.get('/generate', (req, res, next) => {
    console.log(req.query);

    const shortLink = nanoid(10);
    console.log(shortLink);

    scData.set(shortLink, req.query.url);

    res.send({
        code: 200,
        message: 'success',
        data: {
            shortLink,
        },
    });
});

export default router;
