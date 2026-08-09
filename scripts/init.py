#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# dependencies = []
# ///
"""Initialise the project: verify prerequisites and install npm dependencies.

Usage:
    uv run scripts/init.py
"""

import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def run(cmd: list) -> None:
    print(f"$ {' '.join(cmd)}")
    subprocess.run(cmd, cwd=ROOT, check=True)


def main() -> int:
    for tool in ("node", "npm"):
        if shutil.which(tool) is None:
            print(f"error: '{tool}' not found on PATH — install Node.js first", file=sys.stderr)
            return 1
        version = subprocess.run(
            [tool, "--version"], capture_output=True, text=True, check=True
        ).stdout.strip()
        print(f"{tool} {version}")

    if (ROOT / "package-lock.json").exists():
        run(["npm", "ci"])
    else:
        run(["npm", "install"])

    print("Initialisation complete.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
