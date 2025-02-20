import Image from 'next/image'

const ReviewCard = ({ name, city, suburb, imageSrc, drink, price, rating, hexCode, googleUrl }: Review) => {
  return (
    <div className="bg-[var(--surface)]">
      <div style={{ '--bg-color': `#${hexCode}` } as React.CSSProperties} className="bg-[var(--bg-color)] h-5" />
      <div className="flex">
        <div className="relative w-24 h-28 md:w-32 md:h-40">
          <Image src={imageSrc} alt={`A drink from ${name}`} fill />
        </div>
        <div className="m-2">
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-[var(--hard-text)] text-lg md:text-2xl m-0 leading-none md:leading-tight">
                <a href={googleUrl}>{name}</a>
              </h2>
              <p className="text-xs md:text-base m-0 mt-0 leading-none">
                {suburb} - {city}
              </p>
            </div>
            <div>
              <p className="md:text-xl md:pb-1">
                {drink} - ${price}
              </p>
              <div className="flex">
                {Array.from({ length: Math.floor(rating) }, (_, i) => (
                  <img key={i} src="/leaf.svg" alt="Star" className="w-6 h-6 md:w-8 md:h-8" />
                ))}
                {rating % 1 > 0 && (
                  <img
                    style={{ '--scale': rating % 1 } as React.CSSProperties}
                    src="/leaf.svg"
                    alt="Star"
                    className="w-6 h-6 md:w-8 md:h-8 scale-[var(--scale)]"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard
