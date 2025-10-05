import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema, insertCVInteractionSchema } from "@shared/schema";
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

  // CV tracking endpoints
  app.post("/api/cv/track", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = insertCVInteractionSchema.parse(req.body);
      
      // Extract IP address
      const ipAddress = req.headers['x-forwarded-for'] || 
                       req.connection.remoteAddress || 
                       req.socket.remoteAddress || 
                       req.ip || 
                       'unknown';
      
      // Add interaction to storage with IP address
      const interaction = await storage.addCVInteraction({
        ...validatedData,
        ipAddress: Array.isArray(ipAddress) ? ipAddress[0] : ipAddress
      });
      
      return res.status(201).json({ 
        success: true, 
        message: "CV interaction tracked successfully",
        data: {
          id: interaction.id,
          action: interaction.action,
          timestamp: interaction.timestamp
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error as ZodError);
        return res.status(400).json({ 
          success: false, 
          message: validationError.message
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Failed to track CV interaction." 
      });
    }
  });

  // Get CV statistics
  app.get("/api/cv/stats", async (_req, res) => {
    try {
      const stats = await storage.getCVStats();
      return res.status(200).json({ 
        success: true, 
        data: stats 
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve CV statistics." 
      });
    }
  });

  // Get all CV interactions (for admin dashboard)
  app.get("/api/cv/interactions", async (_req, res) => {
    try {
      const interactions = await storage.getCVInteractions();
      return res.status(200).json({ 
        success: true, 
        data: interactions 
      });
    } catch (error) {
      return res.status(500).json({ 
        success: false, 
        message: "Failed to retrieve CV interactions." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
