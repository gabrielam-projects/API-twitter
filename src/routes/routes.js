import { Router } from "express";
import { connect } from '../twitter';

const router = Router();

router.get('/tweets/:id', async (req, res) => {
    
    //v2 Twitter
    const tweets = await connect(req.params.id);
    res.json(tweets.data.data[0].text);
});

export default router;