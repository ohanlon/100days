interface Recipient {
    email: string;
}

interface Email {
    To: Recipient[] | null;
    CC: Recipient[] | null;
    BCC: Recipient[] | null;
    Subject: string;
    Message: string;
}

const email: Email = {
    To: [{
        email: 'bob@bob.com'
    }],
    CC: [{
        email: 'terry@terry.com'
    }, {
        email: 'chris@chris.com'
    }],
    BCC: null,
    Subject: 'This is my email',
    Message: 'This is the message inside my email'
};

function sendMessage(message: Email) {
    console.log(message);
}

sendMessage(email);