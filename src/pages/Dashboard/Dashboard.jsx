import React, { useEffect, useState } from "react";
import Navbar from "../../molecules/Navbar";
import Card from "../../molecules/Card";

const Dashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardData) => {
    setSelectedCard(cardData);
    setShowModal(true);
  };

  const askDocument = () => {
    alert("Solicitando documento");
    console.log("Solicitando documento");
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCard(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape" && showModal) {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showModal]);

  const cards = [
    {
      title: "Titulo 1",
      date: "17/10/2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet odio sed velit sagittis.",
      image: "/card-img.png",
    },
    {
      title: "Titulo 2",
      date: "18/10/2024",
      description:
        "Aliquam convallis molestie nibh, quis congue ligula gravida at. In sapien quam, iaculis tempor vehicula eget.",
      image: "/card-img.png",
    },
    {
      title: "Titulo 3",
      date: "19/10/2024",
      description:
        "El odio odio, fermentum nec nunc nec, ultricies ultricies nunc. Nullam nec nunc nec, ultricies ultricies nunc.",
      image: "/card-img.png",
    },
    {
      title: "Titulo 4",
      date: "20/10/2024",
      description:
        "El amor odio, fermentum nec nunc nec, ultricies ultricies nunc. Nullam nec nunc nec, ultricies ultricies nunc.",
      image: "/card-img.png",
    },
    {
      title: "Titulo 4",
      date: "20/10/2024",
      description:
        "El amor odio, fermentum nec nunc nec, ultricies ultricies nunc. Nullam nec nunc nec, ultricies ultricies nunc.",
      image: "/card-img.png",
    },
    {
      title: "Titulo 4",
      date: "20/10/2024",
      description:
        "El amor odio, fermentum nec nunc nec, ultricies ultricies nunc. Nullam nec nunc nec, ultricies ultricies nunc.",
      image: "/card-img.png",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-poppins bg-[#EFEFEF] h-fit pb-10 grid justify-items-center lg:grid-cols-3 pt-14">
        {cards.map((card, index) => (
          <Card key={index} data={card} onClick={() => handleCardClick(card)} />
        ))}
      </div>
      {showModal && selectedCard && (
        <div
          className="font-poppins fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-5 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="text-gray-500 hover:text-black float-right"
            >
              ✕
            </button>
            <img
              src={selectedCard.image}
              className="w-full rounded-2xl my-9 px-10"
              alt={selectedCard.title}
            />
            <h2 className="text-3xl font-bold mb-2 text-center">{selectedCard.title}</h2>
            <p className="text-lg font-light mb-4 text-center">{selectedCard.date}</p>
            <p className="text-lg text-justify mx-10">{selectedCard.description}</p>
            <div className="flex justify-center mb-4 mt-4">
              <button
                className="mt-5 bg-[#2c2c2c] px-8 py-4 rounded-xl hover:bg-[#1a1a1a] text-white text-base font-light"
                onClick={askDocument}
              >
                Solicitar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
