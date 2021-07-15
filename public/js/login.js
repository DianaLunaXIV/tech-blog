async function postLoginData(data)
{
    let fetchResult = await fetch('/api/users/login', {
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

async function onLogin(event) {
    event.preventDefault();

    let userData = {
        "email": document.getElementById(`email-login`).value.trim(),
        "password": document.getElementById(`password-login`).value.trim()
    };

    let loginResults = await postLoginData(userData);

    if (loginResults.ok) {
        document.location.replace('/');
    } else {
        alert('Login information incorrect - please try again.')
        return;
    }
}

document.querySelector('.login-form').addEventListener('submit', onLogin);
