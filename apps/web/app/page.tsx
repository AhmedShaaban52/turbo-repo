import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`, {
    cache: "no-store",
  });
  const text = await res.text(); // "Hello World!"
  return (
    <h1>Hello from Vercel! 🚀</h1>
  );
}
