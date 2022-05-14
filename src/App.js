import {ThemeProvider} from "../src/hooks/ThemeContext"
import UseContext from "./hooks/UseContext";
function App() {
  return (
    <div>
      <ThemeProvider>
        <UseContext/>
      </ThemeProvider>
    </div>
  );
}

export default App;
