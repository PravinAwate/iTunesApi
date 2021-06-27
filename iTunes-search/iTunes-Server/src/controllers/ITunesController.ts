// Reference the Request and Response types from express
import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';
import { ITunes } from '../models/model';
export function index(req: Request, res: Response) {
    res.send('please enter valid api path..');
}
export async function getItunesByArtist(req: Request, res: Response) {
    const { artist } = req.query;
    try {
        let response: AxiosResponse<ITunes.Message> = await axios.get(`https://itunes.apple.com/search?term=${artist}&entity=album&media=music`);
        let results = response.data.results
        let albums = results.map(o => o.collectionName)
        const filtered = results.filter(({ collectionName }, index) => !albums.includes(collectionName, index + 1))

        return res.status(200).json({
            albumCount: filtered.length,
            albumList: filtered
        });
    } catch (e) {
        return  res.status(500).json({error: {msg: e.message, stack: e.stack}});
    }
}
export async function badRequest(req: Request, res: Response) {
    return res.status(400).json({error: {msg: "Bad Request"}});
}
