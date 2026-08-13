import { Header } from "@widgets/header/Header";
import { Navbar } from "@widgets/navbar/Navbar";
import * as styles from "./Layout.module.css";
import { useLocation, Outlet } from "react-router-dom";

const headers = {
  "/": {
    title: "Testing Dashboard",
    description: "Uncover insights into your testing processes.",
  },
  "/tables": {
    title: "List of medications in development",
    description: "Brief summary of testing processes",
  },
};

export function Layout() {
  const location = useLocation();
  const header = headers[location.pathname] ?? headers["/"];
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Header header={header.title} description={header.description} />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
