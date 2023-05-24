import "./globals.css";

import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import getListings, { IListingsParams } from "@/app/actions/getListings";
interface HomeProps {
  searchParams: IListingsParams;
}
// import getCurrentUser from "@/app/actions/getCurrentUser";

import axios from "axios";

let globalData = null;

const url =
  "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685033716282&signature=vywDncpg5n0u37h-IPX60nOPUA8d6AeZFF8BEkKNSdA&downloadName=listings.json";

async function fetchData() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // or handle the error in an appropriate way
  }
}

async function getData() {
  try {
    const jsonData = await fetchData();
    if (jsonData) {
      // Copy the jsonData to some variable or perform further operations
      const copiedData = jsonData.data[0];
      console.log(copiedData);
      globalData = jsonData.data;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

getData();

import ClientOnly from "./components/ClientOnly";

export default function Home() {
  
  const listings = globalData; //await getListings(null);
  const currentUser = null;

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <Container>
        <div
          className="
            pt-24
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.data.map((listing: any) => (
            <ListingCard
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
