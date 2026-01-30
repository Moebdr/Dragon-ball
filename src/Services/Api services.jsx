const API = "https://dragonball-api.com/api/characters";
const getDragonball = async function () {
  const response = await fetch(API);
  const Data = await response.json();
  return Data.items;
};
export default getDragonball;
