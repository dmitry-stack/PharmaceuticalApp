export function MapEmbed({
  location = "434 Rockaway Ave, 11212-5636 Brooklyn New York",
}) {
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(location)}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div
      style={{
        width: "100%",
        height: "225px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <iframe
        title="Google Map"
        width="100%"
        height="100%"

        src={mapUrl}
        style={{ border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
