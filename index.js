//  zoza module
const { Telegraf } = require('telegraf-develop')


class ZozaBot {
  constructor (token) {
    this.token = token
    this.bot = new Telegraf(this.token)
  }

	
  start(ctx) {
    this.bot.start((ctx))
  }
	
  command(name, ctx) {
    this.bot.hears(name, (ctx))
  }
	
  event(type, ctx) {
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
    if (type == 'supergroup_created') {
      this.bot.on('supergroup_chat_created', ctx)
    }
    if (type == 'forwarded_message') {
      this.bot.on('forward_date', ctx)
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
    if (type == 'member_join_request') {
      this.bot.on('chat_join_request', ctx)
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
	
  run() {
    this.bot.launch()
    console.log("\x1b[32m", "\x1b[2m", "Бот успешно запущен!")
  }
}








class zoza {
  constructor(ctx) {
    this.ctx = ctx
    this.msg = {
    		"id": this.ctx.message.message_id,
    		"text": this.ctx.message.text,
    		"date": this.ctx.message.date,
    		"user_id": this.ctx.message.from.id,
    		"name": this.ctx.message.from.first_name,
    		"surname": this.ctx.message.from.last_name,
    		"username": this.ctx.message.from.username,
    		"is_bot": this.ctx.message.from.is_bot,
    		"chat_id": this.ctx.message.chat.id,
    		"chat_title": this.ctx.message.chat.title,
    		"chat_type": this.ctx.message.chat.type
    }
  }


  // ctx.message
  get id() {
    return this.msg['id']
  }

  get text() {
    return this.msg['text']
  }

  get date() {
    return this.msg['date']
  }
  
  get user_id() {
    return this.msg['user_id']
  }
  
  get user_name() {
    return this.msg['name']
  }
  
  get user_surname() {
    return this.msg['surname']
  }
  
  get user_username() {
    return this.msg['username']
  }
  
  get user_is_bot() {
    return this.msg['is_bot']
  }
  
  get chat_id() {
    return this.msg['chat_id']
  }
  
  get chat_title() {
    return this.msg['chat_title']
  }
  
  get chat_type() {
    return this.msg['chat_type']
  }


  // User Tag
  user_tag(type = "html") {
    if (type == 'HTML' || type == 'html' || type == 'Html') {
	   	return `<a href="tg://user?id=${this.msg['user_id']}">${this.msg['name']}</a>`
    } 
    if (type == 'Markdown' || type == 'markdown' || type == 'md') {
	   	return `[${this.msg['user_id']}](tg://user?id=${this.msg['name']})`
    } 
  }
  
  custom_tag(id, name, type = "html") {
    if (type == 'HTML' || type == 'html' || type == 'Html') {
	   	return `<a href="tg://user?id=${id}">${name}</a>`
    } 
    if (type == 'Markdown' || type == 'markdown' || type == 'md') {
	   	return `[${name}](tg://user?id=${id})`
    } 
  }
  
  
  send(text, type = "none", extra = null) {
    if (type == "none") {
      this.ctx.reply(text, extra)
    }
    if (type == 'HTML' || type == 'html' || type == 'Html') {
      this.ctx.replyWithHTML(text, extra)
    } 
    if (type == 'Markdown' || type == 'markdown' || type == 'md') {
      this.ctx.replyWithMarkdownV2(text, extra)
    }
  }

  dm(text, user_id = this.msg['user_id'], extra = null) {
    this.ctx.telegram.sendMessage(user_id, text, extra)
  }

  leave(chat_id = this.msg['chat_id']) {
    this.ctx.telegram.leaveChat(chat_id)
  }
  
  // Pinning
  pin(message_id = this.msg['id'], chat_id = this.msg['chat_id'], notify = false) {
  		this.ctx.telegram.pinChatMessage(chat_id, message_id, {
  				disable_notification: notify
  		})
  	}
  	
  	unpin(message_id = null, chat_id = this.msg['chat_id']) {
  		this.ctx.telegram.unpinChatMessage(chat_id, message_id)
  	}
  	
  	unpinAll(chat_id = this.msg['chat_id']) {
  		this.ctx.telegram.unpinAllChatMessages(chat_id)
  	}
  	
  	ban(user_id, chat_id = this.msg['chat_id'], date = 0, del_messages = true) {
  		this.ctx.telegram.banChatMember(chat_id, user_id, {
  				until_date: date,
  				revoke_messages: del_messages
  		})
  	}
  	
  unban(user_id, chat_id = this.msg['chat_id']) {
  		this.ctx.telegram.unbanChatMember(chat_id, user_id)
  	}
  	
  	
}




module.exports = {
  ZozaBot,
  zoza
}

const package = require('./package.json')
const module_version = package['version']

console.log("\x1b[36m", "\x1b[2m", "zoza  |  " + module_version)
