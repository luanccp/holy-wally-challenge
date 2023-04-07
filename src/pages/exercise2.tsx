import Head from "next/head";

import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import BackToHomeButton from "@/components/BackButton";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Exercise2() {
  const [count, setCount] = useState(0);
  // initially with 1 because of the select
  const [selectedValue, setSelectedValue] = useState(1);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + selectedValue);
  }, [selectedValue]);

  const handleDecrement = useCallback(() => {
    setCount((prev) => {
      const result = prev - selectedValue;
      if (result >= 0) {
        return result;
      }
      return 0;
    });
  }, [selectedValue]);

  return (
    <>
      <Head>
        <title>Exercise 2</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <BackToHomeButton />
        <h2 className={inter.className}>Exercise 2</h2>

        <div>
          <h4 className={inter.className}>Counter: {count}</h4>
          <button className={inter.className} onClick={handleIncrement}>
            Increment
          </button>
          <button className={inter.className} onClick={handleDecrement}>
            Decrement
          </button>
          <select
            className={inter.className}
            onChange={(e) => setSelectedValue(Number(e.target.value))}
          >
            <option selected value="1">
              1
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
          </select>
        </div>
      </main>
    </>
  );
}
