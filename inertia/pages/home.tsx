import { Head, Link, router } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import { Pokemon, Filters } from '../types/pokemon'

const TYPE_EMOJIS: Record<string, string> = {
  Fire: '🔥',
  Water: '💧',
  Grass: '🍃',
  Electric: '⚡',
  Poison: '☠️',
  Flying: '🪽',
  Bug: '🐛',
  Normal: '⏺️',
  Fighting: '👊',
  Psychic: '👁️',
  Dragon: '🐲',
  Ground: '⛰️',
  Rock: '🪨',
  Ghost: '👻',
  Ice: '❄️',
  Steel: '🔩',
  Fairy: '🧚',
}

export default function Home(props: { pokemons: Pokemon[], filters: Filters }) {
  const [search, setSearch] = useState(props.filters.search || '')
  const [type, setType] = useState(props.filters.type || '')

  // Debounce search to avoid too many requests
  useEffect(() => {
    const timer = setTimeout(() => {
      router.get('/', { search, type }, { preserveState: true, replace: true, preserveScroll: true })
    }, 300)

    return () => clearTimeout(timer)
  }, [search, type])

  return (
    <>
      <Head title="Home" />

      <div className="candy-shell">
        <header className="candy-header">
          <h1 className="candy-title">CandyDex</h1>
          
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search a Pokemon..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="type-select"
            >
              <option value="">All Types</option>
              {Object.keys(TYPE_EMOJIS).map(t => (
                <option key={t} value={t}>{TYPE_EMOJIS[t]} {t}</option>
              ))}
            </select>
          </div>
        </header>

        <main className="candy-grid" aria-label="Pokemon List">
          {props.pokemons.map((p) => (
            <Link key={p.id} href={`/pokemon/${encodeURIComponent(p.name)}`} className={`card candy-bg-${p.types.primaryKey}`}>
              <div className="card-top">
                <div className="card-info">
                  <span className="card-id">#{String(p.id).padStart(3, '0')}</span>
                  <h2 className="card-name">{p.name}</h2>
                  <div className="type-row">
                    <span className={`candy-badge candy-type-${p.types.primaryKey}`}>
                      <span className="candy-emoji">{TYPE_EMOJIS[p.types.primary] || '❓'}</span>
                      {p.types.primary}
                    </span>
                    {p.types.secondary ? (
                      <span className={`candy-badge candy-type-${p.types.secondaryKey}`}>
                        <span className="candy-emoji">{TYPE_EMOJIS[p.types.secondary] || '❓'}</span>
                        {p.types.secondary}
                      </span>
                    ) : null}
                  </div>
                </div>

                <div className="sprite-wrap" aria-hidden="true">
                  <img className="sprite" src={`/img/${p.spriteUrl}`} alt="" loading="lazy" />
                </div>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </>
  )
}
