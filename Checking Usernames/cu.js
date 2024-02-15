var current_users = ["user1", "user2", "user3", "user4"];
var new_users = ["user5", "user2", "user7", "user1", "user9"];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var nuser = new_users_1[_i];
    if (current_users.includes(nuser)) {
        console.log("The username '".concat(nuser, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(nuser, "' is available."));
    }
    ;
}
;
