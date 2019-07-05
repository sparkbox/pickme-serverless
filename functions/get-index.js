'use strict';

const { promisify } = require('util');
const fs = require('fs');
const readFileAsync = promisify(fs.readFile);

var html;

async function loadHtml() {
  if (!html) {
    html = await readFileAsync('static/index.html', { encoding: 'utf-8' });
  }
  return html;
}

module.exports.handler = async (event) => {
  const html = await loadHtml();
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html; charset=UTF-8',
    },
    body: html,
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
