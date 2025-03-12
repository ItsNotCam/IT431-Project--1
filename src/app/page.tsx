import Image from 'next/image';
import SearchIcon from "@/assets/SearchIcon.svg";
import Link from 'next/link';

export default async function Home() {
	return (
		<main>
			<img src="/homebg.jpg" className='absolute top-0 left-0 w-full h-full -z-10 object-cover'></img>
			{/* <div className='grid grid-cols-2 mx-auto my-4'>
				<input type="text" className='cursor-not-allowed
					h-12 border border-gray-300 rounded-lg px-4 mx-8 bg-[#f5f6f7]
					col-start-1 col-end-3 row-start-1 row-end-2
				' placeholder="Tell us what you're looking for"/>
				<Image src={SearchIcon} alt="Search Icon" className='
					h-6 col-start-2 col-end-3 row-start-1 row-end-2 my-auto 
					ml-auto mr-12 pointer-events-none
				'/>
			</div> */}
			<div className='absolute top-1/2 left-1/2 -translate-1/2 text-gray-800 flex items-center justify-center w-full flex-col gap-2'>
				<h1 className='text-5xl font-bold'>The way car</h1>
				<h1 className='text-5xl font-bold'>buying should be</h1>
				<p className='mt-2'>Upfront prices. CarMax Certified quality.</p>
				<Link href="cars" className='text-gray-800 font-semibold text-xl uppercase bg-[#FFC826] hover:bg-[#FFE32D] transition-colors px-16 py-4 rounded-md mt-6'>
					Search Cars
				</Link>
			</div>
		</main>
	);
}
