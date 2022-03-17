import app from '../src/index.mjs'
import Pizza from '../src/classes/Pizza.mjs'

import chai from 'chai'
import chai_http from 'chai-http'

const expect = chai.expect
chai.use(chai_http)

const request = () => {
    return chai.request(app)
}

describe('/api/v1/pizza endpoint tests', function () {
  it('should save a new pizza', done => {
    request()
      .post('/api/v1/pizza')
      .send(new Pizza('Aipim', 4.50, null, 'Queijo, aipim, molhote de tomate e azeitonas', 'Abacate'))
      .end((err, res) => {
        if (err) {
          done()
        }
        expect(res).to.have.status(201)
        done()
      })
  }).timeout(10000)

  it('should edit a existent pizza', done => {
    request()
      .put('/api/v1/pizza/1')
      .send(new Pizza('Aipim sem abacate', 4.50, null, 'Queijo, aipim, molhote de tomate e azeitonas', null))
      .end((err, res) => {
        if (err) {
            done()
        }
        expect(res).to.have.status(200)
        done()
      })
  }).timeout(10000)

  it('should delete a existent pizza', done => {
    request()
      .delete('/api/v1/pizza/1')
      .send()
      .end((err, res) => {
        if (err) {
            done()
        }
        expect(res).to.have.status(200)
        done()
      })
  }).timeout(10000)
})
