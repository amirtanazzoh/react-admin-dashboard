// generateDb.js
import { faker } from '@faker-js/faker';
import fs from 'fs';

const db = {
  users: [],
  courses: [],
  lessons: [],
  enrollments: [],
  progress: [],
  dashboardStats: {},
};

// USERS
const roles = ['admin', 'teacher', 'student'];
for (let i = 1; i <= 30; i++) {
  const role = i === 1 ? 'admin' : i <= 6 ? 'teacher' : 'student';
  db.users.push({
    id: i,
    name: faker.person.fullName(),
    email: faker.internet.email(),
    role,
  });
}

// COURSES
for (let i = 1; i <= 5; i++) {
  const teacher = db.users.find((u) => u.role === 'teacher' && u.id === i + 1);
  db.courses.push({
    id: i,
    title: faker.company.catchPhrase(),
    description: faker.lorem.sentence(),
    instructorId: teacher?.id ?? 2,
  });

  // LESSONS
  for (let j = 1; j <= 5; j++) {
    db.lessons.push({
      id: (i - 1) * 5 + j,
      courseId: i,
      title: `Lesson ${j} of Course ${i}`,
      content: faker.lorem.paragraph(),
    });
  }
}

// ENROLLMENTS & PROGRESS
let enrollmentId = 1;
const studentUsers = db.users.filter((u) => u.role === 'student');

studentUsers.forEach((student) => {
  const numCourses = faker.number.int({ min: 1, max: 3 });
  const enrolledCourses = faker.helpers.shuffle(db.courses).slice(0, numCourses);

  enrolledCourses.forEach((course) => {
    db.enrollments.push({
      id: enrollmentId++,
      userId: student.id,
      courseId: course.id,
    });

    const lessons = db.lessons.filter((l) => l.courseId === course.id);
    const completed = faker.number.int({ min: 0, max: lessons.length });

    db.progress.push({
      id: enrollmentId + 1000,
      userId: student.id,
      courseId: course.id,
      completedLessons: completed,
      totalLessons: lessons.length,
    });
  });
});

// DASHBOARD STATS
const roleCount = {
  admin: db.users.filter((u) => u.role === 'admin').length,
  teacher: db.users.filter((u) => u.role === 'teacher').length,
  student: db.users.filter((u) => u.role === 'student').length,
};

const courseEnrollmentCount = db.courses.map((course) => {
  const count = db.enrollments.filter((e) => e.courseId === course.id).length;
  return {
    courseId: course.id,
    title: course.title,
    enrolledStudents: count,
  };
});

const avgProgress = db.courses.map((course) => {
  const progresses = db.progress.filter((p) => p.courseId === course.id);
  const avg =
    progresses.reduce((acc, p) => acc + (p.completedLessons / p.totalLessons), 0) /
    (progresses.length || 1);
  return {
    courseId: course.id,
    title: course.title,
    averageProgress: parseFloat(avg.toFixed(2)),
  };
});

db.dashboardStats = {
  userRoles: roleCount,
  courseEnrollmentCount,
  averageProgressByCourse: avgProgress,
};

// Write to file
fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
  if (err) {
    console.error('❌ Error writing db.json:', err);
  } else {
    console.log('✅ db.json created successfully');
  }
});
