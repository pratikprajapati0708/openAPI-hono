import { Hono } from 'hono'
import { z } from '@hono/zod-openapi'

const app = new Hono()

//The inputs from the user on the route

import { createRoute } from '@hono/zod-openapi'
import { ParamsSchema } from './inputs'
import { UserSchema } from './outputs'

const route = createRoute({
  method: 'get',
  path: '/users/{id}',
  request: {
    params: ParamsSchema,
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: UserSchema,
        },
      },
      description: 'Get the user details',
    },
  },
})



export default app

