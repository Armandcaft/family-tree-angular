export interface FamilyTree {
  id: string;
  name: string;
  description?: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
  isPublic: boolean;
  memberCount: number;
  generationCount: number;
  collaborators: Collaborator[];
}

export interface Collaborator {
  userId: string;
  name: string;
  email: string;
  role: CollaboratorRole;
  permissions: Permission[];
  addedAt: Date;
}

export enum CollaboratorRole {
  VIEWER = 'viewer',
  EDITOR = 'editor',
  ADMIN = 'admin'
}

export enum Permission {
  VIEW_TREE = 'view_tree',
  EDIT_MEMBERS = 'edit_members',
  ADD_MEMBERS = 'add_members',
  DELETE_MEMBERS = 'delete_members',
  MANAGE_MEDIA = 'manage_media',
  EXPORT_DATA = 'export_data',
  MANAGE_COLLABORATORS = 'manage_collaborators'
}