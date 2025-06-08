import { BrowserRouter, Route, Routes } from 'react-router';
import Body from './Body';
import Login from './screens/Login';
import Profile from './screens/Profile';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Feed from './screens/Feed';
import Connections from './screens/Connections';
import Requests from './screens/Requests';

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Feed />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/connections" element={<Connections />} />
              <Route path="/requests" element={<Requests />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <h1 className="text-3xl font-bold underline">Hello World!!</h1> */}
      </Provider>
    </>
  );
}

export default App;
