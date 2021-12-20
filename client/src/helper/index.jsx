
export function checkSsn(users, ssn) {
    console.log(users);
    return users.some(user => user.ssn === ssn);
}