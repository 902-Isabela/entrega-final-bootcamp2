# apps/web/Dockerfile
# 1. Fase de Build (Cria a pasta 'dist')
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
# O npm run build já existe no template vanilla do Vite
RUN npm run build

# 2. Fase de Serve (Usa Nginx para servir estaticamente o PWA)
FROM nginx:alpine
# Copia o build do Vite para o diretório de serviço do Nginx
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80