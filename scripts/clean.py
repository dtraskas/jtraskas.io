#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# dependencies = []
# ///
"""Clean build artifacts and generated files.

Usage:
    uv run scripts/clean.py          # remove build outputs (.next, out, coverage, public/rss)
    uv run scripts/clean.py --all    # also remove node_modules
"""

import argparse
import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

BUILD_ARTIFACTS = [".next", "out", "coverage", "public/rss"]
DEEP_ARTIFACTS = ["node_modules"]


def remove(rel_path: str) -> None:
    path = ROOT / rel_path
    if path.is_dir():
        shutil.rmtree(path)
        print(f"removed {rel_path}/")
    elif path.exists():
        path.unlink()
        print(f"removed {rel_path}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--all", action="store_true", help="also remove node_modules"
    )
    args = parser.parse_args()

    targets = BUILD_ARTIFACTS + (DEEP_ARTIFACTS if args.all else [])
    for target in targets:
        remove(target)

    for ds_store in ROOT.rglob(".DS_Store"):
        if "node_modules" not in ds_store.parts:
            ds_store.unlink()
            print(f"removed {ds_store.relative_to(ROOT)}")

    print("Clean complete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
