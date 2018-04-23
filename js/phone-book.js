function getRow(firstName, lastName, phone, id) {
    return '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + phone + '</td>' +
        `<td><a href="tmp/remove-contact.html?id=${id}"> x</a></td>` +
        '</tr>';

}

var persons = [];

$.get('js/mocks/phone-book.json').done(function(data) {
    console.warn("phone book loaded");
    persons = data;
    display();
});

console.info('should load persons');


function display() {
    var rows = '';

    function createRows(person) {
        rows += getRow(person.firstName, person.lastName, person.phone, person.id ) ;
    }
    persons.forEach(createRows);

    rows += '<tr>' +
        '<td><input type="text" required name="firstName" placeholder="Enter first name"></td>' +
        '<td><input type="text" name="lastName" placeholder="Enter last name"></td>' +
        '<td>' +
            '<input type="text" name="phone" placeholder="Enter phone">' +
            '<button type="submit">Add</button>' +
        '</td>' +
        '</tr>';





    $('#phone-book tbody').html(rows);
}



// for (var i = 0; i < persons.length; i++) {
//     var person = persons[i];
//     rows += getRow(person[0], person[1], person[2]);


// $('#phone-book tbody').html(rows);





