import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

import dotenv from "dotenv";

dotenv.config();

// create a ratelimiter that allows 100 requests per minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(100, "60 s"),
});

export default ratelimit;
// const ipRequests = new Map();

// const ratelimit = {
//   limit: async (key) => {
//     const now = Date.now();
//     const windowSize = 60 * 1000; // 60 seconds
//     const maxRequests = 100;

//     if (!ipRequests.has(key)) {
//       ipRequests.set(key, []);
//     }

//     const timestamps = ipRequests.get(key).filter(ts => now - ts < windowSize);

//     if (timestamps.length >= maxRequests) {
//       return { success: false };
//     }

//     timestamps.push(now);
//     ipRequests.set(key, timestamps);

//     return { success: true };
//   },
// };

// export default ratelimit;
