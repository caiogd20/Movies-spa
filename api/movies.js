export default async function handler(req, res) {
    if (req.method !== "GET") {
        res.setHeader("Allow", "GET")
        return res.status(405).json({ error: "Method not allowed" })
    }

    const { path } = req.query
    if (typeof path !== "string" || !/^movie\/(popular|[1-9]\d*)$/.test(path)) {
        return res.status(400).json({ error: "Invalid movie path" })
    }

    const token = process.env.TMDB_API_TOKEN
    if (!token) {
        return res.status(500).json({ error: "TMDB API token is not configured" })
    }

    try {
        const response = await fetch(`https://api.themoviedb.org/3/${path}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        })
        const data = await response.json()
        return res.status(response.status).json(data)
    } catch {
        return res.status(502).json({ error: "TMDB API is unavailable" })
    }
}