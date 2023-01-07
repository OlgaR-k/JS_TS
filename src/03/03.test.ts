import {StudentType} from "../02/02";
import {addSkill, doesStudentLive, doesStudentLiveIn, makeStudentActive} from "./03";

let student: StudentType;


beforeEach( () => {
    student = {
        id: 1,
        'name': 'Olga',
        'age': 35,
        isActive: false,
        address: {
            streetTitle: 'Surganova',
            city: {
                title: 'Minsk',
                countryTitle: 'Belarus',
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'React'
            },
        ],
    }
});

test('new tech skill should be added to student', () => {
    let lengthArr = student.technologies.length;
    // expect(student.technologies.length).toBe(3);
    addSkill(student, 'JS');
    lengthArr++;
    let lastId = lengthArr - 1;
    expect(student.technologies.length).toBe(lengthArr);

    expect(student.technologies[lastId].title).toBe('JS');
    expect(student.technologies[lastId].id).toBeDefined();
});

test('student is active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);
    expect(student.isActive).toBe(true);
});

test('Does student live in city?', () => {
    let result1 = doesStudentLiveIn(student, 'Moscow');
    let result2 = doesStudentLiveIn(student, 'Minsk');

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})