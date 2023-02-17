import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col grow pb-8">
      <div className="hero flex flex-col justify-center grow bg-base-200">
        <div className="hero-content text-center">
          <article className="max-w-md prose align-self-center">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6">
              This app has been designed to showcase the latest features of{" "}
              <code className="mockup-code">Next.js&nbsp;13</code>
              and <code className="mockup-code">React&nbsp;18</code>. I hope
              that it will serve as a helpful reference for developers who are
              looking to learn more about these tools!
            </p>
            <Link href="/vehicles/ships" className="btn btn-primary">
              Get Started
            </Link>
          </article>
        </div>
      </div>
    </div>
  );
}
