import Error from "./assets/views/error.tsx";
import SetTimer from "./assets/setTimer/setTimer.tsx";
import App from "./App.tsx";
import DigitalTimer from "./assets/digitalTimer/digitalTimer.tsx";
import TimesUp from "./assets/timesUp/timesUp.tsx";
import Pause from "./assets/pause/pause.tsx";

import { createBrowserRouter } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/setTimer",
    element: <SetTimer />,
    errorElement: <Error />,
  },
  {
    path: "/digital",
    element: <DigitalTimer />,
    errorElement: <Error />,
  },
  {
    path: "/timesUp",
    element: <TimesUp />,
    errorElement: <Error />,
  },
  {
    path: "/pause",
    element: <Pause />,
    errorElement: <Error />,
  },
]);

export default router;
