# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app

# Copy only package files to install deps
COPY ../app/package*.json ./
COPY ../app/bun.lockb ./
RUN npm install

# Copy entire app source code
COPY ../app ./
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
