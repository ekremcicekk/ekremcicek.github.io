import { site } from "../data/site";
import { asset } from "../lib/asset";

export function CvPreview() {
  const cvUrl = asset(site.cvUrl);

  return (
    <div id="cv" className="scroll-mt-24">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-sm uppercase tracking-wide text-muted">Resume</h2>
        <div className="flex gap-4 text-sm">
          <a
            href={cvUrl}
            target="_blank"
            rel="noreferrer"
            className="text-muted underline decoration-line underline-offset-4 hover:text-accent"
          >
            Open in new tab
          </a>
          <a
            href={cvUrl}
            download
            className="text-muted underline decoration-line underline-offset-4 hover:text-accent"
          >
            Download PDF
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-line/70 bg-panel/40">
        <object
          data={`${cvUrl}#toolbar=0`}
          type="application/pdf"
          className="aspect-[1/1.414] w-full"
          aria-label="Ekrem Cicek CV"
        >
          <div className="flex aspect-[1/1.414] w-full flex-col items-center justify-center gap-4 p-8 text-center text-sm text-muted">
            <p>Your browser can't preview PDFs inline.</p>
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-paper px-6 py-3 font-display text-sm font-medium text-ink transition-colors hover:bg-accent"
            >
              Open CV in a new tab
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
