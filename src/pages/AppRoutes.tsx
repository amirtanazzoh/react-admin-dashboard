import { Route, Routes } from "react-router";
import Login from "./Login";
import DashboardLayout from "./DashboardLayout";
import { namespace, urls } from "../helpers/urls";
import ProtectedRoute from "../components/protected-route";
import { Users } from "./Users";
import Dashboard from "./Dashboard";
import Lessons from "./Lessons";

export default function AppRoutes ()
{
    return (

        <Routes>
            <Route path={ urls.login } element={ <Login /> } />
            <Route path={ urls.dashboard } element={
                <ProtectedRoute permissionType="view_dashboard_layout" >
                    <DashboardLayout />
                </ProtectedRoute>
            } >
                <Route index element={ <Dashboard /> } />
                <Route path={ namespace.forbidden } element={ <div>forbidden</div> } />
                <Route path={ namespace.users } element={ <Users /> } />
                <Route path={ namespace.lessons } element={ <Lessons /> } />
            </Route>
        </Routes>
    );
}