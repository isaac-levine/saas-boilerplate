## Welcome to your SaaS Boilerplate

## Getting Started

To get started with the SaaS Boilerplate, follow the steps below:

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

5. Set up the database using Prisma:

   ```shell
   npx prisma migrate dev
   ```

6. Start the development server:

   ```shell
   npm run dev
   ```

7. Open your browser and visit `http://localhost:3000` to see the application running.

8. You're all set! You can now start customizing the SaaS Boilerplate to fit your needs.
