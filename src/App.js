import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "đŖ": "Person Rowing Boat",
  "đž": "Map of Japan",
  "â°ī¸": "Mountain",
  "đ": "Volcano",
  "đģ": "Mount Fuji",
  "đī¸": "Camping",
  "đī¸": "Beach with Umbrella",
  "đī¸": "Desert",
  "đī¸": "Desert Island",
  "đī¸": "National Park",
  "đī¸": "Stadium",
  "đī¸": "Classical Building",
  "đī¸": "Building Construction",
  " đ ": "Hut",
  "đī¸": "Houses",
  "đī¸": "Derelict House",
  "đ ": "House",
  "đĄ": "House with Garden",
  "đĸ": "Office Building",
  "đŖ": "Japanese Post Office",
  "đ¤": "Post Office",
  "đĨ": "Hospital",
  "đĻ": "Bank",
  "đ¨": "Hotel",
  "đŠ": "Love Hotel",
  "đĒ": "Convenience Store",
  "đĢ": "School",
  "đŦ": "Department Store",
  "đ­": "Factory",
  "đ¯": "Japanese Castle",
  "đ°": "Castle",
  "đ": "Wedding",
  "đŧ": "Tokyo Tower",
  "đŊ": "Statue of Liberty",
  "âĒ": "Church",
  "đ": "Mosque",
  "đ": "Hindu Temple",
  "đ": "Synagogue",
  "âŠī¸": "Shinto Shrine",
  "đ": "Kaaba",
  "â˛": "Fountain",
  " âē": "Tent",
  "đ": "Foggy",
  "đ": "Night with Stars",
  "đī¸": "Cityscape",
  "đ": "Sunrise Over Mountains",
  "đ": "Sunrise",
  "đ": "Cityscape at Dusk",
  " đ": "Sunset",
  "đ": "Bridge at Night",
  "đ ": "Carousel Horse",
  "đĄ": "Ferris Wheel",
  "đĸ": "Roller Coaster",
  "đ": "Locomotive",
  "đ": "Railway Car",
  " đ": "High-Speed Train",
  "đ ": "Bullet Train",
  "đ ": "Train",
  "đ": "Metro",
  " đ": "Light Rail",
  "đ ": "Station",
  "đ": "Tram",
  " đ": "Monorail",
  "đ": "Mountain Railway",
  "đ": "Tram Car",
  "đ": "Bus",
  "đ": "Oncoming Bus",
  "đ": "Trolleybus",
  "đ": "Minibus",
  "đ": "Ambulance",
  "đ ": "Fire Engine",
  " đ": "Police Car",
  "đ": "Oncoming Police Car",
  "đ ": "Taxi",
  "đ": "Oncoming Taxi",
  "đ": "Automobile",
  "đ": "Oncoming Automobile",
  "đ": "Sport Utility Vehicle",
  "đģ ": "Pickup Truck",
  "đ": "Delivery Truck",
  " đ": "Articulated Lorry",
  "đ": "Tractor",
  "đī¸": "Racing Car",
  "đī¸": "Motorcycle",
  " đĩ": "Motor Scooter",
  "đē": "Auto Rickshaw",
  "đ˛": "Bicycle",
  " đ´": "Kick Scooter",
  " đ": "Bus Stop",
  "đŖī¸": "Motorway",
  "đ¤ī¸": "Railway Track",
  " âŊ ": "Fuel Pump",
  " đ¨ ": "Police Car Light",
  " đĨ ": "Horizontal Traffic Light",
  "đĻ ": "Vertical Traffic Light",
  " đ§": "Construction",
  " â": "Anchor",
  " âĩ ": "Sailboat",
  " đ¤ ": "Speedboat",
  "đŗī¸": "Passenger Ship",
  "â´ī¸": "Ferry",
  "đĨī¸": "Motor Boat",
  " đĸ": "Ship",
  "âī¸": "Airplane",
  "đŠī¸": "Small Airplane",
  " đĢ ": "Airplane Departure",
  " đŦ": "Airplane Arrival",
  " đĒ ": "Parachute",
  " đē": "Seat",
  " đ": "Helicopter",
  "đ ": "Suspension Railway",
  "đ ": "Mountain Cableway",
  "đĄ": "Aerial Tramway",
  "đ°ī¸": "Satellite",
  "đ": "Rocket",
  "đ¸": "Flying Saucer",
  "đĒ": "Ringed Planet",
  "đ ": "Shooting Star",
  "đ": "Milky Way",
  " âąī¸ ": "Umbrella on Ground",
  "đ": "Fireworks",
  "đ": "Sparkler",
  "đ": "Moon Viewing Ceremony",
  "đ´": "Yen Banknote",
  "đĩ": "Dollar Banknote",
  "đļ": "Euro Banknote",
  "đˇ": "Pound Banknote",
  "đŋ ": "Moai",
  "đ": "Passport Control",
  "đ": "Customs",
  "đ": "Baggage Claim",
  "đ": "Left Luggage"
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
      {showEmoji.map((item, index) => {
        return (
          <span
            key={index}
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
