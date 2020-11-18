function EZSession(username, token, expireDate, details) {
    this.username = username;
    this.token = token;
    this.expireDate = expireDate;
    this.details = details;
}

EZSession.prototype.getUsername = function() {
    return this.username;
}

EZSession.prototype.setUsername = function(username) {
    this.username = username;
}

EZSession.prototype.getToken = function() {
    return this.token;
}

EZSession.prototype.setToken = function(token) {
    this.token = token;
}

EZSession.prototype.getExpireDate = function() {
    return this.expireDate;
}

EZSession.prototype.setExpireDate = function(expireDate) {
    this.expireDate = expireDate;
}

EZSession.prototype.getDetails = function() {
    return this.details;
}

EZSession.prototype.setDetails = function(details) {
    this.details = details;
}

module.exports = EZSession;