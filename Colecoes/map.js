function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }

    return admins;
}

const users = new Map();

users.set('Luis', 'Admin');
users.set('Stephany', 'Admin');
users.set('Jorge', 'User');
users.set('Natalia', 'Admin');

console.log(getAdmins(users));