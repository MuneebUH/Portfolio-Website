import { pgTable, text, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const waitlist = pgTable("waitlist", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  interests: text("interests").array(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// New table for tracking CV interactions
export const cvInteractions = pgTable("cv_interactions", {
  id: serial("id").primaryKey(),
  action: varchar("action", { length: 20 }).notNull(), // 'view' or 'download'
  userAgent: text("user_agent"),
  ipAddress: varchar("ip_address", { length: 45 }),
  referrer: text("referrer"),
  source: varchar("source", { length: 100 }), // 'website', 'linkedin', 'github', etc.
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertWaitlistSchema = createInsertSchema(waitlist).omit({
  id: true,
  createdAt: true,
});

export const insertCVInteractionSchema = createInsertSchema(cvInteractions).omit({
  id: true,
  timestamp: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertWaitlist = z.infer<typeof insertWaitlistSchema>;
export type Waitlist = typeof waitlist.$inferSelect;

export type InsertCVInteraction = z.infer<typeof insertCVInteractionSchema>;
export type CVInteraction = typeof cvInteractions.$inferSelect;
