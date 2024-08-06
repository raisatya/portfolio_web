import Link from 'next/link';

const Navbar = async () => {

  return (
    <nav className="flex justify-between items-center p-6 sm:p-8 bg-transparent w-full">
      <div className="font-medium">
        <Link href={"/"}>
          <p>SATYA</p>
        </Link>
      </div>
      <p className='font-medium'>06-08-2024</p>
    </nav>
  );
}

export default Navbar