# Simple HTTP Server

This is a simple HTTP server written in Node.js. It listens on port 5000 and responds to different HTTP methods at the `/books` and `/books/author` endpoints.

## Endpoints

- `GET /books`: Responds with "Things fall apart /books endpoint with the GET method"
- `PUT /books`: Responds with "you requested /books endpoint with the PUT method"
- `DELETE /books`: Responds with "you requested /books endpoint with the DELETE method"
- `GET /books/author`: Responds with "you requested /books/author endpoint with the GET method"
- `POST /books/author`: Responds with "you requested /books/author endpoint with the POST method"
- `PUT /books/author`: Responds with "you requested /books/author endpoint with the PUT method"

## Running the Server

To run the server, navigate to the directory containing `newserver.js` in your terminal and run the following command:

```bash
node newserver.js
