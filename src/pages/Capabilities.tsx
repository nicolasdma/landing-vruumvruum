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
  <div className="group">
    <h3 className="text-2xl font-semibold mb-4 tracking-tight group-hover:text-blue-400 transition-colors duration-300">
      {title}
    </h3>
    <p className="text-neutral-400 mb-6 leading-relaxed">{description}</p>
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="text-sm px-4 py-1.5 bg-neutral-900/50 text-white rounded-full border border-neutral-800 hover:border-blue-400 hover:bg-neutral-800/50 transition-all duration-300 ease-out"
        >
          {item}
        </div>
      ))}
    </div>
  </div>
);

const Capabilities = () => {
  return (
    <section className="relative w-full bg-black text-white py-32">
      <div className="max-w-6xl mx-auto space-y-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="space-y-6 max-w-3xl">
          <p className="text-sm uppercase tracking-widest text-neutral-400 font-medium">
            vruumvruum.capabilities
          </p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
            Crafted on the road
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Because greatness isn't shaped in stillness — it's forged in chaos,
            fueled by the need to keep evolving and creating things that move
            forward. vruumvruum is a one-person studio, born on the road, built
            in unpredictable conditions, and driven by motion. <br />
            From the saddle of a motorbike to the edge of the Arctic, I craft
            sharp digital experiences for teams that refuse to blend in.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 cursor-default">
          <CapabilityGroup
            title="Web Experiences"
            description="From concept to launch, expressive, high-performance sites built to leave a mark — fast, fluid, and conversion-focused."
            items={[
              "Product Strategy",
              "UX/UI Design",
              "Engineering",
              "3D & Motion",
            ]}
          />
          <CapabilityGroup
            title="Brand Design"
            description="Helping brands find their voice, sharpen their edge, and scale with systems that stay consistent — even as they evolve."
            items={["Visual Identity", "Brand Systems"]}
          />
          <CapabilityGroup
            title="IRL & Spatial Design"
            description="Designing physical experiences that feel alive, connected, and unmistakably on-brand — from pop-ups to summits and beyond."
            items={["Space Design", "Keynote Design", "Interactive Moments"]}
          />
          <CapabilityGroup
            title="Launch & Marketing"
            description="Creating launch campaigns and marketing assets that drive traction — and look damn good doing it."
            items={["Campaign Assets", "Growth Design", "Sales Tools"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
