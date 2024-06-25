import './App.css';
import HomePage from './Components/Cart/HomePage';
// import DateAndTime from './Components/DateAndTime';
// import Sports from './Components/Sports/Sports';
// import Timer from './Components/Timer';
// import ToDoApp from './Components/TODOAPP/ToDoApp';
// import WeatherApp from './Components/WeatherApp';
// import List from './Components/List';
// import Users from './Components/Users';
// import SynchApiCall from './Components/SynchApiCall';
// import NewQues from './Components/NewQues';
// import TrafficLights from './Components/TrafficLights/Trafficlights';
// import withTrafficLightCycle from './Components/TrafficLights/withTrafficLightCycle';
// import LoginForm from './Components/LoginForm/LoginForm'
// import SearchComponentThrottle from './Search/SearchComponentThrottle';
// import Search from './Search/Search';
// import ButtonClickThrottle from './Search/ButtonClickThrottle';
// import { ThemeProvider } from './Components/ToggleTheme/ThemeStateProvider';
// import ThemedButton from './Components/ToggleTheme/ThemeButton';

// const TrafficLightWithCycle = withTrafficLightCycle(TrafficLights);

import CounterButton from './Components/CounterContext/CounterButton';
import { CounterProvider } from './Components/CounterContext/CounterProvider';

function App() {
  return (
    <div className="App">
      {/* <List/> */}
      {/* <Users/> */}
      {/* <SynchApiCall/> */}
      {/* <WeatherApp/> */}
      {/* <ToDoApp/> */}
      {/* <NewQues/> */}
      {/* <Sports/>
      <Timer/>
      <DateAndTime/> */}
      {/* <TrafficLightWithCycle/> */}
      {/* <LoginForm/> */}
      {/* <Search/> */}
      {/* <SearchComponentThrottle/> */}
      {/* <ButtonClickThrottle/> */}
      {/* <ThemeProvider>
        <ThemedButton/>
        <CounterButton/>
      </ThemeProvider> */}
      {/* <CounterProvider>
        <h1>Counter</h1>
        <CounterButton/>
      </CounterProvider> */}
      <HomePage/>
    </div>
  );
}

export default App;
