import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { PrismaClient } from '@prisma/client';

const token = process.env.TOKEN;

if (!token) {
  throw new Error('Не задан token');
}

const prisma = new PrismaClient();
const bot = new Telegraf(token);

// prisma
class App {
  async init() {
    await prisma.$connect();
  }
}

const app = new App();
app.init();

// bot
bot.start((ctx) => ctx.reply('Привет!'));

bot.command('user', (ctx) => {
  ctx.reply(`name: ${ctx.from.username} id: ${ctx.from.id}`);
});

bot.launch();
