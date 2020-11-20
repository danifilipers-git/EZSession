# USAGE

const ezSession = require('...');

# Get session by filter
ezSession.getSession(field, content);
EXAMPLE: ezSession.getSession('username', 'xico');

```
field - field to search
content - content to be searched in that field
```

## Create session - Multiple user sessions allowed
ezSession.createSession(username, expireTime, details);
EXAMPLE: ezSession.createSession('xico', 30, { token: 'abcdx', socketId: '0000' });

```
username - user identifier
expireTime - time in minutes that session lasts
details - object with the extra details needed
```

## End all sessions that match filter
ezSession.endSession(field, content);
EXAMPLE: ezSession.endSession('token', 'abcdx');

```
field - field to search (field must belong to details property)
content - content to be searched in that details field
```

## More
Every 30 minutes sessions are checked and deleted if expired