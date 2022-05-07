import { prisma } from "../../prisma";
import { FeedbackData, FeedbacksRepository } from './../feedbacks_repository';


export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({type,comment,screenshot}: FeedbackData) {
        await prisma.feedback.create({
            data: {
               type,
               comment, 
               screenshot, 
            }
       });

    }
}