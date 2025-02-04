import Image from 'next/image'

const Card = ({ name, city, suburb, imageSrc, drink, price, rating, hexCode, googleUrl }: Review) => {
  return (
    <div className="bg-[#CAD5C8] h-24">
      <div style={{ '--bg-color': `#${hexCode}` } as React.CSSProperties} className="bg-[var(--bg-color)] h-5" />
      <div className="flex">
        <Image src={imageSrc} alt={`A drink from ${name}`} width={80} height={80} />
        <div>
          <h2>
            <a href={googleUrl}>{name}</a>
          </h2>
          <p>
            {suburb} - {city}
          </p>
          <p>
            {drink} - ${price}
          </p>
          <div>{rating}</div>
        </div>
      </div>
    </div>
  )
}

export default Card
