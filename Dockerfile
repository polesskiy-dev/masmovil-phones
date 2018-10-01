FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Bundle app source
COPY . /usr/src/app

ENV NODE_ENV production

# Install deps
RUN npm install
WORKDIR /usr/src/app/server
RUN npm install
WORKDIR /usr/src/app/client
RUN npm install

# build
RUN npm run build

WORKDIR /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]