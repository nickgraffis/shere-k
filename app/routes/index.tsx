import { json, useLoaderData } from "remix";
import { atom, useAtom } from "jotai";
import Home from "~/layouts/Home";
import Dashboard from "~/layouts/Dashboard";

export const emoji = atom('🦄')

export async function loader() {
  return json({ names: 'Nick, Christian, or Robert!'})
}


export default function IndexRoute() {
  const [emojiAtom] = useAtom(emoji);
  const intro = useLoaderData();

  return (
    <Home />
  );
}