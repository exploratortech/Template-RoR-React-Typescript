// arrays with the machines
const arms_day = ["chest_press", "shoulder_press", "row_rear_deltoid", "pull_down", "rear_deltoid", "pectoral_fly", "assisted_chin_up", "assisted_dips"];


// ARMS DAY
// creating an array to store my arms day objects
var selected_arms = null;
var arms_data = {};
let arms_information = [];
function arms_day_submit(e) {
    event.preventDefault();
    var data = read_log_data();
    if (selected_arms === null) {
        insert_arms_data(data);
    } else {
        update_arms(data);
    }
    reset_arms();
}
// retrieve the data
function read_log_data() {
    var data = {};
    for (let i = 0; i < arms_day.length; i++) {
        data[arms_day[i]] = document.getElementById(arms_day[i]).value;
    }
    return data;
}
// insert the data
function insert_arms_data(data) {
    var table = document.getElementById("arms_log").getElementsByTagName("tbody")[0];
    var new_row = table.insertRow(table.length);
    var cell1 = new_row.insertCell(0);
        cell1.innerHTML = data.chest_press;
    var cell2 = new_row.insertCell(1);
        cell2.innerHTML = data.shoulder_press;
    var cell3 = new_row.insertCell(2);
        cell3.innerHTML = data.row_rear_deltoid;
    var cell4 = new_row.insertCell(3);
        cell4.innerHTML = data.pull_down;
    var cell5 = new_row.insertCell(4);
        cell5.innerHTML = data.rear_deltoid;
    var cell6 = new_row.insertCell(5);
        cell6.innerHTML = data.pectoral_fly;
    var cell7 = new_row.insertCell(6);
        cell7.innerHTML = data.assisted_chin_up;
    var cell8 = new_row.insertCell(7);
        cell8.innerHTML = data.assisted_dips;
    var cell9 = new_row.insertCell(8);
    arms_data = data;
        cell9.innerHTML = `<button id="options" onClick="save_arms_data()">Save</button> <button id="options" onClick="delete_arms(this)">Delete</button>`;
}
// save the data local storage
function save_arms_data() {
    arms_information = JSON.parse(localStorage.getItem("arms_day"));
    if (localStorage.getItem("arms_day") == null) {
        arms_information = [];
    }
    let arms_day = {
        chest_press: arms_data.chest_press,
        shoulder_press: arms_data.shoulder_press,
        row_rear_deltoid: arms_data.row_rear_deltoid,
        pull_down: arms_data.pull_down,
        rear_deltoid: arms_data.rear_deltoid,
        pectoral_fly: arms_data.pectoral_fly,
        assisted_chin_up: arms_data.assisted_chin_up,
        assisted_dips: arms_data.assisted_dips
    };
    arms_information.push(arms_day);
    localStorage.setItem("arms_day", JSON.stringify(arms_information));
}
// edit the data
function edit_arms(td) {
    selected_arms = td.parentElement.parentElement;
    for (let i = 0; i < arms_day.length; i++) {
        document.getElementById(arms_day[i]).value = selected_arms.cells[i].innerHTML;
    }
}
// update the data
function update_arms(form_data) {
    selected_arms.cells[0].innerHTML = form_data.chest_press;
    selected_arms.cells[1].innerHTML = form_data.shoulder_press;
    selected_arms.cells[2].innerHTML = form_data.row_rear_deltoid;
    selected_arms.cells[3].innerHTML = form_data.pull_down;
    selected_arms.cells[4].innerHTML = form_data.rear_deltoid;
    selected_arms.cells[5].innerHTML = form_data.pectoral_fly;
    selected_arms.cells[6].innerHTML = form_data.assisted_chin_up;
    selected_arms.cells[7].innerHTML = form_data.assisted_dips;
    selected_arms = null;
}
// delete the data
function delete_arms(td) {
    if(confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("arms_log").deleteRow(row.rowIndex);
    }
    reset_arms();
}
// reset the data
function reset_arms() {
    for (let i = 0; i < arms_day.length; i++) {
        document.getElementById(arms_day[i]).value = "";
    }
}



// LEGS DAY
var legs_data = {};
var selected_legs = null;
let legs_information = [];
function legs_day_submit(e) {
    event.preventDefault();
    var form_data = read_legs_data();
    if (selected_legs === null) {
        insert_legs_data(form_data);
    } else {
        update_legs(form_data);
    }
    reset_legs();
}
// retrieve the data
function read_legs_data() {
    var form_data = {};
    form_data["seated_leg_curl"] = document.getElementById("seated_leg_curl").value;
    form_data["leg_extension"] = document.getElementById("leg_extension").value;
    form_data["seated_leg_press"] = document.getElementById("seated_leg_press").value;
    form_data["hip_abductor_out"] = document.getElementById("hip_abductor_out").value;
    form_data["hip_abductor_in"] = document.getElementById("hip_abductor_in").value;
    form_data["hip_thrusts"] = document.getElementById("hip_thrusts").value;
    form_data["bulgarian_split_squats"] = document.getElementById("bulgarian_split_squats").value;
    return form_data;
}
// save the data local storage
function save_legs_data() {
    legs_information = JSON.parse(localStorage.getItem("legs_day"));
    if (localStorage.getItem("legs_day") == null) {
        legs_information = [];
    }
    let legs_day = {
        seated_leg_curl: legs_data.seated_leg_curl,
        leg_extension: legs_data.leg_extension,
        seated_leg_press: legs_data.seated_leg_press,
        hip_abductor_out: legs_data.hip_abductor_out,
        hip_abductor_in: legs_data.hip_abductor_in,
        hip_thrusts: legs_data.hip_thrusts,
        bulgarian_split_squats: legs_data.bulgarian_split_squats
    };
    legs_information.push(legs_day);
    localStorage.setItem("legs_day", JSON.stringify(legs_information));
}
// insert the data
function insert_legs_data(data) {
    var table = document.getElementById("legs_log").getElementsByTagName("tbody")[0];
    var new_row = table.insertRow(table.length);
    var cell1 = new_row.insertCell(0);
        cell1.innerHTML = data.seated_leg_curl;
    var cell2 = new_row.insertCell(1);
        cell2.innerHTML = data.leg_extension;
    var cell3 = new_row.insertCell(2);
        cell3.innerHTML = data.seated_leg_press;
    var cell4 = new_row.insertCell(3);
        cell4.innerHTML = data.hip_abductor_out;
    var cell5 = new_row.insertCell(4);
        cell5.innerHTML = data.hip_abductor_in;
    var cell6 = new_row.insertCell(5);
        cell6.innerHTML = data.hip_thrusts;
    var cell7 = new_row.insertCell(6);
        cell7.innerHTML = data.bulgarian_split_squats;
    var cell8 = new_row.insertCell(7);
    legs_data = data;
        cell8.innerHTML = `<button id="options" onClick="save_legs_data()">Save</button> <button id="options" onClick="delete_legs(this)">Delete</button>`;
}
// edit the data
function edit_legs(td) {
    selected_legs = td.parentElement.parentElement;
    document.getElementById("seated_leg_curl").value = selected_legs.cells[0].innerHTML;
    document.getElementById("leg_extension").value = selected_legs.cells[1].innerHTML;
    document.getElementById("seated_leg_press").value = selected_legs.cells[2].innerHTML;
    document.getElementById("hip_abductor_out").value = selected_legs.cells[3].innerHTML;
    document.getElementById("hip_abductor_in").value = selected_legs.cells[4].innerHTML;
    document.getElementById("hip_thrusts").value = selected_legs.cells[5].innerHTML;
    document.getElementById("bulgarian_split_squats").value = selected_legs.cells[6].innerHTML;
}
// update the data
function update_legs(form_data) {
    selected_legs.cells[0].innerHTML = form_data.seated_leg_curl;
    selected_legs.cells[1].innerHTML = form_data.leg_extension;
    selected_legs.cells[2].innerHTML = form_data.seated_leg_press;
    selected_legs.cells[3].innerHTML = form_data.hip_abductor_out;
    selected_legs.cells[4].innerHTML = form_data.hip_abductor_in;
    selected_legs.cells[5].innerHTML = form_data.hip_thrusts;
    selected_legs.cells[6].innerHTML = form_data.bulgarian_split_squats;
    selected_legs = null;
}
// delete the data
function delete_legs(td) {
    if(confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("legs_log").deleteRow(row.rowIndex);
    }
    reset_legs();
}
// reset the data
function reset_legs() {
    document.getElementById("seated_leg_curl").value = "";
    document.getElementById("leg_extension").value = "";
    document.getElementById("seated_leg_press").value = "";
    document.getElementById("hip_abductor_out").value = "";
    document.getElementById("hip_abductor_in").value = "";
    document.getElementById("hip_thrusts").value = "";
    document.getElementById("bulgarian_split_squats").value = "";
}



// TREADMILL
var treadmill_data = {};
var selected_treadmill = null;
let treadmill_information = [];
function treadmill_submit(e) {
    event.preventDefault();
    var form_data = read_treadmill_data();
    if (selected_treadmill === null) {
        insert_treadmill_data(form_data);
    } else {
        update_treadmill(form_data);
    }
    reset_treadmill();
}
// retrieve the data
function read_treadmill_data() {
    var form_data = {};
    form_data["distance"] = document.getElementById("distance").value;
    form_data["time"] = document.getElementById("time").value;
    form_data["average_pace"] = document.getElementById("average_pace").value;
    return form_data;
}
// save the data local storage
function save_treadmill_data() {
    treadmill_information = JSON.parse(localStorage.getItem("treadmill_day"));
    if (localStorage.getItem("treadmill_day") == null) {
        treadmill_information = [];
    }
    let treadmill_day = {
        distance: treadmill_data.distance,
        time: treadmill_data.time,
        average_pace: treadmill_data.average_pace,
    };
    treadmill_information.push(treadmill_day);
    localStorage.setItem("treadmill_day", JSON.stringify(treadmill_information));
}
// insert the data
function insert_treadmill_data(data) {
    var table = document.getElementById("treadmill_log").getElementsByTagName("tbody")[0];
    var new_row = table.insertRow(table.length);
    var cell1 = new_row.insertCell(0);
        cell1.innerHTML = data.distance;
    var cell2 = new_row.insertCell(1);
        cell2.innerHTML = data.time;
    var cell3 = new_row.insertCell(2);
        cell3.innerHTML = data.average_pace;
    var cell4 = new_row.insertCell(3);
    treadmill_data = data;
        cell4.innerHTML = `<button id="options" onClick="save_treadmill_data()">Save</button> <button id="options" onClick="delete_treadmill(this)">Delete</button>`;
}
// edit the data
function edit_treadmill(td) {
    selected_treadmill = td.parentElement.parentElement;
    document.getElementById("distance").value = selected_treadmill.cells[0].innerHTML;
    document.getElementById("time").value = selected_treadmill.cells[1].innerHTML;
    document.getElementById("average_pace").value = selected_treadmill.cells[2].innerHTML;
}
// update the data
function update_treadmill(form_data) {
    selected_treadmill.cells[0].innerHTML = form_data.distance;
    selected_treadmill.cells[1].innerHTML = form_data.time;
    selected_treadmill.cells[2].innerHTML = form_data.average_pace;
    selected_treadmill = null;
}
// delete the data
function delete_treadmill(td) {
    if(confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("treadmill_log").deleteRow(row.rowIndex);
    }
    reset_treadmill();
}
// reset the data
function reset_treadmill() {
    document.getElementById("distance").value = "";
    document.getElementById("time").value = "";
    document.getElementById("average_pace").value = "";
}



// STAIR MASTER
var stair_master_data = {};
var selected_stair_master = null;
let stair_master_information = [];
function stair_master_submit(e) {
    event.preventDefault();
    var form_data = read_stair_master_data();
    if (selected_stair_master === null) {
        insert_stair_master_data(form_data);
    } else {
        update_stair_master(form_data);
    }
    reset_stair_master();
}
// retrieve the data
function read_stair_master_data() {
    var form_data = {};
    form_data["steps"] = document.getElementById("steps").value;
    form_data["stair_time"] = document.getElementById("stair_time").value;
    form_data["stair_pace"] = document.getElementById("stair_pace").value;
    return form_data;
}
// save the data local storage
function save_stair_master_data() {
    stair_master_information = JSON.parse(localStorage.getItem("stair_master_day"));
    if (localStorage.getItem("stair_master_day") == null) {
        stair_master_information = [];
    }
    let stair_master_day = {
        steps: stair_master_data.steps,
        stair_time: stair_master_data.stair_time,
        stair_pace: stair_master_data.stair_pace,
    };
    stair_master_information.push(stair_master_day);
    localStorage.setItem("stair_master_day", JSON.stringify(stair_master_information));
}
// insert the data
function insert_stair_master_data(data) {
    var table = document.getElementById("stair_master_log").getElementsByTagName("tbody")[0];
    var new_row = table.insertRow(table.length);
    var cell1 = new_row.insertCell(0);
        cell1.innerHTML = data.steps;
    var cell2 = new_row.insertCell(1);
        cell2.innerHTML = data.stair_time;
    var cell3 = new_row.insertCell(2);
        cell3.innerHTML = data.stair_pace;
    var cell4 = new_row.insertCell(3);
    stair_master_data = data;
        cell4.innerHTML = `<button id="options" onClick="save_stair_master_data()">Save</button> <button id="options" onClick="delete_stair_master(this)">Delete</button>`;
}
// edit the data
function edit_stair_master(td) {
    selected_stair_master = td.parentElement.parentElement;
    document.getElementById("steps").value = selected_stair_master.cells[0].innerHTML;
    document.getElementById("stair_time").value = selected_stair_master.cells[1].innerHTML;
    document.getElementById("stair_pace").value = selected_stair_master.cells[2].innerHTML;
}
// update the data
function update_stair_master(form_data) {
    selected_stair_master.cells[0].innerHTML = form_data.steps;
    selected_stair_master.cells[1].innerHTML = form_data.stair_time;
    selected_stair_master.cells[2].innerHTML = form_data.stair_pace;
    selected_stair_master = null;
}
// delete the data
function delete_stair_master(td) {
    if(confirm("Are you sure you want to delete this record?")) {
        row = td.parentElement.parentElement;
        document.getElementById("stair_master_log").deleteRow(row.rowIndex);
    }
    reset_stair_master();
}
// reset the data
function reset_stair_master() {
    document.getElementById("steps").value = "";
    document.getElementById("stair_time").value = "";
    document.getElementById("stair_pace").value = "";
}



function reveal_history() {
    // ARMS DAY
    // let arms_information = [];
    // localStorage.setItem("arms_day", JSON.stringify(arms_information));
    let arms_info = JSON.parse(localStorage.getItem("arms_day"));
    var table = document.getElementById("arms_history_log").getElementsByTagName("tbody")[0];
    // for loop to go through the amount of objects existing
    for (let i = 0; i < arms_info.length; i++) {
        var new_row = table.insertRow(table.length);
        var cell1 = new_row.insertCell(0);
            cell1.innerHTML = arms_info[i].chest_press;
        var cell2 = new_row.insertCell(1);
            cell2.innerHTML = arms_info[i].shoulder_press;
        var cell3 = new_row.insertCell(2);
            cell3.innerHTML = arms_info[i].row_rear_deltoid;
        var cell4 = new_row.insertCell(3);
            cell4.innerHTML = arms_info[i].pull_down;
        var cell5 = new_row.insertCell(4);
            cell5.innerHTML = arms_info[i].rear_deltoid;
        var cell6 = new_row.insertCell(5);
            cell6.innerHTML = arms_info[i].pectoral_fly;
        var cell7 = new_row.insertCell(6);
            cell7.innerHTML = arms_info[i].assisted_chin_up;
        var cell8 = new_row.insertCell(7);
            cell8.innerHTML = arms_info[i].assisted_dips;
    }

    // LEGS DAY
    // let legs_information = [];
    // localStorage.setItem("legs_day", JSON.stringify(legs_information));
    let legs_info = JSON.parse(localStorage.getItem("legs_day"));
    var table = document.getElementById("legs_history_log").getElementsByTagName("tbody")[0];
    // for loop to go through the amount of objects existing
    for (let i = 0; i < legs_info.length; i++) {
        var new_row = table.insertRow(table.length);
        var cell1 = new_row.insertCell(0);
            cell1.innerHTML = legs_info[i].seated_leg_curl;
        var cell2 = new_row.insertCell(1);
            cell2.innerHTML = legs_info[i].leg_extension;
        var cell3 = new_row.insertCell(2);
            cell3.innerHTML = legs_info[i].seated_leg_press;
        var cell4 = new_row.insertCell(3);
            cell4.innerHTML = legs_info[i].hip_abductor_out;
        var cell5 = new_row.insertCell(4);
            cell5.innerHTML = legs_info[i].hip_abductor_in;
        var cell6 = new_row.insertCell(5);
            cell6.innerHTML = legs_info[i].hip_thrusts;
        var cell7 = new_row.insertCell(6);
            cell7.innerHTML = legs_info[i].bulgarian_split_squats;
    }

    // TREADMILL
    // let treadmill_information = [];
    // localStorage.setItem("treadmill_day", JSON.stringify(treadmill_information));
    let treadmill_info = JSON.parse(localStorage.getItem("treadmill_day"));
    var treadmill_table = document.getElementById("treadmill_history_log").getElementsByTagName("tbody")[0];
    // for loop to go through the amount of objects existing
    for (let i = 0; i < treadmill_info.length; i++) {
        var new_row = treadmill_table.insertRow(treadmill_table.length);
        var cell1 = new_row.insertCell(0);
            cell1.innerHTML = treadmill_info[i].distance;
        var cell2 = new_row.insertCell(1);
            cell2.innerHTML = treadmill_info[i].time;
        var cell3 = new_row.insertCell(2);
            cell3.innerHTML = treadmill_info[i].average_pace;
    }

    // STAIR MASTER
    // let stair_master_information = [];
    // localStorage.setItem("stair_master_day", JSON.stringify(stair_master_information));
    let stair_master_info = JSON.parse(localStorage.getItem("stair_master_day"));
    var table = document.getElementById("stair_master_history_log").getElementsByTagName("tbody")[0];
    // for loop to go through the amount of objects existing
    for (let i = 0; i < stair_master_info.length; i++) {
        var new_row = table.insertRow(table.length);
        var cell1 = new_row.insertCell(0);
            cell1.innerHTML = stair_master_info[i].steps;
        var cell2 = new_row.insertCell(1);
            cell2.innerHTML = stair_master_info[i].stair_time;
        var cell3 = new_row.insertCell(2);
            cell3.innerHTML = stair_master_info[i].stair_pace;
    }
}



function delete_history() {
    localStorage.removeItem("arms_day");
    localStorage.removeItem("legs_day");
    localStorage.removeItem("treadmill_day");
    localStorage.removeItem("stair_master_day");
}