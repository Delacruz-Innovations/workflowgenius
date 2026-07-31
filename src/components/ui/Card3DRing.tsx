import "./Card3DRing.css"

export interface Card3DRingItem {
  src: string
  label?: string
}

const RING_SIZE = 10

export default function Card3DRing({
  items,
  className = "",
}: {
  items: Card3DRingItem[]
  className?: string
}) {
  const cards = Array.from({ length: RING_SIZE }, (_, i) => items[i % items.length])

  return (
    <div className={`card-3d ${className}`}>
      {cards.map((item, i) => (
        <div className="card-3d-item" key={i}>
          <div className="card-3d-image" style={{ backgroundImage: `url(${item.src})` }} />
          {item.label && <p className="card-3d-label">{item.label}</p>}
        </div>
      ))}
    </div>
  )
}
