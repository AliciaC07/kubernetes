FROM node:alpine

WORKDIR /app

COPY . /app
 
COPY package-lock.json package-lock.json
 
RUN npm install
 

CMD ["npm", "start"]
