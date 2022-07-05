import { Student } from '@/models';
import * as React from 'react';

export interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  return <div>{student.name}</div>;
}
