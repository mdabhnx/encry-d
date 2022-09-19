const experss = require('express')
const Cryptr = require('cryptr')

const secrets = require('../../secrets/secret.json')

const routes = experss.Router()

const cryptr = new Cryptr(secrets.CrypSecrect)

routes.post('/encr', (req, res) => {
  try {
    const { authorization } = req.headers
    const { content } = req.body
    if (authorization === undefined || content === undefined) {
      throw Error('Auth key or Content is missing.')
    }

    if (authorization !== secrets.authKey) {
      throw Error('Invalid User')
    }

    const encryptedContent = cryptr.encrypt(content)

    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        content: encryptedContent,
      },
      errors: [],
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Internal Server Error',
    })
  }
})

routes.post('/decr', (req, res) => {
  try {
    const { authorization } = req.headers
    const { content } = req.body
    if (authorization === undefined || content === undefined) {
      throw Error('Auth key or Content is missing.')
    }

    if (authorization !== secrets.authKey) {
      throw Error('Invalid User')
    }

    const decryptedContent = cryptr.decrypt(content)

    res.status(200).json({
      status: 200,
      message: 'success',
      data: {
        content: decryptedContent,
      },
      errors: [],
    })
  } catch (error) {
    res.status(500).json({
      message: error.message || 'Internal Server Error',
    })
  }
})

module.exports = routes
