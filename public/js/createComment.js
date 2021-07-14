async function postData(data)
{
    let fetchResult = await fetch('/api/comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return fetchResult;
}

const createComment = async (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    const queryString = window.location.pathname;
    let postID = queryString.split("/").pop();
    let comment = {
        body: document.getElementById('comment-content').value,
        post_id: postID
    }
    if (!comment.body){
        alert('Comments cannot be blank!')
        return
    }
    document.forms[0].reset(); // to clear the form for the next entries

    let commentResults = await postData(comment);

    let pre = document.querySelector('#msg pre');
    if (commentResults.ok) {
        pre.textContent = "Comment created!";
        document.location.reload();
    } else {
        pre.textContent = "Comment creation failed. Make sure you're logged in!"
    }
    
}
document.getElementById('btn').addEventListener('click', createComment);