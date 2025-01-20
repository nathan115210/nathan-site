import styles from "./page.module.scss";

const NeumorphicInputBox = () => {
  const strItems = "My Name Is Zhao Hongyu".split(" ");
  return (
    <div className={`${styles.container} w-screen h-screen mt-40 text-black`}>
      <h2 className="heading pt-10 mb-10">Blinking Neon Text</h2>
      <div className={styles.box}>
        <div className={styles.title}>
          {strItems.map((item, index) => {
            return <span key={index}>{item}</span>;
          })}
        </div>
        <div className={styles.info}>
          <span>have fun here</span>
        </div>
      </div>
    </div>
  );
};

export default NeumorphicInputBox;
