#Base image 
FROM node:15.13-alpine

#Open port 3000 
EXPOSE 3000

#Establish project dir
WORKDIR /MedicalBot

#Copy files from local to cointainer
COPY . .

#Install dependencies
RUN npm install

#Start npm scripts in mode DEVELOPMENT 
CMD ["npm", "start"]