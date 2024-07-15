// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// // Define routes that should be public
// const isPublicRoute = createRouteMatcher([
//   '/api/webhooks/clerk', // Example public route
// ]);

// // Update clerkMiddleware to handle public routes and protect others
// export default clerkMiddleware((auth, req) => {
//   if (!isPublicRoute(req)) {
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };
import { clerkMiddleware } from '@clerk/nextjs/server';

// Make sure that the `/api/webhooks/(.*)` route is not protected here
export default clerkMiddleware()

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};