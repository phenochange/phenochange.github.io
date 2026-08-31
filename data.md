---
layout: page
title: Data
permalink: /data/
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">

# Data

PhenoChange is building a coordinated record of canopy and ground-layer dynamics across tropical forests and savannas.

<div class="data-grid" markdown="1">

<article markdown="1">

<span class="feature-number">01</span>

## Camera observations

High-frequency repeat photographs document canopy condition and seasonal transitions at each monitoring site.

</article>

<article markdown="1">

<span class="feature-number">02</span>

## Derived time series

Image-based colour indices can quantify greenness and support estimation of growing-season transitions.

</article>

<article markdown="1">

<span class="feature-number">03</span>

## Additional data

All phenocameras are sited within permanent vegetation monitoring plots that are part of [SEOSAW](https://seosaw.africa/) and [RedeC2](https://redec2.net/) and other networks. Data are available on stand structure, species composition, soils and other environmental factors.

</article>

</div>

---

# PhenoChange Network

The map shows the nine core PhenoChange sites. Hover over a site to see its name, country and number of active cameras. Click a site to view the active cameras operating there.

<div
  id="phenochange-map"
  class="phenochange-map"
  data-site-csv="{{ '/assets/data/phenochange_site_metadata.csv' | relative_url }}?v=5.1.1"
  data-camera-csv="{{ '/assets/data/phenochange_active_cameras.csv' | relative_url }}?v=5.1.1"
></div>

<div id="camera-diagram" class="camera-diagram" hidden></div>

<p class="map-attribution">
  <strong>Map background:</strong> NASA Blue Marble Next Generation, derived from MODIS observations and processed to provide cloud-free global true-colour imagery. Country boundaries: Natural Earth.
</p>

---

# Site Metadata

The table below summarises the core PhenoChange monitoring sites. Click any column heading to sort the table.

<div class="table-download">
  <a class="button" href="{{ '/assets/data/phenochange_site_metadata.csv' | relative_url }}" download>
    Download Site Metadata (CSV)
  </a>
</div>

<div
  id="site-metadata-table"
  class="site-metadata-table"
  data-csv-url="{{ '/assets/data/phenochange_site_metadata.csv' | relative_url }}?v=5.1.1"
>
  <p>Loading site metadata...</p>
</div>

<p class="data-note"><em>Latitude and longitude represent the mean coordinates of active (Status = ON) cameras at each core PhenoChange site.</em></p>

<p class="data-note"><em>Mean annual temperature (MAT) and mean annual precipitation (MAP) are derived from WorldClim v2.1 bioclimatic variables BIO1 and BIO12 (1970–2000 climatology; 2.5 arc-minute resolution). Elevation values are derived from field camera metadata, with Kilwa represented by the site mean elevation.</em></p>

---

# Data Access

We are currently developing a PhenoChange Data Sharing Agreement, which will be made available here soon.

In the meantime, researchers interested in accessing PhenoChange data are encouraged to contact one of the three network coordinators.

<a class="button" href="{{ '/contact/' | relative_url }}">Contact the Coordinators</a>

---

# Contributing Data

If you would like to establish a new PhenoChange monitoring site or contribute data to the network, please contact one of the three network coordinators to discuss opportunities for collaboration.

<a class="button" href="{{ '/contact/' | relative_url }}">Contact the Coordinators</a>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="{{ '/assets/js/network_map.js' | relative_url }}?v=5.1.1"></script>
<script src="{{ '/assets/js/site_table.js' | relative_url }}?v=5.1.1"></script>
