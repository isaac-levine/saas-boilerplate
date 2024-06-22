import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants, Button } from "@/components/ui/button";

export default function BottomCallToAction() {
  return (
    <section id="cta" className="w-full py-12 md:py-16 lg:py-20">
      <MaxWidthWrapper>
        <div className="container flex flex-col items-center gap-6 px-4 md:px-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg bg-background dark:bg-foreground/5 border-t p-12 text-white">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Join Ricefield and Become a Farmer
            </h2>
            <p className="max-w-[600px]  md:text-xl">
              Unlock the joys of sustainable farming and join our vibrant
              community of passionate growers.
            </p>
          </div>
          <Button
            variant="default"
            className={`${buttonVariants({
              variant: "default",
            })} rounded-lg shadow-lg border-t  transition-transform duration-300 hover:scale-105`}
          >
            Get Started {"  "}
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
