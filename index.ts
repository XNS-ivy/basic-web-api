import { Elysia, t } from 'elysia'

const port = 4040

let users = [
    { id: 1, name: 'nvryx', email: 'nvryxdubz@gmail.com' }
]
let nextId = 2

const moe = new Elysia()

moe.get("/", () => ({ message: 'API Ready!' }))
moe.get('/users', () => users)
moe.get("/user/:id", ({ params, set }) => {
    const findUser = users.find((u) => u.id == Number(params.id))
    if (!findUser) {
        set.status = 404
        return { message: 'User Not Found' }
    }
    return findUser
})
moe.post('/users', ({ body }) => {
    const user = { id: nextId++, ...body }
    users.push(user)
    return user
}, {
    body: t.Object({
        name: t.String(),
        email: t.String(),
    })
})
moe.put('/users/:id', ({ params, body, set }) => {
    const idx = users.findIndex((u) => u.id == Number(params.id))
    if (idx === -1) {
        set.status = 404
        return { message: 'User Not Found' }
    }
    const updatedUser = { id: users[idx]!.id, ...body }
    users[idx] = updatedUser
    return updatedUser
}, {
    body: t.Object({
        name: t.String(),
        email: t.String(),
    })
})
moe.delete('/users/:id', ({ params, set }) => {
    const idx = users.findIndex((u) => u.id == Number(params.id))
    if (idx === -1) {
        set.status = 404
        return { message: 'Error User Not Found' }
    }
    users.splice(idx, 1)
    return { message: 'deleted' }
})

moe.listen(port)
console.log(`backend API server started!:\n\nhttp//localhost/${port}`)

// THANK YOU THATS ALL !