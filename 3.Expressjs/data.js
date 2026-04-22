const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
    gender: "male",
    address: {
      street: "123 Main Street",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA"
    },
    hobbies: ["reading", "hiking", "coding"],
    profile: {
      bio: "A passionate software developer who loves outdoor activities.",
      avatar: "https://example.com/avatar1.jpg",
      socialLinks: {
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/johndoe"
      }
    },
    isActive: true,
    createdAt: new Date("2023-01-15"),
    updatedAt: new Date("2023-06-20")
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    age: 28,
    gender: "female",
    address: {
      street: "456 Oak Avenue",
      city: "Springfield",
      state: "IL",
      zipCode: "62701",
      country: "USA"
    },
    hobbies: ["painting", "traveling", "yoga"],
    profile: {
      bio: "An artist and traveler exploring the world one canvas at a time.",
      avatar: "https://example.com/avatar2.jpg",
      socialLinks: {
        instagram: "https://instagram.com/janesmithart",
        twitter: "https://twitter.com/janesmith"
      }
    },
    isActive: true,
    createdAt: new Date("2023-02-10"),
    updatedAt: new Date("2023-07-05")
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    age: 35,
    gender: "male",
    address: {
      street: "789 Pine Road",
      city: "Riverside",
      state: "TX",
      zipCode: "77471",
      country: "USA"
    },
    hobbies: ["fishing", "cooking", "photography"],
    profile: {
      bio: "A chef and photographer capturing the beauty of nature and cuisine.",
      avatar: "https://example.com/avatar3.jpg",
      socialLinks: {
        youtube: "https://youtube.com/bobjohnsoncooks"
      }
    },
    isActive: false,
    createdAt: new Date("2022-11-20"),
    updatedAt: new Date("2023-05-12")
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice.brown@example.com",
    age: 26,
    gender: "female",
    address: {
      street: "321 Elm Street",
      city: "Madison",
      state: "WI",
      zipCode: "53703",
      country: "USA"
    },
    hobbies: ["dancing", "writing", "gardening"],
    profile: {
      bio: "A writer and dancer who finds inspiration in nature's tranquility.",
      avatar: "https://example.com/avatar4.jpg",
      socialLinks: {
        facebook: "https://facebook.com/alicebrownwriter"
      }
    },
    isActive: true,
    createdAt: new Date("2023-03-08"),
    updatedAt: new Date("2023-08-15")
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie.wilson@example.com",
    age: 42,
    gender: "male",
    address: {
      street: "654 Maple Lane",
      city: "Portland",
      state: "OR",
      zipCode: "97201",
      country: "USA"
    },
    hobbies: ["cycling", "music", "volunteering"],
    profile: {
      bio: "A musician and cyclist dedicated to community service and environmental causes.",
      avatar: "https://example.com/avatar5.jpg",
      socialLinks: {
        spotify: "https://open.spotify.com/artist/charliewilson"
      }
    },
    isActive: true,
    createdAt: new Date("2022-09-30"),
    updatedAt: new Date("2023-04-22")
  }
];

module.exports = users;