'use strict';

var app = require("../server"),
    chai = require("chai"),
    request = require('supertest');

var expect = chai.expect;

describe('Todos list api integration test', function(){
    describe('#get / tasks', function () {
       it('should get all tasks', function(done){
           request(app).get('/tasks')
               .end(function (err, res) {
                   expect(res.statusCode).to.equal(200);
                   expect(res.body).to.be.an('array');
                   expect(res.body).to.have.lengthOf(3);
                   done();
               });
       });
    });
});

