// Local dependencies
const { handleErrors } = require('../src/api/helpers/error')
const { getS3 } = require('../src/api/helpers/s3')

module.exports = handleErrors(getS3)