import { context } from '@arangodb/locals'
import { createRoutes } from 'type-arango'
import createRouter from '@arangodb/foxx/router'
import { routerInit } from './api'

routerInit()

context.use(
    createRoutes(
        createRouter()
    )
);