//send delete request via logout route
async function logoutRequest() {
    let fetchResult = await fetch ('/api/users/logout', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return fetchResult;
}

async function onLogout(event) {
    event.preventDefault();
    let logoutResults = await logoutRequest();

    if (logoutResults.ok)
    {
        document.location.replace('/login');
    }
}

//try to get logout button
let logoutButton = document.querySelector('#logout');
if(logoutButton!==null)
{
    document.querySelector('#logout').addEventListener('click', onLogout)
}