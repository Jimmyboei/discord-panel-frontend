import {  Routes, Route, useNavigate } from "react-router-dom";

import Login from "src/page/login/Login";
import FunStuff from "src/page/dashboard/FunStuff";
import ServerAnalytics from "src/page/dashboard/ServerAnalytics";
import ChatLog from "src/page/dashboard/ChatLog";
import Settings from "src/page/dashboard/Settings";
import NotFound from "src/page/notFound/NotFound";

import { getCookie } from "src/utlis/cookie";
import { useEffect } from "react";

export default function Router() {
  const nav = useNavigate();

  const token = getCookie("token");

  useEffect(() => {
    if (!token) nav("/login");
  }, [token]);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/fun-stuff" element={<FunStuff />} />
      <Route path="/dashboard/server-analytics" element={<ServerAnalytics />} />
      <Route path="/dashboard/chat-log" element={<ChatLog />} />
      <Route path="/dashboard/settings" element={<Settings />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
