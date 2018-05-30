import request from 'supertest';
import app from '../server';

describe('test api', () => {
  it('get test should return 200 OK', () => {
    return request(app).get('/test')
        .expect(200);
  });
  it('get test2 should return 404', () => {
    return request(app).get('/test2')
        .expect(404);
  });

  it('add entity', (done) => {
    request(app)
        .post('/addMission')
        .set('Accept', 'application/json')
        .send({ name: 'test3' })
        // .expect((res => {
        //   assert(res.body, { name: 'test3' });
        // }))
        .then (res => res)
        // .end((err, res) => {
        //   console.log(err);
        //   done();
        // });
        .catch(err => err)
  });

});

