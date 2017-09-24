# SuperTest-Mocha-Chai
Use [Mocha](https://mochajs.org/) to run [SuperTest](https://github.com/visionmedia/supertest) API testing scripts. [Chai](http://chaijs.com/)library is used to do assertions.

[Istanbul](https://github.com/gotwarlost/istanbul), is a JavaScript code coverage tool that computes statement, line, function, and branch coverage with module loader hooks to transparently add coverage when running tests.

# Preview

 You just need to  clone this repo,that's all.

# Run
* Install node_module

```
npm install
```

* With command `npm run start`,you can start the server:

```
> todo_list_api_test@1.0.0 start /Users/twer/Documents/AutoTest/SuperTest/todoListApiTest
> nodemon server.js

[nodemon] 1.12.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
todo list RESTful API server started on: 3000

```
* With command `npm run test`,you can run the api testing scripts:

```
> todo_list_api_test@1.0.0 test /Users/twer/Documents/AutoTest/SuperTest/todoListApiTest
> NODE_ENV=test mocha --timeout 10000

todo list RESTful API server started on: 3000


(node:4146) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
  Todos list api integration test
    Create a task
      ✓ should create a task (92ms)
    Get all tasks
      ✓ should get all tasks
    Get a task by id
      ✓ should get a task
    Update a task by id
      ✓ should modify a task
    Delete a task by id
      ✓ should delete a task


  5 passing (148ms)



   ╭─────────────────────────────────────╮
   │                                     │
   │   Update available 5.3.0 → 5.4.2    │
   │     Run npm i -g npm to update      │
   │                                     │
   ╰─────────────────────────────────────╯

```
* With command `npm run test-coverage`,it can calculate code coverage:

```
> todo_list_api_test@1.0.0 test-coverage /Users/twer/Documents/AutoTest/SuperTest/todoListApiTest
> NODE_ENV=test istanbul cover _mocha -- -R spec

todo list RESTful API server started on: 3000


(node:4273) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
  Todos list api integration test
    Create a task
      ✓ should create a task (38ms)
    Get all tasks
      ✓ should get all tasks
    Get a task by id
      ✓ should get a task
    Update a task by id
      ✓ should modify a task
    Delete a task by id
      ✓ should delete a task


  5 passing (78ms)

=============================================================================
Writing coverage object [/Users/twer/Documents/AutoTest/SuperTest/todoListApiTest/coverage/coverage.json]
Writing coverage reports at [/Users/twer/Documents/AutoTest/SuperTest/todoListApiTest/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 87.23% ( 41/47 )
Branches     : 58.33% ( 7/12 )
Functions    : 91.67% ( 11/12 )
Lines        : 87.23% ( 41/47 )
================================================================================
```

 
