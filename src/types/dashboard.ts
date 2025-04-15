export type DashboardStats = {
    userRoles: {
        admin: number;
        teacher: number;
        student: number;
    },
    courseEnrollmentCount: {
        courseId: number,
        title: string,
        enrolledStudents: number;
    }[],
    averageProgressByCourse: {
        courseId: number,
        title: string,
        averageProgress: number;
    }[];
};