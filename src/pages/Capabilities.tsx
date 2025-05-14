interface CapabilityGroupProps {
  title: string;
  description: string;
  items: string[];
}

const CapabilityGroup = ({
  title,
  description,
  items,
}: CapabilityGroupProps) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <p className="text-neutral-400 mb-6">{description}</p>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-sm px-4 py-1.5 bg-neutral-900 text-white rounded-full border border-neutral-800 hover:border-white transition-colors duration-300"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

// const ExperienceSection = () => (
//   <div className="pt-32 border-t border-neutral-800 space-y-12">
//     <h3 className="text-2xl md:text-4xl font-semibold">
//       Trusted by forward-thinking teams
//     </h3>
//     <p className="text-lg text-neutral-400 max-w-2xl">
//       I’ve worked with teams who gave me the confidence to design, teach, and
//       build products that ship — from teaching JavaScript to shipping for global
//       platforms.
//     </p>
//     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
//       <div className="h-10 flex items-center justify-center">
//         <img src="/experience/lemondata.png" alt="Lemondata" width="160px" className="h-full object-contain" />
//       </div>
//       <div className="h-10 flex items-center justify-center">
//         <img src="/experience/coderhouse.png" alt="Coderhouse"  width="160px" className="h-full object-contain" />
//       </div>
//       <div className="h-10 flex items-center justify-center">
//         <img src="/experience/nanoapps.png" alt="NanoApps"  width="160px"  className="h-full object-contain" />
//       </div>
//       <div className="h-10 flex items-center justify-center">
//         <img src="/experience/powtoon.png" alt="Powtoon" className="h-full object-contain" />
//       </div>
//     </div>
//   </div>
// );

// const FreelanceSection = () => (
//   <div className="pt-32 border-t border-neutral-800 space-y-12">
//     <h3 className="text-2xl md:text-4xl font-semibold">
//       Independent Projects
//     </h3>
//     <p className="text-lg text-neutral-400 max-w-2xl">
//       As a solo operator, I’ve partnered with early-stage startups, artists,
//       and global clients to ship high-end web experiences — fully remote, fully
//       async, always on the move.
//     </p>
//     <ul className="grid md:grid-cols-2 gap-4 text-neutral-300 text-base list-disc pl-6">
//       <li>Custom portfolio sites for artists and photographers</li>
//       <li>Product landing pages built for conversion</li>
//       <li>Brand design systems from scratch</li>
//       <li>Design-to-code handoffs and rapid MVPs</li>
//     </ul>
//   </div>
// );


const Capabilities = () => {
  return (
    <section className="relative w-full bg-black text-white md:px-16 py-32">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            vruumvruum.capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Crafted on the road
          </h2>
          <p className="text-lg text-neutral-400">
            Because greatness isn’t shaped in stillness — it’s forged in chaos,
            fueled by the need to keep evolving and creating things that move
            forward. vruumvruum is a one-person studio, born on the road, built
            in unpredictable conditions, and driven by motion. <br />
            From the saddle of a motorbike to the edge of the Arctic, I craft
            sharp digital experiences for teams that refuse to blend in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <CapabilityGroup
            title="Web Experiences"
            description="From concept to shipping, we craft expressive, high-performance sites that leave a mark — fast, fluid, and built to convert."
            items={[
              "Product Strategy",
              "UX/UI Design",
              "Engineering",
              "3D & Motion",
            ]}
          />
          <CapabilityGroup
            title="Brand Design"
            description="We help brands find their voice, sharpen their edge, and scale with systems that stay consistent — even as they evolve."
            items={["Visual Identity", "Brand Systems"]}
          />
          <CapabilityGroup
            title="IRL & Spatial Design"
            description="Pop-ups, summits, or anything in between — we design physical experiences that feel alive, connected, and on-brand."
            items={["Space Design", "Keynote Design", "Interactive Moments"]}
          />
          <CapabilityGroup
            title="Launch & Marketing"
            description="We build launch campaigns and marketing assets that drive traction — and look damn good while doing it."
            items={["Campaign Assets", "Growth Design", "Sales Tools"]}
          />
        </div>

        {/* <ExperienceSection />
        <FreelanceSection /> */}
      </div>
    </section>
  );
};

export default Capabilities;
