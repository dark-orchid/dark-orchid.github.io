import {Button, Stack} from "@mantine/core";
import BackgroundGradient from "~/app/components/BackgroundGradient/BackgroundGradient";
import Header from "~/app/components/Header/Header";
import Width from "~/app/components/Width/Width";
import Footer from "~/app/components/Footer/Footer";

export default function Home() {
  return (
    <Stack h={"100svh"}>
      <BackgroundGradient>
        <Header/>
        <Stack pt={120}>
          <Width>
            <Button variant={"filled"} color={"dark_purple"}>Test</Button>
          </Width>
        </Stack>
        <Footer/>
      </BackgroundGradient>
    </Stack>
  );
}
