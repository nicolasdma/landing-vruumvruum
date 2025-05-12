import React from 'react'

const Capabilities = () => {
    return (
      <section className="relative w-full bg-black text-white px-6 md:px-16 py-32">
        <div className="max-w-6xl mx-auto space-y-24">
  
          {/* Intro */}
          <div className="space-y-6 max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-neutral-400">
              vruumvruum.capabilities
            </p>
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Crafted on the road
            </h2>
            <p className="text-lg text-neutral-400">
              Because greatness isn’t shaped in stillness. It’s built through chaos — fueled by the drive to keep evolving. <br />
              From the saddle of a motorbike to the edge of the Arctic, vruumvruum is a studio forged in motion, focused on building things that move the web forward.
            </p>
          </div>
  
          {/* Capabilities List */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Websites & Features</h3>
              <p className="text-neutral-400 mb-2">
                From pre-launch landing pages to complete redesigns, we build next-gen digital experiences that demand attention and spark action.
              </p>
              <ul className="list-disc pl-5 text-neutral-400">
                <li>Product Strategy</li>
                <li>UX/UI Design</li>
                <li>Engineering</li>
                <li>3D & Motion Design</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold mb-4">Visual Branding</h3>
              <p className="text-neutral-400 mb-2">
                From lean identities for early startups to full-scale brand platforms for industry leaders, we build scalable brand systems that are impossible to ignore.
              </p>
              <ul className="list-disc pl-5 text-neutral-400">
                <li>Visual Identity</li>
                <li>Branding Systems</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold mb-4">IRL Experience Design</h3>
              <p className="text-neutral-400 mb-2">
                From annual summits to local meetups, we design unforgettable physical spaces and moments that bring brands to life.
              </p>
              <ul className="list-disc pl-5 text-neutral-400">
                <li>Visual Identity</li>
                <li>Space Design</li>
                <li>Keynote Design</li>
                <li>Digital & Interactive</li>
              </ul>
            </div>
  
            <div>
              <h3 className="text-2xl font-semibold mb-4">Marketing Execution</h3>
              <p className="text-neutral-400 mb-2">
                We collaborate with marketing teams to craft assets that drive growth, boost engagement, and convert curiosity into action.
              </p>
              <ul className="list-disc pl-5 text-neutral-400">
                <li>Omni-channel Campaign Content</li>
                <li>Growth Experiments</li>
                <li>Sales Materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Capabilities;