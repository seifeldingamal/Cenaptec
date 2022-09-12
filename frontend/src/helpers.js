"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api = "http://localhost:8000";
const getText = () => fetch(`${api}/api/hello`, {
    method: 'GET',
})
    .then(res => res.json());
exports.default = getText;
