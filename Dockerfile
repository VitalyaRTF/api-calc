FROM node:16
WORKDIR /home/vboxuser/calculator
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 8000
CMD ["node", "index.js"]
