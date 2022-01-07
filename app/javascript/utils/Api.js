export const fetchData = async function (path, params) {
  const query = params ? `${path}?${new URLSearchParams(params)}` : path;
  try {
    const response = await fetch(query);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
    return {};
  }
};
