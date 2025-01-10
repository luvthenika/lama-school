import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
    // Seed Admins
    // await prisma.admin.createMany({
    //     data: Array.from({ length: 3 }).map(() => ({
    //         username: faker.internet.username(),
    //         email: faker.internet.email(),
    //         password: faker.internet.password(),
    //     })),
    // });

    const subjectNames = [
        { name: "Mathematics", description: "Study of numbers and their operations" },
        { name: "Physics", description: "Study of matter, energy, and the fundamental forces" },
        { name: "Chemistry", description: "Study of substances and their reactions" },
        { name: "Biology", description: "Study of living organisms" },
        { name: "History", description: "Study of past events and societies" },
        { name: "Geography", description: "Study of Earth's landscapes, environments, and inhabitants" },
        { name: "Literature", description: "Study of written works, including prose, poetry, and drama" },
        { name: "Computer Science", description: "Study of computers, algorithms, and programming" },
        { name: "Economics", description: "Study of production, consumption, and distribution of goods" },
        { name: "Philosophy", description: "Study of fundamental questions about existence, knowledge, and ethics" },
        { name: "Art", description: "Study of visual, performing, and creative arts" },
        { name: "Music", description: "Study of sound, composition, and musical performance" },
        { name: "Physical Education", description: "Focus on physical fitness, sports, and healthy living" },
        { name: "Psychology", description: "Study of the human mind and behavior" },
        { name: "Sociology", description: "Study of society, social relationships, and culture" },
        { name: "Environmental Science", description: "Study of environmental systems and sustainability" },
        { name: "Languages", description: "Study of grammar, vocabulary, and culture of various languages" },
        { name: "Political Science", description: "Study of political systems, policies, and governance" },
        { name: "Astronomy", description: "Study of celestial objects and the universe" },
        { name: "Theater", description: "Study of acting, directing, and stage production" },
    ];
    // await prisma.subject.createMany({
    //     data: subjectNames, // Directly use the predefined array
    //   });
      const subjects = await prisma.subject.findMany();
    // await prisma.grade.createMany({
    //     data: Array.from({ length: 10 }).map((_, i) => ({
    //         level: i + 1,
    //     })),
    // });

    const grades = await prisma.grade.findMany();

    // Seed Teachers
//    await prisma.teacher.createMany({
//         data: Array.from({ length: 20 }).map(() => ({
//             id: faker.string.uuid(),
//             name: faker.person.fullName(),
//             email: faker.internet.email(),
//             password: faker.internet.password(),
//             subjectId: faker.helpers.arrayElement(subjects.map(subject => subject.id)), 
//         })),
//     });

    const teachers = await prisma.teacher.findMany();

    // await prisma.class.createMany({
    //     data: Array.from({ length: 50 }).map(() => ({
    //         name: faker.helpers.arrayElement(['AA', 'BB', 'CC', 'DD', 'EE', 'FF', 'GG', 'HH', 'II', 'JJ']),
    //         supervisorId: faker.helpers.arrayElement(teachers.map(teacher => teacher.id)),
    //         capacity: faker.number.int({ min: 10, max: 30 }), 
    //         gradeId: faker.helpers.arrayElement(grades.map(grade => grade.id)), 
    //     })),
    // });

    const classes = await prisma.class.findMany();
    
    // await prisma.parent.createMany({
    //     data: Array.from({ length: 20 }).map(() => ({
    //         id: faker.string.uuid(),
    //         firstName: faker.person.firstName(),
    //         lastName: faker.person.lastName(),
    //         username: faker.internet.username(),
    //         phone: faker.phone.number(),
    //         address: faker.location.street(),
    //         email: faker.internet.email(),
    //     })),
    // });
    const parents = await prisma.parent.findMany()


    //await prisma.student.createMany({
    //     data: Array.from({ length: 300 }).map(() => ({
    //         id: faker.string.uuid(),
    //         firstName: faker.person.firstName(),
    //         lastName: faker.person.lastName(),
    //         sex: faker.helpers.arrayElement(['MALE', 'FEMALE']),
    //         username: faker.internet.username(),
    //         phone: faker.phone.number(),
    //         address: faker.location.street(),
    //         email: faker.internet.email(),
    //         password: faker.internet.password(),
    //         classId: faker.helpers.arrayElement(classes.map(grade => grade.id)), // Assuming subject IDs 1-5
    //         parentId: faker.helpers.arrayElement(parents.map(parent => parent.id)),
    //         gradeId: faker.helpers.arrayElement(grades.map(grade => grade.id)),
    //     })),
    // });
    const students = await prisma.student.findMany();
    // Create Lessons
const lessons = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.lesson.create({
        data: {
          name: faker.lorem.word(),
          day: faker.helpers.arrayElement(['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSTDAY', 'FRIDAY']),
          startTime: faker.date.future(),
          endtime: faker.date.future(),
          classId: faker.helpers.arrayElement(classes.map((cl) => cl.id)),
          teacherId: faker.helpers.arrayElement(teachers.map((teacher) => teacher.id)),
        },
      })
    )
  );
  console.log(`${lessons.length} lessons created!`);
  
  const assignments = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.assignment.create({
        data: {
          startTime: faker.date.future(),
          endTime: faker.date.future(),
          lessonId: faker.helpers.arrayElement(lessons.map((lesson) => lesson.id)),
        },
      })
    )
  );
  console.log(`${assignments.length} assignments created!`);
  
  const exams = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.exam.create({
        data: {
          title: faker.lorem.words(3),
          startTime: faker.date.future(),
          endTime: faker.date.future(),
          lessonId: faker.helpers.arrayElement(lessons.map((lesson) => lesson.id)),
        },
      })
    )
  );
  console.log(`${exams.length} exams created!`);
  
  const attendance = await Promise.all(
    Array.from({ length: 300 }).map(() =>
      prisma.attendance.create({
        data: {
          date: faker.date.recent(),
          present: faker.datatype.boolean(),
          studentId: faker.helpers.arrayElement(students.map((student) => student.id)),
          lessonId: faker.helpers.arrayElement(lessons.map((lesson) => lesson.id)),
        },
      })
    )
  );

  const announcements = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.announcement.create({
        data: {
          title: faker.lorem.words(3),
          description: faker.lorem.sentence(),
          classId: faker.helpers.arrayElement(classes.map((cl) => cl.id)), // Associate with a random class
        },
      })
    )
  );
  const results = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.result.create({
        data: {
          score: faker.number.int({ min: 0, max: 100 }),
          assignmentId: faker.helpers.arrayElement(assignments.map((assignment) => assignment.id)), // Random assignment
          examId: faker.helpers.arrayElement(exams.map((exam) => exam.id)), // Random exam
          studentId: faker.helpers.arrayElement(students.map((student) => student.id)), // Random student
        },
      })
    )
  );
  const events = await Promise.all(
    Array.from({ length: 50 }).map(() =>
      prisma.event.create({
        data: {
          title: faker.lorem.words(3), // Generate a random title
          description: faker.lorem.sentence(), // Generate a random description
          startTime: faker.date.future(), // Generate a future start date
          endTime: faker.date.future(), // Generate a future end date
        },
      })
    )
  );
  console.log(`${results.length} results created!`);
  
  console.log(`${announcements.length} announcements created!`);
  
  console.log(`${attendance.length} attendance records created!`);
  

    console.log('Mock data seeded successfully!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
