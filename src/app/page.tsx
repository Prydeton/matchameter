import { Header } from '@/components'
import Card from '@/components/card'

const Home = () => {
  return (
    <>
      <Header />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,500px))] gap-4 justify-center px-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Card
            key={i}
            name="Naau Cafe"
            city="Melbourne"
            suburb="CBD"
            imageSrc="https://drive.usercontent.google.com/download?id=1yuFd8tI1OgbnP2wm4weVxNlIe7VaU7QU&authuser=0"
            drink="Matcha"
            price={6.0}
            rating={5}
            hexCode="#67923E"
            googleUrl="https://g.co/kgs/NR1jB8o"
          />
        ))}
      </div>
    </>
  )
}

export default Home
