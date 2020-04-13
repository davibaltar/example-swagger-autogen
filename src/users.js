
function addUser(param) {
    return true
}

function getUser(param) {
    const user = {
        name: "Lewis Doe",
        age: 32,
        parents: {
            father: "Simon Doe",
            mother: "Marie Doe"
        },
        diplomas: [
            {
                school: "ABC University",
                year: 2020,
                completed: true,
                internship: {
                    hours: 310,
                    location: "ABC Company"
                }
            }
        ]
    }
    return user
}


module.exports = {
    addUser,
    getUser
}