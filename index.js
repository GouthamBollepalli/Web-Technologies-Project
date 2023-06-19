function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // You can replace the condition below with your own login logic
    if (username === "admin" && password === "admin123") {
      document.getElementById("loginContainer").style.display = "none";
      document.getElementById("resultsContainer").style.display = "block";
    } else {
      alert("Invalid username or password");
    }
  
    document.getElementById("loginForm").reset();
  }
  
  function addResult() {
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var marks = document.getElementById("marks").value;
  
    var table = document.getElementById("resultTable");
    var row = table.insertRow(-1);
    var nameCell = row.insertCell(0);
    var subjectCell = row.insertCell(1);
    var marksCell = row.insertCell(2);
  
    nameCell.innerHTML = name;
    subjectCell.innerHTML = subject;
    marksCell.innerHTML = marks;
  
    document.getElementById("resultForm").reset();
  }
  