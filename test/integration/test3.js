const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

const auth = require('../../auth.js');
const createAppWithStub = () => require('../../createApp.js')(auth);

chai.use(chaiHttp);
let server;
let agent;
describe('route /allowUser2', () => {
  before(async () => {
    server = createAppWithStub();
    agent = chai.request.agent(server.app);
  });

  after(async () => {
    server.server.close(() => {
      console.log('Http server closed.');
    });
  });
  it("shouldn't allow access", async function () {
    const response2 = await chai.request(server.app).post('/allowUser2').send();
    const response1 = await agent.get('/allowUser2');
    expect(response2.status).to.be.equal(401);
    expect(response1.status).to.be.equal(401);
  });
});
