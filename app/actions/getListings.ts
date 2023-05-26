import axios from "axios";
import { useEffect } from "react";

async function GetListings() {
  const [listing, setListing] = useEffect([]);
  let globalData = null;

  const url =
    "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685033716282&signature=vywDncpg5n0u37h-IPX60nOPUA8d6AeZFF8BEkKNSdA&downloadName=listings.json";

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      console.log(response.data.data);
      setListing(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return error;
      //return null; // or handle the error in an appropriate way
    }
  }

  const returnData = await fetchData();

  return listing;
}

export default GetListings;