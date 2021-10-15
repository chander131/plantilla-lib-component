const { expect } = require('chai');
const { IsNullOrEmpty } = require('../build/functions');

describe('Prueba validacion simple', () => {
	it('should return true for null string', () => {
		const result = IsNullOrEmpty(null);
		expect(result).to.equal(true);
	});
	it('should return true for undefined string', () => {
		var result = IsNullOrEmpty(undefined);
		expect(result).to.equal(true);
	});
	it('should return true for empty string', () => {
		var result = IsNullOrEmpty('');
		expect(result).to.equal(true);
	});
	it('should return true for whitespace string', () => {
		var result = IsNullOrEmpty(' ');
		expect(result).to.equal(true);
	});
	it('should return false for non-empty string', () => {
		var result = IsNullOrEmpty('test');
		expect(result).to.equal(false);
	});
});
