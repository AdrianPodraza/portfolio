import { techStackIcons } from '../constants/techStackIcons';

import TechIconCardExperience from './TechIconCardExperience';

function TechStack() {
  return (
    <section
      id="stack"
      className="mx-4 flex w-fit flex-col justify-center xl:mt-14 xl:ml-32 xl:scroll-mt-[300px]"
    >
      <h2 className="mb-16 text-[32px] font-bold">Tech Stack</h2>
      <div className="flex flex-wrap gap-6">
        {techStackIcons.map((model) => (
          <div key={model.name} className="flex items-center justify-center">
            <TechIconCardExperience model={model} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
