import "./style.scss";
import React, { useState } from "react";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(" ");
  const [flag, setFlag] = useState(" ");
  const [name, setName] = useState(" ");
  function openModal() {
    if (isModalOpen === " ") {
      setIsModalOpen(
        "Two youths who are engaged in self-development created this site. Their website is growing and growing. Hope everything works out for us!"
      );
      setFlag("noned");
      setName("about");
    }
  }
  function closeModal() {
    if (!(isModalOpen === " ")) {
      setIsModalOpen(" ");
      setFlag(" ");
      setName(" ");
    }
  }
  return (
    <div className="App">
      <div className="container">
        <h1 className="sup">Supers</h1>
        <p className="text-main">Reasons to visit our site:</p>
        <div className="list">
          <ul className="list animate">
            <li className="item item1">
              <p className="text-list">It is so beautifull and usefull!</p>
            </li>
            <li className="item item2">
              <p className="text-list">You can always get answer from us.</p>
            </li>
            <li className="item item3">
              <p className="text-list">So cool developers!</p>
            </li>
          </ul>
          <button className={`our-site open ${name}`} onClick={openModal}>
            About
          </button>
          <p className="text-supers">{isModalOpen}</p>
          <button
            className={`our-site  close none ${flag}`}
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
