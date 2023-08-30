const API_Key = `ffd66deb8ab8e10d45c5d50e87bc5ac2`;
const URL_Base = `https://api.themoviedb.org/3`

export async function fetchDVDData(id) {
    try {
      const response = await fetch(`${URL_Base}/movie/${id}?api_key=${API_Key}&language=en-US`);
      const dvdData = await response.json();
      return dvdData;
    } catch (error) {
      console.error("Error fetching data: ", error);
      return null;
    }
}