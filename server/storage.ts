import { 
  users, type User, type InsertUser,
  waitlist, type Waitlist, type InsertWaitlist,
  cvInteractions, type CVInteraction, type InsertCVInteraction
} from "@shared/schema";
import { db } from './db';

export interface IStorage {
  addCVInteraction(interaction: InsertCVInteraction): Promise<CVInteraction>;
  getCVInteractions(): Promise<CVInteraction[]>;
  getCVStats(): Promise<{ views: number; downloads: number; total: number }>;
}

export class PgStorage implements IStorage {
  async addCVInteraction(interaction: InsertCVInteraction): Promise<CVInteraction> {
    const [result] = await db.insert(cvInteractions).values(interaction).returning();
    return result;
  }

  async getCVInteractions(): Promise<CVInteraction[]> {
    return db.select().from(cvInteractions);
  }

  async getCVStats(): Promise<{ views: number; downloads: number; total: number }> {
    const all = await db.select().from(cvInteractions);
    const views = all.filter(i => i.action === 'view').length;
    const downloads = all.filter(i => i.action === 'download').length;
    return { views, downloads, total: all.length };
  }
}

export const storage = new PgStorage();
