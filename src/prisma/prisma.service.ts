import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleDestroy, OnModuleInit
{
  constructor() {
    super({
      log: ['warn', 'error'],
    })
  }

  // make sure to call `$conect` on init
  onModuleInit() {
    return this.$connect()
  }

  // make sure to call `$disconnect` on destroy
  onModuleDestroy() {
    return this.$disconnect()
  }
}
