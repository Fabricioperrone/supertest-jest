const request = require('supertest')

describe('Meu primeiro teste com Jest e Supertest', () => {
    it('Hello World - Jest', () => {
        expect(2 + 3).toBe(5)
    })

    it("Hello World - supertest", async () => {
     await request('https://www.thunderclient.com').get('/welcome').expect(200)
    })
})