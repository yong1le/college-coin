# College Coin
Simplifying loan hunting for students.

## Stacks

Documents the libraries and tools we will use and where they will be used.

### [NextJS](https://nextjs.org/docs)

NextJS will be used as the routing framework for our frontend application. Routes
will be defined based on the file system routing technique Next implements.

In addition to frontend routing, we will be using NextJS API routes to deploy
serverless functions. An advantage to using this over a dedicated backend API
is to keep our codebase contained under one repo and speed up development. NextJS
API route handlers are ExpressJS complient, so there should be a low learning curve.

### [NextAuth](https://next-auth.js.org/getting-started/introduction)

NextAuth is an authentication library for NextJS. This allows users to signin/logup
with a SSO instead of creating a new username/password pair.

### [MongoDB Atlas](https://www.mongodb.com/docs/drivers/node/current/)

Atlas will store information like student account information, loaner
account information.

### Some UI Library.

Thinking of possibly TailwindCSS.
