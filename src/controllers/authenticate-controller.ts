import {
  ConflictException,
  Body,
  Controller,
  HttpCode,
  Post,
  UsePipes,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { compare, hash } from 'bcryptjs'
import { z } from 'zod'
import { PrismaService } from 'src/prisma/prisma.service'
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe'
import { JwtService } from '@nestjs/jwt'

const authenticateBodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

type CreateAccountBody = z.infer<typeof authenticateBodySchema>

@Controller('sessions')
export class AuthenticateController {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  @Post()
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async handle(@Body() { email, password }: CreateAccountBody) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      throw new UnauthorizedException('users credentials are invalid')
    }

    const isPasswordValid = await compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('users credentials are invalid')
    }

    const accessToken = this.jwtService.sign({ sub: user.id })

    return {
      access_token: accessToken,
    }
  }
}
