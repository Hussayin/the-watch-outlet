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
import Maurice from "../watchs/Maurice";
import MauriceDetails from "../watchDetails/MauriceDetails";
import Skupka from "../skupka/skupka";
import Send from "../skupka/Send";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <HelmetProvider> */}
        <ScrollManager />
        <InstallPrompt />
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Enter />} />
          <Route path="/AllWatches" element={<AllWatches />} />
          {/* skupka */}
          <Route path="/skupka" element={<Skupka />} />
          <Route path="/send" element={<Send />} />
          {/* Tissot */}
          <Route path="/tissot" element={<Tissot />} />
          <Route path="/tissot/:id" element={<TissotDetails />} />
          {/* Longines */}
          <Route path="/longines" element={<Longines />} />
          <Route path="/longines/:id" element={<LonginesDetails />} />
          {/* frederique */}
          <Route path="/frederique" element={<Frederique />} />
          <Route path="/frederique/:id" element={<FrederiqueDetails />} />
          {/* Maurice */}
          <Route path="/maurice" element={<Maurice />} />
          <Route path="/maurice/:id" element={<MauriceDetails />} />
        </Routes>
        {/* </HelmetProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
