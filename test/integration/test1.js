const sinon = require('sinon');
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

const auth = require('../../auth.js');
const createAppWithStub = () => require('../../createApp.js')(auth);

chai.use(chaiHttp);
let server;
describe('route /allowUser2', () => {
  before(async () => {
    // delete require.cache[require.resolve('../../app.js')]; // causes an error: `Error: listen EADDRINUSE: address already in use`.
    sinon.stub(auth, 'session').callsFake((req, res, next) => {
      req.user = { user: 2 };
      next();
    });
    server = createAppWithStub();
    agent = chai.request.agent(server.app);
  });

  after(async () => {
    server.server.close(() => {
      console.log('Http server closed.');
    });
    auth.session.restore();
  });
  it('should allow access', async function () {
    const response = await agent.get('/allowUser2');
    expect(response.status).to.be.equal(200);
  });
});
