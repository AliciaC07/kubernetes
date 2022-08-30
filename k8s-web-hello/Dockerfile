FROM node:alpine

WORKDIR /app

COPY . /app
 
COPY package.json package.json
COPY package-lock.json package-lock.json
 
RUN npm install
 

CMD ["npm", "start"]
