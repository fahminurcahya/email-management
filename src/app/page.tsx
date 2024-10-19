import Link from "next/link";

import { LatestPost } from "@/app/_components/post";
import { api, HydrateClient } from "@/trpc/server";
import LinkAccountButton from "@/components/link-account-button";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });

  return <LinkAccountButton />;
}
