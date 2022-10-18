import {Controller} from './controller.js';

export default async function (fastify, opts) {
  const routes = (fastify, opts, done) => {
    const controller = new Controller();

    fastify.get('/', async (req, reply) => {
      await controller.healthCheck();
      reply.status(200).send('OK!');
    })

    done()
  }

  fastify.register(routes, { prefix: '/api' })
}