function About() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <div className="text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-800">
          About Virar Eats
        </h1>
        <p className="mb-8 text-lg text-gray-600">
          Discover the best flavors of Virar
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-600">
            Virar Eats connects food lovers with the finest local restaurants in
            Virar. We're passionate about showcasing the rich culinary heritage
            of our city and making it accessible to everyone with just a few
            clicks.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Curated selection of top-rated restaurants
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Real-time menu updates and pricing
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              User-friendly ordering experience
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Supporting local businesses
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-gradient-to-r from-orange-400 to-red-500 p-8 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Taste the Best of Virar</h2>
        <p className="mb-6 text-lg">
          From traditional street food to fine dining experiences, explore the
          diverse culinary landscape that makes Virar special.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="bg-opacity-20 rounded-full bg-white px-4 py-2 text-black">
            🍛 North Indian
          </span>
          <span className="bg-opacity-20 rounded-full bg-white px-4 py-2 text-black">
            🍕 Italian
          </span>
          <span className="bg-opacity-20 rounded-full bg-white px-4 py-2 text-black">
            🍜 Chinese
          </span>
          <span className="bg-opacity-20 rounded-full bg-white px-4 py-2 text-black">
            🥘 South Indian
          </span>
          <span className="bg-opacity-20 rounded-full bg-white px-4 py-2 text-black">
            🍔 Fast Food
          </span>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800">
          Get in Touch
        </h2>
        <p className="mb-4 text-gray-600">
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <span>contact@virareats.com</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📍</span>
            <span>Virar, Maharashtra</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
