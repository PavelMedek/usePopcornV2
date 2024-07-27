"use client";

interface PlatformNamePageProps {
  params: {
    platformName: string;
    showName: string;
  };
}

export default function Home({ params }: PlatformNamePageProps) {
  const { platformName, showName } = params;

  return (
    <div className="lg:pl-16 lg:pr-16 pr-4 pl-4 pt-16 w-full">
      {platformName} / {showName}
    </div>
  );
}
