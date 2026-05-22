const API = "http://localhost:8080/employees"; // change to 8081 if needed

function loadEmployees() {
    fetch(API)
        .then(res => res.json())
        .then(data => {
            let list = document.getElementById("list");
            list.innerHTML = "";

            data.forEach(emp => {
                list.innerHTML += `
                    <div class="employee">
                        <b>${emp.name}</b><br>
                        ${emp.email}<br>
                        ${emp.department}
                        <button class="delete-btn" onclick="deleteEmployee(${emp.id})">Delete</button>
                    </div>
                `;
            });
        });
}

function addEmployee() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const dept = document.getElementById("dept").value;

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email,
            department: dept
        })
    }).then(() => {
        loadEmployees();
    });
}

function deleteEmployee(id) {
    fetch(API + "/" + id, {
        method: "DELETE"
    }).then(() => {
        loadEmployees();
    });
}

// Load data on start
loadEmployees();