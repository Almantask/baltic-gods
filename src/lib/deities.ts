import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface DeityLocation {
  name: string
  lat: number
  lng: number
  description: string
}

export interface Deity {
  slug: string
  name: string
  title: string
  domain: string[]
  culture: string
  image: string
  excerpt: string
  lore: string
  locations: DeityLocation[]
  symbols: string[]
  colors: string[]
}

const contentDir = path.join(process.cwd(), 'src/content/deities')

export function getAllDeities(): Deity[] {
  const files = fs.readdirSync(contentDir)
  return files
    .filter(f => f.endsWith('.mdx'))
    .map(file => {
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf-8')
      const { data } = matter(raw)
      return data as Deity
    })
}

export function getDeityBySlug(slug: string): Deity | null {
  const filePath = path.join(contentDir, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data } = matter(raw)
  return data as Deity
}

export function getAllDeitySlugs(): string[] {
  const files = fs.readdirSync(contentDir)
  return files.filter(f => f.endsWith('.mdx')).map(f => f.replace('.mdx', ''))
}
