var expect = chai.expect;

describe('add', function() {
	it('should convert strings to numbers before adding them', function() {
		expect(add('1', '2')).to.equal(3);
	});
	it('should convert decimal strings to numbers before adding them', function() {
		expect(add('1.6', '2.1')).to.equal(3.7);
	});
	it('should convert decimal numbers to numbers before adding them', function() {
		expect(add('1.6', '2.2')).to.be.closeTo(3.8, 0.0000001);
	});
	it('should properly add two numbers', function() {
		expect(add(53.8, 37.4)).to.be.closeTo(91.2, 0.00000001);
	})
});

describe('subtract', function() {
	it('should throw an error if the first argument is not a string', function() {
		expect(function() { subtract(7); }).to.throw('Invalid Input');
	})
});