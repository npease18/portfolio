// Add New Satellite Post
function submitSat() {
    var date = new Date();
    var data = {
        name: document.getElementById("new-sat-name").value,
        direction: document.getElementById("new-sat-direction").value,
        time: document.getElementById("new-sat-time").value,
        date: document.getElementById("new-sat-date").value,
        image: document.getElementById("new-sat-image").value,
        snr: document.getElementById("new-sat-snr").value,
        elevation: document.getElementById("new-sat-elevation").value,
        processing: document.getElementById("new-sat-processing").value
    }
    firebase.database().ref("sats/" + document.getElementById("new-sat-date").value.split("/").join(",") + " " + document.getElementById("new-sat-time").value).set(data)
    document.getElementById("new-sat-name").value = '';
    document.getElementById("new-sat-direction").value = '';
    document.getElementById("new-sat-time").value = "";
    document.getElementById("new-sat-date").value = "";
    document.getElementById("new-sat-image").value = "";
    document.getElementById("new-sat-snr").value = "";
    document.getElementById("new-sat-elevation").value = "";
    document.getElementById("new-sat-processing").value = "";
}
// Edit Satellite Post
function editSat() {
    var data = {
        name: document.getElementById("edit-sat-name").value,
        direction: document.getElementById("edit-sat-direction").value,
        time: document.getElementById("edit-sat-time").value,
        date: document.getElementById("edit-sat-date").value,
        image: document.getElementById("edit-sat-image").value,
        snr: document.getElementById("edit-sat-snr").value,
        elevation: document.getElementById("edit-sat-elevation").value,
        processing: document.getElementById("edit-sat-processing").value
    }
    firebase.database().ref("sats/" + document.getElementById("edit-sat-date").value.split("/").join(",") + " " + document.getElementById("edit-sat-time").value).set(data)
    document.getElementById("edit-sat-name").value = '';
    document.getElementById("edit-sat-direction").value = '';
    document.getElementById("edit-sat-time").value = "";
    document.getElementById("edit-sat-date").value = "";
    document.getElementById("edit-sat-image").value = "";
    document.getElementById("edit-sat-snr").value = "";
    document.getElementById("edit-sat-elevation").value = "";
    document.getElementById("edit-sat-processing").value
}

// Satellite onChange Page Update
function satOnChange() {
    var title = document.getElementById("sat-list").value
    var database = firebase.database().ref("sats/" + title.split("/").join(","));
    database.on('value', function(data) {
        var data1 = data.val()
        document.getElementById("edit-sat-name").value = data1["name"]
        document.getElementById("edit-sat-direction").value = data1["direction"]
        document.getElementById("edit-sat-time").value = data1["time"]
        document.getElementById("edit-sat-date").value = data1["date"]
        document.getElementById("edit-sat-image").value = data1["image"]
        document.getElementById("edit-sat-snr").value = data1["snr"]
        document.getElementById("edit-sat-elevation").value = data1["elevation"]
        document.getElementById("edit-sat-processing").value = data1["processing"]
    })
}

// Display List of Sats in form
function satList() {
    database = firebase.database().ref("sats");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            var a = document.createElement("option")
            a.setAttribute("value", child["key"].split(",").join("/"))
            a.innerHTML = child["key"].split(",").join("/")
            document.getElementById("sat-list").appendChild(a)
        })
    });
    blogOnChange();
}

// Display all Satellites
function displaySats() {
    console.log("Init")
    database = firebase.database().ref("sats").orderByValue();
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            firebase.database().ref("sats/" + child["key"]).on('value', function(data) {
                var data1 = data.val();
                var a = document.createElement("tr")
                a.innerHTML = "<tr style='border-bottom-style: solid;'><td style='border-right-style: solid;width: 10%;border-bottom-style: solid;'><img id='resize' src='https://raw.githubusercontent.com/LAX18/Satellite-Imagery-Uploads/master/" + data1["image"] + ".jpg'><br><a href='https://raw.githubusercontent.com/LAX18/Satellite-Imagery-Uploads/master/" + data1["image"] + ".jpg' target='_blank'>Click to enlarge</a></td><td style='border-bottom-style: solid;'><h1 id='titles'>" + data1["name"] + "</h1><h1 id='titles'>" + data1["direction"] + "</h1><h3>" + data1["date"].split(",").join(",") + " " + data1["time"] + " UTC" + "</h3><h4>Max Elevation: " + data1["elevation"] + "</h4><h4>Max SNR: " + data1["snr"] + "</h4><h4>Processing Information: " + data1["processing"] + "</td></tr>"
                document.getElementById("sats").appendChild(a)
            })
        })
    });
}

// Display List of Blogs in form
function blogList() {
    database = firebase.database().ref("blogs");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            var a = document.createElement("option")
            a.setAttribute("value", child["key"].replace(/,/g, "."))
            a.innerHTML = child["key"].replace(/,/g, ".")
            document.getElementById("blog-list").appendChild(a)
        })
    });
    blogOnChange();
}

// Add New Blog
function submitBlog() {
    var date = new Date();
    var data = {
        title: document.getElementById("new-blog-title").value.replace(".", ","),
        author: document.getElementById("new-blog-author").value,
        post: document.getElementById("new-blog-post").value,
        date: date.toString()
    }
    firebase.database().ref("blogs/" + document.getElementById("new-blog-title").value.replace(".", ",")).set(data)
    document.getElementById("new-blog-title").value = '';
    document.getElementById("new-blog-post").value = '';
    document.getElementById("new-blog-author").value = "";
}


// onChange Page Update
function blogOnChange() {
    var title = document.getElementById("blog-list").value
    var database = firebase.database().ref("blogs/" + title.replace(/,/g, "."));
    database.on('value', function(data) {
        var data1 = data.val()
        document.getElementById("edit-blog-post").value = data1["post"]
        document.getElementById("edit-blog-author").value = data1["author"]
    })
}


// Display all blogs
function displayBlogs() {
    database = firebase.database().ref("blogs");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            firebase.database().ref("blogs/" + child["key"]).on('value', function(data) {
                var data1 = data.val();
                var a = document.createElement("div")
                a.innerHTML = "<div><span id='titles'>" + data1["title"] + "</span><br><span id='subtitles' style='font-size: 13pt;'>" + data1["author"] + ", " + data1["date"] + "</span><br><div style='font-size: 13pt;'>" + data1["post"] + "</div></div><br><div id='separator'></div>"
                document.getElementById("blogs").appendChild(a)
            })
        })
    });
}

// Edit Blog Entry
function editBlog() {
    var date = new Date();
    var data = {
        title: document.getElementById("blog-list").value.replace(".", ","),
        author: document.getElementById("edit-blog-author").value,
        post: document.getElementById("edit-blog-post").value,
        date: date.toString()
    }
    firebase.database().ref("blogs/" + document.getElementById("blog-list").value.replace(".", ",")).set(data)
    document.getElementById("blog-list").value = '';
    document.getElementById("edit-blog-author").value = '';
    document.getElementById("edit-blog-post").value = '';
}

// Display List of Programs in form
function programList() {
    database = firebase.database().ref("programs");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            var a = document.createElement("option")
            a.setAttribute("value", child["key"].replace(/,/g, "."))
            a.innerHTML = child["key"].replace(/,/g, ".")
            document.getElementById("program-list").appendChild(a)
        })
    });
    programOnChange();
}

// Add New Program
function submitProgram() {
    var data = {
        title: document.getElementById("new-program-title").value.replace(".", ","),
        link: document.getElementById("new-program-link").value,
        imglink: document.getElementById("new-program-imglink").value,
        author: document.getElementById("new-program-author").value,
        description: document.getElementById("new-program-description").value,
        programtype: document.getElementById("new-program-type").value
    }
    firebase.database().ref("programs/" + document.getElementById("new-program-title").value.replace(".", ",")).set(data)
    document.getElementById("new-program-title").value = '';
    document.getElementById("new-program-link").value = '';
    document.getElementById("new-program-imglink").value = '';
    document.getElementById("new-program-description").value = '';
    document.getElementById("new-program-author").value = "";
    document.getElementById("new-program-type").value = "";
}


// onChange Page Update
function programOnChange() {
    var title = document.getElementById("program-list").value
    var database = firebase.database().ref("programs/" + title.replace(/,/g, "."));
    database.on('value', function(data) {
        var data1 = data.val()
        document.getElementById("edit-program-link").value = data1["link"]
        document.getElementById("edit-program-imglink").value = data1["imglink"]
        document.getElementById("edit-program-description").value = data1["description"]
        document.getElementById("edit-program-author").value = data1["author"]
        document.getElementById("edit-program-type").value = data1["programtype"]
    })
}


// Display all programs
function displayPrograms() {
    database = firebase.database().ref("programs");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            firebase.database().ref("programs/" + child["key"]).on('value', function(data) {
                var data1 = data.val();
                var a = document.createElement("tr")
                a.innerHTML = "<td style='border-right-style: solid;' width='5%'><img src='" + data1["imglink"] + "' width='200'></td><td><a href='" + data1["link"] + "' style='text-decoration: underline;'>" + data1["title"] + "</a><br> By " + data1["author"] + "<br>" + data1["programtype"] + "<br>" + data1["description"] + "</td>"
                document.getElementById("programs").appendChild(a)
            })
        })
    });
}

// Edit Program Entry
function editProgram() {
    var data = {
        title: document.getElementById("program-list").value.replace(".", ","),
        link: document.getElementById("edit-program-link").value,
        imglink: document.getElementById("edit-program-imglink").value,
        author: document.getElementById("edit-program-author").value,
        description: document.getElementById("edit-program-description").value,
        programtype: document.getElementById("edit-program-type").value
    }
    firebase.database().ref("programs/" + document.getElementById("program-list").value.replace(".", ",")).set(data)
    document.getElementById("program-list").value = '';
    document.getElementById("edit-program-link").value = '';
    document.getElementById("edit-program-author").value = '';
    document.getElementById("edit-program-description").value = '';
    document.getElementById("edit-program-type").value = "";
    document.getElementById("edit-program-imglink").value = "";
}

// Display all projects
function displayProjects() {
    database = firebase.database().ref("projects");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            firebase.database().ref("projects/" + child["key"]).on('value', function(data) {
                var data1 = data.val();
                var a = document.createElement("table")
                if (data1["link"] == "") {
                    a.innerHTML = "<tr><td><div id='titles'>" + data1["title"].replace(/,/g, ".") + "</h4><div class='" + data1["status"] + "'>" + data1["status"] + "</div></td></tr><tr class='spacing'><td>" + data1["description"] + "</td></tr><tr class='separator'></tr>"
                } else {
                    a.innerHTML = '<tr><td><div id="titles"><a href="' + data1['link'] + '">' + data1['title'].replace(/,/g, '.') + '</a></h4><div class="' + data1['status'] + '">' + data1['status'] + '</div></td></tr><tr class="spacing"><td>' + data1['description'] + '</td></tr><tr class="separator"></tr>'
                }
                if (data1["status"] != "canceled") {
                    document.getElementById("projects").appendChild(a)
                }
            })
        })
    });
}

// Edit Selected Project
function editProject() {
    var data = {
        title: document.getElementById("project-list").value.replace(".", ","),
        link: document.getElementById("edit-project-link").value,
        status: document.getElementById("edit-project-status").value,
        description: document.getElementById("edit-project-description").value
    }
    firebase.database().ref("projects/" + document.getElementById("project-list").value.replace(".", ",")).set(data)
    document.getElementById("project-list").value = '';
    document.getElementById("edit-project-link").value = '';
    document.getElementById("edit-project-status").value = 'active';
    document.getElementById("edit-project-description").value = '';
}

// onChange page update
function projectOnChange() {
    var title = document.getElementById("project-list").value
    var database = firebase.database().ref("projects/" + title.replace(/,/g, "."));
    database.on('value', function(data) {
        var data1 = data.val()
        document.getElementById("edit-project-link").value = data1["link"]
        document.getElementById("edit-project-status").value = data1["status"]
        document.getElementById("edit-project-description").value = data1["description"]
    })
}

// Project Submit
function submitProject() {
    var data = {
        title: document.getElementById("new-project-title").value.replace(".", ","),
        link: document.getElementById("new-project-link").value,
        status: document.getElementById("new-project-status").value,
        description: document.getElementById("new-project-description").value
    }
    firebase.database().ref("projects/" + document.getElementById("new-project-title").value.replace(".", ",")).set(data)
    document.getElementById("new-project-title").value = '';
    document.getElementById("new-project-link").value = '';
    document.getElementById("new-project-status").value = 'active';
    document.getElementById("new-project-description").value = '';
}

// Pull Project List and Display in Option
function projectList() {
    database = firebase.database().ref("projects");
    database.once('value', function(snapshot) {
        snapshot.forEach(function(child) {
            var a = document.createElement("option")
            a.setAttribute("value", child["key"].replace(/,/g, "."))
            a.innerHTML = child["key"].replace(/,/g, ".")
            document.getElementById("project-list").appendChild(a)
        })
    });
    projectOnChange();
}


// Make completly sure user is authenticated.
function verify() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            readData("users", function(array) {
                if (array[firebase.auth().currentUser.uid]) {
                    // Do nothing
                } else {
                    window.location.href = "unauthorized.html"
                }
            });
        } else {
            window.location.href = "unauthorized.html"
        }
    })
}


// On pages load
function onLoad() {
    document.getElementById("logoutbutton").style.display = "none"
    startFirebase();
    checkLogin();
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

// Firebase Check Log In Status
function checkLogin() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            readData("users", function(array) {
                if (array[firebase.auth().currentUser.uid]) {
                    document.getElementById("loginbutton").innerHTML = "<a href='dashboard.html'>Dashboard</a>"
                    var logoutnode = document.createElement("li");
                    document.getElementById("logoutbutton").style.display = "block"
                } else {
                    document.getElementById("loginbutton").innerHTML = "Welcome, " + firebase.auth().currentUser.displayName
                    document.getElementById("logoutbutton").style.display = "block"
                }
            })
        } else {
            document.getElementById("loginbutton").innerHTML = "<a href='javascript:logIn();'>Log In</a>"
            document.getElementById("logoutbutton").style.display = "none"
        }
    })
}

// Firebase Log In
function logIn() {
    firebase.auth().setPersistence("local")
        // No user is signed in.
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        readData("users", function(array) {
            checkLogin();
        });
        // ...
    }).catch(function(error) {
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
    firebase.auth().signOut().then(function() {
        checkLogin();
    }, function(error) {
        console.log("ERROR")
        console.log(error)
    });
}


// Firebase Interaction Scripts
function readData(ref, callback) {
    var nextformation = firebase.database().ref(ref);
    nextformation.on("value", function(data) {
        var array = data.val();
        callback(array)
    });
}
// global read data and place on page function
function setData(ref, element, read1) {
    var array = readData(ref, function(array) {
        document.getElementById(element).innerHTML = array[read1]
    });
}

// Firebase Interaction Scripts
function sendData(ref, data) {
    var database = firebase.database();
    firebase.database().ref(ref).set(data);
}