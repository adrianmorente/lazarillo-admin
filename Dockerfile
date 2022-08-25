FROM node:18-alpine3.15

WORKDIR /

ENV PATH /node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent

# Copy sources
COPY . ./

# Start app
CMD [ "npm", "start" ]
