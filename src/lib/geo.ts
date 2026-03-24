const EARTH_RADIUS_KM = 6371;

function toRadians(degrees: number): number {
  return (degrees * Math.PI) / 180;
}

/**
 * Calculate the great-circle distance between two points using the Haversine
 * formula.  Coordinates are given as [latitude, longitude] in degrees.
 * Returns the distance in kilometres.
 */
export function haversineDistance(
  [lat1, lon1]: [number, number],
  [lat2, lon2]: [number, number],
): number {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) ** 2;
  return EARTH_RADIUS_KM * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export const NEAR_ME_RADIUS_KM = 50;

/**
 * Geocode a place name to coordinates using the Google Maps Geocoder.
 * The Google Maps JS API must already be loaded (via `useJsApiLoader`).
 * Returns `[lat, lng]` or `null` when the query cannot be resolved.
 */
export function geocodeLocation(
  address: string,
): Promise<[number, number] | null> {
  if (typeof google === "undefined") return Promise.resolve(null);
  const geocoder = new google.maps.Geocoder();
  return new Promise((resolve) => {
    geocoder.geocode({ address }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK && results && results.length > 0) {
        const loc = results[0].geometry.location;
        resolve([loc.lat(), loc.lng()]);
      } else {
        resolve(null);
      }
    });
  });
}
