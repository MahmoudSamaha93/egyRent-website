/* export function getPosts() {
  let payload = null;
  console.log("before fetch");
  fetch("/home")
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      payload = res;
      console.log("result ", res);
    })
    .catch((err) => console.log(err));

  console.log("after fetch");
  return {
    type: "POSTS",
    payload,
  };
} */

export async function getPosts() {
  let payload = null;
  try {
    let response = await fetch("/home");
    payload = await response.json();
    console.log("Payload", payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POSTS",
    payload,
  };
}

export async function getPostById(id) {
  //fetch
  let payload = null;
  try {
    let response = await fetch(`/post/${id}`);
    payload = await response.json();
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "POST_DETAILS",
    payload,
  };
}

export async function createPost(id, post) {
  let payload = null;
  //console.log(post);
  // console.log(Object.fromEntries(post));
  try {
    let response = await fetch(`/${id}/createpost`, {
      method: "POST",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
      },
      body: post,
    });
    payload = response.json();
  } catch (err) {
    console.log(err);
  }
  return {
    type: "CREATE_POST",
    payload,
  };
}

export async function savePost(UserID, PostID) {
  let payload = null;
  console.log(UserID);
  try {
    let response = await fetch(`/post/${PostID}`, {
      method: "PATCH",
      headers: {
        Authorization: `auth-token ${localStorage.getItem("token")}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserID, PostID }),
    });
    payload = response.json();
    console.log(payload);
  } catch (err) {
    console.log(err);
  }
  return {
    type: "SAVE_POST",
    payload,
  };
}
