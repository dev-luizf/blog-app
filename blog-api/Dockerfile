FROM node:16-alpine AS builder
 
WORKDIR /app

COPY package*.json ./
COPY database ./database/
 
RUN npm install

COPY . . 
 
RUN npm run build

FROM node:16-alpine

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/database ./database
 
USER node

EXPOSE 3001
 
CMD ["npm", "run", "start:prod"]