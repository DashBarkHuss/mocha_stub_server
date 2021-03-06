const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);
let server;
let agent;
describe('route /allowUser2', () => {
  before(async () => {
    server = require('../../app.js')();
    agent = chai.request.agent(server.app);
  });

  after(async () => {
    server.server.close(() => {
      console.log('Http server closed.');
    });
  });
  it("shouldn't allow access", async function () {
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(401);
  });
});
