const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);
let agent;
const application = require('../../application.js');

describe('route /allowUser2', () => {
  before(async () => {
    agent = chai.request.agent(application.app());
  });

  it("shouldn't allow access", async function () {
    const response2 = await agent.post('/allowUser2').send();
    const response1 = await agent.get('/allowUser2');
    expect(response2.status).to.be.equal(401);
    expect(response1.status).to.be.equal(401);
  });
});
