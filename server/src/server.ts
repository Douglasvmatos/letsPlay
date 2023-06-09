import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query']
})

async function bootstrap(){
    const fastify = Fastify({
        logger: true,
    })

    fastify.get('/futebol/partidas/count', () => {
        prisma.sports.findMany({
            where: {
                
            }
        })

        return {count: 123585}
    })

    await fastify.listen({ port: 3333})
}

bootstrap()