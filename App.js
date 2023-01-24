import React, { Component, Fragment } from "react";
import TabNav from "./src/navigation/TabNav";

class App extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Fragment>
                <TabNav/>
            </Fragment>
        )
    }
}
export default App;