import { useState } from "react";
import Currentpage from "./components/Currentpage";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2";
import Page1 from "./components/Page1";

function App() {
  const [tabs, setTabs] = useState(1);
  const [page, setPage] = useState("UI/UX >");
  const [balance, setBalance] = useState(500);
  const [code, setCode] = useState("E D C H 5 4");

  const handletabs = (val) => {
    setTabs(val);
    setPage("UI/UX > Refer & Earn > Friends Referred");
  };

  return (
    <div className="App">
      <Navbar />
      <Currentpage page={page} setPage={setPage} setTabs={setTabs} />
      {tabs == 1 ? (
        <>
          <Page1 balance={balance} code={code} page={page} setPage={setPage} />
          <Info />
          <div
            className="ml-[45px] w-[168px] h-[24px] md:ml-[150px] mt-[30px] mb-[20px] md:ml-[187px] text-[#800080] font-medium text-base cursor-pointer"
            onClick={() => handletabs(2)}
          >
            Friends Who Enrolled
          </div>
          <div
            className="ml-[45px]  text-[#800080] md:ml-[187px]"
          >
            Terms & Conditions
          </div>
        </>
      ) : null}
      {tabs == 2 ? <Page2 balance={balance} code={code} setTabs={setTabs}/> : null}
    </div>
  );
}

export default App;
