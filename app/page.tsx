import TopNav from "@/components/TopNav";
import WaitlistButton from "@/components/WaitlistButton";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <main className="pt-24 bg-surface font-body text-on-surface">
      <TopNav />
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="z-10">
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-surface-container-high text-primary font-bold text-sm tracking-widest uppercase">
              The Future of Social
            </span>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-8">
              Find <span className="text-gradient">companions</span> for the things you love.
            </h1>
            <p className="text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
              Built for connection. Designed for everyday life. Rallyo turns solo moments into shared adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <WaitlistButton className="bg-brand-gradient text-on-primary px-10 py-5 rounded-lg text-xl font-bold hover:scale-[1.05] active:scale-[0.95] transition-all shadow-2xl shadow-primary/30 text-center">
                Join Waitlist
              </WaitlistButton>
              <button className="bg-surface-container-highest text-primary px-10 py-5 rounded-lg text-xl font-bold hover:scale-[1.05] active:scale-[0.95] transition-all text-center">
                See How it Works
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" alt="User avatar portrait 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOdGqovb1zGPmxEH6XME6oKh04rQyIPgG44UTnVm8yE0z2-K1N4ZC1JP7N1ArPh7yimTCngVkghqKgx93k06X5PXzSgbnTSiSD3_Sd7zqjJiL3ZSoOzsnGbDEWqrJJlsuxujAK8BZ2VyA3qbCRHX7vMq0gQktrNUdBulEQ11mtDprOMH-RJz27AnmACWXF5lFbumIkCNU025-k7EyP-pRHnk8tpWFVK1Q5wqXywuuFddeFdvfOF7pU4gBDfuDro8jDh6ada1-O5ZQ"/>
                <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" alt="User avatar portrait 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqR-7jbPZ--QPop1AEr4A78iB7JkawxRFGkF0og6FMStOX2ZBpyItLWbluyk5KTCjFLgiugC3Sotq_tgxkFmz5w3vpECwm7-bBp7FYaTLUkSbuQLRHXHglq47Q5nNV8DqpesG0PdBfneEw5FGMhwiNUlbeG0oUkplO36is7DtFZsNpLe3INqKZoVjhe6bqGrwGhVwenKqBsXfRxssKyYrjXQVu41ryIVIWMbgcvrzBesAWPPuhQ6PVMmKojnGwVKcTlOWVFWOv1sA"/>
                <img className="w-12 h-12 rounded-full border-4 border-surface object-cover" alt="User avatar portrait 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDQNVrAaSc-MjQlLhbE6L9m4jSnRInDD0I_6k58DpNEI8DP10TkJGWHUAL8CXpRUkCamD75I7m7zYSCSmVVdVkS3MpFtCyedILD1P0glWDp-OxLLS-iGhPgtgeD12bXwu-vTxvDBSlEZhpi3KSwKUz2EGKBq9b8695iX5PMdJt0_26XNSArvCzoFyowC2DNsxytCp7CQUeGLYxMqRtarZdJ7eNXDQa8_vq87TmhRWJ-vpzaiKo3SYbpHIlWobzb4t-IL9ld0JTHq0"/>
                <div className="w-12 h-12 rounded-full border-4 border-surface bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold">+2k</div>
              </div>
              <p className="text-on-surface-variant font-medium">Joined by <span className="text-primary font-bold">212+</span> urban explorers</p>
            </div>
          </div>
          
          <div className="relative lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Decorative elements */}
            <div className="absolute top-10 lg:-top-20 right-0 lg:-right-20 w-80 lg:w-96 h-80 lg:h-96 bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-10 lg:-bottom-20 left-0 lg:-left-20 w-64 lg:w-80 h-64 lg:h-80 bg-secondary-container/30 rounded-full blur-[80px]"></div>
            
            {/* App Mockup Floating Cards */}
            <div className="relative z-10 w-full max-w-[400px]">
              <div className="bg-surface-container-lowest rounded-xl p-4 shadow-2xl border border-outline-variant/10 -rotate-3 relative z-20">
                <img className="rounded-lg w-full h-[350px] lg:h-[500px] object-cover shadow-inner" alt="Mobile app interface showcasing activity feed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjcYo9cCtn-3E-cV7gDCrrZU4M7fr0HL1TfhylAv6sekIKsmtn__zC4RlCUG1iQka8TMbM6-9ARVYXiMIP9EnqChtBJ-Rrm91_pGhpvrU322jxOICCW26dv_1kT2HOz4zH7Nwb7voY3B5IBSxU6472wvYmVzJ6VEVPO32aCTuWmjr-ieu5YVLr0IvzB3Ia65EfCMpzQTAh6VdfDNk-ssmG512zur2EYh3KFafGP5r6keBan_B_oN654fMFerrefo1GL-cHCd1dnVY"/>
              </div>
              
              <div className="absolute -top-6 lg:-top-10 -right-8 lg:-right-16 bg-white p-4 rounded-xl shadow-xl rotate-[8deg] z-30 max-w-[150px] lg:max-w-[180px]">
                <p className="font-script text-primary text-lg lg:text-xl mb-1 italic">New Rally!</p>
                <p className="text-[10px] lg:text-xs font-bold text-on-surface-variant">Sunday Tennis at 10 AM</p>
              </div>
              
              <div className="absolute bottom-4 lg:bottom-10 -left-8 lg:-left-16 bg-secondary-container p-4 rounded-xl shadow-xl -rotate-[12deg] z-10 max-w-[180px] lg:max-w-[200px]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-on-secondary-container text-sm lg:text-base">local_fire_department</span>
                  <p className="text-[10px] lg:text-xs font-bold text-on-secondary-container">TRENDING NEAR YOU</p>
                </div>
                <p className="text-xs lg:text-sm font-black text-on-secondary-container">"Taco Tuesday" in Brooklyn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Use Cases Bento Grid */}
      <section id="features" className="px-6 py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-4">Whatever you're into.</h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">Connecting you with the right person for the right moment. No profiles to swipe, just activities to join.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto lg:h-[700px]">
            {/* Sports Partner */}
            <div className="md:col-span-8 bg-surface-container-lowest rounded-lg overflow-hidden group relative min-h-[350px]">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Two people playing basketball in an urban court" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9n_TmFmmWVhNoEBf6Qj5kc_gv5myGu-pycS--hyUGK0WKq9AYSTku3RVL7r2-Kl301hyhJERXa-4cUWDrHnsBzIXQoFoe8UhOQMrrKEq3ZkfihupnuYTlCcT9C4EtwtYnXazRjhJEHz22MSZMMZ42Yw2hiXM0a_PMISMq8i75cMuydBIP196xWVDdJ_cYO0S4Uz743tEJgha5H1sa3iCCsZZq7JSiNLfK08hc3pS9NTDVOER0y4QXbjFbg3UNFagRO-sNHocyb6E"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent flex flex-col justify-end p-8">
                <span className="bg-primary text-on-primary w-fit px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-md">SPORTS</span>
                <h3 className="text-3xl font-bold text-white mb-2">Finding a sports partner</h3>
                <p className="text-white/80 max-w-md">Never miss a match because you're one short. From pickleball to basketball.</p>
              </div>
            </div>
            {/* Coding Companion */}
            <div className="md:col-span-4 bg-primary-container rounded-lg p-8 flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
              <div className="absolute -right-10 -bottom-10 opacity-20 transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-5">
                <span className="material-symbols-outlined text-[180px] text-on-primary-container">code</span>
              </div>
              <div className="relative z-10">
                <span className="bg-surface-container-lowest text-primary px-3 py-1 rounded-full text-xs font-bold shadow-sm">TECH</span>
                <h3 className="text-3xl font-bold text-on-primary-container mt-4 mb-4">Coding companion</h3>
                <p className="text-on-primary-container/80">Pair program at a cafe or hack on a weekend project together.</p>
              </div>
              <div className="relative z-10 mt-8">
                <div className="flex items-center gap-2 text-on-primary-container font-bold cursor-pointer hover:bg-white/10 w-fit px-4 py-2 rounded-lg transition-colors -ml-4">
                  <span>Find yours</span>
                  <span className="material-symbols-outlined">arrow_forward</span>
                </div>
              </div>
            </div>
            {/* Food Explorer */}
            <div className="md:col-span-4 bg-secondary-container rounded-lg p-8 flex flex-col justify-between group min-h-[300px]">
              <div className="relative z-10">
                <span className="bg-white text-secondary px-3 py-1 rounded-full text-xs font-bold shadow-sm">LIFESTYLE</span>
                <h3 className="text-3xl font-bold text-on-secondary-container mt-4 mb-4">Food explorer</h3>
                <p className="text-on-secondary-container/80">Try that new popup ramen bar without sitting alone.</p>
              </div>
              <img className="w-24 h-24 rounded-full object-cover border-4 border-white mt-8 group-hover:scale-110 transition-transform shadow-lg" alt="Vibrant close up of ramen noodles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlKxsVKn9HsMAfNOVISLVnZdTeT0MAMk4TzJuUUrQRgO94k8cjEd8dFVs-kqXfMMtTNlaIsC3AZ_3RBN1ruJoqyhrhU196w3IY1e-Sh6jhverhravhUT_CbvReQcj7R14SMofaSTvWB7vjzvDW9U2VlweaZp6lKhdJNNiCzv1NyWBDTFDJOlaC9X4SPZ9BqK-MjYpSLgXpHh9vDpy3_dN5D7dIcV6dIwJAjYTA1nCm8cM3qyiXWN95nbo_81Ath5vgPW_crWjZ1H0"/>
            </div>
            {/* Solo Travel Buddy */}
            <div className="md:col-span-8 bg-surface-container-highest rounded-lg overflow-hidden group relative min-h-[350px]">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Friends hiking through a forest trail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4gUI-qi1eCgkdYEHsYMHqI5SO-OwaGrV2tEMudMB-Y2nwykPlpJ-88pSng6UKz53R8JFhD0cV2ITPeqg3Z3un4qrwvAVjYtHdLV-6O1cFHQogjMk_qG2wtYHWfOvY8QGj2WhoxwP6-IYV7u2EyadGt9AE746j3JiENj2capJn7cW6URxra9fPNbaRbeKHfE6CbFbX2bjNfcm3JKgao1Y6JLPOIofWKwGaYHvj4CtDCbcsdoiOBxbWGXbHG0DuPZBnGxHhLSN1BTE"/>
              <div className="absolute inset-0 bg-gradient-to-t from-[#280056]/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="bg-tertiary text-on-tertiary w-fit px-3 py-1 rounded-full text-xs font-bold mb-3 shadow-md">TRAVEL</span>
                <h3 className="text-3xl font-bold text-white mb-2">Solo travel buddy</h3>
                <p className="text-white/80 max-w-md">Connect with fellow travelers in your city for day trips and museum crawls.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rallyo Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl lg:text-5xl font-black mb-8 leading-tight">Why Rallyo? Because profiles are boring.</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Hyper-local Focus</h4>
                  <p className="text-on-surface-variant">We find people within blocks, not miles. True spontaneity happens when connection is just around the corner.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">bolt</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Activity-First, Not Profile-First</h4>
                  <p className="text-on-surface-variant">Stop browsing resumes. Start browsing things to do. The best friendships start with a shared "Let's go!"</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-surface-container-high flex items-center justify-center shadow-inner">
                  <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Built for Real Moments</h4>
                  <p className="text-on-surface-variant">Our "Kinetic" interface encourages action, not endless scrolling. Use the app to get off the app.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative mt-8 lg:mt-0">
            <div className="rounded-xl overflow-hidden shadow-2xl relative pt-[125%] sm:pt-[100%]">
              <img className="absolute top-0 left-0 w-full h-full object-cover" alt="A diverse group of friends laughing together in a sunlit city street" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_a1cWQn-xe2R_0FXf3FTx2cPORkS1nOfCS86XK6C6u1DPjZoeOzS9HZ76v6fxk6ofPU-_yyl5mDxcasCQke5Y7x-T1GIQTJEHs_ofpYIEF14cfiJcJ5rrbPnxlcZOtN8gU2dpHaWPsPWD5dREtQvDH0DVQO8DOMQxAD8wRMNtA5AV2YWLGoQhEaFb5udSCiYJzIjnovAUCnsdwhc2ng6eyPF3tlBQMsX-_R_TpjvvUJHhfI_61NPq69u8x9tF21SmqHTD--7Flbk"/>
            </div>
            <div className="absolute -bottom-10 -right-4 lg:bottom-10 lg:-right-20 bg-brand-gradient p-8 rounded-lg shadow-2xl max-w-sm text-on-primary">
              <span className="material-symbols-outlined text-4xl mb-4 opacity-80">format_quote</span>
              <p className="text-xl font-bold leading-snug mb-4">"I found a regular tennis partner and two new best friends in my first week. It just feels... natural."</p>
              <p className="font-bold opacity-80">— Jordan, Lower East Side</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="px-6 py-24 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-black mb-16">How to Rallyo.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="relative">
              <div className="text-[120px] font-black text-surface-container opacity-50 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 tracking-tighter">01</div>
              <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">add_circle</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Create an Event</h4>
              <p className="text-on-surface-variant px-4">Got a plan? "Anyone want to grab pizza in Dumbo tonight?" Create your event in seconds.</p>
            </div>
            <div className="relative">
              <div className="text-[120px] font-black text-surface-container opacity-50 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 tracking-tighter">02</div>
              <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-sm hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">person_add</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Nearby People Join</h4>
              <p className="text-on-surface-variant px-4">Nearby users see your event and join. Review common interests and vibe in the mini-chat.</p>
            </div>
            <div className="relative">
              <div className="text-[120px] font-black text-surface-container opacity-50 absolute -top-16 left-1/2 -translate-x-1/2 -z-10 tracking-tighter">03</div>
              <div className="mb-6 mx-auto w-24 h-24 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">celebration</span>
              </div>
              <h4 className="text-2xl font-bold mb-4">Do the Activity</h4>
              <p className="text-on-surface-variant px-4">Meet up, do the activity together, and enjoy the kinetic energy of real-world connection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Waitlist CTA Section */}
      <section id="waitlist" className="px-6 py-24 bg-surface max-w-7xl mx-auto">
        <WaitlistForm />
      </section>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-xl w-full py-12 border-t border-zinc-100 font-body text-sm tracking-wide">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6 bg-transparent">
          <div className="text-3xl font-black tracking-tighter text-violet-700 dark:text-violet-400">Rallyo</div>
          <div className="flex flex-wrap justify-center gap-8 font-bold">
            <a className="text-zinc-500 hover:text-pink-500 transition-colors hover:-translate-y-[2px]" href="#">Privacy</a>
            <a className="text-zinc-500 hover:text-pink-500 transition-colors hover:-translate-y-[2px]" href="#">Terms</a>
            <a className="text-zinc-500 hover:text-pink-500 transition-colors hover:-translate-y-[2px]" href="#">Twitter</a>
            <a className="text-zinc-500 hover:text-pink-500 transition-colors hover:-translate-y-[2px]" href="#">Instagram</a>
            <a className="text-zinc-500 hover:text-pink-500 transition-colors hover:-translate-y-[2px]" href="#">TikTok</a>
          </div>
          <div className="text-zinc-400 font-medium">© 2024 Rallyo. The Vibrant Social Kinetic.</div>
        </div>
      </footer>
    </main>
  );
}
