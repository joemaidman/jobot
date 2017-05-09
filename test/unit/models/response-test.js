"strict mode";

describe("Response", function(){
  var getRandomResponse = require('../../../app/models/response.js');
  var jsonPreambles = require('../../../app/data/preambles');
  var jsonResponses = require('../../../app/data/responses');

  before(function(){
    sinon.stub(Math, 'random').returns(0);
  });

  it('can return a response for motivation', function () {
    expect(getRandomResponse('motivation')).to.eql("What a great question! I began to use programming as a natural extension of my work-flow, analysing share prices and company accounts and automating repetitive tasks, developing a love of coding in the process.");
  });

  it('can return a response for experience', function () {
    expect(getRandomResponse('experience')).to.eql("What a great question! I spent ten years in finance as a sell-side equity research analyst, working in a small team covering listed investment funds, a niche area of the market. I was responsible for writing and publishing research on companies, dealing with large and disparate data sets and combining qualitative and quantitative inputs to reach useful conclusions on a wide variety of sectors from technology to healthcare. Working as a Financial Analyst was all about understanding businesses and the potential impact of their decisions. My role also meant worked in a B2B environment dealing with clients on a daily basis.");
  });

  it('can return a response for hobbies', function () {
    expect(getRandomResponse('hobbies')).to.eql("What a great question! I enjoy music and play the piano by ear.");
  });

  it('can return a response for ideal role', function () {
    expect(getRandomResponse('idealrole')).to.eql("What a great question!  I am looking for an pportunity to combine my existing experience with my passion for technology and new skills as a junior full stack developer.");
  });

  it('can return a response for strengths', function () {
    expect(getRandomResponse('strengths')).to.eql("What a great question! I am told that I have good people skills and can empathise with those around me. I have also received wonderful feedback during my time at Makers Academy that I am fun to work with and have the patience and willingness to break down and explain complex ideas.");
  });

});
