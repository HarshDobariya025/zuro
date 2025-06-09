import { Check, Banknote, ChevronRight } from "lucide-react";

export default function PageSection() {
  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-white px-2 py-1 rounded-full text-sm font-medium mb-4">
          <div className="flex justify-center items-center bg-[#B4ff8B] h-10 w-10 rounded-full">
            <Banknote />
          </div>
          <h2 className="text-lg">Pricing</h2>
        </div>
        <h2 className="text-3xl md:text-5xl font-medium">
          <div>Simple,Transparent </div>
          <div>Pricing</div>
        </h2>
      </div>

      <div className="flex justify-center flex-wrap gap-4 scale-90">
        <div className="bg-white rounded-2xl overflow-hidden p-2 w-[350px] h-[430px]">
          <div className="bg-[#b8ff8d] rounded-2xl p-4">
            <div className="inline-block bg-white rounded-full px-4 py-2 text-sm font-semibold text-gray-800 mb-6 shadow-sm">
              Free
            </div>
            <div className="text-4xl font-medium text-gray-900">$0/month</div>
          </div>

          <div className="px-2 py-4">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ideal for solo users or small teams just getting started.
            </p>

            <button className="w-full h-[52px] bg-[#1B7564] text-white rounded-full py-4 px-6 flex items-center justify-center mb-8 font-semibold cursor-pointer">
              <span>Get Template</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>

            <ul className="space-y-3">
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">1 user</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">Basic analytics</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">Community support</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden w-[350px] h-[475px]">
          <div className="bg-[#156758] p-2 rounded-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-4">
              <div className="inline-block bg-[#b8ff8d] rounded-full px-4 py-2 text-sm font-semibold text-gray-800 mb-6 shadow-sm">
                Pro
              </div>
              <div className="text-4xl font-medium text-gray-900">
                $49/month
              </div>
            </div>

            <div className="px-2 py-4">
              <p className="text-white mb-8 leading-relaxed">
                Ideal for solo users or small teams just getting started.
              </p>

              <button className="w-full h-[52px] bg-[#b8ff8d] rounded-full py-4 px-6 flex items-center justify-center font-semibold cursor-pointer">
                <span>Get Template</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </button>
            </div>
          </div>

          <ul className="space-y-3 p-2 mt-2">
            <li className="flex items-center gap-x-2">
              <Check className="h-4 w-4" />
              <span className="text-gray-700">Up to 10 users</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-4 w-4" />
              <span className="text-gray-700">Advanced analytics</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-4 w-4" />
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-center gap-x-2">
              <Check className="h-4 w-4" />
              <span className="text-gray-700">Unlimited integrations</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl overflow-hidden p-2 w-[350px] h-[465px]">
          <div className="bg-[#b8ff8d] rounded-2xl p-4">
            <div className="inline-block bg-white rounded-full px-4 py-2 text-sm font-semibold text-gray-800 mb-6 shadow-sm">
              Enterprise
            </div>
            <div className="text-4xl font-medium text-gray-900">
              Custom Pricing
            </div>
          </div>

          <div className="px-2 py-4">
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ideal for solo users or small teams just getting started.
            </p>

            <button className="w-full h-[52px] bg-[#1B7564] text-white rounded-full py-4 px-6 flex items-center justify-center mb-8 font-semibold cursor-pointer">
              <span>Contact Sales</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>

            <ul className="space-y-3">
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">Unlimited users</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">SLA-backed uptime</span>
              </li>
              <li className="flex items-center gap-x-2">
                <Check className="h-4 w-4" />
                <span className="text-gray-700">Custom integrations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
