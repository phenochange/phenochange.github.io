# PhenoChange website

This repository contains the GitHub Pages website for **PhenoChange: A network for monitoring the phenology of forests and savannas**.

Public site:

https://phenochange.github.io/

The site is hosted from the GitHub organisation repository:

`phenochange/phenochange.github.io`

Because this is an organisation/user Pages repository, the site is served from the domain root. Jekyll therefore uses `baseurl: ""`.

## Current version

**Version 5.1**

Version 5.1 includes the interactive nine-site network map, active-camera information, sortable site metadata, WorldClim climate summaries, updated imagery, publications, protocols, people and partner institutions.

See `docs/CHANGELOG.md` for release details and `docs/ROADMAP.md` for planned improvements.

## Repository structure

Main pages in the repository root:

- `index.md` — Home
- `about.md` — About
- `people.md` — People
- `institutions.md` — Partner Institutions
- `publications.md` — Publications
- `data.md` — Data
- `protocols.md` — Protocols
- `contact.md` — Contact

Supporting files:

- `_config.yml` — Jekyll/site configuration
- `_data/navigation.yml` — navigation menu
- `_includes/header.html` — site header
- `_includes/footer.html` — site footer and funding acknowledgement
- `_layouts/default.html` — main layout
- `_layouts/page.html` — internal-page layout
- `assets/css/style.css` — site-wide styling
- `assets/js/site_table.js` — sortable site-metadata table
- `assets/js/network_map.js` — interactive network map and camera diagram
- `assets/data/phenochange_site_metadata.csv` — site-level metadata
- `assets/data/phenochange_active_cameras.csv` — active camera-level metadata
- `assets/documents/` — downloadable protocols/documents
- `assets/images/` — photographs and logos
- `docs/` — maintenance documentation

The website intentionally keeps People, Partner Institutions and Publications directly in their Markdown pages. The older separate YAML data files for those pages are no longer used.

## Editing content

Most routine changes require editing only the relevant root-level Markdown file.

Examples:
- About text → `about.md`
- People → `people.md`
- Partner institutions → `institutions.md`
- Publications → `publications.md`
- Data-page text → `data.md`
- Protocols → `protocols.md`
- Navigation → `_data/navigation.yml`
- Footer/funding → `_includes/footer.html`
- Styling → `assets/css/style.css`

## Data and map

### Site metadata

The Data-page table reads:

`assets/data/phenochange_site_metadata.csv`

through:

`assets/js/site_table.js`

Update the CSV rather than hard-coding table values in `data.md`.

The site coordinates represent mean latitude and longitude for cameras with `Status = ON`.

MAT and MAP currently use WorldClim v2.1 BIO1 and BIO12 (1970–2000, 2.5 arc-minute resolution).

### Active cameras

The interactive map reads:

`assets/data/phenochange_active_cameras.csv`

through:

`assets/js/network_map.js`

The camera CSV should contain only cameras with `Status = ON`.

The map currently shows the nine core PhenoChange sites. Selecting a site displays a schematic radial diagram of its active cameras beneath the map.

### Map sources

The Data-page map uses:
- NASA Blue Marble Next Generation as the global raster background;
- Natural Earth country boundaries;
- Leaflet for interaction.

Keep the map attribution on the Data page when modifying the map.

## Images

Image folders include:

- `assets/images/people/`
- `assets/images/about/`
- `assets/images/home/`
- `assets/images/hero/`
- `assets/images/project/`
- `assets/images/protocols/`
- `assets/images/logos/`

Recommended conventions:
- lowercase filenames;
- underscores instead of spaces;
- avoid accented characters;
- `.jpg` for photographs where practical;
- `.png`/`.svg` for logos where appropriate.

Use Jekyll's `relative_url` filter for internal paths where possible.

## Adding a publication

Add the new publication near the top of `publications.md`.

Include:
- exact title;
- complete author list;
- journal;
- year;
- article/DOI link.

## Adding a person

Add the person directly to the appropriate section of `people.md`:
- Coordinators
- Site Leaders
- PhenoChange Collaborators

Place their portrait in `assets/images/people/`.

## Adding a partner institution

Add the institution directly to `institutions.md` using the existing card structure and place its logo in `assets/images/logos/`.

## Protocols

Downloadable protocols are stored in:

`assets/documents/`

Current field-camera protocol:

`assets/documents/PhenoChange_Phenocam_Protocol_v1.pdf`

## Project documentation

The `docs/` folder contains:

- `PROJECT_MANUAL.md` — architecture and maintenance conventions
- `CHANGELOG.md` — completed release changes
- `ROADMAP.md` — planned future work

The `docs/` folder is excluded from the public Jekyll build.

## Publishing with GitHub Pages

The site deploys from the `main` branch and repository root.

GitHub Pages rebuilds after committed changes.

For a local preview, with Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

http://localhost:4000/

## Known current limitation

The camera schematic appears below the map rather than directly on it. Moving the schematic expansion onto the map is recorded as a future improvement in `docs/ROADMAP.md`.

## Licensing

The repository includes an MIT licence for website software. Scientific photographs, logos, documents, data and other project or third-party materials may have separate ownership or licensing conditions and should not automatically be assumed to be covered by the software licence.
