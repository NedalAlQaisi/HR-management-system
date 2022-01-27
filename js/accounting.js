//for local storage
let data = localStorage.getItem("Employees");
let parsedData = JSON.parse(data);
let table = document.createElement('table');
let thead = document.createElement('thead');


//for create head of table
document.getElementById('main').appendChild(table);
let rowTH = document.createElement('tr');
let head_1 = document.createElement('th');
head_1.innerHTML = "Department_Name";
let head_2 = document.createElement('th');
head_2.innerHTML = "Number_Of_Employess";
let head_3 = document.createElement('th');
head_3.innerHTML = "Average_Salary";
let head_4 = document.createElement('th');
head_4.innerHTML = "Total_Salary";

rowTH.appendChild(head_1);
rowTH.appendChild(head_2);
rowTH.appendChild(head_3);
rowTH.appendChild(head_4);
thead.appendChild(rowTH);