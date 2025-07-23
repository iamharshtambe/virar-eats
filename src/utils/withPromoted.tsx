import React from "react";
import type { RestroCardProps } from "../components/RestroCard";

export function withPromoted(
  RestroCard: React.FC<RestroCardProps>,
): React.FC<RestroCardProps> {
  return (props) => {
    return (
      <>
        <label className="absolute z-10 rounded-2xl bg-black px-2 py-0.5 text-sm text-white">
          Promoted
        </label>
        <RestroCard {...props} />
      </>
    );
  };
}
