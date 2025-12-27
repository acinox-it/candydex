import { Head, Link } from '@inertiajs/react'
import { Pokemon, Navigation } from '../types/pokemon'

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

export default function Details(props: { pokemon: Pokemon, navigation: Navigation }) {
  const { pokemon, navigation } = props

  return (
    <>
      <Head title={pokemon.name} />

      <div className="candy-shell">
        <header className="candy-header">
          <h1 className="candy-title">{pokemon.name}</h1>
        </header>

        <main className="candy-detail">
          <section className={`detail-card candy-bg-${pokemon.types.primaryKey}`}>
            <div className="detail-hero">
              <div className="detail-spriteWrap">
                <img
                  className="detail-sprite"
                  src={`/img/${pokemon.spriteUrl}`}
                  alt={pokemon.name}
                  loading="eager"
                />
              </div>

              <div className="detail-meta">
                <div className="type-row">
                  <span className={`candy-badge candy-type-${pokemon.types.primaryKey}`}>
                    <span className="candy-emoji">{TYPE_EMOJIS[pokemon.types.primary] || '❓'}</span>
                    {pokemon.types.primary}
                  </span>
                  {pokemon.types.secondary ? (
                    <span className={`candy-badge candy-type-${pokemon.types.secondaryKey}`}>
                      <span className="candy-emoji">{TYPE_EMOJIS[pokemon.types.secondary] || '❓'}</span>
                      {pokemon.types.secondary}
                    </span>
                  ) : null}
                </div>

                <div className="stat-grid">
                  <div className="stat">
                    <div className="stat-header">
                      <span className="stat-label">HP</span>
                      <span className="stat-value">{pokemon.stats.hp}</span>
                    </div>
                    <div className="stat-bar">
                      <div className="stat-fill" style={{ width: `${Math.min((pokemon.stats.hp / 150) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-header">
                      <span className="stat-label">Attack</span>
                      <span className="stat-value">{pokemon.stats.attack}</span>
                    </div>
                    <div className="stat-bar">
                      <div className="stat-fill" style={{ width: `${Math.min((pokemon.stats.attack / 150) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-header">
                      <span className="stat-label">Defense</span>
                      <span className="stat-value">{pokemon.stats.defense}</span>
                    </div>
                    <div className="stat-bar">
                      <div className="stat-fill" style={{ width: `${Math.min((pokemon.stats.defense / 150) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                  <div className="stat">
                    <div className="stat-header">
                      <span className="stat-label">Speed</span>
                      <span className="stat-value">{pokemon.stats.speed}</span>
                    </div>
                    <div className="stat-bar">
                      <div className="stat-fill" style={{ width: `${Math.min((pokemon.stats.speed / 150) * 100, 100)}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="candy-footer">
          <div className="nav-buttons">
            {navigation.prev ? (
              <Link href={`/pokemon/${encodeURIComponent(navigation.prev.name)}`} className="candy-back nav-prev">
                ← {navigation.prev.name}
              </Link>
            ) : <div />}
            
            <Link href="/" className="candy-back nav-home">
              Menu
            </Link>

            {navigation.next ? (
              <Link href={`/pokemon/${encodeURIComponent(navigation.next.name)}`} className="candy-back nav-next">
                {navigation.next.name} →
              </Link>
            ) : <div />}
          </div>
        </footer>
      </div>
    </>
  )
}
