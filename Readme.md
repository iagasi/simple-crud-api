date of submit 11/28/2021
date of deadline  11/29/2021

Make git clone , then- git checkout development, then -npm install


To run  tests  first run server  you can type  " npm run start:dev   or   npm run start:prod  "   .then    npm test 


server located on port 5000

example:   http://localhost:5000/persons/


Роут /person нерабочий надо перейти на /persons/



all tasks done  162  points
link to requirements https://github.com/rolling-scopes-school/basic-nodejs-course/blob/master/cross-check/simple-crud-api.md

ok В репозитории с приложением имеется файл Readme.md, содержащий подробные инструкции по установке, запуску и использованию приложения плюс 10 баллов
ok Сервер возвращает соответствующие ответы на запросы:
GET /person:
ok Сервер возвращает статус код 200 и все записи плюс 6 баллов
GET /person/{personId}:
ok Сервер возвращает статус код 200 и запись с id === personId, если такая запись есть плюс 10 баллов
ok Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) плюс 6 баллов
 ok Сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена плюс 6 баллов
POST /person
 ok Сервер возвращает статус код 201 и свежесозданную запись плюс 10 баллов
ok Сервер возвращает статус код 400 и соответствующее сообщение, если тело запроса не содержит обязательных полей плюс 6 баллов
PUT /person/{personId}
ok Сервер возвращает статус код 200 и обновленную запись плюс 10 баллов
ok Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) плюс 6 баллов
ok Сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена плюс 6 баллов
DELETE /person/{personId}
ok Сервер возвращает статус код 204 если запись найдена и удалена плюс 10 баллов
ok Сервер возвращает статус код 400 и соответствующее сообщение, если personId невалиден (не uuid) плюс 6 баллов
ok Сервер возвращает статус код 404 и соответствующее сообщение, если запись с id === personId не найдена плюс 6 баллов
Продвинутая реализация:
ok Ошибки, возникающие при обработке запроса на /person корректно обрабатываются и в случае их возникновения API возвращает статус код 500 с соответствующим сообщением плюс 10 баллов
ok Запросы на несуществующие ресурсы (например, /some/non/existing/resource) корректно обрабатываются (возвращается human friendly сообщение и 404 статус код) плюс 6 баллов
ok Приложение запускается в development-режиме при помощи nodemon (имеется npm скрипт start:dev) плюс 6 баллов
ok Приложение запускается в production-режиме при помощи webpack (имеется npm скрипт start:prod, который запускает процесс сборки webpack и после этого запускает файл с билдом) плюс 6 баллов
ok Значение PORT хранится в .env файле плюс 6 баллов
Hacker scope
ok Имеются E2E тесты, покрывающие логику приложения (не меньше 3 различных сценариев) плюс 30 баллов Пример сценария:
ok GET-запросом получаем все объекты (ожидается пустой массив)
ok POST-запросом создается новый объект (ожидается ответ, содержащий свежесозданный объект)
ok GET-запросом пытаемся получить созданный объект по его id (ожидается созданный объект)
ok PUT-запросом пытаемся обновить созданный объект (ожидается ответ, содержащий обновленный объект с тем же id)
ok DELETE-запросом удаляем созданный объект по id (ожидается подтверждение успешного удаления)
ok GET-запросом пытаемся получить удаленный объект по id (ожидается ответ, что такого объекта нет)

Штрафы  0
