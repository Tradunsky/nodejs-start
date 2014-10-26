Пример node.js (express + mongoose)

* Nconf — модуль для работы с конфигурацией.
* Winston — модуль для работы с выводом логов.
* Underscore — модуль с набором полезных методов для работы с обектами, массивами, коллекциями.
* Async — модуль, помогающий избежать «callback hell» и умеещий управлять асинхронными операциями самыми разными способами.


Использвоание:
* curl -X GET localhost:8084/v1/entities # список сущностей
* curl -X GET localhost:8084/v1/entities/544d50fe885edc8079d2f2d6 # получить сущность с :id = 544d50fe885edc8079d2f2d6
* curl -X POST -d name="student" localhost:8084/v1/entities #создать сущность student
* curl -X PUT -d name="student2" localhost:8084/v1/entities/544d50fe885edc8079d2f2d6 #редактировать сущность с :id = 544d50fe885edc8079d2f2d6, обновляемые поля так же передавать в параметрах
* curl -X DELETE -d name="student2" localhost:8084/v1/entities/544d50fe885edc8079d2f2d6 #удалить сущность

Например, вы добавили новую сущность в БД и хотите сделать CRUD к ней. Для этого нужно проделать 4 простые вещи:
* Создаем файл с именем вашей новой сущности в директори handlers и определяем там modelName.
* Создаем файл c именем modelName в директории models и определяем там Mongoose Schema для новой сущности.
* Обновляем объект handlers в server.js.
* Добавляем нужные нам роуты в routes.js