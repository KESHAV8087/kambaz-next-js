import { redirect } from "next/navigation";

// "/" redirects to the Sign in screen.
export default function Home() {
  redirect("/account/signin");
}
