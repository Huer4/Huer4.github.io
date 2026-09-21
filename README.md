# Jonathan Cats — Engineering Portfolio

A static GitHub Pages website featuring six engineering projects. No dependencies, build step, external fonts, analytics, or JavaScript are required.

## Publishing

Publish this folder as the root of `Huer4.github.io`. In repository Settings → Pages, choose **Deploy from a branch**, **main**, **/ (root)**, and save. The intended URL is https://huer4.github.io/.

## Editing

`index.html` is the homepage. Each project has a separate HTML page. `styles.css` contains shared responsive styles, and `assets/` contains images and the favicon. Use relative URLs so the site also works under a repository subpath.

## Content provenance

The six project narratives are based on the supplied Portfolio Stuff folder. Assignment documents were treated as context, not evidence that every requirement was completed. The site does not claim measured performance or physical validation.

- Igniter: saved temperature, Mach, and Bartz-coefficient plots; methods and inputs from torch_thermals.py. The model was not rerun.
- Wheel rim: original final render and half-section image.
- Impeller: original straight, curved, splitter, and section renders.
- Flyer: JPEG previews extracted from the original assembly and exploded-assembly CAD files. These are low-resolution CAD previews, not assignment illustrations or fabricated renders.
- Stagnation heat flux: ucah_csv_results plots and run_summary.json. Figures are modeled values, not experimental measurements.
- TPS sizer: chart transcribed from axial_example_report.txt (the four-station temperature example, not the separate 100-station flux example). Results are explicitly labeled demonstrations.

Raw homework prompts, unrelated files, source code with local paths, and CAD source binaries are not published. Website copy can be updated as higher-resolution flyer renders and verified project results become available.

## CAD library update

The flyer now uses the supplied full-size assembly renders. Its base and valve PDFs are explicitly a partial selection. `cad-library.html` pairs 19 model entries with drawings, including gyroscope, HW8/HW9, HW5/HW6, and flyer parts. Native files are preserved; assembly ZIPs include the accompanying PRT files from their source folders. Cross-file revision consistency has not been independently checked in CAD software.
