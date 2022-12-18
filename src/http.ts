import fastify from "fastify"

const server = fastify()

server.get('/', async () => {
  return { hello: 'world' }
})

// Run the server!
const start = async () => {
  try {
    await server.listen({ port: 8080 })
  } catch (err) {
    console.log("Error", err)
    process.exit(1)
  }
}
start()
