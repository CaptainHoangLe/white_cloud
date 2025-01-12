import Home_1 from "./(home)/home-1/page";
import Wrapper from "./layout/wrapper";

export const metadata = {
  title: "Home-1 || Voiture - Automotive & Car Dealer NextJS Template",
  description: `Voiture - Automotive & Car Dealer NextJS Template. `,
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home_1 />
    </Wrapper>
  );
}
