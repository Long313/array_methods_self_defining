const users = [
  {
    id: 1,
    name: "Kien Dam",
  },
  {
    id: 2,
    name: "Son Dang",
  },
  {
    id: 3,
    name: "Long Tran",
  },
];

const comments = [
  {
    id: 1,
    userId: 1,
    content: "Anh Son chua ra video",
  },
  {
    id: 2,
    userId: 2,
    content: "Vua ra xong em oi",
  },
];

function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

function getUsersByIds(userIds) {
  return new Promise((resolve) => {
    const data = users.filter((user) => {
      return userIds.includes(user.id);
    });
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}
getComments()
.then((comments) => {
  const userIds = comments.map((comment) => {
    return comment.userId;
  });
  return getUsersByIds(userIds)
          .then((users) => {
              return {
                users: users,
                comments: comments
              }
          });
})
.then (data => {
    const { users, comments} = data;
    let html = "";
    const commentBlock = document.getElementById("comment-block");
    comments.forEach(comment => {
      const user = users.find( user => {
        return user.id === comment.userId;
      })
      html += `<li>${user.name} : ${comment.content}</li>`;
    })
    commentBlock.innerHTML = html;
})
