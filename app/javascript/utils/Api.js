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

export const postData = async function (path, data = {}) {
  try {
    const response = await fetch(path, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error('Ошибка:', error);
    return {};
  }
};
