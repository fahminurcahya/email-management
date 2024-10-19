import { db } from "./server/db";

await db.user.create({
  data: {
    emailAddress: "fahminurcahya@gmail.com",
    firstName: "fahmi",
    lastName: "Nurcahya",
  },
});

console.log("done");
