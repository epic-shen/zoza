//  zoza Module

const { Telegraf } = require('telegraf-develop')

class zoza {

	constructor (token) {		this.token = token

		this.bot = new Telegraf(this.token)

	}

	

  start (ctx) {

	  this.bot.start((ctx))

  }

	

	command (name, ctx) {

	  this.bot.hears(name, (ctx))

  }

	

  send (ctx, text, extra = null) {

		ctx.reply(text, extra)

	} 

	leave (ctx) {

	  this.bot.telegram.leaveChat(ctx.message.chat.id)

	}

  event (type, ctx) {

    if (type == 'message') {

			this.bot.on(type, ctx)

		}

		if (type == 'text') {

			this.bot.on(type, ctx)

		}

		if (type == 'voice') {

			this.bot.on(type, ctx)

		}

		if (type == 'video') {

			this.bot.on(type, ctx)

		}

		if (type == 'audio') {

			this.bot.on(type, ctx)

		}

		if (type == 'document') {

			this.bot.on(type, ctx)

		}

		if (type == 'photo') {

			this.bot.on(type, ctx)

		}

		if (type == 'contact') {

			this.bot.on(type, ctx)

		}

		if (type == 'sticker') {

			this.bot.on(type, ctx)

		}

		if (type == 'gif') {

			this.bot.on('animation', ctx)

		}

		if (type == 'dice') {

			this.bot.on(type, ctx)

		}

		if (type == 'forward') {

			this.bot.on('forward_date', ctx)

		}

		if (type == 'voice_chat_started') {

			this.bot.on(type, ctx)

		}

		if (type == 'voice_chat_ended') {

			this.bot.on(type, ctx)

		}

		if (type == 'voice_chat_planned') {

			this.bot.on('voice_chat_scheduled', ctx)

		}

		if (type == 'voice_chat_invite') {

			this.bot.on('voice_chat_participants_invited', ctx)

		}

		if (type == 'supergroup_chat_created') {

			this.bot.on(type, ctx)

		}

		if (type == 'pinned_message') {

			this.bot.on(type, ctx)

		}

		if (type == 'edited_message') {

			this.bot.on(type, ctx)

		}

		if (type == 'member_join') {

			this.bot.on('new_chat_members', ctx)

		}

		if (type == 'member_leave') {

			this.bot.on('left_chat_member', ctx)

		}

		if (type == 'poll_answer') {

			this.bot.on(type, ctx)

				}

		if (type == 'anon_poll_answer') {

			this.bot.on('poll', ctx)

		}

		if (type == 'channel_post') {

			this.bot.on(type, ctx)

		}

		if (type == 'edited_channel_post') {

			this.bot.on(type, ctx)

		}

		if (type == 'chat_join_request') {

			this.bot.on(type, ctx)

		}

		if (type == 'new_chat_title') {

			this.bot.on(type, ctx)

		}

		if (type == 'new_chat_photo') {

			this.bot.on(type, ctx)

		}

		if (type == 'chat_photo_deleted') {

			this.bot.on('delete_chat_photo', ctx)

		}

	}

	

  message (ctx, key) {

		if (key = 'id') {

			return ctx.message.message_id

		}

		if (key = 'date') {

			return ctx.message.date

		}

		if (key = 'text') {

			return ctx.message.text

		}

		if (key = 'user_id') {

			return ctx.message.from.id

		}

		if (key = 'user_first_name') {

			return ctx.message.from.first_name

		}

		if (key = 'user_last_name') {

			return ctx.message.from.last_name

		}

		if (key = 'user_username') {

			return ctx.message.from.username

		}

		if (key = 'user_is_bot') {

			return ctx.message.from.is_bot

		}

		if (key = 'chat_id') {

			return ctx.message.chat.id

		}

		if (key = 'chat_title') {

			return ctx.message.chat.title

		}

		if (key = 'chat_type') {

			return ctx.message.chat.type

		}

	}

	

	run() {

	  this.bot.launch()

	}

}

module.exports = {

	zoza

}

const module_version = require('./package.json')['version']

console.log("\x1b[32m", "zoza  |  " + module_version)
