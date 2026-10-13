export type AccessType = 'friends' | 'family' | null;

export interface TimelineEvent {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  iconName: 'heart' | 'glass' | 'utensils' | 'music' | 'bus' | 'camera';
  badge?: string;
  dayLabel?: string;
}

export interface MenuItem {
  category: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface UploadedMemory {
  id: string;
  url: string;
  name: string;
  timestamp: string;
  caption?: string;
}

export interface RsvpData {
  fullName: string;
  attendance: 'yes' | 'no';
  guestsCount: number;
  companionName?: string;
  fridayDinnerAttendance?: 'yes' | 'no';
  allergies: string[];
  allergiesOther?: string;
  dietPreference?: string;
  favoriteSong?: string;
  message?: string;
  accessCodeUsed?: string;
  submittedAt?: string;
}
