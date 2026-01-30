import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    /*
     * Match all routes except:
     * - static files
     * - Next.js internals
     */
    "/((?!_next|.*\\..*).*)",
  ],
};
