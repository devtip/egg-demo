'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    debugger;
    const text = 'hi, egg';
    ctx.body = text;
  }
}

module.exports = HomeController;
