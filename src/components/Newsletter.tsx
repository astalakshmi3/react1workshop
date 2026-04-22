const Newsletter = () => {
    return (
        <section className="mt-12 bg-slate-900 py-16 text-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:justify-between gap-10">
                    <div className="max-w-xl space-y-4">
                        <h2 className="text-3xl font-black tracking-tight sm:text-4xl uppercase italic">
                            Join the LITE.CLUB
                        </h2>
                        <p className="text-slate-400 font-medium leading-relaxed">
                            Subscribe to our newsletter and get 15% off your first order.
                        </p>
                    </div>

                    <form className="w-full max-w-md">
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-sm text-white"
                            />
                            <button
                                type="submit"
                                className="rounded-2xl bg-blue-600 px-8 py-4 text-sm font-black uppercase tracking-widest text-white"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;