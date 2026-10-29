/**
 * Core type definitions for EWEM Dashboard academic resources and portfolio items.
 */

export type SubmissionStatus = 'Handed in' | 'Submitted' | 'Pending' | 'Completed' | 'Unspecified';

export type MappingConfidence = 'Confirmed' | 'Probable' | 'Unmatched';

export interface BaseAcademicResource {
  id: string;
  title: string;
  category: string;
  dateLabel?: string;
  description?: string;
  documentPath?: string;
  externalUrl?: string;
  tags?: string[];
}

export interface Assignment extends BaseAcademicResource {
  status?: SubmissionStatus;
}

export interface Experiment extends BaseAcademicResource {
  experimentNumber?: number;
  aim?: string;
  toolsUsed?: string[];
}

export interface StudyMaterial extends BaseAcademicResource {
  moduleNumber?: number;
  topic?: string;
  fileFormat?: 'pdf' | 'ppt' | 'docx' | 'xlsx' | 'other';
}

export interface Presentation extends BaseAcademicResource {
  slidesPath?: string;
  deliveredDate?: string;
}

export interface ResearchPaper extends BaseAcademicResource {
  publicationVenue?: string;
  authors?: string[];
  doi?: string;
}

export interface ProjectItem extends BaseAcademicResource {
  repositoryUrl?: string;
  liveUrl?: string;
  technologies?: string[];
  thumbnailPath?: string;
}

export interface ActivityItem extends BaseAcademicResource {
  activityType?: 'campaign' | 'workshop' | 'class-activity' | 'field-visit' | 'other';
  imageGallery?: string[];
}

export interface DeliverableFile {
  id: string;
  displayName: string;
  fileName: string;
  publicUrl: string;
  fileType: 'pdf' | 'docx' | 'xlsx' | 'pptx' | 'csv' | 'jpg' | 'png' | 'html' | 'other';
  sizeBytes?: number;
  confidence: MappingConfidence;
  originalRelativePath: string;
  notes?: string;
}

export interface CourseworkItem {
  id: string;
  title: string;
  category: string;
  dateLabel: string;
  chronologicalOrder: number;
  status?: SubmissionStatus;
  description?: string;
  deliverables: DeliverableFile[];
  tags: string[];
}

export interface UnmatchedFile {
  id: string;
  displayName: string;
  fileName: string;
  publicUrl: string;
  fileType: 'docx' | 'pdf' | 'xlsx' | 'pptx' | 'csv' | 'other';
  sizeBytes: number;
  originalRelativePath: string;
  reason: string;
}
