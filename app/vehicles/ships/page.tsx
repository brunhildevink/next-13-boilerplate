import Image from "next/image";
import { request } from "@/graphQL/request";
import { Suspense } from "react";

interface Ship {
  id: string;
  name: string;
  image: string;
  model: string;
  roles: string[];
  active: boolean;
  year_built: number;
}

export default async function Ships() {
  const fallbackImage =
    "https://images.unsplash.com/photo-1633998860517-29b9ada37476?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80";
  const { ships } = await request(`
      {
        ships {
          id
          name
          image
          model
          roles
          active
          year_built
        }
      }
    `);

  if (!ships) {
    return <div>no ships found</div>;
  }

  return (
    <Suspense fallback="loading ships...">
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-fr	 justify-items-stretch">
        {ships?.map(
          ({
            id,
            name,
            image,
            model,
            roles,
            active,
            year_built: built,
          }: Ship) => (
            <div
              key={id}
              className="card h-98 w-full bg-neutral shadow-xl overflow-hidden lg:card-side"
            >
              <figure className="h40 w-100">
                <Image
                  src={image || fallbackImage}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="md:w-full md:h-40 lg:w-40 lg:h-full object-cover"
                  alt={`A ship named ${name}`}
                  priority
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {name}
                  {active && (
                    <div className="badge badge-secondary">Active</div>
                  )}
                </h2>
                <p>Built: {built || "N/A"}</p>
                <p>Model: {model || "N/A"}</p>

                <div className="card-actions justify-end">
                  {roles?.map((role: string) => (
                    <div key={role} className="badge badge-outline">
                      {role}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </Suspense>
  );
}
