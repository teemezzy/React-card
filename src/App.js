import './App.css'
import Card from './component/Card'
import sedan from './image/icon-sedans.svg'
import luxury from './image/icon-luxury.svg'
import suv from './image/icon-suvs.svg'


function App() {
  const card_content = [
    {
      logo: sedan,
      color: 'hsl(31, 77%, 52%)',
      title: 'SEDAN',
      text: 'Choose a sedans a sedan for its affordabilty and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
    },

    {
      logo: suv,
      title: 'SUV',
      color: 'hsl(184, 100%, 22%)',
      text: 'Choose a sedans a sedan for its affordabilty and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
    },

    {
      logo: luxury,
      title: 'LUXURY',
      color: 'hsl(179, 100%, 13%)',
      text: '  Choose a sedans a sedan for its affordabilty and excellent fuel economy. Ideal for crusing in the city or on your next road trip.',
    },
  ]

  return (
    <section className='main-container'>
      <Card
        title={card_content[0].title}
        logo={card_content[0].logo}
        text={card_content[0].text}
        bg_color={card_content[0].color}
      />

      <Card
        title={card_content[1].title}
        logo={card_content[1].logo}
        text={card_content[1].text}
        bg_color={card_content[1].color}
      />

      <Card
        title={card_content[2].title}
        logo={card_content[2].logo}
        text={card_content[2].text}
        bg_color={card_content[2].color}
      />
    </section>
  )
}

export default App
