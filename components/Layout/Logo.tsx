import Image from "next/image";
import React, { FC } from "react";
import LogoImage from "../../public/assets/logos/dar.svg";

interface Props {
  classes: string;
}

const Logo: FC<Props> = ({ classes }) => {
  return (
    <div className={`${classes}`}>
      <Image src={LogoImage} alt="Logo image" />
    </div>
  );
};
export default Logo;
