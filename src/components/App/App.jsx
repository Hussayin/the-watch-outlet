import { BrowserRouter, Route, Routes } from "react-router-dom";
//* compos
import Enter from "./Enter";
import Tissot from "../watchs/Tissot";
import TissotDetails from "../watchDetails/TissotDetails";
import Longines from "../watchs/Longines";
import LonginesDetails from "../watchDetails/LonginesDetails";
// import ScrollToTop from "./AutoScroll";
import Frederique from "../watchs/Frederique";
import FrederiqueDetails from "../watchDetails/FrederiqueDetails";
import InstallPrompt from "./InstallModal";
import ScrollManager from "./ScrollManager";
import AllWatches from "../compos/AllWatches";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/AllWatches" element={<AllWatches />} />
          {/* Tissot */}
          <Route path="/tissot" element={<Tissot />} />
          <Route path="/tissot/:id" element={<TissotDetails />} />
          {/* Longines */}
          <Route path="/longines" element={<Longines />} />
          <Route path="/longines/:id" element={<LonginesDetails />} />
          {/* frederique */}
          <Route path="/frederique" element={<Frederique />} />
          <Route path="/frederique/:id" element={<FrederiqueDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
