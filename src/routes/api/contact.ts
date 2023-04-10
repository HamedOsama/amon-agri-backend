import { Router } from 'express';
import * as controller from '../../controllers/contact';

const router = Router();

router.post('/', controller.addContactHandler);

export default router;