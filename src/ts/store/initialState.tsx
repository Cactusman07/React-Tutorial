// src/ts/store/initialState

// Initial State of application
export const initialState = {
  profiles: [
    { login: "Jlord",
      name:"Jessica Lord",
      avatar_url:"https://avatars3.githubusercontent.com/u/1305617?v=4",
      company:"Glitch",
      id:"1"
    },
    { login: "VincentGarreau",
      name:"Vincent Garreau",
      avatar_url:"https://avatars3.githubusercontent.com/u/961898?v=4",
      company:"Livestorm",
      id:"2"
    }
  ],
  showIntroButton: true,
  introText: "Enter your name below, and let's continue.",
  value: 0,
  name: ""
};