```

const ezSession = require('...');

ezSession.getSession(token);

ezSession.createSession('admin', '1234567890', new Date(expirationDate), { socketId: '0000', more: '1111', ... });

ezSession.isSessionExpired(token);

ezSession.renovateSession(token, newToken, expireDate);

ezSession.deleteSession(token);

```