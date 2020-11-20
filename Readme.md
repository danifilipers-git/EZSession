# USAGE
```javascript
const ezSession = require('...');
```

### Get session by filter
```javascript
ezSession.getSession(field, content);
```
> EXAMPLE: ezSession.getSession('username', 'xico');

```
field - field to search
content - content to be searched in that field
```

### Create session - Multiple user sessions allowed
```javascript
ezSession.createSession(username, expireTime, details);
```
> EXAMPLE: ezSession.createSession('xico', 30, { token: 'abcdx', socketId: '0000' });

```
username - user identifier
expireTime - time in minutes that session lasts
details - object with the extra details needed
```

### End all sessions that match filter
```javascript
ezSession.endSession(id);
```
> EXAMPLE: ezSession.endSession('123456');

```
id - session id generated on creation
```

### More
Sessions are deleted when expired