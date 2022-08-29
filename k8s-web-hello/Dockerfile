FROM node:alpine

WORKDIR /app

EXPOSE 3000

ENV PORT=3000
ENV SECOND_MESSAGE = "This is another test..."

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "start"]