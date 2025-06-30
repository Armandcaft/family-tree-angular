export interface FamilyMember {
  id: string;
  treeId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  maidenName?: string;
  nicknames?: string[];
  gender: Gender;
  birthDate?: Date;
  birthPlace?: string;
  deathDate?: Date;
  deathPlace?: string;
  isAlive: boolean;
  biography?: string;
  occupation?: string;
  education?: string;
  photos: Photo[];
  documents: Document[];
  relationships: Relationship[];
  personalLink?: string; // Unique link for member to edit their own info
  personalLinkExpiry?: Date;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
  UNKNOWN = 'unknown'
}

export interface Photo {
  id: string;
  url: string;
  caption?: string;
  uploadedAt: Date;
  uploadedBy: string;
  isPrimary: boolean;
}

export interface Document {
  id: string;
  name: string;
  type: DocumentType;
  url: string;
  description?: string;
  uploadedAt: Date;
  uploadedBy: string;
}

export enum DocumentType {
  BIRTH_CERTIFICATE = 'birth_certificate',
  DEATH_CERTIFICATE = 'death_certificate',
  MARRIAGE_CERTIFICATE = 'marriage_certificate',
  DIVORCE_DECREE = 'divorce_decree',
  PASSPORT = 'passport',
  ID_CARD = 'id_card',
  OTHER = 'other'
}

export interface Relationship {
  id: string;
  type: RelationshipType;
  relatedMemberId: string;
  startDate?: Date;
  endDate?: Date;
  notes?: string;
}

export enum RelationshipType {
  PARENT = 'parent',
  CHILD = 'child',
  SPOUSE = 'spouse',
  SIBLING = 'sibling',
  GRANDPARENT = 'grandparent',
  GRANDCHILD = 'grandchild',
  UNCLE_AUNT = 'uncle_aunt',
  NEPHEW_NIECE = 'nephew_niece',
  COUSIN = 'cousin',
  STEPPARENT = 'stepparent',
  STEPCHILD = 'stepchild',
  ADOPTIVE_PARENT = 'adoptive_parent',
  ADOPTIVE_CHILD = 'adoptive_child'
}