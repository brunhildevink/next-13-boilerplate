import Image from "next/image";
import { request } from "@/graphQL/request";
import { Suspense } from "react";

interface Rocket {
  id: string;
  name: string;
  type: string;
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
}

export default async function Rockets() {
  const { rockets } = await request(`
      {
        rockets {
            id
            name
            type
            active
            boosters
            company
            cost_per_launch
            country
            description
        }
      }
    `);

  if (!rockets) {
    return <div>no rockets found</div>;
  }

  return (
    <Suspense fallback="loading ships...">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:xl:grid-cols-4 gap-8 justify-items-stretch">
        {rockets?.map(
          ({ id, name, active, type, company, description }: Rocket) => (
            <div
              key={id}
              className="card w-full bg-base-200  shadow-xl overflow-hidden"
            >
              <div className="card-body">
                <h2 className="card-title">
                  {name}
                  {active && (
                    <div className="badge badge-secondary">Active</div>
                  )}
                </h2>
                <p>Type: {type || "N/A"}</p>
                <p>Company: {company || "N/A"}</p>
                <p>{description}</p>
              </div>
            </div>
          )
        )}
      </div>
    </Suspense>
  );
}
