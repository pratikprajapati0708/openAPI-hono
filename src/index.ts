import { Hono } from 'hono'
import { z } from '@hono/zod-openapi'

const app = new Hono()

//The inputs from the user on the route

const ParamsSchema = z.object({
  id : z.string().min(1).max(10).openapi({
    param:{
      name : 'id',
      in: 'path'
    },
    example : '123'
  })
})

//the output of the route
const UserSchema = z.object({
  name : z.string().min(1).max(10).openapi({
    example : "John"
  }),
  age : z.number().int().openapi({
    example : 12
  }),
  id : z.string().min(1).max(10).openapi({
    example : '24'
  })
})


export default app

