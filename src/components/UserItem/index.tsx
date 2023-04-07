import React from "react";
import IUser from "../../model/User";
import Link from "next/link";
import { Inter } from "next/font/google";

type Props = Pick<IUser, "name" | "company" | "address">;

const inter = Inter({ subsets: ["latin"] });

const UserItem: React.FC<Props> = ({ address, company, name }) => {
  const formattedAddress = `${address.suite} ${address.street} ${address.zipcode}-${address.city}`;
  const googleLink = `https://maps.google.com/?q=${address.geo.lat},${address.geo.lng}`;

  return (
    <div  style={{ padding: 4 }}>
      <span className={inter.className}>
        {name} | {company.name}
      </span>
      <Link
        style={{ padding: 10 }}
        href={googleLink}
        target="_blank"
        rel="noreferrer noopener"
        className={inter.className}
      >
        ({formattedAddress})
      </Link>
    </div>
  );
};

export default UserItem;
