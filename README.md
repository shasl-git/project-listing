# Cyberia Projects — Next.js App

This is a [Next.js](https://nextjs.org/) project bootstrapped with `create-next-app`.

---

## 🚀 Getting Started

First, run the development server:

```bash
npm i          # Downloading node modules
npm run dev    # Running the development server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

📚 About Project
The API was used to work with the page data: https://api.test.cyberia.studio/api/v1

A GET request to project was used to get project data

To get the project categories, an array of project and its categories was iterated over

Filtering of projects takes place on the front-end side

Tools for automatic code formatting — Prettier

CSS Modules were used to implement the styling

Feature-Sliced Design (FSD) was used to organize the structure

Adaptability is implemented for laptops, tablets, and phones

Error responses from the server come with status code 422

🛠️ Technologies Used
Next.js 15 (App Router)

TypeScript

CSS Modules

FSD architecture

Prettier

REST API

📁 Project Structure

/app
/entities
/features
/shared
/widgets
/pages
/public

Русский язык

# Cyberia Projects — приложение на Next.js

Этот проект создан с помощью [Next.js](https://nextjs.org/), используя `create-next-app`.

---

## 🚀 Начало работы

Сначала запустите сервер разработки:

```bash
npm i          # Установка зависимостей
npm run dev    # Запуск сервера разработки
```

Затем откройте http://localhost:3000 в браузере, чтобы увидеть результат.

Вы можете начать редактировать страницу, изменяя файл app/page.tsx. Страница будет автоматически обновляться при сохранении.

📚 О проекте
Для работы с данными страницы использовался API: https://api.test.cyberia.studio/api/v1

Для получения данных о проектах выполняется GET-запрос к project

Чтобы получить категории проектов, перебирается массив project и его категории

Фильтрация проектов происходит на фронтенде

Используется инструмент автоматического форматирования кода — Prettier

Для стилизации применяются CSS-модули

Структура проекта организована по принципам Feature-Sliced Design (FSD)

Реализована адаптивность под ноутбуки, планшеты и телефоны

В случае ошибки сервер возвращает статус-код 422

🛠️ Используемые технологии
Next.js 15 (App Router)

TypeScript

CSS Modules

Архитектура FSD

Prettier

REST API

📁 Структура проекта
/app
/entities
/features
/shared
/widgets
/pages
/public
