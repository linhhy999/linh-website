//check password
var db = {
    'linh.hy99': {
        password: 'a',
        name: "Linh Hy",
        dob: "28/10/1999",
        sex: 'male'
    },
    'namgold': {
        password: 'xyz' ,
        name: "Nam Heo",
        dob: "09/04/2000",
        sex: 'female'
    },
    'username':{}
}

function checkPassword(username, password) {
    if (!db[username]) return false
    return db[username].password == password
}

function createUser(username, password) {
    if (typeof db[username] !== 'undefined') return false
    db[username]= {password:password}
    return true
}

function updateUser(username, userdata) {
    if (!db[username]) return false
    db[username] = userdata
    return true
}

function deleteUser(username) {
    if (!db[username]) return false
    return delete db[username]
}

function getUser(username){
    if (!db[username]) return {}
    temp=db[username]
    return {
        username,
        ...temp
    }
}

function validUsername(username){
    var usernameRegex = /^[a-zA-Z0-9\_]+$/;
    var validUsername  = username.match(usernameRegex);
    if(validUsername == null)
        return {mess:"Your username is not valid. Only characters A-Z, a-z, 0-9 and '_' are  acceptable.",isValid:false}
    else if(username.length<6||username.length>32 )
        return {mess:"Your username is not valid. It must have 8-32 characters.",isValid:false}
    else return {mess:"You have signed up successfully.",isValid:true}
}

module.exports.checkPassword = checkPassword
module.exports.createUser = createUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.getUser = getUser
module.exports.validUsername = validUsername
