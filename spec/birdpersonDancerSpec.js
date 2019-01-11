describe('birdpersonDancer', function() {

  var birdperson, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    birdperson = new birdpersonDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(birdperson.$node).to.be.an.instanceof(jQuery);
  });
  it('should have a birdperson class', function() {
    expect(birdperson.$node.hasClass('birdPerson')).to.be.equal(true);
  });
  it('should have a step function that makes its node slide', function() {
    sinon.spy(birdperson.$node, 'slideToggle');
    birdperson.step();
    expect(birdperson.$node.slideToggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(birdperson, 'step');
      expect(birdperson.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(birdperson.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(birdperson.step.callCount).to.be.equal(2);
    });
  });
});