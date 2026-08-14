import * as styles from "./DrugCard.module.css";
import locationIcon from "@shared/assets/process/location.svg";
import calendarIcon from "@shared/assets/process/calendar.svg";

export function DrugCard({
  title,
  description,
  location,
  date,
  time,
  postCode,
}) {
  const handleAddToCalendar = () => {
    const startDate = "20260628T100000Z";
    const endDate = "20260702T160000Z";

    const fullLocation = `${location}, ${postCode || ""}`;

    const googleCalendarUrl = new URL(
      "https://calendar.google.com/calendar/render",
    );
    googleCalendarUrl.searchParams.append("action", "TEMPLATE");
    googleCalendarUrl.searchParams.append("text", title);
    googleCalendarUrl.searchParams.append("details", description);
    googleCalendarUrl.searchParams.append("location", fullLocation);
    googleCalendarUrl.searchParams.append("dates", `${startDate}/${endDate}`);

    window.open(googleCalendarUrl.toString(), "_blank");
  };
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
