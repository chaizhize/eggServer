'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    ctx.set({ 'Cache-Control': 'no-cache' });
    await ctx.render('index.html', {});
  }
}

module.exports = HomeController;
