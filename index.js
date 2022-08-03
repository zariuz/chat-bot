import 'dotenv/config';
import { Telegraf } from 'telegraf';

const token = process.env.TOKEN;

if (!token) {
  throw new Error('Не задан token');
}

const bot = new Telegraf(token);

bot.on('text', (ctx) => {
  ctx.reply('Привет!');
});

bot.launch();
