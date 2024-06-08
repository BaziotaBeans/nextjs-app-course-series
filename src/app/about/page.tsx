import { cookies } from "next/headers";

export const metadata = {
    title: "About codevolution"
}

export default function About() {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme");
    console.log(theme);

    console.log("yes");
    return <h1>About me</h1>
}