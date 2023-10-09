export default function Navbar() {
  return (
    <nav className="flex flex-col bg-second font-outfit">
      <div className="flex justify-center bg-first text-neutral-50 text-sm p-2">
        <p>BLACK FRIDY IS COMING</p>
      </div>
      <div className="grid grid-cols-2 p-2">
      <div className="flex justify-between">
        <p className="text-3xl font-bold ">
            KVM
        </p>
        <div>
            <ul className="flex justify-evenly">
                <li className="pr-8">Home</li>
                <li className="pr-8">Shop</li>
                <li className="pr-8">About</li>
                <li className="pr-8">Contact</li>
            </ul>
        </div>
      </div>
        <div className="flex justify-end">
            <div className="pr-8">search
            </div>
            <div className="pr-8">Like</div>
            <div className="pr-8">Cart</div>  
            <div className="pr-8">profile</div>  
        </div>
      </div>
    </nav>
  );
}
