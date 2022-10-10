export const checkApiResponse = (res) => {
  if (res.ok) {
    return res.json();
  };
  return Promise.reject(res.status);
};
