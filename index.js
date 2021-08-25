require('dotenv').config();
import initDbConnetion from './infra/mongoose'
import startServer from './infra/express'

initDbConnetion().then(startServer())
