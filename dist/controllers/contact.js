"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContactHandler = void 0;
const db_1 = require("../utils/db");
const addContactHandler = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, phone, subject, message } = req.body || {};
        if (!name || (!email && !phone) || !message) {
            const error = new Error("All fields are required");
            error.status = 400;
            throw error;
        }
        const newContact = yield (0, db_1.addContact)({ name, email, phone, subject, message });
        res.status(201).json({
            ok: true,
            statusCode: 201,
            message: "Contact added successfully",
            data: newContact
        });
    }
    catch (e) {
        next(e);
    }
});
exports.addContactHandler = addContactHandler;
