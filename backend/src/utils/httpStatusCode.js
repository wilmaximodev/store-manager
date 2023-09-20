const httpStatusCode = {
    OK: 200,
    CREATED: 201,
    NOT_FOUND: 404,
    UNPROCESSABLE_ENTITY: 422,
    BAD_REQUEST: 400,
  };
  
  const statusCode = (status) => httpStatusCode[status] || 500;

  module.exports = statusCode;