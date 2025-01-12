"use client";

import styles from "./page.module.scss";

const Page = () => {
  return (
    <div
      className={
        "w-screen h-screen mt-40 bg-slate-50 text-black flex flex-col items-center"
      }
    >
      <h2 className="heading pt-10 mb-10">Cool Hover Effects</h2>

      <div className={styles.card}>Hover Me</div>
    </div>
  );
};

export default Page;
