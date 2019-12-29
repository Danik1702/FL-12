const email = prompt('Enter Email: ', '');
const minEmailLength = 5;
const minPasswordLength = 6;

if (!email) {
    alert('Canceled');
} else if (email.length < minEmailLength) {
    alert("I don't know any emails having name length less than 5 symbols");
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    const password = prompt('Enter password: ', '');

    if (!password) {
        alert('Cenceled');
    } else if (password === 'UserPass' && email === 'user@gmail.com' ||
               password === 'AdminPass' && email === 'admin@gmail.com') {
        const changePassword = confirm('Do you want to change your password?');

        if (!changePassword) {
            alert('You have failed the change.');
        } else {
            const oldPassword = prompt('Enter old password: ', '');

            if (oldPassword === password) {
                const newPassword = prompt('Enter new password: ', '');

                if (!newPassword) {
                    alert('Canceled');
                } else if (newPassword.lenght < minPasswordLength) {
                    alert('It’s too short password. Sorry.');
                } else {
                    const newPasswordConfirm = prompt('Enter new password again: ', '');

                    if (newPasswordConfirm !== newPassword) {
                        alert('You wrote the wrong password.');
                    } else {
                        alert('You have successfully changed your password.')
                    }
                }
            } else {
                alert('Canceled.');
            }
        }
    } else {
        alert('Wrong password');
    }
} else {
    alert("I don't know you");
}
