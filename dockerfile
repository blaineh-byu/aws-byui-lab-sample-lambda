FROM public.ecr.aws/lambda/nodejs:12
COPY package*.json ./
COPY dist/*.js ./
RUN npm install
CMD [ "app.handler" ]