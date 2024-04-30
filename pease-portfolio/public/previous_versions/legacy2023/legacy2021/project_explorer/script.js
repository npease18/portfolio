function onLoad() {
    startFirebase()
    displayBlog()
    displayProjects("all")
}

function blogs() {
    document.getElementById("projects").style.display = "none"
    document.getElementById("blogs").style.display = "block"
    document.getElementById("programs").style.display = "none"
    document.getElementById("project_buttons").style.display = "none"
}

function programs() {
    document.getElementById("projects").style.display = "none"
    document.getElementById("blogs").style.display = "none"
    document.getElementById("programs").style.display = "block"
    document.getElementById("project_buttons").style.display = "none"
}

function projects() {
    document.getElementById("projects").style.display = "block"
    document.getElementById("blogs").style.display = "none"
    document.getElementById("programs").style.display = "none"
    document.getElementById("project_buttons").style.display = "block"
}

function displayProjects(status) {
    document.getElementById("projects").innerHTML = ""
    database = firebase.database().ref("projects");
    database.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
            firebase.database().ref("projects/" + child["key"]).on('value', function (data) {
                var data1 = data.val();
                var a = document.createElement("div")
                if (data1["link"] == "") {
                    a.innerHTML = '<div class="project-card mdl-card mdl-shadow--2dp"> <div class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">' + data1["title"].replace(/,/g, ".") + '<br><span class="' + data1["status"] + '">'+ data1["status"] +'</span></h2> </div> <div class="mdl-card__supporting-text">' + data1["description"] + ' </div> </div>'
                    //a.innerHTML = "<tr><td><div id='titles'>" + data1["title"].replace(/,/g, ".") + "</h4><div class='" + data1["status"] + "'>" + data1["status"] + "</div></td></tr><tr class='spacing'><td>" + data1["description"] + "</td></tr><tr class='separator'></tr>"
                } else {
                    a.innerHTML = '<div class="project-card mdl-card mdl-shadow--2dp"> <div class="mdl-card__title mdl-card--expand"> <h2 class="mdl-card__title-text">' + data1["title"].replace(/,/g, ".") + '<br><div style="clear: both" class="' + data1["status"] + '">'+ data1["status"] +'</div></h2> </div> <div class="mdl-card__supporting-text">' + data1["description"] + ' </div> <div class="mdl-card__actions mdl-card--border"> <a href="' + data1["link"] + '" class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect"> See More </a> </div> </div>'
                    // a.innerHTML = "<tr><td><div id='titles'><a href='" + data1["link"] + "'>" + data1["title"].replace(/,/g, ".") + "</a></h4><div class='" + data1["status"] + "'>" + data1["status"] + "</div></td></tr><tr class='spacing'><td>" + data1["description"] + "</td></tr><tr class='separator'></tr>"
                }

                if (status === "all") {
                    document.getElementById("projects").appendChild(a)
                } else if (data1["status"] === status) {
                    document.getElementById("projects").appendChild(a)
                }
            })
        })
    });
}

function displayBlog() {
    document.getElementById("blogs").innerHTML = ""
    database = firebase.database().ref("blogs");
    database.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
            firebase.database().ref("blogs/" + child["key"]).on('value', function (data) {
                var data1 = data.val();
                var a = document.createElement("div")
                var title = data1["title"]
                a.innerHTML = "<div class='blog-card mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <h2 class='mdl-card__title-text'>" + data1['title'].replace(/,/g, '.') + "</h2> </div> <div class='mdl-card__supporting-text'>" + data1['post'] + " </div> </div>"
                //a.innerHTML = "<div class='blog-card mdl-card mdl-shadow--2dp' style='background: url(\"" + data1['imglink'] + "\") center / cover'> <div class='mdl-card__title mdl-card--expand'></div> <div class='mdl-card__supporting-text' style='background: rgba(0, 0, 0, 0.6);color: white;'><h3>" + data1['title'] + "</h3></div> <div class='mdl-card__actions mdl-card--border' style='background: rgba(0, 0, 0, 0.6);'> <a href=\"javascript:editBlog(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Edit </a> </div> </div>"
                document.getElementById("blogs").appendChild(a)
            })
        })
    });
}

// Starts Firebase
function startFirebase() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBG5-wv3bpeiUjR6BH5GXamqPlH1arXt8Y",
        authDomain: "homepage-projects-3d870.firebaseapp.com",
        databaseURL: "https://homepage-projects-3d870.firebaseio.com",
        projectId: "homepage-projects-3d870",
        storageBucket: "homepage-projects-3d870.appspot.com",
        messagingSenderId: "487531629040"
    };
    firebase.initializeApp(config);
}

// Firebase Interaction Scripts
function readData(ref, callback) {
    var nextformation = firebase.database().ref(ref);
    nextformation.on("value", function (data) {
        var array = data.val();
        callback(array)
    });
}
// global read data and place on page function
function setData(ref, element, read1) {
    var array = readData(ref, function (array) {
        document.getElementById(element).innerHTML = array[read1]
    });
}

// Firebase Interaction Scripts
function sendData(ref, data) {
    var database = firebase.database();
    firebase.database().ref(ref).set(data);
}