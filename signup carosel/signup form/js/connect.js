const f_name = document.getElementById("f_name");
const l_name = document.getElementById("l_name");
const mail = document.getElementById("mail");
const c_study = document.getElementById("c_study");
const c_level = document.getElementById("c_level");
const number = document.getElementById("number");
const w_ambassador = document.getElementById("w_ambassador");



const registernowbtn = document.getElementById("registernowbtn");

const database = firebase.database();

registernowbtn.addEventListener('click', (e) => {
    e.preventDefault();


    database.ref('/users/' + f_name.value).set({

      
        last_name: l_name.value,
        mail: mail.value,
        c_study: c_study.value,
        c_level: c_level.value,
        number: number.value,
        w_ambassador: w_ambassador.value,
       




    });
});