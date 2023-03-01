export const AJAX = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);

    if (!res.ok) throw new Error(`${data.message}`);
  } catch (err) {
    throw err;
  }
};
