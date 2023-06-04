import express from 'express'
import bodyParser from 'body-parser';

import {postRouters} from './routers/post_routers';
import {blogRouters} from './routers/blog_routers';
import {TestingRouter} from './routers/testing_router';



const app = express()
const port = process.env.PORT || 5000


const parserMiddleware = bodyParser({})
app.use(parserMiddleware)


app.use('/posts', postRouters)
app.use('/blogs', blogRouters)
app.use('/testing', TestingRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

