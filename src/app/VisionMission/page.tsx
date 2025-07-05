import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Palette } from "lucide-react";
import Link from "next/link";

export default function VisionMissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className=" mt-40 mb-20 min-h-screen bg-gray-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Vision and Mission Section */}
            <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
                Vision and Mission
              </h1>

              {/* Our Vision */}
              <div className="mb-12">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
                  Our Vision
                </h2>
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-gray-800 font-medium leading-relaxed">
                    Our Vision is to become the world’s most trusted and
                    forward-thinking manufacturer, service provider, and
                    complete solution partner in the steel industry. We aim to
                    lead through relentless innovation, uncompromising quality,
                    and a deep commitment to customer satisfaction — delivering
                    not just products, but value-driven solutions that power
                    infrastructure, industry, and progress around the globe.
                  </p>
                </div>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-6">
                  Our Mission
                </h2>
                <p className="text-gray-800 leading-relaxed text-justify">
                  Our mission is to deliver superior-quality steel products and
                  comprehensive services to a global clientele, driven by a
                  commitment to cutting-edge technology, operational excellence,
                  and customer satisfaction. We foster a workplace culture that
                  empowers motivated employees, encourages innovation, and
                  embraces continuous improvement at every level of the
                  organization. By adhering to the highest standards of
                  integrity, work ethics, and corporate responsibility, we aim
                  to create lasting value for our customers while ensuring
                  sustainable growth and consistent returns for our
                  shareholders. Our focus is not only on meeting current demands
                  but also on anticipating future needs—positioning ourselves as
                  a responsible and resilient leader in the steel industry.
                </p>
              </div>
            </div>

            {/* PEB Awareness Section */}
            <div className="space-y-6">
              {/* PEB Awareness Card */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    PEB Awareness
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    Every building is unique to the needs of the owner, our
                    pre-engineered steel buildings enables to achieve that
                    easily
                  </p>
                  <Button
                    className="w-full bg-black hover:bg-gray-800 text-white font-medium"
                    size="sm"
                  >
                    NOMENCLATURE
                  </Button>
                </CardContent>
              </Card>

              {/* Virtual Building Painter Card */}
              <Card className="bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 text-center mb-6">
                    Virtual Building Painter
                  </h3>

                  {/* Building Icon Placeholder */}
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <Building2 className="w-32 h-24 text-gray-300" />
                      <Palette className="w-8 h-8 text-blue-500 absolute -bottom-2 -right-2" />
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      href="#"
                      className="text-blue-500 hover:text-blue-600 font-medium text-sm"
                    >
                      Try Virtual Painter
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Company Anniversary */}
              <div className="text-center text-sm text-gray-600">
                <span className="text-blue-500 font-medium">GAith Steel</span>{" "}
                Holding Company celebrating{" "}
                <span className="font-bold">
                  48<sup>th</sup>
                </span>{" "}
                anniversary.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
