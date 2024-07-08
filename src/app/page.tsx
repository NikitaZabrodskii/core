import Image from "next/image";
import styles from "./page.module.css";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>Button</Button>
    </main>
  );
}
