import { MapEmbed } from "../MapEmbed";
import directions from "@shared/assets/process/directions.svg";
import * as styles from "./AdditionalInfoCard.module.css";

export function AdditionalInfoCard({
  clinicName = "Serenity Health Clinic",
  address = "434 Rockaway Ave, 11212-5636",
  city = "Brooklyn New York",
  tags = [],
}) {
  const handleGetDirections = () => {
    const fullDestination = `${address}, ${city}`;

    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(fullDestination)}`;

    window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
  };
  return (
    <aside className={styles.container}>
      <section className={styles.section}>
        <h2 className={styles.title}>Manufacturer</h2>
        <div className={styles.manufacturer}>
          <div className={styles.manufacturerLogo} />
          <span className={styles.manufacturerName}>{clinicName}</span>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Location</h2>

        <div className={styles.mapContainer}>
          <MapEmbed location={`${address}, ${city}`} />
        </div>

        <div className={styles.addressRow}>
          <span>{address}</span>
          <span className={styles.addressRowCity}>{city}</span>
        </div>

        <button
          type="button"
          className={styles.getDirectionsBtn}
          onClick={handleGetDirections}
        >
          <img src={directions} alt="" className={styles.btnIcon} />
          Get directions
        </button>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>Tags</h2>
        <div className={styles.tagList}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tagBadge}>
              {tag}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}
