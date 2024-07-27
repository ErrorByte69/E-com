import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm mt-24">
            {/*TOP*/}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/*LEFT*/}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/" className="text-2xl tracking-wide">
                        LAMA
                    </Link>
                    <p>3252 Winding Way, Central Plaza, Willowbrook, CA 9020, United States</p>
                    <span className="font-semibold">hello@lama.shop</span>
                    <span className="font-semibold">+91 011 2122 2122</span>
                    <div className="flex gap-6">
                        <Image src="/facebook.png" alt="Facebook" width={16} height={16} />
                        <Image src="/instagram.png" alt="Instagram" width={16} height={16} />
                        <Image src="/youtube.png" alt="YouTube" width={16} height={16} />
                        <Image src="/pinterest.png" alt="Pinterest" width={16} height={16} />
                        <Image src="/x.png" alt="X" width={16} height={16} />
                    </div>
                </div>
                {/*CENTER*/}
                <div className="hidden lg:flex justify-between w-1/2">
                <div className="flex flex-col justify-between">
                    <h1 className="font-medium text-lg">COMPANY</h1>
                    <div className="flex flex-col gap-6">
                        <Link href="">About US</Link>
                        <Link href="">Carrers</Link>
                        <Link href="">Affiliates</Link>
                        <Link href="">Blog</Link>
                        <Link href="">Contact US</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <h1 className="font-medium text-lg">SHOP</h1>
                    <div className="flex flex-col gap-6">
                        <Link href="">New Arrivals</Link>
                        <Link href="">Accessories</Link>
                        <Link href="">Men</Link>
                        <Link href="">Women</Link>
                        <Link href="">All Products</Link>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <h1 className="font-medium text-lg">Help</h1>
                    <div className="flex flex-col gap-6">
                        <Link href="">Customer Service</Link>
                        <Link href="">My Account</Link>
                        <Link href="">Find a Store</Link>
                        <Link href="">Legal & Privacy</Link>
                        <Link href="">Gift Card</Link>
                    </div>
                </div>
                </div>
                {/*RIGHT*/}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p>Be the first to get the latest news about trends, promotions, and much more!</p>
                    <div className="flex gap-2">
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="p-4 w-3/4 border border-gray-300 rounded-md" 
                            aria-label="Email address"
                        />
                        <button className="bg-lama text-white px-4 py-2 rounded-md">JOIN</button>
                    </div>
                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex gap-4">
                        <Image src="/discover.png" alt="Discover" width={40} height={20} />
                        <Image src="/skrill.png" alt="Skrill" width={40} height={20} />
                        <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
                        <Image src="/mastercard.png" alt="MasterCard" width={40} height={20} />
                        <Image src="/visa.png" alt="Visa" width={40} height={20} />
                    </div> 
                </div>
            </div>
            {/*BOTTOM*/}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
               <div className="">© 2024 Lama Shop</div>
               <div className="dlex flex-col gap-8 md:flex-row">
                <div className="">
                    <span className="text-gray-500 mr-4">Language</span>
                    <span className="font-medium">India | English</span>
                </div>
                <div className="">
                    <span className="text-gray-500 mr-4">Currency</span>
                    <span className="font-medium">₹ INR</span>
                </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;


