'use strict';

function query() {
    return Promise.resolve(emails)
}

var emails = [
    {
        subject: 'first email',
        body: 'this is first email blabla',
        isRead: false,
        sentAt: 123123131231,
    },
    {
        subject: 'haha',
        body: 'laughing email',
        isRead: false,
        sentAt: 123333131231,
    }, {
        subject: 'hello email',
        body: 'hello world blabla',
        isRead: false,
        sentAt: 122123131231,
    }, {
        subject: 'last email',
        body: 'lorem ipsum dolorasdad blabla',
        isRead: false,
        sentAt: 123123132231,
    },
];
export default {
    query,
}
