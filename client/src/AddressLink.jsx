export default function AddressLink({children,className=null}) {
  if (!className) {
    className = 'my-3 block';
  }
  className += ' flex gap-1 font-semibold underline';
  return (
    <a className={className} target="_blank" href={'https://maps.google.com/?q='+children}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
      {children}
    </a>
  );
}