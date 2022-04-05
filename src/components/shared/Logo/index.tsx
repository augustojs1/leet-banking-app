import logoAsset from "../../../assets/logo.png";
import * as style from "./styles";

export function Logo() {
  return (
    <style.container>
      <img src={logoAsset} alt="leet banking" />
      <style.title>Leet Banking</style.title>
    </style.container>
  );
}
