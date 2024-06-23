## Welcome to your SaaS Boilerplate

To get started with the SaaS Boilerplate, follow the steps below:

Thank you for being a Boilerbase customer. I value every single one of you guys and your feedback is very important to me. Reach out to <b>help@boilerabse.io</b> with any questions/concerns.

### 💻 Getting started and running the application locally

This should work on any recent node version, but as of 6/23/24 I am using node version 22.3.0.
You can check yours by doing `node -v`.

You can find more details about installing node/npm here: https://nodejs.org/en/download/package-manager/.

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/isaac-levine/saas-boilerplate.git
   ```

2. Navigate to the project directory:

   ```shell
   cd saas-boilerplate
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Create a `.env` file in the root directory of the project and fill in the necessary values. You can use the `.env.example` file as a template.

5. Fill out all the necessary secrets - refer to `.env.example`

6. Do not make any changes to the code yet, we just want to get the app running locally before we start messing around with things.

7. Run `npm run dev` to start your development server and run your application locally (please do not make any changes to prisma schema before this point, it's important to make sure we can just get the project to build and run properly before making any major changes)

8. Open your browser and visit `http://localhost:3000` to see the application running.

9. Stop the local development server and run `npm run build` to make sure the app can build successfully.

### 🎨 Now, it's time to start changing some stuff and personalizing your application to your business.

9. I've tried to make your life easier by marking important parts that NEED to be chaned with a comment that says "TODO". If you're using VSCode, do a full project search by hitting cmd+shift+F or clicking the search icon in the top left of your screen. You should search for "TODO" and read my comments to make sure all of these places are changed. You'll find that a lot of them are just a matter of entering your own text or your company's name, but they are still important to change because you don't want users to be clicking around your site and find dummy placeholder text somewhere in your application. I've tried to mark all places that need to be updated, but please, if you find any that I missed, please let me know at <b>help@boilerbase.io</b>.

10. Now that you've changed all the general copy, and probably deleted some aspects of the app/layout that you don't really need, it's time to get your app deployed in production. I'm a big believer that the sooner you get your app deployed the better, because you can resolve build errors early on and then have something like Vercel automatically deploy the latest version of your app everytime you commit to the main branch.

### 🛜 Deploy to Vercel

11. Go to Vercel, make an account, add your repository, set it to track the main branch.

### 📊 Prisma Schema Changes

It's important that you understand how prisma works. If you have only used prisma once or twice, I would highly recommend reading this quick intro so you understand the changes that you're making to your application. It will help you in the long run. https://www.prisma.io/nextjs

Order of operations:

12. Make a change to the `schema.prisma` file

13. Run `npm prisma format` to format it nicely :)

14. Run `npm prisma generate`

15. Run `npm prisma db push`

16. Note that this will affect places where Prisma Types are imported and used around the application. If it's easier to just delete places where I refer to things like Listings, then feel free to just go ahead and delete those pages/components. I want to emphasize that this boilerplate is not meant to be a fully fledged application for you, I'm mainly just trying to help you get over the initial user authentication, database, and stripe integration set up.

### 🧑‍💻 Build your own Functionality

17. Now that your local development server is working, your project successfully builds and deploys automatically to Vercel, and you're able to make schema changes to your database, you are ready to finish your application and build out all the features that you need.

### BONUS: How to keep shipping ridiculously fast 🔥

Below are some things that I HIGHLY recommend doing as you develop your application if you want to continue to move really fast and finish your MVP quickly.

- Use [v0.dev](https://v0.dev) to generate components for you. It works best if you break up a larger page into smaller subcomponents. It also makes your code easier to read if you break up pages into smaller components, anyways.
- Steal components directly from [ui.shadcn.com](https://ui.shadcn.com/). This is what v0 uses to build your components, but I would recommend starting with some of the components in their library, as a lot of them are really good off the shelf. They also have entire dashboards and pages built out that you can steal for free.
