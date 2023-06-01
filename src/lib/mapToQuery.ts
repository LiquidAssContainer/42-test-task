export const mapToQuery = (object: { [key: string]: string }) => {
  const queryParams = new URLSearchParams();
  for (const key in object) {
    if (object[key]) {
      queryParams.append(key, object[key]);
    }
  }
  return queryParams;
};
