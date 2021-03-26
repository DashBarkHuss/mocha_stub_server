const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app.js');

const { expect } = chai;

chai.use(chaiHttp);
const agent = chai.request.agent(app);
describe('route /allowUser2', () => {
  it("shouldn't allow access", async function () {
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(401);
  });
});
