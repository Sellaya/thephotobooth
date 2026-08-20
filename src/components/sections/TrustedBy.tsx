import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { brands } from "@/lib/data";

const uniqueBrands = brands.filter(
  (brand, index, list) =>
    list.findIndex((item) => item.file === brand.file || item.name === brand.name) ===
    index
);

export function TrustedBy() {
  return (
    <section className="border-y border-ink-300/20 bg-white py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Trusted By"
          title="Our booths have made waves at top events"
          description="From product launches to graduation days, we hope you're next."
        />
      </Container>

      <div className="mt-10 sm:mt-14">
        <Marquee>
          {uniqueBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-20 w-44 shrink-0 items-center justify-center sm:h-24 sm:w-52"
            >
              <div className="relative h-14 w-full sm:h-16">
                <Image
                  src={`/images/brands/${brand.file}`}
                  alt={brand.name}
                  fill
                  sizes="208px"
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
