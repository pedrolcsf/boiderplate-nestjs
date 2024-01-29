import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JWTAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'
import { PrismaService } from 'src/prisma/prisma.service'

@Controller('questions')
@UseGuards(JWTAuthGuard)
export class CreateQuestionsController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user)
    return 'ok'
  }
}
