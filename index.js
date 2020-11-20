var ezSessions = [];

class EZSession {
    constructor(username, expireDate, details) {
        this.username = username;
        this.expireDate = expireDate;
        this.details = details;
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
    var expireDate = new Date(now.getTime() + expireTime * 60000);
    var session = new EZSession(username, expireDate, details);
    ezSessions.push(session);
    return session;
}

/**
 * Delete a session
 * 
 * @param {*} field - field to be searched inside details. Example: 'token'
 * @param {*} content - content to be searched in that details field. Example: '12g434g53eaf15'
 */
function endSession(field, content) {
    oldLength = ezSessions.length;
    ezSessions = ezSessions.filter(s => s.details[field] != content);
    return ezSessions.length === oldLength - 1 ? true : false;
}

setInterval(() => {
    var now = new Date();
    ezSessions = ezSessions.filter(s => s.expireDate > now);
}, 60000 * 30);

module.exports = {
    getSession,
    createSession,
    endSession
};