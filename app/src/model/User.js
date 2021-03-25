"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const type_arango_1 = require("type-arango");
// https://joi.dev/api/?v=17.4.0#stringemailoptions
let User = class User extends type_arango_1.Entity {
};
__decorate([
    type_arango_1.Index("hash", { unique: true }),
    type_arango_1.Attribute()
], User.prototype, "email", void 0);
__decorate([
    type_arango_1.Attribute()
], User.prototype, "username", void 0);
__decorate([
    type_arango_1.Attribute()
], User.prototype, "password", void 0);
User = __decorate([
    type_arango_1.Document()
], User);
exports.User = User;
