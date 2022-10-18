import fastify from 'fastify';


const start = async () => {
  const server = fastify({
    logger: true,
  })

  try {
    server.register(import('./routes.js'))
    await server.listen({port: 3000})
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()