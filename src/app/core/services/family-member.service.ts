import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FamilyMember, Gender } from '../models/family-member.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyMemberService {
  private mockMembers: FamilyMember[] = [
    {
      id: '1',
      treeId: '1',
      firstName: 'Charles',
      lastName: 'Martin',
      gender: Gender.MALE,
      birthDate: new Date('1945-06-12'),
      birthPlace: 'Paris, France',
      isAlive: true,
      biography: 'Patriarch of the Martin family',
      occupation: 'Engineer',
      photos: [
        {
          id: '1',
          url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
          caption: 'Charles Martin',
          uploadedAt: new Date(),
          uploadedBy: 'admin',
          isPrimary: true
        }
      ],
      documents: [],
      relationships: [],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-12-30'),
      createdBy: 'admin'
    },
    {
      id: '2',
      treeId: '1',
      firstName: 'Marie',
      lastName: 'Martin',
      maidenName: 'Dubois',
      gender: Gender.FEMALE,
      birthDate: new Date('1947-04-08'),
      birthPlace: 'Lyon, France',
      isAlive: true,
      biography: 'Matriarch of the Martin family',
      occupation: 'Teacher',
      photos: [
        {
          id: '2',
          url: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1',
          caption: 'Marie Martin',
          uploadedAt: new Date(),
          uploadedBy: 'admin',
          isPrimary: true
        }
      ],
      documents: [],
      relationships: [],
      createdAt: new Date('2024-01-15'),
      updatedAt: new Date('2024-12-30'),
      createdBy: 'admin'
    }
  ];

  getFamilyMembers(treeId: string): Observable<FamilyMember[]> {
    const members = this.mockMembers.filter(m => m.treeId === treeId);
    return of(members);
  }

  getFamilyMember(id: string): Observable<FamilyMember | undefined> {
    const member = this.mockMembers.find(m => m.id === id);
    return of(member);
  }

  createFamilyMember(member: Partial<FamilyMember>): Observable<FamilyMember> {
    const newMember: FamilyMember = {
      id: Math.random().toString(36).substr(2, 9),
      treeId: member.treeId || '1',
      firstName: member.firstName || '',
      lastName: member.lastName || '',
      middleName: member.middleName,
      maidenName: member.maidenName,
      nicknames: member.nicknames || [],
      gender: member.gender || Gender.UNKNOWN,
      birthDate: member.birthDate,
      birthPlace: member.birthPlace,
      deathDate: member.deathDate,
      deathPlace: member.deathPlace,
      isAlive: member.isAlive ?? true,
      biography: member.biography,
      occupation: member.occupation,
      education: member.education,
      photos: member.photos || [],
      documents: member.documents || [],
      relationships: member.relationships || [],
      personalLink: member.personalLink,
      personalLinkExpiry: member.personalLinkExpiry,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'current-user'
    };

    this.mockMembers.push(newMember);
    return of(newMember);
  }

  updateFamilyMember(id: string, updates: Partial<FamilyMember>): Observable<FamilyMember | undefined> {
    const index = this.mockMembers.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mockMembers[index] = { ...this.mockMembers[index], ...updates, updatedAt: new Date() };
      return of(this.mockMembers[index]);
    }
    return of(undefined);
  }

  deleteFamilyMember(id: string): Observable<boolean> {
    const index = this.mockMembers.findIndex(m => m.id === id);
    if (index !== -1) {
      this.mockMembers.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  generatePersonalLink(memberId: string, expiryDays: number = 30): Observable<string> {
    const link = `${window.location.origin}/personal/${Math.random().toString(36).substr(2, 12)}`;
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + expiryDays);
    
    this.updateFamilyMember(memberId, {
      personalLink: link,
      personalLinkExpiry: expiry
    });
    
    return of(link);
  }
}