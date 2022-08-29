FROM node:alpine

WORKDIR /app

ENV PORT=3000
ENV SECOND_MESSAGE = "This is another test..."

EXPOSE 3000

COPY package.json package-lock.json ./

RUN npm install

COPY . /app

CMD ["npm", "start"]