'use strict';

const chai = require('chai');
const expect = chai.expect;
chai.config.includeStack = true;

const wordWrap = require('./../src/prod');

describe('Word Wrap', () => {
    describe('acceptance test', ()=> {
      it('wrap at 72 with dashes if the value is omitted', () => {
       expect(wordWrap.aNew({}).wrap('12345678901234567890123456789012345678901234567890123456789012345678901234567890').text).to.eql('12345678901234567890123456789012345678901234567890123456789012345678901-\n234567890');
      });
      it('wrap at 80', () => {
       expect(wordWrap.aNew({wrapSize: 80}).wrap('12345678901234567890123456789012345678901234567890123456789012345678901234567890123').text).to.eql('1234567890123456789012345678901234567890123456789012345678901234567890123456789-\n0123');
      });
    });

    it('does not affect an empty input', () => {
     expect(wordWrap.aNew({}).wrap('').text).to.eql('');
    });
    it('does not affect an input shorter than wrap size', () => {
     expect(wordWrap.aNew({}).wrap('abc').text).to.eql('abc');
    });
    it('word wrap at any specified size', () => {
       expect(wordWrap.aNew({wrapSize: 3}).wrap('123456789012').text).to.eql('12-\n34-\n56-\n78-\n90-\n12');
      });
    it('word wrap at any specified size, without dashes', () => {
       expect(wordWrap.aNew({wrapSize: 3, wordSplitter: ''}).wrap('123456789012').text).to.eql('123\n456\n789\n012');
      });

});
