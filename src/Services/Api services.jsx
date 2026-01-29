const API = 'https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z fighter';
const getDragonball  = async function (){
    const response = await fetch(API)
    const Data = await response.json();
return Data;
}
export default getDragonball;