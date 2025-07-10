# my-js-project

## 📌 Опис

Цей проєкт — приклад використання **Jest** для тестування звичайного JavaScript коду (ESM) у Vite-проєкті.  
Тут реалізовані базові математичні функції та модульні тести для них.

## Структура проекту

my-js-project/
├── src/
│ └── math.js # Модуль з функціями
├── tests/
│ └── math.test.js # Модульні тести
├── package.json
├── jest.config.js
├── babel.config.js

## Як запустити

1. Встановіть залежності:
   ```
   npm install
   ```

2. Запустіть тести:
   ```
   npm run test:jest
   ```

## Тестування

Тести знаходяться у папці [`tests`](tests/) та написані для Jest.  
Приклад тесту — [`math.test.js`](tests/math.test.js).

## Ліцензія

MIT