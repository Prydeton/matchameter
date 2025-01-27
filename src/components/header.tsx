import Image from 'next/image'
import leaf from '../../public/leaf.svg'

const Header = () => (
  <>
    <h1 className="text-3xl md:text-5xl inline-flex items-baseline w-full justify-center p-4">
      Ally
      <Image
        priority
        src={leaf}
        alt=""
        width={10}
        className="w-[0.5em] h-auto relative -top-[0.5em] -left-[0.2em] -mr-[0.2em]"
      />
      s Matcha Meter
    </h1>
  </>
)

export default Header
