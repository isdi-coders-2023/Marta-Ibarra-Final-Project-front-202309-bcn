import {
  PaintingStructure,
  PaintingWithoutId,
} from "../store/paintings/features/paintings/types";

export const louPaintingMock: PaintingStructure = {
  _id: "6564d084ab6e912be5400b16",
  authorInfo:
    "Brooklyn based, Haitian American photographer and creative director, Lougè Delcy, better known as Dapper Lou. Delcy has traveled much of the African continent documenting indigenous cultures and people. His vibrant visual style, and willingness to dive deep into the exploration of each city has allowed him to make a name for himself as a visual documentarian. Delcy uses his Haitian roots and love of travel as drivers for his creative output and urge to discover and amplify stories that we don't often hear.",
  image: "https://i.ibb.co/sbf9jRM/Lou-Drapper.webp",
  imageDescription:
    "At first I didn't have the mainland as my main goal, but an opportunity arose. My first project in Africa was in Kenya, in a non-profit collaboration. I documented the situation of pregnant women in the country. The idea was to put the spotlight on these women, some of whom suffer and die during childbirth. But it was not only photographing them as victims, but also as heroines, women who fight and raise their children. It was the first time I set foot on the continent and that made me very interested in the cultural diversity in these countries..",
  name: "Dapper Lou",
  price: 6000,
  title: "Boys who swim",
  year: 2019,
};

export const jamelPaintingMock: PaintingStructure = {
  _id: "6564d0f8ab6e912be5400b17",
  authorInfo:
    "Jamel Armand is considered as one of the most exciting and energising artists and painters in The Netherlands, with his colourful and intriguing artwork being applauded by galleries, interior designers, art lovers and creative spirits. Having reached mainstream audiences through his collaboration with DI-RECT, among others,",
  image: "https://i.ibb.co/tQWdrpy/Jamel-Armand.webp",
  imageDescription:
    "Jamel Armand's paintings are an ode to the purity and aesthetics of forgotten civilizations. In his own way, his paintings capture the souls of indigenous peoples with love and dedication. Jamel feels a deep connection to his Indonesian heritage and the tribes he could have belonged to in a past life. He honors them by painting their portraits. He shows the beauty and pride that they have always managed to keep despite their suffering.",
  name: "Jamel Armand",
  price: 3500,
  title: "Untitled",
  year: 2015,
};

export const asifPaintingMock: PaintingStructure = {
  _id: "6564d0fdab6e912be5400b18",
  authorInfo:
    "Asif Hoque is finally feeling grounded. The Italian-born, Florida-raised painter is taking stock of his life and the numerous identities and labels that have been attached to him over the years. And this inner exploration is making its way onto his heroic canvases. In conversation with Platform, Hoque spoke about the importance of depicting melanated figures as powerful, why galleries should invest in the mental health of their artists, and the impetus behind making modern love stories.",
  image: "https://i.ibb.co/L9wRjQb/Asif-Hoque-1.webp",
  imageDescription:
    "I took my loverboy character and rescued the brown Indian figure out of that painting and into a love story. I recreated that painting, but then also included little snippets of what would happen after or before. That's how I'm processing my work now. I want to rescue figures or bring Black and Brown figures to light. That's where the work that I'm showing on Platform comes in. The clouds are being hit by light, the figures are being hit by light, and that makes us powerful. When we look up at the sun and we take these really nice photos of ourselves, because we're full of melanin, we shine. I want to expose that positivity as much as possible in my paintings.",
  name: "Asif Hoque",
  price: 7000,
  title: "Stuck on you",
  year: 2021,
};

export const basquiatPaintingMock: PaintingStructure = {
  _id: "6564d129ab6e912be5400b1f",
  image: "https://i.ibb.co/VmNHd2K/sugar-ray-robinson-1.webp",
  name: "Jean Michel Basquiat",
  price: 10000000,
  title: "Sugar Ray Robinson",
  year: 1982,
  authorInfo:
    "Jean-Michel Basquiat is considered to be one of the most influential African-American artists of the late twentieth century.",
  imageDescription:
    "Sugar Ray Robinson is one of the true icons from the sport of boxing and can be considered one of the heroes of a young Jean-Michel Basquiat. The artist respected most prominent African-Americans within the fields of sport and music and in this example chose to produce a Neo-Expressionist portrait of him.",
};

export const chanelPaintingMock: PaintingStructure = {
  _id: "6564d129ab6e912be540dhjkdii",
  image: "https://i.ibb.co/VmNHd2K/nina-chanel",
  name: "Nina Chanel",
  price: 2500,
  title: "The Don Killuminati",
  year: 2020,
  authorInfo:
    "Considered to be one of the most influential African-American artists of the  twenty-first century.",
  imageDescription:
    "The Don Killuminati is one of the true icons from the sport of boxing and can be considered one of the heroes of a young Jean-Michel Basquiat. The artist respected most prominent African-Americans within the fields of sport and music and in this example chose to produce a Neo-Expressionist portrait of him.",
};

export const paintingsMock = [louPaintingMock, jamelPaintingMock];

export const addedPaintingMock = [
  louPaintingMock,
  jamelPaintingMock,
  asifPaintingMock,
];

export const louPaintingMockWithoutId: PaintingWithoutId = {
  authorInfo:
    "Brooklyn based, Haitian American photographer and creative director, Lougè Delcy, better known as Dapper Lou. Delcy has traveled much of the African continent documenting indigenous cultures and people. His vibrant visual style, and willingness to dive deep into the exploration of each city has allowed him to make a name for himself as a visual documentarian. Delcy uses his Haitian roots and love of travel as drivers for his creative output and urge to discover and amplify stories that we don't often hear.",
  image: "https://i.ibb.co/sbf9jRM/Lou-Drapper.webp",
  imageDescription:
    "At first I didn't have the mainland as my main goal, but an opportunity arose. My first project in Africa was in Kenya, in a non-profit collaboration. I documented the situation of pregnant women in the country. The idea was to put the spotlight on these women, some of whom suffer and die during childbirth. But it was not only photographing them as victims, but also as heroines, women who fight and raise their children. It was the first time I set foot on the continent and that made me very interested in the cultural diversity in these countries..",
  name: "Dapper Lou",
  price: 6000,
  title: "Boys who swim",
  year: 2019,
};

export const louPaintingMockModified: PaintingStructure = {
  _id: "6564d084ab6e912be5400b16",
  authorInfo:
    "Brooklyn based, Haitian American photographer and creative director, Lougè Delcy, better known as Dapper Lou. Delcy has traveled much of the African continent documenting indigenous cultures and people. His vibrant visual style, and willingness to dive deep into the exploration of each city has allowed him to make a name for himself as a visual documentarian. Delcy uses his Haitian roots and love of travel as drivers for his creative output and urge to discover and amplify stories that we don't often hear.",
  image: "https://i.ibb.co/sbf9jRM/Lou-Drapper.webp",
  imageDescription:
    "At first I didn't have the mainland as my main goal, but an opportunity arose. My first project in Africa was in Kenya, in a non-profit collaboration. I documented the situation of pregnant women in the country. The idea was to put the spotlight on these women, some of whom suffer and die during childbirth. But it was not only photographing them as victims, but also as heroines, women who fight and raise their children. It was the first time I set foot on the continent and that made me very interested in the cultural diversity in these countries..",
  name: "Dapper Lou",
  price: 60000,
  title: "Boys who swim",
  year: 2019,
};

export const basquiatPaintingMockModified: PaintingStructure = {
  _id: "6564d129ab6e912be5400b1f",
  image: "https://i.ibb.co/VmNHd2K/sugar-ray-robinson-1.webp",
  name: "Jean Michel Basquiat",
  price: 10000000,
  title: "Sugar Ray Robinson",
  year: 1982,
  authorInfo:
    "Jean-Michel Basquiat is considered to be one of the most influential African-American artists of the late twentieth century.",
  imageDescription:
    "Sugar Ray Robinson is one of the true icons from the sport of boxing and can be considered one of the heroes of a young Jean-Michel Basquiat.",
};

export const modifiedPaintingsMock = [
  basquiatPaintingMockModified,
  louPaintingMock,
  jamelPaintingMock,
  asifPaintingMock,
];

export const addedPaintingMockToModify = [
  basquiatPaintingMock,
  louPaintingMock,
  jamelPaintingMock,
  asifPaintingMock,
];
