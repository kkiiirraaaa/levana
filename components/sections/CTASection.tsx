import Link from 'next/link';

interface CTASectionProps {
  ctaText: string;
}

export default function CTASection({ ctaText }: CTASectionProps) {
  return (
    <section className="px-3 md:px-0 py-20 bg-primary">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Command the Highest Level of Your Value?
          </h2>
          <Link
            href="/#packages"
            className="inline-block bg-primary-light text-dark hover:bg-dark hover:text-primary-light font-medium px-4 py-2 rounded-lg transition-colors duration-200"
          >
            Begin Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
