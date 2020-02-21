//check password
var db = {
    'linh.hy99': {
        password: 'abc',
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
    if (db[username]) return false
    db[username].password = password
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

module.exports.checkPassword = checkPassword
module.exports.createUser = createUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
module.exports.getUser = getUser
