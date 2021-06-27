const app = require('../src/index') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)

it('search endpoint ', async done => {
    const response = await request.get('/iTunes/search/term=pravin')  
    expect(response.status).toBe(200)
    done()
  })

  it('invalid endpoint', async done => {
    const response = await request.get('/tds/ksdj/')  
    expect(response.status).toBe(400)
    done()
  })