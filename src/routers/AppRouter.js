import { Routes, Route, BrowserRouter} from "react-router-dom";

import {PrivateRoute} from "../routers/PrivateRoute";
import { LoginScreen } from "../components/Login/LoginScreen";
import { DashBoardRoutes } from "./DashBoardRoutes";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            {/* <Route path="/login" element={<LoginScreen />} /> */}

            <Route path="/login" element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
            />

            <Route path="/*" element={
              <PrivateRoute>
                <DashBoardRoutes />
              </PrivateRoute>
              } 
             />

            {/* <Route path="/*" element={<DashBoardRoutes />} /> */}
        </Routes>
    </BrowserRouter>
    
  )
}
