FROM node

WORKDIR /usr/app

COPY package.json ./

run npm install

COPY . .

EXPOSE 3333

CMD ["npm", "run", "dev"]