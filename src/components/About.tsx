export const About = () => {
  return (
    <section class="space-y-8">
      <div class="flex items-end gap-4 border-b border-stone-200 dark:border-stone-800 pb-4">
        <h2 class="text-3xl font-heading tracking-tighter">Theory</h2>
        <span class="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-1">
          Internal Logic / Origins
        </span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="md:col-span-1">
          <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">Core Disciplines</p>
          <ul class="mt-4 space-y-2 text-[11px] font-mono uppercase tracking-widest text-stone-500">
            <li>• Computer Science</li>
            <li>• UI/UX</li>
            <li>• Human-Computer Interaction (HCI)</li>
            <li>• Mathematics</li>
            <li>• Physics</li>
          </ul>
        </div>
        
        <div class="md:col-span-3 space-y-6">
          <p class="text-xl md:text-2xl font-heading leading-tight text-foreground/90 italic">
            I started coding in middle school on a TI-83+ SE graphing calculator, using black-box black-box reverse-engineering techniques without the internet.
          </p>
          
          <div class="prose prose-stone dark:prose-invert max-w-none space-y-4">
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              Foundationally self-taught, I mastered imperative programming within the constraints of a 16x8 character screen and zero lexical scoping. This taught me to value efficiency and structural integrity above all else.
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              From developing automated math suites (to avoid doing the actual school work) to building text-based graphical games like Pong and Snake, my approach has always been centered on breaking systems to understand how to build them better. 
            </p>
            <p class="text-stone-600 dark:text-stone-400 leading-relaxed font-sans">
              As a former Reliability Analyst at ALSAC/St. Jude Children's Research Hospital, I've refined my ability to architect mission-critical systems where structural honesty and failure prevention are non-negotiable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
