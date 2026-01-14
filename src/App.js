import ScrollToTop from "./app/elements/scroll-to-top";
import RootLayout from "./layouts/root-layout";
import Loader from "./app/elements/loader";
import { useState } from "react";

function App() {

  const [isLoading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  return (
    <>
      { isLoading && <Loader /> }
      <ScrollToTop />
      <RootLayout />
    </>
  );
}

export default App;
