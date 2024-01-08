import { BitbucketIcon } from "~/components/icons/Bitbucket";
import { JsIcon } from "~/components/icons/Js";
import { HtmlIcon } from "~/components/icons/Html";
import { CssIcon } from "~/components/icons/Css";
import { NodeIcon } from "~/components/icons/Node";
import { NextIcon } from "~/components/icons/Next";
import { KotlinIcon } from "~/components/icons/Kotlin";
import { FirebaseIcon } from "~/components/icons/Firebase";
import { JavaIcon } from "~/components/icons/Java";
import { ReactIcon } from "~/components/icons/React";
import { ScrumIcon } from "~/components/icons/Scrum";
import { RemixIcon } from "~/components/icons/Remix";
import { AgileIcon } from "~/components/icons/Agile";
import { LitIcon } from "~/components/icons/Lit";
import { JiraIcon } from "~/components/icons/Jira";
import { AngularIcon } from "~/components/icons/Angular";
import { PlayWrightIcon } from "~/components/Icons/PlayWright";
import { GitIcon } from "~/components/icons/Git";
import { CypressIcon } from "~/components/icons/Cypress";
import { FlutterIcon } from "~/components/icons/Flutter";
import { GithubIcon } from "~/components/icons/Github";
import { Mongo } from "~/components/Icons/Mongo";
export default function Lenguajes() {
  return (
    <section id="lenguaje" className="bg-gray-900 2xl:py-24">
      <div className="px-4 mx-auto overflow-hidden bg-gray-900 max-w-7xl sm:px-6 lg:px-8">
        <div className="py-10 sm:py-16 lg:py-20 2xl:pl-24">
          <div
            className="grid auto-rows-max gap-8 [&_svg]:w-20  [&_img]:block [&_img]:mx-auto justify-items-center items-center"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
            }}
            data-aos="fade-up"
          >
            <KotlinIcon />
            <NextIcon />

            <Mongo />
            <CssIcon />
            <AngularIcon />
            <JsIcon />
            <HtmlIcon />
            <FirebaseIcon />
            <NodeIcon />
            <ReactIcon />
            <JavaIcon />
            <JiraIcon />
            <BitbucketIcon />

            <CypressIcon />
            <GithubIcon />
            <GitIcon />
            <ScrumIcon />
            <AgileIcon />
            <PlayWrightIcon />
            <FlutterIcon />
            <LitIcon />
            <RemixIcon />
          </div>
        </div>
      </div>
    </section>
  );
}
