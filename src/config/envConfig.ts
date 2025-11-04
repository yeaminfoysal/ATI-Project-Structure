export const getBaseUrl = (): string => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://192.168.100.223:5000/ips/api/v1";
};
