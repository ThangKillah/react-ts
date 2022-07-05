import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
  updateStudent: () => void;
}

export function StudentCard({ student, updateStudent }: StudentCardProps) {
  return <div onClick={updateStudent}>{student.name}</div>;
}
