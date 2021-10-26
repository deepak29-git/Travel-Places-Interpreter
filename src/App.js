import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🚣": "Person Rowing Boat",
  "🗾": "Map of Japan",
  "🚣": "deepak",
  "⛰️": "Mountain",
  "🌋": "Volcano",
  "🗻": "Mount Fuji",
  "🏕️": "Camping",
  "🏖️": "Beach with Umbrella",
  "🏜️": "Desert",
  "🏝️": "Desert Island",
  "🏞️": "National Park",
  "🏟️": "Stadium",
  "🏛️": "Classical Building",
  "🏗️": "Building Construction",
  " 🛖 ": "Hut",
  "🏘️": "Houses",
  "🏚️": "Derelict House",
  "🏠": "House",
  "🏡": "House with Garden",
  "🏢": "Office Building",
  "🏣": "Japanese Post Office",
  "🏤": "Post Office",
  "🏥": "Hospital",
  "🏦": "Bank",
  "🏨": "Hotel",
  "🏩": "Love Hotel",
  "🏪": "Convenience Store",
  "🏫": "School",
  "🏬": "Department Store",
  "🏭": "Factory",
  "🏯": "Japanese Castle",
  "🏰": "Castle",
  "💒": "Wedding",
  "🗼": "Tokyo Tower",
  "🗽": "Statue of Liberty",
  "⛪": "Church",
  "🕌": "Mosque",
  "🛕": "Hindu Temple",
  "🕍": "Synagogue",
  "⛩️": "Shinto Shrine",
  "🕋": "Kaaba",
  "⛲": "Fountain",
  " ⛺": "Tent",
  "🌁": "Foggy",
  "🌃": "Night with Stars",
  "🏙️": "Cityscape",
  "🌄": "Sunrise Over Mountains",
  "🌅": "Sunrise",
  "🌆": "Cityscape at Dusk",
  " 🌇": "Sunset",
  "🌉": "Bridge at Night",
  "🎠": "Carousel Horse",
  "🎡": "Ferris Wheel",
  "🎢": "Roller Coaster",
  "🚂": "Locomotive",
  "🚃": "Railway Car",
  " 🚄": "High-Speed Train",
  "🚅 ": "Bullet Train",
  "🚆 ": "Train",
  "🚇": "Metro",
  " 🚈": "Light Rail",
  "🚉 ": "Station",
  "🚊": "Tram",
  " 🚝": "Monorail",
  "🚞": "Mountain Railway",
  "🚋": "Tram Car",
  "🚌": "Bus",
  "🚍": "Oncoming Bus",
  "🚎": "Trolleybus",
  "🚐": "Minibus",
  "🚑": "Ambulance",
  "🚒 ": "Fire Engine",
  " 🚓": "Police Car",
  "🚔": "Oncoming Police Car",
  "🚕 ": "Taxi",
  "🚖": "Oncoming Taxi",
  "🚗": "Automobile",
  "🚘": "Oncoming Automobile",
  "🚙": "Sport Utility Vehicle",
  "🛻 ": "Pickup Truck",
  "🚚": "Delivery Truck",
  " 🚛": "Articulated Lorry",
  "🚜": "Tractor",
  "🏎️": "Racing Car",
  "🏍️": "Motorcycle",
  " 🛵": "Motor Scooter",
  "🛺": "Auto Rickshaw",
  "🚲": "Bicycle",
  " 🛴": "Kick Scooter",
  " 🚏": "Bus Stop",
  "🛣️": "Motorway",
  "🛤️": "Railway Track",
  " ⛽ ": "Fuel Pump",
  " 🚨 ": "Police Car Light",
  " 🚥 ": "Horizontal Traffic Light",
  "🚦 ": "Vertical Traffic Light",
  " 🚧": "Construction",
  " ⚓": "Anchor",
  " ⛵ ": "Sailboat",
  " 🚤 ": "Speedboat",
  "🛳️": "Passenger Ship",
  "⛴️": "Ferry",
  "🛥️": "Motor Boat",
  " 🚢": "Ship",
  "✈️": "Airplane",
  "🛩️": "Small Airplane",
  " 🛫 ": "Airplane Departure",
  " 🛬": "Airplane Arrival",
  " 🪂 ": "Parachute",
  " 💺": "Seat",
  " 🚁": "Helicopter",
  "🚟 ": "Suspension Railway",
  "🚠": "Mountain Cableway",
  "🚡": "Aerial Tramway",
  "🛰️": "Satellite",
  "🚀": "Rocket",
  "🛸": "Flying Saucer",
  "🪐": "Ringed Planet",
  "🌠": "Shooting Star",
  "🌌": "Milky Way",
  " ⛱️ ": "Umbrella on Ground",
  "🎆": "Fireworks",
  "🎇": "Sparkler",
  "🎑": "Moon Viewing Ceremony",
  "💴": "Yen Banknote",
  "💵": "Dollar Banknote",
  "💶": "Euro Banknote",
  "💷": "Pound Banknote",
  "🗿 ": "Moai",
  "🛂": "Passport Control",
  "🛃": "Customs",
  "🛄": "Baggage Claim",
  "🛅": "Left Luggage"
};
export default function App() {
  const [meaning, setMeaning] = useState("");
  var showEmoji = Object.keys(emojiDictionary);

  function ClickHandler(item) {
    var newMeaning = emojiDictionary[item];
    setMeaning(newMeaning);
  }

  function changeHandler(e) {
    var targetValue = e.target.value;
    var newMeaning = emojiDictionary[targetValue];

    if (newMeaning === undefined) {
      newMeaning = "It is not in the Dictionary";
    }
    setMeaning(newMeaning);
  }

  return (
    <div className="App">
      <h1>Travel & Places Interpreter</h1>
      <input
        onChange={changeHandler}
        placeholder="Put an emoji and show the meaning"
      ></input>
      <h4>Please click on emoji and show the meaning</h4>
      <h2 style={{ color: "blue", fontWeight: "bold" }}>{meaning}</h2>
      {showEmoji.map((item) => {
        return (
          <span
            key={item}
            style={{ padding: "0.7rem", fontSize: "2rem", cursor: "pointer" }}
            onClick={() => ClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
