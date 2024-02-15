let current_users: string[] = ["user1", "user2", "user3", "user4"];
let new_users: string[] = ["user5", "user2", "user7", "user1", "user9"];

for (let nuser of new_users){
    if (current_users.includes(nuser)){
        console.log(`The username '${nuser}' is not available. Please enter a new username.`);
        
    }else{
        console.log(`The username '${nuser}' is available.`);
    };
};

