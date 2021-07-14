async function postData(data) {
  let fetchResult = await fetch("/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return fetchResult;
}

const createPost = async (ev) => {
  ev.preventDefault(); //to stop the form submitting
  let post = {
    title: document.getElementById("post-title").value,
    body: document.getElementById("post-content").value,
  };
  document.forms[0].reset(); // to clear the form for the next entries

  let postResults = await postData(post);

  let pre = document.querySelector("#msg pre"); //message to append describing posting status

  if (postResults.ok) {
    pre.textContent = "Post created!";
    document.location.reload();
  } else {
    pre.textContent = "Post creation failed. Make sure you're logged in!";
  }
};

document.querySelector('.create-post-btn').addEventListener("click", createPost);
