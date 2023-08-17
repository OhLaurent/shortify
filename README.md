# shortify
A simple API to create short URLs, made with Typescript, Express and Prisma.

# Routes
base_url/shortify/ [POST]: registers a new short url. You should parse the original Url via requisition body. Returns the new Url.\
base_url/shortify/:id [GET]: redirects you to the original Url's path.\
base_url/shortify/index: returns a list of all Urls saved in the database.\

#Usage
To run the app, just install the dependencies listed at "package.json" and, then, run "yarn dev" to launch the server, by default at "localhost:3030".   
