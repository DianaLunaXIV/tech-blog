async function postUserData(data) {
    let fetchResult = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    console.log(data)
    console.log(fetchResult)
    return fetchResult;
}

async function onCreateUser(event) {
    event.preventDefault();
    let userData = {
        "name": document.getElementById('name-create').value.trim(),
        "email": document.getElementById('email-create').value.trim(),
        "password": document.getElementById('password-create').value.trim()
    }

    let createResults = await postUserData(userData);

    if (createResults.ok) {
        alert(`User created for ${userData.email}. Welcome, ${userData.name}!`)
        return
    } else {
        alert(`Failed to create user data.`)
        return;
    }
}

document.querySelector('.create-account-button').addEventListener('click', onCreateUser);