const dynamoose = require('dynamoose');
const peopleModel = require('./people.schema.js');

exports.handler = async (event) => {

  let id = event.pathParameters && event.pathParameters.id;

  try {

    await peopleModel.delete({ 'id': id });

  } catch (e) {
    return {
      statusCode: 500,
      body: e.message,
    };
  }

  let response = {
    statusCode: 200,
    body: JSON.stringify('Item successfully deleted'),
  };

  return response;
};