import { db } from "@/server/db";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  const reqBody = await req.json();
  const emailAddress = reqBody.data.email_addresses[0].email_address;
  const firstName = reqBody.data.first_name;
  const lastName = reqBody.data.last_name;
  const id = reqBody.data.id;
  const imageUrl = reqBody.data.profile_image_url;
  await db.user.create({
    data: {
      id,
      emailAddress,
      firstName,
      lastName,
      imageUrl,
    },
  });
  console.log("user created");
  return new Response("Success", { status: 200 });
};
