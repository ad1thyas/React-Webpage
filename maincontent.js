import React from "react";
import "./maincontent.css";
import vivekananda from "./vivekananda.png";
function MainContent() {
  return (
    <div className="main-content">
      <img src={vivekananda} alt="Vivekananda" />
      <div className="main-text">
    <u><center><h1>Swami Vivekananda</h1></center></u>
          <p>
            <br/>
            Swami Vivekananda was one of India’s most influential spiritual leaders, philosophers, and social reformers. 
            Born as Narendranath Datta on January 12, 1863, in Kolkata, He was deeply inspired by the teachings of Sri Ramakrishna Paramahamsa, his spiritual guru.
        he was deeply inspired by the teachings of Sri Ramakrishna Paramahamsa, his spiritual guru.</p>
        <br/>
        <p>
 Born into an aristocratic Bengali Kayastha family in Calcutta (now Kolkata),Vivekananda showed an early inclination towards religion and spirituality. At the age of 18, he met Ramakrishna and became his devoted disciple, and later took up the vows of a sannyasin (renunciate).
 Following Ramakrishna’s death, Vivekananda travelled extensively across the Indian subcontinent as a wandering monk, gaining first-hand knowledge of the often harsh living conditions endured by the Indian masses under then British India, he sought a way to alleviate their suffering by establishing social services but lacked capital. 
        </p>
      </div>
    </div>
  );
}
export default MainContent;
