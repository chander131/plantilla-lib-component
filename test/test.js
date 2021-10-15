'use strict';
var expect = require('chai').expect;
var functions = require('../build/functions');

describe('simple validate test', () => {
    it('should return true for null string', () => {
        var result = functions.IsNullOrEmpty(null);
        expect(result).to.equal(true);
    });
    it('should return true for undefined string', () => {
        var result = functions.IsNullOrEmpty(undefined);
        expect(result).to.equal(true);
    });
    it('should return true for empty string', () => {
        var result = functions.IsNullOrEmpty("");
        expect(result).to.equal(true);
    });
    it('should return true for whitespace string', () => {
        var result = functions.IsNullOrEmpty(" ");
        expect(result).to.equal(true);
    });
    it('should return false for non-empty string', () => {
        var result = functions.IsNullOrEmpty("test");
        expect(result).to.equal(false);
    });
});