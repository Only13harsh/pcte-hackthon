function ChangeClass() {
    console.log("Working");

    const classExists = document.getElementsByClassName('col-lg-3').length > 0;

    if (classExists) {
        var x = 1
        console.log("Exist");
        const nodeList = document.querySelectorAll("div .col-md-12");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove('col-lg-3');
        }
        document.getElementById("changeView__").innerHTML = "<i class='far fa-credit-card'></i>";


    } else {
        var x = 0;
        console.log("Do not exist");
        const nodeList = document.querySelectorAll("div .col-md-12");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.add('col-lg-3');
        }
        document.getElementById("changeView__").innerHTML = "<i class='fas fa-list'></i>";

    }

}


function github() {
    window.open("https://enally.in", target = "_blank");
    window.open("https://github.com/03prashantpk/", target = "_blank");

}

function LiveRun() {
    window.open("https://enally.in/live/taskorg/", target = "_blank");
}

setTimeout(function() {

    const badge = document.getElementsByClassName('badge').length > 0;
    if (badge) {
        const nodeList = document.querySelectorAll(".badge");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].classList.remove('bg-primary');
        }
    }
    console.log("Removing Bg Color");
}, 300)

let addMoreButton = () => {
    const addMoreButton_ = document.createElement('div');
    addMoreButton_.innerHTML =
        `
    <button class="btn btn-primary addMoreButton" title="Add Task" type="submit" data-bs-toggle="modal" data-bs-target="#addNewModal" ><i class="fa fa-plus mx-2"></i></button>
    <button class="btn btn-primary viewButton" title="Change View" id="changeView__" onclick="ChangeClass()" type="submit"><i class='fas fa-list'></i></button>
    
    

    <div class="passwordForm" hidden>
        <img src='https://cdn-icons-png.flaticon.com/512/6587/6587395.png'>
        <h3>Enter Password</h3>
        <input id="password" type="password" placeholder="password">
        <button id="setpass" style="display: none;" onclick="setPassword()">Set Password</button>
        <button id="loginbtn" style="display: none;" onclick="logg()">Login</button>
    </div>    
    <p id="credit"> LOVELY PROFSSIONAL UNIVERSITY</p>

    `;
    document.body.appendChild(addMoreButton_);
}

setTimeout(addMoreButton(), 3000);