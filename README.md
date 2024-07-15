# An AI SaaS Platform

![image](https://github.com/AbhijitKhyade/Imaginify/assets/129264746/a4159767-6ae9-4496-991e-1e9bb4e7c511)



📋 Table of Contents<br>
🤖 Introduction<br>
⚙️ Tech Stack<br>
🔋 Features<br>
🤸 Quick Start<br>


🤖 Introduction<br>
Build an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.

<br><br>
⚙️ Tech Stack<br>
Next.js<br>
TypeScript<br>
MongoDB<br>
Clerk<br>
Cloudinary<br>
Stripe<br>
Shadcn<br>
TailwindCSS<br>
<br><br>
🔋 Features<br>
👉 Authentication and Authorization: Secure user access with registration, login, and route protection.

👉 Community Image Showcase: Explore user transformations with easy navigation using pagination

👉 Advanced Image Search: Find images by content or objects present inside the image quickly and accurately

👉 Image Restoration: Revive old or damaged images effortlessly

👉 Image Recoloring: Customize images by replacing objects with desired colors easily

👉 Image Generative Fill: Fill in missing areas of images seamlessly

👉 Object Removal: Clean up images by removing unwanted objects with precision

👉 Background Removal: Extract objects from backgrounds with ease

👉 Download Transformed Images: Save and share AI-transformed images conveniently

👉 Transformed Image Details: View details of transformations for each image

👉 Transformation Management: Control over deletion and updates of transformations

👉 Credits System: Earn or purchase credits for image transformations

👉 Profile Page: Access transformed images and credit information personally

👉 Credits Purchase: Securely buy credits via Stripe for uninterrupted use

👉 Responsive UI/UX: A seamless experience across devices with a user-friendly interface
<br><br>
🤸 Quick Start<br>
Follow these steps to set up the project locally on your machine.<br>

Prerequisites<br>

Make sure you have the following installed on your machine:<br>

Git<br>
Node.js<br>
npm (Node Package Manager)<br>
Cloning the Repository<br>
<br><br>
git clone https://github.com/adrianhajdin/imaginify.git<br>
cd imaginify<br>
Installation<br>
<br><br>
Install the project dependencies using npm:<br>
<br><br>
npm run dev<br>
Set Up Environment Variables<br>

Create a new file named .env.local in the root of your project and add the following content:<br>

#NEXT<br>
NEXT_PUBLIC_SERVER_URL=<br>
<br><br>
#MONGODB<br>
MONGODB_URL=<br>
<br><br>
#CLERK<br>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<br>
CLERK_SECRET_KEY=<br>
WEBHOOK_SECRET=<br>
<br><br>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in<br>
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up<br>
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/<br>
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/<br>
<br><br>
#CLOUDINARY<br>
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<br>
CLOUDINARY_API_KEY=<br>
CLOUDINARY_API_SECRET=<br>
<br><br>
#STRIPE<br>
STRIPE_SECRET_KEY=<br>
STRIPE_WEBHOOK_SECRET=<br>
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=<br>
Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Clerk, MongoDB, Cloudinary and Stripe<br>
<br><br>
Running the Project<br>
<br><br>
npm run dev<br>
Open http://localhost:3000 in your browser to view the project.<br>
