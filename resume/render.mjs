// Prints resume/resume.html to public/Oleksandr_Vintoniak.pdf with headless Chrome (or Edge).
// Usage: npm run resume   (set CHROME_PATH if the browser isn't found)
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, readFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const source = resolve(import.meta.dirname, 'resume.html')
const output = resolve(import.meta.dirname, '../public/Oleksandr_Vintoniak.pdf')

const candidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
]

const browser = candidates.find((path) => path && existsSync(path))

if (!browser) {
  console.error('Chrome/Edge not found. Set CHROME_PATH to the browser executable.')
  process.exit(1)
}

// A throwaway profile keeps the call from being handed to an already open browser window.
const profile = mkdtempSync(join(tmpdir(), 'resume-chrome-'))

try {
  execFileSync(browser, [
    '--headless',
    '--no-first-run',
    '--no-default-browser-check',
    `--user-data-dir=${profile}`,
    '--no-pdf-header-footer',
    '--virtual-time-budget=5000',
    `--print-to-pdf=${output}`,
    pathToFileURL(source).href,
  ], { stdio: 'ignore' })
} finally {
  rmSync(profile, { recursive: true, force: true })
}

const pdf = readFileSync(output, 'latin1')
const pages = pdf.match(/\/Type\s*\/Page[^s]/g)?.length ?? 0

console.log(`Resume written to ${output} (${pages} page${pages === 1 ? '' : 's'}, ${Math.round(pdf.length / 1024)} KB)`)
