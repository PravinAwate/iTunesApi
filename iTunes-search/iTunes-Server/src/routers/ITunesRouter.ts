import { Router } from 'express';
import * as iTunesController from '../controllers/ITunesController';

const iTunesRouter = Router();

iTunesRouter.get('/', iTunesController.index);

iTunesRouter.get('/search', iTunesController.getItunesByArtist);

iTunesRouter.all('*',iTunesController.badRequest)

export default iTunesRouter;
