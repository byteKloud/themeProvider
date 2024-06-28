import { useState } from 'react'
import { Button } from './atoms'

function App() {
  const [show, setShow] = useState(false)

  const onClickHandler = () => {
    setShow((prev) => !prev)
  }

  return (
    <>
      <h1 className='font-semibold text-lg text-white' onClick={onClickHandler}> Button Below from atoms </h1>
      <div>
        <Button text={'Button from atoms'} textColor={'white'} bgColor={'black'} disabled={false} display={'inline'} />
        <Button text={'Show text'} textColor={'#535353'} bgColor={'#818181'} onClickHandler={onClickHandler} display={'block'} />
        <Button text={'disabled'} disabled={true} display={'block'} />
        <Button text={'Using tailwind'} className={'bg-white text-black text-md'} display={'block'} />
      </div>
      {
        show ? 
        (<>
          <h1 className='text-white font-md'>Show</h1>
        </>) :
        (<></>)
      }
    </>
  )
}

export default App
