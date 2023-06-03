import express, {Request, Response} from 'express'
import bodyParser from 'body-parser';
import {postRouters} from './routers/post_routers';
import {blogRouters} from './routers/blog_routers';



const app = express()
const port = process.env.PORT || 3000

// create middleware
const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

// app use
app.use('/posts', postRouters)
app.use('/blogs', blogRouters)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})