import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl text-gray-900 sm:text-6xl"></h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground"></p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6"></div>
      </div>
    </MaxWidthWrapper>
  );
}
