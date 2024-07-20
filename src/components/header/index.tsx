import { useEffect, useState } from "react"

export function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>(localStorage.getItem('theme') as 'dark' | 'light' || 'light');


  function changeTheme() {
    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }

  useEffect(() => {
    changeTheme();
  }, [theme])

  return (
    <header className="bg-primary w-full">
      <h1>Header</h1>
      <div>
        {
          theme === 'light' ? (
            <button onClick={() => setTheme('dark')}>dark Mode</button>
          ) : (
            <button onClick={() => setTheme('light')}>light Mode</button>
          )
        }
      </div>
    </header>
  )
}