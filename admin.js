//admin Bro
const AdminBro = require('admin-bro');
const AdminBroExpress = require('@admin-bro/express');

const adminBro = new AdminBro({
  database: [],
  rootPath: "/admin",
});

const router = AdminBroExpress.buildRouter(adminBro)

//server
const express = require("express");
const server = express();

server
  .use(adminBro.options.rootPath, router)
  .listen(5500, ()=> console.log("server started"))