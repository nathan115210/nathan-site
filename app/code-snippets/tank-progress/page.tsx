"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

const Page = () => {
  const [value, setValue] = useState<string>("0");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const slider: HTMLInputElement | null = inputRef.current;
  const wave: HTMLDivElement | null = waveRef.current;

  useEffect(() => {
    if (slider) {
      const handleInput = () => {
        setValue(slider.value);
      };
      slider.addEventListener("input", handleInput);
      return () => {
        slider.removeEventListener("input", handleInput);
      };
    }
  }, []);

  useEffect(() => {
    if (wave) {
      wave.style.top = `${200 - parseInt(value) * 2}px`;
    }
  }, [value]);

  const handleInputOnChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  return (
    <div className={"w-screen h-screen mt-40 bg-slate-50 text-black"}>
      <h2 className="heading pt-10 mb-10">Tank progress bar</h2>

      <div className={`p-6 ${styles.slidecontainer}`}>
        <div className={styles.percentContainer}>
          <div className={styles.percent}>
            <span>{value}</span>
          </div>
          <div className={styles.wave} ref={waveRef}></div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={value}
          className={styles.slider}
          ref={inputRef}
          onChange={(e) => handleInputOnChange(e)}
        />
      </div>
    </div>
  );
};

export default Page;
