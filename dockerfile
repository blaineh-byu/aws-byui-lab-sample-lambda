FROM public.ecr.aws/lambda/nodejs:12
COPY package*.json ./
COPY src/*.js ./
RUN npm install
CMD [ "app.handler" ]