type GoogleMapProps = {
  /** Use a Google Maps "Embed a map" URL. */
  src: string;
  title?: string;
};

const GoogleMap = ({ src, title = "Google Map" }: GoogleMapProps) => {
  return (
    <div className="h-60 w-full overflow-hidden rounded-md md:h-150">
      <iframe
        title={title}
        src={src}
        className="h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
