# PhenoChange website

This repository contains the GitHub Pages website for **PhenoChange: A network for monitoring the phenology of forests and savannas**.

The public site is hosted at:

https://kyledexter.github.io/PhenoChange/

## Repository structure

The website is intentionally kept simple so that individual pages can be edited directly as Markdown files.

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

- `_config.yml` — Jekyll and site-wide configuration
- `_data/navigation.yml` — navigation menu
- `_includes/header.html` — site header
- `_includes/footer.html` — site footer and funding acknowledgement
- `_layouts/default.html` — main site layout
- `_layouts/page.html` — internal page layout
- `assets/css/style.css` — visual styling
- `assets/js/site_table.js` — sortable site-metadata table
- `assets/data/phenochange_site_metadata.csv` — site metadata displayed on the Data page
- `assets/documents/` — downloadable documents and protocols
- `assets/images/` — website images and logos
- `docs/` — project documentation for maintainers

## Editing the website

Most content can be updated by editing the relevant `.md` file in the repository root.

For example:

- To change the About page, edit `about.md`.
- To add or update a person, edit `people.md`.
- To add or update a partner institution, edit `institutions.md`.
- To add a publication, edit `publications.md`.
- To change Data-page text, edit `data.md`.
- To change the navigation menu, edit `_data/navigation.yml`.
- To change colours, spacing or card layouts, edit `assets/css/style.css`.
- To change footer text or funding acknowledgements, edit `_includes/footer.html`.

## Site metadata

The site metadata displayed on the Data page are stored in:

`assets/data/phenochange_site_metadata.csv`

The Data page loads this CSV using:

`assets/js/site_table.js`

When site metadata change, update the CSV rather than manually rewriting the table in `data.md`.

## Adding images

Current image folders include:

- `assets/images/people/`
- `assets/images/about/`
- `assets/images/home/`
- `assets/images/hero/`
- `assets/images/project/`
- `assets/images/protocols/`
- `assets/images/logos/`

Recommended filename conventions:

- use lowercase filenames;
- avoid spaces and accented characters;
- use underscores to separate words;
- use `.jpg` for photographs where practical;
- preserve `.png` or `.svg` for logos where transparency or vector graphics are useful.

Example:

`assets/images/people/kyle_dexter.jpg`

When referencing internal assets in Markdown or HTML, use Jekyll's `relative_url` filter where possible so links work correctly under the `/PhenoChange/` GitHub Pages base path.

## Adding a publication

Add a new publication card near the top of `publications.md` so that the newest publication appears first.

Include:

- title
- complete author list
- journal
- year
- link to the published article

## Adding a person

Add the person directly to the appropriate section of `people.md`:

- Coordinators
- Site Leaders
- PhenoChange Collaborators

Use the existing person-card structure as a template.

## Adding a partner institution

Add the institution directly to `institutions.md` using the existing institution-card structure.

Place its logo in `assets/images/logos/`.

## Protocols

Downloadable protocols are stored in:

`assets/documents/`

The current field-camera protocol is:

`assets/documents/PhenoChange_Phenocam_Protocol_v1.pdf`

## Project documentation

The `docs/` folder contains working documentation for maintaining and developing the website, including:

- `PROJECT_MANUAL.md`
- `CHANGELOG.md`
- `ROADMAP.md`

Additional maintenance and citation documentation can be added there as the website develops.

The `docs/` folder is excluded from the generated public website via `_config.yml`.

## Publishing with GitHub Pages

The repository is configured to deploy from the `main` branch and repository root.

In GitHub:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select `main`.
4. Select `/ (root)`.
5. Save.

GitHub Pages will rebuild the website after changes are committed.

## Local preview

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open:

http://localhost:4000/PhenoChange/

## Versioning

Major website changes should be recorded in:

`docs/CHANGELOG.md`

Planned work and outstanding priorities should be maintained in:

`docs/ROADMAP.md`

## Licensing

The repository currently includes an MIT licence for the website software. Scientific photographs, logos, documents, data and other third-party or project materials may have separate ownership or licensing conditions and should not automatically be assumed to be covered by the software licence.
