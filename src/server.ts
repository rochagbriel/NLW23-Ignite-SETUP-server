import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

/**
 * HTTP Method: Get, Posst, Put, Patch, Delete
 */

app.register(cors)
app.register(appRoutes)

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP Server running!')
})