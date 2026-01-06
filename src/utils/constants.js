export const LOGO="https://cinemix.theayushgupta.in/cinemix.png"

export const BACK_IMAGE="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_large.jpg"

const token=import.meta.env.VITE_TMDB_API_TOKEN;
export const OPTIONS={
  
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  }
};

export const IMG_CDN="https://image.tmdb.org/t/p/w500/";
