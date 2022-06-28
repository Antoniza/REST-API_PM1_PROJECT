const express = require('express');
const router = express.Router();
const {selectUsersQuery, insertUsersQuery, selectUsersUnique, deleteUsersUnique, updateUsersQuery} = require('../controllers/users.controller');

router.get('/', (req, res) => {
    res.send("Estas en la pagina principal");
});

router.get('/actionTableUsers/', selectUsersQuery);

router.get('/actionTableUsers/:id', selectUsersUnique);

router.post('/actionTableUsers', insertUsersQuery);

router.delete('/actionTableUsers/:id', deleteUsersUnique);

router.put('/actionTableUsers/:id', updateUsersQuery);

module.exports = router;