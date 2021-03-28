const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

const application = require('../../application.js');
const auth = require('../../auth.js');

chai.use(chaiHttp);
describe('route /allowUser2', () => {
  before(async () => {
    sinon.stub(auth, 'session').callsFake((req, res, next) => {
      req.user = { user: 2 };
      next();
    });
    agent = chai.request.agent(application.app());
  });

  after(async () => {
    auth.session.restore();
  });
  it('should allow access', async function () {
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(200);
  });
});
