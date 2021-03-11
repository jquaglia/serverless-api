# Lab 18: AWS API, Dynamo and Lambda

Create a serverless REST API.

## Author: Jason Quaglia

## [Link to GitHub repo](https://github.com/jquaglia/serverless-api)

## [Link to PR here](https://github.com/carlydekock/serverless-api/pull/1)

## Feature Tasks

Create a single resource REST API using a domain model of your choosing, constructed using AWS Cloud Services

- __Database:__ DynamoDB

  - 1 Table required

- __Routing:__ API Gateway

  - __POST__

    - `/people` - Given a JSON body, inserts a record into the database

    - returns an object representing one record, by its id (##)

  - __GET__

    - `/people` - returns an array of objects representing the records in the database

    - `/people/##` - returns an object representing one record, by its id (##)

  - __PUT__

    - `/people/##` - Given a JSON body and an ID (##), updates a record in the database

    - returns an object representing one record, by its id (##)

  - __DELETE__

    - `/people/##` - Given an id (##) removes the matching record from the database

    - returns an empty object

- __CRUD Operation Handlers:__ Lambda Functions

## Documentation

- Root [URL](https://om7eokq226.execute-api.us-west-2.amazonaws.com/test/people)

- Routes: GET/POST to /people, GET/PUT/DELETE to /people/{id}

- Inputs:

  - POST: input JSON body

  - PUT: input JSON body

  - DELETE: input ID

- Outputs:

  - GET: returns objects from database (all or specific id)

  - POST: returns object just added

  - PUT: returns updated object

  - DELETE: returns empty object

## UML

![image](/assets/UML.png)

## Credits and Collaborators

- Carly Dekock

- Jason Dormier

- Nick Magruder

- Seid Mohamed

- Bill Moreno

## Docs

- [Dynamoose docs](https://dynamoosejs.com/getting_started/Introduction)
