# Docker use code

* fire create a file with name of Dockerfile
* FROM node:14.17.6
  WORKDIR /app
  COPY package.json .

  ARG  NODE_ENV
  RUN if [ "$NODE_ENV" = "development" ]; \
          then npm install; \
          else npm install --only=production; \
          fi

  COPY . ./
  ENV PORT 3000
  EXPOSE $PORT
  CMD ["node" , "index.js"] 


first line show the image after that show workdir after that copy the package.json file for the node_module 

set the agrument of NODE_ENV for the development or production server use 

copy all the app files 

run on the port 3000

and last hit the command that run your node server


## Docker commands

#### Image Build

```
normal command 

docker build .

and full command is 

docker build -t docker-node .

```

#### Delete docker Image

`docker image rm image_ID`

#### List of Image

`docker image ls`

#### Run project

`docker run docker-node(project name)`

#### Show the name of project

`docker run -d --name node-app docker-node`

#### Set Port

`docker run -p 3000:3000 -d --name node-app docker-node`

#### Remove the Container

`docker rm node-app -f`

#### Show the app Directory

`docker exec -it node-app bash`

`ls`

`exit`

`cat index.js`

#### Check everything in your Docker

`docker ps`

`docker ps a`

#### Auto matic Save in file

`docker run -v %cd%:/app -p 3000:3000 -d --name node-app node-app-image`

#### Check logs in Docker

`docker logs node-app`

#### Delete node module detect

`docker run -v %cd%:/app -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image`

## Docker Conatiner

version: '3'
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
    # env_file:
    #   - ./.env
  mongo:
    image: mongo
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=mypass


first create a docker-compose.yml file and fill these details

#### Docker container Read Only

`docker run -v %cd%:/app:ro -v /app/node_modules -p 3000:3000 -d --name node-app node-app-image`

#### Pass Enviorment Variable

`docker run -v %cd%:/app:ro -v /app/node_modules --env PORT=3000 -p 3000:3000 -d --name node-app node-app-image `

add multiple enviorment variable

`docker run -v %cd%:/app:ro -v /app/node_modules --env-file ./.env  -p 3000:3000 -d --name node-app node-app-image`

#### Check Docker Volume

`docker volume ls`

#### Delete Docker volume

`docker volume prune`

#### Delete Container and volume 

`docker rm node-app -fv`

#### Docker Compose Up

`docker-compose up -d`

`docker-compose up -d build `

`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d --build`

#### Docker-compose.yml
version: '3'
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - PORT=3000
    # env_file:
    #   - ./.env
  mongo:
    image: mongo
    environment:
      - MONGO_INITDB_ROOT_USERNAME=root
      - MONGO_INITDB_ROOT_PASSWORD=mypass

#### docker-compose.dev.yml

version: '3'
services:
  node-app:
    build:
      context: .
      args:
        NODE_ENV: development
    # ports:
    #   - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    command: npm run dev
    # env_file:
    #   - ./.env


#### Docker Compose prod

version:'3'

services:

  node-app:

    build:

    context:.

    args:

    NODE_ENV:production

    # ports:

    #   - "3000:3000"

    environment:

    -NODE_ENV=production

    command:node index.js

    # env_file:

    #   - ./.env

#### Docker Compose backup.yml


```
version: '3'
services:
  node-app:
    build: .
    ports:
      - "3000:3000"
    volumes:
      - ./:/app
      - /app/node_modules
    environment:
      - PORT=3000
    env_file:
      - ./.env
```


#### Docker Compose Down

` docker-compose -f docker-compose.yml -f docker-compose.dev.yml down -v`
