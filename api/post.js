// Local dependencies
const { handleErrors } = require('../src/api/helpers/error')
const { postS3 } = require('../src/api/helpers/s3')

module.exports = handleErrors(postS3)