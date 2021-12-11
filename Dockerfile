
FROM node:lts-alpine
EXPOSE 80
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","start"]