import {student, StudentType} from "../02/02";

// debugger
export const sum = (a: number, b: number) => {
    return a + b;
}

// const result = sum( sum(1, 2) + sum(1, 3) );

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, City: string) => student.address.city.title === City;