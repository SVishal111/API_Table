console.log("Hello, Programming!");

var apiUrl = 'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001';

async function asyncawait() {
    var response = await fetch(apiUrl);
    var data = await response.json();

    console.log(data);

    var tbody = document.getElementById("tbody");

    data.forEach((item) => {
        var row = document.createElement('tr');
        row.innerHTML = `<td>${item.firstName}</td>
            <td>${item.lastName}</td>
            <td>${item.id}</td>
            <td>${item.dob}</td>
            <td>${item.contactNumber}</td>`
            tbody.append(row);
    });
}

window.onload = asyncawait();