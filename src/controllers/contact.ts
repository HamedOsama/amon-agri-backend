import { NextFunction, Request, Response } from "express";
import { addContact } from "../utils/db";
import { Contact } from "@prisma/client";
import Error from "../interfaces/error.interface";

export const addContactHandler = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, phone, subject, message } = req.body as Contact || {};
    if (!name || (!email && !phone) || !message) {
      const error: Error = new Error("All fields are required");
      error.status = 400;
      throw error;
    }
    const newContact = await addContact({ name, email, phone, subject, message } as Contact);
    res.status(201).json(
      {
        ok: true,
        statusCode: 201,
        message: "Contact added successfully",
        data: newContact
      }
    );
  } catch (e) {
    next(e);
  }
}

