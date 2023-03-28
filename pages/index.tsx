import LayoutContainer from "@/components/layout/Container";
import PageHomeBanner from "@/components/page/home/Banner";
import PageHomeIntroduction from "@/components/page/home/Introduction";
import PageHomeProjects from "@/components/page/home/Projects";
import PageHomeServices from "@/components/page/home/Services";

export default function Index() {
  return (
    <LayoutContainer>
      <PageHomeBanner />
      <PageHomeIntroduction />
      <PageHomeServices />
      <PageHomeProjects />
    </LayoutContainer>
  );
}
