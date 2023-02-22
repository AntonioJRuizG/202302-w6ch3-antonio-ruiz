import { Actions } from "../../../features/phone/components/actions/actions";
import { Display } from "../../../features/phone/components/display/display";
import { Info } from "../../../features/phone/components/info/info";
import { Keyboard } from "../../../features/phone/components/keyboard/keyboard";

function App() {
  return (
    <div className="container">
      <Info></Info>
      <main className="phone">
        <div className="keyboard-container">
          <ol className="keyboard">
            <Keyboard></Keyboard>
          </ol>
        </div>
        <div className="actions">
          <Display></Display>
          <Actions></Actions>
        </div>
      </main>
    </div>
  );
}

export default App;
