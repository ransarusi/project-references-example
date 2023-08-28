import React from "react";
import ReactDOM from "react-dom";

import { showMessage } from "../../shared";
import { SharedComponent } from "../../shared/src/components/SharedComponent";
class App extends React.Component {
	render() {
		return <div>
			{showMessage()}
			<SharedComponent text="Frontend2" />
		</div>;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));