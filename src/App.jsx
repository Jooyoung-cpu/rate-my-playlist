import { useState } from 'react'
import './index.css'

const PLAYLISTS = [
  {
    id: 1,
    title: 'Midnight Drive Vol. 3',
    curator: 'neonwave',
    genre: 'Synthwave',
    cover: 'https://picsum.photos/seed/midnight/300/300',
    rating: 4.7,
    ratingCount: 128,
    description: 'The perfect soundtrack for late-night cruising. Heavy on atmosphere, light on brakes.',
    tracks: [
      { num: 1, title: 'Neon Streets', artist: 'Kavinsky', duration: '4:12' },
      { num: 2, title: 'Nightcall', artist: 'Kavinsky', duration: '4:17' },
      { num: 3, title: 'A Real Hero', artist: 'College & Electric Youth', duration: '4:28' },
      { num: 4, title: 'Laser Tag', artist: 'Chromatics', duration: '5:01' },
      { num: 5, title: 'Shadow', artist: 'Chromatics', duration: '3:55' },
      { num: 6, title: 'Running Up That Hill', artist: 'Chromatics', duration: '5:18' },
      { num: 7, title: 'Into the Night', artist: 'FM-84', duration: '4:44' },
      { num: 8, title: 'Goodbye Casual', artist: 'FM-84', duration: '3:38' },
    ],
    comments: [
      { user: 'vaporlord', text: 'Absolute banger from start to finish. 5 stars easy.', stars: 5 },
      { user: 'retro_queen', text: 'Track 3 hits different at 2am on an empty highway.', stars: 5 },
      { user: 'basshead99', text: 'Good vibes but could use more variety.', stars: 4 },
    ],
  },
  {
    id: 2,
    title: 'Sunday Morning Coffee',
    curator: 'beanscene',
    genre: 'Lo-fi / Jazz',
    cover: 'https://picsum.photos/seed/coffee/300/300',
    rating: 4.4,
    ratingCount: 94,
    description: 'Warm, slow, and slightly grainy. Like your grandma\'s record player but better.',
    tracks: [
      { num: 1, title: 'Strawberry Fields', artist: 'Lofi Fruits', duration: '3:22' },
      { num: 2, title: 'Cafe Racer', artist: 'Philanthrope', duration: '2:58' },
      { num: 3, title: 'Petals', artist: 'Idealism', duration: '3:11' },
      { num: 4, title: 'Warm Nights', artist: 'potsu', duration: '2:44' },
      { num: 5, title: 'i miss you', artist: 'Gnash', duration: '3:05' },
      { num: 6, title: 'Drift', artist: 'Arbour', duration: '4:01' },
    ],
    comments: [
      { user: 'jazzcat', text: 'Perfect study playlist. Never gets old.', stars: 5 },
      { user: 'morningperson', text: 'Brewed a pot of Ethiopian pour-over and just vibed.', stars: 4 },
    ],
  },
  {
    id: 3,
    title: 'Main Character Energy',
    curator: 'cinemagirl',
    genre: 'Indie Pop',
    cover: 'https://picsum.photos/seed/mainchar/300/300',
    rating: 4.1,
    ratingCount: 67,
    description: 'For walking down the street like you\'re in a movie. Headphones required.',
    tracks: [
      { num: 1, title: 'Video Games', artist: 'Lana Del Rey', duration: '4:39' },
      { num: 2, title: 'Motion Sickness', artist: 'Phoebe Bridgers', duration: '3:35' },
      { num: 3, title: 'Ribs', artist: 'Lorde', duration: '4:03' },
      { num: 4, title: 'Falling', artist: 'Florence + The Machine', duration: '3:49' },
      { num: 5, title: 'Youth', artist: 'Daughter', duration: '4:14' },
      { num: 6, title: 'The Wire', artist: 'Haim', duration: '3:22' },
      { num: 7, title: 'Breathe Me', artist: 'Sia', duration: '4:33' },
    ],
    comments: [
      { user: 'filmfreak', text: 'Built different. Track 2 is criminally underrated.', stars: 4 },
      { user: 'indielover', text: 'This playlist made me feel like I was in a Sofia Coppola film.', stars: 5 },
      { user: 'critique_king', text: 'Good but missing some essential picks.', stars: 3 },
    ],
  },
  {
    id: 4,
    title: 'Rage Room',
    curator: 'angst404',
    genre: 'Alt Metal',
    cover: 'https://picsum.photos/seed/rage/300/300',
    rating: 3.8,
    ratingCount: 51,
    description: 'For when you need to scream into a pillow but the pillow isn\'t enough.',
    tracks: [
      { num: 1, title: 'Break Stuff', artist: 'Limp Bizkit', duration: '2:47' },
      { num: 2, title: 'Last Resort', artist: 'Papa Roach', duration: '3:21' },
      { num: 3, title: 'In the End', artist: 'Linkin Park', duration: '3:36' },
      { num: 4, title: 'Chop Suey!', artist: 'System of a Down', duration: '3:30' },
      { num: 5, title: 'Given Up', artist: 'Linkin Park', duration: '3:09' },
    ],
    comments: [
      { user: 'metalhead', text: 'Solid but could go harder.', stars: 4 },
      { user: 'emo_legacy', text: 'This is my entire 2006 summer.', stars: 5 },
    ],
  },
  {
    id: 5,
    title: 'Cottagecore Autumn',
    curator: 'mushroomwitch',
    genre: 'Folk / Acoustic',
    cover: 'https://picsum.photos/seed/cottage/300/300',
    rating: 4.9,
    ratingCount: 203,
    description: 'Crinkled leaves, warm blankets, and a cup of chamomile. Purely magical.',
    tracks: [
      { num: 1, title: 'Holocene', artist: 'Bon Iver', duration: '5:37' },
      { num: 2, title: 're: Stacks', artist: 'Bon Iver', duration: '4:26' },
      { num: 3, title: 'First Day of My Life', artist: 'Bright Eyes', duration: '3:20' },
      { num: 4, title: 'Something Good', artist: 'Alt-J', duration: '4:14' },
      { num: 5, title: 'Stubborn Love', artist: 'The Lumineers', duration: '4:23' },
      { num: 6, title: 'Dead Hearts', artist: 'Stars', duration: '4:44' },
      { num: 7, title: 'Skinny Love', artist: 'Bon Iver', duration: '3:58' },
      { num: 8, title: 'Flume', artist: 'Bon Iver', duration: '3:39' },
      { num: 9, title: 'Blood Bank', artist: 'Bon Iver', duration: '3:12' },
    ],
    comments: [
      { user: 'forestbabe', text: 'I cried. I baked bread. I cried again.', stars: 5 },
      { user: 'cozyperson', text: 'Literally perfect. Do not change a single track.', stars: 5 },
      { user: 'folkpurist', text: 'Nearly perfect. Track 4 breaks the mood slightly.', stars: 4 },
    ],
  },
]

const TOP5 = [...PLAYLISTS].sort((a, b) => b.rating - a.rating).slice(0, 5)
const FEATURED = PLAYLISTS[0]

function StarRating({ value, onChange, size = 20 }) {
  const [hovered, setHovered] = useState(null)
  const display = hovered ?? Math.round(value)
  return (
    <div className="stars" style={{ '--size': size + 'px' }}>
      {[1, 2, 3, 4, 5].map(n => (
        <button
          key={n}
          className={'star' + (n <= display ? ' filled' : '')}
          onMouseEnter={() => onChange && setHovered(n)}
          onMouseLeave={() => onChange && setHovered(null)}
          onClick={() => onChange && onChange(n)}
          aria-label={`Rate ${n} star${n > 1 ? 's' : ''}`}
          type="button"
        >★</button>
      ))}
    </div>
  )
}

function RatingBadge({ rating }) {
  return <span className="rating-badge">{rating.toFixed(1)} <span className="star-icon">★</span></span>
}

function PlaylistCard({ playlist, onClick }) {
  return (
    <article className="playlist-card" onClick={() => onClick(playlist)}>
      <img src={playlist.cover} alt={playlist.title} className="card-cover" />
      <div className="card-body">
        <span className="genre-tag">{playlist.genre}</span>
        <h3 className="card-title">{playlist.title}</h3>
        <p className="card-curator">by <strong>{playlist.curator}</strong></p>
        <p className="card-desc">{playlist.description}</p>
        <div className="card-footer">
          <RatingBadge rating={playlist.rating} />
          <span className="rating-count">{playlist.ratingCount} ratings</span>
        </div>
      </div>
    </article>
  )
}

function FeaturedCard({ playlist, onClick }) {
  return (
    <section className="featured-section">
      <p className="section-label">FEATURED PLAYLIST</p>
      <div className="featured-card" onClick={() => onClick(playlist)}>
        <img src={playlist.cover} alt={playlist.title} className="featured-cover" />
        <div className="featured-body">
          <span className="genre-tag">{playlist.genre}</span>
          <h2 className="featured-title">{playlist.title}</h2>
          <p className="featured-curator">curated by <strong>{playlist.curator}</strong></p>
          <p className="featured-desc">{playlist.description}</p>
          <div className="featured-meta">
            <RatingBadge rating={playlist.rating} />
            <span className="rating-count">{playlist.ratingCount} ratings</span>
            <span className="track-count">{playlist.tracks.length} tracks</span>
          </div>
          <button className="btn-primary" onClick={e => { e.stopPropagation(); onClick(playlist) }}>
            View Playlist →
          </button>
        </div>
      </div>
    </section>
  )
}

function SubmitForm() {
  const [form, setForm] = useState({ title: '', curator: '', genre: '', url: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => { setSubmitted(false); setForm({ title: '', curator: '', genre: '', url: '' }) }, 3000)
  }

  return (
    <div className="sidebar-section">
      <p className="section-label">SUBMIT YOUR PLAYLIST</p>
      {submitted
        ? <div className="submit-success">Playlist submitted! We'll review it soon. 🎶</div>
        : (
          <form className="submit-form" onSubmit={handleSubmit}>
            <input
              className="form-input"
              placeholder="Playlist title"
              value={form.title}
              onChange={e => setForm({ ...form, title: e.target.value })}
              required
            />
            <input
              className="form-input"
              placeholder="Your username"
              value={form.curator}
              onChange={e => setForm({ ...form, curator: e.target.value })}
              required
            />
            <input
              className="form-input"
              placeholder="Genre"
              value={form.genre}
              onChange={e => setForm({ ...form, genre: e.target.value })}
              required
            />
            <input
              className="form-input"
              placeholder="Playlist URL (optional)"
              value={form.url}
              onChange={e => setForm({ ...form, url: e.target.value })}
            />
            <button className="btn-primary full-width" type="submit">Submit Playlist</button>
          </form>
        )
      }
    </div>
  )
}

function TopRankings({ playlists, onSelect }) {
  return (
    <div className="sidebar-section">
      <p className="section-label">TOP 5 THIS WEEK</p>
      <ol className="top-list">
        {playlists.map((p, i) => (
          <li key={p.id} className="top-item" onClick={() => onSelect(p)}>
            <span className="top-rank">#{i + 1}</span>
            <img src={p.cover} alt="" className="top-cover" />
            <div className="top-info">
              <span className="top-title">{p.title}</span>
              <span className="top-curator">{p.curator}</span>
            </div>
            <RatingBadge rating={p.rating} />
          </li>
        ))}
      </ol>
    </div>
  )
}

function DetailPage({ playlist, onBack }) {
  const [userRating, setUserRating] = useState(null)
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState(playlist.comments)
  const [submitted, setSubmitted] = useState(false)

  const handleComment = e => {
    e.preventDefault()
    if (!comment.trim() || !userRating) return
    setComments([{ user: 'you', text: comment, stars: userRating }, ...comments])
    setComment('')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="detail-page">
      <button className="back-btn" onClick={onBack}>← Back to feed</button>

      <div className="detail-header">
        <img src={playlist.cover} alt={playlist.title} className="detail-cover" />
        <div className="detail-meta">
          <span className="genre-tag">{playlist.genre}</span>
          <h1 className="detail-title">{playlist.title}</h1>
          <p className="detail-curator">curated by <strong>{playlist.curator}</strong></p>
          <p className="detail-desc">{playlist.description}</p>
          <div className="detail-stats">
            <RatingBadge rating={playlist.rating} />
            <span className="rating-count">{playlist.ratingCount} ratings</span>
            <span className="track-count">{playlist.tracks.length} tracks</span>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div className="tracklist-section">
          <p className="section-label">TRACKLIST</p>
          <table className="tracklist">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {playlist.tracks.map(t => (
                <tr key={t.num} className="track-row">
                  <td className="track-num">{t.num}</td>
                  <td className="track-title">{t.title}</td>
                  <td className="track-artist">{t.artist}</td>
                  <td className="track-dur">{t.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rating-comments-section">
          <div className="rate-box">
            <p className="section-label">RATE THIS PLAYLIST</p>
            <StarRating value={userRating ?? 0} onChange={setUserRating} size={32} />
            {userRating && <p className="rating-prompt">You rated this {userRating}/5</p>}
            <form className="comment-form" onSubmit={handleComment}>
              <textarea
                className="form-input comment-input"
                placeholder="Leave a comment..."
                value={comment}
                onChange={e => setComment(e.target.value)}
                rows={3}
              />
              <button
                className="btn-primary full-width"
                type="submit"
                disabled={!comment.trim() || !userRating}
              >
                Post Comment
              </button>
            </form>
            {submitted && <p className="submit-success">Comment posted!</p>}
          </div>

          <div className="comments-section">
            <p className="section-label">COMMENTS ({comments.length})</p>
            {comments.map((c, i) => (
              <div key={i} className="comment-card">
                <div className="comment-header">
                  <span className="comment-user">{c.user}</span>
                  <StarRating value={c.stars} size={14} />
                </div>
                <p className="comment-text">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="app">
      <nav className="nav">
        <span className="logo" onClick={() => setSelected(null)}>🎵 ratemyplaylist</span>
        <div className="nav-links">
          <a href="#" onClick={e => { e.preventDefault(); setSelected(null) }}>Feed</a>
          <a href="#">Browse</a>
          <a href="#">Top Charts</a>
        </div>
        <button className="btn-primary nav-cta">Sign In</button>
      </nav>

      <main className="main">
        {selected ? (
          <DetailPage playlist={selected} onBack={() => setSelected(null)} />
        ) : (
          <>
            <FeaturedCard playlist={FEATURED} onClick={setSelected} />

            <div className="feed-layout">
              <div className="feed">
                <p className="section-label">RECENT PLAYLISTS</p>
                <div className="playlist-grid">
                  {PLAYLISTS.slice(1).map(p => (
                    <PlaylistCard key={p.id} playlist={p} onClick={setSelected} />
                  ))}
                </div>
              </div>

              <aside className="sidebar">
                <SubmitForm />
                <TopRankings playlists={TOP5} onSelect={setSelected} />
              </aside>
            </div>
          </>
        )}
      </main>

      <footer className="footer">
        <span>© 2025 ratemyplaylist — made with 🎶</span>
      </footer>
    </div>
  )
}

export default App
