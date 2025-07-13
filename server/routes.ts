import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { ZodError } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for waitlist sign-up
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertWaitlistSchema.parse(req.body);
      
      // Check if the email already exists in waitlist
      const existingEntry = await storage.getWaitlistByEmail(validatedData.email);
      if (existingEntry) {
        return res.status(409).json({ 
          success: false, 
          message: "This email is already on our waitlist." 
        });
      }
      
      // Add to waitlist
      const waitlistEntry = await storage.addToWaitlist(validatedData);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Successfully added to the waitlist!",
        data: {
          id: waitlistEntry.id,
          email: waitlistEntry.email
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // This is a ZodError
        const validationError = fromZodError(error as ZodError);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred. Please try again." 
      });
    }
  });
  
  // Get waitlist count
  app.get("/api/waitlist/count", async (_req, res) => {
    try {
      const allEntries = await storage.getAllWaitlist();
      return res.status(200).json({ count: allEntries.length });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve waitlist count." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
