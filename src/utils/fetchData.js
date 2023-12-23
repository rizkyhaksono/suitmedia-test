import axios from "axios";

const fetchData = async ({ pageNumber = 1, pageSize }) => {
  const url = `https://suitmedia-backend.suitdev.com/api/ideas?page[number]=${pageNumber}&page[size]=${pageSize}&append[]=small_image&append[]=medium_image&sort=-published_at`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return null;
  }
};

export default fetchData;
