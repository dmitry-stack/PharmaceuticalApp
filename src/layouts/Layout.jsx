import { Header } from "../components/ui/Header";
import { Navbar } from "../components/ui/Navbar";
import * as styles from "./Layout.module.css";
import { useLocation } from "react-router-dom";

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

export function Layout({ children }) {
  const location = useLocation();
  const header = headers[location.pathname] ?? headers["/"];
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Header header={header.title} description={header.description} />
        <main>{children}</main>
      </div>
    </div>
  );
}
