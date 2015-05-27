var expect = chai.expect;


describe('sum', function() {
	it('should exist', function() {
		expect(sum).to.not.be.undefined;
	});
	it('should return zero if I pass in an empty array', function() {
		expect(sum([])).to.equal(0);
	});
	it('should return the sum if I pass in an array of numbers', function() {
		expect(sum([1,2,3])).to.equal(6);
		expect(sum([1,2,3,4])).to.equal(10);
	});
});