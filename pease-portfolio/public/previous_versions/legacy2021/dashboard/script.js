function onLoad() {
    startFirebase()
    document.getElementById("main_content").style.display = "none";
    document.getElementById("unauthorized").style.display = "none";
    checkLogin()
    displayProjects("all")
    displayProgram()
    displayBlog();
    setInterval(function () {
        checkLogin();
    }, 1000);
}
// START FIREBASE STUFF

// Firebase Check Log In Status
function checkLogin() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            readData("users", function (array) {
                if (array[firebase.auth().currentUser.uid]) {
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("firebase_name").innerText = firebase.auth().currentUser.displayName
                    document.getElementById("firebase_email").innerText = firebase.auth().currentUser.email
                    document.getElementById("firebase_photo").setAttribute("src", firebase.auth().currentUser.photoURL)
                    document.getElementById("main_content").style.display = "block";
                    document.getElementById("login_container").style.display = "none";
                    document.getElementById("unauthorized").style.display = "none";
                } else {
                    document.getElementById("loading").style.display = "none";
                    document.getElementById("main_content").innerHTML = ""
                    document.getElementById("login_container").innerHTML = ""
                    document.getElementById("unauthorized").style.display = "block";
                }
            })
        } else {
            document.getElementById("loading").style.display = "none";
            document.getElementById("main_content").style.display = "none";
            document.getElementById("login_container").style.display = "block";
            document.getElementById("unauthorized").style.display = "none";
        }
    })
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

// Firebase Log In
function logIn() {
    firebase.auth().setPersistence("local")
    // No user is signed in.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        readData("users", function (array) {
            checkLogin();
        });
        // ...
    }).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(errorCode)
        console.log(errorMessage)
        // ...
    });
}

// Firebase Log Out
function logOut() {
    firebase.auth().signOut().then(function () {
        checkLogin();
    }, function (error) {
        console.log("ERROR")
        console.log(error)
    });
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
//END FIREBASE STUFF

// START PROJECTS STUFF

function displayProjects(status) {
    document.getElementById("projects").innerHTML = ""
    database = firebase.database().ref("projects");
    database.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
            firebase.database().ref("projects/" + child["key"]).on('value', function (data) {
                var data1 = data.val();
                var a = document.createElement("div")
                var title = data1["title"]
                a.innerHTML = "<div class='project-card mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <h2 class='mdl-card__title-text'>" + data1['title'].replace(/,/g, '.') + "<br>" + data1['status'] + "</h2> </div> <div class='mdl-card__supporting-text'>" + data1['description'] + " </div> <div class='mdl-card__actions mdl-card--border'> <a href=\"javascript:editProject(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Edit </a> </div> </div>"

                if (status === "all") {
                    document.getElementById("projects").appendChild(a)
                } else if (data1["status"] === status) {
                    document.getElementById("projects").appendChild(a)
                }
            })
        })
    });
}

function openProjects() {
    document.getElementById("projects_tab").style.display = "block"
    document.getElementById("program_tab").style.display = "none"
    document.getElementById("blogs_tab").style.display = "none"
    document.getElementById("page_title").innerHTML = "Dashboard - Projects"
}

function newProject() {
    var data = {
        title: document.getElementById("new-project-title").value.replace(/\./g, ","),
        link: document.getElementById("new-project-link").value,
        status: document.getElementById("new-project-status-value").value,
        description: document.getElementById("new-project-description").value
    }
    firebase.database().ref("projects/" + document.getElementById("new-project-title").value.replace(/\./g, ",")).set(data)
    document.getElementById("new-project-title").value = '';
    document.getElementById("new-project-link").value = '';
    document.getElementById("new-project-status-value").value = 'active';
    document.getElementById("new-project-description").value = '';
    document.getElementById("new-project-box").style.display = "none"
    displayProjects("all")
}

function openNewProject() {
    document.getElementById("new-project-box").style.display = "block"
    document.getElementById("edit-project-box").style.display = "none"
}

// Edit Selected Project
function saveProject() {
    var title = document.getElementById("edit-project-title").innerHTML.replace(/\./g, ",")
    var data = {
        title: title,
        link: document.getElementById("edit-project-link").value,
        status: document.getElementById("edit-project-status-value").value,
        description: document.getElementById("edit-project-description").value
    }
    firebase.database().ref("projects/" + title).set(data)
    document.getElementById("edit-project-title").innerHTML = '';
    document.getElementById("edit-project-link").value = '';
    // document.getElementById("edit-project-status").value = 'active';
    document.getElementById("edit-project-description").value = '';
    document.getElementById("edit-project-box").style.display = "none"
    displayProjects("all")
}


function editProject(name) {
    var title = name.replace(/`/g, "'")
    var database = firebase.database().ref("projects/" + title);
    database.on('value', function (data) {
        var data1 = data.val()
        document.getElementById("edit-project-title").innerText = title.replace(/,/g, ".")
        document.getElementById("edit-project-link").value = data1["link"]
        document.getElementById("edit-project-status-value").value = data1["status"]
        document.getElementById("edit-project-description").value = data1["description"]
        document.getElementById("edit-project-box").style.display = "block"
        document.getElementById("new-project-box").style.display = "none"
    })
}
// END PROJECTS STUFF

// START PROGRAM STUFF

function displayProgram() {
    document.getElementById("program").innerHTML = ""
    database = firebase.database().ref("programs");
    database.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
            firebase.database().ref("programs/" + child["key"]).on('value', function (data) {
                var data1 = data.val();
                var a = document.createElement("div")
                var title = data1["title"]
                //a.innerHTML = "<div class='program-card mdl-card mdl-shadow--2dp' style='background: url(\""+data1['imglink']+"\") center / cover'> <div class='mdl-card__title mdl-card--expand'> <h2 class='mdl-card__title-text'>" + data1['title'].replace(/,/g, '.') + "</h2> </div> <div class='mdl-card__supporting-text' style='background: rgba(0, 0, 0, 0.5);'>" + data1['description'] + " </div> <div class='mdl-card__actions mdl-card--border' style='background: rgba(0, 0, 0, 0.5);'> <a href=\"javascript:editProgram(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Edit </a> </div> </div>"
                a.innerHTML = "<div class='program-card mdl-card mdl-shadow--2dp' style='background: url(\"" + data1['imglink'] + "\") center / cover'> <div class='mdl-card__title mdl-card--expand'></div> <div class='mdl-card__supporting-text' style='background: rgba(0, 0, 0, 0.6);color: white;'><h3>" + data1['title'] + "</h3></div> <div class='mdl-card__actions mdl-card--border' style='background: rgba(0, 0, 0, 0.6);'> <a href=\"javascript:editProgram(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Edit </a> </div> </div>"
                document.getElementById("program").appendChild(a)
            })
        })
    });
}

function openProgram() {
    document.getElementById("program_tab").style.display = "block"
    document.getElementById("projects_tab").style.display = "none"
    document.getElementById("blogs_tab").style.display = "none"
    document.getElementById("page_title").innerHTML = "Dashboard - Software"
}


function newProgram() {
    var data = {
        title: document.getElementById("new-program-title").value.replace(/\./g, ","),
        imglink: document.getElementById("new-program-image").value,
        description: document.getElementById("new-program-description").value,
        author: document.getElementById("new-program-author").value,
        programtype: document.getElementById("new-program-type").value,
        link: document.getElementById("new-program-link").value
    }
    firebase.database().ref("programs/" + document.getElementById("new-program-title").value.replace(/\./g, ",")).set(data)
    document.getElementById("new-program-title").value = '';
    document.getElementById("new-program-link").value = '';
    document.getElementById("new-program-image").value = '';
    document.getElementById("new-program-type").value = '';
    document.getElementById("new-program-author").value = '';
    document.getElementById("new-program-description").value = '';
    document.getElementById("new-program-box").style.display = "none"
    displayProgram()
}

function openNewProgram() {
    document.getElementById("new-program-box").style.display = "block"
    document.getElementById("edit-program-box").style.display = "none"
}

// Edit Selected Program
function saveProgram() {
    var title = document.getElementById("edit-program-title").innerHTML.replace(/\./g, ",")
    var data = {
        title: title,
        imglink: document.getElementById("edit-program-link").value,
        description: document.getElementById("edit-program-description").value,
        author: document.getElementById("edit-program-author").value,
        programtype: document.getElementById("edit-program-type").value,
        link: document.getElementById("edit-program-link").value
    }
    firebase.database().ref("programs/" + title).set(data)
    document.getElementById("edit-program-title").innerHTML = '';
    document.getElementById("edit-program-link").value = '';
    // document.getElementById("edit-program-status").value = 'active';
    document.getElementById("edit-program-description").value = '';
    document.getElementById("edit-program-box").style.display = "none"
    displayProgram()
}


function editProgram(name) {
    var title = name.replace(/`/g, "'")
    var database = firebase.database().ref("programs/" + title);
    database.on('value', function (data) {
        var data1 = data.val()
        document.getElementById("edit-program-title").innerText = title.replace(/,/g, ".")
        document.getElementById("edit-program-link").value = data1["link"]
        document.getElementById("edit-program-image").value = data1["imglink"]
        document.getElementById("edit-program-author").value = data1["author"]
        document.getElementById("edit-program-type").value = data1["programtype"]
        document.getElementById("edit-program-description").value = data1["description"]
        document.getElementById("edit-program-box").style.display = "block"
        document.getElementById("new-program-box").style.display = "none"
    })
}

// END PROGRAM STUFF

// START BLOG POSTS
// START PROGRAM STUFF

function displayBlog() {
    document.getElementById("blog").innerHTML = ""
    database = firebase.database().ref("blogs");
    database.once('value', function (snapshot) {
        snapshot.forEach(function (child) {
            firebase.database().ref("blogs/" + child["key"]).on('value', function (data) {
                var data1 = data.val();
                var a = document.createElement("div")
                var title = data1["title"]
                a.innerHTML = "<div class='blog-card mdl-card mdl-shadow--2dp'> <div class='mdl-card__title mdl-card--expand'> <h2 class='mdl-card__title-text'>" + data1['title'].replace(/,/g, '.') + "</h2> </div> <div class='mdl-card__supporting-text'>" + data1['post'] + " </div> <div class='mdl-card__actions mdl-card--border'> <a href=\"javascript:editBlog(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-b</div>"
                //a.innerHTML = "<div class='blog-card mdl-card mdl-shadow--2dp' style='background: url(\"" + data1['imglink'] + "\") center / cover'> <div class='mdl-card__title mdl-card--expand'></div> <div class='mdl-card__supporting-text' style='background: rgba(0, 0, 0, 0.6);color: white;'><h3>" + data1['title'] + "</h3></div> <div class='mdl-card__actions mdl-card--border' style='background: rgba(0, 0, 0, 0.6);'> <a href=\"javascript:editBlog(\'" + title.replace(/'/g, "`") + "\')\" class='mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect'> Edit </a> </div> </div>"
                document.getElementById("blog").appendChild(a)
            })
        })
    });
}

function openBlog() {
    document.getElementById("blogs_tab").style.display = "block"
    document.getElementById("projects_tab").style.display = "none"
    document.getElementById("program_tab").style.display = "none"
    document.getElementById("page_title").innerHTML = "Dashboard - Blog"
}


function newBlog() {
    var date = new Date();
    var data = {
        title: document.getElementById("new-blog-title").value.replace(/\./g, ","),
        post: document.getElementById("new-blog-description").value,
        author: document.getElementById("new-blog-author").value,
        date: date.toString(0)
    }
    firebase.database().ref("blogs/" + document.getElementById("new-blog-title").value.replace(/\./g, ",")).set(data)
    document.getElementById("new-blog-title").value = '';
    document.getElementById("new-blog-author").value = '';
    document.getElementById("new-blog-description").value = '';
    document.getElementById("new-blog-box").style.display = "none"
    displayBlog()
}

function openNewBlog() {
    document.getElementById("new-blog-box").style.display = "block"
    document.getElementById("edit-blog-box").style.display = "none"
}

// Edit Selected Blog
function saveBlog() {
    var title = document.getElementById("edit-blog-title").innerHTML.replace(/\./g, ",")
    var data = {
        title: title,
        post: document.getElementById("edit-blog-description").value,
        author: document.getElementById("edit-blog-author").value
    }
    firebase.database().ref("blogs/" + title).set(data)
    document.getElementById("edit-blog-title").innerHTML = '';
    document.getElementById("edit-blog-author").innerHTML = '';
    document.getElementById("edit-blog-description").value = '';
    document.getElementById("edit-blog-box").style.display = "none"
    displayBlog()
}


function editBlog(name) {
    var title = name.replace(/`/g, "'")
    var database = firebase.database().ref("blogs/" + title);
    database.on('value', function (data) {
        var data1 = data.val()
        document.getElementById("edit-blog-title").innerText = title.replace(/,/g, ".")
        document.getElementById("edit-blog-author").value = data1["author"]
        document.getElementById("edit-blog-description").value = data1["post"]
        document.getElementById("edit-blog-box").style.display = "block"
        document.getElementById("new-blog-box").style.display = "none"
    })
}

// END PROGRAM STUFF