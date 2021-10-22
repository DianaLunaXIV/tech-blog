async function putUserData(data) {
    let fetchResult = await fetch('/api/users', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(data)
    console.log(fetchResult)
    return fetchResult;
}

async function onUpdateUser(event) {
    event.preventDefault();

    let userData = {
        "currentPassword": document.getElementById("profile-password-current").value.trim(),
        "newPassword": document.getElementById("profile-password-change").value.trim(),
        "confirmPassword": document.getElementById("profile-password-confirm").value.trim()
    }

    let putResults = await putUserData(userData);

    if (putResults.ok) {
        alert(`Your password has been updated.`)
        return
    } else {
        alert(`Password reset failed. Please try again.`)
        return
    }
}

document.querySelector('.profile-manage-button').addEventListener('click', onUpdateUser);