import {useState, useCallback, useMemo} from 'react';
import './App.css';
import ReactLogo from "./components/ReactLogo";
import ViteLogo from "./components/ViteLogo";
import TinyLogo from "./components/TinyLogo";
import ClassicEditor from "./components/ClassicEditor";
import InlinesEditors from "./components/InlinesEditors";
function App() {
  const [inline, setInline] = useState(false);

  const onSwitchChange = useCallback((val: boolean) => {
      setInline(val)
  },[]);

    return (
    <div className="App">

        <div className="engage-toolbar d-flex position-fixed px-5 fw-bolder zindex-2 top-50 end-0 transform-90 mt-20 gap-2">
            <button id="classic_toggle"
                onClick={() => onSwitchChange(false)}
                className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0"
                title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click"
                data-bs-trigger="hover" data-bs-original-title="Check out 22 more demos">
                <span id="kt_engage_demos_label">Classic</span>
            </button>
            <button id="inline_toggle"
                onClick={() => onSwitchChange(true)}
                className="engage-demos-toggle btn btn-flex h-35px bg-body btn-color-gray-700 btn-active-color-gray-900 shadow-sm fs-6 px-4 rounded-top-0"
                title="" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click"
                data-bs-trigger="hover" data-bs-original-title="Check out 22 more demos">
                <span id="kt_engage_demos_label">Inline</span>
            </button>
        </div>

        <div className="wrapper-content">
            {inline ? <InlinesEditors /> : <ClassicEditor />}
        </div>

        <div className="footer">
            <ViteLogo />
            <ReactLogo />
            <TinyLogo />
        </div>
    </div>
  )
}

export default App;
