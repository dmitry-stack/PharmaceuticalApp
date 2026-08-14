import * as styles from "./DrugCard.module.css";
import locationIcon from "@shared/assets/process/location.svg";
import calendarIcon from "@shared/assets/process/calendar.svg";
import { convertToISO8601 } from "@shared/utils/dateUtils";

export function DrugCard({
  title,
  description,
  location = "434 Rockaway Ave, ,BrooklynNew York",
  startDate,
  endDate,
  time = "10 am - 4 pm Eastern Daylight Time ",
  postCode = "11212-5636",
}) {
  const handleAddToCalendar = () => {
    const fullLocation = `${location}, ${postCode || ""}`;

    const googleCalendarUrl = new URL(
      "https://calendar.google.com/calendar/render",
    );
    googleCalendarUrl.searchParams.append("action", "TEMPLATE");
    googleCalendarUrl.searchParams.append("text", title);
    googleCalendarUrl.searchParams.append("details", description);
    googleCalendarUrl.searchParams.append("location", fullLocation);

    if (startDate && endDate) {
      const startISO = convertToISO8601(startDate, false);
      const endISO = convertToISO8601(endDate, true);
      if (startISO && endISO) {
        googleCalendarUrl.searchParams.append("dates", `${startISO}/${endISO}`);
      }
    }

    window.open(googleCalendarUrl.toString(), "_blank");
  };

  const date = `${startDate} - ${endDate}`;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.infoBox}>
        <div className={styles.infoColumn}>
          <div className={styles.infoHeader}>
            <div className={styles.iconWrapper}>
              <img src={locationIcon} alt="Location" />
            </div>
            <h3 className={styles.infoTitle}>Location</h3>
          </div>
          <div className={styles.infoDetails}>
            <p>{location}</p>
            {postCode && <p>{postCode}</p>}
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.infoColumn}>
          <div className={styles.infoHeader}>
            <div className={styles.iconWrapper}>
              <img src={calendarIcon} alt="Date & Time" />
            </div>
            <h3 className={styles.infoTitle}>Date & Time</h3>
          </div>
          <div className={styles.infoDetails}>
            <p>{date}</p>
            {time && <p>{time}</p>}
          </div>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.btnPrimary}>
          Start Process
        </button>

        <button
          type="button"
          className={styles.btnSecondary}
          onClick={handleAddToCalendar}
        >
          <img
            src={calendarIcon}
            alt="Add to Calendar"
            className={styles.btnIcon}
          />
          Add to Calendar
        </button>
      </div>
    </div>
  );
}
