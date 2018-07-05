'use strict';

function query() {
    return Promise.resolve(emails)
}
function getEmailById(id) {
    let selectedEmail = emails.find(email => email.id === id);
    return Promise.resolve(selectedEmail);
}
function deleteEmailById(id) {
    let idx = emails.findIndex(email => email.id === id);
    console.log(idx);
    emails.splice(idx,1);
    console.log(emails);
}

var emails = [
    {
        id: 'asdsadsa',
        subject: 'first email',
        body: 'this is first email blabla',
        isRead: true,
        sentAt: 1530799984,
    },
    {
        id: '2',
        subject: 'haha',
        body: 'laughing email',
        isRead: false,
        sentAt: 123333131231,
    }, {
        id: '3',
        subject: 'hello email',
        body: 'hello world blabla',
        isRead: true,
        sentAt: 122123131231,
    }, {
        id: '4',
        subject: 'last email',
        body: 'lorem ipsum dolorasdad blabla',
        isRead: false,
        sentAt: 123123132231,
    },
];
export default {
    query,
    getEmailById,
    deleteEmailById,
}
