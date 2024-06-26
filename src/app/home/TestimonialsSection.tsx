import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const TestimonialsSection = () => {
  // TODO: personalize this testimonials section, remove it, or change it completely
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <MaxWidthWrapper>
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                Testimonials
              </div>
              <h2 className="text-3xl font-bold sm:text-5xl">
                Many happy farmers
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {/* TODO: Replace MyCompany with your company, or just remove this componenet */}
                Hear from developers who have used MyCompany to build their
                apps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">Anyonymous</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Student, University of Ricefield
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot; I love Ricefield so much! I would recommend it to anyone
                that wants to connect with likeminded college students! &quot;
              </p>
            </div>
            <div className="grid gap-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-8 transition-transform duration-300 hover:scale-105">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800">
                  <img
                    src="/placeholder.svg"
                    width="48"
                    height="48"
                    alt="Avatar"
                    className="h-full w-full rounded-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-base font-medium">Anyonymous</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Student, University of Ricefield
                  </div>
                </div>
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                &quot; I love Ricefield so much! I would recommend it to anyone
                that wants to connect with likeminded college students! &quot;
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default TestimonialsSection;
