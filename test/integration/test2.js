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
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(401);
  });
});
