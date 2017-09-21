'use strict';

var app = require("../server"),
    chai = require("chai"),
    request = require('supertest');

var expect = chai.expect;

describe('Todos list api integration test', function(){
    var task = {
        name: 'integration test'
    };

    describe('#get /tasks', function () {
       it('should get all tasks', function(done){
           request(app).get('/tasks').end(function (err, res) {
                   expect(res.statusCode).to.equal(200);
                   expect(res.body).to.be.an('array');
                   // expect(res.body).to.have.lengthOf(4);
                   done();
               });
       });
    });

    describe('# create /tasks', function(){
        it('should create a task', function(done){
            request(app).post('/tasks').send(task).end(function (err, res) {
               expect(res.statusCode).to.equal(200);
               expect(res.body.name).to.equal('integration test');
               task = res.body;
               done();
            });
        });
    });

    describe('#get /taks by id', function () {
       it('should get a task', function(done){
           request(app).get('/tasks/' + task._id).end(function(err, res){
             expect(res.statusCode).to.equal(200);
             expect(res.body.name).to.equal('integration test');
             done();
           });
       });
    });
});

