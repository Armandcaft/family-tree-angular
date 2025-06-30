import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FamilyTree } from '../models/family-tree.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyTreeService {
  private mockTrees: FamilyTree[] = [
    {
      id: '1',
      name: 'Martin Family',
      description: 'The Martin family genealogy tree',
      ownerId: 'user1',
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-12-30'),
      isPublic: false,
      memberCount: 6,
      generationCount: 3,
      collaborators: []
    }
  ];

  getFamilyTrees(): Observable<FamilyTree[]> {
    return of(this.mockTrees);
  }

  getFamilyTree(id: string): Observable<FamilyTree | undefined> {
    const tree = this.mockTrees.find(t => t.id === id);
    return of(tree);
  }

  createFamilyTree(tree: Partial<FamilyTree>): Observable<FamilyTree> {
    const newTree: FamilyTree = {
      id: Math.random().toString(36).substr(2, 9),
      name: tree.name || 'New Family Tree',
      description: tree.description,
      ownerId: 'user1', // Mock user ID
      createdAt: new Date(),
      updatedAt: new Date(),
      isPublic: false,
      memberCount: 0,
      generationCount: 0,
      collaborators: []
    };
    
    this.mockTrees.push(newTree);
    return of(newTree);
  }

  updateFamilyTree(id: string, updates: Partial<FamilyTree>): Observable<FamilyTree | undefined> {
    const index = this.mockTrees.findIndex(t => t.id === id);
    if (index !== -1) {
      this.mockTrees[index] = { ...this.mockTrees[index], ...updates, updatedAt: new Date() };
      return of(this.mockTrees[index]);
    }
    return of(undefined);
  }

  deleteFamilyTree(id: string): Observable<boolean> {
    const index = this.mockTrees.findIndex(t => t.id === id);
    if (index !== -1) {
      this.mockTrees.splice(index, 1);
      return of(true);
    }
    return of(false);
  }
}