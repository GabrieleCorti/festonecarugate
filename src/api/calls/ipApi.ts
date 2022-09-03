export const getIp = async () => {
  const res = await fetch("https://geolocation-db.com/json/");
  const data = (await res.json()) as { IPv4: string; [x: string]: unknown };
  return data.IPv4;
};
