const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Kunal", course: "BCA", city: "Dehradun", fees: 45000 },
    { id: 2, name: "Aman", course: "MCA", city: "Delhi", fees: 60000 },
    { id: 3, name: "Riya", course: "BCA", city: "Noida", fees: 35000 },
    { id: 4, name: "Priya", course: "BTech", city: "Delhi", fees: 80000 },
    { id: 5, name: "Rohit", course: "MCA", city: "Lucknow", fees: 50000 }
];

// 1. Welcome Message
app.get("/", (req, res) => {
    res.send("Welcome to Express.js Student Management System");
});

// 2. Fetch All Students
app.get("/students", (req, res) => {
    res.json(students);
});

// 3. Fetch Student By ID
app.get("/students/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return res.json(students[i]);
        }
    }

    res.send("Student not found");
});

// 4. Add New Student
app.post("/students", (req, res) => {
    students.push(req.body);

    res.send("Student Added Successfully");
});

// 5. Delete Student By ID
app.delete("/students/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students.splice(i, 1);
            return res.send("Student Deleted Successfully");
        }
    }

    res.send("Student not found");
});

// 6. Update Student Information
app.put("/students/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = req.body.name;
            students[i].course = req.body.course;
            students[i].city = req.body.city;
            students[i].fees = req.body.fees;

            return res.send("Student Updated Successfully");
        }
    }

    res.send("Student not found");
});

// 7. Search Student By Name
app.get("/students/search/name/:name", (req, res) => {
    let name = req.params.name;
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === name.toLowerCase()) {
            result.push(students[i]);
        }
    }

    res.json(result);
});

// 8. Search Student By Course
app.get("/students/search/course/:course", (req, res) => {
    let course = req.params.course;
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].course.toLowerCase() === course.toLowerCase()) {
            result.push(students[i]);
        }
    }

    res.json(result);
});

// 9. Filter Students By City
app.get("/students/city/:city", (req, res) => {
    let city = req.params.city;
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].city.toLowerCase() === city.toLowerCase()) {
            result.push(students[i]);
        }
    }

    res.json(result);
});

// 10. Count Total Students
app.get("/students/count", (req, res) => {
    res.send("Total Students = " + students.length);
});

// 11. Fees Greater Than Given Amount
app.get("/students/fees/greater/:amount", (req, res) => {
    let amount = parseInt(req.params.amount);
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].fees > amount) {
            result.push(students[i]);
        }
    }

    res.json(result);
});

// 12. Fees Less Than Given Amount
app.get("/students/fees/less/:amount", (req, res) => {
    let amount = parseInt(req.params.amount);
    let result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].fees < amount) {
            result.push(students[i]);
        }
    }

    res.json(result);
});

// 13. Sort Students By Name
app.get("/students/sort/name", (req, res) => {
    students.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });

    res.json(students);
});

// 14. Sort Students By Fees (Low to High)
app.get("/students/sort/fees/asc", (req, res) => {
    students.sort(function(a, b) {
        return a.fees - b.fees;
    });

    res.json(students);
});

// 15. Sort Students By Fees (High to Low)
app.get("/students/sort/fees/desc", (req, res) => {
    students.sort(function(a, b) {
        return b.fees - a.fees;
    });

    res.json(students);
});

// 16. Check Student Exists Or Not
app.get("/students/exists/:id", (req, res) => {
    let id = parseInt(req.params.id);

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            return res.send("Student Exists");
        }
    }

    res.send("Student Not Found");
});

// 17. Calculate Total Fees Collected
app.get("/students/fees/total", (req, res) => {
    let total = 0;

    for (let i = 0; i < students.length; i++) {
        total = total + students[i].fees;
    }

    res.send("Total Fees Collected = " + total);
});

// 18. Get Course-wise Student Lists
app.get("/students/coursewise", (req, res) => {
    let result = {};

    for (let i = 0; i < students.length; i++) {
        let course = students[i].course;

        if (!result[course]) {
            result[course] = [];
        }

        result[course].push(students[i]);
    }

    res.json(result);
});

// 19. Add Multiple Students At Once
app.post("/students/multiple", (req, res) => {
    let newStudents = req.body;

    for (let i = 0; i < newStudents.length; i++) {
        students.push(newStudents[i]);
    }

    res.send("Multiple Students Added Successfully");
});

// 20. Generate Student Report Dashboard
app.get("/dashboard", (req, res) => {
    let totalFees = 0;

    for (let i = 0; i < students.length; i++) {
        totalFees = totalFees + students[i].fees;
    }

    res.json({
        totalStudents: students.length,
        totalFeesCollected: totalFees,
        students: students
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});