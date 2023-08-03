import { Navigate, Outlet } from "react-router";

export default function protectedRouter() {
  const auth = sessionStorage.getItem("login")

  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  )
}