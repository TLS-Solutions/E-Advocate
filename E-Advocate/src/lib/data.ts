
export type UserProfile = {
  id: number;
  name: string;
  age: number;
  location: string;
  bio: string;
  interests: string[];
  image: string;
  barCouncilId?: string;
  verified?: boolean;
};

export const currentUser: UserProfile = {
  id: 12345,
  name: "Alex",
  age: 28,
  location: "San Francisco, CA",
  bio: "Software engineer by day, aspiring chef by night. I love hiking, exploring new coffee shops, and sci-fi movies. Looking for someone with a good sense of humor and a kind heart.",
  interests: ["hiking", "cooking", "sci-fi movies", "coffee"],
  image: "https://placehold.co/100x100.png",
  barCouncilId: "BAR123456",
  verified: true,
};

export const profiles: UserProfile[] = [
  {
    id: 1,
    name: "Samantha",
    age: 27,
    location: "New York, NY",
    bio: "Art historian and dog lover. My weekends are for gallery hopping and long walks with my beagle, Buster. I'm passionate about vintage films and trying new vegetarian recipes.",
    interests: ["art history", "dogs", "vintage films", "vegetarian cooking"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "NYC98765",
    verified: true,
  },
  {
    id: 2,
    name: "Ben",
    age: 30,
    location: "Austin, TX",
    bio: "Fitness enthusiast and musician. I play guitar in a local band and love running marathons. Searching for a partner who enjoys an active lifestyle and live music.",
    interests: ["fitness", "music", "marathons", "live bands"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "TEXAS1234",
    verified: true,
  },
  {
    id: 3,
    name: "Chloe",
    age: 26,
    location: "Paris, France",
    bio: "Graphic designer with a love for travel. I've been to 15 countries and counting! When I'm not designing, I'm usually planning my next adventure or reading a good book in a park.",
    interests: ["graphic design", "travel", "reading", "adventure"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "FR75001",
    verified: true,
  },
  {
    id: 4,
    name: "Marcus",
    age: 29,
    location: "Chicago, IL",
    bio: "Architect who's fascinated by sustainable design. I enjoy cycling, photography, and volunteering at the local animal shelter. Looking for a meaningful connection.",
    interests: ["architecture", "sustainability", "cycling", "photography"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "ILARCH456",
    verified: true,
  },
    {
    id: 5,
    name: "Isabella",
    age: 28,
    location: "Miami, FL",
    bio: "Yoga instructor and mindfulness coach. I find joy in nature, meditation, and deep conversations. I'm looking for a partner who is emotionally intelligent and loves to grow.",
    interests: ["yoga", "mindfulness", "nature", "meditation"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "FLAYOGA22",
    verified: true,
  },
    {
    id: 6,
    name: "Leo",
    age: 31,
    location: "Seattle, WA",
    bio: "Data scientist with a passion for board games and craft beer. My ideal weekend involves a strategic game night with friends. I appreciate wit and intellectual curiosity.",
    interests: ["data science", "board games", "craft beer", "strategy"],
    image: "https://placehold.co/400x400.png",
    barCouncilId: "SEA8361",
    verified: true,
  }
];

export type Message = {
    id: number;
    senderId: number;
    text: string;
    timestamp: string;
};

export const getMockMessages = (contactId: number): Message[] => {
    const contactProfile = profiles.find(p => p.id === contactId);
    const contactName = contactProfile ? contactProfile.name : "Them";

    return [
        { id: 1, senderId: contactId, text: `Hey! I saw we both love hiking. What's your favorite trail in the ${contactProfile?.location.split(',')[0]} area?`, timestamp: "10:00 AM" },
        { id: 2, senderId: 12345, text: "Hi! That's awesome. I love the trail up to Eagle Peak. The view is incredible. Have you been?", timestamp: "10:01 AM" },
        { id: 3, senderId: contactId, text: "I haven't, but it's on my list! We should go sometime.", timestamp: "10:03 AM" },
        { id: 4, senderId: 12345, text: "I'd love that! What are you up to this weekend?", timestamp: "10:04 AM" },
    ]
}
