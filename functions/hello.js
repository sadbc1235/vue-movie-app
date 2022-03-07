exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'KES',
      age: 99,
      email: 'thesecond@gmail.com'
    })
  }
}