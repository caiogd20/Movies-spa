import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import movieHandler from './api/movies.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'local-movies-api',
        configureServer(server) {
          server.middlewares.use('/api/movies', async (req, res) => {
            const requestUrl = new URL(req.url || '/', 'http://localhost')
            req.query = Object.fromEntries(requestUrl.searchParams)
            process.env.TMDB_API_TOKEN ??= env.TMDB_API_TOKEN

            res.status = (statusCode) => {
              res.statusCode = statusCode
              return res
            }
            res.json = (body) => {
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify(body))
              return res
            }

            await movieHandler(req, res)
          })
        },
      },
    ],
  }
})
