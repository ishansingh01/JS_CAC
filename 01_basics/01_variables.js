const accountId = 54354
let accountEmail="ishan@gmail.com"
var accountPassword = "12345"
accountCity = "Chandigarh"
let accountState;

// accountId=543212 //not allowed
accountEmail="singh@gmail.com"
accountPassword="54321"
accountCity="Lucknow"

console.log(accountId);
console.table([accountId, accountCity, accountEmail, accountPassword, accountState])
/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/