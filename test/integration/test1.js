let app;
const sinon = require('sinon');
const auth = require('../../auth.js');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);
let agent;
describe('route /allowUser2', () => {
  before(async () => {
    // delete require.cache[require.resolve('../../app.js')]; // causes an error: `Error: listen EADDRINUSE: address already in use`.
    sinon.stub(auth, 'session').callsFake((req, res, next) => {
      req.user = { user: 2 };
      next();
    });
    app = require('../../app.js');
    agent = chai.request.agent(app);
  });

  after(async () => {
    auth.session.restore();
  });
  it('should allow access', async function () {
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(200);
  });
});
