import gsap from "gsap/all";
import NavigationButton from "./components/buttons/NavigationButton";
import Header from "./components/header/Header";
import ProfileCard from "./components/profileCard/ProfileCard";
import { useEffect, useState } from "react";
import { PROFILES } from "./constants/profiles";
import { IoArrowBack, IoClose } from "react-icons/io5";
import { IoArrowBackSharp, IoArrowForward } from "react-icons/io5";

function App() {
  const [scrollPosition, setScrollposition] = useState(0);
  const [selectedCard, setSelectedCard] = useState();
  const [isItemSelected, setIsItemSelected] = useState(false);
  const [showTitle, setShowTitle] = useState(true);

  useEffect(() => {
    console.log(selectedCard)
  }, [selectedCard])

  useEffect(() => {
    if(isItemSelected && !showTitle){
      handleTitleAnimations()
    }else{
      handleInitialAnimations()
    }
  }, [isItemSelected, showTitle])

  const handleSlider = (prev) => {
    let tl = gsap.timeline()

    const newposition  = prev ? scrollPosition + 400 : scrollPosition - 400
    

    tl.to('#scroll-container', {
      x: newposition,
      ease: 'power1.inOut'
    });

    setScrollposition(newposition)
  };

  const handleInitialAnimations = () => {
    let tl = gsap.timeline();
    let closeButtonTimeline = gsap.timeline();

    tl.to('#page-title-container', {
      height: 'auto',
    });

    tl.to('#page-title', {
      opacity: 1,
      y: 0
    });

    tl.to('#nav-buttons-bottom', {
      opacity: 1
    });

    closeButtonTimeline.to('#close-button', {
      opacity: 1,
      y: 0
    })
  }

  const handleTitleAnimations = () => {
    let tl = gsap.timeline();
    let closeButtonTimeline = gsap.timeline();

    tl.to('#profile-details-container', {
      height: 'auto',
    });

    tl.to('#profile-details', {
      opacity: 1,
      y: 0
    });

    closeButtonTimeline.to('#close-button', {
      opacity: 1,
    })
  };

  const handleSelect = (profileIndex) => {
    let tl = gsap.timeline();

    tl.to('#page-title', {
      opacity: 0,
      y: 50,
      onComplete: () => setShowTitle(false)
    });

    setSelectedCard(profileIndex);
    setIsItemSelected(true)
  }

  const handleClearSelected = () => {
    let tl = gsap.timeline();
    let closeButtonTimeline = gsap.timeline();

    tl.to('#profile-details', {
      opacity: 0,
      y: 50,
    });

    tl.to('#close-button', {
      opacity: 0,
      onComplete: () => {
        setShowTitle(true);
        setSelectedCard(0);
        setIsItemSelected(false)
      }
    })

    
  };

  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-blue-500 flex flex-col gap-10">
        <div className="flex-1 px-[50px] flex items-end">
          <div className="flex flex-col justify-end gap-2 flex-1">
            {!showTitle && (
              <>
                <div className="overflow-hidden" id="profile-details-container">
                  <h1 className="text-6xl font-bold text-white opacity-20 translate-y-[50px]" id="profile-details">{selectedCard && PROFILES[selectedCard - 1].title}</h1>
                </div>
                <div className="overflow-hidden" id="profile-details-container">
                  <h1 className="text-4xl font-bold text-white/85 opacity-20 translate-y-[50px]" id="profile-details">{selectedCard && PROFILES[selectedCard - 1].tag}</h1>
                </div>
              </>
            )}
            {showTitle &&
              <div className="overflow-hidden h-0" id="page-title-container">
                <h1 className="text-6xl font-bold text-white opacity-20 translate-y-[50px]" id="page-title">Avatars</h1>
              </div>
            }
          </div>
          {!showTitle &&
            <div className="overflow-hidden">
              <div id="close-button" className="opacity-0">
                <NavigationButton onClick={handleClearSelected}>
                  <IoClose />
                </NavigationButton>
              </div>
            </div>
          }
        </div>
        <div className="flex items-center gap-5 w-full" id="scroll-container">
          {PROFILES.map((item, index) => (
            <ProfileCard
              key={index}
              image={item.image}
              index={index + 1}
              handleClick={() => handleSelect(index + 1)}
              hide={(index + 1) !== selectedCard && isItemSelected}
            />
          ))}
        </div>
        <div className="flex-1 px-[50px]">
          {showTitle &&
            <div className="flex items-center justify-end gap-5 opacity-0" id="nav-buttons-bottom">
              <NavigationButton onClick={() => handleSlider(true)}>
                <IoArrowBack />
              </NavigationButton>
              <NavigationButton onClick={() => handleSlider()}>
                <IoArrowForward />
              </NavigationButton>
            </div>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
