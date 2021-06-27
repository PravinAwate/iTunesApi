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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.badRequest = exports.getItunesByArtist = exports.index = void 0;
const axios_1 = __importDefault(require("axios"));
function index(req, res) {
    res.send('please enter valid api path..');
}
exports.index = index;
function getItunesByArtist(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { artist } = req.query;
        try {
            let response = yield axios_1.default.get(`https://itunes.apple.com/search?term=${artist}&entity=album&media=music`);
            let results = response.data.results;
            let albums = results.map(o => o.collectionName);
            const filtered = results.filter(({ collectionName }, index) => !albums.includes(collectionName, index + 1));
            return res.status(200).json({
                albumCount: filtered.length,
                albumList: filtered
            });
        }
        catch (e) {
            return res.status(500).json({ error: { msg: e.message, stack: e.stack } });
        }
    });
}
exports.getItunesByArtist = getItunesByArtist;
function badRequest(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.status(400).json({ error: { msg: "Bad Request" } });
    });
}
exports.badRequest = badRequest;
//# sourceMappingURL=ITunesController.js.map