var expect = chai.expect;

describe('rovarsprocket', function() {
	it('should exist', function() {
		expect(rovarsprocket).to.not.be.undefined;
	});
	it('should not accept non-string input', function() {
		expect(function() {rovarsprocket([1,2,3])}).to.throw('You can only pass a string into this function.');
	});
	it('should accept string input', function() {
		expect(function() {rovarsprocket('test')}).to.not.throw('You can only pass a string into this function.');
	});
	it('should replace this with tothohisos', function() {
		expect(rovarsprocket('this')).to.equal('tothohisos');
	});
	it('should replace alakazam with alolakokazozamom', function() {
		expect(rovarsprocket('alakazam')).to.equal('alolakokazozamom');
	});
	it('should not accept strings with non-alphabetic characters', function() {
		expect(function() {rovarsprocket('s1eepy')}).to.throw('You can only pass an alphabetic string into this function.');
	});
});