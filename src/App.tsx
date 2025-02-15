import './App.css'
import {Outlet} from "react-router";

function App() {

  return (
    <>
      <div className="App pb-[100px]">
        {/*<nav>*/}
        {/*  <Link to="/" style={{ marginRight: '15px' }}>首页</Link>*/}
        {/*  <Link to="/detail/adbcd" style={{ marginRight: '15px' }}>分析</Link>*/}
        {/*</nav>*/}

        <Outlet />
      </div>

    </>
  )
}

export default App
