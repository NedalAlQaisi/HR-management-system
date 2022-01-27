let arr = [];


let form = document.getElementById("form");


function Employee(employeeID, fullName, department, level, img) {

    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.img = img;
    arr.push(this);
}


//The data to be stored

let Nedal = new Employee(1000, "Nedal", "Administration", "Senior", 'images/Nedal.jpg');
let Ghazi = new Employee(1001, "Ghazi Samer", "Administration", "Senior", 'images/Ghazi.jpg');
let Lana = new Employee(1002, "Lana Ali", "Finance", "Senior", 'images/Lana.jpg');
let Tamara = new Employee(1003, "Tamara Ayoub", "Marketing", "Senior", 'images/Tamara.jpg');
let Safi = new Employee(1004, "Safi Walid", "Administration", "Mid-Senior", 'images/Safi.jpg');
let Omar = new Employee(1005, "Omar Zaid", "Development", "Senior", 'images/Omar.jpg');
let Rana = new Employee(1006, "Rana Saleh", "Development", "Junior", 'images/Rana.jpg');
let Hadi = new Employee(1007, "Hadi Ahmad", "Finance", "Mid-Senior", 'images/Hadi.jpg');


form.addEventListener("submit", addEmbloyee)

function addEmbloyee(event) {
    event.preventDefault();
    let fullName = event.target.fullName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let image = event.target.image.value;
    let newId = generatID();
    let newEmployee = new Employee(newId, fullName, department, level, image);
    newEmployee.raNsalary();
    saveForm();
    newEmployee.render();

}


Employee.prototype.raNsalary = function() {
    let fSalary = 0;
    switch (this.level) {
        case "Junior":
            fSalary = Math.floor(Math.random() * (1000 - 500)) + 500;
            break;
        case "Mid-Senior":
            fSalary = Math.floor(Math.random() * (1500 - 1000)) + 1000;

            break;
        case "Senior":
            fSalary = Math.floor(Math.random() * (2000 - 1500)) + 1500;
            break;
        default:
            console.log("No level")
            break;
    }

    //Salary After Tax 

    fSalary = fSalary - ((7.5 * 100) / 100);
    this.salary = fSalary;
    return fSalary;
}


function generatID() {
    var valu = Math.floor(1000 + Math.random() * 9999);
    return valu;
}

Employee.prototype.render = function() {
    var newDiv = document.createElement("div");
    newDiv.style.backgroundColor = "#219F94";
    newDiv.style.width = "250px";
    newDiv.style.padding = "20px";
    newDiv.style.margin = "20px";
    newDiv.style.fontSize = "17px";
    newDiv.style.color = "white";


    let image = document.createElement('img');
    image.setAttribute("src", this.img);
    newDiv.appendChild(image).width = "210";
    newDiv.appendChild(image).height = "210";
    divEmployee.appendChild(newDiv);

    let info = document.createElement('p')
    info.textContent = "Name : " + this.fullName + " - " + "ID: " + this.employeeID +
        " " + "Department: " + this.department + "     " + "level : " + this.level + " - " + "Salary: " + this.raNsalary();

    newDiv.appendChild(info);

    divEmployee.appendChild(newDiv);
}

function renderAll() {
    arr.forEach(element => {
        element.render();
    });
}


function saveForm() {
    let stringfiedEmployees = JSON.stringify(arr)
    localStorage.setItem("Employees", stringfiedEmployees);

}

function getForm() {

    let data = localStorage.getItem("Employees");
    let parsedData = JSON.parse(data);
    if (parsedData != null) {
        arr = [];
        console.log(parsedData);
        for (let i = 0; i < parsedData.length; i++) {
            console.log(parsedData[i]);
            new Employee(parsedData[i].employeeID, parsedData[i].fullName, parsedData[i].department, parsedData[i].level, parsedData[i].img);

        }
    }

}
getForm();
renderAll();








// document.write("<h1>EMPLOYEES</h1> <br>");

// for (let i = 0; i < arr.length; i++) {
// document.write(`<p> <b>Empolyee Name:</b>   ${arr[i].fullName}</p>`);
// document.write(`<p><b>The Salary:</b>       ${arr[i].getSalary()}</p>`);
// document.write(`<p><b>Salary After Tax:</b> ${arr[i].getTax(arr[i].salary)}</p>`);
// document.write('<br> <hr> <br>');
// }

// }