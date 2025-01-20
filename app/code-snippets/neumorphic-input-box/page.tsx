import styles from "./page.module.scss";

const NeumorphicInputBox = () => {
  return (
    <div className={`${styles.container} w-screen h-screen mt-40 text-black`}>
      <h2 className="heading pt-10 mb-10">Neumorphic Input Box</h2>
      <input type="text" className={styles.input} placeholder="Enter text" />
    </div>
  );
};

export default NeumorphicInputBox;
