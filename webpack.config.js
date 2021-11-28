
const {EnvironmentPlugin, node} = require('webpack'); 

const path = require('path');
//const Dotenv = require('dotenv-webpack');

module.exports = {
  target:"node",
  mode: 'development',
  // devServer:{
  //   static:"./dist"
   
  // },
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'main.js',
  },
 
};