export default async function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* TODO: change the second part of this <title> tag to your company name */}
      <title>Onboarding • MyCompany</title>

      <div className="grid place-items-center min-h-screen bg-gradient-to-b from-background to-foreground/20">
        <div className=" shadow-md max-w-md w-full p-8 py-8 border-border border rounded dark:bg-foreground/10 h-full sm:h-auto flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
