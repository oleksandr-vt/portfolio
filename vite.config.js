import { fileURLToPath, URL } from 'node:url'
import { writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { pages, buildHead, SITE_URL, HEAD_START, HEAD_END } from './src/assets/js/seo.js'

const HEAD_BLOCK = new RegExp(`${HEAD_START}[\\s\\S]*?${HEAD_END}`)

const PRELOADED_FONTS = ['Inconsolata-ExtraBold', 'Inconsolata-Medium', 'Inconsolata-Regular']

const buildFontPreloads = (bundle, base) =>
  PRELOADED_FONTS.map((name) => Object.keys(bundle).find((file) => file.includes(name) && file.endsWith('.woff2')))
    .filter(Boolean)
    .map((file) => `<link rel="preload" as="font" type="font/woff2" crossorigin href="${base}${file}">`)
    .join('\n  ')

const buildSitemap = (lastmod) => {
  const urls = Object.values(pages)
    .filter((page) => page.path && !page.noindex)
    .map(
      (page) =>
        `  <url>\n    <loc>${SITE_URL}${page.path === '/' ? '/' : page.path}</loc>\n` +
        `    <lastmod>${lastmod}</lastmod>\n` +
        `    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>\n  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const staticRoutes = () => ({
  name: 'portfolio-static-routes',

  transformIndexHtml: {
    order: 'pre',
    handler: (html) => html.replace(HEAD_BLOCK, buildHead(pages.home)),
  },

  async writeBundle(options, bundle) {
    const outDir = options.dir ?? resolve(process.cwd(), 'dist')
    const source = bundle['index.html']?.source

    if (typeof source !== 'string') {
      this.error('portfolio-static-routes: index.html was not found in the bundle')
    }

    const preloads = buildFontPreloads(bundle, this.environment?.config?.base ?? '/')
    const indexHtml = preloads ? source.replace('<head>', `<head>\n  ${preloads}`) : source

    const written = await Promise.all(
      Object.values(pages).map(async (page) => {
        await writeFile(resolve(outDir, page.file), indexHtml.replace(HEAD_BLOCK, buildHead(page)), 'utf8')
        return page.file
      })
    )

    const lastmod = new Date().toISOString().slice(0, 10)
    await writeFile(resolve(outDir, 'sitemap.xml'), buildSitemap(lastmod), 'utf8')

    this.info(`emitted ${[...written, 'sitemap.xml'].join(', ')}`)
  },
})

export default defineConfig({
  plugins: [vue(), staticRoutes()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
