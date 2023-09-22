import prisma from "database";
import { CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";


export async function getBooks() {
  return await prisma.books.findMany();
}

export async function getBook(id: number) {
  return await prisma.books.findUnique({
    where: {id}
  })
}

export async function createBook(book: CreateBook) {
  
  await prisma.books.create({
    data: book
  })
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;

  await prisma.books.update({
    data: {grade, review},
    where:{id: bookId}
  })
}