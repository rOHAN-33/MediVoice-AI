import { FeatureBento } from "@/components/FeatureBento";
import HeroSectionOne from "@/components/hero-section-demo-1";
// import { BentoGrid } from "@/components/ui/bento-grid";

export default function Home(){
  return (
    <div>
      <HeroSectionOne></HeroSectionOne>
      {/* <BentoGrid></BentoGrid> */}
      <FeatureBento></FeatureBento>
    </div>
  )
}
