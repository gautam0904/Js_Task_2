new DataTable('#example');
debugger;
var table = new DataTable('#myTable');
// Add a child row to the first row with an array of data
table.row(':eq(0)').child(['First child row', 'Second child row', 'Third child row']).show();

// Add a child row to every row with custom HTML content
table.rows().every(function () {
    this.child(
        $('<tr>' +
        '<td>1.1</td>' +
        '<td>1.2</td>' +
        '<td>1.3</td>' +
        '<td>1.4</td>' +
        '</tr>')
    ).show();
});
console.log(table.row(':eq(0)'));
// Add a child row to the first row with text content
table.row(':eq(0)').child('Extra information...').show();

// Change the child row content and hide it
table.row(':eq(0)').child('Different information').hide();