import { Course } from "../types/courses";
import { GeneralResponseWithPagination } from "../types/general";
import { appAxios } from "./main";

export async function getCourses (): Promise<GeneralResponseWithPagination<Course>>
{
    return await appAxios.get( '/courses' );
}