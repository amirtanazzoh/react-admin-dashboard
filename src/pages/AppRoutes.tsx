import { Route, Routes } from "react-router";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { urls } from "../helpers/urls";
import ProtectedRoute from "../components/protected-route";

export default function AppRoutes ()
{
    return (
        <Routes>
            <Route path={ urls.login } element={ <Login /> } />
            <Route path={ urls.dashboard } element={
                <ProtectedRoute role="admin" >
                    <Dashboard />
                </ProtectedRoute>
            } >
                <Route path={ 'forbidden' } element={ <div>forbidden</div> } />
            </Route>
        </Routes>
    );
}