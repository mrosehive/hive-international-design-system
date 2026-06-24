#!/usr/bin/env python3
"""
Hive Page Kit — HTML → PDF render helper.

Renders a page-kit product HTML to a clean, multi-page US-Letter PDF
using headless Chrome (no margins, backgrounds on). The marketing analog
of the BD doc pipeline.

Usage:
    python3 render.py "path/to/product.html" ["path/to/output.pdf"]

If no output path is given, the PDF is written next to the HTML.
"""
import sys, os, subprocess, urllib.parse

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

def render(html_path, pdf_path=None):
    html_path = os.path.abspath(html_path)
    if not os.path.exists(html_path):
        sys.exit(f"Not found: {html_path}")
    if pdf_path is None:
        pdf_path = os.path.splitext(html_path)[0] + ".pdf"
    if not os.path.exists(CHROME):
        sys.exit("Google Chrome not found at the expected path; install it or edit CHROME in this script.")
    url = "file://" + urllib.parse.quote(html_path)
    subprocess.run([
        CHROME, "--headless=new", "--disable-gpu", "--no-pdf-header-footer",
        "--virtual-time-budget=10000", "--run-all-compositor-stages-before-draw",
        f"--print-to-pdf={pdf_path}", url,
    ], stderr=subprocess.DEVNULL, check=False)
    if os.path.exists(pdf_path):
        print(f"✓ {pdf_path}  ({os.path.getsize(pdf_path)//1024} KB)")
    else:
        sys.exit("Render failed — no PDF produced.")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    render(sys.argv[1], sys.argv[2] if len(sys.argv) > 2 else None)
