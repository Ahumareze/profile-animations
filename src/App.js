import gsap from "gsap/all";
import NavigationButton from "./components/buttons/NavigationButton";
import Header from "./components/header/Header";
import ProfileCard from "./components/profileCard/ProfileCard";
import { useState } from "react";
import { PROFILES } from "./constants/profiles";

function App() {
  const [scrollPosition, setScrollposition] = useState(0);
  const [selectedCard, setSelectedCard] = useState()

  const handleSlider = (prev) => {
    let tl = gsap.timeline()

    const newposition  = prev ? scrollPosition + 400 : scrollPosition - 400
    

    tl.to('#scroll-container', {
      x: newposition,
      ease: 'power1.inOut'
    });

    setScrollposition(newposition)
  }

  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-blue-500 flex flex-col gap-10">
        <div className="flex-1 px-[50px] flex flex-col justify-end">
          <h1 className="text-6xl font-bold text-white">Avatars</h1>
        </div>
        <div className="flex items-center gap-5 w-full" id="scroll-container">
          {PROFILES.map((item, index) => (
            <ProfileCard
              key={index}
              image={item.image}
              index={index + 1}
            />
          ))}
        </div>
        <div className="flex-1 px-[50px]">
          <div className="flex items-center justify-end gap-5">
            <NavigationButton left={true} onClick={() => handleSlider(true)} />
            <NavigationButton onClick={() => handleSlider()} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
