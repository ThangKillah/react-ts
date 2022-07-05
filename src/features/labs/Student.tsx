import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
  updateStudent: (student: Student) => void;
}

export function StudentCard({ student, updateStudent }: StudentCardProps) {
  return <div onClick={() => updateStudent(student)}>{student.name}</div>;
}
