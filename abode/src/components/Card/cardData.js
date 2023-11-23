export async function fetchCardData() {
    try {
      const response = await fetch("https://localhost:7282/api/images");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener datos de la API', error);
      return [];
    }
  }
  
  export default async function CardData() {
    return await fetchCardData();
  }
  