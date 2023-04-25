# устанавливаем образ Node.js в качестве базового
FROM node:lts AS development

# устанавливаем рабочую директорию в контейнере
WORKDIR /app
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# устанавливаем модули
RUN npm install

# копируем все файлы приложения в Docker-контейнер
COPY . /app
ENV CI=true
ENV PORT=3000

# указываем порт, на котором будет работать приложение
EXPOSE 3000

# запускаем приложение
CMD ["npm", "start"]