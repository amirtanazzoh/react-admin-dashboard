import { AxiosResponse } from "axios";
import { appAxios } from "./main";
import { DashboardStats } from "../types/dashboard";

export async function getDashboard (): Promise<AxiosResponse<DashboardStats>>
{
    return await appAxios.get( '/dashboardStats' );
}