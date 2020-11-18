const EZSession = require('./model/EZSession');

var ezSessions = [];

function getSession(token) {
    return ezSessions.find(s => s.token == token);
}

function createSession(username, token, expireDate, details) {
    if (!getSession(token)) {
        var session = new EZSession(username, token, expireDate, details);
        ezSessions.push(session);
        return session;
    }
    return false;
}

function isSessionExpired(token) {
    var session = getSession(token);
    if (session && session.expireDate < new Date())
        return true;
    return false;
}

function renovateSession(token, newToken, expireDate) {
    var old_session = getSession(token);
    if (old_session) {
        if (deleteSession(token))
            return createSession(old_session.username, newToken, expireDate, old_session.details);
    }
    return false;
}

function deleteSession(token) {
    oldLength = ezSessions.length;
    ezSessions = ezSessions.filter(s => s.token != token);
    return ezSessions.length == oldLength - 1 ? true : false;
}

module.exports = {
    getSession,
    createSession,
    isSessionExpired,
    renovateSession,
    deleteSession
};