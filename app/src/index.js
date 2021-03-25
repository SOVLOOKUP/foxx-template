"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const locals_1 = require("@arangodb/locals");
const type_arango_1 = require("type-arango");
const router_1 = __importDefault(require("@arangodb/foxx/router"));
const api_1 = require("./api");
api_1.routerInit();
locals_1.context.use(type_arango_1.createRoutes(router_1.default()));
