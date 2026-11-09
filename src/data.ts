import { C } from './theme';

export const student = {
  name: 'Нұрлан Нұрсиітов',
  id: '2024-0137',
  faculty: 'Ақпараттық технологиялар',
  group: 'ИС-24-1',
  course: 2,
  gpa: 3.42,
  credits: 58,
};

export const schedule: Record<string, { time: string; subject: string; room: string; teacher: string }[]> = {
  Дс: [
    { time: '09:00', subject: 'Дискретті математика', room: '312', teacher: 'Серікбаева А.' },
    { time: '10:50', subject: 'Бағдарламалау негіздері', room: '205', teacher: 'Жұмабаев Д.' },
  ],
  Сс: [
    { time: '09:00', subject: 'Ағылшын тілі', room: '101', teacher: 'Смит Д.' },
    { time: '12:40', subject: 'Мәліметтер базасы', room: '208', teacher: 'Оразов Б.' },
  ],
  Ср: [{ time: '10:50', subject: 'Алгоритмдер', room: '310', teacher: 'Қасымов Е.' }],
  Бс: [
    { time: '09:00', subject: 'Дискретті математика', room: '312', teacher: 'Серікбаева А.' },
    { time: '12:40', subject: 'Қазақстан тарихы', room: '401', teacher: 'Мұратова Г.' },
  ],
  Жм: [{ time: '10:50', subject: 'Мәліметтер базасы', room: '208', teacher: 'Оразов Б.' }],
};

export const grades = [
  { subject: 'Дискретті математика', credits: 5, rk1: 88, rk2: 92, exam: 90 },
  { subject: 'Бағдарламалау негіздері', credits: 6, rk1: 95, rk2: 97, exam: 96 },
  { subject: 'Ағылшын тілі', credits: 3, rk1: 78, rk2: 81, exam: 0 },
  { subject: 'Мәліметтер базасы', credits: 5, rk1: 70, rk2: 74, exam: 0 },
  { subject: 'Қазақстан тарихы', credits: 3, rk1: 60, rk2: 58, exam: 0 },
];

export const notices = [
  { id: 1, title: 'Көктемгі емтихан кестесі жарияланды', date: '08.11.2026', text: 'Емтихан сессиясы 12 желтоқсанда басталады. Кестені деканаттан немесе осы бөлімнен қараңыз.', unread: true },
  { id: 2, title: 'Оқу ақысын төлеу мерзімі', date: '05.11.2026', text: 'Екінші семестрдің ақысын 20 қарашаға дейін төлеңіз.', unread: true },
  { id: 3, title: 'Кітапхана жұмыс уақыты өзгерді', date: '01.11.2026', text: 'Енді кітапхана күн сайын 08:00-ден 20:00-ге дейін ашық.', unread: false },
];

export const total = (g: { rk1: number; rk2: number; exam: number }) =>
  g.exam > 0 ? Math.round(g.rk1 * 0.3 + g.rk2 * 0.3 + g.exam * 0.4) : Math.round((g.rk1 + g.rk2) / 2);

export const gradeColor = (v: number) =>
  v >= 90 ? C.good : v >= 70 ? C.accent : v >= 60 ? C.gold : C.bad;