import "../styles/global.css";
import { Provider } from "@lyket/react";

export default function App({ Component, pageProps }) {
  const myTheme = {
    colors: {
      background: "white",
      text: "#292929",
      primary: "blue",
      secondary: "#ff00c3",
      accent: "#fcff4b",
      highlight: "#e095ed",
      muted: "#aaa"
    }
  };

  return (
    <Provider apiKey="4c3f1ace0bf6d5092adc4c52d61822" theme={myTheme}>
      <Component {...pageProps} />{" "}
    </Provider>
  );
}
