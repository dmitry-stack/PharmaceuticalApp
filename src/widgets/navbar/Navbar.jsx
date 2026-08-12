import React, { useState } from "react";
import * as styles from "./Navbar.module.css";
import homeIcon from "../../shared/assets/home.svg";
import tablesIcon from "../../shared/assets/tables.svg";
import processesIcon from "../../shared/assets/process.svg";
import documentationIcon from "../../shared/assets/documentations.svg";
import sunIcon from "../../shared/assets/sun.svg";
import notificationIcon from "../../shared/assets/notifications.svg";
import settingsIcon from "../../shared/assets/settings.svg";
import avatar from "../../shared/assets/avatar.png";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const { type, id } = JSON.parse(
    localStorage.getItem("lastOpenProduct") || "{}",
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <button
            type="button"
            className={styles.hamburger}
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            ☰
          </button>
        </div>

        <div
          id="main-nav"
          className={`${styles.navCenter} ${open ? styles.open : ""}`}
        >
          <Link
            to="/"
            className={styles.navItem}
            type="button"
            onClick={() => setOpen(false)}
          >
            <img src={homeIcon} alt="Home" />
            Home
          </Link>
          <Link
            to="/tables"
            className={styles.navItem}
            type="button"
            onClick={() => setOpen(false)}
          >
            <img src={tablesIcon} alt="Tables" />
            Tables
          </Link>

          <Link
            to={`/process/${type}/${id}`}
            className={styles.navItem}
            type="button"
            onClick={() => setOpen(false)}
          >
            <img src={processesIcon} alt="Process" />
            Process
          </Link>
          <button
            className={styles.navItem}
            type="button"
            onClick={() => setOpen(false)}
          >
            <img src={documentationIcon} alt="Documentation" />
            Documentation
          </button>
        </div>

        <div className={styles.right}>
          <div className={styles.userActions}>
            <button
              type="button"
              className={styles.sunIcon}
              aria-label="Toggle theme"
            >
              <img src={sunIcon} alt="Theme" />
            </button>
            <button
              type="button"
              className={styles.icon}
              aria-label="Notifications"
            >
              <img src={notificationIcon} alt="Notifications" />
            </button>
            <button type="button" className={styles.icon} aria-label="Settings">
              <img src={settingsIcon} alt="Settings" />
            </button>
            <img src={avatar} alt="User Avatar" />
          </div>
        </div>
      </div>
    </nav>
  );
}
