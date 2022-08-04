import 'dotenv/config';
import { Telegraf } from 'telegraf';

const token = process.env.TOKEN;

if (!token) {
  throw new Error('Не задан token');
}

const bot = new Telegraf(token);

bot.start((ctx) => ctx.reply('Привет!'));

bot.command('user', (ctx) => {
  ctx.reply(`name: ${ctx.from.username} id: ${ctx.from.id}`);
});

bot.on('text', (ctx) => {
  ctx.reply(ctx.message.text);
});

bot.launch();
