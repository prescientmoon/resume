import GridAlignedHR from "./AlignedHR";
import "./app.css";
import * as preact from "preact";

function Commented(_props: any) {
  return <> </>;
}

const name = "Adriel Rafael Matei";
const email = "hi@moonythm.dev";
const githubUsername = "prescientmoon";

const project = (name: string, gh = false) =>
  gh
    ? `https://github.com/${name.includes("/") ? name : "prescientmoon/" + name}`
    : `https://git.moonythm.dev/prescientmoon/${name}`;

function Element(props: {
  title: string;
  url?: string;
  subtitle?: preact.ComponentChildren;
  inlineSubtitle?: preact.ComponentChildren;
  children: preact.ComponentChildren;
}) {
  let title: preact.ComponentChildren = props.title;
  if (props.url) {
    title = <a href={props.url}>{props.title}</a>;
  }

  let subtitle = <></>;
  if (props.subtitle) {
    subtitle = <div class="element-subtitle">{props.subtitle}</div>;
  }

  let inlineSubtitle = <></>;
  if (props.inlineSubtitle) {
    inlineSubtitle = (
      <>
        <div class="spacing" />
        <div class="element-inline-subtitle">{props.inlineSubtitle}</div>
      </>
    );
  }

  return (
    <>
      <div class="element">
        <div class="element-title">
          <span class="element-title-anchor">◇</span> {title}
          {inlineSubtitle}
        </div>
        {subtitle}
        <div class="element-content">{props.children}</div>
      </div>
    </>

    // <GridAlignedHR class="element-aligned-hr" />
  );
}

export function IconDate(props: { children: preact.ComponentChildren }) {
  return (
    <>
      <i class="fa fa-calendar"></i>
      {props.children}
    </>
  );
}

export function App() {
  return (
    <div id="root">
      <div class="cell" id="name-cell">
        <div id="big-name">{name}</div>
      </div>
      <div class="cell" id="contact">
        <div class="contact-icon">
          <i class="fa fa-envelope"></i>
        </div>
        <a href={`mailto:${email}`}>{email}</a>
        <div class="contact-icon">
          <i class="fa fa-github"></i>
        </div>
        <a href={`https://github.com/${githubUsername}`}>
          github.com/{githubUsername}
        </a>
        <div class="contact-icon">
          <i class="fa fa-globe"></i>
        </div>
        <a href={`https://moonythm.dev`}>moonythm.dev</a>
      </div>

      <div class="cell">
        <div class="container">
          <div class="header">Personal Projects</div>
          <Commented>
            <Element
              title="Million prescient trees"
              url={project("million-prescient-trees", true)}
            >
              MPT is an AI for the card game "echo", and the project I am
              currently hacking on. Written in <strong> rust</strong>, MPT makes
              use of techniques such as custom allocators to try and achieve
              peak performance. Furthermore, echo is a hidden information game
              with a surprisingly large game tree. To tackle these challenges, I
              had to learn about (and implement){" "}
              <strong>counterfactual regret minimization</strong>, together with
              a series of novel domain-specific optimizations.
            </Element>
          </Commented>

          <Element title="Lunarbox" url={project("lunarcast/lunarbox", true)}>
            Lunarbox is a{" "}
            <strong>
              strongly-typed visual functional programming language
            </strong>{" "}
            I wrote in Purescript. It features an interactive editor, type
            inference, a basic linter & optimizer, a color-encoding of types,
            cloud sync, an admin interface, and an example & tutorial system.
          </Element>

          <Element title="Shimmeringmoon" url={project("shimmeringmoon")}>
            Shimmeringmoon is a{" "}
            <strong>Rust-based toolchain for the rhythm game "Arcaea"</strong>.
            The program provides an image score-data extraction system based on
            a hand-made OCR and image-recognition implementation, statistics
            presentation using a hand-made software renderer, and integration
            with community-made private server implementations, all accessible
            through a convenient Discord bot.
          </Element>

          <Element title="Lunarflow" url={project("lunarcast/lunarflow", true)}>
            LunarFlow is a <strong>lambda calculus visualizer</strong> written
            in PureScript using concur and algebraic effects via free monads.
            During its development I researched and implemented multiple tree
            transformation algorithms based on recursion schemes, including a
            size annotator, shape-preserving (eta) reduction and a layout
            generation algorithm.
          </Element>

          <Element title="Erratic gate" url={project("errative-gate")}>
            During the summer of 2019 I developed a web editor and simulator for
            logic gates using <strong>TypeScript</strong> with{" "}
            <strong>react</strong> and <strong>rxjs</strong>. The simulator
            features an extensive interactive editor (drag&drop, selections,
            clipboard operations, etc), integrated circuits (custom components
            encapsulating a piece of logic), up to 32 bits per pin, support for
            multiple languages and locales, and configurable components which
            enables extensibility from the user.
          </Element>

          <Commented>
            <Element title="Doffycup" url={project("doffycup", true)}>
              Doffycup is an{" "}
              <strong>interactive programming teaching tool</strong> me and a
              friend developed in the final round of the infoeducatie contest.
              The project combines a live-updating, scratch-like, read-only code
              interface with a cup guessing game in order to create an unique
              experience that has been tested by a number of kids with great
              success.
            </Element>
          </Commented>

          <Element
            title="Lunarlog & moonlog"
            url={project("lunarcast/lunarlog", true)}
          >
            Moonlog is a simple implementation of an indentation-based logic
            programming language using PureScript. During the summer of 2021, I
            went a step further and created Lunarlog — a{" "}
            <strong>visual logic based programming language</strong> implemented
            using a handmade Purescript graphics library.
          </Element>

          <Commented>
            <Element
              title="Type system implementations"
              url={project("lunarcast/lunarpie", true)}
            >
              I have spent a significant amount of time learning about the
              implementation of type systems for programming languages. I have
              implemented various such systems, ranging from Hindley–Milner type
              inference, rank-n types, up to basic dependently typed systems
              with implicit arguments.
            </Element>
          </Commented>
        </div>
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Work experience</div>

          <Element title="Feram" inlineSubtitle="August 2023 – Spring 2025">
            As a <strong>Haskell</strong> and <strong>Elm</strong> software
            engineer, I worked on multiple features of Airsequel — a SQL
            management service that generates GraphQL APIs for the underlying
            data. Features I have worked on include a cloud function runtime
            supporting sandboxing for multiple languages, and a dynamic GraphQL
            introspection system on top of SQL.
          </Element>

          <Element title="Visonum" inlineSubtitle="June 2022 – April 2023">
            As a <strong>Purescript</strong> software engineer, I worked on
            multiple projects related to network quality testing. I learnt a lot
            about writing quality unit tests, processing streams of data and
            integrating PureScript into existing Javascript codebases.
          </Element>

          <Element title="Wargame arena" inlineSubtitle="Spring of 2022">
            As a <strong>Purescipt</strong> freelancer, I worked on the
            development of an interactive UI for a wargame playing platform. I
            solved tasks ranging from bringing mockup UIs to reality using{" "}
            <strong>Halogen</strong> and <strong>CSS</strong>, to implementing
            Firebase-based authentication and interacting with a server using
            websockets.
          </Element>
        </div>
        <div class="container" id="education">
          <div class="header">Education</div>
          <Element
            title="BSC Mathematics"
            subtitle={<IconDate>September 2022 – June 2025</IconDate>}
          >
            University of Groningen
          </Element>
          <Element
            title="Math and Computer Science"
            subtitle={<IconDate>September 2018 – June 2022</IconDate>}
          >
            Ștefan Demetrescu high school
          </Element>
        </div>
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Activities</div>
          <Element
            title="InfoEducație"
            inlineSubtitle="2019 - Present"
            url="https://infoeducatie.ro/"
          >
            InfoEducație (the olympiad of digital creation and innovation) is a
            country-wide programming contest in Romania. The contestants develop
            a project, which then they present to a group of judges across
            multiple phases. The top 5 contestants for each predefined category
            go on to compete in a 24h hackaton. I have competed and{" "}
            <strong>
              won second place at the national phase for 3 years in a row
            </strong>
            . Moreover, I have been part of one the judge committees for the
            national phase ever since 2023.
          </Element>
        </div>
        <div class="spacing" />
      </div>
      <div class="cell">
        <div class="container">
          <div class="header">Skills</div>
          <div id="skills">
            <div class="skill-level">Proeficient</div>
            <div class="skill-contents">
              Purescript – TypeScript – Haskell – NodeJs – Neovim
            </div>
            <div class="skill-level">Intermediate</div>
            <div class="skill-contents">
              Rust – Elm – Nix – Python – Lua – LaTeX – Typst – SQL – Odin
            </div>
            <div class="skill-level">Beginner</div>
            <div class="skill-contents">F# – Lean – Idris – C</div>
          </div>
        </div>
        <div class="spacing" />
      </div>
    </div>
  );
}
