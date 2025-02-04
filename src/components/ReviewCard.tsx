import Image from 'next/image'

const Card = ({ name, city, suburb, imageSrc, drink, price, rating, hexCode, googleUrl }: Review) => {
  return (
    <div className="bg-[var(--surface)]">
      <div style={{ '--bg-color': `#${hexCode}` } as React.CSSProperties} className="bg-[var(--bg-color)] h-5" />
      <div className="flex">
        <Image src={imageSrc} alt={`A drink from ${name}`} width={3} height={4} />
        <div className="m-2">
          <h2>
            <a href={googleUrl}>{name}</a>
          </h2>
          <p>
            {suburb} - {city}
          </p>
          <p>
            {drink} - ${price}
          </p>
          <div className="flex">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <img key={i} src="/leaf.svg" alt="Star" className="w-6 h-6" />
            ))}
            {rating % 1 > 0 && (
              <img
                style={{ '--scale': rating % 1 } as React.CSSProperties}
                src="/leaf.svg"
                alt="Star"
                className="w-6 h-6 scale-[var(--scale)]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
