const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("DB CONNECTED!");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "send me your exam sheets",
    created_at: new Date(),
  },
  {
    from: "Sumit",
    to: "Rakesh",
    msg: "How r u?",
    created_at: new Date(),
  },
  {
    from: "vikash",
    to: "nitin",
    msg: "Ke haal hai",
    created_at: new Date(),
  },
  {
    from: "pradeep",
    to: "vivek",
    msg: "Or Suna",
    created_at: new Date(),
  },
  {
    from: "Deepa",
    to: "Ankur",
    msg: "How r u ?",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
