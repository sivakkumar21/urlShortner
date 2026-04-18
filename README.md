# URL Shortener

A simple URL shortener built using NestJS.

## Features

- Create short URLs
- Redirect using 302
- Base62 encoding
- In-memory storage (for now)

## API

### Create Short URL

POST /shortenUrl

Request:
{
  "longUrl": "https://example.com"
}

Response:
{
  "shortUrl": "http://localhost:3000/abc123"
}

### Redirect

GET /:shortUrl

Redirects to original URL

## Tech Stack

- NestJS
- TypeScript

## Future Improvements

- Add database (MongoDB/Postgres)
- Add Redis caching
- Handle duplicate URLs
- Add analytics