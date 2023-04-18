const userController = require('../controllers/userController');



// post router of signup function

app.post('/signup', (req, res)=> {
    const {name, surname, email, password, numtel, isitStudent, specialite, grade, departement} = req.body;

    if (isitStudent) {
        res.redirect('/student');
        res.status(201, ()=> console.log('compte etudiant cree!'));
        return;
    } else {
        res.redirect('/encadrant');
        res.status(201, ()=> console.log('compte encadrant cree!'));
        return;
    }
});



module.exports = router;

