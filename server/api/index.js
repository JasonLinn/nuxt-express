import { Router } from 'express'

import users from './users'

const router = Router();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.json());

// Add USERS Routes
router.use(users)

export default router
