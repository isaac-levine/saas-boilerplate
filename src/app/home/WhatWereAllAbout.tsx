import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function WhatWereAllAbout() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 ">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold md:text-4xl/tight">
              What we&apos;re all about
            </h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Ricefield is an anonymous social media platform for college
              students. It is a place where students can share their thoughts,
              feelings, and experiences without the fear of being judged. Users
              can post anonymously, comment on other posts, and upvote or
              downvote posts. The platform is designed to be a safe space for
              students to express themselves and connect with others who are
              going through similar experiences.
            </p>
          </div>
          <div className="dark:shadow-none bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8">
            <div className="grid gap-4">
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Privacy first</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We are a strictly anonymous platform. We do not collect any
                  personal information from our users, and we do not store any
                  data that could be used to identify them.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">
                  Built by students, for students
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We understand the unique challenges that college students face
                  today, and we have designed Ricefield to be a platform that
                  meets their needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-xl font-bold">Mental health resources</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We provide resources and support for students who are
                  struggling with mental health issues. Our platform is a safe
                  space for students to seek help and connect with others who
                  are going through similar experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
