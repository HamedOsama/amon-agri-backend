import { Contact, PrismaClient } from '@prisma/client'
export const prisma = new PrismaClient()


export const addContact = async (contact: Contact) => {
  const newContact = await prisma.contact.create({
    data: {
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      subject: contact.subject,
      message: contact.message,
    },
    select: null
  })
  return newContact
}