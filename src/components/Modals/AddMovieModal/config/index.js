import { object, string, date, number, mixed } from 'yup';

const validateDate = (val) => {
  return val < new Date();
};
export const validationSchema = object({
  title: string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  release_date: date().test('date', 'not real date', validateDate),
  poster_path: string().min(2, 'Too Short!').required('Required'),
  runtime: number().min(2, 'Too Short!').max(250, 'Too Long!').required('Required'),
  overview: string().min(5, 'Too Short!').required('Required'),
  genres: mixed().required('Required'),
});
