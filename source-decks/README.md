# Source pitch decks

Original presentation files used as source material for project content and images.
The binary files themselves are gitignored (large, not meant for deployment) — this
README is tracked so the mapping survives even if the local copies are lost.

| File | Project (slug) | Used for |
|---|---|---|
| `ctrl4c-pitch-deck.pptx` | `ctrl-4c-campaign` (CTRL 4C) | Full slide-by-slide content on `/projects/ctrl-4c-campaign` — text and images extracted via `python-pptx`, pulling images out of grouped/masked shapes. |
| `refine-la-pitch-deck.key` | `refine-la-zine` (Refine LA) | "What Does LA Mean To You" zine campaign detail — text extracted via `keynote-parser` (unpacks Keynote's IWA format to YAML), images from the bundle's `Data/` folder. |
| `fast-ucla-pitch-deck.pptx` | `fast-ucla-fashion-show` (FAST@UCLA) | Iconaclub × FAST streetwear drop campaign detail — same `python-pptx` extraction approach as the CTRL 4C deck. |
| `live-nation-pitch-deck.pptx` | `live-nation-mutha` (Live Nation) | "This Is MUTHA" festival promo video — a single overview slide with a landscape (`aspect: "video"`) image gallery, unlike the portrait phone-screenshot galleries in the other decks. |

## Re-extracting content

**PowerPoint (.pptx):**
```bash
python3 -m pip install python-pptx
```
Then use `python-pptx` to walk `slide.shapes` recursively (including into `GROUP`
shapes) and pull `a:blip` image relationships via the shape's XML — Canva exports
often put pictures as shape *fills* on grouped/masked shapes rather than plain
Picture objects, so a naive `shape.shape_type == PICTURE` check misses most of them.

**Keynote (.key):**
```bash
python3 -m pip install keynote-parser
keynote-parser unpack "path/to/deck.key" -o unpacked/
```
This converts the binary IWA (protobuf+snappy) files into readable YAML under
`unpacked/Index/`. Slide text lives at nested `text:` keys (lists of strings);
walk the parsed YAML recursively collecting those. Slide order comes from
`Document.iwa.yaml`'s `slideTree.slides` list of identifiers, but those
identifiers map to UUIDs in `Metadata.iwa.yaml`'s `objectUuidMapEntries` rather
than directly to a `Slide-*.iwa.yaml` filename — cross-reference by UUID, or
fall back to opening each `Slide*.iwa.yaml` and reading its content in context
if the mapping is ambiguous. Clean images are in the top-level `Data/` folder
of the unzipped `.key` bundle, already separated from decorative slide
backgrounds.

If updating a project's photos or copy from a revised version of one of these
decks, replace the file here (same name) and re-run the extraction — don't
re-ask for the deck to be re-uploaded if it's already in this folder.
