export default function Prices() {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-gray-300">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Pricing Plans</h2>
        <p className="text-lg leading-relaxed mb-8">
          Choose the plan that best suits your needs and start your journey to greatness today.
        </p>
        <div className="flex flex-wrap justify-center space-x-4">
          <div className="bg-gray-700 bg-opacity-75 rounded-lg p-8 max-w-xs text-left mb-4">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Basic</h3>
            <p className="text-lg leading-relaxed mb-4">$19.99/month</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to all career paths</li>
              <li>Daily AI-generated tasks</li>
              <li>Monthly performance reports</li>
            </ul>
          </div>
          <div className="bg-gray-700 bg-opacity-75 rounded-lg p-8 max-w-xs text-left mb-4">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Pro</h3>
            <p className="text-lg leading-relaxed mb-4">$49.99/month</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Everything in Basic</li>
              <li>Personalized coaching</li>
              <li>Exclusive webinars</li>
            </ul>
          </div>
          <div className="bg-gray-700 bg-opacity-75 rounded-lg p-8 max-w-xs text-left mb-4">
            <h3 className="text-2xl font-semibold mb-4 text-purple-300">Premium</h3>
            <p className="text-lg leading-relaxed mb-4">$99.99/month</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Everything in Pro</li>
              <li>1-on-1 mentorship</li>
              <li>Priority support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
