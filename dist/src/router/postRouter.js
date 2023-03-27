"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postController_1 = __importDefault(require("../controller/postController"));
exports.postRouter = (0, express_1.Router)();
exports.postRouter.get('/', postController_1.default.getAll);
exports.postRouter.get('/:id', postController_1.default.getPostUser);
exports.postRouter.post('/', postController_1.default.create);
exports.postRouter.put('/:idPost', postController_1.default.update);
exports.postRouter.delete('/:idPost', postController_1.default.remove);
//# sourceMappingURL=postRouter.js.map