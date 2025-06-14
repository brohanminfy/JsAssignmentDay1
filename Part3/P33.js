const users = [
  { id: 1, username: "rohan99" },
  { id: 2, username: "samrath99" },
  { id: 3, username: "adil99" },
  { id: 4, username: "shiva99" }
];

const targetId = 4

const targetUser = users.find((user)=>{
    return user.id===targetId
})
console.log(targetUser)