var ezSessions = [];

class EZSession {
    constructor(username, expireTime, details) {
        this.id = Date.now();
        this.username = username;
        this.details = details;
        setTimeout(() => {
            endSession(this.id);
            console.log(ezSessions);
        }, expireTime);
    }
}

/**
 * Search session
 * 
 * @param {*} field - field to be searched. Example: 'username'
 * @param {*} content - content to be searched in that field. Example: 'user123'
 */
function getSession(field, content) {
    var result = ezSessions.find(s => s[field] === content);
    if (!result)
        result = ezSessions.find(s => s.details[field] === content);
    return result;
}

/**
 * Create a session (Multiple user sessions allowed)
 * 
 * @param {*} username - user identifier
 * @param {*} expireTime - time in minutes 
 * @param {*} details - object with the extra details needed. Example: { token: '', socketId: '' }
 */
function createSession(username, expireTime, details) {
    var now = new Date();
    var expireTime = expireTime * 60000;
    var session = new EZSession(username, expireTime, details);
    ezSessions.push(session);
    return session;
}

/**
 * Delete a session
 * 
 * @param {*} id - session id
 */
function endSession(id) {
    oldLength = ezSessions.length;
    ezSessions = ezSessions.filter(s => s.id != id);
    return ezSessions.length === oldLength - 1 ? true : false;
}

createSession('admin', 1, {});
console.log(ezSessions);

module.exports = {
    getSession,
    createSession,
    endSession
};