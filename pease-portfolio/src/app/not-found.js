'use client' // Error boundaries must be Client Components
 
export default function Error() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img src="/images/404.jpg"/>
      <span>Image courtesy of <a href="https://http.cat/" className="underline">HTTP.cat</a></span>
    </div>
  )
}