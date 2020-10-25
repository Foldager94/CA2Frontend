import 'bootstrap/dist/css/bootstrap.css'
// import navigation from "./navigation";
const URLgetpersonbyphone = "https://vd52024.dk/CA2/api/person/phone/"
const URLgetpersonbyid = "https://vd52024.dk/CA2/api/api/person/"
const URLaddperson = "https://vd52024.dk/CA2/api/api/person/"
const URLgetHobbybyname = "https://vd52024.dk/CA2/api/hobby/"
const URLgetAllPersonsWithHobby = "https://vd52024.dk/CA2/api/hobby/all/"
const URLgetAllZipcodes = "https://vd52024.dk/CA2/api/cityinfo/all"

document.getElementById("div2btn1").addEventListener("click", function getPersonByID() {
    const id = document.getElementById("myInput2").value;
    fetch(URLgetpersonbyid + id)
        .then(res => res.json())
        .then(person => {
            document.getElementById("text2").innerHTML = "ID: " + person.id + "<br>Navn: " + person.fName;
        });
    ;
});

document.getElementById("div3btn1").addEventListener("click", function getPersonByPhone() {
    const phonenr = document.getElementById("myInput3").value;
    fetch(URLgetpersonbyphone + phonenr)
        .then(res => res.json())
        .then(person => {
            document.getElementById("text3").innerHTML = "ID: " + person.id + "<br>Navn: " + person.fName;
        });
    ;
});

document.getElementById("div6btn1").addEventListener("click", function getHobbyByName() {
    const name = document.getElementById("myInput6").value;
    fetch(URLgetHobbybyname + name)
        .then(res => res.json())
        .then(Hobby => {
            document.getElementById("text6").innerHTML = "Navn: " + Hobby.name + "<br>Type: " + Hobby.type;
        });
    ;
});



document.getElementById("div7btn1").addEventListener("click", function getAllPersonsByHobbyName() {
    const name = document.getElementById("myInput7").value;
    fetch(URLgetAllPersonsWithHobby + name)
        .then(res => res.json())
        .then(Person => {
            var tableHead = "<thead><tr>" +
                "<th>Fornavn</th>" +
                "<th>Email</th>" +
                "</tr></thead>";

            function loadArray(lis) {
                var stringObj = "<td>" + lis.fName + "</td><td>" + lis.email + "</td>";
                return "<tr>" + stringObj + "</tr>";
            };

            function postTable(tableBody) {
                document.getElementById("text7").innerHTML = tableHead + "<tbody>" + tableBody + "</tbody>";
            };

            postTable(Person.map(loadArray).join(""));

        });
    ;
});

document.getElementById("div4btn1").addEventListener("click", function (e) {
    e.preventDefault();
    const fNavn = document.getElementById("fNavn4").value;
    const eNavn = document.getElementById("eNavn4").value;
    const email = document.getElementById("email4").value;
    const gade = document.getElementById("gade4").value;

    const husnummer = document.getElementById("husnummer4").value;
    const postnummer = document.getElementById("postnummer4").value;

    let options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fName: fNavn,
            lName: eNavn,
            email: email,
            street: gade,
            phoneList: [],
            additionalInfo: husnummer,
            zip: postnummer,

        })
    }
    console.log(options)

    fetch(URLaddperson, options);



})


document.getElementById("div5btn2").addEventListener("click", function (e) {
    const id = document.getElementById("myInput5").value;
    fetch(URLgetpersonbyid + id)
        .then(res => res.json())
        .then(person => {

            document.getElementById("fNavn5").value = person.fName;
            document.getElementById("eNavn5").value = person.lName;
            document.getElementById("email5").value = person.email;
            document.getElementById("gade5").value = person.street;
            document.getElementById("husnummer5").value = person.additionalInfo;
            document.getElementById("postnummer5").value = person.zip;
        });
});
document.getElementById("div5btn1").addEventListener("click", function (e) {
    e.preventDefault();
    const id = document.getElementById("myInput5").value;
    const fNavn = document.getElementById("fNavn5").value;
    const eNavn = document.getElementById("eNavn5").value;
    const email = document.getElementById("email5").value;
    const gade = document.getElementById("gade5").value;
    const husnummer = document.getElementById("husnummer5").value;
    const postnummer = document.getElementById("postnummer5").value;

    let options = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fName: fNavn,
            lName: eNavn,
            email: email,
            street: gade,
            phoneList: [],
            additionalInfo: husnummer,
            zip: postnummer,

        })
    }


    fetch(URLaddperson + id, options);



})

document.getElementById("div8btn1").addEventListener("click", function getAllZipcodes() {
    fetch(URLgetAllZipcodes)
        .then(res => res.json())
        .then(zipcode => {


            var tableHead = "<thead><tr>" +
                "<th>Fornavn</th>" +
                "<th>Email</th>" +
                "</tr></thead>";

            function loadArray(lis) {
                var stringObj = "<td>" + lis.zipCode + "</td><td>" + lis.city + "</td>";
                return "<tr>" + stringObj + "</tr>";
            };

            function postTable(tableBody) {
                document.getElementById("text8").innerHTML = tableHead + "<tbody>" + tableBody + "</tbody>";
            };

            postTable(zipcode.alle.map(loadArray).join(""));

        })

});

document.getElementById("btn1").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("2");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn2").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("3");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn3").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("4");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn4").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("5");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn5").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("6");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn6").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("7");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
document.getElementById("btn7").addEventListener('click', function (e) {
    e.preventDefault;
        var x = document.getElementById("8");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    
});
