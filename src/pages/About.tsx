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

      <section className="container-page py-6 md:py-8">
        <h1 className="font-display text-2xl font-bold tracking-tight text-paper md:text-3xl">
          About
        </h1>

        <div className="mt-6 grid gap-10 md:grid-cols-[2fr_1fr]">
          <p className="text-base leading-relaxed text-muted">
            {allGames.length}+ shipped mobile games across {companies.length} studios —{" "}
            {companies.map((c) => c.name).join(", ")} — plus 3D art and Unity assets published on
            the Unity Asset Store, Fab, ArtStation and Sketchfab.
          </p>

          <div>
            <h2 className="font-display text-sm font-semibold text-paper">Skills</h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-md border border-line/70 bg-panel/40 px-3 py-1.5 text-xs text-paper"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 max-w-2xl">
          <CvPreview />
        </div>
      </section>
    </>
  );
}
