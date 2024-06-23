import Link from "next/link";
import CompanyIcon from "./CompanyIcon";
import MaxWidthWrapper from "./MaxWidthWrapper";

// The footer that shows at the bottom of every page
export const Footer = () => {
  return (
    <footer className="bg-background dark:bg-foreground/5 backdrop-blur-md flex-grow-0 border-t border-foreground/10">
      <MaxWidthWrapper>
        <div className="container max-w-7xl flex justify-between gap-2 md:gap-6 flex-row items-start py-8">
          <div className="flex items-center justify-center m-auto ml-0 gap-2 ">
            <Link href="#" passHref>
              <div className="flex items-center gap-2 cursor-pointer">
                {/* TODO: add your company logo component here */}
                <CompanyIcon size={35} />
                {/* TODO: put your company name here */}
                <span className="text-lg font-semibold hidden sm:block">
                  MyCompany
                </span>
              </div>
            </Link>
          </div>
          <nav className="flex flex-row items-center justify-center gap-4 text-xs md:text-sm m-auto mr-0 tracking-tight">
            <Link href="/" passHref>
              <span className="hover:underline cursor-pointer">Home</span>
            </Link>
            <Link href="/about" passHref>
              <span className="hover:underline cursor-pointer">About</span>
            </Link>
            {/* TODO: Make this send an email to your company's support email */}
            <Link href="mailto:help@yourcompany.io" passHref>
              <span className="hover:underline cursor-pointer">Contact</span>
            </Link>
            <Link href="/about/privacy" passHref>
              <span className="hover:underline cursor-pointer flex flex-row gap-1">
                Privacy Policy
              </span>
            </Link>
          </nav>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
