const navigation = {
  main: [
    { name: 'Toyhou.se', href: 'https://toyhou.se' },
    { name: 'About', href: '#' },
    { name: 'Home', href: '/' },
    { name: 'Report an Issue', href: 'https://toyhou.se/safe' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/darling',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    }
  ],
}

export default function Footer() {
  return (
    <footer className="">
      <div className="tw-max-w-7xl tw-mx-auto tw-py-12 tw-px-4 tw-overflow-hidden sm:tw-px-6 lg:tw-px-8">
        <nav className="tw--mx-5 tw--my-2 tw-flex tw-flex-wrap tw-justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="tw-px-5 tw-py-2">
              <a href={item.href} className="tw-text-base tw-text-gray-500 hover:tw-text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="tw-mt-8 tw-flex tw-justify-center tw-space-x-6">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="tw-text-gray-400 hover:tw-text-gray-500">
              <span className="tw-sr-only">{item.name}</span>
              <item.icon className="tw-h-6 tw-w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="tw-mt-8 tw-text-center tw-text-base tw-text-gray-400">&copy; 2020 Safe.</p>
      </div>
    </footer>
  )
}
