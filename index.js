/**
 * REFERENCES
 *
 * Array Iteration Methods: https://www.w3schools.com/JS/js_array_iteration.asp
 * String Methods: https://www.w3schools.com/Jsref/jsref_includes.asp
 */

const channels = [
  {
    name: "PowerfulJRE",
    description: "The Joe Rogan Experience podcast",
    videos: [
      {
        title: "Joe Rogan Experience #1480 - Kevin Hart",
        duration: 121,
      },
      {
        title: "Joe Rogan Experience #1470 - Elon Musk",
        duration: 120,
      },
      {
        title: "Joe Rogan Experience #1477 - Tony Hawk",
        duration: 102,
      },
      {
        title: "Joe Rogan Experience #1413 - Bill Maher",
        duration: 118,
      },
      {
        title: "Joe Rogan Experience #1208 - Jordan Peterson",
        duration: 175,
      },
    ],
  },
  {
    name: "LEMMiNO",
    description:
      "Documentaries and list videos narrated by a 20-something Swedish guy.",
    videos: [
      {
        title: "The Universal S",
        duration: 19,
      },
      {
        title: "Cicada 3301: An Internet Mystery",
        duration: 18,
      },
      {
        title: "The Search For D.B. Cooper",
        duration: 29,
      },
      {
        title: "The Mandela Effect: A Critical Analysis",
        duration: 16,
      },
    ],
  },
  {
    name: "CGP Grey",
    description: "What ever I finds interesting.",
    videos: [
      {
        title: "The Trouble With Tumbleweed",
        duration: 7,
      },
      {
        title: "Lockdown Productivity: Spaceship You",
        duration: 11,
      },
      {
        title: "The Fable of the Dragon-Tyrant",
        duration: 13,
      },
      {
        title: "The Rules for Rulers",
        duration: 18,
      },
      {
        title: "The Simple Solution to Traffic",
        duration: 4,
      },
      {
        title: "You Are Two",
        duration: 5,
      },
    ],
  },
  {
    name: "Alternate History Hub",
    description:
      "An entire channel dedicated to the 'What If?'. Using knowledge of geography, population and other historical facts I predict what could have happened had things gone differently in history.",
    videos: [
      {
        title: "What if Rome Never Existed? Part III",
        duration: 19,
      },
      {
        title: "What if Trump Was Never Elected President?",
        duration: 4,
      },
      {
        title: "How A Corporation Conquered A Sub-Continent",
        duration: 18,
      },
      {
        title: "What if Antarctica Was A Green Continent?",
        duration: 18,
      },
      {
        title: "Why Tyrion's Solution For Westeros Doomed Everyone",
        duration: 8,
      },
      {
        title: "What if Napoleon Never Fell?",
        duration: 10,
      },
    ],
  },
  {
    name: "Example and Ample",
    description: "Some things are better left unsaid.",
    videos: [
      {
        title: "Billie Ellish: everything i wanted",
        duration: 4,
      },
    ],
  },
];

function getChannelName(channel) {
  return channel.name;
}

console.log(getChannelName(channels[0]));

function numberOfVideos(channel) {
  return channel.videos.length;
}

console.log(numberOfVideos(channels[0]));

function channelHasVideo(videoTitle, channel) {
  return channel.videos.some((video) => video.title === videoTitle);
}

console.log(channelHasVideo("The Universal S", channels[0])); // false
console.log(channelHasVideo("The Universal S", channels[1])); // true

function getChannelByName(channelName, channels) {
  return channels.find((channel) => channel.name === channelName);
}

console.log(getChannelByName("PowerfulJRE", channels));
