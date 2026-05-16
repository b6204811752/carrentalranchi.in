interface Props {
  from: string;
  to: string;
  fromLat?: number;
  fromLng?: number;
  toLat?: number;
  toLng?: number;
}

export default function MapEmbed({ from, to, fromLat = 23.3441, fromLng = 85.3096, toLat, toLng }: Props) {
  const origin = `${fromLat},${fromLng}`;
  const destination = toLat && toLng ? `${toLat},${toLng}` : encodeURIComponent(to + ", India");
  const embedUrl = `https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(from + ", India")}&destination=${destination}&mode=driving`;
  
  // Fallback to static map if no API key
  const fallbackUrl = `https://www.google.com/maps?q=${encodeURIComponent(from + " to " + to + " route")}&output=embed`;

  return (
    <div className="glass-card overflow-hidden" id="route-map">
      <div className="p-4 border-b border-white/5">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          📍 {from} → {to} Route Map
        </h3>
      </div>
      <div className="relative" style={{ height: 300 }}>
        <iframe
          src={fallbackUrl}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${from} to ${to} Route Map`}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
