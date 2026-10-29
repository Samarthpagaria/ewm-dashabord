import { BaseAcademicResource } from '@/types';
import { assignments } from './assignments';
import { experiments } from './experiments';
import { presentations } from './presentations';
import { projects } from './projects';
import { researchPapers } from './researchPapers';
import { studyMaterials } from './studyMaterials';
import { activities } from './activities';

export type CategoryId =
  | 'assignments'
  | 'experiments'
  | 'presentations'
  | 'projects'
  | 'research-papers'
  | 'study-materials'
  | 'activities'
  | 'reports';

export interface CategoryMeta {
  id: CategoryId;
  name: string;
  folderTitle: string;
  countLabel: string;
  subLabel: string;
  description: string;
  notesPreview: string[];
  subcategories: string[];
}

export const EWEM_CATEGORIES: CategoryMeta[] = [
  {
    id: 'assignments',
    name: 'Assignments',
    folderTitle: 'Coursework tasks',
    countLabel: `${assignments.length} assignments`,
    subLabel: '14 handed in',
    description: 'All 15 Microsoft Teams coursework assignments, class tasks, and problem sets.',
    notesPreview: ['E-waste lifecycle', 'Teams submissions'],
    subcategories: [
      'All Assignments',
      'Research / Technical Activity',
      'E-Waste Recovery',
      'Mapping / Class Activity',
      'Data Analysis',
      'Presentation',
      'Innovation / Design Patent',
      'Rules / Comparative Study',
      'Sustainability / Research',
      'Case Studies',
      'Research Paper',
    ],
  },
  {
    id: 'experiments',
    name: 'Experiments & Labs',
    folderTitle: 'Lab experiments',
    countLabel: `${experiments.length} practicals`,
    subLabel: experiments.length > 0 ? 'Verified records' : 'Pending uploads',
    description: 'Laboratory experiments, elemental recovery characterization, and practical procedures.',
    notesPreview: ['Chemical recovery', 'Elemental logs'],
    subcategories: ['All Practicals', 'Elemental Recovery', 'Chemical Extraction'],
  },
  {
    id: 'presentations',
    name: 'Presentations',
    folderTitle: 'Slide decks & PPTs',
    countLabel: `${presentations.length} decks`,
    subLabel: presentations.length > 0 ? 'Verified slides' : 'Pending uploads',
    description: 'Seminar slides, pitch decks, state tracker presentations, and topic walkthroughs.',
    notesPreview: ['State tracker PPT', 'Pitch deck CMPN'],
    subcategories: ['All Decks', 'Pitch Decks', 'State Trackers'],
  },
  {
    id: 'projects',
    name: 'Projects',
    folderTitle: 'Prototypes & Models',
    countLabel: `${projects.length} projects`,
    subLabel: projects.length > 0 ? 'Working models' : 'Pending uploads',
    description: 'Design patents, e-waste tracker implementations, and functional prototypes.',
    notesPreview: ['E-Waste tracker', 'Design patent model'],
    subcategories: ['All Projects', 'Trackers', 'Patents'],
  },
  {
    id: 'research-papers',
    name: 'Research Papers',
    folderTitle: 'IEEE & Publications',
    countLabel: `${researchPapers.length} papers`,
    subLabel: researchPapers.length > 0 ? 'Published' : 'Pending uploads',
    description: 'Student research papers, IEEE conference submissions, and literature reviews.',
    notesPreview: ['IEEE paper submission', 'Student literature'],
    subcategories: ['All Papers', 'IEEE Submissions', 'Literature Reviews'],
  },
  {
    id: 'study-materials',
    name: 'Study Materials',
    folderTitle: 'Modules & Notes',
    countLabel: `${studyMaterials.length} modules`,
    subLabel: studyMaterials.length > 0 ? 'Lecture references' : 'Pending uploads',
    description: 'Course module notes, regulatory guidelines, e-waste rules, and reference literature.',
    notesPreview: ['CPCB guidelines', 'E-waste rules 2022'],
    subcategories: ['All Modules', 'CPCB Guidelines', 'Lecture Notes'],
  },
  {
    id: 'activities',
    name: 'Activities',
    folderTitle: 'Campus drives',
    countLabel: `${activities.length} activities`,
    subLabel: activities.length > 0 ? 'Drive records' : 'Pending uploads',
    description: 'Campus e-waste collection campaigns, awareness drives, and interactive workshops.',
    notesPreview: ['Campus drive report', 'Awareness campaign'],
    subcategories: ['All Drives', 'Awareness', 'Collection Drives'],
  },
];

/**
 * Returns raw data items for a category id.
 */
export function getCategoryItems(catId: CategoryId): BaseAcademicResource[] {
  switch (catId) {
    case 'assignments':
      return assignments;
    case 'experiments':
      return experiments;
    case 'presentations':
      return presentations;
    case 'projects':
      return projects;
    case 'research-papers':
      return researchPapers;
    case 'study-materials':
      return studyMaterials;
    case 'activities':
      return activities;
    case 'reports':
    default:
      return [];
  }
}
