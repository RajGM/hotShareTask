import axios from "axios";
import { useEffect } from "react";

async function GetListings() {
  const [listing, setListing] = useEffect([]);
  let globalData = null;

  const url =
    "https://file.notion.so/f/s/24643894-e5c3-4c40-974a-52594f581e03/listings.json?id=f795dab6-14d4-48a9-9567-c72151d311a2&table=block&spaceId=f2ea7328-64a4-4f18-bacc-df6c9ac3d888&expirationTimestamp=1685176373845&signature=H4okn2SMflviy6CmU7OIGO80wwKTQ-N-60tjYVqRy-Y&downloadName=listings.json";

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

export const testData = [{
  "ref": "https://www.airbnb.com/rooms/812847092697581949",
  "info": {
    "type": "home",
    "images": {
      "type": "image",
      "data": [
        {
          "url": "https://a0.muscache.com/im/pictures/miso/Hosting-812847092697581949/original/0d376879-2bdf-4962-8f44-d6c4183f5ecb.jpeg?im_w=720",
          "width": 720,
          "height": 540,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "main"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/0d376879-2bdf-4962-8f44-d6c4183f5ecb.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/7927a760-c6e7-42b5-9b53-34dbb33e8886.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/027c42c2-1ff5-407f-9b07-888faa1031fd.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/f42815a5-c72f-463f-82d3-ed08d73d1594.jpeg",
          "width": 3024,
          "height": 4032,
          "mimeType": "image/jpeg",
          "orientation": "portrait",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/95473b3b-2c4f-47e0-bae0-2c1e47a19a46.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/28216516-f414-4e01-b486-c8e25bfc0063.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/3a485a9c-2491-49d1-9e1a-e576949a6aa0.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/65a174d5-d481-4b4a-812d-aca12b67596a.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/d29fdd9e-03a5-43fa-a6c3-9cfbc4edcb78.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/cc2338d4-6b82-40b8-bd8c-543873bf8b96.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/f13f05ad-3e32-43fb-aec1-99d7473d0b1d.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/7e2bb971-2061-4b4c-aab7-6faa00cf8afe.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/f77aebaa-e8d0-425a-9d00-7e76d84885f8.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/c0d90f3a-75bb-4118-9439-fb3594b369d6.jpeg",
          "width": 3024,
          "height": 4032,
          "mimeType": "image/jpeg",
          "orientation": "portrait",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/3bd94eb9-f1b4-466b-a70b-389d2cdc4e44.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/5f26dc52-7c8a-4e02-9fac-43aee8541e32.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/1ca43d61-48ce-4ae5-ac7f-a3936943ef70.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/77ec61b1-3632-43e5-ab4f-31a3f752e4c2.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/77e75db4-4dd8-4372-9cfd-cb1bfaae3ef3.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/03b75b31-632e-44ab-ae93-c35a2f7bcffc.jpeg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/73969763-6895-4198-bd2b-4975b5858b69.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/6865db10-b8a5-4275-8f6c-0060e9d9e751.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/813fa3ca-49ce-41b6-8a8b-02dc4ff70068.jpg",
          "width": 4032,
          "height": 3024,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.3333333333333333,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/b5158de1-ba3c-46ae-b976-655b2eceea78.jpeg",
          "width": 4000,
          "height": 2252,
          "mimeType": "image/jpeg",
          "orientation": "landscape",
          "aspectRatio": 1.7761989342806395,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/pictures/miso/Hosting-812847092697581949/original/26a3f419-f2a9-4b23-b08c-16347770f47c.jpeg",
          "width": 2252,
          "height": 4000,
          "mimeType": "image/jpeg",
          "orientation": "portrait",
          "aspectRatio": 1.7761989342806395,
          "type": "photo"
        },
        {
          "url": "https://a0.muscache.com/im/pictures/user/0e5931b4-3ba6-4f62-ae9f-170235aeee93.jpg?aki_policy=profile_x_medium",
          "width": 225,
          "height": 225,
          "mimeType": "image/jpeg",
          "orientation": "square",
          "aspectRatio": 1,
          "type": "avatar"
        }
      ],
      "count": 27
    },
    "details": {
      "type": "detail",
      "data": [
        {
          "type": "guests",
          "value": 2
        },
        {
          "type": "bedroom",
          "value": 1
        },
        {
          "type": "bed",
          "value": 1
        },
        {
          "type": "bath",
          "value": 1
        }
      ],
      "count": 4
    },
    "description": "Escape to the desert with our charming bungalow in Terlingua, Texas. This bohemian retreat is the perfect getaway for those looking for privacy and tranquility. The bungalow boasts unique boho design touches, making it a cozy and stylish space to relax in after a day of exploring the beautiful Big Bend National Park, just a short drive away. Whether you're looking to hike, stargaze or simply unwind, this desert oasis is the perfect place to make unforgettable memories.\n**The space**\nThis bungalow boasts a minimalistic boho design, with small but unique decor touches that create a warm and inviting atmosphere. The highlight of the interior is the large 5-window front facing the beautiful desert sunset, providing an incredible natural light and an amazing view of the sunset that can be enjoyed throughout the bungalow. Not only does it offer full privacy in the middle of the desert, but it also features an outdoor space that includes a relaxing hammock, where you can enjoy the beautiful views and the peaceful desert ambiance.\nOur bungalow offers a solar shower and a solar panel that works during daylight, and a solar light that works at night. However, please be aware that we do not have running water or electricity. We provide a small sink and a solar shower, but please bring your own water to fill them up. \nYou will have your own private bathroom and will be able to use a composting toilet. Please make sure to be familiar with the instructions prior to using it.\nPlease check the weather before you arrive and it might be a good idea to bring an additional blanket if it gets cold. If you are traveling with more people, feel free to check our other bungalows, they are located on the same property about 100 yards away. \nSo, come and experience the serenity of the desert while staying in our cozy bungalow, and make memories that will last a lifetime!\n**Guest access**\nNestled within our picturesque 5-acre property, located 64 miles south of Alpine along Highway 118, lies our charming bungalow. Only a 25-minute drive from the historic Terlingua Ghost Town and half an hour from the entrance of the renowned Big Bend National Park, our off-grid bungalow is easily accessible via well-maintained roads, suitable for any type of vehicle. We invite you to explore the beauty of our property, but kindly request that you respect and refrain from disturbing the local wildlife. Thank you!\n**Other things to note**\nTo avoid any misunderstandings:\nWe provide:\n\n- Toilet \n- Solar shower\n- Bed & Bedding\n- Sink \n \nPlease bring:\n- water for sink and shower\n- Toilet paper (just in the unlikely case we‘re out of stock)\n- Towels\n- Sheets\nNote: we run on a self cleaning policy, where every guest has to clean up when they check out. Please keep that in mind when you book. :)",
    "mainImage": {
      "url": "https://a0.muscache.com/im/pictures/miso/Hosting-812847092697581949/original/0d376879-2bdf-4962-8f44-d6c4183f5ecb.jpeg?im_w=720",
      "width": 720,
      "height": 540,
      "mimeType": "image/jpeg",
      "orientation": "landscape",
      "aspectRatio": 1.3333333333333333,
      "type": "main"
    },
    "maxGuestCapacity": 2,
    "host": {
      "name": " Natalie And Scott",
      "avatar": {
        "url": "https://a0.muscache.com/im/pictures/user/0e5931b4-3ba6-4f62-ae9f-170235aeee93.jpg?aki_policy=profile_x_medium",
        "width": 225,
        "height": 225,
        "mimeType": "image/jpeg",
        "orientation": "square",
        "aspectRatio": 1,
        "type": "avatar"
      },
      "isSuperhost": false
    },
    "amenities": {
      "type": "amenitiy",
      "data": [
        {
          "group": "Scenic views",
          "available": true,
          "title": "Desert view",
          "type": "desert_cactus"
        },
        {
          "group": "Bathroom",
          "available": true,
          "title": "Outdoor shower",
          "type": "shower"
        },
        {
          "group": "Bedroom and laundry",
          "available": true,
          "title": "Hangers",
          "type": "hangers"
        },
        {
          "group": "Bedroom and laundry",
          "available": true,
          "title": "Bed linens",
          "type": "blankets"
        },
        {
          "group": "Bedroom and laundry",
          "available": true,
          "title": "Extra pillows and blankets",
          "type": "pillow"
        },
        {
          "group": "Bedroom and laundry",
          "available": true,
          "title": "Room-darkening shades",
          "type": "blackout_shades"
        },
        {
          "group": "Bedroom and laundry",
          "available": true,
          "title": "Mosquito net",
          "type": "mosquito_net"
        },
        {
          "group": "Entertainment",
          "available": true,
          "title": "Exercise equipment: yoga mat",
          "type": "gym"
        },
        {
          "group": "Entertainment",
          "available": true,
          "title": "Books and reading material",
          "type": "book"
        },
        {
          "group": "Family",
          "available": true,
          "title": "Crib - always at the listing",
          "type": "crib"
        },
        {
          "group": "Family",
          "available": true,
          "title": "Board games",
          "type": "board_games"
        },
        {
          "group": "Internet and office",
          "available": true,
          "title": "Dedicated workspace",
          "type": "workspace"
        },
        {
          "group": "Kitchen and dining",
          "available": true,
          "title": "Dining table",
          "type": "dining_table"
        },
        {
          "group": "Location features",
          "available": true,
          "title": "Private entrance",
          "type": "door"
        },
        {
          "group": "Outdoor",
          "available": true,
          "title": "Fire pit",
          "type": "firepit"
        },
        {
          "group": "Outdoor",
          "available": true,
          "title": "Outdoor furniture",
          "type": "rooftop_deck"
        },
        {
          "group": "Outdoor",
          "available": true,
          "title": "Hammock",
          "type": "hammock"
        },
        {
          "group": "Outdoor",
          "available": true,
          "title": "Outdoor dining area",
          "type": "rooftop_deck"
        },
        {
          "group": "Outdoor",
          "available": true,
          "title": "BBQ grill",
          "type": "grill"
        },
        {
          "group": "Parking and facilities",
          "available": true,
          "title": "Free parking on premises",
          "type": "maps_car_rental"
        },
        {
          "group": "Parking and facilities",
          "available": true,
          "title": "Free street parking",
          "type": "maps_car_rental"
        },
        {
          "group": "Services",
          "available": true,
          "title": "Pets allowed",
          "type": "pets"
        },
        {
          "group": "Services",
          "available": true,
          "title": "Self check-in",
          "type": "key"
        },
        {
          "group": "Services",
          "available": true,
          "title": "Lockbox",
          "type": "safe"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Security cameras on property",
          "type": "no_surveillance"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Kitchen",
          "type": "no_kitchen"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Wifi",
          "type": "offline"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "TV",
          "type": "no_tv"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Washer",
          "type": "no_washer"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Air conditioning",
          "type": "no_air_conditioning"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Hair dryer",
          "type": "no_hair_dryer"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Essentials",
          "type": "no_essentials"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Smoke alarm",
          "type": "no_detector_smoke"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Carbon monoxide alarm",
          "type": "no_detector_co2"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Shampoo",
          "type": "no_shampoo"
        },
        {
          "group": "Not included",
          "available": false,
          "title": "Heating",
          "type": "no_heater"
        }
      ],
      "count": 36
    },
    "title": "Private Bungalow near Big Bend",
    "id": "812847092697581949",
    "location": {
      "lat": 29.32142,
      "long": -103.61599,
      "address": "",
      "city": "Terlingua",
      "country": {
        "code": "US",
        "title": "United States"
      },
      "zip": ""
    },
    "ratings": {
      "accuracy": 4.9,
      "checkin": 4.8,
      "cleanliness": 4.8,
      "communication": 5,
      "location": 4.7,
      "value": 4.6,
      "guestSatisfactionOverall": 4.9
    },
    "visibleReviewCount": 10,
    "available": true,
    "price": 76,
    "currency": {
      "code": "USD",
      "symbol": "$",
      "name": "United States Dollar"
    },
    "sleepingArrangements": {
      "type": "sleeping-arrangement",
      "data": [],
      "count": 0
    }
  }
}];