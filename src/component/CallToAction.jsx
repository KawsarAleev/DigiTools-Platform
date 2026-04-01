export default function CallToAction() {
  return (
    <div className="bg-gradient-to-r from-violet-600 to-purple-500 py-24 text-center text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready To Transform Your Workflow?
        </h2>
        <p className="opacity-90 mb-10 text-lg max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-violet-600 font-semibold py-3 px-10 rounded-full hover:bg-gray-100 transition-colors">
            Explore Products
          </button>
          <button className="border-2 border-white/30 bg-transparent text-white font-semibold py-3 px-10 rounded-full hover:bg-white/10 transition-colors">
            View Pricing
          </button>
        </div>
        <p className="opacity-70 text-sm mt-8">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </div>
  );
}