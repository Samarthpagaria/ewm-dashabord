import { Assignment } from '@/types';

/**
 * Initial 15 EWEM assignments extracted from Microsoft Teams coursework records.
 * - Exact titles preserved.
 * - Handed-in badges preserved accurately (14 with 'Handed in', 1 without badge).
 * - No fabricated dates, grades, marks, or content.
 */
export const assignments: Assignment[] = [
  {
    id: 'ewem-assign-01',
    title: 'Toxic Chemicals_Any 5',
    dateLabel: '24 July',
    category: 'Research / Technical Activity',
    status: 'Handed in',
    tags: ['Toxic Chemicals', 'Environmental Impact', 'Research'],
  },
  {
    id: 'ewem-assign-02',
    title: 'Assignment 3_Elemental Recovery Process Update',
    dateLabel: '28 July',
    category: 'E-Waste Recovery',
    status: 'Handed in',
    tags: ['Elemental Recovery', 'E-Waste', 'Process Engineering'],
  },
  {
    id: 'ewem-assign-03',
    title: 'Assignment 2_Submit the Class Activity_Map of e waste',
    dateLabel: '28 July',
    category: 'Mapping / Class Activity',
    status: 'Handed in',
    tags: ['E-Waste Mapping', 'Class Activity'],
  },
  {
    id: 'ewem-assign-04',
    title: 'Assignment Zero_Check AAP',
    dateLabel: '31 July',
    category: 'Assignment',
    status: 'Handed in',
    tags: ['Assignment Zero', 'AAP'],
  },
  {
    id: 'ewem-assign-05',
    title: 'Assignment 1_E waste Traker',
    dateLabel: '2 August',
    category: 'E-Waste Tracker Project',
    status: 'Handed in',
    tags: ['E-Waste Tracker', 'Project'],
  },
  {
    id: 'ewem-assign-06',
    title: 'E waste India Vs World Data Task_Class Activity',
    dateLabel: '4 August',
    category: 'Data Analysis',
    status: 'Handed in',
    tags: ['India vs World', 'Data Task', 'Comparative Analysis'],
  },
  {
    id: 'ewem-assign-07',
    title: 'Carbon Footprint Task_Excel activity Task',
    dateLabel: '11 August',
    category: 'Excel / Data Analysis',
    status: 'Handed in',
    tags: ['Carbon Footprint', 'Excel Activity', 'Sustainability'],
  },
  {
    id: 'ewem-assign-08',
    title: 'TE CMPN C PPT_State tracker submission Folder',
    dateLabel: '12 August',
    category: 'Presentation',
    status: 'Handed in',
    tags: ['PPT', 'State Tracker', 'Presentation'],
  },
  {
    id: 'ewem-assign-09',
    title: 'E Waste Recovery Process_Modification for Design Patent',
    dateLabel: '19 August',
    category: 'Innovation / Design Patent',
    status: 'Handed in',
    tags: ['Patent Design', 'Recovery Process', 'Innovation'],
  },
  {
    id: 'ewem-assign-10',
    title: 'Indian Companies Following E waste Rules_Comparative Study',
    dateLabel: '2 September',
    category: 'Rules / Comparative Study',
    status: 'Handed in',
    tags: ['Indian Regulations', 'Comparative Study', 'Compliance'],
  },
  {
    id: 'ewem-assign-11',
    title: 'Novel Idea_E waste_Pitch Deck Submit Folder_CMPN C',
    dateLabel: '6 September',
    category: 'Innovation / Pitch Deck',
    status: 'Handed in',
    tags: ['Novel Idea', 'Pitch Deck', 'CMPN C'],
  },
  {
    id: 'ewem-assign-12',
    title: 'Campaign For E Waste in Campus_Class Activity',
    dateLabel: '9 September',
    category: 'Awareness / Class Activity',
    status: 'Unspecified',
    tags: ['Campus Campaign', 'Awareness', 'Class Activity'],
  },
  {
    id: 'ewem-assign-13',
    title: 'LEED Certification of Green Buildings in India',
    dateLabel: '29 September',
    category: 'Sustainability / Research',
    status: 'Handed in',
    tags: ['LEED Certification', 'Green Buildings', 'Sustainability'],
  },
  {
    id: 'ewem-assign-14',
    title: 'Case Studies E waste',
    dateLabel: '4 October',
    category: 'Case Studies',
    status: 'Handed in',
    tags: ['Case Studies', 'E-Waste'],
  },
  {
    id: 'ewem-assign-15',
    title: 'IEEE paper submission_Students',
    dateLabel: '7 October',
    category: 'Research Paper',
    status: 'Handed in',
    tags: ['IEEE Paper', 'Research', 'Submission'],
  },
];

