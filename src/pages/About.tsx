import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Seo } from "../components/Seo";
import { CvPreview } from "../components/CvPreview";
import { companies, allGames } from "../data/companies";

const skills = [
  "Unity (C#)",
  "3D modeling & asset creation",
  "Mobile game production",
  "Hyper-casual & casual gameplay",
  "iOS & Android release pipelines",
  "App Store & Google Play publishing",
];

export default function About() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <>
      <Seo title="About" description="About Ekrem Cicek, a 3D artist and game artist." path="/about" />

      <section className="container-page py-16 md:py-20">
        <p className="font-display text-sm uppercase tracking-[0.25em] text-accent">About</p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
          Ekrem Cicek
        </h1>

        <div className="mt-8 grid gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Ekrem Cicek is a 3D artist and game artist who has contributed to{" "}
              <span className="text-paper">{allGames.length}+ shipped mobile games</span> across{" "}
              <span className="text-paper">{companies.length} studios</span> —{" "}
              {companies.map((c) => c.name).join(", ")} — released on the App Store and Google
              Play.
            </p>
            <p>
              The work spans hyper-casual and casual mobile titles, from concept through to live
              release, publishing, and store presence, alongside 3D art and Unity assets published
              on the Unity Asset Store, Fab, ArtStation and Sketchfab.
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm uppercase tracking-wide text-muted">Skills</h2>
            <ul className="mt-4 space-y-3">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-line/70 bg-panel/40 px-4 py-3 text-sm text-paper"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 max-w-2xl">
          <CvPreview />
        </div>
      </section>
    </>
  );
}
