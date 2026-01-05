const { Telegraf } = require('telegraf');

const bot = new Telegraf('8456652721:AAFSbAA50VN30uFzMSHIuXbaPaUPD3_aakA');

bot.start((ctx) => {
  ctx.reply('Welcome to PayOnUs Bot!\n\n' +
    'Commands:\n' +
    '/start - Manage your wallet and services\n' +
    '/balance - Check balance\n' +
    '/help - Show this help');
});

bot.command('balance', (ctx) => {
  ctx.reply('💰 Balance: $1,234.56\n\n' +
    '(PayOnUs integration coming soon!)');
});

bot.command('help', (ctx) => {
  ctx.reply('PayOnUs Bot Commands:\n\n' +
    '/start - ' +
    '/balance - View balance\n' +
    '/help - Show this menu\n\n' +
    'Built by @Victor & @Ademola 🎉');
});

bot.hears('hi', (ctx) => ctx.reply('Hey there! Use /start to begin.'));

bot.on('message', (ctx) => {
  ctx.reply('Try /start, /balance, or /help!');
});

bot.launch();
console.log('PayOnUs Bot running...');
