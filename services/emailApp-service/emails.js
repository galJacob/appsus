'use strict';
var emails;
const EMAILS_KEY = 'emails';
import utils from '../utils.js';

function query() {
    emails = utils.loadFromStorage(EMAILS_KEY);
    if (!emails) {
        emails = getEmails();
        utils.saveToStorage(EMAILS_KEY, emails);
    }
    return Promise.resolve(emails)
}
function getEmailById(id) {
    let selectedEmail = emails.find(email => email.id === id);
    return Promise.resolve(selectedEmail);
}
function deleteEmailById(id) {
    let idx = emails.findIndex(email => email.id === id);
    emails.splice(idx, 1);
    utils.saveToStorage(EMAILS_KEY, emails);
}

function countReadenEmails() {
    let readenEmails = emails.reduce((readenEmails, email) => {
        if (email.isRead) readenEmails++;
        return readenEmails;
    }, 0);
    return Promise.resolve(readenEmails);
}
function getEmailsByEmailStatus(emailStatus) {
    if (emailStatus === 'read') {
        return emails.filter(email => email.isRead);
    }
    return emails.filter(email => !email.isRead);
}

function onEmailRead(email) {
    email.isRead = true;
    utils.saveToStorage(EMAILS_KEY, emails);
}

function getEmailsByFilterTxt(text, emailsByStatus) {
    return emailsByStatus.filter(email => email.subject.substr(0, text.length) === text);
}
function emptyNewEmail() {
    return {
        subject: '',
        body: '',
        sendAt: null,
        isRead: false,
    }
}

function addNewEmail(newEmail) {
    emails.unshift(newEmail);
    utils.saveToStorage(EMAILS_KEY, emails);
}

function getFilteredEmails(filter) {
    let filteredEmails = utils.loadFromStorage(EMAILS_KEY);
    // let filteredEmails = emails.slice(0);

    switch (filter.emailStatus) {
        case 'all':
            break;
        case 'read':
            filteredEmails = getEmailsByEmailStatus(filter.emailStatus);
            break;
        case 'unread':
            filteredEmails = getEmailsByEmailStatus(filter.emailStatus);
    }
    if (filter.txt)
        filteredEmails = getEmailsByFilterTxt(filter.txt.toLowerCase(), filteredEmails);
    if (filter.date) {
        filteredEmails.sort(function (a, b) {
            return a.sentAt - b.sentAt;
        });
    }
    return filteredEmails;
}

export default {
    query,
    getEmailById,
    deleteEmailById,
    countReadenEmails,
    getFilteredEmails,
    emptyNewEmail,
    addNewEmail,
    onEmailRead,
}

function getEmails() {
    return [
        {
            id: utils.makeid(),
            subject: 'first email',
            body: 'this is first email blabla',
            isRead: true,
            sentAt: Date.now(),
        },
        {
            id: utils.makeid(),
            subject: 'haha',
            body: 'laughing email',
            isRead: false,
            sentAt: Date.now(),
        }, {
            id: utils.makeid(),
            subject: 'hello email',
            body: 'hello world blabla',
            isRead: true,
            sentAt: 1531148536123,
        }, {
            id: utils.makeid(),
            subject: 'asdasdasd',
            body: 'lorem ipsum dolorasdad blabla',
            isRead: false,
            sentAt: 1531148536016,
        },
        {
            id: utils.makeid(),
            subject: 'last email',
            body: 'dsadasdsadad blabla',
            isRead: true,
            sentAt: 1531148435006,
        },
        {
            id: utils.makeid(),
            subject: 'asdasdasd',
            body: 'lorem ipsum dolorasdad blabla',
            isRead: false,
            sentAt: 1531148431006,
        }, {
            id: utils.makeid(),
            subject: 'asdasdasd',
            body: 'lorem ipsum dolorasdad blabla',
            isRead: false,
            sentAt: Date.now(),
        }, {
            id: utils.makeid(),
            subject: 'asdasdasd',
            body: 'lorem ipsum dolorasdad blabla',
            isRead: false,
            sentAt: Date.now(),
        },
    ];
}
