FROM node:16-alpine

WORKDIR /app

ADD . .

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]