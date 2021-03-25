"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Users_1;
Object.defineProperty(exports, "__esModule", { value: true });
const type_arango_1 = require("type-arango");
const User_1 = require("../model/User");
let Users = Users_1 = class Users extends type_arango_1.Entities {
    static GET_CUSTOM({ param, error }) {
        const user = Users_1.findOne(param.user);
        if (!user)
            return error('not found');
        return user;
    }
};
__decorate([
    type_arango_1.Route.GET('/')
], Users, "GET_CUSTOM", null);
Users = Users_1 = __decorate([
    type_arango_1.Collection(of => User_1.User),
    type_arango_1.Route.GET()
], Users);
exports.default = Users;
