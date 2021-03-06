describe('meeseeksDancer', function() {

  var meeseekDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    meeseekDancer = new meeseeksDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(meeseekDancer.$node).to.be.an.instanceof(jQuery);
  });
  it('should have a meeseeks class', function() {
    expect(meeseekDancer.$node.hasClass('meeseeks')).to.be.equal(true);
  });
  it('should have a step function that makes its node blink', function() {
    sinon.spy(meeseekDancer.$node, 'fadeToggle');
    meeseekDancer.step();
    expect(meeseekDancer.$node.fadeToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(meeseekDancer, 'step');
      expect(meeseekDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(meeseekDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(meeseekDancer.step.callCount).to.be.equal(2);
    });
  });
});