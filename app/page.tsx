"use client";
import "./globals.css";

import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";
import EmptyState from "@/app/components/EmptyState";

import ClientOnly from "./components/ClientOnly";
import { useState,useEffect } from "react";
const axios = require("axios");

import GetListings from '@/app/actions/getListings';

export interface HomeProps {
  userId?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  startDate?: string;
  endDate?: string;
  locationValue?: string;
  category?: string;
}

export default function Home({ searchParams }: HomeProps) {
  //do useEffect here and get it done MAN!!!
  const [listing, setListing] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await GetListings();
      setListing(listings);
    };
  
    fetchListings();
  }, []);
  
  if (listing.length === 0) {
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
          {listing.data.map((listing: any) => (
            <ListingCard currentUser={null} key={listing.id} data={listing} />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
}
