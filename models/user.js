const mongoose= require('mongoose');

const Specialite = ["Psychopedagogie", "guidance-et-orientation", "systeme-educatif" ];
const Grade = ["professeur", "MCA", "MCB", "MAA", "MAB", "Doctorant"];
const Departement= ["psyeducortho","socio","sci-info-comm"];

//defining the schema of the user
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    numtel: {
        type: String,
        required: true
    },
    isitStudent: {
        type:Boolean,
        required: true
    },
    departement: {
        type: Departement,
        required: true
    },
    grade: {
        type: Grade,
        required: true
    },
    specialite: {
        type: Specialite,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
