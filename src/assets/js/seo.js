export const SITE_URL = 'https://oleksandrvintoniak.com'
export const SITE_NAME = 'Oleksandr Vintoniak'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

export const HEAD_START = '<!--seo:start-->'
export const HEAD_END = '<!--seo:end-->'

const PERSON = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Oleksandr Vintoniak',
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  jobTitle: 'Front-end Developer',
  email: 'mailto:vintoniakoleksandr12@gmail.com',
  description:
    'Freelance front-end developer specializing in Vue.js and Nuxt.js, with 5+ years of commercial experience and 70+ delivered projects.',
  knowsAbout: [
    'Vue.js',
    'Nuxt.js',
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Sass',
    'Tailwind CSS',
    'Pinia',
    'Vite',
  ],
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'UA',
  },
  sameAs: [
    'https://www.upwork.com/freelancers/oleksandrvintoniak',
    'https://www.linkedin.com/in/oleksandr-vintoniak-091b23230/',
    'https://github.com/oleksandr-vt',
  ],
}

export const pages = {
  home: {
    file: 'index.html',
    path: '/',
    title: 'Oleksandr Vintoniak | Front-end Developer (Vue & Nuxt)',
    description:
      'Front-end developer with 5+ years of freelance experience and 70+ projects. Specialized in Vue, Nuxt, HTML, CSS & JavaScript. Open to collaborations.',
    schema: [
      PERSON,
      {
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        name: 'Oleksandr Vintoniak | Front-end Developer',
        url: `${SITE_URL}/`,
        mainEntity: { '@id': `${SITE_URL}/#person` },
      },
    ],
  },
  works: {
    file: 'works.html',
    path: '/works',
    title: 'Works | Oleksandr Vintoniak, Front-end Developer',
    description:
      'Selected front-end projects by Oleksandr Vintoniak — Vue, Nuxt, TypeScript and JavaScript builds ranging from crypto exchanges and job boards to Kubernetes dashboards.',
  },
  notFound: {
    file: '404.html',
    path: null,
    title: 'Page not found | Oleksandr Vintoniak',
    description: 'This page does not exist. Head back to the homepage.',
    noindex: true,
  },
}

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

export const buildHead = (page) => {
  const url = page.path ? `${SITE_URL}${page.path}` : `${SITE_URL}/`

  const tags = [
    `<title>${escapeAttr(page.title)}</title>`,
    `<meta name="description" content="${escapeAttr(page.description)}">`,
    `<meta name="author" content="${SITE_NAME}">`,
  ]

  if (page.noindex) {
    tags.push('<meta name="robots" content="noindex, follow">')
  } else {
    tags.push('<meta name="robots" content="index, follow, max-image-preview:large">')
    tags.push(`<link rel="canonical" href="${url}">`)
  }

  tags.push(
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="${SITE_NAME}">`,
    `<meta property="og:locale" content="en_US">`,
    `<meta property="og:title" content="${escapeAttr(page.title)}">`,
    `<meta property="og:description" content="${escapeAttr(page.description)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:image" content="${OG_IMAGE}">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta property="og:image:alt" content="Oleksandr Vintoniak — front-end developer who gets the job done">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}">`,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}">`,
    `<meta name="twitter:image" content="${OG_IMAGE}">`
  )

  if (page.schema) {
    const schema = page.schema.map((item) =>
      item['@type'] === 'Person' ? { ...item, '@id': `${SITE_URL}/#person` } : item
    )
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(schema.length === 1 ? schema[0] : schema)}</script>`
    )
  }

  return `${HEAD_START}\n  ${tags.join('\n  ')}\n  ${HEAD_END}`
}
