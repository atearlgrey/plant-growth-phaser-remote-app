# -------- Stage 1 --------
FROM node:20.9-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# -------- Stage 2 --------
FROM deps AS build
WORKDIR /app
COPY . .

# Nhận biến môi trường từ build arg
ARG env=prod
RUN npm run build:${env}

# -------- Stage 3 --------
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
