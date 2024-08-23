import prisma from '@/prisma/db';
import { ticketPatchSchema } from '@/ValidationSchemas/ticket';
import { NextRequest, NextResponse } from 'next/server';

interface Props {
  params: { id: string }
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = ticketPatchSchema.safeParse(body)

  console.log(body, validation)
  if (!validation.success) {
    return NextResponse.json(validation.error.format())
  }

  const ticket = await prisma.ticket.findUnique({ where: { id: parseInt(params.id) } })

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" })
  }

  if (body?.assignedToUserId) {
    body.assignedToUserId = parseInt(body.assignedToUserId)
  }

  const updateTicket = await prisma.ticket.update({
    where: { id: ticket.id },
    data: {
      ...body,
    }
  })

  return NextResponse.json(updateTicket)
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const ticket = await prisma.ticket.findUnique({
    where: { id: parseInt(params.id) }
  })

  if (!ticket) {
    return NextResponse.json({ error: "Ticket not found" })
  }

  await prisma.ticket.delete({
    where: { id: ticket.id }
  })

  return NextResponse.json({ message: "Ticket Deleted" });
}