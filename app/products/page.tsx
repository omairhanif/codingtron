import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import productIllustration from '../public/images/hero-section-image.png';

export const metadata: Metadata = {
	title: 'Products Coming Soon | Codingtron',
	description: 'New products from Codingtron are in development. Get in touch to learn more.',
};

export default function ProductsPage() {
	return (
		<section className="border-b border-black bg-white py-12 md:py-16">
			<div className="mx-auto grid max-w-5xl items-center gap-8 px-5 sm:px-8 md:grid-cols-2 md:gap-10 lg:px-12">
				<div>
					<p className="eyebrow">CODINGTRON / PRODUCTS</p>
					<h1 className="mt-4 max-w-[12ch] text-3xl font-semibold leading-tight sm:text-4xl">
						New tools are on the way.
					</h1>
					<p className="mt-4 max-w-lg text-base leading-7">
						We&apos;re building practical products for teams working in cloud, DevOps, and automation. Check back soon for what&apos;s next.
					</p>
					<div className="mt-6 flex flex-wrap gap-3">
						<Link href="/contact" className="button button-dark">Talk to our team <ArrowUpRight aria-hidden="true" /></Link>
						<Link href="/services" className="button button-light">Explore services <ArrowRight aria-hidden="true" /></Link>
					</div>
				</div>
				<figure className="min-w-0">
					<Image
						src={productIllustration}
						alt="Cloud engineering illustration for upcoming Codingtron products"
						priority
						className="mx-auto h-auto max-h-[24rem] w-full object-contain"
						sizes="(max-width: 768px) 100vw, 50vw"
					/>
				</figure>
			</div>
		</section>
	);
}
