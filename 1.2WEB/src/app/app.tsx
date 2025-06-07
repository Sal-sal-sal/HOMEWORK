import "./app.css";

import { Route, Routes } from "react-router";
import { Wrapper } from "./ui/wrapper.tsx";
import { Profile } from "../modules/profile/profile.tsx";
import { Posts } from "../modules/posts/posts.tsx";
import { Settings } from "../modules/settings/settings.tsx";
import Chat  from "../modules/chat/chat.tsx";
import { Ai } from "../modules/chat/ai.tsx";
//
// interface User {
//   age: number;
//   name: string;
//   hasALotOfMoney: boolean;
//   hobbies: string[];
// }
//
// const bakhredin: User = {
//   age: 22,
//   name: "bakhredin",
//   hasALotOfMoney: true,
//   hobbies: ["coding", "reading", "playing video games", "wrestling", 1, 2],
// };
Ai("say 'i love unicorns '");
export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Wrapper />}>
        <Route path="/" element={<Profile />} />
        <Route path="chat/:id" element={<Chat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="posts" element={<Posts />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};
