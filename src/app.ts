import Express from 'express'
import { routes } from './routes'
import Cors from 'cors'

const app = Express()

app.use(Cors());
app.use(Express.json())

app.use(routes)

const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})