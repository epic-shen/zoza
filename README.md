## «zoza» module ##

### Информация ###
**«zoza»** — простой модуль для создания ботов Telegram.
Основан на telegraf-develop версии.

***

### Установка ###

Для установки модуля в консоли напишите:

```js
npm i zoza
```


### Использование ###

После установки пакета:

```js
const { zoza } = require('zoza')
const bot = new zoza('ТОКЕН_БОТА')
```

Запускаем бота

```js
bot.run()
```


***

### Примеры ###


#### Создаём команды ####

При нажатии на кнопку «Старт»:
```js
bot.start((ctx) => {
  var zz = new zoza(cxt)
  zz.send(`Привет, ${name}`)
})
```


При вводе пользователем, к примеру, «!профиль»:

```js
bot.command('!профиль', (ctx) => {
  var zz = new zoza(cxt)
  zz.send(ctx, `
ID: ${zz.user_id}
Имя: ${zz.user_name}
Фамилия: ${zz.user_surnamr}
Имя пользователя: ${zz.user_username}
  `)
})
```

#### Создаём события ####

При отправке фотографии:

```js
bot.event('photo', (ctx) => {
  var zz = new zoza(cxt)
  zz.send('Красивая фотография!')
})
```


Или при отправке GIF: 

```js
bot.event('gif', (ctx) => {
  var zz = new zoza(cxt)
  zz.send('Крутая GIF-ка!')
})
```

***

**Больше функций и примеров вы можете узнать у нас на сайте:** 
**[zzjs.repl.co](https://zzjs.repl.co)**
