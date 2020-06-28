import React, { useState } from "react";

const Hamburger = () => {
    const [state, setState] = useState({menuIsActive : false});

    const toggleMenuState = () => {
        setState({menuIsActive : !state.menuIsActive});
    };

    return (
            <div data-test='hamburger' onClick={toggleMenuState}>
                <div id='menu-items'>
                    {/*<a></a>*/}
                    {/*<a >About</a>*/}
                    {/*<a id="repo" href="https://github.com/chunyukuo88/Brothaus" target="_blank">Code</a>*/}
                    {/*<a id="columbus-weather"></a>*/}
                    {/*<a id="chinese">華語版本</a>*/}
                </div>
            </div>
    );
};

export default Hamburger;
