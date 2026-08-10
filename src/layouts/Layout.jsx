import { Header } from "../components/ui/Header";
import { Navbar } from "../components/ui/Navbar";
import * as styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
}
