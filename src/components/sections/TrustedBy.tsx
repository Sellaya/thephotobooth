import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { brands } from "@/lib/data";

export function TrustedBy() {
  return (
    <section className="border-y border-ink-300/20 bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          title="Our booths have made waves at top events"
          description="From product launches to graduation days, we hope you're next."
        />
      </Container>

      <div className="mt-12">
        <Marquee>
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-16 w-36 shrink-0 items-center justify-center px-4 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <div className="relative h-10 w-full">
                <Image
                  src={`/images/brands/${brand.file}`}
                  alt={brand.name}
                  fill
                  sizes="140px"
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
