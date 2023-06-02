export const mapFromQuery = (query: string) => {
  const searchParams = new URLSearchParams(query);
  return Object.fromEntries(searchParams.entries());
};
