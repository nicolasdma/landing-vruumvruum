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

const Capabilities = () => {
  return (
    <section className="relative w-full bg-black text-white px-6 md:px-16 py-32">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Intro */}
        {/* <div className="space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-neutral-400">
            vruumvruum.capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Built in motion. Made to move.
          </h2>
          <p className="text-lg text-neutral-400">
            We’re not a traditional studio. We’re a moving one — literally. vruumvruum was born on the road, shaped by the unpredictable, and obsessed with what’s next. <br />
            We design and build sharp digital experiences for teams who want to stand out — not blend in.
          </p>
        </div> */}

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

        {/* Capabilities List */}
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
      </div>
    </section>
  );
};

export default Capabilities;
