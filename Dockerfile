FROM alpine:latest
ADD . /app
WORKDIR /app
RUN apk add --update nodejs npm
RUN node --version
RUN npm --version
RUN npm i
