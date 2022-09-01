# Base image 
FROM node:15.13-alpine

# open port 3000 
EXPOSE 3000

# project dir
WORKDIR /MedicalBot

# copy files from local to cointainer
COPY . .

# build project 
RUN npm run build

# start npm scripts
CMD ["npm", "start"]