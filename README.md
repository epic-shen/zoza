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
	var name = bot.message(ctx, 'first_name')
	bot.send(ctx, `Привет, ${name}`)
})
```


При вводе пользователем, к примеру, «!профиль»:

```js
bot.command('!профиль', (ctx) => {
  var id = bot.message(ctx, 'id')
  var first_name = bot.message(ctx, 'first_name')
  var last_name = bot.message(ctx, 'last_name')
  var username = bot.message(ctx, 'username')

	bot.send(ctx, `
ID: ${id}
Имя: ${first_name}
Фамилия: ${last_name}
Имя пользователя: ${username}
  `)
})
```

#### Создаём события ####

При отправке фотографии:

```js
bot.event('photo', (ctx) => {
	bot.send(ctx, 'Красивая фотография!')
})
```


Или при отправке GIF: 

```js
bot.event('gif', (ctx) => {
	bot.send(ctx, 'Крутая GIF-ка!')
})
```

***

**Больше функций и примеров вы можете узнать у нас на сайте:** 
**[zzjs.repl.co](https://zzjs.repl.co)**
