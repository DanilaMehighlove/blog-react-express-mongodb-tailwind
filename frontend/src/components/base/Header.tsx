import logo from '../../logo.svg';

const navItems: Array<{ name: string, href: string }> = [
  { name: 'Top articles', href: '/' },
  { name: 'Top last week', href: '/' },
  { name: 'Monday', href: '/' }
];

export function Header() {
  return(
    <div className="flex gap-x-4 w-full justify-between text-white">
      <a className="flex items-end gap-x-2" href="/">
        <img className="w-10 h-10" src={logo}/>
        <h1 className="text-3xl font-medium">Nice BLOG</h1>
      </a>
      <nav className="flex flex-row flex-grow ">
        <ul className="flex flex-row flex-grow gap-x-6 items-end justify-end text-xl">
          { navItems.map(item => <li><a href={item.href}>{item.name}</a></li> )}
        </ul>
      </nav>
    </div>
  );
}