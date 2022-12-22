# webstack platform
### Архитектура
SPA

### Стек
- React 18 + typescript
- antd design ui kit
- Стейт менеджер - mobx
- Стили - linaria
 
### Инфо
При создании pull request настроена проверка lint. Чтобы pull reques был вмержен
в main, проверка должна пройти и неоходимо получить два апрува. Пушить напрямую в main **Запрещено**

### Деплой
При пуше в main, билдится приложение в ветку gh-pages и деплоится на github-pages

[webstack-platform](https://vosdux.github.io/)

### Срипты
- yarn start - Для запуска dev сервера используйте команду 
- yarn lint - Для проверки кода линтером
- yarn build - Создать production сборку
- yarn start:prod - Запустить production сборку локально
