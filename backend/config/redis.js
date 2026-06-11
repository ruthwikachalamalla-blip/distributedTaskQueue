import { Redis } from 'ioredis'

export const redisClient = new Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
    maxRetriesPerRequest: null  // required by BullMQ
})

redisClient.on("connect", () => console.log("Redis connected successfully"))
redisClient.on("error", (e) => console.error("Redis error:", e.message))

//connection config object — used by Queue and Worker
export const connection = {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379
}