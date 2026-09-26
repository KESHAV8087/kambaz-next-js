import { redirect } from "next/navigation";

// "/account" redirects to the Sign in screen.
export default function Account() {
  redirect("/account/signin");
}
