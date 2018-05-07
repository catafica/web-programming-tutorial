// function getRow(firstName, lastName, phone) {
//     return "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + phone + "</td></tr>";
// }
//
// var persons = [
//     firstName, lastName, phone
    // ["nicolae", "Matei", "321"],
    // ["nicolae", "Matei", "321"],
    // ["nicolae", "Matei", "321"],
    // ["nicolae", "Matei", "321"],
// ];
//
// var rows = '';
//
// persons.forEach(function(person) {
//     rows += getRow(person[0], person[1], person[2]);
// });
//
//
// $('#phone-book tbody').html(rows);


person = {
    nume: "Matei",
    prenume: "Nicolae",
    hasJob: true,
    sayHello: function(){
        return "Salut, bine ai venit pe site-ul lui " + person.nume + " " + person.prenume;
    }
};

