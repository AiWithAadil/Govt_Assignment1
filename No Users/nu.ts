let usernames: string[] = ['admin', 'Eric', 'Alice', 'John', 'Jane'];

usernames = []

if (usernames.length > 0){
    for (let user of usernames) {
         if (user === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`"Hello  ${user}, thank you for logging in again."`);
        }
};
}else{
    console.log("We need to find some users");
    
};
