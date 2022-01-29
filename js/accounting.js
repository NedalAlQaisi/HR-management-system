//for local storage
let data = localStorage.getItem("Employees");
let parsedData = JSON.parse(data);

let table = document.createElement('table');

let thead = document.createElement('thead');
table.appendChild(thead);

let tbody = document.createElement('tbody');
table.appendChild(tbody);


//for create head of table
document.getElementById('main').appendChild(table);
let rowTH = document.createElement('tr');
let head_1 = document.createElement('th');
head_1.innerHTML = "Department Name";
let head_2 = document.createElement('th');
head_2.innerHTML = "Number Of Employess";
let head_3 = document.createElement('th');
head_3.innerHTML = "Average Salary";
let head_4 = document.createElement('th');
head_4.innerHTML = "Total Salary";

rowTH.appendChild(head_1);
rowTH.appendChild(head_2);
rowTH.appendChild(head_3);
rowTH.appendChild(head_4);
thead.appendChild(rowTH);



let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = "Administration";
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = num_of_Administration();
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = averageSalaryAdministration();
let row_2_data_4 = document.createElement('td');
row_2_data_4.innerHTML = salaryAdministration();

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
row_2.appendChild(row_2_data_4);
tbody.appendChild(row_2);

let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "Development";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML = num_of_Development();
let row_3_data_3 = document.createElement('td');
row_3_data_3.innerHTML = averageSalaryDevelopment();
let row_3_data_4 = document.createElement('td');
row_3_data_4.innerHTML = salaryDevelopment();


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
row_3.appendChild(row_3_data_4);
tbody.appendChild(row_3);

let row_4 = document.createElement('tr');
let row_4_data_1 = document.createElement('td');
row_4_data_1.innerHTML = "Finance";
let row_4_data_2 = document.createElement('td');
row_4_data_2.innerHTML = num_of_Finance();
let row_4_data_3 = document.createElement('td');
row_4_data_3.innerHTML = averageSalaryFinance();
let row_4_data_4 = document.createElement('td');
row_4_data_4.innerHTML = salaryOfFinance();


row_4.appendChild(row_4_data_1);
row_4.appendChild(row_4_data_2);
row_4.appendChild(row_4_data_3);
row_4.appendChild(row_4_data_4);
tbody.appendChild(row_4);

let row_5 = document.createElement('tr');
let row_5_data_1 = document.createElement('td');
row_5_data_1.innerHTML = "Marketing";
let row_5_data_2 = document.createElement('td');
row_5_data_2.innerHTML = num_of_Marketing();
let row_5_data_3 = document.createElement('td');
row_5_data_3.innerHTML = averageSalaryMarketing();
let row_5_data_4 = document.createElement('td');
row_5_data_4.innerHTML = salaryMarketing();


row_5.appendChild(row_5_data_1);
row_5.appendChild(row_5_data_2);
row_5.appendChild(row_5_data_3);
row_5.appendChild(row_5_data_4);
tbody.appendChild(row_5);




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Function for Administration]
function num_of_Administration() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Administration") {

            x++;
        }
    });
    return x;
}


function averageSalaryAdministration() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Administration") {
            x += element.salary;

        }
    });
    let num = num_of_Administration();
    x = x / num;
    return x;
}

function salaryAdministration() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Administration") {
            x += element.salary;

        }
    });
    return x;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Function for Development]
function num_of_Development() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Development") {
            x++;

        }
    });
    return x
}

function salaryDevelopment() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Development") {
            x = x + element.salary;

        }
    });
    return x;
}

function averageSalaryDevelopment() {
    let x = salaryDevelopment();

    let num = num_of_Development();
    x = x / num;
    return x;
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Function for Finance]
function num_of_Finance() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Finance") {
            x++;

        }
    });
    return x;
}

function salaryOfFinance() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Finance") {
            x += element.salary;

        }
    });
    return x;
}

function averageSalaryFinance() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Finance") {
            x += element.salary;

        }
    });
    let num = num_of_Finance();
    x = x / num;
    return x;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Function for Marketing]
function num_of_Marketing() {
    {
        let x = 0;
        parsedData.forEach(element => {
            if (element.department == "Marketing") {
                x++;

            }
        });
        return x;
    }

}

function averageSalaryMarketing() {
    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Marketing") {
            x += element.salary;

        }
    });
    let num = num_of_Marketing();
    x = x / num;
    return x;
}


function salaryMarketing() {

    let x = 0;
    parsedData.forEach(element => {
        if (element.department == "Marketing") {
            x += element.salary;

        }
    });
    return x;

}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>








//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>[All function for Total]<<<<<<<<<<<<<<<<<<<<
var footer = table.createTFoot();
var row = footer.insertRow(0);
var cell_0 = row.insertCell(0);
cell_0.innerHTML = "Total";
cell_0.style.color = "red";
cell_0.style.backgroundColor = "#FFFDDE";
cell_0.style.fontSize = "25px";


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Total Employess]
var cell_1 = row.insertCell(1);
cell_1.innerHTML = totalEmployees();
cell_1.style.color = "red";
cell_1.style.backgroundColor = "#FFFDDE";
cell_1.style.fontSize = "25px";


function totalEmployees() {

    let tE = parsedData.length;
    return tE
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Average All Salary]
var cell_2 = row.insertCell(2)
cell_2.innerHTML = average_all_Salary();
cell_2.style.color = "red";
cell_2.style.backgroundColor = "#FFFDDE";
cell_2.style.fontSize = "25px";



function average_all_Salary() {
    let x = 0;
    parsedData.forEach(element => {
        x += element.salary;
    });

    x = x / parsedData.length;
    return x;

}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> [Total Salary]
var cell_3 = row.insertCell(3);
cell_3.innerHTML = totalSalary();
cell_3.style.color = "red";
cell_3.style.backgroundColor = "#FFFDDE";
cell_3.style.fontSize = "25px";



function totalSalary() {
    let tS = 0;
    parsedData.forEach(element => {
        tS += element.salary;
    });
    return tS;
}
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>