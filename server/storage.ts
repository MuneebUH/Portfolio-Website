import { 
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  cvInteractions, type CVInteraction, type InsertCVInteraction
} from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  addToWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistByEmail(email: string): Promise<Waitlist | undefined>;
  getAllWaitlist(): Promise<Waitlist[]>;
  
  // CV tracking methods
  addCVInteraction(interaction: InsertCVInteraction): Promise<CVInteraction>;
  getCVInteractions(): Promise<CVInteraction[]>;
  getCVStats(): Promise<{ views: number; downloads: number; total: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private waitlistEntries: Map<number, Waitlist>;
  private cvInteractions: Map<number, CVInteraction>;
  
  currentUserId: number;
  currentWaitlistId: number;
  currentCVInteractionId: number;

  constructor() {
    this.users = new Map();
    this.waitlistEntries = new Map();
    this.cvInteractions = new Map();
    this.currentUserId = 1;
    this.currentWaitlistId = 1;
    this.currentCVInteractionId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async addToWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    const id = this.currentWaitlistId++;
    const waitlistEntry: Waitlist = { 
      ...entry, 
      interests: entry.interests || null,
      id,
      createdAt: new Date()
    };
    this.waitlistEntries.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistByEmail(email: string): Promise<Waitlist | undefined> {
    return Array.from(this.waitlistEntries.values()).find(
      (entry) => entry.email === email,
    );
  }

  async getAllWaitlist(): Promise<Waitlist[]> {
    return Array.from(this.waitlistEntries.values());
  }

  // CV tracking methods
  async addCVInteraction(interaction: InsertCVInteraction): Promise<CVInteraction> {
    const id = this.currentCVInteractionId++;
    const cvInteraction: CVInteraction = {
      ...interaction,
      id,
      timestamp: new Date()
    };
    this.cvInteractions.set(id, cvInteraction);
    return cvInteraction;
  }

  async getCVInteractions(): Promise<CVInteraction[]> {
    return Array.from(this.cvInteractions.values());
  }

  async getCVStats(): Promise<{ views: number; downloads: number; total: number }> {
    const interactions = Array.from(this.cvInteractions.values());
    const views = interactions.filter(i => i.action === 'view').length;
    const downloads = interactions.filter(i => i.action === 'download').length;
    return { views, downloads, total: interactions.length };
  }
}

export const storage = new MemStorage();
