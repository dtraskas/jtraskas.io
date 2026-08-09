#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.9"
# dependencies = []
# ///
"""Start the site locally with the Next.js dev server.

Installs npm dependencies first if node_modules is missing.

Usage:
    uv run scripts/start.py              # http://localhost:3000
    uv run scripts/start.py --port 4000
"""

import argparse
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, default=3000, help="port to serve on")
    args = parser.parse_args()

    if not (ROOT / "node_modules").is_dir():
        print("node_modules missing — running initialisation first")
        subprocess.run([sys.executable, str(ROOT / "scripts" / "init.py")], check=True)

    try:
        subprocess.run(
            ["npm", "run", "dev", "--", "--port", str(args.port)], cwd=ROOT, check=True
        )
    except KeyboardInterrupt:
        pass
    return 0


if __name__ == "__main__":
    sys.exit(main())
