# PhenoChange website

This repository contains the GitHub Pages website for **PhenoChange: A network for monitoring the phenology of forests and savannas**.

Public site:

https://phenochange.github.io/

The site is hosted from the GitHub organisation repository:

`phenochange/phenochange.github.io`

Because this is an organisation Pages repository, the website is served from the domain root and Jekyll uses `baseurl: ""`.

## Current website

The current website includes:

- Home
- About
- People
- Partner Institutions
- Publications
- Data
- Protocols
- Contact
- an interactive nine-site network map
- active-camera information
- sortable site metadata
- WorldClim climate summaries
- downloadable field-camera protocol

See `docs/CHANGELOG.md` for completed changes and `docs/ROADMAP.md` for planned improvements.

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

People, Partner Institutions and Publications are maintained directly in their Markdown pages. Separate YAML data files for those pages are no longer used.

## Editing content

Most routine changes require editing only the relevant root-level Markdown file.

Examples:

- About text → `about.md`
- People and affiliations → `people.md`
- Partner institutions → `institutions.md`
- Publications → `publications.md`
- Data-page text → `data.md`
- Protocols → `protocols.md`
- Navigation → `_data/navigation.yml`
- Footer/funding → `_includes/footer.html`
- Styling → `assets/css/style.css`

## Partner institutions and affiliations

Partner institutions are maintained directly in `institutions.md`.

Current institutional naming includes:

- **Instituto Tecnológico Vale (ITV)**, Belém, PA, Brazil
- **Biodiversity Research Centre, Namibia University of Science and Technology**, Namibia
- **Ongava Research Centre**, Namibia

The ITV logo is stored as:

`assets/images/logos/itv-share.png`

The Biodiversity Research Centre logo is stored as:

`assets/images/logos/NUST_BRC.png`

Ongava Research Centre links to:

https://orc.eco/

People affiliations should remain consistent with the institution names used on the Partner Institutions page. Desirée Ramos is affiliated with Instituto Tecnológico Vale (ITV), Brazil.

## Data and map

### Site metadata

The Data-page table reads:

`assets/data/phenochange_site_metadata.csv`

through:

`assets/js/site_table.js`

Update the CSV rather than hard-coding table values in `data.md`.

Site coordinates represent mean latitude and longitude for cameras with `Status = ON`.

MAT and MAP use WorldClim v2.1 BIO1 and BIO12 (1970–2000 climatology; 2.5 arc-minute resolution).

### Active cameras

The interactive map reads:

`assets/data/phenochange_active_cameras.csv`

through:

`assets/js/network_map.js`

The camera CSV contains cameras with `Status = ON`.

The map currently shows the nine core PhenoChange sites. Selecting a site displays a schematic radial diagram of its active cameras beneath the map.

### Map sources

The Data-page map uses:

- NASA Blue Marble Next Generation as the global raster background
- Natural Earth country boundaries
- Leaflet for interaction

Keep the map attribution on the Data page when modifying the map.

## Homepage

The homepage is organised to move from the biological motivation to observations, methods, disturbance, geographic coverage and people:

1. Watching seasonal change
2. The power of repeat photography
3. From field cameras to phenological insight
4. Capturing rapid environmental change as it happens
5. A growing monitoring network across Africa and South America
6. The people behind PhenoChange
7. Funding

The homepage uses a reduced-width PhenoChange logo panel in the hero. The overriding rule is currently appended near the bottom of `assets/css/style.css`.

The homepage does not contain the obsolete static network map. Visitors are directed to the interactive map on the Data page.

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

- lowercase filenames where practical
- underscores instead of spaces
- avoid accented characters in filenames
- `.jpg` for photographs where practical
- `.png` or `.svg` for logos where appropriate

Use Jekyll's `relative_url` filter for internal paths where possible.

## Adding a publication

Add the new publication near the top of `publications.md`.

Include:

- exact title
- complete author list
- journal
- year
- article/DOI link

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
- `CHANGELOG.md` — completed changes
- `ROADMAP.md` — planned future work

The `docs/` folder is excluded from the public Jekyll build.

## Publishing with GitHub Pages

The production site is hosted from:

`phenochange/phenochange.github.io`

and published at:

https://phenochange.github.io/

For this organisation Pages repository, `_config.yml` should contain:

```yaml
url: "https://phenochange.github.io"
baseurl: ""
repository: phenochange/phenochange.github.io
```

GitHub Pages rebuilds after committed changes to the publishing branch.

For a local preview, with Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

http://localhost:4000/

## Known current limitation

The camera schematic appears below the map rather than directly on it. Moving the schematic expansion onto the map remains a possible future improvement in `docs/ROADMAP.md`.

## Licensing

The repository includes an MIT licence for website software. Scientific photographs, logos, documents, data and other project or third-party materials may have separate ownership or licensing conditions and should not automatically be assumed to be covered by the software licence.
