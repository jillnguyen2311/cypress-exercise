import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24`}>
      <h1>home</h1>
     
      <Link href="/about">about</Link>

      <form>
        <input type='checkbox' id='vehicle1' name='vehicle1' value='bike' />
        <input type='radio' id='html' name='fav_language' value='radio1' />
      </form>

      <ul>
        <li className='selected'>apple</li>
        <li className='selected'>orange</li>
        <li className='selected'>pear</li>
      </ul>

      <div className='school'>
        welcome to bcit
      </div>

      <div className='test' style={{ textDecoration: 'line-through', color: 'rgb(217, 217, 217)' }}>testing area</div>
    </main>
  )
}
