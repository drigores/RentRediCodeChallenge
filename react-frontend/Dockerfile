FROM node:24-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (incl. devDependencies for dev mode)
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Set development environment
ENV NODE_ENV=development

# Expose app port (adjust if your app uses a different port)
EXPOSE 8080

# Run dev script
CMD ["npm", "run", "dev"]