const Contact = require("../models").Contact;

class ContactController {
  static greet(req, res) {
    res.status(200).json({ message: 'welcome' })
  }
  static all(req, res) {
    Contact.findAll().then(contacts => {
      res.status(200).json(contacts);
    });
  }
  static create(req, res) {
    let { name, phone } = req.body;
    Contact.create({
      name,
      phone
    })
      .then(result => {
        res.status(201).json(result);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  }
  static remove(req, res) {
    Contact.destroy({
      where: {id: req.params.id}
    })
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  }
  static put(req, res) {
    let { name, phone } = req.body;
    Contact.update(
      { name, phone },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  }
  static updatePhone(req, res) {
    let { phone } = req.body;
    Contact.update(
      { phone },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  }
  static updateName(req, res) {
    let { name } = req.body;
    Contact.update(
      { name },
      {
        where: {
          id: req.params.id
        }
      }
    )
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        res.status(400).json(err)
      });
  }
}

module.exports = ContactController;
